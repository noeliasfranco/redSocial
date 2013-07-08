	var lofMainMenuView = Backbone.View.extend({
		el: $('#userSidebar'),
		
		initialize: function(){
		this.jQel = $(this.el);
		
      	_.bindAll(this, 'render', 'photos', 'remove', 'posts', 'friends'); // fixes loss of context for 'this' within methods
       
       //this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	events: {
			'click div#userPhotos': 'photos',
			'click div#userAlbums': 'albums',
			'click div#userPosts': 'posts',
			'click div#userFriends': 'friends',
			'mouseenter div#userPhotos': 'zoomIn',
			'mouseenter div#userAlbums': 'zoomIn',
			'mouseenter div#userPosts': 'zoomIn',
			'mouseenter div#userFriends': 'zoomIn',
			'mouseleave div#userPhotos': 'zoomOut',
			'mouseleave div#userAlbums': 'zoomOut',
			'mouseleave div#userPosts': 'zoomOut',
			'mouseleave div#userFriends': 'zoomOut',
		},
    	render: function(){
    		var firstView = new firstFBView({model: this.model});
			this.jQel.append("<div id=\"userPhotos\"  class=\"tile double bg-color-orangeDark sidebarTils sidebarTilsMargin\"><div class=\"tile-content sidebarTilsContent\"><h1 class=\"sideBarTilsHeaders\"><strong>FOTOS</strong></h1></div><h1 class=\"icon-camera sideBarIcons\"></h1></div>");
			this.jQel.append("<div id=\"userAlbums\"  class=\"tile double bg-color-pinkDark sidebarTils sidebarTilsMargin\"><div class=\"tile-content sidebarTilsContent\"><h1 class=\"sideBarTilsHeaders\"><strong>ALBUMS</strong></h1></div><h1 class=\"icon-pictures sideBarIcons\"></h1></div>");
			this.jQel.append("<div id=\"userPosts\"  class=\"tile double bg-color-greenLight sidebarTils sidebarTilsMargin\"><div class=\"tile-content sidebarTilsContent\"><h1 class=\"sideBarTilsHeaders\"><strong>POSTS</strong></h1></div><h1 class=\"icon-compass sideBarIcons\"></h1></div>");
			this.jQel.append("<div id=\"userFriends\"  class=\"tile double bg-color-green sidebarTils sidebarTilsMargin\"><div class=\"tile-content sidebarTilsContent\"><h1 class=\"sideBarTilsHeaders\"><strong>AMIGOS</strong></h1></div><h1 class=\"icon-user sideBarIcons\"></h1></div>");
		},
    	photos: function(ev){
    		this.options.router.navigate('photos/' + this.model.id, true);
    	},
    	
    	albums: function(ev){
    		this.options.router.navigate('albums/' + this.model.id, true);
    	},
    	
    	posts: function(ev){
    		this.options.router.navigate('posts/' + this.model.id, true);
    	},
    	
    	friends: function(ev){
    		this.options.router.navigate('friends/' + this.model.id, true);
    	},
    	
    	remove: function(){
    		$(this.el).unbind();
    		$('#lofBody').empty();
    	},
		zoomIn: function(ev){
			$(ev.currentTarget).animate({ 'zoom': 1.2}, 300);
		},
		zoomOut: function(ev){
			$(ev.currentTarget).animate({ 'zoom': 1}, 300);
		}
	});