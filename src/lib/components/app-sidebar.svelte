<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import sidebarConfig from "$lib/config/sidebar.json";
</script>

<Sidebar.Root {...$$props}>
	<Sidebar.Header>
		<div class="flex items-center gap-2 px-4 py-2">
			<a href="/" class="font-bold text-xl">Portfolio</a>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each sidebarConfig.navMain as group}
			<Sidebar.Group>
				<Sidebar.GroupLabel>
					{#snippet child({ props })}
						<a href={group.url} {...props} class={props.class + " hover:text-sidebar-foreground transition-colors"}>
							{group.title}
						</a>
					{/snippet}
				</Sidebar.GroupLabel>
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
