// * * *
// * * *
// * * *

// rows = 3
// columns = 3

n = 3 
// first row 3 stars
// second row 3 stars 
// third row 3 stars

// 1st column = 3 stars 
// 2nd column = 3 stars
// 3rd column = 3 stars

// for (var i =0 ; i< n ; i++){
//     for (var j = 0; j<n; j++){
//         process.stdout.write("*" + " ")
//     }
//     console.log("");
// }

// *
// * *
// * * *

// 1st row = 1star
// 2nd row = 2stars
// 3rd row = 3 stars

// for (var i =1 ; i<=n; i++){
//     for (var j = 1; j <= i; j++){
//         process.stdout.write("*" + " ")
//     }
//     console.log();
// }

//     *
//   * *
// * * *

// 1st row = 2 space
// 2nd row = 1 space
// 3rd row = 0 space

// 1st row = 1 star
// 2nd row = 2 star
// 3rd row = 3 star
// for (var i =1 ; i<=n; i++){
//     for (var j = 1; j <= n-i; j++){
//         process.stdout.write(" " + " ")
//     }
//     for (var j =1; j<=i;j++){
//         process.stdout.write("*" + " ")
//     }
//     console.log();
// }

function x(){
    var i = 1;
    setTimeout(()=>{
        console.log(i)
    }, 3000)
    ['A','B'].forEach(val => console.log(val))
    console.log("learn")
}
x();