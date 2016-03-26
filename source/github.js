// GitHub:
function hidePersonal() {
   //console.log('running');
   $('img.rounded-2').hide();
   $('.vcard-fullname').hide();
   $('img.gravatar').hide();
   $('.pusher-is-only-committer').hide();
}
$(hidePersonal);

$(document).on("pjax:complete", function() {
   //console.log('complete');
   $(hidePersonal);
});
