(() => {
    checkList = (r) => {
        const diffs = r.slice(1).map((x, i) => x - r[i]);
        return diffs.every((x) => Math.abs(x) <= 3) && (diffs.every((x) => x > 0) || diffs.every((x) => x < 0));
    }
    s1 = 0, s2 = 0;
    document.querySelector('pre').innerHTML.trim().split('\n').forEach((line) => {
        const r = line.split(' ');
        if (r.length > 1) {
            if (checkList(r)) {
                s1++; s2++;
            } else {
                s2 += r.some((_, i) => checkList(r.filter((_, j) => i !== j))) ? 1 : 0;
            }
        }
    });
    return {s1, s2}
})();
