function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    console.log(years, new Date().getFullYear())
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    console.log(document.getElementById("rate"))
    document.getElementById("rate_val").innerText=rateval + '%';
}

function validatPrincipalInput() {

}
        