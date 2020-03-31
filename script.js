const STORE = {
    summer: {
        0: {
            name: "Blueberry",
            image: "blueberry.jpg",
            description: "Blueberries have a slightly sweet taste with a bit of acid. Mouthfeel is juicy and there is a pleasant “squirt” of juice as you bite down on a single fresh ripe blueberry."
        },
        1: {
            name: "Peaches",
            image: "peaches.jpg",
            description: " Peaches are sweet, redolent and low-calorie fruits.  By seeing the color of a peach you can't tell if it is ripe or not, you should check its texture: when you buy them, choose not too hard peaches."
        },
        2: {
            name: "Watermelon",
            image: "watermelon.jpg",
            description: "Watermelon is a large fruit of a more or less spherical shape and a dark green and smooth rind. It has a sweet, juicy, refreshing flesh of yellowish or reddish colour."
        },
        3: {
            name: "Corn",
            image: "corn.jpg",
            description: "Corn is a plant that grows long ears of kernels on tall, grass-like stalks. The kind of corn you get on the cob, sweet corn, is definitely sweet with a soft, buttery flavor."
        },
        4: {
            name: "Cucumber",
            image: "cucumber.jpg",
            description: "A cucumber is mainly very watery and juicy and the seeds give it a hint of freshness. They have a bitter, slightly watery taste."
        },
        5: {
            name: "Zucchini",
            image: "gysquash.jpg",
            description: "The zucchini is a long, cylindrical vegetable, slightly smaller at the stem end, usually dark green in color. The flesh is a pale greenish-white and has a delicate, almost sweet flavor."
        }
    },
    fall: {
        0: {
            name: "Figs",
            image: "figs.jpg",
            description: "Figs are sweet and moist inside. The flesh of the fig is jellylike and pulpy, but not juicy. You can feel the crunch of the small seeds as you eat it."
        },
        1: {
            name: "Grapes",
            image: "grapes.jpg",
            description: "A grape is a fruit, botanically a berry. Grapes are big, crunchy and a bit tart, with thin skins. "
        },
        2: {
            name: "Pomegranate",
            image: "pom.jpg",
            description: "Depending on the variety and degree of ripeness, the seeds of the pomegranate can vary in taste from only a little sour to fairly sharp. "
        },
        3: {
            name: "Pumpkin",
            image: "pumpkin.jpg",
            description: "Pumpkins have an earthy sweet flavor. Some can be bitter and less enjoyable to eat on their own."
        },
        4: {
            name: "Butternut Squash",
            image: "bsquash.jpg",
            description: "The flavor of butternut squash is sweet, moist and nutty tasting."
        },
        5: {
            name: "Yellow Potato",
            image: "ypotato.jpg",
            description: "Yellow potatoes have skins and flesh that ranges from pale yellow to golden yellow. Their flesh has a buttery flavor and they are used for baking, boiling, roasting, and mashing."
        }
    },
    winter: {
        0: {
            name: "Lemon",
            image: "lemon.jpg",
            description: "Lemon have an acidic, sharp or tangy taste. Lemons have a sour taste."
        },
        1: {
            name: "Lime",
            image: "lime.jpg",
            description: "A lime has a bitter, acidic taste."
        },
        2: {
            name: "Clementine",
            image: "clementine.jpg",
            description: "A clementine is a small, orange, seedless citrus fruit. Clementines are usually easy to peel and section, and they taste very sweet."
        },
        3: {
            name: "Cabbage",
            image: "cabbage.jpg",
            description: "When raw, its texture is somewhat rubbery and its flavor kind of peppery but once cooked, the green cabbage softens and takes on a sweeter taste."
        },
        4: {
            name: "Beet",
            image: "beet.jpg",
            description: "Beets tend to have earthy taste and smell due to the organic compound “geosmin”."
        },
        5: {
            name: "Carrot",
            image: "carrot.jpg",
            description: "Carrots may taste slightly different depending on the color, size, and where they're grown. The sugar in carrots gives them a slightly sweet flavor, but they also can taste earthy or bitter."
        }
        
    },
    spring: {
        0: {
            name: "Cherries",
            image: "cherry.jpg",
            description: "Cherries are tart. They have a unique sour-sweet flavor that is becoming more and more popular across the country."
        },
        1: {
            name: "Kiwi",
            image: "kiwi.jpg",
            description: "Beneath its fuzzy brown surface you'll find brilliant pale green flesh speckled with a ring of tiny edible black seeds. Delicate, tart, sweet, and complex in flavor."
        },
        2: {
            name: "Strawberry",
            image: "strawberry.jpg",
            description: "The flavor of strawberry is fruity, sweet, and mildly acid to bracingly sour depending on their ripeness and the individual variety."
        },
        3: {
            name: "Artichoke",
            image: "artichoke.jpg",
            description: "Artichokes typically have a clean, green, and earthy taste that most vegetables have. When boiled, artichoke has a mild flavor."
        },
        4: {
            name: "Radish",
            image: "radish.jpg",
            description: "When eaten raw, radishes are spicy, crisp, and zesty. Varieties can range from very spicy to very mild. Cooking brings out the sweetness and milds the spice."
        },
        5: {
            name: "Asparagus",
            image: "asparagus.jpg",
            description: "Asparagus has a rather earthy taste that's similar to broccoli but slightly more bitter and salty."
        }
    }
}




function summerproduce() {

    const summerfruit = Object.values(STORE.summer);
    console.log(summerfruit);


    $('div#summerProduce').html(`
        <div class="text-center text-md-left px-md-3 px-lg-5 mt-5">    
            <h1 class="font-italic seasonhead">Summer</h1>
            <p class="font-italic seasonsub">June-September</p>
        </div>    
        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[0].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[0].name}</h5>
                        <p class="card-text">${summerfruit[0].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[1].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[1].name}</h5>
                        <p class="card-text">${summerfruit[1].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[2].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[2].name}</h5>
                        <p class="card-text">${summerfruit[2].description}</p>
                    </div> 
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[3].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[3].name}</h5>
                        <p class="card-text">${summerfruit[3].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[4].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[4].name}</h5>
                        <p class="card-text">${summerfruit[4].description}</p>
                    </div> 
                </div>
            </div>
            
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${summerfruit[5].image}">
                    <div class="card-body">
                        <h5 class="card-title">${summerfruit[5].name}</h5>
                        <p class="card-text">${summerfruit[5].description}</p>
                    </div> 
                </div>
            </div>
        </div>`
    );
}


function fallproduce() {
    const fallfruit = Object.values(STORE.fall);
    console.log(fallfruit);


    $('div#fallproduce').html(`
        <div class="text-center text-md-left px-md-3 px-lg-5  mt-5">
            <h1 class="font-italic seasonhead">Fall</h1>
            <p class="font-italic seasonsub">September-December</p>
        </div>
        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[0].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[0].name}</h5>
                        <p class="card-text">${fallfruit[0].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[1].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[1].name}</h5>
                        <p class="card-text">${fallfruit[1].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[2].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[2].name}</h5>
                        <p class="card-text">${fallfruit[2].description}</p>
                    </div> 
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[3].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[3].name}</h5>
                        <p class="card-text">${fallfruit[3].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[4].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[4].name}</h5>
                        <p class="card-text">${fallfruit[4].description}</p>
                    </div> 
                </div>
            </div>
            
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${fallfruit[5].image}">
                    <div class="card-body">
                        <h5 class="card-title">${fallfruit[5].name}</h5>
                        <p class="card-text">${fallfruit[5].description}</p>
                    </div> 
                </div>
            </div>
        </div>`
    );
}


function winterproduce() {
    const winterfruit = Object.values(STORE.winter);
    console.log(winterfruit);


    $('div#winterproduce').html(`
        <div class="text-center text-md-left px-md-3 px-lg-5 mt-5">    
            <h1 class="font-italic seasonhead">Winter</h1>
            <p class="font-italic seasonsub">December-March</p>
        </div>    
        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[0].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[0].name}</h5>
                        <p class="card-text">${winterfruit[0].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[1].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[1].name}</h5>
                        <p class="card-text">${winterfruit[1].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[2].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[2].name}</h5>
                        <p class="card-text">${winterfruit[2].description}</p>
                    </div> 
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[3].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[3].name}</h5>
                        <p class="card-text">${winterfruit[3].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[4].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[4].name}</h5>
                        <p class="card-text">${winterfruit[4].description}</p>
                    </div> 
                </div>
            </div>
            
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${winterfruit[5].image}">
                    <div class="card-body">
                        <h5 class="card-title">${winterfruit[5].name}</h5>
                        <p class="card-text">${winterfruit[5].description}</p>
                    </div> 
                </div>
            </div>
        </div>`
    );
}

function springproduce() {
    const springfruit = Object.values(STORE.spring);
    console.log(springfruit);


    $('div#springproduce').html(`
        <div class="text-center text-md-left px-md-3 px-lg-5 mt-5">    
            <h1 class="font-italic seasonhead">Spring</h1>
            <p class="font-italic seasonsub">March-June</p>
        </div>    
        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[0].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[0].name}</h5>
                        <p class="card-text">${springfruit[0].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[1].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[1].name}</h5>
                        <p class="card-text">${springfruit[1].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[2].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[2].name}</h5>
                        <p class="card-text">${springfruit[2].description}</p>
                    </div> 
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[3].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[3].name}</h5>
                        <p class="card-text">${springfruit[3].description}</p>
                    </div> 
                </div>
            </div>
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[4].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[4].name}</h5>
                        <p class="card-text">${springfruit[4].description}</p>
                    </div> 
                </div>
            </div>
            
            <div class="col">
                <div class="card produceCard">
                    <img height="180px" class="card-image-top rounded-top" src="assets/images/${springfruit[5].image}">
                    <div class="card-body">
                        <h5 class="card-title">${springfruit[5].name}</h5>
                        <p class="card-text">${springfruit[5].description}</p>
                    </div> 
                </div>
            </div>
        </div>`
    );
}




summerproduce();
fallproduce();
winterproduce();
springproduce();