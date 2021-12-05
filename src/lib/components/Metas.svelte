<script>
	// import { ev } from '$data/ev';
	export let title, description, image;

	const hostname = import.meta.env.VITE_HOSTNAME || '';
	const siteName = import.meta.env.VITE_SITENAME || title;
	const metaImage = `${hostname}/images/${image}`;
</script>

<title>{title}</title>
<meta name="description" content={description} />

<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={metaImage} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content={siteName} />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={metaImage} />
<meta name="twitter:image:alt" content={title} />
