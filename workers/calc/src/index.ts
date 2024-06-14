import { WorkerEntrypoint } from "cloudflare:workers";

export default class Calc extends WorkerEntrypoint {
	async fetch() { return new Response("ok"); }

	add(a: number, b: number) { return a + b; }
}
