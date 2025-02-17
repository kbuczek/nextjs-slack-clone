import { useParams } from 'next/navigation';
import { Id } from '../../convex/_generated/dataModel';

export const useWorkspaceId = () => {
  const params = useParams(); // returns { workspaceId: 'current-workspace-id'}
  return params.workspaceId as Id<'workspaces'>;
};
