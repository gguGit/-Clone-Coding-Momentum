const calenderTitle=document.querySelector(".js-calender");
const clockTitle = document.querySelector(".js-clock");

function calender(){
    const currdate=new Date();
    const year=currdate.getFullYear();
    const month=String(currdate.getMonth()).padStart(2,"0");
    const day=String(currdate.getDay()).padStart(2,"0");

    calenderTitle.innerHTML=`${year} 년 ${month} 월 ${day} 일`;
}

function clock(){
    const currdate = new Date();
    const hour = String(currdate.getHours()).padStart(2, "0");
    const minute = String(currdate.getMinutes()).padStart(2, "0");
    const second = ("00" + currdate.getSeconds().toString()).slice(-2);

    clockTitle.innerHTML = `${hour} 시 ${minute} 분 ${second} 초`;
}

calender();
clock();
setInterval(calender,1000);
setInterval(clock,1000);