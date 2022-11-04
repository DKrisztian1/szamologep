function szamol(muvelet){
    var elsoSzam = document.getElementById("szam1").value;
    var masodikSzam = document.getElementById("szam2").value;
    if(muvelet == '+'){
        document.getElementById("eredmeny").innerHTML = parseFloat(elsoSzam) + parseFloat(masodikSzam);
    }
    else if(muvelet == '-'){
        document.getElementById("eredmeny").innerHTML = parseFloat(elsoSzam) - parseFloat(masodikSzam);
    }
    else if(muvelet == '*'){
        document.getElementById("eredmeny").innerHTML = parseFloat(elsoSzam) * parseFloat(masodikSzam);
    }
    else{
        document.getElementById("eredmeny").innerHTML = parseFloat(elsoSzam) / parseFloat(masodikSzam);
    }
}