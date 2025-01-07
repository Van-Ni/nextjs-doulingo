"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/heart.svg" alt="Heart" height={100} width={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice Lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use Practice lessons to regain hearts and points. You cannot loose
            hearts or points in Practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="mb-4"
              variant="primaryOutline"
              size="lg"
              onClick={close}
            >
              I Understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
