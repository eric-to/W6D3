const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  const $allButtons = $('.follow-toggle');
  for (let i = 0; i < $allButtons.length; i++) {
    let toggleBtn = new FollowToggle($($allButtons[i]));
  }
  
  $('.users-search').each( (i, search) => new UsersSearch(search) );
});