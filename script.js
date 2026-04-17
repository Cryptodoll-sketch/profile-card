const timeEl = document.getElementById("time");

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

// Image Upload
const uploadInput = document.getElementById("upload");
const avatar = document.getElementById("avatar");

uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  avatar.src = URL.createObjectURL(file);
});