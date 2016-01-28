/**
 * Created by iesperon on 26/01/2016.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    //Para cuando no existe la pagina
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts');
    }});

//Ruta raiz, para mostrar los posts
Router.route('/', {name: 'postsList'});

//Segun el id del post mostramos la info
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id);
    }});

//Ruta para crear posts
Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        }
        else {
            this.render('accessDenied');
        }
    }else {
        this.next();  }}

//Para cuando no existe un id de la pagina
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
//Que si no estan logueados no les deje ver hacer un post
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});