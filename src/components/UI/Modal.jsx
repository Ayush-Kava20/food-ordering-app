import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, open, className = ' '}){
    const dialog = useRef();

    useEffect(()=>{
        const modal = dialog.current;
        if(open){
            modal.showModal();
        }

        return ()=> modal.close();
    }, [open])

    return createPortal(
        <dialog ref={dialog} className={`bg-[#e4ddd4] rounded-[6px] p-[1rem] w-[80%] max-w-[40rem] [::backdrop]:bg-black/55  ${className}`}>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}