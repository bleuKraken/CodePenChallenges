let columnView = document.getElementById('column-view');
let squareGrid = document.getElementById('square-view');


window.addEventListener("click", function(event){
  //If user clicks on "Squares"
  if(event.target.matches("#show-square-grid")) {

    if(squareGrid.classList.contains('d-none')){
      columnView.classList.add('d-none');
      squareGrid.classList.remove('d-none');
    }
  }

  if(event.target.matches("#show-columns")) {

    if(columnView.classList.contains('d-none')){
      squareGrid.classList.add('d-none');
      columnView.classList.remove('d-none');
    }
  }
});
