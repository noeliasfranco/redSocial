window.ContactsView = Backbone.View.extend({

    initialize: function () {
		this.render();
    },

    render: function () {
		var users = this.model;
       $(this.el).html(this.template);
		return this;
    }
});