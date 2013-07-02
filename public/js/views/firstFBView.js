	var firstFBView = Backbone.View.extend({
		el: $('#bio'),
 
		initialize: function(){
		this.jQel = $(this.el);
			
      	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		$('#profile_picture').attr("src","http://graph.facebook.com/" + this.model.id + "/picture?type=normal");
			(this.model.gender.toUpperCase()=="FEMALE")? $('#user-info').html("Bienvenida " + this.model.first_name) : $('#user-info').html("Bienvenido " + this.model.first_name);;
			
		}
	});	