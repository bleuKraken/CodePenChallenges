let dropdownPeople = document.getElementById('dropdown-people');
let dropdownNature = document.getElementById('dropdown-nature');
let dropdownArchitecture = document.getElementById('dropdown-architecture');
let dropdownFood = document.getElementById('dropdown-food');
let dropdownSports = document.getElementById('dropdown-sports');

//Event listeners below
window.addEventListener("click", function(event) {

  if(event.target.matches('.closing-icon')) {
    document.getElementById('menu-container').classList.toggle("invisible");
    document.getElementById('body').classList.toggle("gradient-background");
    document.getElementById('home-page').classList.toggle("invisible");
  }

  if(event.target.matches('#view-navigation')) {
    document.getElementById('home-page').classList.toggle("invisible");
    document.getElementById('body').classList.toggle("gradient-background");
    document.getElementById('menu-container').classList.toggle("invisible");
}
  //Clear all
  if (event.target.matches('body') || event.target.matches('#menu-row')) {
    RemoveActiveButtons();
    RemoveDropdownList();
  }
  //If Buttons get clicked
  if (event.target.matches('.button-people')) {
    RemoveActiveButtons();
    SetButtonActive("people");
    RemoveDropdownList();
    dropdownPeople.classList.toggle('invisible');
  }
  if (event.target.matches('.button-nature')) {
    RemoveActiveButtons();
    SetButtonActive("nature");
    RemoveDropdownList();
    dropdownNature.classList.toggle('invisible');
  }
  if (event.target.matches('.button-architecture')) {
    RemoveActiveButtons();
    SetButtonActive("architecture");
    RemoveDropdownList();
    dropdownArchitecture.classList.toggle('invisible');
  }
  if (event.target.matches('.button-food')) {
    RemoveActiveButtons();
    SetButtonActive("food");
    RemoveDropdownList();
    dropdownFood.classList.toggle('invisible');
  }
  if (event.target.matches('.button-sports')) {
    RemoveActiveButtons();
    SetButtonActive("sports");
    RemoveDropdownList();
    dropdownSports.classList.toggle('invisible');
  }
});

// Change the color of a background when selected, and make sure
// no other button is selected.
function SetButtonActive(buttonSelected) {
  let buttonToSetActive = buttonSelected;
  if (buttonToSetActive === "people") {
    document.getElementById('people-background').classList.toggle('bg-primary');
    document.getElementById('people-background').classList.toggle('bg-danger');
  }
  if (buttonToSetActive === "nature") {
    document.getElementById('nature-background').classList.toggle('bg-primary');
    document.getElementById('nature-background').classList.toggle('bg-danger');
  }
  if (buttonToSetActive === "architecture") {
    document.getElementById('architecture-background').classList.toggle('bg-primary');
    document.getElementById('architecture-background').classList.toggle('bg-danger');
  }
  if (buttonToSetActive === "food") {
    document.getElementById('food-background').classList.toggle('bg-primary');
    document.getElementById('food-background').classList.toggle('bg-danger');
  }
  if (buttonToSetActive === "sports") {
    document.getElementById('sports-background').classList.toggle('bg-primary');
    document.getElementById('sports-background').classList.toggle('bg-danger');
  }
}

// Remove the dropdown content.
function RemoveDropdownList() {
  if (!dropdownPeople.classList.contains("invisible")) {
    dropdownPeople.classList.toggle('invisible');
  }
  if (!dropdownNature.classList.contains("invisible")) {
    dropdownNature.classList.toggle('invisible');
  }
  if (!dropdownArchitecture.classList.contains("invisible")) {
    dropdownArchitecture.classList.toggle('invisible');
  }
  if (!dropdownFood.classList.contains("invisible")) {
    dropdownFood.classList.toggle('invisible');
  }
  if (!dropdownSports.classList.contains("invisible")) {
    dropdownSports.classList.toggle('invisible');
  }
}

//Removes the red background from all the buttons when the user click on the background
function RemoveActiveButtons() {
  if (document.getElementById('people-background').classList.contains('bg-danger')) {
    document.getElementById('people-background').classList.remove('bg-danger');
    document.getElementById('people-background').classList.toggle('bg-primary');
  }
  if (document.getElementById('nature-background').classList.contains('bg-danger')) {
    document.getElementById('nature-background').classList.remove('bg-danger');
    document.getElementById('nature-background').classList.toggle('bg-primary');
  }
  if (document.getElementById('architecture-background').classList.contains('bg-danger')) {
    document.getElementById('architecture-background').classList.remove('bg-danger');
    document.getElementById('architecture-background').classList.toggle('bg-primary');
  }
  if (document.getElementById('food-background').classList.contains('bg-danger')) {
    document.getElementById('food-background').classList.remove('bg-danger');
    document.getElementById('food-background').classList.toggle('bg-primary');
  }
  if (document.getElementById('sports-background').classList.contains('bg-danger')) {
    document.getElementById('sports-background').classList.remove('bg-danger');
    document.getElementById('sports-background').classList.toggle('bg-primary');
  }
}
