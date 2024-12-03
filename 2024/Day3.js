(() => {
    let x = document.querySelector('pre').innerHTML, t1 = 0, t2 = 0, d = true;
    x.split(/(do\(\)|don't\(\))/).forEach(e => {
        if (e === "do()") d = true;
        else if (e === "don't()") d = false;
        else e.match(/mul\((\d{1,3}),(\d{1,3})\)/g)?.forEach(q => {
            let [_, a, b] = q.match(/mul\((\d{1,3}),(\d{1,3})\)/);
            t1 += a * b;
            if (d) t2 += a * b;
        });
    });
    return { t1, t2 };
})();
