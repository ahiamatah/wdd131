
// Declare references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the Add Chapter button
button.addEventListener('click', function() {
  const chapter = input.value.trim(); // removes unnecessary white space

  if (chapter !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set contents
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    // deleteButton.setAttribute('aria-label', `Remove ${chapter}`); this code is only necessary if we want to add a screen reader for delete button

    // Append list item to the list
    list.appendChild(li);
    // Append delete button to list item
    li.appendChild(deleteButton);


    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
    });

    // Clear input
    input.value = '';
  }

  // Always focus input
  input.focus();
});
