import { NextResponse } from "next/server";
import openai from "@/lib/chatgpt";

export async function GET() {

    const models = await openai.listModels().then((res) => res.data.data);

    const modelOptions = models.map((model) => ({
        value: model.id,
        label: model.id,
    }));
      
    const res = NextResponse.json({modelOptions});

    return res;
}