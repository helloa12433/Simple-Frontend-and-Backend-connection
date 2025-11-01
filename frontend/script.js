// async function getMessage(){
//     const res=await fetch('http://localhost:5000/api/message');
//     const data=await res.json();
//     document.getElementById('output').innerHTML = `${data.message}<br>${data.greet}`;
// }

async function getMessage() {
  const res = await fetch('http://localhost:5000/api/message');
  const data = await res.json();
  const output = document.getElementById('output');
  output.textContent = data.message;
  launchConfetti();
}

document.getElementById('connectBtn').addEventListener('click', getMessage);

function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 3,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    speed: Math.random() * 4 + 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      ctx.closePath();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = -10;
    }
    requestAnimationFrame(draw);
  }
  draw();

  setTimeout(() => (canvas.style.display = 'none'), 5000);
}
