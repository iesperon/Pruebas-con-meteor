/**
 * Created by iesperon on 26/01/2016.
 */
Template.postsList.helpers({
    posts: function() {
        //Con el sort llamamos a una funcion de mongo y le decimos que ordene por fecha de subida y el -1 es para el orden
        return Posts.find({}, {sort: {submitted: -1}});
    }});