import { Ai } from "@cloudflare/ai"

export async function onRequestPost(context) {
    const ai = new Ai(context.env.AI);
    const req = context.request;
    const formData = await req.formData();
    const img = formData.get("image");
    
    if(!img) {
        return Response.json({error: "No input data found", status: 400});
    }

    const blob = await img.arrayBuffer();
    const inputs = {
		image: [...new Uint8Array(blob)],
	};

    const response = await ai.run(
        "@cf/microsoft/resnet-50", 
        inputs
    );

    if(!response) {
        return Response.json({error: "No input data found", status: 400});
    }

    return Response.json(response);
}