function submit(){

    const bestilling = {
        fnavn: $("#fnavn").val(),
    };

    let error = false;

    if (bestilling.fnavn === "") {
        document.getElementById("errorFnavn").innerHTML = "Du må skrive inn en melding dust";
        error = true;
    }

    if (error === false) {
        $.post("/saveBestilling", bestilling, function () {
            getBestilling();
        });



        document.getElementById("errorFnavn").innerHTML = "";


        document.getElementById("fnavn").value = "";


    }
}

function getBestilling(){
    $.get("/getBestilling", function (bestillingList){
        formatBestilling(bestillingList);
    })
}

function formatBestilling(bestillingList){
    let ut = "<table class=\"table bg-light\">";

    for (const bestilling of bestillingList) {
        ut += "<tr><td>" + bestilling.fnavn + "</td></tr>";
    }
    ut += "</table>";
    document.getElementById("billetter").innerHTML = ut;
}
function clearRegister(){
    $.get("/clearRegister", function (){
        getBestilling();
    })
}