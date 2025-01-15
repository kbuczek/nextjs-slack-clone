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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCreateWorkspace } from '../api/useCreateWorkspace';

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { mutate } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    // TODO: clear form
  };

  const handleSubmit = () => {
    mutate({
      name: 'Workspace 1',
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent aria-describedby="workspace modal">
        <DialogHeader>
          <DialogTitle>Workspace modal</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name eg. 'Work', 'Personal, 'Home'"
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
