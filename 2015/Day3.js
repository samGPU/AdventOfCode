(() => {
    let r = []
    for(let q = 1; q < 3; q++) {
        let h = 0, x = [0, 0], y = [0, 0], visited = [];
        $("pre").innerText.split("").forEach((v, i) => { 
            if(!visited.includes(x[i % q] + "," + y[i % q])) h++
            visited.push(x[i % q] + "," + y[i % q])
            switch(v) {
                case ">": x[i % q]++; break;
                case "<": x[i % q]--; break;
                case "^": y[i % q]++; break;
                case "v": y[i % q]--; break;
            }
        });
        r.push(h)
    }
    return r
})()
