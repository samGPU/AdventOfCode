(() => {
    let x = ['1750884', '193', '866395', '7', '1158', '31', '35216', '0'];
    const blinks = 75;
    let c = 0;
    const memo = {};

    const score = (y, i, sum) => {
        const key = `${y}+${i}`;
        if (i >= blinks) {
            c += 1;
            return sum;
        }

        // check if we have a cached result
        if (memo[key]) {
            const [a, b, cachedSum] = memo[key];
            sum += cachedSum;
            score(a, i + 1, sum);
            if (b !== null) {
                score(b, i + 1, sum);
            }
            return sum;
        }

        if (y === '0') {
            y = '1';
            memo[key] = [y, null, 1];
            sum += 1;
        } else if (y.length % 2 === 0) {
            let a = parseInt(y.slice(0, y.length / 2)).toString();
            let b = parseInt(y.slice(y.length / 2)).toString();
            let bValue = parseInt(b);
            y = a;
            memo[key] = [a, b, bValue];
            sum += bValue;
            score(b, i + 1, sum);
        } else {
            let newY = (parseInt(y) * 2024).toString();
            let newYValue = parseInt(newY);
            y = newY;
            memo[key] = [y, null, newYValue];
            sum += newYValue;
        }

        return score(y, i + 1, sum);
    };

    x.forEach(y => {
        score(y, 0, 0);
        console.log('c is now', c);
        console.log('memo length', Object.keys(memo).length);
    });

    return c;
})();
