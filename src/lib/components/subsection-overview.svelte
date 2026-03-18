<script lang="ts">
	import { ArrowRight } from "lucide-svelte";

	let { title, items } = $props<{
		title: string;
		items: { title: string; url: string }[];
	}>();
</script>

<div class="flex flex-col gap-8 p-6 lg:p-12">
	<div class="space-y-2 text-center">
		<h1 class="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
		<p class="text-muted-foreground text-lg italic">Explore my growth and work in {title.toLowerCase()}.</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each items as item}
			<a
				href={item.url}
				class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
			>
				<div class="space-y-2">
					<h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
						{item.title}
					</h3>
					<div class="h-1 w-8 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-300"></div>
				</div>
				<div class="mt-8 flex items-center justify-end text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
					View details
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</div>
			</a>
		{/each}
	</div>
</div>
