const IMAGES = document.querySelectorAll('img');
const SIZES = {
	showcase: "100vw",
	reason:   "(max-width: 799px) 100vw, 372px",
	feature:  "(max-width: 799px) 100vw, 558px",
	story:    "(max-width: 799px) 100vw, 670px"
};
function setSources(src){
	let srcSet = [];
	let width = 400;

	for(let i=0;i<5;i++){
	  srcSet[i] = src +"-"+ width + ".jpg " + width + "w";
	  width +=400;
	}
	return srcSet.join();
}

IMAGES.forEach(function(img){
	let src = img.getAttribute('src');
	src = src.slice(0,-8);
	let srcSet = setSources(src);
	img.setAttribute('srcSet',srcSet);

	let type = img.getAttribute('data-type');
	img.setAttribute('sizes',SIZES[type]);

});