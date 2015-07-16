
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

Router.route('/profile/:_id', {
    name: 'profile',
    waitOn: function(){
    return Meteor.subscribe('allUsers', this.params._id)},
    data: function(){
        var user = this.params._id;
        return Meteor.users.findOne({_id: user});
    },
});

