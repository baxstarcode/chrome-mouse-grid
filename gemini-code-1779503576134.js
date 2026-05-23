// 1. Create and inject the grid
const grid = document.createElement('div');
grid.id = 'custom-grid-overlay';
document.body.appendChild(grid);

// 2. Create and inject the coordinate tooltip
const tooltip = document.createElement('div');
tooltip.id = 'custom-coord-tooltip';
tooltip.innerText = "X: 0 | Y: 0";
document.body.appendChild(tooltip);

// 3. Listen for mouse movements and update the tooltip position and text
document.addEventListener('mousemove', (e) => {
  // Update position to follow the mouse
  tooltip.style.left = `${e.clientX}px`;
  tooltip.style.top = `${e.clientY}px`;
  
  // Update text with current coordinates
  tooltip.innerText = `X: ${e.clientX} | Y: ${e.clientY}`;
});