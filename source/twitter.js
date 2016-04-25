var result;

document.title = '';
result = document.querySelector('img.ProfileAvatar-image');
if (result) {
  result.style.display = 'none';
}
result = document.querySelector('h1.ProfileHeaderCard-name');
if (result) {
  result.style.display = 'none';
}
