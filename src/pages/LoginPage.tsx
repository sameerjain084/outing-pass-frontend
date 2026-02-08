import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Shield, Users, Camera } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');

  const floatingIcons = [
    { Icon: Shield, delay: 0, color: 'text-blue-500' },
    { Icon: Users, delay: 0.2, color: 'text-purple-500' },
    { Icon: Camera, delay: 0.4, color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-10`}
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: 360,
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-sm border border-white/20">
          {/* Left Side - Project Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
          >
            <div className="h-full flex flex-col justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={40} className="text-white" />
                  <h1 className="text-3xl font-bold">SmartOutPass</h1>
                </div>
                <p className="text-blue-100 text-lg mb-2">
                  Intelligent Cloud-Based Outing Pass System
                </p>
                <p className="text-blue-200 text-sm">
                  Automating Campus Security with Microservices and AI-Driven Analysis
                </p>
              </motion.div>

              <div className="space-y-4 mt-8">
                {[
                  { icon: '🚀', text: 'AI-Powered Urgency Detection' },
                  { icon: '🔐', text: 'Secure JWT Authentication' },
                  { icon: '📱', text: 'Dynamic QR Code Passes' },
                  { icon: '⚡', text: 'Real-time Status Updates' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-blue-100">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2 p-8 bg-white"
          >
            <div className="h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className="inline-block p-3 rounded-full bg-blue-100 mb-4"
                >
                  <LogIn className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600">
                  Please select your role and sign in to continue
                </p>
              </div>

              {/* Role Selector */}
              <div className="mb-6">
                <p className="text-gray-700 mb-3 font-medium">Select Role:</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { role: 'student', label: 'Student', color: 'bg-blue-100 text-blue-700' },
                    { role: 'warden', label: 'Warden', color: 'bg-purple-100 text-purple-700' },
                    { role: 'guard', label: 'Security Guard', color: 'bg-green-100 text-green-700' },
                  ].map((item) => (
                    <motion.button
                      key={item.role}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRole(item.role)}
                      className={`p-4 rounded-lg font-medium transition-all ${item.color} ${selectedRole === item.role ? 'ring-2 ring-offset-2 ring-opacity-50' : ''} ${selectedRole === item.role ? 'ring-blue-500' : ''}`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {selectedRole && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`${selectedRole}@college.edu`}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter password"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => {
                      // Navigate based on selected role
                      if (selectedRole === 'student') {
                        window.location.href = '/student';
                      } else if (selectedRole === 'warden') {
                        window.location.href = '/warden';
                      } else if (selectedRole === 'guard') {
                        window.location.href = '/guard';
                      }
                    }}
                  >
                    Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                  </motion.button>
                </motion.div>
              )}

              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Demo Credentials: {selectedRole ? `${selectedRole}@college.edu` : 'select role'} / password123
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;