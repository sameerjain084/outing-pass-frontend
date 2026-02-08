import React from 'react';
import { motion } from 'framer-motion';
import { Bell, LogOut, User } from 'lucide-react';

interface NavbarProps {
  userRole: string;
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userRole, userName = 'John Doe' }) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-lg border-b"
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
            >
              <span className="text-white font-bold text-xl">SOP</span>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                SmartOutPass
                <span className="ml-2 text-sm font-normal bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </span>
              </h1>
              <p className="text-gray-500 text-sm">Intelligent Campus Outing System</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{userName}</p>
                <p className="text-sm text-gray-500">{userRole} Dashboard</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;