const checkboxMenu = document.getElementById("checkbox-menu"),
  kvastLogo = document.querySelector(".header_logo"),
  kvastTitle = document.querySelector(".hedaer_title");

checkboxMenu.addEventListener('click', (e) => {
  if (checkboxMenu.checked) {

    kvastLogo.style.display = "none";
    kvastTitle.style.display = "none";
  } else {
    kvastLogo.style.display = "block";
    kvastTitle.style.display = "block";
  }
});

window.onresize = (e) => {
  checkboxMenu.checked = false;
  kvastLogo.style.display = "block";
  kvastTitle.style.display = "block";
}