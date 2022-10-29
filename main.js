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
