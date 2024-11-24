export interface Vehicle {
  id: number| null;
  modelName: string;
  picture: string;
  maxSpeed: number;
  color: string;
  registrationDate: string; // ISO
  type: 'car' | 'truck';
  specificData: {
    hasAirbag?: boolean;
    fuelType?: 'diesel' | 'gasoline' | 'hybrid' | 'electric';
    maxWeightSupported?: number;
    canAttachTrailer?: boolean;
  };
}
