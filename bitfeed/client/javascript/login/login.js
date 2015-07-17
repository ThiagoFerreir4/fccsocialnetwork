Template.login.events({
    'click #github': function(){
        return Meteor.loginWithGithub({
            requestPermissions: ['user']
        }, function(error){
            if(error){
                return console.log(error,reason);
            } else {
                    Router.go('/');
            }
        });
    }
});


Template.signInWithEmailModal.events({
    'click #createAccount': function(event){
        event.preventDefault();
        var username =  document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;

        var user = {'email':email,password:password,username:username,profile:{name:firstName + ' '+lastName}};

        Accounts.createUser(user, function(err){
            if(!err){
                Router.go('/')
            }
            else {
                console.log('somthing went wrong');
            }
        });

    },

    'click #signIn': function(event){
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
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
