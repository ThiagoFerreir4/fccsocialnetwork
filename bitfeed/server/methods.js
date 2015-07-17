Meteor.methods({
    'addNews': function(title,url,username,owner){
        News.insert({
            title: title,
            url: url,
            urlTitle:title.replace(/\s/g,'-'), //crate a slug
            dateAdded: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    }
});
