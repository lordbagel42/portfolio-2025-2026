<script lang="ts">
	import SubSectionOverview from "$lib/components/subsection-overview.svelte";
	import sidebarConfig from "$lib/config/sidebar.json";

	const section = sidebarConfig.navMain.find((s) => s.title === "Mindset");
</script>

{#if section}
	<SubSectionOverview title={section.title} items={section.items} />
{/if}
