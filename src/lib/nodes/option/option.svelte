<script lang="ts">
	import { Handle, Position, type NodeProps, useSvelteFlow } from '@xyflow/svelte';
	import NodeWrapper from '../nodewrapper.svelte';
	import type { NodeData } from '../defaultstate';

	const { updateNodeData } = useSvelteFlow();

	type $$Props = NodeProps;
	$$restProps;
	export let id: $$Props['id'];
	id;
	export let data: $$Props['data'];
	export let label = data['label'];
	export let shape = data['shape'];
	export let options = data['options'];

	$: updateNodeData(id, { shape: shape });
</script>

<NodeWrapper {label}>
	<Handle type="source" position={Position.Right} />
	<div class="flex flex-col nodrag">
		{#each options as option}
			<label class="flex">
				<input
					bind:group={shape}
					class="accent-[#ff4000]"
					type="radio"
					value={option}
					checked={shape === option}
				/>
				<span class="ml-2">{option}</span>
			</label>
		{/each}
	</div>
</NodeWrapper>
