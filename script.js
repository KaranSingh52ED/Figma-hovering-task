const bubbleContainer = document.getElementById("bubble-container");

document.addEventListener("mousemove", (event) => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = `${event.clientX - 10}px`;
  bubble.style.top = `${event.clientY - 10}px`;
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 5000);
});
