const display = document.getElementById('display');
const toggleTheme = document.getElementById('toggleTheme');

// Append character to display
function appendChar(char) {
  display.value += char;
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate and display result
function calculate() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (e) {
    display.value = 'Error';
  }
}

// Toggle between light and dark themes
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Allow keyboard input
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.%".includes(e.key)) {
    appendChar(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteChar();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
