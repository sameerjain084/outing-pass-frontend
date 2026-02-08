import { api } from './api';

export interface OutingRequest {
  id: string;
  studentId: string;
  studentName: string;
  reason: string;
  urgencyScore: number;
  category: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: string;
  outTime?: string;
  inTime?: string;
  qrCode?: string;
  wardenNotes?: string;
}

export interface CreateRequestDto {
  reason: string;
  category: string;
  estimatedReturnTime: string;
}

export const outingService = {
  // Get all requests for warden
  getAllRequests: async (): Promise<OutingRequest[]> => {
    const response = await api.get('/outing-requests');
    return response.data;
  },

  // Get requests for current student
  getMyRequests: async (): Promise<OutingRequest[]> => {
    const response = await api.get('/outing-requests/my');
    return response.data;
  },

  // Submit new request
  submitRequest: async (data: CreateRequestDto): Promise<OutingRequest> => {
    const response = await api.post('/outing-requests', data);
    return response.data;
  },

  // Approve request (warden only)
  approveRequest: async (requestId: string, notes?: string): Promise<OutingRequest> => {
    const response = await api.patch(`/outing-requests/${requestId}/approve`, { notes });
    return response.data;
  },

  // Reject request (warden only)
  rejectRequest: async (requestId: string, notes?: string): Promise<OutingRequest> => {
    const response = await api.patch(`/outing-requests/${requestId}/reject`, { notes });
    return response.data;
  },

  // Scan QR code (guard only)
  scanQRCode: async (qrCode: string): Promise<{ valid: boolean; request?: OutingRequest }> => {
    const response = await api.post('/outing-requests/scan', { qrCode });
    return response.data;
  },

  // Download QR code
  downloadQRCode: async (requestId: string): Promise<Blob> => {
    const response = await api.get(`/outing-requests/${requestId}/qr-code`, {
      responseType: 'blob',
    });
    return response.data;
  },
};