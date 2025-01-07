"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useExitModal } from "@/store/use-exit-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/mascot_sad.svg"
              alt="Sad Mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait Don&apos;t go
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;r about to leave the lesson. Are you Sure!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="mb-4"
              variant="primary"
              size="lg"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              className="mb-4"
              variant="dangerOutline"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End Sesson
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
