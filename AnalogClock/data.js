const minuteToDegree = new Map();
minuteToDegree.set(0,0);
minuteToDegree.set(15,90);
minuteToDegree.set(30,180);
minuteToDegree.set(45,270);
minuteToDegree.set(40,225);

const hourToDegree = new Map();
hourToDegree.set(0,0);
hourToDegree.set(3,90);
hourToDegree.set(6,180);
hourToDegree.set(9,270);
hourToDegree.set(7,225);

const numberToGroupClock = new Map();
numberToGroupClock.set(0, [ "03:30","03:45","03:45","06:45",
                            "00:30","03:30","06:45","00:30",
                            "00:30","00:30","00:30","00:30",
                            "00:30","00:30","00:30","00:30",
                            "00:30","03:00","09:00","00:30",
                            "03:00","03:45","03:45","09:00"]);
numberToGroupClock.set(1, [ "03:30","03:45","06:45","07:40",
                            "03:00","06:45","00:30","07:40",
                            "07:40","00:30","00:30","07:40",
                            "07:40","00:30","00:30","07:40",
                            "03:30","09:00","03:00","06:45",
                            "03:00","03:45","03:45","09:00"]);
numberToGroupClock.set(2, [ "03:30","03:45","03:45","09:30",
                            "00:15","03:45","09:30","00:30",
                            "03:30","03:45","09:00","00:30",
                            "00:30","03:30","09:15","09:00",
                            "00:30","03:00","03:45","09:30",
                            "03:00","03:45","03:45","00:45"]);       
numberToGroupClock.set(3, [ "03:30","03:45","03:45","09:30",
                            "00:15","03:45","09:30","00:30",
                            "03:30","03:45","09:00","00:30",
                            "03:00","03:45","09:30","00:30",
                            "03:30","03:45","09:00","00:30",
                            "03:00","03:45","03:45","00:45"]);  
numberToGroupClock.set(4, [ "03:30","06:45","03:30","09:30",
                            "00:30","00:30","00:30","00:30",
                            "00:30","03:00","00:45","00:30",
                            "03:00","03:45","09:30","00:30",
                            "07:40","07:40","00:30","00:30",
                            "07:40","07:40","03:00","00:45"]);
numberToGroupClock.set(5, [ "03:30","03:45","03:45","09:30",
                            "00:30","03:30","03:45","00:45",
                            "00:30","03:00","03:45","09:30",
                            "03:00","03:45","09:30","00:30",
                            "03:30","03:45","00:45","00:30",
                            "03:00","03:45","03:45","00:45"]);
numberToGroupClock.set(6, [ "03:30","03:45","03:45","09:30",
                            "00:30","03:30","03:45","00:45",
                            "00:30","03:00","03:45","09:30",
                            "00:30","03:30","09:30","00:30",
                            "00:30","03:00","00:45","00:30",
                            "03:00","03:45","03:45","00:45"]);
numberToGroupClock.set(7, [ "03:30","03:45","03:45","09:30",
                            "00:15","09:15","06:45","00:30",
                            "07:40","07:40","00:30","00:30",
                            "07:40","07:40","00:30","00:30",
                            "07:40","07:40","00:30","00:30",
                            "07:40","07:40","03:00","00:45"]);
numberToGroupClock.set(8, [ "03:30","03:45","03:45","09:30",
                            "00:30","03:30","09:30","00:30",
                            "00:30","03:00","09:00","00:30",
                            "00:30","03:30","09:30","00:30",
                            "00:30","03:00","09:00","00:30",
                            "03:00","03:45","03:45","00:45"]);
numberToGroupClock.set(9, [ "03:30","03:45","03:45","09:30",
                            "00:30","03:30","09:30","00:30",
                            "00:30","03:00","09:00","00:30",
                            "03:00","03:45","09:30","00:30",
                            "03:30","03:45","09:00","00:30",
                            "03:00","03:45","03:45","00:45"]);
class GroupClock {
    constructor(positionGroup) {
        this.positionGroup = positionGroup;
        this.clock2=null;
        this.clock1=[]
        for(var i=0; i < this.positionGroup.length; i++){
            this.clock1[i] = new Clock(this.positionGroup[i]);
        }
    }
    copyGroupClock(groupClock){
        this.positionGroup = groupClock.positionGroup;
        this.clock2=[];
        for(var i=0; i < groupClock.positionGroup.length; i++){
            this.clock2[i] = new Clock(groupClock.positionGroup[i]);
        }
    }
}

class Clock {
    constructor(time){
        const timeArray = time.split(":");
        this.hour = parseInt(timeArray[0]);
        this.minute = parseInt(timeArray[1]);
        this.hourDegree = hourToDegree.get(this.hour);
        this.minuteDegree = minuteToDegree.get(this.minute);
    }
    copyClock(clock){
        this.hour = clock.hour;
        this.minute = clock.minute;
        this.hourDegree = clock.hourDegree;
        this.minuteDegree = clock.minuteDegree;
    }
}

