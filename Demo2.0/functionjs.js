//sdgewhlvlnvwgkve
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            document.getElementById("structureID").innerText = abc.getElementsByTagName('structureId')[0].getAttribute("id");
            document.getElementById("polymerT").innerText = abc.getElementsByTagName('polymer')[0].getAttribute("type");
            document.getElementById("polymerL").innerText = +abc.getElementsByTagName('polymer')[0].getAttribute("length");
            document.getElementById("Taxonomy").innerText = abc.getElementsByTagName('Taxonomy')[0].getAttribute("name");
            document.getElementById("macromolecule").innerText = abc.getElementsByTagName('macroMolecule')[0].getAttribute("name");
        }
    }
    var url = "http://www.rcsb.org/pdb/rest/describeMol?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();

}

function loadBlastSearch() {
    document.getElementById("Hit_Number").innerText = "Hit Number : ";
    document.getElementById("Hit_PDBID").innerText = "";
    document.getElementById("Hit_Entity").innerText = "";
    document.getElementById("Hit_Chain").innerText = "";

    if (document.getElementById("myblast").value != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (xhttp.readyState === 4 && xhttp.status === 200) {
                //alert(xhttp.responseText);
                var abc = xhttp.responseXML;
                document.getElementById("Hit_Number").innerText = "Hit Number : " + abc.getElementsByTagName('Hit_num').length;
                var cutarr = cut(abc.getElementsByTagName('Hit_def')[0].innerHTML);
                document.getElementById("Hit_PDBID").innerText = cutarr[0];
                document.getElementById("Hit_Entity").innerText = cutarr[1];
                document.getElementById("Hit_Chain").innerText = cutarr[2];

                var i;
                for (i = 0; i < 4; i++) {
                    var temp = "d" + i;
                    cutarr = cut(abc.getElementsByTagName('Hit_def')[i].innerHTML);
                    document.getElementById(temp).innerText = cutarr[0];
                    var x = function () {
                        alert(temp);
                    };
                    document.getElementById(temp).onclick = x;
                }
            }
        }
        var url = "https://www.rcsb.org/pdb/rest/getBlastPDB1?sequence=" + document.getElementById("myblast").value + "&eCutOff=10.0&matrix=BLOSUM62&outputFormat=XML";
        xhttp.open("GET", url, true);
        xhttp.send();
    }

}

function showBlast(a, b, c) {
    document.getElementById("Hit_PDBID").innerText = a;
    document.getElementById("Hit_Entity").innerText = b;
    document.getElementById("Hit_Chain").innerText = c;
}

function loadLigandSearch() {

    document.getElementById("Ligand_ChemicalID").innerText = "";
    document.getElementById("Ligand_ChemicalName").innerText = "";
    document.getElementById("Ligand_Formula").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            document.getElementById("Ligand_ChemicalID").innerText = "None";
            document.getElementById("Ligand_ChemicalID").innerText = abc.getElementsByTagName("ligand")[0].getAttribute("chemicalID");
            document.getElementById("Ligand_ChemicalName").innerText = abc.getElementsByTagName("chemicalName")[0].innerHTML;
            document.getElementById("Ligand_Formula").innerText = abc.getElementsByTagName("formula")[0].innerHTML;

        }

    }
    var url = "https://www.rcsb.org/pdb/rest/ligandInfo?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();

}

function cut(str)
{
    var NewArray = new Array();
    var cutarr = new Array();
    var NewArray = str.split("|p");
    var cutarr = NewArray[0].split(":");

    return cutarr;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}