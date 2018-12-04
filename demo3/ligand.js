var config = {
    rep_mode_main: 109,
    rep_mode_het: 100,
    bg: [0.00, 0.00, 0.00],
    fog_color: [0.35, 0.35, 0.35],
    fog_mode: 2,
    fog_density: 0.7,
    fog_start: 5.0,
    fog_stop: 25.0,
    geom_mol_size: 11.0
};
var color = {
    101: [1.00, 0.00, 0.00],
    102: [0.50, 0.50, 0.50]
};


function loadLigandSearch() {

//document.getElementById("Ligand_ChemicalID").innerText = "";
//document.getElementById("Ligand_ChemicalName").innerText = "";
//document.getElementById("Ligand_Formula").innerText = "";
    w3m.api.loadPDB(document.getElementById("myProtein").value);
    showligand();
    var x = document.getElementsByTagName("tr").length;
    //document.getElementById("temp").innerText = x.toString();

    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            var count = abc.getElementsByTagName("ligand").length;

            if (count == 0) {
                var table = document.getElementById("myTable");
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = "None";
                cell2.innerHTML = "";
                cell3.innerHTML = "";
                cell4.innerHTML = "";
            }
            else {
                var i;
                var table = document.getElementById("myTable");
                for (i = 0; i < count; i++) {
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = '<a href="http://www.rcsb.org/ligand/' + abc.getElementsByTagName("ligand")[i].getAttribute("chemicalID")+'" target="_blank">'+abc.getElementsByTagName("ligand")[i].getAttribute("chemicalID")+'</a>';    
                    cell2.innerHTML = abc.getElementsByTagName("chemicalName")[i].innerHTML;
                    cell3.innerHTML = abc.getElementsByTagName("formula")[i].innerHTML;
                    cell4.innerHTML = abc.getElementsByTagName("InChIKey")[i].innerHTML;
                }
            }
        }

    }
    var url = "https://www.rcsb.org/pdb/rest/ligandInfo?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showligand()
{
    w3m.api.representation(2, 102);
}