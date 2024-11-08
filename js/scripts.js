
// --- bg-particles-js ---

particlesJS("particles-js", {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: "#cccccc" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#cccccc" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: { enable: true, speed: 0.001, opacity_min: 0, sync: false }
    },
    size: {
      value: 40,
      random: true,
      anim: { enable: true, speed: 2, size_min: 10, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#cccccc",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// --- clock ---

let timerId;
clockStart();

function clockStart() {
  timerId = setInterval(clockUpdate, 1000);
  clockUpdate();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function clockUpdate() {
  let clock = document.getElementById('clock');
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}