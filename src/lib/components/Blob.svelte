<script lang="ts">
	import type { BlobObjective } from '$lib/types';

	interface Props {
		objective: BlobObjective;
		onClick: (objective: BlobObjective) => void;
	}

	let { objective, onClick }: Props = $props();

	function handleClick() {
		onClick(objective);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleClick();
		}
	}
</script>

<button
	class="blob"
	onclick={handleClick}
	onkeydown={handleKeydown}
	style="--blob-color: {objective.color}"
	aria-label="View {objective.title} details"
>
	<div class="blob-icon">
		<span class="icon">{objective.icon}</span>
	</div>
	<span class="blob-title">{objective.title}</span>
</button>

<style>
	.blob {
		position: relative;
		background: var(--blob-color, #6366f1);
		border: none;
		border-radius: 50%;
		width: 150px;
		height: 150px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		gap: 0.5rem;
		padding: 1rem;
	}

	.blob:hover {
		transform: scale(1.1) translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}

	.blob:active {
		transform: scale(1.05);
	}

	.blob:focus-visible {
		outline: 3px solid #2563eb;
		outline-offset: 4px;
	}

	.blob-icon {
		font-size: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}

	.blob-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: white;
		text-align: center;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		line-height: 1.2;
	}

	@media (max-width: 640px) {
		.blob {
			width: 120px;
			height: 120px;
		}

		.blob-icon {
			font-size: 2rem;
		}

		.blob-title {
			font-size: 0.75rem;
		}
	}

	@keyframes blob-float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.blob {
		animation: blob-float 3s ease-in-out infinite;
	}
</style>
