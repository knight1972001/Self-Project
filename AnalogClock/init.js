firstStart();

setInterval(()=>{
    var d = new Date();
    var h = covertNumberToString(d.getHours());
    var m = covertNumberToString(d.getMinutes());;
    changeNumber(h,m);
},7000)

