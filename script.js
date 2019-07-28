function intelligence() {
    let intelligenceLevel = [
        "good",
        "smart",
        "fine",
        "extra ordinary",
        "cool",
        "awesome",
        "foolish",
        "diligent",
        "practical person",
        "dumb as a chicken",
        "Imbecile",
        "an Idiot",
        "jealous person",
        "below Average",
        "average",
        "boring",
        "careless",
        "intelligent",
        "Genius",
        "God Gifted",
    ]

    let name = document.querySelector("input").value;

    if (name == false) {
        alert("Please put your name first");

    } else {
        let x = parseInt(Math.random() * 20);
        document.querySelector("p").innerHTML = name + ", you are " + intelligenceLevel[x] + "!!";
    }
}






