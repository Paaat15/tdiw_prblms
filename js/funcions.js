function confirmaRegistre(){
    alert("Registrant estudiant");
    console.log("Registrant estudiant");
    let form = document.getElementById("formDiv");
    form.innerHTML = `<p class="important">T'has registrat amb èxit</p>`
    return false;
}