<script>
	import Icon from '@iconify/svelte';
	export let salary;
</script>

<div class="salary flex h-9 w-44 bg-gray-200 rounded-md items-center justify-center space-x-2">
	<div class="icon">
		<Icon class="text-2xl" icon={'foundation:dollar-bill'} />
	</div>
	<div class="text text-sm">
		{salary}
	</div>
</div>
