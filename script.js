document.addEventListener("mousemove", (e) => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = `${e.clientX - 25}px`;
  bubble.style.top = `${e.clientY - 25}px`;
  document.body.appendChild(bubble);

  setTimeout(() => {
    document.body.removeChild(bubble);
  }, 2000);
});
