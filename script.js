
let intelligenceLevel = [
    "good",
    "smart",
    "fine",
    "extra ordinary",
    "cool",
    "awesome"
]

function showTalent() {
    let name = document.querySelector("input").value;

    if (name == false) {
        alert("input your name");

    } else {
        let x = parseInt(Math.random() * 6);
        document.querySelector("p").innerHTML = "you are " + intelligenceLevel[x];




    }
}



    // let intelligence;

    // if (name == false) {
    //     alert("plaese enter a name");

    // } else {
    //     if (name.charAt(0).tolowerCase() == "a") {
    //         intelligence = intelligenceLevel[6];
    //         alert(intelligence);

    //     } else if (name.charAt(0).tolowerCase() == "b") {
    //         intelligence = intelligenceLevel[4];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "c") {
    //         intelligence = intelligenceLevel[1];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "d") {
    //         intelligence = intelligenceLevel[5];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "e") {
    //         intelligence = intelligenceLevel[2];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "f") {
    //         intelligence = intelligenceLevel[4];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "g") {
    //         intelligence = intelligenceLevel[46];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "h") {
    //         intelligence = intelligenceLevel[3];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "i") {
    //         intelligence = intelligenceLevel[2];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "j") {
    //         intelligence = intelligenceLevel[1];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "k") {
    //         intelligence = intelligenceLevel[3];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "l") {
    //         intelligence = intelligenceLevel[4];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "m") {
    //         intelligence = intelligenceLevel[3];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "n") {
    //         intelligence = intelligenceLevel[3];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "o") {
    //         intelligence = intelligenceLevel[1];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "p") {
    //         intelligence = intelligenceLevel[5];

    //         alert(intelligence);


    //     }
    //     else if (name.charAt(0).tolowerCase() == "q") {
    //         intelligence = intelligenceLevel[1];

    //         alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "r") {
//             intelligence = intelligenceLevel[4];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "s") {
//             intelligence = intelligenceLevel[3];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "t") {
//             intelligence = intelligenceLevel[1];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "u") {
//             intelligence = intelligenceLevel[4];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "v") {
//             intelligence = intelligenceLevel[1];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "w") {
//             intelligence = intelligenceLevel[2];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "x") {
//             intelligence = intelligenceLevel[6];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "y") {
//             intelligence = intelligenceLevel[3];

//             alert(intelligence);


//         }
//         else if (name.charAt(0).tolowerCase() == "z") {
//             intelligence = intelligenceLevel[5];

//             alert(intelligence);


//         }
//     }

// }