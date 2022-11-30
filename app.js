var input = document.getElementById("input")

function action(a) {
    input.value += a
}
function result() {
    input.value = eval(input.value)
}
function clr() {
    input.value = ""
}
