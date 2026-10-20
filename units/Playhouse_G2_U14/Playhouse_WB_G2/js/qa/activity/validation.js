// Use the shared feedback dialog without replacing its media elements.
function goodjob() {
  jQuery('.checkBtn').addClass('disabled');
  jQuery('.resetBtn').removeClass('disabled');
  showFeedback(true, true);
}
function tryagain() {
  jQuery('.resetBtn').removeClass('disabled');
  showFeedback(true, false);
}
