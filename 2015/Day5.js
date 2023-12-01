(() => {
    let q = ['a','e','i','o','u']
    let n = 0
    $("pre").innerText.split("\n").forEach((v, i) => { 
        let w = v.split('')
        
        if(v.includes('ab') || v.includes('cd') || v.includes('pq') || v.includes('xy')) {
            n = n
        } else if(w.filter(x => x==='a' || x==='e' || x==='i' || x==='o' || x==='u').length > 2) {
                if(/(.)\1/.test(v)) {
                    n++;
                }
        }
            
    });
    return n
})()
// PART 1 SOLUTION ONLY