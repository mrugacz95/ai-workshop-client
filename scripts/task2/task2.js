const OpenAI = require("openai");
const fs = require("node:fs/promises");
const path = require("node:path");

async function readInput() {
    const inputPath = path.join(__dirname, "input.txt");
    return await fs.readFile(inputPath, "utf8")
}

async function part1() {
    const input = await readInput();

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL,
    });

    const answer = "//todo"

    console.log(answer);
}

async function part2() {
    const input = await readInput();

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL,
    });

    const answer = "//todo"

    console.log("Answer:", answer);
}

async function main() {
    part1()
    part2()
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});