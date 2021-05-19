
let amazon= "https://dog.ceo/api/breeds/list/all"
let amazon1="https://dog.ceo/api/breeds/image/random"

fetch(amazon)
.then(function(data){
    return data.json()
}).then(function(values){
    populate(values)
})

.catch(function(error){
    console.log(error);
})

function populate(data){
    let praveen= document.querySelector('.container')

     for(let prop in data){
         console.log(prop);
     }

}













