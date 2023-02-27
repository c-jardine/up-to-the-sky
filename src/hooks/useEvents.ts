import { groq } from 'next-sanity';
import React from 'react';
import { TypedObject } from 'sanity';
import { sanity } from '../studio';

interface EventProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'event';
  _updatedAt: string;
  date: string;
  description: TypedObject | TypedObject[];
  location: {
    name: string;
    address: string;
  };
  name: string;
}

const useEvents = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<EventProps[]>([]);

  React.useEffect(() => {
    void (async () => {
      setIsLoading(true);
      const events: EventProps[] = await sanity.fetch(
        groq`*[_type == 'event']`
      );
      setEvents(events);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, events };
};

export default useEvents;
