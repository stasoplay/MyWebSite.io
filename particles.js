window.onload = function() {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 100 },
      "color": { "value": "#454a5c" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": { "enable": false },
      "move": { "enable": true, "speed": 1 }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "size": 20,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
      }
    },
    "retina_detect": true
  });
};
