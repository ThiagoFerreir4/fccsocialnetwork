
    
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

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var username =  event.target.registerUsername.value;
        var email = event.target.registerEmail.value;
        var password = event.target.registerPassword.value;
        var firstName = event.target.registerFirstName.value;
        var lastName = event.target.registerLastName.value;

        var user = {'email':email,password:password,username:username,profile:{name:firstName + ' '+lastName}};

        Accounts.createUser(user, function(err){
            if(!err){
                Router.go('/')
            }
            else {
                console.log('somthing went wrong');
            }
        });
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.loginEmail.value;
        var password = event.target.loginPassword.value;
        console.log('form submited');
        Meteor.loginWithPassword(email, password, function(err){
            if(!err){
                Router.go('/');
            } 
            else {
                console.log('somethings not right');
            }
        });
    }
});

Template.buttons.events({
    'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

Template.profile.helpers({
    name: function(){    
        return this.name;
    },
    username: function(){
        return this.username;
    },
    email: function(){
        return this.emails[0].address;
    },
    log: function(){
        console.log(this);
    }
});

