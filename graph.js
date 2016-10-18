let idpool = 0;

function createElements(node, parent = null) {
  idpool = idpool + 1;
  const curId = idpool;
  const label = `${node.name} - ${node.probability?'Pr: ' + node.probability:''} Val:${node.value}`;
  const obj = {
    data: {
      id: curId,
      label
    },
    classes: node.type
  };
  let elements = [obj];
  if (parent) {
    const edge = {
      data: {
        id: `${parent}${curId}`,
        source: parent,
        target: curId
      }
    };
    elements.push(edge);
  }
  if (node.next) {
    for (let child of node.next) {
      elements = elements.concat(createElements(child, curId));
    }
  }
  return elements;
}

function createGraph(node) {
  const cy = cytoscape({
    container: document.getElementById('container'),
    elements: createElements(node),
    style: [{
      selector: 'node.box',
      style: {
        shape: 'rectangle',
        'background-color': 'green',
        label: 'data(label)'
      }
    }, {
      selector: 'node.circle',
      style: {
        shape: 'circle',
        'background-color': 'red',
        label: 'data(label)'
      }
    }, {
      selector: 'node.value',
      style: {
        shape: 'hexagon',
        'background-color': 'orange',
        label: 'data(label)'
      }
    }],
    layout: {
      name: 'breadthfirst',
      directed: true,
      fit: true,
      spacingFactor: 1
    }
  });
}
