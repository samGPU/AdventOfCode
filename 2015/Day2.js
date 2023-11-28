(() => {
    let x = [], w = 0, r = 0;
    $("pre").innerHTML.split("\n").forEach((v) => { x.push(v.split("x")) } );
    x.pop();
    x.forEach((v) => {
        let t = [v[0] * v[1], v[1] * v[2], v[0] * v[2]];
        w = w + (t[0] * 2) + (t[1] * 2) + (t[2] * 2) + Math.min(...t)
        let s = [v[0], v[1], v[2]].sort(function(a, b){return a - b});
        r = r + (s[0] * s[1] * s[2]) + ((s[0] * 2) + (s[1] * 2))
    })
    return [w, r]
})()
