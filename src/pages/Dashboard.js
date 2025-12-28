import React from 'react';
import { Users, Ticket, DollarSign, Film } from 'lucide-react';
import { dashboardStats } from '../data/mockData';

const Dashboard = () => {
  const cards = [
    {
      title: 'Total Users',
      value: dashboardStats.users.toLocaleString(),
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Tickets Sold',
      value: dashboardStats.tickets.toLocaleString(),
      icon: Ticket,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Revenue',
      value: `$${dashboardStats.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-yellow-500',
      change: '+15%'
    },
    {
      title: 'Active Movies',
      value: dashboardStats.movies.toString(),
      icon: Film,
      color: 'bg-purple-500',
      change: '+3%'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome to your movie booking admin panel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{card.value}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">{card.change} from last month</p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <Ticket className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Avatar 2 - Screen 1</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 tickets booked</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2 min ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Movies</h3>
          <div className="space-y-4">
            {['Avatar 2', 'Top Gun Maverick', 'Black Panther', 'Thor'].map((movie, index) => (
              <div key={movie} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{movie}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{Math.floor(Math.random() * 1000) + 500} bookings</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  ${Math.floor(Math.random() * 50000) + 10000}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;