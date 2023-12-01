(() => {
    const z = []
    for(let k = 1; k < 3; k++) {
        const r = []
        $("pre").innerText.split("\n").forEach((v, i) => {
            if(k % 2 == 0) {
                console.log('test')
                v = v.replaceAll('nine', 'n9e')
                v = v.replaceAll('eight', 'e8t')
                v = v.replaceAll('seven', 's7n')
                v = v.replaceAll('six', 's6x')
                v = v.replaceAll('five', 'f5e')
                v = v.replaceAll('four', 'f4r')
                v = v.replaceAll('three', 't3e')
                v = v.replaceAll('two', 't2o')
                v = v.replaceAll('one', 'o1e')
            }
            const e = []
            v.split("").forEach((n) => {
                if(n >= 0 && n <= 9) {
                    e.push(n)
                }
            });
            if(e.length > 1) {
                r.push(parseInt(e.shift() + e.pop()))
                
            } else if(e.length > 0) {
                const q = e.pop()
                r.push(parseInt(q + q))
            }
        });
        z.push(r.reduce((partialSum, a) => partialSum + a, 0))
        
    }
    return z
})()