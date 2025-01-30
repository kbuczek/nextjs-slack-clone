import { Toolbar } from './toolbar';

type WorkspaceIdLayoutProps = {
  children: React.ReactNode;
};

const WorkspaceLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
