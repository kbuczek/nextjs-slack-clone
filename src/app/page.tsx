'use client';

import { Button } from '@/components/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';
import { UserButton } from '@/features/auth/components/UserButton';

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      Logged in! <UserButton />
    </div>
  );
}
