let experiences = [];

function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let userName = data.get('name');
  let userCountry = data.get('country');
  let userDescription = data.get('description');
  experiences.push({userName, userCountry, userDescription});
  console.log({userName, userCountry, userDescription});
}

// console.log("Experiences array data: ", experiences);

function showExperiences() {
  experiences.forEach(exper => {
    document.getElementsByClassName("all-posts");
    let h3 = document.createElement('h3');
    h3.textContent = exper[0];

    let p = document.createElement('p');
    p.classList.add('experience-meta');
    p.textContent = exper[1];

    let p2 = document.createElement('p');
    p2.textContent = exper[2];
  });

  document.append(h3);
  document.append(p);
  document.append(p2);
}
  
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


///// Form Functionality
// to display the Name field if they want to do name for the form 
function toggleName() {
  var isAnonymous = document.getElementById("anonymous").value;
  var nameField = document.getElementById("nameField");
  // If the user chooses to submit anonymously, hide the name field.
  if (isAnonymous === "yes") {
      nameField.style.display = "none";
  } else {
      nameField.style.display = "block";
  }
}

function toggleNameField() {
  var selectBox = document.getElementById('anonymous');
  var userInput = document.getElementById('nameField');
  userInput.style.display = selectBox.value === 'yes' ? 'none' : 'block';
}