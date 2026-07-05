const OpenAI = require("openai");

async function part1() {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL
    });

    const response = await client.responses.create({
        model: "google/gemma-4-e4b",
        input: "Rozwiąż: ile to 17 * 23?",
    });

    console.log(response.output_text);
}

async function part2() {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL
    });

    const response = await client.responses.create({
        model: "google/gemma-4-e4b",
        input: "Rozwiąż: ile to 17 * 23?",
    });

    console.log(response.output_text);
}

part1().catch((err) => {
    console.error(err);
    process.exit(1);
});

part2().catch((err) => {
    console.error(err);
    process.exit(1);
});