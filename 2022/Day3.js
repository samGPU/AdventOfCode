(() => {
    let t = 0, t2 = 0;
    x = $("pre").innerText.split("\n"); x.pop();
    y = Array(Math.floor(x.length / 3)).fill("");
    x.forEach((v,i) => {
        y[Math.floor(i / 3)] += i % 3 == 2 ? v : (v + ":");
        f = v.slice(0, Math.ceil(v.length / 2)).split("");
        s = v.slice(Math.ceil(v.length / 2));
        let o = "";
        f.forEach((v) => { if(s.includes(v)) o+=v });
        o.charCodeAt(0) > 96 ? t+= (o.charCodeAt(0) - 96) : t+= (o.charCodeAt(0) - 38);
    });
    y.forEach((v) => {
        v = v.split(":");
        let o = "";
        v[0].split("").forEach((r) => { if(v[1].includes(r) && v[2].includes(r)) o+=r });
        o.charCodeAt(0) > 96 ? t2+= (o.charCodeAt(0) - 96) : t2+= (o.charCodeAt(0) - 38);
    });
    return [t, t2]
})();
