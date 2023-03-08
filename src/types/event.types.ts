import { TypedObject } from 'sanity';

export interface EventProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'event';
  _updatedAt: string;
  date: string;
  description: TypedObject | TypedObject[];
  eventPage: {
    label: string;
    href: string;
  };
  location: {
    name: string;
    address: string;
  };
  name: string;
}
