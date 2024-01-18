let userSpeed = prompt("Enter your speed (in km/h):");
let points = 0;

if (userSpeed <= 70) {
    alert("All is good.");
} else {
    points = Math.floor((userSpeed - 70) / 5);
    if (points >= 12) {
        alert("License suspended.");
    } else {
        alert(`Points deducted: ${points}`);
    }
}
