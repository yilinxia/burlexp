<script lang="ts">
	import {
		useNodes,
		NodeResizer,
		NodeToolbar,
		Position,
		useUpdateNodeInternals,
	} from "@xyflow/svelte";
	import { Icon, type IconSource } from "@steeze-ui/svelte-icon";
	import {
		DocumentDuplicate,
		Trash,
		ArrowsPointingOut,
		ArrowsPointingIn,
	} from "@steeze-ui/heroicons";
	export let id: string;
	export let icon: IconSource;
	export let label: string;
	export let resizable: boolean = false;
	export let toolbar: boolean = true;
	export let expanded: boolean = false;
	export let highlighted: boolean = false;
	let oldWidth: number | null | undefined = 0;
	let oldHeight: number | null | undefined = 0;

	const nodes = useNodes();
	const updateNodeInternals = useUpdateNodeInternals();

	function expandNode() {
		const result = $nodes.find((node) => node.id === id);
		if (!result) return;
		if (expanded) {
			result.height = oldHeight;
			result.width = oldWidth;
			expanded = false;
		} else {
			oldHeight = result.height;
			oldWidth = result.width;
			result.height = 600;
			result.width = 800;
			expanded = true;
		}
		updateNodeInternals(result.id);
	}

	function removeNode() {
		const result = $nodes.findIndex((node) => node.id === id);
		if (result === undefined) return;
		$nodes.splice(result, 1);
		updateNodeInternals(id);
	}

	function duplicateNode() {
		const result = $nodes.find((node) => node.id === id);
		if (!result) return;
		$nodes.push({
			id: Math.random().toString(36).substring(7),
			type: result.type,
			position: {
				x: result.position.x + 50,
				y: result.position.y + 50,
			},
			data: { ...result.data },
		});
		updateNodeInternals($nodes[$nodes.length - 1].id);
	}
</script>

{#if resizable}
	<NodeResizer minWidth={100} minHeight={60} maxHeight={600} maxWidth={800} />
{/if}
{#if toolbar}
	<NodeToolbar position={Position.Top} align="start">
		<button
			type="button"
			class="btn-icon btn-icon-sm variant-filled"
			on:click={removeNode}><Icon size="1.25rem" src={Trash} /></button
		>
		<button
			type="button"
			class="btn-icon btn-icon-sm variant-filled"
			on:click={duplicateNode}
			><Icon size="1.25rem" src={DocumentDuplicate} /></button
		>
		<button
			type="button"
			class="btn-icon btn-icon-sm variant-filled"
			on:click={expandNode}
			><Icon
				size="1.25rem"
				src={expanded ? ArrowsPointingIn : ArrowsPointingOut}
			/></button
		>
	</NodeToolbar>
{/if}

<div class="dstl-nodebase" class:dstl-highlight={highlighted}>
	<div class="dstl-nodetitle">
		{#if icon}<span class="mr-2"><Icon size="1rem" src={icon} /></span
			>{/if}<span>{label}</span>
	</div>
	<div class="dstl-nodeslot">
		<slot />
	</div>
</div>
