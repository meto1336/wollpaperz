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
var loader = document.getElementById('loader')
var popup_image = document.getElementById('popup-image')
var no_pics = document.getElementById('no_pics')
var close_image_button = document.getElementById('close_image')
var popup_image_white_background = document.getElementById('white-background')
var download_button = document.getElementById('download_button')
var image_div_container = document.getElementsByClassName('image')
var photographer = document.getElementById("photographer")
var save_image = document.getElementById('save_image_button')


var page = 1;


if(page < 2){
    backwardsButton.setAttribute('disabled', true);
}


function displayLoading(visibility){

    // for (let index = 0; index < loader.length; index++) {
    //     loader[index].classList.add('display')
    //     console.log(loader[index])
    // }

    loader.style.visibility = visibility

}







var url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=12&page=' + page

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
        window.scrollTo(0, 0);
        // displayLoading()


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

        window.scrollTo(0, 0);

        if(page < 2)    {
            backwardsButton.setAttribute('disabled', true);
            backwardsButton.style.opacity(50)
            console.log("disabled")
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


function searchImages() {
   

        if (no_pics.style.display.includes('flex')) {
            no_pics.style.display = 'none';
        }


        if (image_container.style.display.includes('flex')) {
            image_container.style.display = 'grid';

        }

        this.url = 'https:exelsdimasv1.p.rapidapi.com/v1/search?query=' + search_input.value + '&per_page=12&page=' + page;

        while (image_container.firstChild) {
            image_container.removeChild(image_container.lastChild);
        }
        loader.style.visibility = 'visible';
        this.fetchImages(url);


}


function fetchImages() {
    displayLoading("visible")
    fetch(url, options)
       .then(res => res.json())
       .then(data => this.displayImages(data))

    }


function displayImages(data){


        if(data.photos.length <= 0){
            no_pics.style.display = 'flex'
            image_container.style.display = 'flex'

        }
        
        else {

            if(data.photos.length <= 5) {
                image_container.style.display = 'flex'
            }

            for(let index = 0; index < data.photos.length; index++){


                var image_div = document.createElement("div");
                var image_el = document.createElement("img")
                image_div.className = "image";
                image_container.appendChild(image_div)
                image_div.appendChild(image_el)
                image_el.src = data.photos[index].src.large2x
                image_el.className = 'img'
                img_tag[index].style.opacity = 0


                img_tag[index].addEventListener('load', function(){
                    img_tag[index].classList.add('active')
                    img_tag[index].style.opacity = 1
                    img_tag[index].style.cursor = 'pointer'
                    displayLoading('hidden')


                })
                img_tag[index].addEventListener('click', function(){
                    new_url = data.photos[index].url
                    url_with_numbers = new_url.replace('https://www.pexels.com/photo/', '')
                    replaced_url = url_with_numbers.slice(0, -9)
                    download_image = data.photos[index].src.original
                    // image_container.removeChild('')
                    img_tag[index].style.pointerEvents = 'none'
                    img_tag[index].src = data.photos[index].src.original
                    console.log(img_tag[index].src)
                    popup_image_white_background.insertAdjacentElement('afterbegin', img_tag[index])
                    photographer.href = data.photos[index].photographer_url
                    photographer.innerText = data.photos[index].photographer
                    popup_image.style.visibility = 'visible'
                    document.body.style.overflow = 'hidden'
                    // console.log(currentimg)
                }),
                close_image_button.addEventListener('click', function(){
                    // popup_image.removeChild(img_tag[index])
                    img_tag[index].src = data.photos[index].src.large2x
                    image_div_container[index].append(img_tag[index])
                    popup_image.style.visibility = 'hidden'
                    document.body.style.overflow = 'visible'
                    img_tag[index].style.pointerEvents = 'auto'
                    img_tag[index].style.cursor = 'pointer'

                   
                })

                //createCookie('image_url', image_el.src, 7);

                save_image.addEventListener('click', function(){
                    createCookie("image_url", download_image, "1")
                })
                
                  
                
            }

            
        }



}


const imgs = document.querySelectorAll('img')

function createCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    else {
      expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
  }


//../saved_images/save_photo_to_db.php

function save_photo_to_db(){
    jQuery(function($) {    
        $.ajax( {           
            url : "../saved_images/save_photo_to_db.php",
            type : "POST",
            success : function() {
                alert ("works!"); //or use data string to show something else
                }
            });
        });

}

download_button.addEventListener('click', function(){
    download(download_image, replaced_url)
})


function download(url, filename) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    })
    .catch(console.error);
  }


window.addEventListener('load', function(){

    fetchImages()

    
    search_input.value = ''

    
})



