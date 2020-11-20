var shop = [{
    title: 'Dusty',
    image: 'img/dusty.jpg',
    price: '600',
    description: "Dusty has been in our facilities for 4 years now! He's fully trained and has all of his shots."
    },
    {
    title: 'Jeff',
    image: 'img/jeff.jpg',
    price: '580',
    description: "Jeff is a super loving, fully trained Dog with all of his shots."
    },
    {
    title: 'Parlay',
    image: 'img/parlay.jpg',
    price: '900',
    description: "Parlay is a multi talented Dog, knows tricks, has all of his shots."
    }]
    
     var postHTML = '';
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card ">' + shop[i].title 
        var image = '<img height="350vw" width="300vw" src="' + shop[i].image + '"/>'
        var price ='<p class="price"> $' + shop[i].price + '</p>'
        var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div>'+'</div>'
        var concatThis =  heading + image + price + description
        postHTML = postHTML + concatThis
    }
    document.getElementById('dogmarket').innerHTML = postHTML
