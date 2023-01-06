<script>
	import Icon from '@iconify/svelte';
	export let location;
</script>

<div class="location h-9 w-40 bg-gray-200 flex items-center space-x-2 justify-center rounded-md">
	<div class="icon">
		<Icon icon={'material-symbols:location-on'} />
	</div>
	<div class="text">
		{location}
	</div>
</div>
