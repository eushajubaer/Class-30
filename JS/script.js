// let counter = document.querySelector(".first")

// console.log(counter.dataset.number);

// let count = 0
 
// function counterup() {

//     count++

//     counter.innerHTML = count;
//     if (count == counter.dataset.number) {
//         clearInterval(sopt)
//     }
// }

// let sopt = setInterval(function(){
//     counterup();
// },1000);


let counterup = document.querySelectorAll(".first")

let arr = Array.from(counterup)
// console.log(arr);

arr.map((item)=>{
    // console.log(item);
    // console.log(item.dataset.number);

  let counter = 0
    function count(){
        counter++;
        item.innerHTML= counter;

        if(counter == item.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(function(){
        count();
    },1000/item.dataset.number)

})


