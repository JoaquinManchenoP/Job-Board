<script>
	import '../app.css';
	import LevelMenu from '../components/levelMenu/LevelMenu.svelte';
</script>

<div class="h-screen w-screen flex items-center justify-center">
	<div class="app__container h-screen xsm:w-full sm:w-[800px]">
		<div class="menu">
			<LevelMenu />
		</div>
		<slot />
	</div>
</div>
