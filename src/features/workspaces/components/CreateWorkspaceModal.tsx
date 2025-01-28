'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateWorkspaceModal } from '../store/useCreateWorkspaceModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCreateWorkspace } from '../api/useCreateWorkspace';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const CreateWorkspaceModal = () => {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState('');
  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    setName('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    mutate(
      { name: name },
      {
        onSuccess(workspaceId) {
          toast.success('Workspace created!');
          router.push(`/workspace/${workspaceId}`);
          handleClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent aria-describedby="workspace modal">
        <DialogHeader>
          <DialogTitle>Workspace modal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={isPending}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name eg. 'Work', 'Personal, 'Home'"
          />
          <div className="flex justify-end">
            <Button disabled={isPending}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
