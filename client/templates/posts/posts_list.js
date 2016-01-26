/**
 * Created by iesperon on 26/01/2016.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();  }
});