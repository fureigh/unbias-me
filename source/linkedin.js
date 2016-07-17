// LinkedIn:
'use strict';

document.title = '';

// Profile page:

var selectors = [
  '#name-container',
  '.profile-picture img',
  '.insights',
  '.right-fixed',
  '#suggested-endorsements',
  'h1#name'
];

selectors.forEach(function(sel) {
  var result = document.querySelector(sel);
  if (result) {
    result.style.display = 'none';
  }
});

var i, results;

results = document.querySelectorAll('.reg-upsell');
for (i = 0; i < results.length; i++) {
  results[i].style.visibility = 'hidden';
}

// Search results:

results = document.querySelectorAll('li.mod > a.result-image');
for (i = 0; i < results.length; i++) {
  results[i].style.visibility = 'hidden';
}
results = document.querySelectorAll('li.mod > .bd > h3 > a.main-headline');
for (i = 0; i < results.length; i++) {
  console.log('changed', results[i]);
  results[i].textContent = 'Person';
}
