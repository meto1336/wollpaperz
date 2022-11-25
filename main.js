const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f91700001000001f4b2e4998f8241b4912c8b3c306223b7',
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

var forwardButton = document.querySelector('.forward');
var backwardsButton = document.querySelector('.backwards')
var img = document.querySelectorAll('img')
var search_input = document.querySelector('input')

var page = 1;


if(page < 2){
    backwardsButton.setAttribute('disabled', true);
}

var url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=12&page=' + page

 forwardButton.addEventListener('click', (e)=> {
    
        url = url.slice(0, -1)
        page = page += 1
        url = url + page
        fetchImages(url)
        backwardsButton.removeAttribute('disabled')
        
 })

 backwardsButton.addEventListener('click', (e)=> {

        url = url.slice(0, -1)
        page = page -= 1
        url = url + page
        fetchImages(url)

        if(page < 2)    {
        backwardsButton.setAttribute('disabled', true);
    }

        

})

search_input.addEventListener('keypress', (e)=> {
  
    if(e.key === "Enter"){
        searchImages()
        e.preventDefault()
    }

})


function searchImages(){

    this.url = 'https:exelsdimasv1.p.rapidapi.com/v1/search?query='+ search_input.value +'&per_page=12&page=' + page
    this.fetchImages(url)

}


function fetchImages(url){
        fetch(url, options)
        .then(response => response.json())
        .then(data => this.displayImages(data))
}
    

function displayImages(data){

        for(let i = 0; i < 10; i++){
            const image = data.photos[i].src.original
            img[i].src = image
        }
        
}




window.onload = (event) => {
    fetchImages(url)
};

window.location.reload = (event) => {
    fetchImages(url)
};
