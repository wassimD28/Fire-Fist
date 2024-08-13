export interface User{
  id?: number;
  username: string;
  email?: string;
  roles?: Array<string>;
  password?: string;
}

export interface LoginResponse{
  accessToken?: string;
  refreshToken?: string;
}

export interface MusclePath{
  name: string;
  d: string;
  partOf?: string;
  side?: "left"|"right";
}

export interface MusclePathGroup{
  groupName: string;
  groupSide?: string;
  musclePaths: MusclePath[];
}
