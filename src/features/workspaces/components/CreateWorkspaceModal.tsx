'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateWorkspaceModal } from '../store/useCreateWorkspaceModal';

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setOpen(false);
    // TODO: clear form
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogTitle>Workspace modal</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
