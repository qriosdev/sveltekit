<script context="module">
	export async function load({ page, fetch }) {
		const { path } = page;
		const { slug } = page.params;
		const url = `${path}.json`;
		const getContentData = await fetch(url);

		if (getContentData.ok) {
			const contentData = await getContentData.json();
			const { title, description, image } = contentData.metas;
			const content = (await import(`../../lib/content/blog/${slug}.md`)).default;
			return {
				props: {
					title,
					description,
					image,
					content
				}
			};
		}
	}
</script>

<script>
	import Metas from '$comp/Metas.svelte';
	export let title, description, image, content;
</script>

<svelte:head>
	<Metas {title} {description} {image} />
</svelte:head>

<h1>TEST</h1>

{title}
{description}
{image}
<svelte:component this={content} />
