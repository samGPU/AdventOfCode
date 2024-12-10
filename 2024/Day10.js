(() => {
    x = document.querySelector('#pre').innerHTML.split('\n').map(e => e.split(''));
    let h = []; x.forEach((row, i) => row.forEach((e, j) => e == '0' ? h.push([i, j]) : 0));
    x = x.map(row => row.map(e => parseInt(e)));
    findPaths = (grid, s) => {
        let paths = [];
        isValidMove = (x, y, prevValue) => {
            return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == prevValue + 1;
        }
        search = (x, y, path) => {
            const currentValue = grid[x][y];
            path.push({ coords: [x, y], value: currentValue });
            const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]];
            for (const [dx, dy] of directions) {
                const newX = x + dx; const newY = y + dy;
                if (isValidMove(newX, newY, currentValue) && !path.some(p => p.coords[0] === newX && p.coords[1] === newY)) {
                    search(newX, newY, [...path]);
                }
            }
            paths.push(path);
        }
        search(s[0], s[1], []);
        return paths;
    }
    s1 = 0, s2 = 0;
    h.forEach((s, i) => {
        let paths = findPaths(x, s);
        paths = paths.filter(p => p[p.length - 1].value === 9);
        s2 += paths.length;
        endings = []
        paths.forEach((x) => {
            if (endings.some(e => e[0] == x[x.length - 1].coords[0] && e[1] == x[x.length - 1].coords[1])) {
                return;
            } else {
                endings.push(x[x.length - 1].coords)
            }
        });
        s1 += endings.length
    });
    return { s1, s2 };
})();
