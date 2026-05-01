import { error } from '@sveltejs/kit';
import { getArticle } from '$lib/data/articles';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const article = getArticle(params.slug);
	if (!article) error(404);
	return { article };
};
