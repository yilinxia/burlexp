# Exploration Place for Building Reusable UI components

## Local Development
```
conda create -n burlexp
conda activate burlexp
conda install conda-forge::nodejs
git clone https://github.com/yilinxia/burlexp
npm update
npm install
npm run dev -- --open
```

## Supported Nodes
- colorpicker
- slider
- option


# Customize Nodes
## Node creation
Create a directory `nodeX` within `lib/nodes` where you'll store all the necessary files. This should include the `nodeX.svelte` file, which is used to define a node.

Here's how to create the `nodeX.svelte` file:
- Import NodeWrapper: Start by importing the NodeWrapper from another Svelte file. This will help you wrap the layout of your node into a consistent format.
```ts
import NodeWrapper from "../nodewrapper.svelte";
```
- Define the Layout: Use HTML and Svelte syntax to define the layout of your node. This will include `handle`, `input` and any other elements you need, along with styling. You need include `{id}`
- Add Script Functions: In the `<script>` part, add any essential functions or logic needed for your node's behavior.
- Styling: You can also add styles for the node if necessary. This is done in the `<style>`

After defining the node, you need you export it (in an `index.ts`)to make sure that it can be used in other svelte files

```ts
export { default as nodex } from './nodeX.svelte'
```

## Node Testing
**import the defined node type** <br>
Generally speaking, the next step is to import the node type in the `routes/workspace.svelte` which will allow the program to recognize certain node types

**define the node instance and test**<br>
Then we can define the node instance such as default values of the node in the `test_node.ts`