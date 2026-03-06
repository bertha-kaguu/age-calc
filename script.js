function calculateAge(){

    const birthdate = document.getElementById("birthdate").value;
    
    if(!birthdate){
    alert("Please select your birth date");
    return;
    }
    
    const birth = new Date(birthdate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if(days < 0){
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
    }
    
    if(months < 0){
    years--;
    months += 12;
    }
    
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    
    }