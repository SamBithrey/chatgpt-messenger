import query from "@/lib/queryApi";
import type { NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDB } from "../../../../firebaseAdmin";
import { NextResponse } from "next/server";

type Data = {
    answer: string;
}


export async function POST(
    req: Request,
    res: NextApiResponse<Data>
) {
    const body = await req.json()
    const { prompt, chatId, model, session } = body;
    if(!prompt) {
        return NextResponse.json({ answer: "Please provide a prompt!" });
    }

    if(!chatId) {
        return NextResponse.json({ answer: "Please provide a valid chat ID!"});
    }

    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || 'ChatGPT was unable to find an answer to that query!',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: "https://links.papareact.com/89k",
        },
    }

    await adminDB
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);
    
    return NextResponse.json({ answer: message.text});
}