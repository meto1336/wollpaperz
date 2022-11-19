const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bdc61bae8mshc7ff99c4061c91dp1c05f6jsn9d3fdc5000b5',
		'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
	}
};

let  = {

    
    fetchMemes: function (){
        fetch('https://pexelsdimasv1.p.rapidapi.com/v1/search?query=landscapes&locale=en-US&per_page=12&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    },
    
    displayMemes: function(data){

        for(let i = 0; i <= 11; i++){
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
