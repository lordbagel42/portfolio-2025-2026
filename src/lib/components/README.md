# Reusable Modal Component

A fully-featured, accessible modal component built with Svelte 5 using the latest runes (`$state`, `$effect`, `$bindable`).

## Features

✨ **Accessible** - Keyboard navigation support (Escape to close)  
🎯 **User-friendly** - Click outside to close (backdrop click)  
📱 **Responsive** - Fully responsive design for all screen sizes  
🎨 **Customizable** - Pass any content via Svelte 5 snippets  
⚡ **Modern** - Built with Svelte 5 runes for optimal performance  
🔒 **Secure** - Proper ARIA attributes and focus management

## Usage

### Basic Example

```svelte
<script>
	import Modal from '$lib/components/Modal.svelte';

	let isOpen = $state(false);

	function openModal() {
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}
</script>

<button onclick={openModal}>Open Modal</button>

<Modal bind:isOpen onClose={closeModal} title="My Modal">
	<p>This is the modal content!</p>
</Modal>
```

### With Rich Content

```svelte
<Modal bind:isOpen onClose={closeModal} title="Rich Content">
	<div>
		<h3>Heading</h3>
		<p>You can include any HTML or Svelte components here.</p>

		<div class="feature-box">
			<h4>🎨 Styling</h4>
			<p>Style your content however you like!</p>
		</div>

		<button onclick={closeModal}>Got it!</button>
	</div>
</Modal>
```

### With Form

```svelte
<Modal bind:isOpen onClose={closeModal} title="Contact Form">
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
	>
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" name="name" />
		</div>

		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" />
		</div>

		<button type="submit">Submit</button>
	</form>
</Modal>
```

## Props

| Prop       | Type         | Required | Description                             |
| ---------- | ------------ | -------- | --------------------------------------- |
| `isOpen`   | `boolean`    | Yes      | Controls modal visibility (bindable)    |
| `onClose`  | `() => void` | Yes      | Function called when modal should close |
| `title`    | `string`     | Yes      | Modal header title                      |
| `children` | `Snippet`    | No       | Modal content (using Svelte 5 snippets) |

## Accessibility

- **Keyboard Navigation**: Press `Escape` to close the modal
- **Focus Management**: Focus is managed automatically when modal opens/closes
- **ARIA Attributes**: Proper ARIA labels for screen readers
- **Backdrop Click**: Click outside the modal to close it

## Browser Support

This component uses the native HTML `<dialog>` element with the `.showModal()` API, which is supported in:

- Chrome/Edge 37+
- Firefox 98+
- Safari 15.4+

## Styling

The modal comes with default styling that can be customized. The component uses scoped CSS with the following customizable parts:

- `.modal` - The dialog element
- `.modal-content` - Content wrapper
- `.modal-header` - Header section
- `.modal-body` - Body section with scrollable content
- `.close-button` - Close button in header

## Implementation Details

- Uses native `<dialog>` element for better accessibility and browser support
- Implements proper focus trap within modal
- Handles backdrop clicks and escape key automatically
- Responsive design with mobile-friendly layout
- Smooth animations and transitions

## License

MIT
