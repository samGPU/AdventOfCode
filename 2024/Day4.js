(() => {
    let c1 = 0, c2 = 0;
    const x = document.querySelector('pre').innerHTML.split('\n').map(x => x.split('')); x.pop();
    const w = x[0].length; 
    const h = x.length;
    const directions = [
        { name: 'Left', dx: 0, dy: -1 },
        { name: 'Right', dx: 0, dy: 1 },
        { name: 'Up', dx: -1, dy: 0 },
        { name: 'Down', dx: 1, dy: 0 },
        { name: 'DiagonalTopLeft', dx: -1, dy: -1 },
        { name: 'DiagonalTopRight', dx: -1, dy: 1 },
        { name: 'DiagonalBottomLeft', dx: 1, dy: -1 },
        { name: 'DiagonalBottomRight', dx: 1, dy: 1 }
    ];
    const checkString = (x, i, j, str, dx, dy) => {
        for (let k = 0; k < str.length; k++) {
            const ni = i + k * dx;
            const nj = j + k * dy;
            if (ni < 0 || ni >= h || nj < 0 || nj >= w || x[ni][nj] !== str[k]) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            directions.forEach(({ name }) => {
                d = directions.find(x => x.name === name);
                if(checkString(x, i, j, 'XMAS', d.dx, d.dy)) c1++;
            });
        }
    }
    for (let i = 0; i < h - 2; i++) {
        for (let j = 0; j < w - 2; j++) {
            diagRight = checkString(x, i, j, 'MAS', 1, 1) || checkString(x, i, j, 'SAM', 1, 1)
            diagLeft = checkString(x, i, j + 2, 'MAS', 1, -1) || checkString(x, i, j + 2, 'SAM', 1, -1)
            if (diagRight && diagLeft) c2++;
        }
    }
    return {c1, c2};
})();
