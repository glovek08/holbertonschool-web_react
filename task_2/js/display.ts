
type ElementType = 'p' | 'heading';

export function displayOutput(output: string, elementType: ElementType = 'p'): void {
  const testOutputsSection = document.querySelector('#test-output');
  let newEl: HTMLElement; // remove if problems.

  if (elementType === 'heading') {
    newEl = document.createElement('h3');
    newEl.style.color = '#e4e9eeff';
    newEl.style.background = "#3f464dff";
    newEl.style.padding = '10px 5%';
    newEl.style.marginTop = '20px';
    newEl.style.fontWeight = '800';
  } else {
    newEl = document.createElement('p');
    newEl.style.color = '#34495e';
    newEl.style.padding = '5px 5%';
    newEl.style.margin = '5px 0';
    newEl.style.fontWeight = '100';
  }

  newEl.textContent = output;

  if (testOutputsSection && testOutputsSection instanceof HTMLElement) {
    Object.assign(testOutputsSection.style, {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px 10%',
      backgroundColor: '#e6e8ebff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    })
    testOutputsSection.appendChild(newEl);
  } else {
    console.warn("Output section not reachable!");
  }
}