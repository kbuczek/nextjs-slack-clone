import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const currentUser = () => {
  const data = useQuery(api.users.current);
};
