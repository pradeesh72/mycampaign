const clickDiv = document.getElementById("myVote");
const parentDiv = clickDiv.closest(".arrow-left");
const modal = new bootstrap.Modal(document.getElementById("myModal"));
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioCtx.createOscillator();
oscillator.type = "squre";
oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); 
oscillator.connect(audioCtx.destination);
const buttonClick = (e) => {
    e.preventDefault();
    parentDiv.classList.add('active');
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 1); 
  setTimeout(() => {
    parentDiv.classList.remove('active');
    modal.show();
  }, 1000); 
}
clickDiv.addEventListener("mousedown", buttonClick);

clickDiv.addEventListener("touchstart", buttonClick)