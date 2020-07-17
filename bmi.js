function BMI() 
{
    var report = "";


    // Collect weight from html
    var weight = document.getElementById("weight").value;

    // height from html
    var height = document.getElementById("height").value;

    // To calculate the BMI, we declare a variable for BMI
    var BMI = weight * height^2;

    if (BMI >= 18.5 && BMI <= 25) {
        report = "Your Body Mass Index is: " + BMI + ", this is between 18.5 and 25, so your weight is optimal";
    }else {
      if (BMI <18.5) {
        report = "Your Body Mass Index is: " + BMI + ", this is less than 18.5, so you are underweight";
      }else{
        report = "Your Body Mass Index is: " + BMI + ", this is greater than 25, so you are overweight";
      }
    }

    // Insert the result into correct position on the HTML Page
    document.getElementById("report").innerHTML = report;
    
}

