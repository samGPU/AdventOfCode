(() => {
    let a = [], a2 = [], x = $("pre").innerText.split("")
    for(i = 0; i < x.length; i++) {
        if(new Set(x.slice(i, i+4)).size == 4) a.push(i+4)
        if(new Set(x.slice(i, i+14)).size == 14) a2.push(i+14) 
    }
    return [a.shift(), a2.shift()]
})();
