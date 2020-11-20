var shop = [{
    title: 'Patchy',
    image: 'img/patchy.jpg',
    price: '400',
    description: "Patchy was donated by a family from the Dayton Area."
    },
    {
    title: 'Danny',
    image: 'img/danny.jpg',
    price: '580',
    description: "Danny was donated by the cincinnati zoo."
    },
    {
    title: 'Jimbo & Johnny',
    image: 'img/brothers.jpg',
    price: '800',
    description: "Jimbo and Johnny are siblings (sold together). They were found together in a families backyard in Milford, OH."
    }]
    
     var postHTML = '';
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card ">' + shop[i].title 
        var image = '<img height="350vw" width="360vw" src="' + shop[i].image + '"/>'
        var price ='<p class="price"> $' + shop[i].price + '</p>'
        var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div>'+'</div>'
        var concatThis =  heading + image + price + description
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
