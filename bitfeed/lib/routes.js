// Root page
Router.route('/', function(){
        console.log('Im rendering');
    this.render('allNewsView', {
        name: 'news.all'
    });
});

// News
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

// Login and profile
Router.route('/login', function(){
    this.render('login');
});


Router.route('/profile/:_id', {
    name: 'profile',
    waitOn: function(){
    return Meteor.subscribe('allUsers', this.params._id)},
    data: function(){
        var user = this.params._id;
        return Meteor.users.findOne({_id: user});
    },
});
