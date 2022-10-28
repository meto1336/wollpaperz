const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};

let memes = {

    
    fetchMemes: function (){
        fetch('https://meme-api.herokuapp.com/gimme/programmerhumor/9')
	    .then(response => response.json())
	    .then((data) => this.displayMemes(data))
    },
    
    displayMemes: function(data){

        for(let i = 0; i < 10; i++){
            const {url} = data.memes[i]
            document.querySelector('.img' + i).src = url
            
        }
    }


}
window.onload = (event) => {
    memes.fetchMemes()
};

window.location.reload = (event) => {
    memes.fetchMemes()
};
