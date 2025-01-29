'use client';
import { useWorkspaceId } from '@/hooks/useWorkspaceId';

// type Params = Promise<{ workspaceId: string }>;

// export default async function WorkspaceIdPage({ params }: { params: Params }) {
//   const { workspaceId } = await params;
//   return <div>ID: {workspaceId}</div>;
// }

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();

  return <div>ID: {workspaceId}</div>;
}
