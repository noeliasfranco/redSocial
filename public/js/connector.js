    FB.init({
	    appId  : '527193310624003',
	    status : true, // check login status
	    cookie : true, // enable cookies to allow the server to access the session
	    oauth  : true, // enable OAuth 2.0
		xfbml   : true
	  });

	  function fbLogout(){
    if(typeof FB.logout == 'function'){
        if (FB.getAuthResponse()) {
         FB.logout(function(response) { window.location.href = '/'; }); 
         return;
        }  
    };

    window.location.href = ''; 
    return;  
}


	FB.getLoginStatus(function(response) {
	  if (response.authResponse) {		
	  	startThis();	
	  } else {
		FB.Event.subscribe('auth.login', function(response) {
			startThis();
		   });
		var notloggedinView = new lofNotLoggedInView();
	  }
  	});
	

Backbone.View.prototype.close = function(){
  $(this.el).unbind();
}

function AppController(){
	this.currUser = null;
	this.currentView = null;
	this.id = 'me';
	this.header = false;
	
	this.getUser = function(callback){
		if(this.currUser){
			callback(this.currUser);
		}else{
			var This = this;
			var user = fbUser('/' + this.id, function(model){
			    This.currUser = model;
			    callback(model);
			});	
		}
	}
	
	this.header = function(){
		var header = new firstFBView({model: this.currUser});
	}
	
	this.menuView = function(model, router){
		//reset everything
		this.currUser = model;
		var menu = new lofMainMenuView({model: model, router: router});
		menu.render();
		this.header = true;
	}
	
	this.albumView = function(model){
		var albumView = new lofAlbumView({model: model, currUser: this.currUser});
		albumView.render();
	}
	
	this.photoView = function(model){
		var photoView = new lofPictureView({model: model, currUser: this.currUser});
		photoView.render();
	}
	
	this.viewChange = function(view){
		if (this.currentView){
    		this.currentView.close();
	    }
	
	    this.currentView = view;
	    view.render();
		}
}

function startThis() {
	
			utils.loadTemplate(['firstFBView'], function() {
			var ac = new AppController();
		
				var ws = new Workspace({ac: ac});
				Backbone.history.start();
				if(window.location.hash == ""){
					ws.navigate('fbid/me', true);
				}
		});
		
		
};
  
function startapp(model) {
	var menuView = new lofMainMenuView({model: model});
}

function loadPhoto(response, meModel){
	var photoView = new lofPictureView({model: response, currUser: meModel});
	photoView.render();
}

function loadAlbum(response, meModel){
	var albumView = new lofAlbumView({model: response, currUser: meModel});
	albumView.render();
}

function loadPosts(response){
	var posts = new lofPostsView({model: response});
	//posts.render();
}

function fbUser(fbid, callback){
		FB.api(fbid, function(response){
				callback(response);
			});
}

	 