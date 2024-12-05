(() => {
    let s1 = 0, s2 = 0, z = {}, x = document.querySelector('pre').innerHTML.trim().split("\n\n").map(y => y.split("\n"));
    x[0].forEach(y => {
        let [a, b] = y.split("|");
        (z[a] ||= new Set()).add(b);
    });
    x[1].forEach((y, i) => {
        t = true; y = y.split(',');
        for (let j = 0; j < y.length - 1; j++) {
            if(z[y[j]] && !z[y[j]].has(y[j+1])) t = false;
        }
        if(z[y[y.length-1]]?.has(y[y.length-2])) t = false;
        if(t) s1 += parseInt(y[Math.floor(y.length / 2)]);
        else {
            y.sort((a, b) => (z[a] && z[a].has(b)) ? -1 : 1);
            s2 += parseInt(y[Math.floor(y.length / 2)]);
        }
    });
    return {s1, s2}
})();
