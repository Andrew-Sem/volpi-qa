import React, {FC} from 'react';
import {Dialog} from '@headlessui/react';
import {ArrowLeftIcon, XMarkIcon} from "@heroicons/react/24/outline";

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: (visible: boolean) => void
}

export const Modal: FC<ModalProps> = ({children, isOpen, setIsOpen}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-[1001]"
        >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true"/>
            <div className="fixed inset-0 md:left-auto md:top-auto flex items-center justify-center py-2 px-1 md:pb-4 md:pr-4">
                <Dialog.Panel className="rounded-lg relative min-w-[250px] w-[370px]">
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
