const button = document.getElementById('submit');
const textArea = document.getElementById('input');

textArea.value = sampleSimple;

button.addEventListener('click', () => {
  const parsedInput = parse(textArea.value);
  value(parsedInput, true);
  createGraph(parsedInput);
});
