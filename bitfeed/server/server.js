if(Meteor.isServer){


Meteor.publish('theNews', function(){
     return News.find({}, {$sort: {dateAdded: -1}});
});

console.log(News.find().fetch());

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
