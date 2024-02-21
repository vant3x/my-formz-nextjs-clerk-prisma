"use server";

import { currentUser } from "@clerk/nextjs";

class UserNotFoundError extends Error {}

export async function GetFoemStats ()  {
    const user = currentUser();

    if (!user) {
        throw new UserNotFoundError();
    }
}