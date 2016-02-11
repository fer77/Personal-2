$('.vote').one('click.vote','.t-up , .t-down', function() {
		var $this = $(this);
		
		// THUMBS UP CLICKED? DO THIS!
		if($this.hasClass('t-up')) {
			$this.find('i').addClass('blip');
			var self = this;
			setTimeout(function() {
				$this.find('p').text(parseInt($this.find('p').text()) + 1);
				$this.find('span').addClass('clicked');
			}, 500);
		}
		// THUMBS DOWN CLICKED? DO THIS!
		else {
			$this.find('i').addClass('blip');
			var self = this;
			setTimeout(function() {
				$this.find('p').text(parseInt($this.find('p').text()) - 1);
				$this.find('span').addClass('clicked');
			}, 500);
		}
		
	});