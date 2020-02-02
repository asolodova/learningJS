// Variables
const courses = document.querySelector('#courses-list');



// Listeners
loadEventListeners();

function loadEventListeners() {
    // When a new course is added
    courses.addEventListener('click', buyCourse);

}


// Functions
function buyCourse(e) {
    console.log('added');
    // Use delegation to find the course that was added

}