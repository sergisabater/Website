document.addEventListener("DOMContentLoaded", function () {
  const sound = document.getElementById("click-sound");
  const links = document.querySelectorAll(".sound-link");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      sound.currentTime = 0;
      sound.play();
      sound.onended = () => {
        window.location.href = link.href;
      };
    });
  });
});
