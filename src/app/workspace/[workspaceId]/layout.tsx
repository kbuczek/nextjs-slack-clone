'use client';
import { Sidebar } from './Sidebar';
import { Toolbar } from './Toolbar';

type WorkspaceIdLayoutProps = {
  children: React.ReactNode;
};

const WorkspaceLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
