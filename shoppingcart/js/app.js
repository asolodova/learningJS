// Variables
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');



// Listeners
loadEventListeners();

function loadEventListeners() {
    // When a new course is added
    courses.addEventListener('click', buyCourse);

    // when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // when the clear cart
    clearCartBtn.addEventListener('click', clearCart);

    // document ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);

}

// Functions
function buyCourse(e) {
    e.preventDefault();
    // Use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')){
     const course = e.target.parentElement.parentElement;

     // read the value
        getCourseInfo(course);
    }
}
function getCourseInfo(course) {
    console.log(course);
    // Create an object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    };
    console.log(courseInfo.image);
    // Insert info the shopping cart
    addIntoCart(courseInfo);
}
function addIntoCart(course) {
    // Create a <tr>
    const row = document.createElement('tr');

    // Build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.imag}" alt="1">
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>            

    `;

    shoppingCartContent.appendChild(row);

    // Add course info Storage
    saveInfoStorage(course);

}

// Add courses into the local storage
function saveInfoStorage(course) {
    let courses = getCoursesFromStorage();

    // add the course into array
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));

}
// Get courses into the local storage
function getCoursesFromStorage() {

    let courses;
    // if something exist on storage then we get the value, otherwise create an empty array
    if(localStorage.getItem('courses') === null){
        courses = [];
    } else {
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}
// remove course
function removeCourse(e) {
    let course, courseID;
    // Remove from the dom
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseID = course.querySelector('a').getAttribute('data-id');
    }
    console.log(courseID);
    // remove from storage
    removeCourseLocalStorage(courseID);

}
function removeCourseLocalStorage(id) {
    let coursesLS = getCoursesFromStorage();

    // Loop
    coursesLS.forEach(function (courseLS, index) {
        if (courseLS.id === id){
            coursesLS.splice(index, 1);
        }
    });
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}

function clearCart() {
    // shoppingCartContent.innerHTML = '';
    while (shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    // Clear from local  storage
    clearLocalStorage();
}
function clearLocalStorage() {
    localStorage.clear();

}

function getFromLocalStorage() {
    let coursesLS = getCoursesFromStorage();

    // Loop
    coursesLS.forEach(function (course) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td>
                <img src="${course.imag}" alt="1">
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>            
    `;
        shoppingCartContent.appendChild(row);
    })
}