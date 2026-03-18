<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import sidebarConfig from "$lib/config/sidebar.json";
</script>

<Sidebar.Root {...$$props}>
	<Sidebar.Header>
		<div class="flex items-center gap-2 px-4 py-2">
			<span class="font-bold text-xl">Portfolio</span>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each sidebarConfig.navMain as group}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a href={item.url} {...props}>{item.title}</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer />
	<Sidebar.Rail />
</Sidebar.Root>
