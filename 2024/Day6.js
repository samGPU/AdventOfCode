(() => {
    dir = ['^', '>', 'v', '<'];
    const i = document.querySelector('pre').innerHTML.split('\n').map(line => line.split('')); i.pop();
    checkMap = (m) => {
        const g = m.map(line => line.map(x => false));
        let y = m.findIndex(line => line.includes('^')), x = m[y].indexOf('^');
        t = true, c = 0;
        while(t) {
            let d = m[y][x];
            g[y][x] = true;
            if(d === '^') {
                if(y-1 < 0) { t = false; break; }
                if(m[y-1][x] === '#') {d = dir[(dir.indexOf(d) + 1) % 4]; }
                else { m[y][x] = '.'; y--;}
            } else if(d === '>') {
                if(x+1 >= m[y].length) { t = false; break; }
                if(m[y][x+1] === '#') {d = dir[(dir.indexOf(d) + 1) % 4]; }
                else { m[y][x] = '.'; x++;}
            } else if(d === 'v') {
                if(y+1 >= m.length) { t = false; break; }
                if(m[y+1][x] === '#') {d = dir[(dir.indexOf(d) + 1) % 4]; }
                else { m[y][x] = '.'; y++;}
            } else if(d === '<'){
                if(x-1 < 0) { t = false; break; }
                if(m[y][x-1] === '#') { d = dir[(dir.indexOf(d) + 1) % 4]; }
                else { m[y][x] = '.'; x--;}
            }
            if(y < 0 || y >= m.length || x < 0 || x >= m[y].length) { t = false; break; }
            m[y][x] = d;
            c++; if(c > 20000) { return Infinity; }
        }
        return g.flat().filter(Boolean).length;
    }
    s1 = checkMap(i.map(line => line.slice())); s2 = 0;
    for(y = 0; y < i.length; y++) {
        for(x = 0; x < i[y].length; x++) {
            if(i[y][x] === '.') {
                m = i.map(line => line.slice()); m[y][x] = '#';
                if(checkMap(m) === Infinity) s2++;
            }
        }
    }
    return { s1, s2 };
})()
