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
var popup_image_white_background = document.getElementById('white-background')
var download_button = document.getElementById('download_button')
var image_div_container = document.getElementsByClassName('image')




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

    if(no_pics.style.display.includes('flex')){
        no_pics.style.display = 'none'
    }

            
    if(image_container.style.display.includes('flex')){
        image_container.style.display = 'grid'

    }
    
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


// function displayImages(data){


//         if(data.photos.length <= 0){
//             no_pics.style.display = 'flex'
//             image_container.style.display = 'flex'

//         }
        
//         else {

//             if(data.photos.length <= 5) {
//                 image_container.style.display = 'flex'
//             }

//             for(let index = 0; index < data.photos.length; index++){


//                 var image_div = document.createElement("div");
//                 var image_el = document.createElement("img")
//                 image_div.className = "image";
//                 image_container.appendChild(image_div)
//                 image_div.appendChild(image_el)
//                 image_el.src = data.photos[index].src.original
//                 image_el.className = 'img'
//                 img_tag[index].style.opacity = 0


//                 img_tag[index].addEventListener('load', function(){
//                     img_tag[index].classList.add('active')
//                     img_tag[index].style.opacity = 1
//                     img_tag[index].style.pointerEvents = 'auto'
//                     img_tag[index].style.cursor = 'pointer'


//                 })
//                 img_tag[index].addEventListener('click', function(){
//                     download_image = img_tag[index].src
//                     // image_container.removeChild('')
//                     img_tag[index].style.pointerEvents = 'none'
//                     popup_image_white_background.insertAdjacentElement('afterbegin', img_tag[index])
//                     popup_image.style.visibility = 'visible'
//                     document.body.style.overflow = 'hidden'
//                     // console.log(currentimg)
//                 }),
//                 close_image_button.addEventListener('click', function(){
//                     // popup_image.removeChild(img_tag[index])
//                     image_div_container[index].append(img_tag[index])
//                     popup_image.style.visibility = 'hidden'
//                     document.body.style.overflow = 'visible'

//                     // var image_div_container = document.getElementsByClassName('image').innerHTML === ""
                   
//                 })

                
//             }

            

            
//         }



// }

// const imgs = document.querySelectorAll('img')

// imgs.forEach(img => {

//    img.addEventListener('click', event => {
//     console.log(img.src)
//    });

// });

function displayImages(data){
    console.log(data.photos)
}


download_button.addEventListener('click', function(){
    download(download_image, download_image)
    // console.log(download_image)
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



// window.onload = () => {
    

   
// }

window.addEventListener('load', function(){

    fetchImages()

    
    search_input.value = ''

    
})



    // if (selection) {
    //   alert('The element exists in the page.');
    // } else {
    //   alert('The element does not exist in the page.');
    // }


//    document.addEventListener('DOMContentLoaded', function(){
   
//    })

