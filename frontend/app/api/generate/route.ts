import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { skills, time, budget } = body;

    const prompt = `
You are an expert startup founder.

Generate 3 realistic startup ideas for a person with:
- Skills: ${skills}
- Time available: ${time}
- Budget: ${budget}

Then:
1. Pick the BEST idea
2. Explain WHY it is the best
3. Keep it practical and low-budget

Format clearly.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are a practical startup expert." },
        { role: "user", content: prompt },
      ],
    });

    return Response.json({
      success: true,
      data: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: "Something went wrong" });
  }
}