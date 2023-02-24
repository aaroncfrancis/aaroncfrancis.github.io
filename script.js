var tabs = document.querySelectorAll('.nav-tabs .nav-link');
var panes = document.querySelectorAll('.tab-pane');

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all tabs and panes
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
      panes[j].classList.remove('in');
    }
    
    // Add active class to clicked tab and corresponding pane
    this.classList.add('active');
    var target = this.getAttribute('href');
    document.querySelector(target).classList.add('in');
  });
}

  // Cursor scripts
  const cursorTag = document.querySelector("div.cursors")
  const balls = cursorTag.querySelectorAll("div")

  let aimX = 0
  let aimY = 0

  balls.forEach((ball, index) => {
    let currentX = 0
    let currentY = 0

    let speed = 0.3 - index * 0.015

    const animate = function () {
      currentX += (aimX - currentX) * speed
      currentY += (aimY - currentY) * speed

      ball.style.left = currentX + "px"
      ball.style.top = currentY + "px"

      requestAnimationFrame(animate)
    }
  
    animate()
  })

  document.addEventListener("mousemove", function(event){
    aimX = event.pageX
    aimY = event.pageY

})