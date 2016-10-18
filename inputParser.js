const spacesEx = /^( *)\b/;
const eofEx = /[\r\n]+/;
const infoEx = /([cbv]) +([\w']+) *(v(-?\d+(\.\d+)?))? *(p(\d+(\.\d+)?))? */;

function parse(input, indentation = 2) {
  input = input.trim();
  const indentMap = [];
  let root = null;
  const lines = input.split(eofEx);
  for (let line of lines) {
    const indentLevel = numOfSpaces(line)/indentation;
    const obj = parseInfo(line);
    indentMap[indentLevel] = obj;
    const parentLevel = indentLevel - 1;
    if (parentLevel >= 0) {
      addToParent(obj, indentMap[parentLevel]);
    } else {
      root = obj
    }
  }
  return root;
}

function addToParent(child, parent) {
  if (parent.next == null) {
    parent.next = [];
  }
  parent.next.push(child);
}
// line syntax `c|b|v name [v####] [p###]`
function parseInfo(str) {
  const charMap = {c: 'circle', b:'box', v:'value'};
  const result = infoEx.exec(str);
  return {
    type: charMap[result[1]],
    name: result[2],
    value: result[4]?parseFloat(result[4]):undefined,
    probability: result[7]?parseFloat(result[7]):undefined
  }
}

function numOfSpaces(str) {
  return spacesEx.exec(str)[1].length;
}




// console.log(parse(sample));
// console.log(parse(sampleSimple));
