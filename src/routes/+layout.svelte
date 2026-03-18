<script lang="ts">
	import '../routes/layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// Simple logic to extract breadcrumbs from the URL path
	let breadcrumbs = $derived.by(() => {
		const paths = page.url.pathname.split('/').filter(Boolean);
		return paths.map((path, index) => {
			const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
			const url = '/' + paths.slice(0, index + 1).join('/');
			return { label, url };
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
		>
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						{#each breadcrumbs as breadcrumb, i (breadcrumb.url)}
							<Breadcrumb.Separator class="hidden md:block" />
							<Breadcrumb.Item>
								{#if i === breadcrumbs.length - 1}
									<Breadcrumb.Page>{breadcrumb.label}</Breadcrumb.Page>
								{:else}
									<Breadcrumb.Link href={breadcrumb.url}>{breadcrumb.label}</Breadcrumb.Link>
								{/if}
							</Breadcrumb.Item>
						{/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
		<main class="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-4 p-8">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
