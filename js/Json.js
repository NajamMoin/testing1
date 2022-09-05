var data =
    [
        {
            "img": "img/4.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        },
        {
            "img": "img/1.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        }, {
            "img": "img/2.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        },
        {
            "img": "img/4.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        },
        {
            "img": "img/1.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        }, {
            "img": "img/2.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        },
        {
            "img": "img/4.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        },
        {
            "img": "img/1.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        }, {
            "img": "img/2.jpg",
            "title": "Cart",
            "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus repellendus dolore ut sequi dolor perferendis nulla in? Illo voluptates esse culpa nostrum aut laboriosam labore facere consequatur cum pariatur."
        }

    ]
var card = document.getElementById("card")

for (var i = 0; i < data.length; i++) {
    card.innerHTML += `
    <div class="col-lg-3 col-md-3 col-sm-12 mt-2" >

           
    <div class="card">
    <div class="card-body">
    <div class="card-img">
    <img src="${data[i].img}" alt="" width="100%">
    </div>
    <div class="card-title">
    <h1>${data[i].title}</h1>
    </div>
    <div class="card-disciption">
    <p>
    ${data[i].des}
    </p>
    </div>
    </div>  
    </div>
    `
}




