export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'International Mega Standard',
    logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=IMS',
    website: '#',
  },
  {
    id: '2',
    name: 'Q Power X2 Module',
    logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=Q-POWER',
    website: '#',
  },
  {
    id: '3',
    name: 'Access Bank',
    logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=ACCESS',
    website: '#',
  },
  {
    id: '4',
    name: 'KPMG',
    logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=KPMG',
    website: '#',
  },
  {
    id: '5',
    name: 'PWC',
    logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=PwC',
    website: '#',
  },
  {
    id: '6',
    name: 'Shell Nigeria',
    logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=SHELL',
    website: '#',
  },
];

export function getAllPartners(): Partner[] {
  return partners;
}
