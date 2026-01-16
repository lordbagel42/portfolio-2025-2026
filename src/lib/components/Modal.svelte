<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		isOpen: boolean;
		onClose: () => void;
		title: string;
		children?: import('svelte').Snippet;
	}

	let { isOpen = $bindable(false), onClose, title, children }: Props = $props();

	let dialogElement: HTMLDialogElement;

	// Handle escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			onClose();
		}
	}

	// Handle backdrop click
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === dialogElement) {
			onClose();
		}
	}

	// Manage dialog open/close state
	$effect(() => {
		if (!dialogElement) return;

		if (isOpen) {
			dialogElement.showModal();
		} else {
			dialogElement.close();
		}
	});

	onMount(() => {
		return () => {
			if (dialogElement) {
				dialogElement.close();
			}
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<dialog bind:this={dialogElement} class="modal" onclick={handleBackdropClick} onclose={onClose}>
	<div class="modal-content">
		<header class="modal-header">
			<h2>{title}</h2>
			<button class="close-button" onclick={onClose} aria-label="Close modal">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</header>
		<div class="modal-body">
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
</dialog>

<style>
	.modal {
		border: none;
		border-radius: 12px;
		padding: 0;
		max-width: 600px;
		width: 90vw;
		max-height: 80vh;
		overflow: hidden;
		background: white;
		box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
	}

	.modal::backdrop {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
		border-bottom: 1px solid #e5e7eb;
	}

	.modal-header h2 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
		color: #111827;
	}

	.close-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		transition: background-color 0.2s;
		color: #6b7280;
	}

	.close-button:hover {
		background-color: #f3f4f6;
		color: #111827;
	}

	.modal-body {
		padding: 1.5rem;
		overflow-y: auto;
		flex: 1;
	}

	@media (max-width: 640px) {
		.modal {
			max-width: 100vw;
			width: 100vw;
			max-height: 100vh;
			border-radius: 0;
		}
	}
</style>
