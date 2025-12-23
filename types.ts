
export type UserRole = 'ADMIN' | 'OWNER' | 'TENANT' | 'BUILDER' | 'PUBLIC';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  propertyId?: string;
}

export interface Property {
  id: string;
  plotNo: string;
  street: string;
  type: 'VILLA' | 'HOUSE';
  status: 'OCCUPIED_OWNER' | 'OCCUPIED_TENANT' | 'VACANT';
  ownerName: string;
  tenantName?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'ANNOUNCEMENT' | 'EVENT' | 'CIRCULAR';
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}
