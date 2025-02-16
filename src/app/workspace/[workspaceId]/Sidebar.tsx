import { UserButton } from '@/features/auth/components/UserButton';
import { WorkspaceSwitcher } from './WorkspaceSwitcher';

export const Sidebar = () => {
  return (
    <aside className="h-full bg-slackPurple w-[70px] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
