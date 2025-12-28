import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '../data/mockData';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState(calendarEvents);
  const [view, setView] = useState('month');

  const eventStyleGetter = (event) => {
    const backgroundColor = '#3b82f6';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return { style };
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    const action = window.confirm(`Delete event "${event.title}"?`);
    if (action) {
      setEvents(events.filter(e => e.id !== event.id));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage events and schedules</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="h-96 md:h-[600px]">
          <style jsx global>{`
            .rbc-calendar {
              color: ${document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'};
            }
            .rbc-header {
              background-color: ${document.documentElement.classList.contains('dark') ? '#374151' : '#f9fafb'};
              color: ${document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'};
              border-bottom: 1px solid ${document.documentElement.classList.contains('dark') ? '#4b5563' : '#e5e7eb'};
            }
            .rbc-month-view {
              border: 1px solid ${document.documentElement.classList.contains('dark') ? '#4b5563' : '#e5e7eb'};
            }
            .rbc-day-bg {
              background-color: ${document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff'};
            }
            .rbc-day-bg:hover {
              background-color: ${document.documentElement.classList.contains('dark') ? '#374151' : '#f9fafb'};
            }
            .rbc-date-cell {
              color: ${document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'};
            }
            .rbc-off-range-bg {
              background-color: ${document.documentElement.classList.contains('dark') ? '#111827' : '#f9fafb'};
            }
            .rbc-today {
              background-color: ${document.documentElement.classList.contains('dark') ? '#1e40af' : '#dbeafe'};
            }
            .rbc-toolbar {
              margin-bottom: 20px;
            }
            .rbc-toolbar button {
              background-color: ${document.documentElement.classList.contains('dark') ? '#374151' : '#ffffff'};
              color: ${document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000'};
              border: 1px solid ${document.documentElement.classList.contains('dark') ? '#4b5563' : '#d1d5db'};
              padding: 8px 16px;
              border-radius: 6px;
              margin: 0 2px;
            }
            .rbc-toolbar button:hover {
              background-color: ${document.documentElement.classList.contains('dark') ? '#4b5563' : '#f3f4f6'};
            }
            .rbc-toolbar button.rbc-active {
              background-color: #3b82f6;
              color: white;
              border-color: #3b82f6;
            }
          `}</style>
          
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={setView}
            eventPropGetter={eventStyleGetter}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            popup
            className="dark:text-white"
          />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {events
            .filter(event => moment(event.start).isAfter(moment()))
            .sort((a, b) => moment(a.start).diff(moment(b.start)))
            .slice(0, 5)
            .map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {moment(event.start).format('MMM DD, YYYY - HH:mm')}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {moment(event.start).fromNow()}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;