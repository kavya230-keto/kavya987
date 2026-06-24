<!DOCTYPE html>
<html>
<head>
    <title>Simple Interest Calculator</title>
</head>
<body>

    <h2>Simple Interest Calculator</h2>

    Principal Amount:
    <input type="number" id="principal"><br><br>

    Rate of Interest (%):
    <input type="number" id="rate"><br><br>

    Time (Years):
    <input type="number" id="time"><br><br>

    <button onclick="calculateSI()">Calculate</button>

    <h3 id="result"></h3>

    <script>
        function calculateSI() {
            let p = parseFloat(document.getElementById("principal").value);
            let r = parseFloat(document.getElementById("rate").value);
            let t = parseFloat(document.getElementById("time").value);

            let si = (p * r * t) / 100;

            document.getElementById("result").innerHTML =
                "Simple Interest = " + si;
        }
    </script>

</body>
</html>