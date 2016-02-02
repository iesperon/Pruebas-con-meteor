/**
 * Created by iesperon on 26/01/2016.
 */
Template.postItem.helpers({
    //Para que solo puedan editar los post la gente que los creo
    ownPost: function() {
        return this.userId === Meteor.userId();
    },

    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
