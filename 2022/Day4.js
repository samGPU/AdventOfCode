function isSuperset(set, subset) {
  for (elem of subset) if (!set.has(elem)) return false;
  return true;
}
function intersection(setA, setB) {
  _intersection = new Set();
  for (elem of setB) if (setA.has(elem)) _intersection.add(elem);
  return _intersection.size != 0 ? true : false;
}
(() => {
    let x = [], d = [], t = 0, t2 = 0
    $("pre").innerText.split("\n").forEach((v) => { x.push(v.split(",")) })
    for(i = 0; i < x.length - 1; i++) {
        s1 = new Set(), s2 = new Set()
        y = x[i][0].split("-")
        for(j = parseInt(y[0]); j <= parseInt(y[1]); j++) s1.add(j)
        y = x[i][1].split("-")
        for(j = parseInt(y[0]); j <= parseInt(y[1]); j++) s2.add(j)
        p = isSuperset(s1, s2)
        if(!p) p = isSuperset(s2, s1)
        x[i] = p
        d.push(intersection(s1, s2))
    }
    x.forEach((v) => { v == true ? t++ : t+=0 })
    d.forEach((v) => { v == true ? t2++ : t2+=0 })
    return [t, t2]
})();
