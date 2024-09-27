// Get the necessary DOM elements
const inputArray = document.getElementById('input-array');
const submitButton = document.getElementById('submit-array');
const arrayElements = document.getElementById('array-elements');

// Get the pop button element
const popButton = document.getElementById('pop-array');

// Get the push button element
const pushButton = document.getElementById('push-array');

// Get the shift and unshift button elements
const shiftButton = document.getElementById('shift-array');
const unshiftButton = document.getElementById('unshift-array');

// Add event listener to the submit button
submitButton.addEventListener('click', displayArray);

// Add event listener for the 'Enter' key on the input field
inputArray.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        displayArray();
    }
});

// Function to display the array
function displayArray() {
    const input = inputArray.value;
    if (input.trim() !== '') {
        // Split the input string into an array 
        const array = input.split(',').map(item => item.trim());
        
        // Store the array in localStorage
        localStorage.setItem('displayedArray', JSON.stringify(array));
        
        // Display the array
        updateArrayDisplay();
        
        inputArray.value = ''; // Clear the input field after submission
    }
}

// Function to update the array display
function updateArrayDisplay() {
    const storedArray = JSON.parse(localStorage.getItem('displayedArray') || '[]');
    arrayElements.textContent = storedArray.join(', ');
}

// Call updateArrayDisplay on page load
window.addEventListener('load', updateArrayDisplay);

// Function to pop the last element from the array
function popArray() {
    const storedArray = JSON.parse(localStorage.getItem('displayedArray') || '[]');
    
    if (storedArray.length > 0) {
        storedArray.pop(); // Remove the last element
        localStorage.setItem('displayedArray', JSON.stringify(storedArray));
        updateArrayDisplay();
    }
}

// Add event listener to the pop button
popButton.addEventListener('click', popArray);

// Function to push a new element to the array
function pushArray() {
    const newElement = inputArray.value.trim();
    if (newElement !== '') {
        const storedArray = JSON.parse(localStorage.getItem('displayedArray') || '[]');
        storedArray.push(newElement);
        localStorage.setItem('displayedArray', JSON.stringify(storedArray));
        updateArrayDisplay();
        inputArray.value = ''; // Clear the input field after pushing
    }
}

// Add event listener to the push button
pushButton.addEventListener('click', pushArray);

// Add event listeners to the shift and unshift buttons
shiftButton.addEventListener('click', shiftArray);
unshiftButton.addEventListener('click', unshiftArray);

// Function to shift (remove the first element from) the array
function shiftArray() {
    const storedArray = JSON.parse(localStorage.getItem('displayedArray') || '[]');
    
    if (storedArray.length > 0) {
        storedArray.shift(); // Remove the first element
        localStorage.setItem('displayedArray', JSON.stringify(storedArray));
        updateArrayDisplay();
    }
}

// Function to unshift (add a new element to the beginning of) the array
function unshiftArray() {
    const newElement = inputArray.value.trim();
    if (newElement !== '') {
        const storedArray = JSON.parse(localStorage.getItem('displayedArray') || '[]');
        storedArray.unshift(newElement);
        localStorage.setItem('displayedArray', JSON.stringify(storedArray));
        updateArrayDisplay();
        inputArray.value = ''; // Clear the input field after unshifting
    }
}