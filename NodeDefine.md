### Colorpicker
```
  {
    id: '1',
    type: 'colorpick',
    position: { x: 50, y: 0 },
    data: {
      flowState, ## default color
      label: 'shape color'  % node name
    },
    class: 'w-[150px]'
  }
```

### Slider
```
 {
    id: '2',
    type: 'slider',
    position: { x: 40, y: 280 },
    data: {
      flowState,  % min-max default value
      label: 'zoom level' %node name
    },
    class: 'w-[150px]'
  }
```


### Option
```
{
    id: '3',
    type: 'option',
    position: { x: 0, y: 125 },
    data: {
      flowState, % what would be the options
      label: 'shape type'
    },
    class: 'w-[150px]'
  }
```