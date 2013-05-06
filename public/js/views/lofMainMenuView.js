	var lofMainMenuView = Backbone.View.extend({
		el: $('#lofHeader'),
		
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
    		this.jQel.append("<div>MENU SELECT</div><ul><li id=\"photos\">PHOTOS</li><li id=\"albums\">ALBUMS</li><li id=\"posts\">POSTS</li><li id=\"friends\">FRIENDS</li></ul><span></span>" );	
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