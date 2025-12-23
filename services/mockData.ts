
import { Property, NewsItem, Amenity, User } from '../types';

export const mockProperties: Property[] = [
  { id: '1', plotNo: 'A-101', street: 'Pine Street', type: 'VILLA', status: 'OCCUPIED_OWNER', ownerName: 'John Doe' },
  { id: '2', plotNo: 'A-102', street: 'Pine Street', type: 'VILLA', status: 'OCCUPIED_TENANT', ownerName: 'Jane Smith', tenantName: 'Robert Wilson' },
  { id: '3', plotNo: 'B-201', street: 'Oak Avenue', type: 'HOUSE', status: 'VACANT', ownerName: 'Alice Green' },
  { id: '4', plotNo: 'B-202', street: 'Oak Avenue', type: 'VILLA', status: 'OCCUPIED_OWNER', ownerName: 'Bob Brown' },
];

export const mockNews: NewsItem[] = [
  { id: '1', title: 'Annual General Meeting 2024', date: '2024-05-15', content: 'The AGM is scheduled for next Sunday at the Clubhouse.', category: 'EVENT' },
  { id: '2', title: 'New Security Protocol', date: '2024-04-20', content: 'Biometric access for all entry points will be active from May 1st.', category: 'ANNOUNCEMENT' },
  { id: '3', title: 'Bylaws Update Q2', date: '2024-04-10', content: 'Updated garbage collection rules have been uploaded.', category: 'CIRCULAR' },
];

export const mockAmenities: Amenity[] = [
  { id: '1', name: 'Swimming Pool', description: 'Olympic size pool with separate kids area.', icon: 'Waves' },
  { id: '2', name: 'Gymnasium', description: 'Fully equipped modern fitness center.', icon: 'Dumbbell' },
  { id: '3', name: 'Community Hall', description: 'Spacious hall for private functions.', icon: 'Users' },
  { id: '4', name: 'Children\'s Park', description: 'Safe play area with modern equipment.', icon: 'Gamepad2' },
];

export const mockUsers: User[] = [
  { id: 'u1', name: 'Admin User', email: 'admin@example.com', role: 'ADMIN' },
  { id: 'u2', name: 'John Doe', email: 'john@example.com', role: 'OWNER', propertyId: '1' },
  { id: 'u3', name: 'Robert Wilson', email: 'rob@example.com', role: 'TENANT', propertyId: '2' },
];
