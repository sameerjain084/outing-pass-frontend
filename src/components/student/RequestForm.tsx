
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, Calendar, Clock } from 'lucide-react';
import { mockDataService } from '../../services/mockDataService';

interface RequestFormProps {
  onSubmitSuccess?: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmitSuccess }) => {
  const [reason, setReason] = useState('');
  const [category, setCategory] = useState<'medical' | 'casual' | 'shopping' | 'emergency' | 'other' | 'academic'>('casual');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;

    setSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        const newRequest = mockDataService.submitRequest({
          studentId: 's001', // Current student
          studentName: 'Alex Johnson',
          reason,
          urgencyScore: 0, // Will be calculated by service
          category,
        });

        setMessage(`✅ Request submitted! Urgency score: ${newRequest.urgencyScore}%`);
        setReason('');
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } catch (error) {
        setMessage('❌ Error submitting request');
      } finally {
        setSubmitting(false);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Send className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">New Outing Request</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">
            <Calendar className="inline w-4 h-4 mr-2" />
            Request Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { value: 'emergency', label: '🚨 Emergency', color: 'bg-red-100 text-red-700 hover:bg-red-200' },
              { value: 'medical', label: '🏥 Medical', color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
              { value: 'casual', label: '😊 Casual', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
              { value: 'shopping', label: '🛒 Shopping', color: 'bg-green-100 text-green-700 hover:bg-green-200' },
              { value: 'academic', label: '📚 Academic', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
            ].map((cat) => (
              <motion.button
                key={cat.value}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(cat.value as any)}
                className={`p-3 rounded-lg font-medium transition-colors ${cat.color} ${
                  category === cat.value ? 'ring-2 ring-offset-2 ring-current' : ''
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Reason Input */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">
            <AlertCircle className="inline w-4 h-4 mr-2" />
            Reason for Outing
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Describe your reason for going out... (AI will analyze urgency)"
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            Be specific. AI will analyze your reason and assign an urgency score.
          </p>
        </div>

        {/* Estimated Time */}
        <div>
          <label className="block text-gray-700 mb-3 font-medium">
            <Clock className="inline w-4 h-4 mr-2" />
            Estimated Return Time
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Within 2 hours</option>
            <option>2-4 hours</option>
            <option>4-8 hours</option>
            <option>Overnight (with permission)</option>
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={submitting || !reason.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-lg font-semibold shadow-lg transition-all ${
            submitting || !reason.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl'
          }`}
        >
          {submitting ? (
            <span className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Submitting...
            </span>
          ) : (
            'Submit Request for Approval'
          )}
        </motion.button>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg text-center ${
              message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default RequestForm;
