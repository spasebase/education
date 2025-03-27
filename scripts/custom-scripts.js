window.addEventListener("load",function() {
	setTimeout(function(){
		// This hides the address bar:
		window.scrollTo(0, 1);
	}, 0);
});







//const canvas = document.getElementById("flipbook-iphone");
//const context = canvas.getContext("2d");

//const currentFrame = index => (
//  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
//)

// Set canvas dimensions
//canvas.width=1158;
//canvas.height=770;

// Create, load and draw the image
//const img = new Image()
//img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
//img.onload=function(){
//  context.drawImage(img, 0, 0);
//}