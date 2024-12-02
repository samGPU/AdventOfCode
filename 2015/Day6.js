(() => {
    const grid = [];
    for(i = 0; i < 1000; i++) {
        const line = [];
        for(j = 0; j < 1000; j++) {
            line.push(false)
        }
        grid.push(line)
    }
    document.querySelector('pre').innerHTML.split('\n').forEach((x) => {
        x = x.split(' '); if(x.length > 4) x.shift();
        if(x.length > 1) {
            x[1] = x[1].split(','); x[3] = x[3].split(',')
            console.log(x);
            // 0 contains command, 1 contains start, 2 contains through, 3 contains end
            console.log(x[1][0], x[1][1], x[3][0], x[3][1], x[0])
            for(i = x[1][0]; i <= x[3][0]; i++) {
                for(j = x[1][1]; j <= x[3][1]; j++) {
                    if(x[0] === 'on') {
                        grid[i][j] = true
                    } else if(x[0] === 'off') {
                        grid[i][j] = false
                    } else {
                        grid[i][j] = !grid[i][j][0]
                    }
                }
            }
        }
    });
    let count = 0;
    grid.forEach((x) => {
        x.forEach((y) => {
            if(y) count++
        })
    });
    return { count };
})()
