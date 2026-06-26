let Credit_Score : number = 700
let Income : number = 50000
let Employee_Status : boolean = false
let DTI_RATIO : number = 35
if (Credit_Score > 750){
    console.log("your loan is approved")
}
else if (Credit_Score < 650){
    console.log("Your loan is denied due to low credit score")
}
else if (Credit_Score >= 650 && Credit_Score <= 750){
    // Checking the income 
    if (Income < 50000){
        console.log("Loan is Denied due to less income")
    }
    // checking the employee status
    else if(!Employee_Status){
        console.log("loan is denied due to unemployement")
    }
    // checking the DTI ratio
    else if(DTI_RATIO >= 40){
        console.log("Loan is Denied due to DTI ratio")
    }
    else{
        console.log("Loan is Approved")
}
}