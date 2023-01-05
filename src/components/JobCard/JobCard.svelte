<script>
	import SkillTag from '../skillTag/SkillTag.svelte';
</script>

<div class="job__card">
	<div class="container h-40 w-full bg-blue-500">
		<div class="title__container h-1/5 w-full flex bg-purple-400">
			<div class="job__title h-full w-9/12 ">dev ops</div>
			<div class="employer h-full w-3/12 bg-orange-500">google</div>
		</div>
		<div class="description h-4/5 w-full flex">
			<div class="right__side h-full w-9/12 bg-purple-500">
				<div class="top h-2/6 w-full bg-orange-400 flex">
					<div class="job__type h-full w-2/6 flex items-center justify-center bg-green-400">
						Development
					</div>
					<div
						class="skills flex items-center justify-center w-4/6 space-x-2 min-w-fit bg-yellow-400"
					>
						<SkillTag />
						<SkillTag />
						<SkillTag />
						<SkillTag />
						<SkillTag />
						<SkillTag />
						<SkillTag />
					</div>
				</div>
			</div>
			<div class="right__side h-full w-3/12 bg-red-500">left side</div>
		</div>
	</div>
</div>
