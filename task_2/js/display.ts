
export function displayOutput(output: string):void {
  const testOutputsSection = document.querySelector('#test-output');
  const p = document.createElement("p");
  p.textContent = output;
  if (testOutputsSection) {
    testOutputsSection.appendChild(p);
  } else {
    console.warn("Output section not reachable!");
  }
}