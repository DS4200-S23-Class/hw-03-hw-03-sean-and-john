// Represents the page color
// If true in light mode if false in dark mode
let color_bool = new Boolean(true)

function buttonClicked() {
    // changes the color of the page and text when the button is clicked
    if (color_bool) {
        document.body.style.background = "black";
        document.body.style.color = "white"
        color_bool = false
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black"
        color_bool = true
    }
}
