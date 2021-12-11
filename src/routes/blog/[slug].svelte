<script context="module">
	export async function load({ page, fetch }) {
		const { path } = page;
		const { slug } = page.params;
		const url = `${path}.json`;
		const getPost = await fetch(url);

		if (getPost.ok) {
			const content = await getPost.json();
			const { title, description, image } = content;
			return {
				props: {
					title,
					description,
					image,
					page: (await import(`../../lib/content/blog/${slug}.md`)).default
				}
			};
		}
	}
</script>

<script>
	export let title, description, image, page;
</script>

<h1>TEST</h1>

{title}
{description}
{image}
<svelte:component this={page} />
