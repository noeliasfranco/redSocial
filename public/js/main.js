var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "dashboard"			: "showDashboard",
		"contacts"			: "showContacts"
		
    },

    initialize: function () {
       
    },

    home: function () {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
		 $('#content').html(this.homeView.el);
    },

	showDashboard: function() {
        this.dashboardView = new DashboardView();
        $('#content').html(this.dashboardView.el);

    },
	showContacts: function() {
	   var userData = new UserCollection();
       this.contactsView = new ContactsView();
        $('#content').html(this.contactsView.el);
		
    }

});

utils.loadTemplate(['HomeView', 'HeaderView', 'DashboardView','ContactsView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});