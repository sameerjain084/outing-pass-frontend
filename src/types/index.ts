export type UserRole = 'student' | 'warden' | 'guard';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface OutingRequest {
  id: string;
  studentId: string;
  studentName: string;
  reason: string;
  urgencyScore: number;
  category: 'medical' | 'casual' | 'shopping' | 'emergency' | 'other';
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: Date;
  outTime?: Date;
  inTime?: Date;
  qrCode?: string;
  wardenNotes?: string;
}

export interface QRScanLog {
  id: string;
  requestId: string;
  studentName: string;
  scanType: 'exit' | 'entry';
  scannedAt: Date;
  guardName: string;
}