import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import { AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

const WardenDashboardPage: React.FC = () => {
  const urgentStats = [
    { label: 'High Urgency', value: '8', icon: AlertTriangle, color: 'bg-red-500' },
    { label: 'Approved Today', value: '12', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Pending Review', value: '5', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Total Students', value: '450', icon: Users, color: 'bg-blue-500' },
  ];

  const pendingRequests = [
    { id: 1, student: 'Alex Johnson', reason: 'Medical Emergency - Fever 102°F', urgency: 98, category: 'Medical', time: '10 min ago' },
    { id: 2, student: 'Sarah Miller', reason: 'Dentist Appointment', urgency: 75, category: 'Medical', time: '25 min ago' },
    { id: 3, student: 'Mike Chen', reason: 'Buy groceries for hostel', urgency: 30, category: 'Shopping', time: '1 hour ago' },
    { id: 4, student: 'Priya Sharma', reason: 'Library books return', urgency: 20, category: 'Academic', time: '2 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="warden" userName="Dr. Robert Brown" />
      
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Warden Dashboard
              </h1>
              <p className="text-gray-600">
                Review and manage outing requests with AI assistance
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Generate Report
            </motion.button>
          </div>
        </motion.div>

        {/* Urgency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {urgentStats.map((stat, index) => (
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

        {/* Pending Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Pending Requests</h2>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              Needs Attention
            </span>
          </div>
          
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <motion.div
                key={request.id}
                whileHover={{ x: 5 }}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-bold text-gray-800">{request.student}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        request.urgency > 80 ? 'bg-red-100 text-red-700' :
                        request.urgency > 50 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {request.category}
                      </span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-full rounded-full ${
                              request.urgency > 80 ? 'bg-red-500' :
                              request.urgency > 50 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${request.urgency}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{request.urgency}% Urgent</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{request.reason}</p>
                    <p className="text-sm text-gray-500">{request.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium"
                    >
                      Approve
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium"
                    >
                      Reject
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Analysis Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🤖</span>
                <h2 className="text-xl font-bold">AI-Powered Analysis</h2>
              </div>
              <p className="text-blue-100">
                Gemini AI analyzes request reasons and assigns urgency scores automatically
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-blue-200 text-sm">Accuracy Rate</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WardenDashboardPage;