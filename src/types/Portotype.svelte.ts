export interface Tool {
	id: number;
	toolthumb: string;
	name: string;
}

export interface Portfolio {
	id: number;
	title: string;
	date: string;
	imageUrl: string;
	description: string;
	label: string;
	webUrl: string | null;
	figmaUrl: string | null;
	tools: Tool[];
}
