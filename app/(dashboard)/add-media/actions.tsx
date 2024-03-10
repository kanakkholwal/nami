"use server";
import dbConnect from "lib/dbConnect";
import Media ,{MediaType,MediaTypeWithId}from "src/models/media";
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { sessionType } from "src/types/session";


export async function addMedia(newMedia:MediaType) :Promise<MediaTypeWithId>{
    const session = await getServerSession(authOptions) as sessionType;
    await dbConnect();
    
    const media = new Media(newMedia);
    media.creator = session.user._id;
    await media.save();
    revalidatePath("/user/explore");
    return JSON.parse(JSON.stringify(media));
}
