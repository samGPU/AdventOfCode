(() => {
    const d1 = ['+', '*'], d2 = ['+', '*', '||'];
    const i = document.querySelector('pre').innerHTML.split("\n"); i.pop();
    let s1 = 0, s2 = 0;
    i.forEach((x) => {
        r = x.split(": "); e = r[1].split(" ");
        const gp = (arr, length) => 
            length === 1 ? arr.map(d => [d]) : arr.flatMap(d => gp(arr, length - 1).map(p => [d, ...p]));
        p = gp(d1, e.length - 1);
        s = false;
        for (let j = 0; j < p.length; j++) {
            let y = p[j];
            b = parseInt(e[0]);
            for(k = 1; k < y.length + 1; k++) {
                b = eval(b + y[k-1] + e[k]);
            }
            if(b == parseInt(r[0])) {s1+=b; s = true; break;}
        };
        if(!s) {
            p = gp(d2, e.length - 1);
            for (let j = 0; j < p.length; j++) {
                let y = p[j];
                b = parseInt(e[0]);
                for(k = 1; k < y.length + 1; k++) {
                    if(b > parseInt(r[0])) { break;}
                    if(y[k-1] === '||') { b = parseInt(b.toString() + e[k].toString()); } 
                    else if (y[k-1] === '+') { b += parseInt(e[k]); }
                    else if (y[k-1] === '*') { b *= parseInt(e[k]); }
                }
                if(b == parseInt(r[0])) {s2+=b; break;}
            }
        }
    });
    s2 += s1;
    return { s1, s2 };
})();
