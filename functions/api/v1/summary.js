import { Ai } from "@cloudflare/ai"

export async function onRequestPost(context) {
    const ai = new Ai(context.env.AI);
    const req = context.request;
    const body = await req.json();
    const data = body?.data
    
    if(!data) {
        return Response.json({error: "No input data found", status: 400});
    }

    const response = await ai.run("@cf/facebook/bart-large-cnn", {
        input_text: data,
        max_length: 5000
    });

    if(!response) {
        return Response.json({error: "No input data found", status: 400});
    }

    return Response.json(response);
}