import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import { Calendar, Clock, CheckCircle, User } from 'lucide-react';


const StudentDashboardPage: React.FC = () => {
  const stats = [
    { label: 'Total Requests', value: '24', icon: User, color: 'bg-blue-500' },
    { label: 'Approved', value: '18', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Pending', value: '3', icon: Clock, color: 'bg-yellow-500' },
    { label: 'This Month', value: '5', icon: Calendar, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="student" userName="Alex Johnson" />
      
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Student Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your outing requests and view pass status
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color} text-white`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Need to go out?</h2>
              <p className="text-blue-100">Submit a new outing request in seconds</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg"
            >
              + New Request
            </motion.button>
          </div>
        </motion.div>

        {/* Recent Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Requests</h2>
          <div className="space-y-4">
            {[
              { reason: 'Medical Appointment', status: 'approved', date: 'Today, 10:30 AM', urgency: 'High' },
              { reason: 'Library Study', status: 'pending', date: 'Yesterday, 3:45 PM', urgency: 'Low' },
              { reason: 'Family Function', status: 'approved', date: 'Feb 5, 2:00 PM', urgency: 'Medium' },
            ].map((request, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div>
                  <h3 className="font-medium text-gray-800">{request.reason}</h3>
                  <p className="text-sm text-gray-500">{request.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    request.status === 'approved' ? 'bg-green-100 text-green-700' :
                    request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {request.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    request.urgency === 'High' ? 'bg-red-100 text-red-700' :
                    request.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {request.urgency} Urgency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StudentDashboardPage;