(() => {
    let l1 = [], l2 = [], d1 = 0, d2 = 0;
    document.querySelector('pre').innerHTML.split("\n").forEach(x => {
        [a, b] = x.split('   ');
        if (b) l1.push(+a), l2.push(+b);
    });
    l1.sort((a, b) => a - b);
    l2.sort((a, b) => a - b);
    l1.forEach((x, i) => {
        d1 += Math.abs(x - l2[i]);
        d2 += l2.filter(y => y == x).length * x;
    });
    return { d1, d2 };
})();
