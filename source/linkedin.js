var result;

// LinkedIn:
document.title = '';
result = document.querySelector('#name-container');
if (result) {
  result.style.display = 'none';
}
result = document.querySelector('.profile-picture');
if (result) {
  result.style.display = 'none';
}

// Logged out:
result = document.querySelector('h1#name');
if (result) {
  result.style.display = 'none';
}
result = document.querySelector('.reg-upsell');
if (result) {
  result.style.display = 'none';
}
result = document.querySelector('.name-search');
if (result) {
  result.style.display = 'none';
}

// These should appear only if you're already connected, but just in case:
result = document.querySelector('.endorse-v2');
if (result) {
  result.style.display = 'none';
}
result = document.querySelector('.write-endorsement');
if (result) {
  result.style.display = 'none';
}

// Search results:
var i, results;

results = document.querySelectorAll('li.mod > a.result-image');
for (i = 0; i < results.length; i++) {
  results[i].style.display = 'none';
}
results = document.querySelectorAll('li.mod > .bd > h3 > a.main-headline');
for (i = 0; i < results.length; i++) {
  results[i].textContent = 'Person';
}
results = document.querySelectorAll('.profile-actions > .katy-button-group');
for (i = 0; i < results.length; i++) {
  results[i].style.display = 'none';
}
results = document.querySelectorAll('#siteflow-widget-next');
for (i = 0; i < results.length; i++) {
  results[i].style.display = 'none';
}
