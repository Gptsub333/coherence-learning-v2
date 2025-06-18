"use client";

import { ToastContainer, toast } from "react-toastify";

export function ComingSoonFeature({
    children,
    message = "Our team is working hard to release this feature soon!",
    className,
}) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        toast(`Coming soon! ${message}`, {
            position: "top-right",
            autoClose: 5000,
            type: "info",
            // transition: "bounce",
        });
    };

    return (
        <div
            className={className + " flex items-center gap-2"}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}
