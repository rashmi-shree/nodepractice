// function transformObject(input) {
//     const output = {};
//     function processObject(obj, prefix) {
//         for (const [key, value] of Object.entries(obj)) {
//             if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
//                 // console.log(`${prefix}_${key}`);
//                 processObject(value, `${prefix}_${key}`);
//             } else {
//                 output[`${prefix}_${key}`] = value;
//             }
//         }
//     }

//     processObject(input, 'obj');
//     return output;
// }

// Example usage:
const output = {};
function transform(input, prefix="obj"){
    // console.log(input, prefix);
        for (const[key, value] of Object.entries(input)){
            if (typeof value === 'object' && !Array.isArray(value) && value !== null){
                transform(value, `${prefix}_${key}`)
            }else{
                output[`${prefix}_${key}`] = value;
            }
        }
        return output;
}
const input = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: 1234567,
    mentor1: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};
console.log(transform(input))
// const result = transformObject(input);
// console.log(result);

// Expected output:
// {
//   obj_Company: 'GeeksforGeeks',
//   obj_Address: 'Noida',
//   obj_contact: 1234567,
//   obj_mentor_HTML: 'GFG',
//   obj_mentor_CSS: 'GFG',
//   obj_mentor_JavaScript: 'GFG'
// }
