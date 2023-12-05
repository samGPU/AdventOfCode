(() => {
    r = [0, 0]
    x = $("pre").innerText.split("\n").filter(x => x.length > 0)
    y = []
    x.forEach(x => {
        y.push(1)
    })
    console.log(y)
    x.forEach((v, i) => {
        b = v.split(':')[1].split('|')
        b[0] = b[0].split(' ').filter(x => x !== '')
        b[1] = b[1].split(' ').filter(x => x !== '')
        t = 0
        t2 = 0
        b[1].forEach((n) => {
            if(b[0].includes(n)) {
                console.log(`${n} is in ${b[0]}`)
                t2++
                if(t === 0) {
                    t += 1
                } else {
                    t *= 2
                }
            }
        })
        console.log(t)

        // Add additonal cards to y
        for(let j = 1; j <= t2; j++) {
            if(i + j < x.length) y[i + j] += 1 * y[i]
        }
        
        r[0] += t
        console.log(y)
    })
    r[1] = y.reduce((partialSum, a) => partialSum + a, 0);
    return r
})()
