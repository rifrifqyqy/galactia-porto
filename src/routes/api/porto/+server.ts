import portodata from '../../../data/porto.json';

export async function GET() {
	const data = portodata;

	return new Response(JSON.stringify({ status: 200, data }), {
		headers: { 'Content-Type': 'application/json' }
	});
}
