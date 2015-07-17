 Meteor.subscribe('allUsers');
 
Template.profile.helpers({
    name: function(){
        return this.name;
    },
    username: function(){
        return this.username;
    },
    emails: function(){
        return this.emails[0].address;
    },
    log: function(){
        console.log(this);
    },
    avatar_url: function(){
        return this.avatar_url;
    }
});
