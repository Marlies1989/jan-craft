function openNav(el) {
  document.getElementById(el.dataset.target).style.visibility = "visible";
}

function closeNav(el) {
  el.parentNode.style.visibility = "hidden";
  let iframe = el.querySelector('iframe');
  iframe.src = iframe.src;
}

// // Get the modal and close the modal on click
// var modal = document.getElementById("myModal");
// modal.onclick = function() {
//   modal.classList.toggle("showVideo");
// }

// // Get the button that opens the modal
// var btn = document.getElementById("buttonVideo");

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.classList.toggle("showVideo");
// }

