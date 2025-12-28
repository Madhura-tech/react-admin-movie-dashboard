import moment from 'moment';

export const dashboardStats = {
  users: 12543,
  tickets: 8921,
  revenue: 245680,
  movies: 156
};

export const chartData = [
  { name: 'Jan', revenue: 4000, tickets: 240 },
  { name: 'Feb', revenue: 3000, tickets: 139 },
  { name: 'Mar', revenue: 2000, tickets: 980 },
  { name: 'Apr', revenue: 2780, tickets: 390 },
  { name: 'May', revenue: 1890, tickets: 480 },
  { name: 'Jun', revenue: 2390, tickets: 380 }
];

export const moviesData = [
  { id: 1, title: 'Avatar 2', genre: 'Sci-Fi', rating: 8.5, bookings: 1250, revenue: 45000, status: 'Active' },
  { id: 2, title: 'Top Gun Maverick', genre: 'Action', rating: 9.2, bookings: 2100, revenue: 78000, status: 'Active' },
  { id: 3, title: 'Black Panther', genre: 'Action', rating: 8.8, bookings: 1800, revenue: 65000, status: 'Active' },
  { id: 4, title: 'Minions', genre: 'Animation', rating: 7.5, bookings: 950, revenue: 32000, status: 'Inactive' },
  { id: 5, title: 'Thor Love Thunder', genre: 'Action', rating: 7.8, bookings: 1400, revenue: 52000, status: 'Active' }
];

export const calendarEvents = [
  {
    id: 1,
    title: 'Avatar 2 Premiere',
    start: moment().add(2, 'days').toDate(),
    end: moment().add(2, 'days').add(2, 'hours').toDate(),
  },
  {
    id: 2,
    title: 'Staff Meeting',
    start: moment().add(5, 'days').toDate(),
    end: moment().add(5, 'days').add(1, 'hours').toDate(),
  },
  {
    id: 3,
    title: 'Movie Review',
    start: moment().add(7, 'days').toDate(),
    end: moment().add(7, 'days').add(3, 'hours').toDate(),
  }
];

export const kanbanData = {
  'todo': {
    id: 'todo',
    title: 'To Do',
    items: [
      { id: '1', content: 'Review new movie submissions' },
      { id: '2', content: 'Update theater capacity' },
      { id: '3', content: 'Plan marketing campaign' }
    ]
  },
  'inprogress': {
    id: 'inprogress',
    title: 'In Progress',
    items: [
      { id: '4', content: 'Implement new booking system' },
      { id: '5', content: 'Design mobile app UI' }
    ]
  },
  'done': {
    id: 'done',
    title: 'Done',
    items: [
      { id: '6', content: 'Launch summer movie festival' },
      { id: '7', content: 'Update payment gateway' }
    ]
  }
};