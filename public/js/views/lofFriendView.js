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
    		
    		//var ulist = document.createElement('ul');
    		//$(this.el).append(ulist);
    		
			/*var li = "<li data-friend-id=\"" +  this.model.data[a].id + "\">";
    			
    			li += "<img src=\"http://graph.facebook.com/" + this.model.data[a].id + "/picture?type=large\" class=\"fb-pics\">";
	    		li +=  this.model.data[a].name.toUpperCase();
    			li += "</li>";
    			$(this.el).children('ul').append(li);*/

    		for (a in this.model.data)
    		{    			
				 var contactCard = "<div class=\"flip-container\"><div class=\"flipper\">";
				 contactCard+="<div class=\"front\" style=\"background-image:url("+"http://graph.facebook.com/" + this.model.data[a].id + "/picture?type=large"+");	background-repeat: no-repeat; background-position: top center; background-size: 100%; \"\">";
				 contactCard+= "<div class=\"desc\">";
				 contactCard+="<span>"+this.model.data[a].name.toUpperCase()+"</span></div></div><div class=\"back\"></div></div></div>";
				 $(this.el).append(contactCard);
    		}
    		
    	
    	},
    	
    	contextSwitch: function(ev){
    		window.location.hash = 'fbid/' + $(ev.target).attr('data-friend-id');
    	}
	});
	