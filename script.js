const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const micBtn = document.getElementById('micBtn');

hamburgerBtn.addEventListener('click', () => {
  sidebar.style.left = "0";
  overlay.style.display = "block";
});

overlay.addEventListener('click', () => {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
});

micBtn.addEventListener('click', () => {
  alert("🎤 Voice transcription coming soon!");
});
