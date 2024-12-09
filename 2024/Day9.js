(() => {
    const i = document.querySelector('pre').innerHTML.split("");
    let r1 = [], r2, c, f, r3 = [], r4 = [], e = [], h = null;
    for (let j = 0; j < i.length; j += 2) {
        r1.push(...Array(parseInt(i[j])).fill((j / 2).toString()));
        const numDots = parseInt(i[j + 1]);
        if (!isNaN(numDots)) r1.push(...Array(numDots).fill('.'));
    }
    r2 = r1.slice();
    c = r1.filter(x => x === '.').length;
    f = r1.filter(x => x !== '.').reverse();
    for (let j = 0; j < c; j++) {
        let z = r1.indexOf('.');
        let d = f.shift();
        r1[z] = d;
        r1[r1.lastIndexOf(d)] = '.';
    }
    r2.forEach(x => {
        if (x !== '.') {
            if (r3.length === 0 || r3[0] === x) r3.push(x);
            else { r4.push([r3.length, r3]); r3 = [x]; }
        } else if (r3.length > 0) { r4.push([r3.length, r3]); r3 = []; }
    });
    r4.push([r3.length, r3]);
    r4.reverse();
    r2.forEach((x, j) => {
        if (x === '.') {
            if (h) h[0]++;
            else { h = [1, j]; e.push(h); }
        } else h = null;
    });
    r4.forEach(x => {
        let z = e.find(y => y[0] >= x[0]);
        if (z && z[1] <= r2.indexOf(x[1][0])) {
            r2.splice(r2.indexOf(x[1][0]), x[0], ...Array(x[0]).fill('.'));
            r2.splice(z[1], x[0], ...x[1]);
            if (z[0] > x[0]) {
                e.push([z[0] - x[0], z[1] + x[0]]);
                e.sort((a, b) => a[1] - b[1]);
            }
            e = e.filter(y => y[1] !== z[1]);
        }
    });
    const s1 = r1.reduce((acc, x, j) => x !== '.' ? acc + parseInt(x) * j : acc, 0);
    const s2 = r2.reduce((acc, x, j) => x !== '.' ? acc + parseInt(x) * j : acc, 0);
    return { s1, s2 };
})();
