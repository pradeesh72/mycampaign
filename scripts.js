const clickDiv = document.getElementById("myVote");
const parentDiv = clickDiv.closest(".arrow-left");
const modal = new bootstrap.Modal(document.getElementById("myModal"));

let audioCtx;

const buttonClick = (e) => {
     e.preventDefault();

    if (!audioCtx || audioCtx.state === "closed") {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    audioCtx.resume();

    const oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);

    oscillator.connect(audioCtx.destination);

    parentDiv.classList.add("active");

    const now = audioCtx.currentTime;
    oscillator.start(now);
    oscillator.stop(now + 1);

    setTimeout(() => {
        parentDiv.classList.remove("active");
        modal.show();
    }, 1000);
};

clickDiv.addEventListener("mousedown", buttonClick);
clickDiv.addEventListener("touchstart", buttonClick);

function isMobile() {
  return /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", () => {
  if (isMobile()) {
    const modal = new bootstrap.Modal(document.getElementById("unlockModal"));
    modal.show();
  }
});
