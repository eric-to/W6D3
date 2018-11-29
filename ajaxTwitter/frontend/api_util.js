const APIUtil = {
  followUser: id => {
    return $.ajax({
      type: "POST",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    });
  },
  
  unfollowUser: id => {
    return $.ajax({
      type: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    });
  },
  
  searchUsers: query => {
    return $.ajax({
      type: "GET",
      url: "/users/search",
      data: { query },
      dataType: "JSON",
    });
  }
  
};

module.exports = APIUtil;
