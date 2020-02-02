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
    shoppingCartContent.addEventListener('click', removeCourse)

    // when the clear cart
    clearCartBtn.addEventListener('click', clearCart);

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
    }
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
                <img src="${course.imag}">
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>            

    `;

    shoppingCartContent.appendChild(row);
}
// remove course
function removeCourse(e) {
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearCart() {
    // shoppingCartContent.innerHTML = '';
    while (shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}