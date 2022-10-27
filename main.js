const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};

let memes = {

    
    fetchMemes: function (){
        fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
	    .then(response => response.json())
	    .then((data) => this.displayMemes(data))
    },
    
    displayMemes: function(data){

        for(let i = 0; i < 9; i++){
            const {image} = data[i]
            document.querySelector('.img' + i).src = image
        }
    }


}
window.onload = (event) => {
    memes.fetchMemes()
};

window.location.reload = (event) => {
    memes.fetchMemes()
};
