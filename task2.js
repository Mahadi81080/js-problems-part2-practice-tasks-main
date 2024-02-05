// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`


const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function smallHeight(heights){
    let smallest = heights[0];
    for(const height of heights){
       if(height.length < smallest.length){
        smallest = height;
       }
    }
    return smallest;
}

const smallest = smallHeight(heights);
console.log(smallest);