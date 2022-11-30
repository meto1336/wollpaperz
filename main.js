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
var image_container = document.querySelector('.image-container')
var search_input = document.querySelector('input')
var page_number = document.querySelector('.page_number')
var img_tag = document.getElementsByTagName('img')
var loader = document.querySelectorAll('.loading')
var popup_image = document.getElementById('popup-image')
var no_pics = document.getElementById('no_pics')
var close_image_button = document.getElementById('close_image')
var image_div_container = document.getElementsByClassName('image')
var popup_image_white_background = document.getElementById('white-background')
var download_button = document.getElementById('download_button')


function displayLoading(){

    for (let index = 0; index < loader.length; index++) {
        loader[index].classList.add('display')
    }

}

// for (let index = 0; index < img.length; index++) {

// }




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
            no_pics.style.visibility = "visible"

        } else {


            for(let index = 0; index < data.photos.length; index++){


                var image_div = document.createElement("div");
                var image_el = document.createElement("img")
                image_div.className = "image";
                image_container.appendChild(image_div)
                image_div.appendChild(image_el)
                image_el.src = data.photos[index].src.original
                img_tag[index].style.opacity = 0

                img_tag[index].addEventListener('load', function(){
                    img_tag[index].classList.add('active')
                    img_tag[index].style.opacity = 1
                })

                img_tag[index].addEventListener('click', function(){
                    popup_image_white_background.appendChild(img_tag[index])
                    popup_image.style.visibility = "visible"
                    document.body.style.overflow = "hidden"
                })
                close_image_button.addEventListener('click', function(){
                    image_div_container[index].appendChild(img_tag[index])
                    document.body.style.overflow = "visible"
                    popup_image.style.visibility = "hidden"
                })
                download_button.addEventListener('click', function(){
                   
                })
                
            }

            

            
        }



}




window.onload = (event) => {
    fetchImages()
    search_input.value = ''
}
