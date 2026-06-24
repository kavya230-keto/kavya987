function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);

    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    let grade = "";
    let division = "";

    if (percentage >= 90) {
        grade = "A+";
        division = "Distinction";
    }
    else if (percentage >= 75) {
        grade = "A";
        division = "First Division";
    }
    else if (percentage >= 60) {
        grade = "B";
        division = "First Division";
    }
    else if (percentage >= 45) {
        grade = "C";
        division = "Second Division";
    }
    else if (percentage >= 33) {
        grade = "D";
        division = "Third Division";
    }
    else {
        grade = "F";
        division = "Fail";
    }

    document.getElementById("result").innerHTML =
        `<p>Total Marks: ${total} / 400</p>
         <p>Percentage: ${percentage.toFixed(2)}%</p>
         <p>Grade: ${grade}</p>
         <p>Division: ${division}</p>`;
}