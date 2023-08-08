import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../app/utils/cn";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";

interface ModalProps {
    open: boolean;
    children: React.ReactNode
}

export function Modal({ open, children }: ModalProps) {
    return (
        <Dialog.Root open={open}>
        <Dialog.Portal>
          <Dialog.Overlay className={cn(
            'fixed inset-0 bg-black/25 backdrop-blur-sm z-50',
            'data-[state=open]:animate-overlay-show'
          )}/>
          <Dialog.Content className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 rounded-2xl z-[51] bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show'
          )}>

            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;