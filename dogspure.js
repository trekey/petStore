var shop = [{
    title: 'Sage',
    image: 'img/rednose.jpg',
    price: '600',
    description: "Sage is a pure-breed Rednose Pitbull, she has a keen since of smell is very loving but also teritorial."
    },
    {
    title: 'Alpha',
    image: 'img/doberman.jpg',
    price: '580',
    description: "Alpha is a pure-breed doberman pincher & a great loyal gaurdog! "
    },
    {
    title: 'Marley',
    image: 'img/marley.jpg',
    price: '900',
    description: "Marley is a pure-breed Labrador Retriever, he is a fun, loving dog who is what we call the 'Gaurdian of Kids'."
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
    document.getElementById('puremarket').innerHTML = postHTML
