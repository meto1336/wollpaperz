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
var image_container = document.querySelector('.image-container')
var search_input = document.querySelector('input')
var page_number = document.querySelector('.page_number')
var loader = document.querySelectorAll('.loading')
var popup_image = document.getElementsByClassName('"popup-image')
var page_div = document.getElementById('page')
var navbar = document.getElementsByTagName('nav')




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

// image_container.addEventListener('click', (e)=> {

//     img.appendChild(popup_image)

// })

 forwardButton.addEventListener('click', (e)=> {
    
        url = url.slice(0, -1)
        page = page += 1
        page_number.innerHTML = 'Page ' + page
        url = url + page
        backwardsButton.removeAttribute('disabled')
        while (image_container.firstChild) {
            image_container.removeChild(image_container.lastChild);
          }
        fetchImages(url)
        
        
 })

 backwardsButton.addEventListener('click', (e)=> {

        url = url.slice(0, -1)
        page = page -= 1
        page_number.innerHTML = 'Page ' + page
        url = url + page
        while (image_container.firstChild) {
            image_container.removeChild(image_container.lastChild);
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
        searchImages()
        e.preventDefault()
    }

})


function searchImages(){
    
    this.url = 'https:exelsdimasv1.p.rapidapi.com/v1/search?query='+ search_input.value +'&per_page=12&page=' + page
    
    if(document.contains(document.getElementById('no_pics'))){
        document.getElementById('no_pics').remove()
    }

    while (image_container.firstChild) {
        image_container.removeChild(image_container.lastChild);
      }
    this.fetchImages(url)

}


function fetchImages() {
    displayLoading()
    fetch(url, options)
       .then(res => res.json())
       .then(data => this.displayImages(data))

    
    }
function displayImages(data){


        if(data.photos.length <= 0){
            var nopics_div = document.createElement("div")
            nopics_div.id = "no_pics"
            nopics_div.innerText = "No Pictures found"
            document.body.appendChild(nopics_div);

        } else {
            
            image_container.append()
           

            for(let index = 0; index < data.photos.length; index++){

                console.log(data.photos[index].src.original)
    
                var image_div = document.createElement("div");
                var image_el = document.createElement("img")
                image_div.className = "image";
                document.body.appendChild(image_container);
                image_container.appendChild(image_div)
                image_div.appendChild(image_el)
                image_el.src = data.photos[index].src.original
                
                
            }
        }


       

        

    
        
}

window.onload = (event) => {
    fetchImages()
    search_input.value = ''

}
