const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f91700001000001f4b2e4998f8241b4912c8b3c306223b7',
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

var forwardButton = document.querySelector('.next_page');
var backwardsButton = document.querySelector('.previous_page')
var img = document.querySelectorAll('img')
var search_input = document.querySelector('input')
var page_number = document.querySelector('.page_number')
var loader = document.querySelectorAll('.loading')





function displayLoading(){

    for (let index = 0; index < loader.length; index++) {
        loader[index].classList.add('display')
    }

}

for (let index = 0; index < img.length; index++) {
    img[index].addEventListener("load", function loaded(){

        img[index].style.opacity = 1
        loader[index].classList.remove("display");

    });   
}



var page = 1;


if(page < 2){
    backwardsButton.setAttribute('disabled', true);
}

var url = 'https:pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=12&page=' + page

 forwardButton.addEventListener('click', (e)=> {
    
        url = url.slice(0, -1)
        page = page += 1
        page_number.innerHTML = 'Page ' + page
        url = url + page
        backwardsButton.removeAttribute('disabled')
        for(let index = 0; index < img.length; index++){
            img[index].src = ""
        }
        fetchImages(url)
        
        
 })

 backwardsButton.addEventListener('click', (e)=> {

        url = url.slice(0, -1)
        page = page -= 1
        page_number.innerHTML = 'Page ' + page
        url = url + page
        for(let index = 0; index < img.length; index++){
            img[index].src = ""
        }
        fetchImages(url)

        if(page < 2)    {
        backwardsButton.setAttribute('disabled', true);
        }
        

})

search_input.addEventListener('keypress', (e)=> {
  
    if(e.key === "Enter"){
        page = 1
        page_number.innerHTML = 'Page ' + page
        for(let index = 0; index < img.length; index++){
            img[index].src = ""
        }
        searchImages()
        e.preventDefault()
    }

})


function searchImages(){
    
    this.url = 'https:exelsdimasv1.p.rapidapi.com/v1/search?query='+ search_input.value +'&per_page=12&page=' + page
    this.fetchImages(url)

}


function fetchImages() {
    displayLoading()
    fetch(url, options)
       .then(res => res.json())
       .then(data => this.displayImages(data))

    
    }
function displayImages(data){

        for(let index = 0; index < img.length; index++){
            const image = data.photos[index].src.original
            img[index].src = image
            img[index].style.opacity = 0
        }

        
}




window.onload = (event) => {
    fetchImages()
    search_input.value = ''

}
