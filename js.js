window.onload = function() {

	var grid = document.querySelectorAll('.grid');
	var touchPoint = document.querySelectorAll('.grid__li');
	var topContent = document.getElementById('content__top');
	var selectedItem = -1;
	var MenuButton = document.getElementById('MenuButton');
	var about = document.getElementById('about');
	var aboutSection = document.getElementById('about-section');
	var hidden = document.querySelectorAll('.touchpoint__content')
	var activeArea = document.querySelectorAll('.touchpoint')
	var contact = document.getElementById('contact-area');
	var contactButton = document.getElementById('contact-button');
	var screenWidth = window.innerWidth;

	for (var i = grid.length - 1; i >= 0; i--){

		let x = 0;
		let element = grid[i].firstElementChild.nextElementSibling.nextElementSibling;
		let element2 = grid[i].firstElementChild.nextElementSibling;

		// right arrow

			let slide = element.nextElementSibling;
			let li = slide.children.length;

			//length of list items
			let menuLength = li * 331;
			let maxLength = window.innerWidth;

			if (menuLength > maxLength){
				element.classList.add('active');
		  }else{
		  	element.classList.remove('active');
		  };

			console.log(menuLength);
			console.log(maxLength);

		element.addEventListener("click", function(){

			if (menuLength > maxLength){
				this.classList.add('active');
			  x = x - 331;
			  slide.setAttribute("style", "transform: translate("+ x + "px, 0");
		  }else{
		  	x = x - 331;
		  	slide.setAttribute("style", "transform: translate("+ x + "px, 0");
		  	this.classList.remove('active');
		  };
			if (x != 0){
				this.previousElementSibling.classList.add('active');
			};
		});


  	// left arrow
		element2.addEventListener("click", function(){

			var slide = this.nextElementSibling.nextElementSibling;

			if(x < -650){
			  x = x + 331;
			  slide.setAttribute("style", "transform: translate("+ x + "px, 0");
			  this.nextElementSibling.classList.add('active');
			}else{
				x = x + 331;
				  slide.setAttribute("style", "transform: translate("+ x + "px, 0");
			  	this.classList.remove('active');
			  };
		});
  };

  console.log(screenWidth);

  // for each touchpoint project cover
  for (var i = touchPoint.length - 1; i >= 0; i--) {

  	// when it's clicked
		touchPoint[i].addEventListener("click", function(){

			// make these variables
			var array = Array.prototype.slice.call(this.parentElement.children);
			var index = array.indexOf(this);
			var show = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.children[index];
			var domIndex = this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.children;
			var friedChicken = 0;

			// expand the feature section

			if (screenWidth < 1100){
				this.parentElement.parentElement.parentElement.previousElementSibling.setAttribute("style", "max-height: 1000px;");
			} else {
				this.parentElement.parentElement.parentElement.previousElementSibling.setAttribute("style", "max-height: 500px;");
			};

			// make all the touchpoints not displayed
			for (var i = domIndex.length - 1; i >= 0; i--) {
				domIndex[i].setAttribute("style", "display: none;");
			}

			//remove any active classes
			for (var i = touchPoint.length - 1; i >= 0; i--) {
				touchPoint[i].classList.remove('active');
				touchPoint[i].setAttribute("Id", "");
			}

			for (var i = activeArea.length - 1; i >= 0; i--) {
				activeArea[i].setAttribute("Id", "");
			}

			// if an item is being minimised
			if (selectedItem == show){
				show.setAttribute("style", "display: none;");
				show.setAttribute("id", "");
				this.parentElement.parentElement.parentElement.previousElementSibling.setAttribute("style", "max-height: 0;");
				topContent.setAttribute("style", "max-height: auto; opacity: 255;");
				this.classList.remove('active');
				selectedItem = -1;
			}

			// this is the first item to be selected
			else {
				show.setAttribute("style", "display: flex;");
				show.setAttribute("id", "rainbow");

				var cloud = document.getElementById('rainbow').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.children;
				var flipLeft = document.getElementById('rainbow').firstElementChild.nextElementSibling.firstElementChild;
				var flipRight = document.getElementById('rainbow').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
				
				// set first display imgage visible
				document.getElementById('rainbow').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.setAttribute("id", "gloria");
		
					// gallary arrow left
					flipLeft.addEventListener("click", function(){
						
						for (var i = cloud.length - 1; i >= 0; i--) {
							cloud[i].setAttribute("id", "");
						}

						friedChicken = friedChicken - 1;
						
						if (friedChicken < 0) {
						friedChicken = cloud.length -1;
						}
						
						cloud[friedChicken].setAttribute("id", "gloria");
					});

					// gallary arrow right
					flipRight.addEventListener("click", function(){
						
						for (var i = cloud.length - 1; i >= 0; i--) {
							cloud[i].setAttribute("id", "");
						}

						friedChicken = friedChicken + 1;
						
						if (friedChicken > cloud.length -1) {
						friedChicken = 0;
						}
						
						cloud[friedChicken].setAttribute("id", "gloria");
					});

				// topContent.setAttribute("style", "max-height: 44px; opacity: 0;");
				window.scrollTo(0, this.offsetTop + 420);
				this.classList.add('active');
				selectedItem = show;
			}
		});
	}

	about.addEventListener("click", function(){
		window.scrollTo(0, aboutSection.offsetTop - 50);
	});

		contactButton.addEventListener("click", function(){
		window.scrollTo(0, contact.offsetTop + 50);
	});

}
