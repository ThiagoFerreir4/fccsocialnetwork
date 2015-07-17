Template.login.events({
    'click #github': function(){
        return Meteor.loginWithGithub({
            requestPermissions: ['name','avatar_url','bio','email','user','public_repo']
        }, function(error){
            if(error){
                return console.log(error,reason);
            } else {
                    Router.go('/');
            }
        });
    }
});

