// Floating hearts animation
setInterval(() => {
    const randomSize = Math.floor(Math.random() * 65) + 10;
    const randomLeft = Math.floor(Math.random() * 100) + 1;
    const randomColor = Math.floor(Math.random() * 25) + 100;
    const randomTime = Math.floor(Math.random() * 5) + 5;
  
    $('.bg_heart').append(`
      <div class='heart' style='
        width: ${randomSize}px;
        height: ${randomSize}px;
        left: ${randomLeft}%;
        background: rgba(255,${randomColor - 25},${randomColor},1);
        animation: love ${randomTime}s ease;
      '></div>
    `);
  
    // Remove hearts after animation to keep DOM clean
    setTimeout(() => { $('.heart').first().remove(); }, randomTime * 1000);
  }, 500);
  
  // Typewriter effect
  let i = 0;
  const txt = "Hi Sweetheart... I LOVE YOU!";
  const speed = 100;
  
  function typeWriter() {
    if (i < txt.length) {
      const textElement = document.getElementById("text1");
      if (txt.charAt(i) === '<') textElement.innerHTML += '</br>';
      else if (txt.charAt(i) === '>') textElement.innerHTML = '';
      else textElement.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
  