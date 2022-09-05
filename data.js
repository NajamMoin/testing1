var data = [
    {
        "img":"img/1.jpg",
        "title": "Heading 1",
        "des":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro minus rem necessitatibus beatae eos! Alias, ea cupiditate nobis vitae tempora minima doloremque recusandae est beatae magni minus nihil animi harum.",
        "cardprice": "100 Rs",
        "fileSource": "Bootstrap.html"
    },
    {
        "img":"img/2.jpg",
        "title": "Heading 2",
        "des":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro minus rem necessitatibus beatae eos! Alias, ea cupiditate nobis vitae tempora minima doloremque recusandae est beatae magni minus nihil animi harum.",
        "cardprice": "400 Rs",
        "fileSource": "Revision.html"
    }
]


for(var i=0; i<data.length; i++){
    document.getElementById("card").innerHTML += `
    <div class="col-lg-3">
                <div class="car-body">
                    <div class="card">
                        <div class="card-img">
                            <img src="${data[i].img}" alt="" width="100%">
                        </div>
                        <div class="card-title">
                         <h1>   ${data[i].title} </h1>
                        </div>
                        <div class="card-des">
                        <h5>  ${data[i].des} </h5
                        </div>
                        
                        <div class="card-price">
                          ${data[i].cardprice}
                        </div> 
                        <div class="btn btn-primary">
                            <a href="${data[i].fileSource}" class="text-white">Add to card</a>
                        </div>

                    </div>
                </div>
            </div>

    `
}