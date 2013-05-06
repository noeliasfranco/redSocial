	var firstFBView = Backbone.View.extend({
		el: $('#bio'),
 
		initialize: function(){
		this.jQel = $(this.el);
			
      	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
      		
      		var fbImage = new Image;
			fbImage.src = "http://graph.facebook.com/" + this.model.id + "/picture?type=normal";
			fbImage.className = 'fb-pics';
			(this.model.gender.toUpperCase()=="FEMALE")? $('#user-info').html("Bienvenida " + this.model.first_name) : $('#user-info').html("Bienvenido " + this.model.first_name);;
			
			this.jQel.append(fbImage);
			var bioDiv = "<div>";
			bioDiv += this.model.first_name.toUpperCase() + " - " + this.model.gender.toUpperCase();
			if(this.model.bio){
				bioDiv += "<p>BIO - " + this.model.bio.toUpperCase() + "</p>";
			}
			
			this.jQel.append(bioDiv += "</div>");
			$('#lofTitle').html("THE LEGEND OF " + this.model.name.toUpperCase());
    	}
	});	