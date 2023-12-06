(() => {
    r = [0, 0]
    
    x = $("pre").innerText.split("\n\n")
    seeds = x.shift().split(': ')[1].split(' ').map((x) => { return parseInt(x, 10); });
    x = x.reverse()
    seedRound = false
    seedsTwo = seeds
    
    g = Math.min(...seeds)
    console.log(g)

    g = 23000000
    
    while(r[0] === 0 || r[1] === 0) {
        if(g % 1000000 === 0) console.log(g)
        s = g
        x.forEach((q) => {
            q = q.split('\n').reverse()
            q.pop()
            q.forEach((w) => {
                w = w.split(' ').map((x) => { return x === '' ? 0 : parseInt(x, 10); });
                if(!seedRound) {
                    if(s >= w[0] && s < w[0] + w[2]) {
                        if(w[1] > w[0]) {
                            s = s + (w[1] - w[0])
                        } else {
                            s = Math.abs(w[0] - s) + w[1]
                        }
                        seedRound = true
                    }
                }
            })
            seedRound = false
        });
        for(f = 0; f < seeds.length; f+=2) {
            if(s > seeds[f] && s < (seeds[f] + seeds[f+1]) && r[1] === 0) {
                r[1] = g
                console.log('RESULT FOUND P2', r[1])
            }
        }
        if(seeds.includes(s) && r[0] === 0) { console.log('RESULT FOUND P1', g); r[0] = g }
        g++
    }
    return r
})()