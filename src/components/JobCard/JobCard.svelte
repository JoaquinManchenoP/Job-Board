<script>
	import SkillTag from '../skillTag/SkillTag.svelte';
	import LocationTag from '../locationTag/LocationTag.svelte';
	import SalaryTag from '../salaryTag/SalaryTag.svelte';
</script>

<div class="job__card h-36 w-full bg-green-300 min-w-fit">
	<div class="card__container h-full w-full flex bg-purple-600">
		<div class="left__side h-full w-full bg-orange-600">
			<div class="job__title h-2/6 w-full bg-red-500">devops</div>
			<div class="h-4/6 w-full">
				<div class="job__type h-9 w-ful flex bg-yellow-400 space-x-1 ">
					<div class="type h-9 w-32 flex items-center justify-center bg-green-400">development</div>
					<div class="skills flex items-center space-x-2">
						<SkillTag tag={'React'} />
						<SkillTag tag={'Svelte'} />
						<SkillTag tag={'React'} />
					</div>
				</div>

				<div class="salary__location h-4/6 w-full bg-purple-400 flex items-center space-x-3">
					<div class="salary">
						<SalaryTag salary={'100,000'} />
					</div>
					<civ class="location">
						<LocationTag location={'Quito, Ecuador'} />
					</civ>
				</div>
			</div>
		</div>
		<div class="right__side h-full w-28 bg-red-500">
			<div class="employer">google</div>
			<div class="time__posted">2 days ago</div>
		</div>
	</div>
</div>
