import React, { createContext, useContext, useState, ReactNode } from 'react';


interface DialogContextProps {
    open: boolean;
    setOpen: (v: boolean) => void;
    title: string;
    content: ReactNode;
    setContent:(v:ReactNode) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

const DialogProvider: React.FC<{
    children: ReactNode
}> = ({
    children
}) => {
        const [open, setOpen] = useState<boolean>(false);
        const [content, setContent] = useState<ReactNode>(undefined);
        return (
            <DialogContext.Provider value={{ open, setOpen, title: '', content, setContent }}>
                {children}
            </DialogContext.Provider>
        )
    }

const useDialogContext = (): DialogContextProps => {
    const context = useContext(DialogContext);
    if (context === undefined) {
        throw new Error("useDialogContext must be used within a DailogProvider")
    }
    return context;
}

export {
    DialogProvider,
    useDialogContext
}