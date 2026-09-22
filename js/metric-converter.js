function metricImperialConverter(unit, number) {
    // Finds values from index.html
    let unit = document.getElementsByTagName("conversion-type")[0].value;
    let number = parseFloat(document.getElementById("numeric-value").value);

    // Performs calculations using the unit type and numbers.
    if (unit == 'inches-centimeters') {
        var result = number * 2.54;}
    else if (unit == 'feet-centimeters') {
        var result = number * 30.48;}
    else if (unit == 'yard-meters') {
        var result = number * 0.91;}
    else if (unit == 'miles-kilometers') {
        var result = number * 1.61;}
    else if (unit == 'centimeter-inch') {
        var result = number * 0.39;}
    else if (unit == 'centimeter-foot') {
        var result = number * 0.0328;}
    else if (unit == 'meter-yard') {
        var result = number * 1.09;}
    else if (unit == 'kilometer-mile') {
        var result = number * 0.62;}
}

const abc = document.getElementById("convertedValue-abc");
 abc.addEventListener("click", function() {
    event.preventDefault(); // Prevent form submission
    let unit = document.getElementsByTagName("conversion-type")[0].value;
    let number = parseFloat(document.getElementById("numeric-value").value);
    metricImperialConverter(unit, number);
});