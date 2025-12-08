const clickDiv = document.getElementById("myVote");
const parentDiv = clickDiv.closest(".arrow-left");
const modal = new bootstrap.Modal(document.getElementById("myModal"));

let audioCtx;

const buttonClick = async (e) => {
    e.preventDefault();

    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
        await audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);

    parentDiv.classList.add("active");

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1);
    setTimeout(() => {
        parentDiv.classList.remove("active");
        modal.show();
    }, 1000);
};

clickDiv.addEventListener("mousedown", buttonClick);
clickDiv.addEventListener("touchstart", buttonClick);
