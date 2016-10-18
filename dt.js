function value(node, mark=false) {
  let val = null;
  switch (node.type) {
    case 'circle':
      val = circleValue(node, mark);
      break;
    case 'box':
      val = boxValue(node, mark);
      break;
    case 'value':
      val = node.value;
      break;
  }
  console.log(node.value, mark, val);
  if (!node.value && mark && val) {
    node.value = val;
    console.log(node.name, mark);

  }
  return val;
}

function circleValue(node, mark) {
  let val = 0;
  for (let child of node.next) {
    val += expected(value(child, mark), child.probability);
  }
  return val;
}



function boxValue(node, mark) {
  let val = -Infinity;
  for (let child of node.next) {
    const childVal = value(child, mark);
    if (childVal > val) {
      val = childVal;
    }
  }
  return val;
}

function expected(val, probability) {
  return probability * val;
}
