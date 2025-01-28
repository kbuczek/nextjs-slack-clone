type Params = Promise<{ workspaceId: string }>;

export default async function WorkspaceIdPage({ params }: { params: Params }) {
  const { workspaceId } = await params;
  return <div>ID: {workspaceId}</div>;
}
