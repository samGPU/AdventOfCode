(() => {
    r = [0, 0], z = [], x = [], k = []

    $("pre").innerText.split("\n").forEach((q) => {
        t = (q.split(':')[1])
        if(t !== undefined) {
            z.push(q.split(' ').filter(x => parseInt(x)).map(x => parseInt(x)))
            x.push(parseInt(t.replaceAll(' ' , '')))
        }
    });
    z[0].forEach((q, i) => {
        w = 0
        for(j = 1; j < q; j++) { if((q - j) * j > z[1][i]) w++ }
        k.push(w)
    })
    r[0] = k.reduce( (a, b) => a * b ) 
    for(j = 1; j < x[0]; j++) { if((x[0] - j) * j > x[1]) r[1]++ }
    
    return r
})()
