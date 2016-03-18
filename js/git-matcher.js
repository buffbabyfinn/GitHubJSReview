var apiKey = require('./../.env').apiKey;
var matchRepos = [];


exports.gitMatch = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#userDisplay').prepend("<div class='user_info'><img class='user_img' src='" + response.avatar_url + "'><h2 class='user_name'>" + response.login + "</h2><h4>" + response.location + "</h4><p>Followers: " + response.followers + "</p><p>Following: " + response.following + "</p><p>Account Created: " + moment(response.created_at).format("MMM Do YYYY") + "</p>");
  }).fail(function(error){
    $('#userDisplay').prepend(error.responseJSON.message);
  });
};

exports.repoMatch = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response) {
    response.forEach(function(elem, index) {
      if(elem.private === false) {
        $('#repoDisplay').prepend("<li><strong> " + elem.name + ", </strong>" + elem.description + "</li>");
      }
    });
  }).fail(function(error){
    $('#repoDisplay').prepend(error.responseJSON.message);
  });
};
