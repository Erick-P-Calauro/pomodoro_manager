function changeTheme(state) {
    limparBackgrounds();

    switch(state) {
        case "produtividade":
            document.documentElement.style.setProperty("--main", "var(--produtividade)");
            document.documentElement.style.setProperty("--main2", "var(--produtividade2)");
            document.getElementById("changeProdutividade").style.backgroundColor = "var(--produtividade2)";

            break;
        case "curto":
            document.documentElement.style.setProperty("--main", "var(--descansoCurto)");
            document.documentElement.style.setProperty("--main2", "var(--descansoCurto2)");
            document.getElementById("changeCurto").style.backgroundColor = "var(--descansoCurto2)";

            break;
        case "longo":
            document.documentElement.style.setProperty("--main", "var(--descansoLongo)");
            document.documentElement.style.setProperty("--main2", "var(--descansoLongo2)");
            document.getElementById("changeLongo").style.backgroundColor = "var(--descansoLongo2)";

            break;
    }
}

function limparBackgrounds() {
    document.getElementById("changeProdutividade").style.backgroundColor = "";
    document.getElementById("changeCurto").style.backgroundColor = "";
    document.getElementById("changeLongo").style.backgroundColor = "";
}


export default changeTheme;