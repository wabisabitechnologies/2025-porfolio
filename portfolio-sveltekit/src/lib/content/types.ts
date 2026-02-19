export type NavLink = {
	label: string;
	key: string;
	href: string;
};

export type CTA = {
	label: string;
	href: string;
};

export type FocusAreas = {
	icWork: string[];
	leadershipWork: string[];
};

export type Homepage = {
	name: string;
	title: string;
	summary: string;
	roles: string[];
	availabilityQuarter: number | null;
	availabilityYear: number | null;
	cta: CTA[];
	navigation: NavLink[];
	focusAreas: FocusAreas;
	featuredIntro: string;
	profilePhoto: string;
	bodyHtml: string;
};
