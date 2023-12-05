(() => {
    q = []
    $("pre").innerText.split("\n").forEach((v) => {
        k = v.replaceAll(/[\/*&@+=$%#]/g, '.')
        b = k.split('.')
        b = b.filter(x => parseInt(x))
        b.forEach((k, i) => {
            b[i] = Math.abs(parseInt(k)).toString()
        });
        z = [], e = 0, flip = false
        v.split('').forEach((n, i) => {
            if(parseInt(n) || parseInt(n) == 0) { z.push(b[e]); flip = true } 
            else if(n !== '.') { z.push(n) } 
            else { z.push('.'); if(flip) { e++; flip = false } }
            // console.log(z)
        })
        // console.log(z)
        q.push(z)
    });
    // console.log(q)
    t = 0
    for(let i = 0; i < q.length - 1; i++) {
        console.log(q[i])
        topleft = false
        topcenter = false
        bottomleft = false
        bottomcenter = false
        for(let j = 0; j < q[0].length; j++) {
            if(q[i][j] !== '.' && !parseInt(q[i][j])) {
                // console.log(q[i][j])
                // top left
                if(i > 0 && j > 0) {
                    if(parseInt(q[i-1][j-1])) {
                        // console.log('Number at top left', q[i][j])
                        t += parseInt(q[i-1][j-1])
                        topleft = true
                    }
                }
                // top
                if(i > 0 && !topleft) {
                    if(parseInt(q[i-1][j])) {
                        // console.log('Number at top', q[i][j])
                        t += parseInt(q[i-1][j])
                        topcenter = true
                    }
                }
                // top right
                if(i > 0 && j < q[0].length - 1) {
                    if(q[i-1][j+1] !== q[i-1][j-1]) {
                        if(parseInt(q[i-1][j+1] && !topcenter)) {
                            // console.log('Number at top right', q[i][j])
                            t += parseInt(q[i-1][j+1])
                        }
                    }
                }
                // left
                if(j > 0) {
                    if(parseInt(q[i][j-1])) {
                        // console.log('Number at left', q[i][j])
                        t += parseInt(q[i][j-1])
                    }
                }
                // right
                if(j < q[0].length - 1) {
                    if(parseInt(q[i][j+1])) {
                        // console.log('Number at right', q[i][j])
                        t += parseInt(q[i][j+1])
                    }
                }
                // bottom left
                if(i < q.length && j > 0) {
                    if(parseInt(q[i+1][j-1])) {
                        // console.log('Number at bottom left', q[i][j])
                        t += parseInt(q[i+1][j-1])
                        bottomleft = true
                    }
                }
                // bottom
                if(i < q.length && !bottomleft) {
                    if(parseInt(q[i+1][j])) {
                        // console.log('Number at bottom', q[i][j])
                        t += parseInt(q[i+1][j])
                        bottomcenter = true
                    }
                }
                // bottom right
                if(i < q.length && j < q[0].length - 1) {
                    if(q[i+1][j+1] !== q[i+1][j-1]) {
                        if(parseInt(q[i+1][j+1]) && !bottomcenter) {
                            // console.log('Number at bottom right', q[i][j])
                            t += parseInt(q[i+1][j+1])
                        }
                    }
                }
            }
        }
    }
    return [t, 0]
})()