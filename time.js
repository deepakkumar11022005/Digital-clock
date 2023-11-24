setInterval(displaytime,500)
function displaytime()
{
    let dateTime=new Date();
    let hours=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let ampm='AM'
    if(hours>12)
    {
        hours-=12;
        ampm='PM'
    }
 
    if(sec<10)
    {
        sec='0'+sec;
    }
    if(min<10)
    {
        min='0'+min;
    }
    if(hours==0)
    {
        hours+=12;
    }
    if(hours<10)
    {
        hours='0'+hours;
    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    document.getElementById('ampm').innerHTML=ampm;
}
setInterval(displaydate,1000)
function displaydate()
{
    let dateday=new Date()
    // let day=dateday.getDate();
    // let  month=dateday.getMonth();
    // let year=dateday.getFullYear();
    let datestring=dateday.toDateString()
    document.getElementById('day').innerHTML=datestring;


}