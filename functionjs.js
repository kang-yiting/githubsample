
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            document.getElementById("structureID").innerText = "Structure ID : " + abc.getElementsByTagName('structureId')[0].getAttribute("id");
            document.getElementById("polymerT").innerText = "Type : " + abc.getElementsByTagName('polymer')[0].getAttribute("type");
            document.getElementById("polymerL").innerText = "Length : " + abc.getElementsByTagName('polymer')[0].getAttribute("length");
            document.getElementById("Taxonomy").innerText = "Taxonomy : " + abc.getElementsByTagName('Taxonomy')[0].getAttribute("name");
            document.getElementById("macromolecule").innerText = "macromolecule : " + abc.getElementsByTagName('macroMolecule')[0].getAttribute("name");
        }
    }
    var url = "http://www.rcsb.org/pdb/rest/describeMol?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();

}

function loadBlastSearch() {
    document.getElementById("Hit_Number").innerText = "Hit Number : ";
    document.getElementById("Hit_PDBID").innerText = "PDB ID : ";
    document.getElementById("Hit_Entity").innerText = "Entity : ";
    document.getElementById("Hit_Chain").innerText = "Chain(s) : ";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            document.getElementById("Hit_Number").innerText = "Hit Number : " + abc.getElementsByTagName('Hit_num').length;
            var cutarr = cut(abc.getElementsByTagName('Hit_def')[0].innerHTML);

            document.getElementById("Hit_PDBID").innerText = "PDB ID : " + cutarr[0];
            document.getElementById("Hit_Entity").innerText = "Entity : " + cutarr[1];
            document.getElementById("Hit_Chain").innerText = "Chain(s) : " + cutarr[2];
        }
    }
    var url = "https://www.rcsb.org/pdb/rest/getBlastPDB1?sequence=" + document.getElementById("myblast").value + "&eCutOff=10.0&matrix=BLOSUM62&outputFormat=XML";
    xhttp.open("GET", url, true);
    xhttp.send();


}

function loadLigandSearch() {

    document.getElementById("Ligand_ChemicalID").innerText = "Chemical ID : ";
    document.getElementById("Ligand_ChemicalName").innerText = "Chemical Name : ";
    document.getElementById("Ligand_Formula").innerText = "Formula : ";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var abc = xhttp.responseXML;
            document.getElementById("Ligand_ChemicalID").innerText = "Chemical ID : " + abc.getElementsByTagName("ligand")[0].getAttribute("chemicalID");
            document.getElementById("Ligand_ChemicalName").innerText = "Chemical Name : " + abc.getElementsByTagName("chemicalName")[0].innerHTML;
            document.getElementById("Ligand_Formula").innerText = "Formula : " + abc.getElementsByTagName("formula")[0].innerHTML;

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