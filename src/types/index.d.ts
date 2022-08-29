export interface ContactModel {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  note: string;
  telegram: string;
  avatar: string;
  company: string;
  address: string;
  createdAt: number;
  updatedAt: number;
  id: number;
}

export interface MetaModel {
  criteria: any;
  limit: number;
  skipped: number;
  total: number;
}

export type FilterQueryObjectType = { contains: string };

export type FilterQueryType = {
  phone?: FilterQueryObjectType;
  first_name?: FilterQueryObjectType;
  last_name?: FilterQueryObjectType;
};

export interface QueryObjectType {
  where?: FilterQueryType;
  limit: string;
  skip: string;
  sort?: string;
}
