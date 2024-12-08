(() => {
    const i = document.querySelector('pre').innerHTML.split("\n"); i.pop();
    i.forEach((x,j) => {i[j] = x.split('')})
    const r1 = i.map(x => x.map(y => '.'));
    const r2 = i.map(x => x.map(y => '.'));
    const p = {};
    for(let j = 0; j < i.length; j++) {
        for(let k = 0; k < i[j].length; k++) {
            if(i[j][k] !== '.') {
                if(!p[i[j][k]]) { p[i[j][k]] = [] }
                p[i[j][k]].push([j,k]);
            }
        }
    }
    for (const key in p) {
        p[key].forEach((x) => {
            p[key].forEach((y) => {
                if(x !== y) {
                    let dx = x[0] - y[0], dy = x[1] - y[1], i = 1;
                    if (x[0] + dx >= 0 && x[0] + dx < r1.length && x[1] + dy >= 0 && x[1] + dy < r1[0].length) {
                        r1[x[0] + dx][x[1] + dy] = '#';
                    }
                    if (y[0] - dx >= 0 && y[0] - dx < r1.length && y[1] - dy >= 0 && y[1] - dy < r1[0].length) {
                        r1[y[0] - dx][y[1] - dy] = '#';
                    }
                    while(x[0] + dx*i >= 0 && x[0] + dx*i < r2.length && x[1] + dy*i >= 0 && x[1] + dy*i < r2[0].length) {
                        r2[x[0] + dx*i][x[1] + dy*i] = '#';
                        i++;
                    }
                    i = 1;
                    while(y[0] - dx*i >= 0 && y[0] - dx*i < r2.length && y[1] - dy*i >= 0 && y[1] - dy*i < r2[0].length) {
                        r2[y[0] - dx*i][y[1] - dy*i] = '#';
                        i++;
                    }
                    r2[x[0]][x[1]] = '#';
                }
            });
        });
    }
    s1 = r1.flat().filter(y => y === '#').length;
    s2 = r2.flat().filter(y => y === '#').length;
    return { s1, s2 };
})();
