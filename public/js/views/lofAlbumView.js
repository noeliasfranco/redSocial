
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
    	},
    	
    	render: function(){
    		this.jQel.empty();
			
			var instance = this;
            console.log(instance.model.data.length);
			
    		var ulist = document.createElement('ul');
    		
    		for (a in this.model.data)
    		{
    			if (this.model.data[a].count)
    			{
    				var albumLi = document.createElement('li');
    				albumLi.setAttribute('data-album-id', this.model.data[a].id);
    				albumLi.innerHTML = this.model.data[a].name.toUpperCase();
	    			//var albumLi = "<li data-album-id=" + this.model.data[a].id + ">";
	    			//albumLi += this.model.data[a].name.toUpperCase();
	    			//albumLi += "</li>";
	    			ulist.appendChild(albumLi);
    			}
    		}
    		this.jQel.append(ulist);
    		
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
	