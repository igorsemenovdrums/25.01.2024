
let finger = confirm("Do you want to check your wrist?");

if (finger == 1) {

    finger = Number(prompt("Finger number you're interested in:"));

    if (finger == 1) {
        alert("Thumb");
    }

    else if (finger == 2) {
        alert("Index");
    }

    else if (finger == 3) {
        alert("Middle");
    }

    else if (finger == 4) {
        alert("Ring");
    }

    else if (finger == 5) {
        alert("Pincky");
    }
}

else {
    alert("Good bye!")
}