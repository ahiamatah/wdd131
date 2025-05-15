
// Declare references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the Add Chapter button
button.addEventListener('click', () => {
  const chapter = input.value.trim(); // Clean input

  if (chapter !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set contents
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to the list
    list.appendChild(li);

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Clear input
    input.value = '';
  }

  // Always focus input
  input.focus();
});
