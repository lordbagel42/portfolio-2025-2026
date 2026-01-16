<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';

	let isModal1Open = $state(false);
	let isModal2Open = $state(false);
	let isModal3Open = $state(false);

	function openModal1() {
		isModal1Open = true;
	}

	function openModal2() {
		isModal2Open = true;
	}

	function openModal3() {
		isModal3Open = true;
	}

	function closeModal1() {
		isModal1Open = false;
	}

	function closeModal2() {
		isModal2Open = false;
	}

	function closeModal3() {
		isModal3Open = false;
	}
</script>

<div class="container">
	<header class="header">
		<h1>Reusable Modal Component</h1>
		<p class="subtitle">Click any button below to see the modal in action</p>
	</header>

	<div class="button-grid">
		<button class="demo-button button-1" onclick={openModal1}>Open Modal 1</button>
		<button class="demo-button button-2" onclick={openModal2}>Open Modal 2</button>
		<button class="demo-button button-3" onclick={openModal3}>Open Modal 3</button>
	</div>

	<div class="info-section">
		<h2>Features</h2>
		<ul class="features-list">
			<li>✨ Accessible with keyboard navigation (Escape to close)</li>
			<li>🎯 Click outside to close (backdrop click)</li>
			<li>📱 Fully responsive design</li>
			<li>🎨 Customizable content via snippets</li>
			<li>⚡ Built with Svelte 5 runes ($state, $effect)</li>
			<li>🔒 Focus trap and proper ARIA attributes</li>
		</ul>
	</div>
</div>

<!-- Modal 1: Simple Content -->
<Modal bind:isOpen={isModal1Open} onClose={closeModal1} title="Welcome Modal">
	<p>This is a simple modal with basic text content.</p>
	<p>You can close it by:</p>
	<ul>
		<li>Clicking the X button</li>
		<li>Pressing the Escape key</li>
		<li>Clicking outside the modal</li>
	</ul>
</Modal>

<!-- Modal 2: Rich Content -->
<Modal bind:isOpen={isModal2Open} onClose={closeModal2} title="Rich Content Example">
	<div class="modal-demo-content">
		<h3>This modal contains more complex content</h3>
		<p>
			You can include any HTML or Svelte components inside the modal using the children snippet.
		</p>

		<div class="feature-box">
			<h4>🎨 Styling</h4>
			<p>Style your content however you like!</p>
		</div>

		<div class="feature-box">
			<h4>📦 Components</h4>
			<p>Add any Svelte components or HTML elements</p>
		</div>

		<button class="action-button" onclick={closeModal2}>Got it!</button>
	</div>
</Modal>

<!-- Modal 3: Form Example -->
<Modal bind:isOpen={isModal3Open} onClose={closeModal3} title="Form Example">
	<form
		class="modal-form"
		onsubmit={(e) => {
			e.preventDefault();
			closeModal3();
		}}
	>
		<div class="form-group">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" placeholder="Enter your name" />
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Enter your email" />
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
		</div>

		<div class="form-actions">
			<button type="button" class="button-secondary" onclick={closeModal3}>Cancel</button>
			<button type="submit" class="button-primary">Submit</button>
		</div>
	</form>
</Modal>

<style>
	.container {
		min-height: 100vh;
		padding: 2rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.subtitle {
		font-size: 1.125rem;
		opacity: 0.9;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.button-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		max-width: 800px;
		margin: 0 auto 3rem;
	}

	.demo-button {
		padding: 1rem 2rem;
		font-size: 1.125rem;
		font-weight: 600;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s;
		color: white;
	}

	.button-1 {
		background: #3b82f6;
	}

	.button-1:hover {
		background: #2563eb;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
	}

	.button-2 {
		background: #8b5cf6;
	}

	.button-2:hover {
		background: #7c3aed;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
	}

	.button-3 {
		background: #ec4899;
	}

	.button-3:hover {
		background: #db2777;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
	}

	.info-section {
		max-width: 800px;
		margin: 0 auto;
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.info-section h2 {
		font-size: 1.875rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: #111827;
	}

	.features-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.features-list li {
		font-size: 1.125rem;
		color: #4b5563;
		padding-left: 0;
	}

	.modal-demo-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.modal-demo-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #111827;
		margin: 0;
	}

	.modal-demo-content p {
		color: #4b5563;
		line-height: 1.6;
		margin: 0;
	}

	.feature-box {
		background: #f3f4f6;
		padding: 1rem;
		border-radius: 8px;
		border-left: 4px solid #3b82f6;
	}

	.feature-box h4 {
		margin: 0 0 0.5rem 0;
		color: #111827;
	}

	.feature-box p {
		margin: 0;
		font-size: 0.875rem;
	}

	.action-button {
		background: #3b82f6;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
		align-self: flex-start;
	}

	.action-button:hover {
		background: #2563eb;
	}

	.modal-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-group label {
		font-weight: 600;
		color: #374151;
		font-size: 0.875rem;
	}

	.form-group input,
	.form-group textarea {
		padding: 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		font-size: 1rem;
		font-family: inherit;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}

	.form-actions {
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}

	.button-primary,
	.button-secondary {
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		border: none;
		transition: all 0.2s;
	}

	.button-primary {
		background: #3b82f6;
		color: white;
	}

	.button-primary:hover {
		background: #2563eb;
	}

	.button-secondary {
		background: #f3f4f6;
		color: #374151;
	}

	.button-secondary:hover {
		background: #e5e7eb;
	}

	@media (max-width: 640px) {
		.container {
			padding: 1rem;
		}

		.header h1 {
			font-size: 1.875rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.button-grid {
			grid-template-columns: 1fr;
		}

		.info-section {
			padding: 1.5rem;
		}

		.features-list li {
			font-size: 1rem;
		}
	}
</style>
