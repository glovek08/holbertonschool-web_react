 
type ElementType = 'p' | 'heading' | 'code';

export function displayOutput(output: string, elementType: ElementType = 'p'): void {
  const outputSection = document.createElement("section");
  outputSection.id = "test-output";
  document.documentElement.appendChild(outputSection);
  let newEl: HTMLElement; // remove if problems.

  if (elementType === 'heading') {
    newEl = document.createElement('h3');
    newEl.style.color = '#e4e9eeff';
    newEl.style.background = "#3f464dff";
    newEl.style.padding = '10px 5%';
    newEl.style.marginTop = '20px';
    newEl.style.fontWeight = '800';
  } else if (elementType === 'code') {
    newEl = document.createElement('pre');
    newEl.style.backgroundColor = '#f5f5f5';
    newEl.style.padding = '10px';
    newEl.style.border = '1px solid #ddd';
    newEl.style.borderRadius = '4px';
    newEl.style.fontFamily = 'monospace';
    newEl.style.overflow = 'auto';
  } else {
    newEl = document.createElement('p');
    newEl.style.color = '#34495e';
    newEl.style.padding = '5px 5%';
    newEl.style.margin = '5px 0';
    newEl.style.fontWeight = '100';
  }

  newEl.textContent = output;

  if (outputSection && outputSection instanceof HTMLElement) {
    Object.assign(outputSection.style, {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px 10%',
      backgroundColor: '#e6e8ebff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    })
    outputSection.appendChild(newEl);
  } else {
    console.warn("Output section not reachable!");
  }
}