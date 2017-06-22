/**
 * Created by apple on 2017/5/10.
 */

function loanDlg() {
  alert(1);
}
var isShow = false;
var ui = document.getElementById("order-dlg");

function showDlg() {
  // ui.style.display = "block";

}
var htmlEl = angular.element(document.querySelector('html'));
htmlEl.on('click', function (event) {
  if (event.target.nodeName === 'HTML') {
    ui.style.display = "none";
  }
})

function closeDlg() {
  ui.style.display = "none";

}
function sureFunc() {

}







