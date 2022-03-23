function myFunction()
{
    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;
    var output=bmiCalculator(weight,height);
    document.getElementById("output").innerHTML=output;    
}

function bmiCalculator (weight, height) {
    
    var bmi = weight / (Math.pow(height, 2));
    
    var interpretation;
    
    if (bmi < 20) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi < 25) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    
    
    return interpretation;
}
