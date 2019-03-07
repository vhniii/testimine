
function add(x, y){
    
    return x + y;
    
}


let a = add(2, 3); //5 
console.log(a);


let b = add(0.25, 0.35);
console.log(b);

let c = add();
console.log(c);


let bb = expect(add(2, 3)).toBe(5);

console.log(bb);