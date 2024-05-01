<script lang="ts">
	import { Handle, Position, type NodeProps, useSvelteFlow } from '@xyflow/svelte';
	import NodeWrapper from '../nodewrapper.svelte';

	const { updateNodeData } = useSvelteFlow();

	type $$Props = NodeProps;
	$$restProps;
	export let id: $$Props['id'];
	id;
	export let data: $$Props['data'];
	export let label = data['label'];
	export let value = data['value'];

	$: updateNodeData(id, { value: value });
</script>

<NodeWrapper {id} {label}>
	<div class="flex items-center space-x-2">
		<input bind:value class="nodrag border-md w-6 h-6" type="color" />
		<p>{value}</p>
	</div>
	<Handle type="source" position={Position.Right} />
</NodeWrapper>
