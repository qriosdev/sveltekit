const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE : '';

const website = {
	author: 'qrious',
	ogLanguage: 'en_GB',
	siteLanguage: 'en-GB',
	siteTitle: 'SvelteKit Playground',
	siteShortTitle: 'SvelteKit',
	siteUrl: import.meta.env ? import.meta.env.VITE_HOSTNAME : '',
	icon: 'static/favicon.png',
	backgroundColor: '#fff',
	themeColor: '#fff',
	contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: import.meta.env ? import.meta.env.VITE_GITHUB_PAGE : '',
	linkedinProfile: import.meta.env ? import.meta.env.VITE_LINKEDIN_PROFILE : '',
	telegramUsername: import.meta.env ? import.meta.env.VITE_TELEGRAM_USERNAME : '',
	tiktokUsername: import.meta.env ? import.meta.env.VITE_TIKTOK_USERNAME : '',
	twitterUsername: import.meta.env ? import.meta.env.VITE_TWITTER_USERNAME : '',
	twitterUserId: import.meta.env ? import.meta.env.VITE_TWITTER_ID : '',
	wireUsername: import.meta.env ? import.meta.env.VITE_WIRE_USERNAME : ''
};

export { website as default };
