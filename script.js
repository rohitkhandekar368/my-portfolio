function startTypedLoop() {
  var typed = new Typed("#element", {
    strings: ["Programmer", "Web Developer"],
    typeSpeed: 100,
    onComplete: function () {
      typed.destroy();
      startTypedLoop();
    },
  });
}

// Call the function initially to start the loop
startTypedLoop();
