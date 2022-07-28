const changeTimeAnimation = 50;

function firstStart(){
    var d = new Date();
    var h = covertNumberToString(d.getHours());
    var m = covertNumberToString(d.getMinutes());
    var hourArray = h.split("");
    for(var i = 0; i < hourArray.length; i++){
        initNumberByClockGroup(parseInt(hourArray[i]), i);
    }
    var minArray = m.split("");
    for(var i = 2; i < 4; i++){
        initNumberByClockGroup(parseInt(minArray[i-2]), i);
    }
        // initNumberByClockGroup(0,0);
        // initNumberByClockGroup(4,1);
}

function changeNumber(time,time2){
    var hourArray = time.split("");
    for(var i = 0; i < hourArray.length; i++){
        changeNumberByClockGroup(parseInt(hourArray[i]), i);
    }
    var minArray = time2.split("");
    for(var i = 2; i < 4; i++){
        changeNumberByClockGroup(parseInt(minArray[i-2]), i);
    }
        // initNumberByClockGroup(0,0);
        // initNumberByClockGroup(4,1);

}

function covertNumberToString(number){
    var formattedNumber = ("0" + number).slice(-2);
    return formattedNumber;
}

// function test(){
//     var time="03:45"
//     clock1 = new Clock(time);
//     testSingeClock(clock1, clock2, 0);
//     // createNumberByClockGroup(0);
// }

// function clickChangeTime(){
//     var time="06:45"
//     clock2 = new Clock(time);
//     testSingeClock(clock1, clock2, 0);
// }

// function clickChangeTime2(){
//     var time="09:30"
//     clock2 = new Clock(time);
//     testSingeClock(clock1, clock2, 0);
// }

// function clickChangeTime3(){
//     var time="07:40"
//     clock2 = new Clock(time);
//     testSingeClock(clock1, clock2, 0);
// }

function clockwiseLogic(degree1, degree2) {
    // console.log("degree2: "+degree2+" degree1: "+degree1)
    if((degree2-degree1) <= 135 && (degree2 >= degree1)){
        return ++degree1;
    }else{
        if((degree2 < degree1) && (degree2-degree1)>=-135){
            return --degree1;
        }
        if((degree2 - degree1)>180 || (degree2-degree1)>-180){
            return --degree1;
        }     
    }
    
    return ++degree1;
}

// function testSingeClock(clock1, clock2, clockPosition){
//     if(clock2==null){
//         console.log("CLOCK 2 NULL CASE")
//         console.log(clock1.hourDegree + ":" + clock1.minuteDegree);
//         var hourDegree = clock1.hourDegree;
//         var minuteDegree = clock1.minuteDegree;
//         const clockInterval = setInterval(()=>{
//             // console.log(hourDegree + ":" + minuteDegree);
//             var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
//             var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
//             hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
//             mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
//             if(hourDegree == clock1.hourDegree && minuteDegree == clock1.minuteDegree){
//                 clearInterval(clockInterval);
//             }
//         }, 50);
//     }else{
//         console.log("CLOCK 2 NOT NULL CASE")
//         if(clock1.hourDegree != clock2.hourDegree || clock1.minuteDegree != clock2.minuteDegree){
//             var hourDegree = clock1.hourDegree;
//             var minuteDegree = clock1.minuteDegree;
//             console.log("CLock 1:"+ clock1.hourDegree + ":" + clock1.minuteDegree);
//             console.log("CLock 2:"+ clock2.hourDegree + ":" + clock2.minuteDegree);
            
//             //Check Logic
//             if(hourDegree == clock2.minuteDegree || minuteDegree == clock2.hourDegree){
//                 if(hourDegree == clock2.minuteDegree && minuteDegree != clock2.hourDegree){
//                     console.log("Hour Clock1 is same minute clock2");
//                     var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
//                     const clockInterval = setInterval(()=>{
//                         // console.log(hourDegree + ":" + minuteDegree);
//                         mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
                        
//                         if(hourDegree == clock2.minuteDegree && minuteDegree == clock2.hourDegree){
//                             clock1.minuteDegree = clock2.hourDegree;
//                             clock1.hourDegree=clock2.minuteDegree;
//                             console.log("Clock 2 set to Clock 1: H: "+clock1.hourDegree + " M: "+clock1.minuteDegree);
//                             clearInterval(clockInterval);
//                         }
        
//                         if(minuteDegree != clock2.hourDegree){
//                             // console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
//                             minuteDegree=clockwiseLogic(minuteDegree,clock2.hourDegree)
//                             if(minuteDegree >= 360){
//                                 minuteDegree=0;
//                             }
//                             if(minuteDegree < 0){
//                                 minuteDegree=360;
//                             }
//                         }
//                     }, 20);
//                 } 
//                 if(hourDegree != clock2.minuteDegree && minuteDegree == clock2.hourDegree){
//                     console.log("minute Clock1 is same hour clock2");
//                     var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
//                     const clockInterval = setInterval(()=>{
//                         // console.log(hourDegree + ":" + minuteDegree);
//                         hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
                        
//                         if(hourDegree == clock2.minuteDegree && minuteDegree == clock2.hourDegree){
//                             clock1.minuteDegree = clock2.hourDegree;
//                             clock1.hourDegree=clock2.minuteDegree;
//                             console.log("Clock 2 set to Clock 1: H: "+clock1.hourDegree + " M: "+clock1.minuteDegree);
//                             clearInterval(clockInterval);
//                         }
        
//                         if(hourDegree != clock2.minuteDegree){
//                             // console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
//                             hourDegree=clockwiseLogic(hourDegree, clock2.minuteDegree);
//                             if(hourDegree >= 360){
//                                 hourDegree=0;
//                             }
//                             if(hourDegree < 0){
//                                 hourDegree=360;
//                             }
//                         }
//                     }, 20);
//                 }              
//             }else{
//                 console.log("Hour,Min Clock1,2 is not same");
//                 const clockInterval = setInterval(()=>{
//                     var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
//                     var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
//                     // console.log(hourDegree + ":" + minuteDegree);
//                     hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
//                     mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
                    
//                     if(hourDegree == clock2.hourDegree && minuteDegree == clock2.minuteDegree){
//                         clock1.copyClock(clock2);
//                         console.log("Clock 2 set to Clock 1: H: "+clock1.hourDegree + " M: "+clock1.minuteDegree);
//                         clearInterval(clockInterval);
//                     }
    
//                     if(hourDegree != clock2.hourDegree){
//                         console.log("Different Hour degree: "+hourDegree+":"+clock2.hourDegree)
//                         hourDegree=clockwiseLogic(hourDegree,clock2.hourDegree);
//                         if(hourDegree >= 360){
//                             hourDegree=0;
//                         }
//                         if(hourDegree<0){
//                             hourDegree=360;
//                         }
//                     }
    
//                     if(minuteDegree != clock2.minuteDegree){
//                         console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
//                         minuteDegree=clockwiseLogic(minuteDegree,clock2.minuteDegree);
//                         if(minuteDegree >= 360){
//                             minuteDegree=0;
//                         }
//                         if(minuteDegree < 0){
//                             minuteDegree=360;
//                         }
//                     }
//                 }, 20);
//             }
//         }
//     }
// }

function changeSingeClock(clock1, clock2, clockPosition){
    if(clock1==null){
        console.log("VAI LZ CLoCK1 NULL, position: "+clockPosition)
    }

    if(clock2==null){
        var hourDegree = clock1.hourDegree;
        var minuteDegree = clock1.minuteDegree;
        const clockInterval = setInterval(()=>{
            // console.log(hourDegree + ":" + minuteDegree);
            var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
            var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
            hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
            mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
            if(hourDegree == clock1.hourDegree && minuteDegree == clock1.minuteDegree){
                clearInterval(clockInterval);
            }
        }, changeTimeAnimation);
    }else{
        if(clock1.hourDegree != clock2.hourDegree || clock1.minuteDegree != clock2.minuteDegree){
            var hourDegree = clock1.hourDegree;
            var minuteDegree = clock1.minuteDegree;
            //Check Logic
            if(hourDegree == clock2.minuteDegree || minuteDegree == clock2.hourDegree){
                if(hourDegree == clock2.minuteDegree && minuteDegree != clock2.hourDegree){
                    var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
                    const clockInterval = setInterval(()=>{
                        // console.log(hourDegree + ":" + minuteDegree);
                        mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
                        
                        if(hourDegree == clock2.minuteDegree && minuteDegree == clock2.hourDegree){
                            clock1.minuteDegree = clock2.hourDegree;
                            clock1.hourDegree=clock2.minuteDegree;
                            clearInterval(clockInterval);
                        }
        
                        if(minuteDegree != clock2.hourDegree){
                            // console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
                            minuteDegree=clockwiseLogic(minuteDegree,clock2.hourDegree)
                            if(minuteDegree >= 360){
                                minuteDegree=0;
                            }
                            if(minuteDegree < 0){
                                minuteDegree=360;
                            }
                        }
                    }, changeTimeAnimation);
                } 
                if(hourDegree != clock2.minuteDegree && minuteDegree == clock2.hourDegree){
                    var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
                    const clockInterval = setInterval(()=>{
                        // console.log(hourDegree + ":" + minuteDegree);
                        hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
                        
                        if(hourDegree == clock2.minuteDegree && minuteDegree == clock2.hourDegree){
                            clock1.minuteDegree = clock2.hourDegree;
                            clock1.hourDegree=clock2.minuteDegree;
                            clearInterval(clockInterval);
                        }
        
                        if(hourDegree != clock2.minuteDegree){
                            // console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
                            hourDegree=clockwiseLogic(hourDegree, clock2.minuteDegree);
                            if(hourDegree >= 360){
                                hourDegree=0;
                            }
                            if(hourDegree < 0){
                                hourDegree=360;
                            }
                        }
                    }, changeTimeAnimation);
                }              
            }else{
                const clockInterval = setInterval(()=>{
                    var hEl = document.getElementsByClassName('hour-hand')[clockPosition];
                    var mEl = document.getElementsByClassName('minute-hand')[clockPosition];
                    // console.log(hourDegree + ":" + minuteDegree);
                    hEl.style.transform = "rotate("+(180+hourDegree)+"deg)";
                    mEl.style.transform = "rotate("+(180+minuteDegree)+"deg)";
                    
                    if(hourDegree == clock2.hourDegree && minuteDegree == clock2.minuteDegree){
                        clock1.copyClock(clock2);
                        clearInterval(clockInterval);
                    }
    
                    if(hourDegree != clock2.hourDegree){
                        // console.log("Different Hour degree: "+hourDegree+":"+clock2.hourDegree)
                        hourDegree=clockwiseLogic(hourDegree,clock2.hourDegree);
                        if(hourDegree >= 360){
                            hourDegree=0;
                        }
                        if(hourDegree<0){
                            hourDegree=360;
                        }
                    }
    
                    if(minuteDegree != clock2.minuteDegree){
                        // console.log("Different Minute degree: "+minuteDegree+":"+clock2.minuteDegree)
                        minuteDegree=clockwiseLogic(minuteDegree,clock2.minuteDegree);
                        if(minuteDegree >= 360){
                            minuteDegree=0;
                        }
                        if(minuteDegree < 0){
                            minuteDegree=360;
                        }
                    }
                }, changeTimeAnimation);
            }
        }
    }
}

// function getTime(){
//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
//     var date = d.getDate();
//     var month = d.getMonth() + 1;
//     var year = d.getFullYear();
//     //call 4 group number
// }

function changeNumberByClockGroup(number, group){
    //call 24 clock in 1 group.
    switch(group){
        case 0:
            var groupClock = document.getElementsByClassName('clock')
            var positionGroup = numberToGroupClock.get(number);
            group2 = new GroupClock(positionGroup);
            if(group2 !=null){
                for(var i = 0; i < 24; i++){
                    changeSingeClock(group1.clock1[i], group2.clock1[i], i);
                    group1.copyGroupClock(group2)
                }
            }else{
                for(var i = 0; i < 24; i++){
                    changeSingeClock(group2.clock1[i], null, i);
                    group1.copyGroupClock(group2)
                }
            }
            break;
        case 1:
            var groupClock = document.getElementsByClassName('clock')
            var positionGroup = numberToGroupClock.get(number);
            group4 = new GroupClock(positionGroup);
            if(group4 !=null){
                for(var i = 24; i < 48; i++){
                    changeSingeClock(group3.clock1[i-24], group4.clock1[i-24], i);
                    group3.copyGroupClock(group4)
                }
            }else{
                for(var i = 24; i < 48; i++){
                    changeSingeClock(group4.clock1[i-24], null, i);
                    group3.copyGroupClock(group4)
                }
            }
            break;
        case 2:
            var groupClock = document.getElementsByClassName('clock')
            var positionGroup = numberToGroupClock.get(number);
            group6 = new GroupClock(positionGroup);
            if(group6 !=null){
                for(var i = 48; i < 72; i++){
                    changeSingeClock(group5.clock1[i-48], group6.clock1[i-48], i);
                    group5.copyGroupClock(group6)
                }
            }else{
                for(var i = 48; i < 72; i++){
                    changeSingeClock(group6.clock1[i-48], null, i);
                    group5.copyGroupClock(group6)
                }
            }
            break;
        case 3:
            var groupClock = document.getElementsByClassName('clock')
            var positionGroup = numberToGroupClock.get(number);
            group8 = new GroupClock(positionGroup);
            if(group8 !=null){
                for(var i = 72; i < 96; i++){
                    changeSingeClock(group7.clock1[i-72], group8.clock1[i-72], i);
                    group7.copyGroupClock(group8)
                }
            }else{
                for(var i = 72; i < 96; i++){
                    changeSingeClock(group8.clock1[i-72], null, i);
                    group7.copyGroupClock(group8)
                }
            }
            break;
    }
}

function initNumberByClockGroup(number, group){
    //call 24 clock in 1 group.
    switch(group){
        case 0: 
            var groupClock = document.getElementsByClassName('clock')
            if(groupClock.length >= 24){
                var positionGroup = numberToGroupClock.get(number);
                group1 = new GroupClock(positionGroup);
                if(group1.clock2 !=null){
                    for(var i = 0; i < 24; i++){
                        changeSingeClock(group1.clock1[i], group1.clock2[i], i);
                    }
                }else{
                    for(var i = 0; i < 24; i++){
                        changeSingeClock(group1.clock1[i], null, i);
                        group1.copyGroupClock(group1);
                    }
                }
            }else{
                console.log("Sufficiency group number! Current: "+groupClock.length+" Require: 24")
            }
            break;
        case 1: 
            var groupClock = document.getElementsByClassName('clock')
            if(groupClock.length>=48){
                var positionGroup = numberToGroupClock.get(number);
                
                group3 = new GroupClock(positionGroup);
                if(group3.clock2 !=null){
                    
                    for(var i = 24; i < 48; i++){
                        changeSingeClock(group3.clock1[i-24], group3.clock2[i-24], i);
                    }
                }else{
                    for(var i = 24; i < 48; i++){
                        changeSingeClock(group3.clock1[i-24], null, i);
                        group3.copyGroupClock(group3);
                    }
                }
            }else{
                console.log("Sufficiency group number! Current: "+groupClock.length+" Require: 48")
            }
            break;
        case 2:
            var groupClock = document.getElementsByClassName('clock')
            if(groupClock.length>=72){
                var positionGroup = numberToGroupClock.get(number);
                group5 = new GroupClock(positionGroup);
                if(group5.clock2 !=null){
                    for(var i = 48; i < 72; i++){
                        changeSingeClock(group5.clock1[i-48], group5.clock2[i-48], i);
                    }
                }else{
                    for(var i = 48; i < 72; i++){
                        changeSingeClock(group5.clock1[i-48], null, i);
                        group5.copyGroupClock(group5);
                    }
                }
            }else{
                console.log("Sufficiency group number! Current: "+groupClock.length+" Require: 72")
            }
            break;
        case 3:
            var groupClock = document.getElementsByClassName('clock')
            if(groupClock.length>=96){
                var positionGroup = numberToGroupClock.get(number);
                group7 = new GroupClock(positionGroup);
                if(group7.clock2 !=null){
                    for(var i = 72; i < 96; i++){
                        changeSingeClock(group7.clock1[i-72], group7.clock2[i-72], i);
                    }
                }else{
                    for(var i = 72; i < 96; i++){
                        changeSingeClock(group7.clock1[i-72], null, i);
                        group7.copyGroupClock(group7);
                    }
                }
            }else{
                console.log("Sufficiency group number! Current: "+groupClock.length+" Require: 96")
            }
            break;
    }
}

// var second = 0;
// var tick=0;

// function clock(){
//     var hEl = document.querySelector('.hour-hand');
//     var mEl = document.querySelector('.minute-hand');

//     setInterval(()=>{
//         hEl.style.transform = "rotate("+(180+(tick/10)*6)+"deg)";
//         mEl.style.transform = "rotate("+(180+(tick/10)*12)+"deg)";

//     }, 100);
//     tick++;
//     console.log((tick/10))    
// }

// function clock() {
//     var weekday = [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday"
//         ];

//         var d = new Date();
//         var h = d.getHours();
//         var m = d.getMinutes();
//         var s = d.getSeconds();
//         var date = d.getDate();
//         var month = d.getMonth() + 1;
//         var year = d.getFullYear();
            
//         var hDeg = h * 30 + m * (360/720);
//         var mDeg = m * 6 + s * (360/3600);
//         var sDeg = s * 6;
        
//         var hEl = document.querySelector('.hour-hand');
//         var mEl = document.querySelector('.minute-hand');
//         var sEl = document.querySelector('.second-hand');
//         var dateEl = document.querySelector('.date');
//         var dayEl = document.querySelector('.day');
    
//         var day = weekday[d.getDay()];
    
//         if(month < 9) {
//             month = "0" + month;
//         }
        
//         hEl.style.transform = "rotate("+hDeg+"deg)";
//         mEl.style.transform = "rotate("+mDeg+"deg)";
//         sEl.style.transform = "rotate("+sDeg+"deg)";
//         dateEl.innerHTML = date+"/"+month+"/"+year;
//         dayEl.innerHTML = day;

//         tickHand(d);
// }

// setInterval("clock()", 100);

// console.log("HI")

// function tickHand(d){
//     //
//     var d = new Date();
//     var s = d.getSeconds();
//     var sDeg = s * 6;
//     //
//     var dStart = new Date(1970, 0, 1);

//     var seconds = d.getTime();

//     var secondsStart = dStart.getTime();

//     var dateDifference = seconds - secondsStart;

//     // multiply by 10000 to reconcile to c#

//     //console.log("===> " + dateDifference * 10000);

//     dateString = String(dateDifference);

//     var fulldate = document.querySelector('.fullDate');

//     var tick = (dateString.slice(10,11));

//     var tEl = document.querySelector('.tick-hand');
//     var tDeg = (s + tick/10)*6;
//     //console.log((s + tick/10));
//     tEl.style.transform = "rotate("+tDeg+"deg)";

//     fulldate.innerHTML = "NEW: " + tick

//     //Note dStart has 0 as month because JavaScript dates start at 0 and end with 11
// }
