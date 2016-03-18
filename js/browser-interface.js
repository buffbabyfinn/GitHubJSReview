var gitMatch = require('./../js/git-matcher.js').gitMatch;
var repoMatch = require('./../js/git-matcher.js').repoMatch;

$(document).ready(function() {
  $('#searchButton').click(function() {
    var user = $('#gitUser').val();
    $('#gitUser').val("");
    gitMatch(user);
    repoMatch(user);
  });
});
