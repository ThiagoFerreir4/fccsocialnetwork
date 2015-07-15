if(Meteor.isServer){

News = new Mongo.Collection('news');
Meteor.methods({
    'addNews': function(title,url){
        News.insert({
            title: title,
            url: url,
            urlTitle:title.replace(/\s/g,'-'), //crate a slug
            dateAdded: new Date()
        });
    }
});
};
