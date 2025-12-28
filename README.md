# Movie Admin Dashboard - React & Tailwind CSS

A comprehensive React admin dashboard for movie booking system management with modern UI components and full functionality.

## 🎯 Features

### Core Dashboard Components
- ✅ **Dashboard Cards**: Users, tickets, revenue, and movie statistics
- ✅ **Calendar Integration**: react-big-calendar with event management
- ✅ **Kanban Board**: react-beautiful-dnd with drag & drop functionality
- ✅ **Analytics Charts**: Multiple chart types using Recharts
- ✅ **Dynamic Tables**: CRUD operations with filters and pagination

### UI/UX Features
- ✅ **Dark/Light Theme**: Context API with localStorage persistence
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Sidebar Navigation**: Collapsible with active state indicators
- ✅ **Topbar**: Theme toggle, notifications, and user profile
- ✅ **Smooth Animations**: Transitions and hover effects

### Technical Stack
- ✅ **React 18**: Latest React with hooks and context
- ✅ **React Router**: Client-side routing with nested routes
- ✅ **Tailwind CSS**: Utility-first CSS framework
- ✅ **Lucide Icons**: Modern icon library
- ✅ **Moment.js**: Date manipulation and formatting
- ✅ **Context API**: Global state management for theme

## 🚀 Quick Start

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm start
```

3. **Open browser**: http://localhost:3000

## 📱 Pages & Features

### 1. Dashboard
- **Stats Cards**: Real-time metrics with trend indicators
- **Recent Activity**: Latest bookings and transactions
- **Top Movies**: Performance rankings with revenue data

### 2. Movies Management
- **CRUD Operations**: Add, edit, delete movies
- **Advanced Filtering**: Search by title, genre, status
- **Pagination**: Efficient data handling
- **Status Management**: Active/Inactive movie states

### 3. Calendar
- **Event Management**: Create, edit, delete events
- **Multiple Views**: Month, week, day views
- **Drag & Drop**: Move events between dates
- **Upcoming Events**: Quick overview sidebar

### 4. Kanban Board
- **Task Management**: To-do, In Progress, Done columns
- **Drag & Drop**: Move tasks between columns
- **Add Tasks**: Quick task creation
- **Visual Feedback**: Smooth animations and hover states

### 5. Analytics
- **Revenue Charts**: Area and line charts for trends
- **Genre Distribution**: Pie chart for movie categories
- **Monthly Comparison**: Bar charts for performance metrics
- **KPI Dashboard**: Key performance indicators

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Purple**: (#8b5cf6)

### Typography
- **Font**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Sizes**: Responsive text scaling
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent padding, hover states
- **Forms**: Focus states, validation styling
- **Tables**: Striped rows, hover effects

## 📊 Data Structure

### Dashboard Stats
```javascript
{
  users: 12543,
  tickets: 8921,
  revenue: 245680,
  movies: 156
}
```

### Movie Data
```javascript
{
  id: 1,
  title: 'Avatar 2',
  genre: 'Sci-Fi',
  rating: 8.5,
  bookings: 1250,
  revenue: 45000,
  status: 'Active'
}
```

## 🔧 Customization

### Theme Configuration
- Modify `tailwind.config.js` for custom colors
- Update `ThemeContext.js` for additional theme options
- Customize dark mode classes in components

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.js`
3. Update navigation in `Sidebar.js`
4. Add corresponding icon from Lucide React

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: 1024px - 1280px (lg)
- **Large**: > 1280px (xl)

## 🎯 Performance Features

- **Code Splitting**: React.lazy for route-based splitting
- **Optimized Images**: Responsive image loading
- **Efficient Rendering**: React.memo for expensive components
- **Local Storage**: Theme and user preferences persistence

Perfect for learning React routing, context API, modern UI patterns, and building production-ready admin dashboards!