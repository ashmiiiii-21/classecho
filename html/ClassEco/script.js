const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburgerBtn.addEventListener('click', () => {
  sidebar.style.left = "0";   // slide in
  overlay.style.display = "block";
});

overlay.addEventListener('click', () => {
  sidebar.style.left = "-250px"; // slide out
  overlay.style.display = "none";
});
