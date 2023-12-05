(() => {
    const r = []
    z = 0, p = 0, l = 0
    $("pre").innerText.split("\n").forEach((v, i) => {
        if(v.includes(':')) {
            q = v.split(':')
            z = 0
            redMax = 0
            greenMax = 0
            blueMax = 0
            // console.log(q[0])
            q[1].split(';').forEach((b) => {
                b.split(',').forEach((n) => {
                    n = n.trim()
                    n = n.split(' ')
                    n[0] = parseInt(n[0])
                    if(n[1] === 'red') {
                        if(n[0] > 12) z++
                        if(n[0] > redMax) redMax = n[0]
                    }
                    if(n[1] === 'green') {
                        if(n[0] > 13) z++
                        if(n[0] > greenMax) greenMax = n[0]
                    }
                    if(n[1] === 'blue') {
                        if(n[0] > 14) z++
                        if(n[0] > blueMax) blueMax = n[0]
                    }
                    
                });
            });
            if(z === 0) {
                p += parseInt(q[0].split(' ')[1])
            }
            // console.log(redMax, blueMax, greenMax, redMax * blueMax * greenMax)
            l += (redMax * blueMax * greenMax)
            // console.log(l)
        }
    });
    return [p, l]
})()
