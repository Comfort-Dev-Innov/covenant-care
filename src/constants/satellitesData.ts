export interface Satellite {
  id: number;
  name: string;
  address: string;
  phone?: string | null;
  mapImage: string;
  link?: string | null;
}

export const satellitesData: Satellite[] = [
  {
    id: 1,
    name: "Panabo Satellite",
    address: "Panabo, Davao del Norte",
    phone: "+63 971 213 1231",
    mapImage: "/assets/image/satellite-maps/panabo.png",
    link: "https://maps.app.goo.gl/azJvuhZuGqrPGvoA8",
  },
  {
    id: 2,
    name: "Digos Satellite",
    address: "Digos, Davao del Sur",
    phone: "+63 971 213 3123",
    mapImage: "/assets/image/satellite-maps/digos.png",
    link: "https://maps.app.goo.gl/4MLBUzoPazenH6ar8",
  },
  {
    id: 3,
    name: "Kiamba Satellite",
    address: "Kiamba, Sarangani",
    phone: "+63 971 213 1231",
    mapImage: "/assets/image/satellite-maps/kiamba.png",
    link: "https://maps.app.goo.gl/TGnHXopwY3HipRSN8",
  },
  {
    id: 4,
    name: "Koronadal City Satellite",
    address: "Koronadal City, South Cotabato",
    phone: "+63 971 213 4567",
    mapImage: "/assets/image/satellite-maps/koronadal.png",
    link: "https://maps.app.goo.gl/aAPAcpMGNYeCX3pj9",
  },
  {
    id: 5,
    name: "Lapu-Lapu Satellite",
    address: "Lapu-Lapu City, Cebu",
    phone: "+63 971 213 7890",
    mapImage: "/assets/image/satellite-maps/lapulapu.png",
    link: "https://maps.app.goo.gl/3LXgVN4gQuskkd4y5",
  },
  {
    id: 6,
    name: "Talisay Satellite",
    address: "Talisay, Cebu",
    phone: "+63 971 213 2345",
    mapImage: "/assets/image/satellite-maps/talisay.png",
    link: "https://maps.app.goo.gl/Fx6nrBrj3Hj3H2R56",
  },
  {
    id: 7,
    name: "Surigao Satellite",
    address: "Surigao, Cebu",
    phone: "+63 971 213 6789",
    mapImage: "/assets/image/satellite-maps/surigao.png",
    link: "https://maps.app.goo.gl/iQBr9mtAyTYN1xno7",
  },
  {
    id: 8,
    name: "Ormoc Satellite",
    address: "Ormoc, Cebu",
    mapImage: "/assets/image/satellite-maps/ormoc.png",
    link: "https://maps.app.goo.gl/SnSCEMx5RpC87hB18",
  },
  {
    id: 9,
    name: "Butuan Satellite",
    address: "Butuan, Agusan del Norte",
    mapImage: "/assets/image/satellite-maps/butuan.png",
    link: "https://www.google.com/maps/place/Butuan+City,+Agusan+del+Norte/@8.8990294,125.5160656,12z/data=!3m1!4b1!4m6!3m5!1s0x3301e998b1704fcf:0x85e95810384ea2d6!8m2!3d8.947528!4d125.5406294!16zL20vMDZiYmN5?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  //   {
  //     id: 9,
  //     name: "Danao Satellite",
  //     address: "Danao City, Cebu",
  //     phone: "+63 971 213 3456",
  //     mapImage: "/assets/image/satellite-maps/sample-map-2.png",
  //   },
];
