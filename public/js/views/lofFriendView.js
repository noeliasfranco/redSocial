	var lofFriendView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {
			'click li' : 'contextSwitch'
		},
		
		initialize: function(){
      	_.bindAll(this, 'render', 'contextSwitch'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		$(this.el).empty();
    		//setear el ancho para amigos-length-4-> 230*data.length-4
			//antes del 4to se va a ir para abajo
            var instance = this;
            console.log(instance.model.data.length);
            
			if(instance.model.data.length<=3){
			     var ancho = 250*instance.model.data.length;
                $('#lofBody').width(ancho);
              
			}else {
			     var splitFriends = parseInt(instance.model.data.length/2);
                 $('#lofBody').width(250*splitFriends);
                 
			}
			for (a in this.model.data)
    		{    			
				 var contactCard = "<div class=\"flip-container\"><div class=\"flipper\">";
				 contactCard+="<div class=\"front\" style=\"background-image:url("+"http://graph.facebook.com/" + this.model.data[a].id + "/picture?type=large"+");	background-repeat: no-repeat; background-position: top center; background-size: 100%; \"\">";
				 contactCard+= "<div class=\"desc\">";
				 contactCard+="<span id=\""+this.model.data[a].id+"\">"+this.model.data[a].name.toUpperCase()+"</span></div></div><div class=\"back\" onMouseover=\"meSpeak.speak(removeAccents(document.getElementById(\'"+this.model.data[a].id+"\').innerHTML),{speed:125});\"></div></div></div>";
				 $(this.el).append(contactCard);
    		}
    	
    	},
    	
    	contextSwitch: function(ev){
    		window.location.hash = 'fbid/' + $(ev.target).attr('data-friend-id');
    	}
	});
	