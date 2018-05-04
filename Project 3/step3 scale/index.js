
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 400 } },
    color: { value: "#FFFFFF" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#FFFFFF" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 50, height: 50 }
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 8,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 100, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

particlesJS("particles-js-2", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 400 } },
    color: { value: "#FFFFFF" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#FFFFFF" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 50, height: 50 }
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 100, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
