let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")


btn.onclick  = function() {
    sidebar.classList.toggle("active")
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('sidebar') === 'open') {
  document.querySelector('.sidebar').classList.add('active');
}