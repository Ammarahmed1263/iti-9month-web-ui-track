const myObj = {
    [Symbol.replace]: function (str) {
        if (str.length > 15) {
            return str.slice(0, 15) + "..."
        }

        return str;
    }
}


let str = "hello, world. I'm ammar ahmed."
let shortStr = "hello, world."

console.log(str.replace(myObj));
console.log(shortStr.replace(myObj));