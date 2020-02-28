(() => {
    let sigilButtons = document.querySelectorAll(".sigilContainer"),
    	lightbox = document.querySelector(".lightbox"),
    	houseVideo = lightbox.querySelector("video"),
    	closeButton = lightbox.querySelector(".close-button");

    // function go in the middle -> what do we want our app to do?
    function showLightBox() {
        //show the lightbx on a click
        lightbox.classList.add("show-lightbox");
        houseVideo.play();
    }
    
    function hideLightBox() {
    	lightbox.classList.remove("show-lightbox");
    	//stop and rewind the video
    	houseVideo.pause();
    	houseVideo.currentTime = 0;
    }
    
    // event hamdling for our sigilButtons
    sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

    // add some event handling for the lightbox close button
    closeButton.addEventListener("click", hideLightBox)
})();
