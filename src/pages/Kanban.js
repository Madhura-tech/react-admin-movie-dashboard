import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Plus, MoreHorizontal } from 'lucide-react';
import { kanbanData } from '../data/mockData';

const Kanban = () => {
  const [columns, setColumns] = useState(kanbanData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newItems = Array.from(start.items);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);

      const newColumn = {
        ...start,
        items: newItems,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    const startItems = Array.from(start.items);
    const [removed] = startItems.splice(source.index, 1);
    const newStart = {
      ...start,
      items: startItems,
    };

    const finishItems = Array.from(finish.items);
    finishItems.splice(destination.index, 0, removed);
    const newFinish = {
      ...finish,
      items: finishItems,
    };

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  const addTask = (columnId) => {
    const content = window.prompt('Enter task content:');
    if (content) {
      const newTask = {
        id: Date.now().toString(),
        content,
      };

      const column = columns[columnId];
      const newColumn = {
        ...column,
        items: [...column.items, newTask],
      };

      setColumns({
        ...columns,
        [columnId]: newColumn,
      });
    }
  };

  const getColumnColor = (columnId) => {
    switch (columnId) {
      case 'todo':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20';
      case 'inprogress':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20';
      case 'done':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20';
      default:
        return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kanban Board</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage tasks and workflow</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.values(columns).map((column) => (
            <div key={column.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {column.title} ({column.items.length})
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => addTask(column.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`p-4 min-h-[400px] transition-colors ${
                      snapshot.isDraggingOver ? getColumnColor(column.id) : ''
                    }`}
                  >
                    <div className="space-y-3">
                      {column.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm cursor-move transition-all ${
                                snapshot.isDragging
                                  ? 'shadow-lg rotate-2 scale-105'
                                  : 'hover:shadow-md'
                              }`}
                            >
                              <p className="text-sm text-gray-900 dark:text-white">
                                {item.content}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center space-x-2">
                                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    Admin
                                  </span>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500">
                                  {Math.floor(Math.random() * 7) + 1}d
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;