export interface Satellite {
  id: number;
  name: string;
  address: string;
  contactPerson?: string | null;
  phone?: string | null;
  mapImage: string;
  link?: string | null;
}

export const satellitesData: Satellite[] = [
  {
    id: 1,
    name: 'Covenant Care Central Office',
    address:
      '6th Street Tulip Drive Ecoland Subd. District 1, Bucana, Davao City 8000',
    contactPerson: null,
    phone: null,
    mapImage: '/assets/image/satellite-maps/1.png',
    link: 'https://maps.app.goo.gl/9XbekzkoCwZ2VPyQ6',
  },
  {
    id: 2,
    name: 'Kiamba Branch',
    address: 'Kiamba, Sarangani Province',
    contactPerson: 'Gemmarie Mendoza - BM',
    phone: '+63 967 773 3540',
    mapImage: '/assets/image/satellite-maps/2.png',
    link: 'https://maps.app.goo.gl/YqWFHoyZ25i6SyrW9',
  },
  {
    id: 3,
    name: 'Koronadal City Branch',
    address: '734B, Sinsuat St. Koronadal City, South Cotabato',
    contactPerson: 'Janfilly Galumo',
    phone: '+63 916 662 9062',
    mapImage: '/assets/image/satellite-maps/3.png',
    link: 'https://maps.app.goo.gl/QQGSNSSgTHczEp3b9',
  },
  {
    id: 4,
    name: 'Surigao City Branch',
    address: 'Surigao City, Surigao del Norte Province',
    contactPerson: 'Aileen Layao',
    phone: '+63 921 505 3278',
    mapImage: '/assets/image/satellite-maps/4.png',
    link: 'https://maps.app.goo.gl/99SD2Jd3HkaiYdpK8',
  },
  {
    id: 5,
    name: 'Davao del Sur Branch',
    address: 'Davao del Sur',
    contactPerson: 'Arthur Malemit',
    phone: '+63 961 828 9937',
    mapImage: '/assets/image/satellite-maps/5.png',
    link: 'https://maps.app.goo.gl/gkB1rKRh8ec3U9zR7',
  },
  {
    id: 6,
    name: 'Davao del Norte Branch',
    address: 'Davao del Norte',
    contactPerson: 'Lainelyn Famularcano',
    phone: '+63 923 664 7185',
    mapImage: '/assets/image/satellite-maps/6.png',
    link: 'https://maps.app.goo.gl/bfnAkgzHK8JYU6yH6',
  },
  {
    id: 7,
    name: 'Davao Oriental Branch',
    address: 'Davao Oriental',
    contactPerson: 'Linley Mapinguez',
    phone: '+63 950 455 4944',
    mapImage: '/assets/image/satellite-maps/7.png',
    link: 'https://maps.app.goo.gl/X9TrZJ64i872mFgr8',
  },
  {
    id: 8,
    name: 'Zamboanga City Branch',
    address: 'Zamboanga City',
    contactPerson: 'Gina Raymundo',
    phone: '+63 935 301 9527',
    mapImage: '/assets/image/satellite-maps/8.png',
    link: 'https://maps.app.goo.gl/phWBQRwayvksxqZA6',
  },
  {
    id: 9,
    name: 'Dipolog City Branch',
    address: 'Arcade 1 stall 13 & 14 Magsaysay St. Central Brgy, Dipolog City',
    contactPerson: 'Marilou Tan',
    phone: '+63 919 008 1430',
    mapImage: '/assets/image/satellite-maps/9.png',
    link: 'https://maps.app.goo.gl/nW1rtXCfSrfkccVh8',
  },
  {
    id: 10,
    name: 'Ormoc City Branch',
    address: 'Ormoc City',
    contactPerson: 'Elsa Rabafon',
    phone: '+63 917 306 0442',
    mapImage: '/assets/image/satellite-maps/10.png',
    link: 'https://maps.app.goo.gl/VN8vu8R6x9LVodDA8',
  },
];
