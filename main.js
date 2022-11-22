const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f91700001000001f4b2e4998f8241b4912c8b3c306223b7',
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

var forwardButton = document.getElementsByClassName('forward')
var backwardsButton = document.getElementsByClassName('backwards')


var page = 0;

url = 'https:exelsdimasv1.p.rapidapi.com/v1/search?query=landscapes&locale=en-US&per_page=1&page=' 

function increment() {

    page++
    url = url + page
    console.log(url)
    return url
}

console.log(new_url = increment())


function fetchImages(){
        fetch(new_url, options)
        .then(response => response.json())
        .then(data => this.displayImages(data))
}

    
function displayImages(data){

        for(let i = 0; i < 13; i++){
            const image = data.photos[i].src.original
            document.querySelector('.img' + i).src = image
        }
        
}




window.onload = (event) => {
    fetchImages()
};

window.location.reload = (event) => {
    fetchImages()
};
