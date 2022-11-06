const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
	}
};

let memes = {

    
    fetchMemes: function (){
        fetch('https://reddit34.p.rapidapi.com/getTopPostsBySubreddit?subreddit=arabfunny&time=hour', options)
	    .then(response => response.json())
	    .then((data) => this.displayMemes(data))
    },
    
    displayMemes: function(data){

        for(let i = 0; i < 9; i++){
            //const {url} = data.memes[i]
            //document.querySelector('.img' + i).style.background = url
            
            
        }
        console.log(data.data.posts[0])
        console.log(data.data)
    }


}
window.onload = (event) => {
    memes.fetchMemes()
};

window.location.reload = (event) => {
    memes.fetchMemes()
};
