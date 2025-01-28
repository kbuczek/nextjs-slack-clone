'use client';
import { useParams } from 'next/navigation';

// type Params = Promise<{ workspaceId: string }>;

// export default async function WorkspaceIdPage({ params }: { params: Params }) {
//   const { workspaceId } = await params;
//   return <div>ID: {workspaceId}</div>;
// }

export default function WorkspaceIdPage() {
  const params = useParams();
  return <div>ID: {params.workspaceId}</div>;
}
