(() => {
    let f = 0, c = true, d2;
    document.querySelector("pre").innerHTML.split("").forEach((v, i) => {
        v === "(" ? f++ : f--;
        if(f === -1 && c) { d2 = i; c = false }
    })
    return [f, d2]
})();
