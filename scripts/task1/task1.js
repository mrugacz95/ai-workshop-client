const OpenAI = require("openai");
const fs = require("node:fs/promises");
const path = require("node:path");

async function readInput() {
    const inputPath = path.join(__dirname, "input.txt");
    return await fs.readFile(inputPath, "utf8")
}

async function part1() {
    const input = await readInput();

    const answer = input
        .split("\n")
        .map((line) => line.trimStart()[0])
        .join("");

    console.log(answer);
}

async function part2() {
    const input = await readInput();

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL,
    });

    const questions = input
        .split("\n")

    const answers = [];
    for (const question of questions) {
        const response = await client.responses.create({
            model: "google/gemma-4-e4b",
            instructions: "Odpowiedz na to pytanie.",
            input: question

        });

        const answer = response.output_text;

        answers.push(answer)

        console.log(answer);
    }

    console.log("Answer:", answers.join(","));
}

async function main() {
    part1()
    part2()
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});