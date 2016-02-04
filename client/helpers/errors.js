/**
 * Created by iesperon on 04/02/2016.
 */
// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};
