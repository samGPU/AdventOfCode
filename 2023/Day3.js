(() => {
    r = [0, 0]
    q = []
    $("pre").innerText.split("\n").forEach((v) => {
        k = v.replaceAll(/[\/*&@+=$%#]/g, '.')
        b = k.split('.').filter(x => parseInt(x))
        b.forEach((k, i) => { b[i] = Math.abs(parseInt(k)).toString() });
        z = [], e = 0, flip = false
        v.split('').forEach((n, i) => {
            if(parseInt(n) || parseInt(n) == 0) { z.push(b[e]); flip = true } 
            else if(n !== '.') { if(flip) { e++; flip = false }; z.push(n); } 
            else { z.push('.'); if(flip) { e++; flip = false } }
        })
        q.push(z)
    });
    for(let i = 0; i < q.length - 1; i++) {
        for(let j = 0; j < q[0].length; j++) {
            g = []
            if((q[i][j] !== '.' && q[i][j] !== '0') && !parseInt(q[i][j])) {
                // top left
                if(i > 0 && j > 0 && parseInt(q[i-1][j-1])) {
                    g.push(parseInt(q[i-1][j-1]))
                    r[0] += parseInt(q[i-1][j-1])
                    if(q[i-1][j-2] === q[i-1][j-1]) q[i-1][j-2] = '0';
                    if(q[i-1][j-3] === q[i-1][j-1]) q[i-1][j-3] = '0';
                    if(q[i-1][j] === q[i-1][j-1]) q[i-1][j] = '0';
                    if(q[i-1][j+1] === q[i-1][j-1] && q[i-1][j] !== '.') q[i-1][j+1] = '0';
                    q[i-1][j-1] = '0'
                }
                // top
                if(i > 0 && parseInt(q[i-1][j])) {
                    g.push(parseInt(q[i-1][j]))
                    r[0] += parseInt(q[i-1][j])
                    if(q[i-1][j-1] === q[i-1][j]) {
                        q[i-1][j-1] = '0';
                        if(q[i-1][j-2] === q[i-1][j]) q[i-1][j-2] = '0';
                    }
                    if(q[i-1][j+1] === q[i-1][j]) {
                        q[i-1][j+1] = '0';
                        if(q[i-1][j+2] === q[i-1][j]) q[i-1][j+2] = '0';
                    }
                    q[i-1][j] = '0'
                }
                // top right
                if(i > 0 && j < q[0].length - 1 && parseInt(q[i-1][j+1])) {
                    g.push(parseInt(q[i-1][j+1]))
                    r[0] += parseInt(q[i-1][j+1])
                    if(q[i-1][j+2] === q[i-1][j+1]) q[i-1][j+2] = '0';
                    if(q[i-1][j+3] === q[i-1][j+1]) q[i-1][j+3] = '0';
                    if(q[i-1][j] === q[i-1][j+1]) q[i-1][j] = '0';
                    if(q[i-1][j-1] === q[i-1][j+1] && q[i-1][j] !== '.') q[i-1][j-1] = '0';
                    q[i-1][j+1] = '0'
                }
                // left
                if(j > 0 && parseInt(q[i][j-1])) {
                    g.push(parseInt(q[i][j-1]))
                    r[0] += parseInt(q[i][j-1])
                    if(q[i][j-2] === q[i][j-1]) q[i][j-2] = '0';
                    if(q[i][j-3] === q[i][j-1]) q[i][j-3] = '0';
                    q[i][j-1] = '0'
                }
                // right
                if(j < q[0].length - 1 && parseInt(q[i][j+1])) {
                    g.push(parseInt(q[i][j+1]))
                    r[0] += parseInt(q[i][j+1])
                    if(q[i][j+2] === q[i][j+1]) q[i][j+2] = '0';
                    if(q[i][j+3] === q[i][j+1]) q[i][j+3] = '0';
                    q[i][j+1] = '0'
                }
                // bottom left
                if(i < q.length && j > 0 && parseInt(q[i+1][j-1])) {
                    g.push(parseInt(q[i+1][j-1]))
                    r[0] += parseInt(q[i+1][j-1])
                    if(q[i+1][j-2] === q[i+1][j-1]) q[i+1][j-2] = '0';
                    if(q[i+1][j-3] === q[i+1][j-1]) q[i+1][j-3] = '0';
                    if(q[i+1][j] === q[i+1][j-1]) q[i+1][j] = '0';
                    if(q[i+1][j+1] === q[i+1][j-1] && q[i+1][j] !== '.') q[i+1][j+1] = '0';
                    q[i+1][j-1] = '0'
                    
                }
                // bottom
                if(i < q.length && parseInt(q[i+1][j])) {
                    g.push(parseInt(q[i+1][j]))
                    r[0] += parseInt(q[i+1][j])
                    if(q[i+1][j-1] === q[i+1][j]) {
                        q[i+1][j-1] = '0';
                        if(q[i+1][j-2] === q[i+1][j]) q[i+1][j-2] = '0';
                    }
                    if(q[i+1][j+1] === q[i+1][j]) {
                        q[i+1][j+1] = '0';
                        if(q[i+1][j+2] === q[i+1][j]) q[i+1][j+2] = '0';
                    }
                    q[i+1][j] = '0'
                }
                // bottom right
                if(i < q.length && j < q[0].length - 1 && parseInt(q[i+1][j+1])) {
                    g.push(parseInt(q[i+1][j+1]))
                    r[0] += parseInt(q[i+1][j+1])
                    if(q[i+1][j+2] === q[i+1][j+1]) q[i+1][j+2] = '0';
                    if(q[i+1][j+3] === q[i+1][j+1]) q[i+1][j+3] = '0';
                    if(q[i+1][j] === q[i+1][j+1]) q[i+1][j+1] = '0';
                    if(q[i+1][j-1] === q[i+1][j+1] && q[i+1][j] !== '.') q[i+1][j-1] = '0';
                    q[i+1][j+1] = '0'
                }
            }
            if(g.length === 2 && q[i][j] === '*') {
                r[1] += (g[0] * g[1])
            }
        }
    }
    return r
})()