"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-model";
import { InviteModel } from "../modals/invite-model";
import { DeleteServerModal } from "../modals/delete-server-model";
import { UpdateServerModal } from "../modals/update-server-model";
import { InviteServerModel } from "../modals/invite-server-model";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModel />
            <DeleteServerModal />
            <UpdateServerModal />
            <InviteServerModel />
        </>
    )
}