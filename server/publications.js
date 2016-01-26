/**
 * Created by iesperon on 26/01/2016.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
