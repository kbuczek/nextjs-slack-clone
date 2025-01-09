'use client';

import { CreateWorkspaceModal } from '@/features/workspaces/components/CreateWorkspaceModal';
import { useEffect, useState } from 'react';

export const Modals = () => {
  const [mounted, setMounted] = useState(false); //force client side rendering (not ssr)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; //preventing hydration errors

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
