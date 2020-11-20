var shop = [{
    title: 'King',
    image: 'img/kingpuppy.jpg',
    price: '200',
    description: "King is a mix breed rescue puppy, he was adopted and abandoned. All shots up to date."
    },
    {
    title: 'Max',
    image: 'img/pawscreen.jpg',
    price: '280',
    description: "Max is a mix breed puppy, born in our facilities! All shots up to date."
    },
    {
    title: 'Baxter',
    image: 'img/brownpuppy.jpg',
    price: '200',
    description: "Baxter is a mix breed rescue puppy! all shots up to date."
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
    document.getElementById('market').innerHTML = postHTML


   
    // $(document).ready(function(){
    //   $("a").on('click', function(event) {
    //     if (this.hash !== "") {
    //       event.preventDefault();
    //       var hash = this.hash;
    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //       }, 800, function(){
    //         window.location.hash = hash;
    //       });
    //     }
    //   });
    // });

    

      