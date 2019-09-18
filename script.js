/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav1() {
  document.getElementById("mySidenav1").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  $(".nav-bt").addClass("none");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  $(".nav-bt").removeClass("none");
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  $(".nav-bt").addClass("none");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  $(".nav-bt").removeClass("none");
}

