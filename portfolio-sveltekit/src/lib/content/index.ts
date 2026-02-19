import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import type { Homepage } from './types';

const md = new MarkdownIt();

const homepageFiles = import.meta.glob('../../content/pages/home.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

export function getHomepage(): Homepage {
	const [path, raw] = Object.entries(homepageFiles)[0] as [string, string];

	const parsed = matter(raw);
	const data = parsed.data as any;

	const focusAreas = data.focusAreas ?? {};
	const featuredIntro = data.featuredIntro ?? data.featured_intro ?? '';

	const bodyHtml = md.render(parsed.content);

	return {
		name: data.name,
		title: data.title,
		summary: data.summary,
		roles: data.roles ?? [],
		availabilityQuarter: data.availabilityQuarter ?? null,
		availabilityYear: data.availabilityYear ?? null,
		cta: data.cta ?? [],
		navigation: data.navigation ?? [],
		focusAreas: {
			icWork: focusAreas.icWork ?? [],
			leadershipWork: focusAreas.leadershipWork ?? []
		},
		featuredIntro,
		profilePhoto: data.profilePhoto,
		bodyHtml
	};
}
