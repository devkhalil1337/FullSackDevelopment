function exampleVar() {
    if (true) {
        var x = 10;  // x function ke andar accessible hai
    }
    console.log(x); // ✅ Output: 10 (even if inside if-block)
}

exampleVar();
