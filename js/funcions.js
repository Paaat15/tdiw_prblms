function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //completa
    var grau = document.getElementById("graus");
    var resposta = await fetch("mencions.php?grau=" + grau.value);
    var dades = await resposta.text();
    document.getElementById("mencions").innerHTML = dades;
}