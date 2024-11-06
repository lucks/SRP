export interface Report {
  id: string;
  poolId: string;
  date: string;
  ph: number;
  chlorine: number;
  alkalinity: number;
  temperature: number;
  observations: string;
  recommendations: string;
  engineerId: string;
  images?: string[];
}

export interface Pool {
  id: string;
  name: string;
  hotelId: string;
  location: string;
  capacity: number;
  type: 'indoor' | 'outdoor';
}

export interface User {
  id: string;
  name: string;
  role: 'engineer' | 'client';
  hotelId?: string;
}