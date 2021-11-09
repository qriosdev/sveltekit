<script>
	export let text;
	export let url;
</script>

<a class="btn" href={url}>{text}</a>

<style lang="scss">
	.btn {
		@include btn($purple, $white);
	}
	
</style>