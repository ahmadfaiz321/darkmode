
const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click",() => {
    menu.classList.toggle("menu-active")
});


// Ambil tombol dan body
const tombolMode = document.getElementById('tombol-mode');
const body = document.body;

// Cek apakah user sebelumnya pilih dark mode
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
  tombolMode.textContent = 'Light Mode';
} else {
  tombolMode.textContent = 'Dark Mode';
}
// buat tombol click
tombolMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
    tombolMode.textContent = 'Light Mode';
  } else {
    localStorage.setItem('mode', 'light');
    tombolMode.textContent = 'Dark Mode';
  }
});

