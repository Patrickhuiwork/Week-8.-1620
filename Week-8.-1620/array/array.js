var electronics = [];

electronics[0] = "mouse";
electronics[1] = "keyboard";
electronics[2] = "monitor";

electronics.map((x, index) => {
    console.log(`The items is a ${x}. Then the index is ${index}.`);
    return x;
    
});

console.log(electronics.map); 

