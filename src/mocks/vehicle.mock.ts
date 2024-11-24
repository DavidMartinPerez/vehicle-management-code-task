import { Vehicle } from "@features/vehicle/models/vehicle.model";

export const mockVehicles: Vehicle[] = [
  // Cars
  {
    id: 1,
    modelName: 'Tesla Model S',
    picture: 'https://example.com/tesla.jpg',
    maxSpeed: 250,
    color: 'red',
    registrationDate: '2022-01-15',
    type: 'car',
    specificData: {
      hasAirbag: true,
      fuelType: 'electric',
    },
  },
  {
    id: 8,
    modelName: 'Scania R500',
    picture: 'https://example.com/scania.jpg',
    maxSpeed: 140,
    color: 'blue',
    registrationDate: '2020-11-20',
    type: 'truck',
    specificData: {
      maxWeightSupported: 15000,
      canAttachTrailer: false,
    },
  },
  {
    id: 3,
    modelName: 'Ford Focus',
    picture: 'https://example.com/focus.jpg',
    maxSpeed: 200,
    color: 'black',
    registrationDate: '2023-03-12',
    type: 'car',
    specificData: {
      hasAirbag: false,
      fuelType: 'hybrid',   },
  },
  {
    id: 10,
    modelName: 'Kenworth T680',
    picture: 'https://example.com/kenworth.jpg',
    maxSpeed: 115,
    color: 'red',
    registrationDate: '2019-12-10',
    type: 'truck',
    specificData: {
      maxWeightSupported: 14000,
      canAttachTrailer: false,
    },
  },
  {
    id: 5,
    modelName: 'Chevrolet Bolt',
    picture: 'https://example.com/bolt.jpg',
    maxSpeed: 210,
    color: 'green',
    registrationDate: '2021-12-25',
    type: 'car',
    specificData: {
      hasAirbag: true,
      fuelType: 'electric',
    },
  },

  // Trucks
  {
    id: 6,
    modelName: 'Freightliner Cascadia',
    picture: 'https://example.com/cascadia.jpg',
    maxSpeed: 120,
    color: 'gray',
    registrationDate: '2019-08-17',
    type: 'truck',
    specificData: {
      maxWeightSupported: 18000,
      canAttachTrailer: true,
    },
  },
  {
    id: 7,
    modelName: 'Volvo FH16',
    picture: 'https://example.com/volvo.jpg',
    maxSpeed: 130,
    color: 'white',
    registrationDate: '2021-02-14',
    type: 'truck',
    specificData: {
      maxWeightSupported: 16000,
      canAttachTrailer: true,
    },
  },
  {
    id: 9,
    modelName: 'Mercedes-Benz Actros',
    picture: 'https://example.com/actros.jpg',
    maxSpeed: 125,
    color: 'black',
    registrationDate: '2018-05-30',
    type: 'truck',
    specificData: {
      maxWeightSupported: 17000,
      canAttachTrailer: true,
    },
  },
  {
    id: 2,
    modelName: 'Toyota Corolla',
    picture: 'https://example.com/corolla.jpg',
    maxSpeed: 180,
    color: 'blue',
    registrationDate: '2021-06-10',
    type: 'car',
    specificData: {
      hasAirbag: true,
      fuelType: 'gasoline',
    },
  },
  {
    id: 4,
    modelName: 'Honda Civic',
    picture: 'https://example.com/civic.jpg',
    maxSpeed: 220,
    color: 'white',
    registrationDate: '2020-09-05',
    type: 'car',
    specificData: {
      hasAirbag: true,
      fuelType: 'diesel',
    },
  },
];

export const mockVehicle: Vehicle = {
  id: 1,
  modelName: 'Tesla Model S',
  picture: 'img',
  type: 'car',
  color: 'Red',
  maxSpeed: 250,
  registrationDate: '2023-01-01',
  specificData: {
    fuelType: 'electric',
    hasAirbag: true,
  },
};
