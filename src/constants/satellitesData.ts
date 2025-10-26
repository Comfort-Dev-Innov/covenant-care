export interface Satellite {
  id: number;
  name: string;
  address: string;
  phone: string;
  mapImage: string;
  link: string;
}

export const satellitesData: Satellite[] = [
  {
    id: 1,
    name: "Talisay Satellite",
    address: "Fidel Bas St., Talisay, Cebu",
    phone: "+63 971 213 1231",
    mapImage: "/assets/image/satellite-maps/sample-map-3.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Talisay/@10.2060198,123.011393,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.2060201!4d123.0139013!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    name: "Cebu City Satellite",
    address: "Archbishop Reyes Ave, Cebu City",
    phone: "+63 971 213 3123",
    mapImage: "/assets/image/satellite-maps/sample-map-1.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Cebu+City/@10.3146495,123.0005885,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3146498!4d123.0030968!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    name: "Mandaue Satellite",
    address: "Fidel Bas St., Talisay, Cebu",
    phone: "+63 971 213 1231",
    mapImage: "/assets/image/satellite-maps/sample-map-2.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Mandaue/@10.3323112,122.982516,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3323115!4d122.9850243!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    name: "Lapu-Lapu Satellite",
    address: "Mactan Island, Lapu-Lapu City",
    phone: "+63 971 213 4567",
    mapImage: "/assets/image/satellite-maps/sample-map-3.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Lapu-Lapu/@10.3146495,123.0005885,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3146498!4d123.0030968!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 5,
    name: "Consolacion Satellite",
    address: "Consolacion, Cebu",
    phone: "+63 971 213 7890",
    mapImage: "/assets/image/satellite-maps/sample-map-1.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Lapu-Lapu/@10.3146495,123.0005885,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3146498!4d123.0030968!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 6,
    name: "Cordova Satellite",
    address: "Cordova, Cebu",
    phone: "+63 971 213 2345",
    mapImage: "/assets/image/satellite-maps/sample-map-3.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Consolacion/@10.3323112,122.982516,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3323115!4d122.9850243!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 7,
    name: "Liloan Satellite",
    address: "Liloan, Cebu",
    phone: "+63 971 213 6789",
    mapImage: "/assets/image/satellite-maps/sample-map-2.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Cordova/@10.3323112,122.982516,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3323115!4d122.9850243!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 8,
    name: "Compostela Satellite",
    address: "Compostela, Cebu",
    phone: "+63 971 213 0123",
    mapImage: "/assets/image/satellite-maps/sample-map-1.png",
    link: "https://www.google.com/maps/place/Covenant+Care+Compostela/@10.3323112,122.982516,15z/data=!4m6!3m5!1s0x33a999283a1b1171:0x2f2f9e19eba7fb84!8m2!3d10.3323115!4d122.9850243!16s%2Fg%2F11c484kp1j?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  //   {
  //     id: 9,
  //     name: "Danao Satellite",
  //     address: "Danao City, Cebu",
  //     phone: "+63 971 213 3456",
  //     mapImage: "/assets/image/satellite-maps/sample-map-2.png",
  //   },
];
