Meteor.startup(function(){
});

ServiceConfiguration.configurations.upsert({
    service: 'github'
},{
    $set: {
        clientId:'964566d992da7810a502',
        secret:'11e3951810577e8070c99fefdd69a5ad2d09d7c8',
        loginStyle: 'popup'
    }
});
