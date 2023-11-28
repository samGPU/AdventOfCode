(() => {
    let x = []
    $("pre").innerText.split("\n\n").forEach((v) => {
        let t = v.split("\n");
        if(t[t.length-1] == "") t.pop();
        x.push(t.reduce((a, b) => parseInt(a) + parseInt(b), 0));
    })
    x.sort(function(a, b){return b - a});
    return [x[0], (x[0] + x[1] + x[2])]
})()
