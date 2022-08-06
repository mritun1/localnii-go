export default class Custom {
  static menu_fixed() {
    let menu2 = document.getElementById("fixed-menu-2");
    if (window.pageYOffset > 60) {
      menu2.style.display = "block";
    } else {
      menu2.style.display = "none";
    }
  }
  static show(e) {
    document.querySelector(e).style.display = "block";
  }
  static hide(e) {
    document.querySelector(e).style.display = "none";
  }
}
