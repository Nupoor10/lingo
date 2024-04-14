import { Ai } from "@cloudflare/ai"

export async function onRequestPost(context) {
    const ai = new Ai(context.env.AI);
    const req = context.request;
    const body = await req.json();
    const prompt = body?.prompt
    
    if(!prompt) {
        return Response.json({error: "No input data found", status: 400});
    }

    const response = await ai.run("@cf/meta/llama-2-7b-chat-fp16", {
        messages: [
            { role: "system", content: "You are a friendly assistant" },
            {
              role: "user",
              content: prompt,
            },
          ], 
        raw: false, 
        stream: false,
        max_tokens: 5000
    });

    if(!response) {
        return Response.json({error: "No input data found", status: 400});
    }

    return Response.json(response);
}