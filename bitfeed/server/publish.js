Meteor.publish('allUsers', function(requestedUserId){
    return Meteor.users.find({_id: requestedUserId},{
        fields: {
            profile: 1,
            emails: 1,
            username: 1
        }
    });
});


Meteor.publish('theNews', function(){
     return News.find({}, {$sort: {dateAdded: -1}});
});
