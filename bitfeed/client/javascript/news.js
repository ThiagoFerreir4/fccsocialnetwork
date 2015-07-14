News = new Mongo.Collection('news');

if(Meteor.isClient){
    
    Template.allNewsView.helpers({
        news: function(){
            return News.find({}, {sort: {dateAdded: -1}});
        }
    });

Template.addNews.events({
    'submit .addNewsForm': function(e){
    
            var title= e.target.title.value; //gets title
            var url= e.target.url.value; // gets url

            if(!title || !url){
                return false;
            }

            Meteor.call('addNews',title,url); //method to create and add new items

            Router.go('news.all'); // load new route

            return false; // trll JS that you have handled the submit
    }
});


Meteor.methods({
    addNew: function(title, url){
        News.insert({
            title: title,
            url: url,
            urlTitle:title.replace(/\s/g,'-'), //crate a slug
            dateAdded: new Date()
        });
    }
});
}


Router.route('/', function(){
    this.render('allNewsView', {
        name: 'news.all'
    });
});


Router.route('/news/add', function(){
    this.render('addNews', {
        name: 'news.add'
    });
});
   


