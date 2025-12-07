const clickDiv = document.getElementById("myVote");
const modal = new bootstrap.Modal(document.getElementById("myModal"));
const buttonClick = (e) => {
    e.preventDefault();
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = "squre";
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); 
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 1); 
  setTimeout(() => {
    modal.show();
  }, 1000); 
}
clickDiv.addEventListener("mousedown", buttonClick);

clickDiv.addEventListener("touchstart", buttonClick)