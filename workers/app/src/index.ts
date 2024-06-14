import type Calc from '../../calc/src/index';

export interface Env {
	CALC: Service<Calc>;
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const sum = await env.CALC.add(1, 2);
		return new Response(`1 + 2 = ${sum}`);
	},
} satisfies ExportedHandler<Env>;
