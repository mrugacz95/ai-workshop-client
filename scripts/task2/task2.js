import OpenAI from "openai";
import fs from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {zodTextFormat} from "openai/helpers/zod";
import {z} from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readInput() {
    const inputPath = path.join(__dirname, "input.txt");
    return await fs.readFile(inputPath, "utf8")
}

async function part1() {
    const input = await readInput();
    const comments = input.split("\n");


    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: process.env.OPENAI_BASE_URL,
    });

    const CommentCategory = z.object({
        reasoning: z.string(),
        confidence: z.number(),
        name: z.enum(["positive", "negative"]),
    });

    console.log(comments);

    const answers = [];

    for (const comment of comments) {
        const response = await client.responses.parse({
            model: "gpt-4o-mini",
            input: [
                {role: "system", content: "Skategoryzuj podany komentarz."},
                {role: "user", content: comment,},
            ],
            text: {
                format: zodTextFormat(CommentCategory, "category"),
            },
        });


        console.log(response)

        const category = response.output_parsed;

        console.log(category)

        answers.push(category["name"])
    }

    const answer = answers.join(",")

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
    // part2()
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});