<script lang="ts">
	import {
		Handle,
		Position,
		type NodeProps,
		useSvelteFlow,
	} from "@xyflow/svelte";
	import NodeWrapper from "../nodewrapper.svelte";

	const { updateNodeData } = useSvelteFlow();

	type $$Props = NodeProps;
	$$restProps;
	export let id: $$Props["id"];
	id;
	export let data: $$Props["data"];
	export let label = data["label"];
	export let value = data["value"];
	export let min = data["min"];
	export let max = data["max"];

	$: updateNodeData(id, { value: value });
</script>

<NodeWrapper {id} {label}>
	<Handle type="source" position={Position.Right} />
	<input
		class="nodrag accent-[#ff4000]"
		style="direction: rtl;"
		type="range"
		{min}
		{max}
		bind:value
	/>
</NodeWrapper>
