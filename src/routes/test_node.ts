import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'colorpicker',
    position: { x: 50, y: 0 },
    data: {
      label: 'shape color',
      value: '#ff0000',
    },
  },
  {
    id: '2',
    type: 'slider',
    position: { x: 40, y: 280 },
    data: {
      label: 'zoom level',
      min: 1,
      max: 80,
      value: 20,
    },
  },
  {
    id: '3',
    type: 'option',
    position: { x: 0, y: 125 },
    data: {
      label: 'shape type',
      shape: "cylinder",
      options: ['cube', 'sphere', 'cylinder']
    },
  },
];

export const initialEdges: Edge[] = [];