var Workspace = Backbone.Router.extend({

	  routes: {
	    "fbid/:fbid": "index",
	    "albums/:albumid/photos" : "albumPhotos",
	    "albums/:fbid": "albums",
	    "photos/:fbid" : "photo",
	    "posts/:fbid" : "posts",
	    "post/:postid" : "post",
	    "friends/:fbid" : "friends"

	  },
	
	initialize: function(options){
		this.ac = options.ac;
		this.currUser = null;
		this.body = $('#lofBody');
		this.header = $('#lofHeader');
  	},
  
	  index: function(fbid) {
	  	this.body.unbind();
	  	this.body.empty();
	  	this.header.unbind();
	  	var This = this;
		this.ac.id = fbid;
		var test = fbUser('/' + fbid, function(model){
	    	This.ac.menuView(model, This);
		});	
	  },
	  
	  albumPhotos: function(albumid){
	  	this.body.unbind();
	  	var This = this;
	  	var data = fbUser('/' + albumid + '/photos', function(model){
	  		This.ac.photoView(model);
	  	});
	  },
	  
	  albums: function(fbid) {
	  	this.body.unbind();
	  	this.body.empty(); 	
	  	var This = this;
	  	var albumView = fbUser('/' + this.ac.id + '/albums', function(model){
	    	This.ac.albumView(model);
		});	
	  },
	  
	  photo: function(fbid){
	  	$('#lofBody').unbind();
	  	var This = this;
	  	this.ac.id = fbid;
	  	var photoView = fbUser('/' + this.ac.id + '/photos', function(model){
	  		This.ac.photoView(model);
	  	});
	  },
	  
	  posts: function(fbid){
	  	this.body.unbind();
	  	fbUser('/' + fbid + '/posts', function(model){
	  		var postsView = new lofPostsView({model: model});
	  	});
	  },
	  
	  post: function(postid){
	  this.body.unbind();
	  fbUser('/' + postid, function(model){
	  	var postView = new lofCommentsView({model: model});
	  });
	  
	},
	
	friends: function(fbid){
		this.body.unbind();
		fbUser('/' + fbid + '/friends', function(model){
			var fView = new lofFriendView({model: model});
		});	
	}
	});
