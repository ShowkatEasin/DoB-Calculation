var date = new Date;

var toYear = date.getFullYear();
document.getElementById("toYear").value=toYear;

var toMonth = date.getMonth()+1;
document.getElementById("toMonth").value=toMonth;

var toDate = date.getDate();
document.getElementById("toDate").value=toDate;

function cal(){
    var bYear = parseInt(document.getElementById("bYear").value);
    var bMonth = parseInt(document.getElementById("bMonth").value);
    var bDate = parseInt(document.getElementById("bDate").value);

   if(toDate<bDate){
    toDate = toDate +30;
    toDate = (toDate-bDate);
    toMonth = (toMonth -1);
    if(toMonth<bMonth){
        toMonth =((toMonth +12)-bMonth);
        toYear = ((toYear -1)-bYear);
    }
    else{
        toMonth =(toMonth -bMonth);
        toYear = (toYear -bYear);
    }
} 
    else if(toMonth<bMonth){

        toDate = (toDate-bDate);
        toMonth =((toMonth +12)-bMonth);
        toYear = ((toYear -1)-bYear);
   }
   else{
        toDate = (toDate-bDate);
        toMonth =(toMonth -bMonth);
        toYear = (toYear -bYear);
   }
   document.getElementById("rDate").value=toDate;
   document.getElementById("rMonth").value=toMonth;
   document.getElementById("rYear").value=toYear;
 
}