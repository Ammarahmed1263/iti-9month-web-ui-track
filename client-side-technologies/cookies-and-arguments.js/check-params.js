function checkParams(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("Expected 2 arguments, but got " + arguments.length);
    }

    console.log("params passed: ", param1, param2);
}

checkParams(1);
checkParams(1, 2);
checkParams(1, 2, 3);