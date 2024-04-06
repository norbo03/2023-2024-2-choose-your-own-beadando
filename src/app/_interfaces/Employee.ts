export interface Employee {
  name: string;
  role: Role;
  numberOfErrors: number;
}

export enum Role {
  READER = "READER",
  WRITER = "WRITER",
  ADMIN = "ADMIN"
}
