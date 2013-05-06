window.DashboardView = Backbone.View.extend({
	events: {
          "click #friends_container": "addItem"
    },
    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },
	
	addItem:function(ev){
		app.navigate("/#contacts", {trigger: true});
    }

});