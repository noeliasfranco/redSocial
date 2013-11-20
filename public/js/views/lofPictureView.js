		
	var lofPictureView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {
			'click button#nextPage' : 'nextPage',
			'click button#prevPage'	: 'prevPage'
		},
		
		initialize: function(){
		this.jQel = $(this.el);
		
      	_.bindAll(this, 'render', 'nextPage', 'prevPage'); // fixes loss of context for 'this' within methods
       
         this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
			var instance = this;
            
            if(instance.model.data.length<=15){
			     var ancho = 200*instance.model.data.length;
                $('#lofBody').width(ancho);
              
			}else {
			     var splitFriends = parseInt(instance.model.data.length/2);
                 $('#lofBody').width(400*splitFriends);
                 
			}
       //this.render(); // not all views are self-rendering. This one is.
    	//},
    	 
    	/*render: function(){
    		this.jQel.empty();
            
            var instance = this;
            console.log(instance.model.data.length);*/
            
            var divlist = document.createElement('div');
            divlist.className = 'cycle-slideshow';
           // divlist.style = 'data-cycle-fx=carouseldata-cycle-timeout=100 data-cycle-carousel-visible=5';
            this.jQel.append(divlist);
            
			
			
    		/*var ulist = document.createElement('ul');
    		this.jQel.append(ulist);*/
            
           
    	
    		for (photo in this.model.data)
    		{
    			//var test = "<li>";
    			var test = "<img src=\"" + this.model.data[photo].source + "\" class=\"fb-pics\">";
    			/*if(this.model.data[photo].comments){
    				test += "COMMENTS: " + this.model.data[photo].comments.data.length;
    			}*/
    			test += "</>";

    			//this.jQel.children('ul').append(test);
                this.jQel.children('div').append(test);
            
    		}
            
            
    		
    		var buttonDiv = document.createElement('div');
    		buttonDiv.id = 'buttonDiv';
    		
    		//this.jQel.append(buttonDiv);
    		
    		if(this.model.paging.previous)
    		{
	    		var prevButton = document.createElement('button');
	    		prevButton.innerHTML = 'PREVIOUS';
	    		prevButton.id = 'prevPage';
                /*prevButton.style.top=0;
                prevButton.style.screenLeft=0;*/
	    		this.jQel.children('div').append(prevButton);
    		}
    		
    		if(this.model.paging.next)
    		{
	    		var nextButton = document.createElement('button');
	    		nextButton.innerHTML = 'NEXT';
	    		nextButton.id = 'nextPage';
                //nextPage.style = "margin-top: 0%;margin-left: 0%";
	    		this.jQel.children('div').append(nextButton);
    		}
    		
    	},
    	
    	nextPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.next + '&callback=?', function(response){
				loadPhoto(response, This.options.currUser);
			});
    	},
    	
    	prevPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.previous + '&callback=?', function(response){
				loadPhoto(response, This.options.currUser);
			});
    	}
	});	