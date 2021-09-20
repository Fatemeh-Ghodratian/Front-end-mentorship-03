document.getElementById("searchBtn").onclick = function() {searchFunction()};

function searchFunction() {
    const region=document.getElementById("regionSelect").value ;
    const checkIn=document.getElementById("checkIn").value ;
    const checkOut=document.getElementById("checkOut").value ;
    var checkInDate = new Date(checkIn);
    var checkOutDate = new Date(checkOut);
    var currentDate = new Date();
        if(region == "Select a region" && checkIn==0 && checkOut==0)
    {
        alert("please Select a 'region' and choose 'check in' and 'check out' date");
    }
    else if (region != "Select a region" && checkIn!=0 &&  checkOut==0){
        alert("please choose 'check out' date");
    }
    else if (region != "Select a region" && checkIn==0 &&  checkOut!=0){
        alert("please choose 'check in' date");
    }
    else if (region == "Select a region" && checkIn!=0 &&  checkOut!=0){
        alert("please Select a 'region'");
    }
    else if ( region == "Select a region" && checkIn==0){
        alert("please Select a 'region' and choose 'check in' date");
    }
    else if ( region == "Select a region" && checkOut==0){
        alert("please Select a 'region' and choose 'check out' date");
    }
    else if (region != "Select a region" && checkIn==0 && checkOut==0){
        alert("please choose 'check in' and 'check out' date");
    }
    else if (currentDate.setHours(0, 0, 0, 0)== checkInDate.setHours(0, 0, 0, 0) || currentDate.setHours(0, 0, 0, 0)== checkOutDate.setHours(0, 0, 0, 0)){
        alert("you can't choose 'Today' for 'check in' or 'check out'");
    }
    else if (checkInDate.setHours(0, 0, 0, 0)== checkOutDate.setHours(0, 0, 0, 0)){
        alert("you can't choose same day for 'check in' or 'check out'");
    }
    else if (checkInDate.setHours(0, 0, 0, 0)<currentDate.setHours(0, 0, 0, 0) || checkOutDate.setHours(0, 0, 0, 0)<currentDate.setHours(0, 0, 0, 0)){
        alert("you can't choose a day in the past for 'check in' or 'check out'");
    }
    else if (checkOutDate.setHours(0, 0, 0, 0) < checkInDate.setHours(0, 0, 0, 0) ){
        alert("you can't 'check out' earlier than 'check in'!");
    }
    else if(region != "Select a region" && checkIn!=0 && checkOut!=0) {
        alert("OK, lets Travel With Us");
    }
}