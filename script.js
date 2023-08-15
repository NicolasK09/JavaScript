// GET 
fetch('https://list.ly/api/v4/meta?url=http://google.com')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


// DELETE 
fetch('https://list.ly/api/v4/meta?url=http://google.com', {
  method: 'DELETE'
})
  .then(response => {
    console.log('Deleted successfully');
  })
  .catch(error => {
    console.error(error);
  });

function handleFormSubmit(event) {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  if (nameInput && emailInput) {
    var name = nameInput.value;
    var email = emailInput.value;


    var requestBody = {
      name: name,
      email: email
    };


    var jsonData = JSON.stringify(requestBody);


    var xhr = new XMLHttpRequest();


    xhr.open('POST', 'https://list.ly/api/v4/meta?url=http://google.com', true); 


    xhr.setRequestHeader('Content-Type', 'application/json');


    xhr.onload = function() {
      if (xhr.status === 200) {

        var response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {

        console.log('Request failed. Status code: ' + xhr.status);
      }
    };


    xhr.send(jsonData);
  } else {
    console.log('Input elements not found');
  }
}


var form = document.getElementById('myForm');
if (form) {
  form.addEventListener('submit', handleFormSubmit);
} else {
  console.log('POST Response = https://list.ly/api/v4/meta?url=http://google.com');
}




document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slidesContainer = document.querySelector('.slides-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let slideWidth;
  let slideIndex = 0;

  function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(slideIndex);
  }

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  function goToPrevSlide() {
    slideIndex = (slideIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
    showSlide(slideIndex);
  }

  function goToNextSlide() {
    slideIndex = (slideIndex + 1) % slidesContainer.children.length;
    showSlide(slideIndex);
  }

  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);


  window.addEventListener('resize', updateSlideWidth);


  updateSlideWidth();
});



var burgerIcon = document.querySelector('.burger-icon');
var burgerMenu = document.querySelector('.burger-menu');

burgerIcon.addEventListener('click', function() {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('show');
});

var burgerIcon1 = document.querySelector('.burger-icon1');
var burgerMenu1 = document.querySelector('.burger-menu');

burgerIcon1.addEventListener('click', function() {
  burgerIcon1.classList.toggle('active');
  burgerMenu1.classList.toggle('show');
});

var burgerIcon2 = document.querySelector('.burger-icon2');
var burgerMenu2 = document.querySelector('.burger-menu');

burgerIcon2.addEventListener('click', function() {
  burgerIcon2.classList.toggle('active');
  burgerMenu2.classList.toggle('show');
});



var accordionItems = document.getElementsByClassName("accordion-item");

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordionContent = this.querySelector(".accordion-content");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.getElementById('my-button');
  if (myButton) {
    myButton.addEventListener('click', () => {

      console.log('Button clicked!');
    });
  } else {
    console.error('Button element not found.');
  }
});

function showCookiesNotification() {
  var cookiesNotification = document.getElementById('cookies-notification');
  cookiesNotification.style.display = 'block';
}


function hideCookiesNotification() {
  var cookiesNotification = document.getElementById('cookies-notification');
  cookiesNotification.style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}


function checkCookiesAccepted() {
  var cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (!cookiesAccepted) {
      showCookiesNotification();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  checkCookiesAccepted();
});


var acceptButton = document.getElementById('accept-cookies');
acceptButton.addEventListener('click', function() {
  hideCookiesNotification();
});




function addTodo() {
  let todo = document.getElementById("todoInput").value;
  let list = document.getElementById("todoList");
  let newTodo = document.createElement("li");
  newTodo.innerHTML = todo;
  list.appendChild(newTodo);
}



const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);


console.log("Number of Invalid Entries =", invalidEntries);







  fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((responseData) => console.log(responseData));




