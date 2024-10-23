
document.addEventListener("DOMContentLoaded", function() {
  var myModal = document.getElementById("myex");
  if (myModal) {
      var modalInstance = new bootstrap.Modal(myModal);
      modalInstance.show();
  }
});

// var myModal = new bootstrap.Modal(document.getElementById('myex'));
// window.onload = function(){
//   myModal.show()
// }