'use client';

import { UserButton } from '@/features/auth/components/UserButton';
import { useCreateWorkspaceModal } from '@/features/workspaces/store/useCreateWorkspaceModal';
import { useGetWorkspaces } from '@/features/workspaces/api/useGetWorkspaces';
import { useEffect, useMemo } from 'react';

export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log('redirect to workspace');
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading, open]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
