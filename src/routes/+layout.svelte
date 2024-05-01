<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">CodeBurl </strong>
				<span class="thin-small-text"> &nbsp Enhancing Multi-Language Development in Scientific
					Visualization Through Visual Programming</span>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.thin-small-text {
		font-weight: 300; /* This makes the font thinner */
		font-size: 1rem; /* This sets the font size to a smaller value */
	}
	.text-xl
	{
		font-size: 1.1rem;
	}
</style>
