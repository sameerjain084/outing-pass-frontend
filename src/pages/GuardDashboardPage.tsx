
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import { Camera, CheckCircle, Clock, Users, QrCode } from 'lucide-react';

const GuardDashboardPage: React.FC = () => {
  const scanStats = [
    { label: 'Scans Today', value: '47', icon: Camera, color: 'bg-blue-500' },
    { label: 'Active Passes', value: '12', icon: Users, color: 'bg-green-500' },
    { label: 'Pending Entry', value: '3', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Verified', value: '89%', icon: CheckCircle, color: 'bg-purple-500' },
  ];

  const recentScans = [
    { id: 1, student: 'Alex Johnson', type: 'Exit', time: '10:30 AM', status: 'valid' },
    { id: 2, student: 'Sarah Miller', type: 'Entry', time: '11:45 AM', status: 'valid' },
    { id: 3, student: 'Mike Chen', type: 'Exit', time: '02:15 PM', status: 'valid' },
    { id: 4, student: 'Priya Sharma', type: 'Exit', time: '03:30 PM', status: 'expired' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="guard" userName="Officer James Wilson" />
      
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Security Guard Dashboard
          </h1>
          <p className="text-gray-600">
            Scan QR codes and manage gate entries/exits
          </p>
        </motion.div>

        {/* Scan Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {scanStats.map((stat, index) => (
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

        {/* QR Scanner Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <QrCode size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">QR Code Scanner</h2>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center mb-6">
              <div className="w-64 h-64 border-4 border-white border-dashed rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Camera size={48} className="text-white mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Scanner Ready</p>
                  <p className="text-gray-400 text-sm">Point camera at QR code</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Simulate Scan
              </motion.button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Scanner Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Scan</span>
                <span className="text-gray-800 font-medium">10:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Battery</span>
                <span className="text-green-600 font-medium">85%</span>
              </div>
            </div>
          </motion.div>

          {/* Recent Scans */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Scans</h2>
            
            <div className="space-y-4">
              {recentScans.map((scan) => (
                <div key={scan.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h3 className="font-bold text-gray-800">{scan.student}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`px-2 py-1 rounded text-xs ${
                        scan.type === 'Exit' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {scan.type}
                      </span>
                      <span className="text-sm text-gray-500">{scan.time}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    scan.status === 'valid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {scan.status === 'valid' ? '✓ Valid' : '✗ Expired'}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800">Gate Status: <span className="text-green-600">Operational</span></p>
                  <p className="text-sm text-gray-600">All systems functioning normally</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default GuardDashboardPage;