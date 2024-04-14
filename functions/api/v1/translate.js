import { Ai } from "@cloudflare/ai"

export async function onRequestPost(context) {
    const ai = new Ai(context.env.AI);
    const req = context.request;
    const body = await req.json();
    const data = body?.data
    const language = body?.lang
    
    if(!data || !language) {
        return Response.json({error: "No input data found", status: 400});
    }

    const response = await ai.run("@cf/meta/m2m100-1.2b", {
        text: data,
        source_lang: language || "fr",
        target_lang: "en",
    });

    if(!response) {
        return Response.json({error: "No input data found", status: 400});
    }

    return Response.json(response);
}