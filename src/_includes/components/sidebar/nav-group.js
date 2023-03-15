function toggle(event) {
  const submenu = event.target.closest('.group-toggle').nextElementSibling;
  submenu.classList.toggle('hidden');
  const icon = event.target.closest('.group-toggle').querySelector('.material-icons');
  icon.classList.toggle('rotate-90');
}

document.querySelectorAll('.group-toggle').forEach(element => {
  element.addEventListener('click', toggle);
});
