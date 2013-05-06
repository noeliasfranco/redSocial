window.HeaderView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    selectMenuItem: function (menuItem) {
        $('.nav a').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }

});