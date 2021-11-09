<script>
	export let webp;
	export let jpg;
	export let alt;
</script>

<picture>
	<source srcset={webp} type="image/webp" />
	<source srcset={jpg} type="image/jpeg" />
	<img src={jpg} {alt} />
</picture>
