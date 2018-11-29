const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.userId = el.data('user-id');
    this.followState = el.data('initial-follow-state');
    this.$el = $(el);
    this.render();
    
    // installs click handler
    this.$el.on("click", this.handleClick.bind(this));
  }
}

FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowing" || this.followState === "following") {
    this.$el.text(this.followState);
    this.$el.prop("disabled", true);
  } else {
    this.$el.prop("disabled", false);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }
};

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();

  if (this.followState === "followed") {
    this.followState = "unfollowing";
    this.render();
    
    APIUtil.unfollowUser(this.userId).then(() => {
      this.followState = "unfollowed";
      this.render();
    });
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
    this.render();
    
    APIUtil.followUser(this.userId).then(() => {
      this.followState = "followed";
      this.render();
    });  
  }
};

// FollowToggle.prototype.handleClick = function(e) {
//   const followToggle = this;
// 
//   e.preventDefault();
// 
//   if (this.followState === "unfollowed") {
//     $.ajax({
//       type: "POST",
//       url: `/users/${this.userId}/follow`,
//       dataType: "JSON",
//       success() {
//         followToggle.followState = "followed";
//         followToggle.render();
//       }
//     });
//   } else if (this.followState === "followed") {
//     $.ajax({
//       type: "DELETE",
//       url: `/users/${this.userId}/follow`,
//       dataType: "JSON",
//       success() {
//         followToggle.followState = "unfollowed";
//         followToggle.render();
//       },
//     });
//   }
// };

module.exports = FollowToggle;