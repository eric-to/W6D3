const FollowToggle = require('./follow_toggle.js');

$(() => {
  const $allButtons = $('.follow-toggle');
  for (let i = 0; i < $allButtons.length; i++) {
    let toggleBtn = new FollowToggle($($allButtons[i]));
  }
});