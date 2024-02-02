// CHAT COMPLETIONS
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "$OPENAI_API_KEY" });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Tell me a joke." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

// EMBEDDINGS

// async function main() {
//   const embedding = await openai.embeddings.create({
//     model: "text-embedding-ada-002",
//     input: "The quick brown fox jumped over the lazy dog",
//   });

//   console.log(embedding);
// }

// main();

// IMAGES

// async function main() {
//   const image = await openai.images.generate({ prompt: "A cute baby sea otter" });

//   console.log(image.data);
// }
// main();