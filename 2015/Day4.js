//RUN THIS FIRST TO INSTALL BLUEIMP
var md5 = document.createElement('script');
md5.src = " https://unpkg.com/blueimp-md5@2.19.0/js/md5.js";
document.getElementsByTagName('head')[0].appendChild(md5);

//RUN THIS SECOND
(() => {
    let r = []
    let x = 0
    while(r.length != 2) {
        if(r.length < 1 && md5("__SECRET KEY__" + x).substring(0,5) == "00000") r.push(x);
        if(md5("__SECRET KEY__" + x).substring(0,6) == "000000") r.push(x);
        x++;
    }
    return r
})()
