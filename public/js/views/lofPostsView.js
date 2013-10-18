/*a = 0; 
	var limite = 10;*/
	
	var lofPostsView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {
			'click li' : 'post',
			'click button#nextPage' : 'nextPage',
			'click button#prevPage'	: 'prevPage'
		},
		
		initialize: function(){
		this.jQel = $(this.el);
      	_.bindAll(this, 'render', 'nextPage', 'prevPage', 'post'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
			//var instance = this;
            console.log(instance.model.data.length);
          
    		var postList = document.createElement('ul');
			//$(this.el).html('<ul/>');
			//this.model.data = this.model.data[x];
			//var post = this.model.data[a];
			//var posts = this.model.data[a].from;
			//i = 0; 
			//var limite = 10
			 
    		for (a in this.model.data)
    		{
    			var li = "<ul class=\"timeline\"><li data-post-id=\"" +  this.model.data[a].id + "\">";;
				li += "<div class=\"avatar\">" +  "<img src=\"http://graph.facebook.com/" + this.model.data[a].from.id + /*"/picture\" class=\"fb-pics\">";*/ "/picture?type=large\"></div>";
    			li += "<div class=\"bubble-container\"><div class=\"bubble\"><div class=\"over-bubble\">" + "<img src='http://mysitemyway.com/support/?bb_attachments=52082&bbat=4827&inline' style= \"margin-top: -40px !important;\">" + "</div>";
				if (this.model.data[a].message)
    			{
	    			li +=  this.model.data[a].message.toUpperCase();
	    			
    			}
    			if (this.model.data[a].story)
    			{
	    			li += this.model.data[a].story.toUpperCase();
	    			
    			}
    			if(this.model.data[a].caption)
    			{
    				li += "<div>" + this.model.data[a].caption.toUpperCase() + "</div>";
    			}
    			if(this.model.data[a].description)
    			{
    				li += "<div>" + this.model.data[a].description.toUpperCase() + "</div>";
    			}
    			if (this.model.data[a].name)
    			{
	    			li +=  "<div>" + this.model.data[a].name.toUpperCase() + "</div>";
	    			
    			}
    			if(this.model.data[a].comments){
    				li += "<div>COMMENTS: " + this.model.data[a].comments + "</div>";
    			}
    			if(this.model.data[a].likes){
    				li += "<div>LIKES: " + this.model.data[a].likes + "</div>";
    			}
    			li += "</div></div></div></div></li></ul>";
    			postList.innerHTML += li;
				//i += 1;
    		}
    		
    		//for (i in post)
    		/*{
    			var li = "<ul class=\"timeline\"><li data-post-id=\"" +  this.post.id + "\">";
				li += "<div class=\"avatar\">" +  "<img src=\"http://graph.facebook.com/" + this.model.data[a].from.id + "/picture?type=large\"><div class=\"hover\">Sofi Pacifico</div></div>";
    			li += "<div class=\"bubble-container\"><div class=\"bubble\"><div class=\"over-bubble\">" + "<img src='http://mysitemyway.com/support/?bb_attachments=52082&bbat=4827&inline' style= \"margin-top: -40px !important;\">" + "</div>";
				if (this.post.message)
    			{
	    			li +=  this.post.message.toUpperCase();
	    			
    			}
    			if (this.post.story)
    			{
	    			li += this.story.toUpperCase();
	    			
    			}
    			if(this.post.caption)
    			{
    				li += "<div>" + this.post.caption.toUpperCase() + "</div>";
    			}
    			if(this.post.description)
    			{
    				li += "<div>" + this.post.description.toUpperCase() + "</div>";
    			}
    			if (this.post.name)
    			{
	    			li +=  "<div>" + this.post.name.toUpperCase() + "</div>";
	    			
    			}
    			if(this.post.comments){
    				li += "<div>COMMENTS: " + post.comments + "</div>";
    			}
    			if(this.post.likes){
    				li += "<div>LIKES: " + this.post.likes + "</div>";
    			}
    			li += "</div></div></li></ul>";
    			postList.innerHTML += li;
    		//}
    		*/
    		this.jQel.append(postList);
			
    		if(this.model.paging.previous)
    		{
	    		var prevButton = document.createElement('img');
				prevButton.src = '../css/img/arrow_left.png';
	    		prevButton.id = 'prevPage';
	    		$(this.el).append(prevButton);
    		}
    		
    		if(typeof this.model.paging.next != 'undefined')
    		{
	    		var nextButton = document.createElement('img');
	    		nextButton.src = '../css/img/arrow_right.png';
	    		nextButton.id = 'nextPage';
	    		$(this.el).append(nextButton);
    		}
			
    
    	},
    	
    	post: function(ev){
    		if(!$(ev.target).attr('data-post-id')){
    			var postid = $(ev.target).parent('li').attr('data-post-id')
    		}else{
    			var postid = $(ev.target).attr('data-post-id');
    		}
    		window.location.hash = '/post/' + postid;
    	},
    	
    	nextPage: function(){
			var This = this;
			this.close();
			$.getJSON(this.model.paging.next + '&callback=?', function(response){
				loadPosts(response);
			});
			/*if (a<=limite) a++;
			else a=1;
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.next + '&callback=?', function(response){
				loadPosts(response);
			});*/
    	},
    	
    	prevPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.previous + '&callback=?', function(response){
				loadPosts(response);
			});
    	}, 
				
	});
	
	var lofCommentsView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {

		},
		
		initialize: function(){
		this.jQel = $(this.el);
      	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
    		
    		var html = "";
    		if(this.model.name){
    			html += "<div>" + this.model.name.toUpperCase() +"</div>";
    		}
    		if (this.model.picture)
    			{
    				html += "<img src=\"" + this.model.picture + "\" class=\"fb-pics\">";
    			}
    		if (this.model.message)
    			{
	    			html +=  this.model.message.toUpperCase();
	    			
    			}
    			if (this.model.story)
    			{
	    			html += this.model.story.toUpperCase();
	    			
    			}
    		if(this.model.caption){
				html += "<div>" + this.model.caption.toUpperCase() + "</div>";
			}
			if(this.model.description){
				html += "<div>" + this.model.description.toUpperCase() + "</div>";
			}
			
			this.jQel.append(html);

			if(this.model.comments){
				var ul = document.createElement('ul');
				
	    		for (a in this.model.comments.data)
	    		{
	    			var li ="<li>";
	    			 li += "<div>" + this.model.comments.data[a].message.toUpperCase() + "</div>";
	    			 li += "<img src=\"http://graph.facebook.com/" + this.model.comments.data[a].from.id + "/picture\" class=\"fb-pics\">";
	    			 li += this.model.comments.data[a].from.name.toUpperCase();
	    			 li += "</li>";
	    			 ul.innerHTML += li;
	    		}
	    		
	    		this.jQel.append(ul);
	    	}
    		
    		
    	}
	});
/*	var lofPostsView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {
			'click li' : 'post',
			'click button#nextPage' : 'nextPage',
			'click button#prevPage'	: 'prevPage'
		},
		
		initialize: function(){
		this.jQel = $(this.el);
      	_.bindAll(this, 'render', 'nextPage', 'prevPage', 'post'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
    		
    		var postList = document.createElement('ul');
    		
    		
    		for (a in this.model.data)
    		{
    			var li = "<li data-post-id=\"" +  this.model.data[a].id + "\">";
    			if (this.model.data[a].message)
    			{
	    			li +=  this.model.data[a].message.toUpperCase();
	    			
    			}
    			if (this.model.data[a].story)
    			{
	    			li += this.model.data[a].story.toUpperCase();
	    			
    			}
    			if(this.model.data[a].caption)
    			{
    				li += "<div>" + this.model.data[a].caption.toUpperCase() + "</div>";
    			}
    			if(this.model.data[a].description)
    			{
    				li += "<div>" + this.model.data[a].description.toUpperCase() + "</div>";
    			}
    			if (this.model.data[a].name)
    			{
	    			li +=  "<div>" + this.model.data[a].name.toUpperCase() + "</div>";
	    			
    			}
    			if(this.model.data[a].comments.count > 0){
    				li += "<div>COMMENTS: " + this.model.data[a].comments.count + "</div>";
    			}
    			if(this.model.data[a].likes){
    				li += "LIKES: " + this.model.data[a].likes.count;
    			}
    			li += "</li>";
    			postList.innerHTML += li;
    		}
    		
    		this.jQel.append(postList);
    	
    		if(this.model.paging.previous)
    		{
	    		var prevButton = document.createElement('button');
	    		prevButton.innerHTML = 'PREVIOUS';
	    		prevButton.id = 'prevPage';
	    		$(this.el).append(prevButton);
    		}
    		
    		if(typeof this.model.paging.next != 'undefined')
    		{
	    		var nextButton = document.createElement('button');
	    		nextButton.innerHTML = 'NEXT';
	    		nextButton.id = 'nextPage';
	    		$(this.el).append(nextButton);
    		}
    		
    	},
    	
    	post: function(ev){
    		if(!$(ev.target).attr('data-post-id')){
    			var postid = $(ev.target).parent('li').attr('data-post-id')
    		}else{
    			var postid = $(ev.target).attr('data-post-id');
    		}
    		window.location.hash = '/post/' + postid;
    	},
    	
    	nextPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.next + '&callback=?', function(response){
				loadPosts(response);
			});
    	},
    	
    	prevPage: function(){
    		var This = this;
			this.close();
			$.getJSON(this.model.paging.previous + '&callback=?', function(response){
				loadPosts(response);
			});
    	},  
	});
	
	var lofCommentsView = Backbone.View.extend({
		el: $('#lofBody'),
		
		events: {

		},
		
		initialize: function(){
		this.jQel = $(this.el);
      	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    	},
    	
    	render: function(){
    		this.jQel.empty();
    		
    		var html = "";
    		if(this.model.name){
    			html += "<div>" + this.model.name.toUpperCase() +"</div>";
    		}
    		if (this.model.picture)
    			{
    				html += "<img src=\"" + this.model.picture + "\" class=\"fb-pics\">";
    			}
    		if (this.model.message)
    			{
	    			html +=  this.model.message.toUpperCase();
	    			
    			}
    			if (this.model.story)
    			{
	    			html += this.model.story.toUpperCase();
	    			
    			}
    		if(this.model.caption){
				html += "<div>" + this.model.caption.toUpperCase() + "</div>";
			}
			if(this.model.description){
				html += "<div>" + this.model.description.toUpperCase() + "</div>";
			}
			
			this.jQel.append(html);

			if(this.model.comments){
				var ul = document.createElement('ul');
				
	    		for (a in this.model.comments.data)
	    		{
	    			var li ="<li>";
	    			 li += "<div>" + this.model.comments.data[a].message.toUpperCase() + "</div>";
	    			 li += "<img src=\"http://graph.facebook.com/" + this.model.comments.data[a].from.id + "/picture\" class=\"fb-pics\">";
	    			 li += this.model.comments.data[a].from.name.toUpperCase();
	    			 li += "</li>";
	    			 ul.innerHTML += li;
	    		}
	    		
	    		this.jQel.append(ul);
	    	}
    		
    		
    	}
	});*/