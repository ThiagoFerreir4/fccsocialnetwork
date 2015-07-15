
if(Meteor.isClient){
    
News = new Mongo.Collection('news');

    Template.allNewsView.helpers({
        'news': function(){
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

            Router.go('/'); // load new route

            return false; // trll JS that you have handled the submit
    }
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        console.log('form submitted');
        Accounts.createUser({
            email: emailVar,
            password: passwordVar 
        });
        Router.go('/');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        console.log('form submited');
        Meteor.loginWithPassword(emailVar, passwordVar);
        Router.go('/');
    }
});
Template.buttons.events({
    'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

};





Router.route('/', function(){
        console.log('Im rendering');
    this.render('allNewsView', {
        name: 'news.all'
    });
});


Router.route('/news/add', function(){
    this.render('addNews', {
        name: 'news.add'
    });
});
   

Router.route('/news/:title', function(){
    this.render('newsView',{
            data: function(){
                return News.findOne({urlTitle: this.params.title});
            }
    });
});
Router.route('/login', function(){
    this.render('login');
});

Router.route('/register', function(){
    this.render('register');
});
