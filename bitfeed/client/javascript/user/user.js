 Meteor.subscribe('allUsers');
 
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
