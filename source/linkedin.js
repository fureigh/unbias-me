// LinkedIn:
$('title').remove();
$('#name-container').hide();
$('.profile-picture').hide();

// Logged out:
$('h1#name').hide();
$('.reg-upsell').hide();
$('.name-search').hide();

// These should appear only if you're already connected, but just in case:
$('.endorse-v2').hide();
$('.write-endorsement').hide();