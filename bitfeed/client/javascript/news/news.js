

Meteor.subscribe('theNews');
 Meteor.subscribe('allUsers');

Template.allNewsView.helpers({
        news: function () {
                    return News.find({},{sort: {dateAdded: -1}});
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

            Router.go('/'); // load new route

            return false; // trll JS that you have handled the submit
    }
});
