'use client';
import { useGetWorkspace } from '@/features/workspaces/api/useGetWorkspace';
import { useWorkspaceId } from '@/hooks/useWorkspaceId';

// type Params = Promise<{ workspaceId: string }>;

// export default async function WorkspaceIdPage({ params }: { params: Params }) {
//   const { workspaceId } = await params;
//   return <div>ID: {workspaceId}</div>;
// }

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });

  return <div>Data: {JSON.stringify(data)}</div>;
}
