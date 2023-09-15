import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { serverId: string } }) {
    try {
        const profile = await currentProfile();

        console.log(params.serverId)
        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const server = await db.server.update({
            where: {
                id: params.serverId
            },
            data: {
                members: {
                    create: [
                        {
                            profileId: profile.id,
                        }
                    ]
                }
            }
        });

        return NextResponse.json(server);
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}