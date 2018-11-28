class FollowToggle {
  constructor(el) {
    this.userId = el.data('user-id');
    this.followState = el.data('initial-follow-state');
    this.el = $(el);
    this.render();
    
    // installs click handler
    this.el.on("click", this.handleClick.bind(this));
  }
}

FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed") {
    this.el.text("Follow!");
  } else {
    this.el.text("Unfollow!");
  }
};

// FollowToggle.prototype.handleClick = function(e) {
//   e.preventDefault();
// 
//   if (this.followState === "followed") {
//     APIUtil.unfollowUser(this.userId).then(() => {
//       this.followState = "unfollowed";
//       this.render();
//     });
//   } else if (this.followState === "unfollowed") {
//     APIUtil.followUser(this.userId).then(() => {
//       this.followState = "followed";
//       this.render();
//     });  
//   }
// 
// };

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();
  
  if (this.followState === "followed") {
    
  } else if (this.followState === "unfollowed") {
    
  }
};

module.exports = FollowToggle;