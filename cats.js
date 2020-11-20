var shop = [{
    title: 'Ary',
    image: 'img/ary.jpg',
    price: '150',
    description: "Ary is a rescued stray from the cincinnati area. Loves cuddles and naps."
    },
    {
    title: 'Shikamaru',
    image: 'img/shikamaru.jpg',
    price: '120',
    description: "Shikamaru was donated by a wonderful family from Mason, Oh. Loves to play and go for walks."
    },
    {
    title: 'Jessie',
    image: 'img/jassie.jpg',
    price: '230',
    description: "Jessie is an older rescue cat, she enjoys being lazy and children."
    }]
    
     var postHTML = '';
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card ">' + shop[i].title 
        var image = '<img height="300vw" width="350vw" src="' + shop[i].image + '"/>'
        var price ='<p class="price"> $' + shop[i].price + '</p>'
        var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div>'+'</div>'
        var concatThis =  heading + image + price + description
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
