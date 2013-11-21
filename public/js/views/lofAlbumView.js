
	var lofAlbumView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {
			'click li' : 'album',
			'click button#nextPage' : 'nextPage',
			'click button#prevPage'	: 'prevPage'
		},
		
		initialize: function(){
		this.jQel = $(this.el);
      	_.bindAll(this, 'render', 'album', 'nextPage', 'prevPage'); // fixes loss of context for 'this' within methods
    	/*render: function(){
    		this.jQel.empty();
			var instance = this;
			console.log(instance.model.data.length);
    		var ulist = document.createElement('ul');
    		*/
		 
		 this.render(); // not all views are self-rendering. This one is.
    	},
    	render: function(){
    		this.jQel.empty();
			var instance = this;
            
            if(instance.model.data.length<=5){
			     var ancho = 220*instance.model.data.length;
                $('#lofBody').width(ancho);
              
			}else {
			     var splitFriends = parseInt(instance.model.data.length/2);
                 $('#lofBody').width(300*splitFriends);
                 
			}
            
            var albums =  document.createElement('div');
            albums.className += "container-album";
            var albumUl = document.createElement('ul');
            
    		for (a in this.model.data)
    		{
                
    			if (this.model.data[a].count)
    			{
                    var albumLi = document.createElement('li');
                    albumLi.setAttribute('data-album-id', this.model.data[a].id);
                    albumLi.innerHTML = this.model.data[a].name.toUpperCase();
                    albumUl.appendChild(albumLi);
                    albums.appendChild(albumUl);    			
                }
    		}
    		this.jQel.append(albums);
    		
    		if(this.model.paging.previous)
    		{
	    		var prevButton = document.createElement('button');
	    		prevButton.innerHTML = 'PREVIOUS';
	    		prevButton.id = 'prevPage';
	    		this.jQel.append(prevButton);
    		}
    		
    		if(typeof this.model.paging.next != 'undefined')
    		{
	    		var nextButton = document.createElement('button');
	    		nextButton.innerHTML = 'NEXT';
	    		nextButton.id = 'nextPage';
	    		this.jQel.append(nextButton);
    		}
    	},
    	
    	album: function(ev){
    		window.location.hash = '/albums/' + $(ev.target).attr('data-album-id') + '/photos';
    	},
    	
    	nextPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.next + '&callback=?', function(response){
				loadAlbum(response, This.options.currUser);
			});
    	},
    	
    	prevPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.previous + '&callback=?', function(response){
				loadAlbum(response, This.options.currUser);
			});
    	}
	});
	