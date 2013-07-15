var lofNotLoggedInView = Backbone.View.extend({
		el: $('#bio'),
		
		initialize: function(){
		this.jQel = $(this.el);
		
      	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
         this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
			this.jQel.empty();
			$('#user-info').html("No ha iniciado sesi&oacute;n");
			$('#login').css('display','inline-block');
			$('#logout').css('display','none');
			this.jQel.append("<div id='welcome_message' class='hero-unit welcome-menu'> <i class='icon-gris-claro-div'></i><h1>Bienvenido</h1><p>Una manera facil y sencilla de interactuar con tus amigos en Facebook</p></div>");
    		
    	}
		
	});
	
	
				
				