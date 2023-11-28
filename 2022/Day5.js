(() => {
    x = $("pre").innerText.split("\n\n"), m = [];
    c = x[0].split("\n");
    for(i = 0; i < c.length; i++) {
        c[i] = c[i].match(/.{1,4}/g)
        for(j = 0; j < c[i].length; j++)
            c[i][j] = c[i][j].substring(1,2)
    }
    c = c.map((_, colIndex) => c.map(row => row[colIndex]));
    c.forEach((v) => { 
        v.reverse(); v.shift(); 
        for(i = v.length; i > 0; i--) if(v[i] == " ") v.pop()
    })
    c2 = c.map(function(arr) { return arr.slice(); });
    x[1].split("\n").forEach((v) => {
        v = v.split(" ")
        m.push([v[1],v[3],v[5]])
    })
    m.pop()
    m.forEach((v) => {
        for(i = 0; i < v[0]; i++) c[v[2]-1].push(c[v[1]-1].pop())
        c2[v[2]-1] = c2[v[2]-1].concat(c2[v[1]-1].splice((c2[v[1]-1].length-v[0])))
    })
    a1 = "", a2 = ""
    c.forEach((v) => { a1+=v.pop() })
    c2.forEach((v) => { a2+= v.pop() })
    return [a1, a2]
})();
