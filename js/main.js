window.onload = function() {
  document.querySelector("#showSidenav").onclick = function() {
    document.querySelector("#sidenav").setAttribute("class", "show");
  }

  document.querySelector("#hideSidenav").onclick = function() {
    document.querySelector("#sidenav").setAttribute("class", "hide");
  }
}
