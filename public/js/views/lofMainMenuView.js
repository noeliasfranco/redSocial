	var lofMainMenuView = Backbone.View.extend({
		el: $('#user_menu_options'),
		
		initialize: function(){
		this.jQel = $(this.el);
		this.jQel.empty();
		
      	_.bindAll(this, 'render', 'photos', 'remove', 'posts', 'friends'); // fixes loss of context for 'this' within methods
       
       //this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	events: {
			'click li#photos': 'photos',
			'click li#albums': 'albums',
			'click li#posts' : 'posts',
			'click li#friends' : 'friends'
		},
    	render: function(){
    		var firstView = new firstFBView({model: this.model});
    		this.jQel.append("<li id=\"photos\" class=\"sticker sticker-color-green\"><a href=\"#\"><i class=\"icon-camera\"></i>FOTOS</a></li><li id=\"albums\" class=\"sticker sticker-color-pink\"><a href=\"#\"><i class=\"icon-pictures\"></i>ALBUMS</a></li><li id=\"posts\"><a href=\"#\"><i class=\"icon-pencil\"></i>POSTS</a></li><li id=\"friends\" class=\"sticker sticker-color-orangeDark\"><a href=\"#\"><i class=\"icon-user\"></i>AMIGOS</a></li>" );	
    	},
    	
    	photos: function(){
    		this.options.router.navigate('photos/' + this.model.id, true);
    	},
    	
    	albums: function(){
    		this.options.router.navigate('albums/' + this.model.id, true);
    	},
    	
    	posts: function(){
    		this.options.router.navigate('posts/' + this.model.id, true);
    	},
    	
    	friends: function(){
    		this.options.router.navigate('friends/' + this.model.id, true);
    	},
    	
    	remove: function(){
    		$(this.el).unbind();
    		$('#lofBody').empty();
    	}
	});