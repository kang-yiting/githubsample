/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
    102: [0.78, 0.78, 0.78]
};
var color2 = {
    101: [0.50, 0.50, 0.00],
    102: [0.78, 0.78, 0.78]
};
function myFunction() {
    w3m.api.loadPDB(document.getElementById("myProtein").value);
    representation(document.getElementById("RepreBtnMain").innerText);
    var x = document.getElementsByTagName("tr").length;
    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }
    
    var fgA = w3m.api.fragment_add("a", 1, 1000);
}
function representation(a) {

    if (a == "As Dot") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 101);
    }
    if (a == "As Line") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 102);
    }
    if (a == "As Backbone") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 103);
    }
    if (a == "As Tube") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 104);
    }
    if (a == "As Cartoon") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 105);
    }
    if (a == "As Stick") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 113);
    }
    if (a == "As Sphere") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 114);
    }
    if (a == "As Ball & Rod") {
        document.getElementById("RepreBtnMain").innerText = a;
        w3m.api.representation(w3m.ATOM_MAIN, 115);
    }
}

function labelArea(a) {
    if (a == "None") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 700);
    }
    if (a == "Every Atom") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 701);
    }
    if (a == "Backbone") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 702);
    }
    if (a == "Every Residue") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 703);
    }
    if (a == "Every Chain") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 704);
    }
    if (a == "Mol") {
        document.getElementById("LbAreaBtnMain").innerText = a;
        w3m.api.label_area(w3m.ATOM_MAIN, 705);
    }
}

function labelContent(a) {
    if (a == "Atom name") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 711);
    }
    if (a == "Atom id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 712);
    }
    if (a == "Atom name & id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 713);
    }
    if (a == "Element") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 721);
    }
    if (a == "Element & id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 722);
    }
    if (a == "Residue name") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 731);
    }
    if (a == "Residue id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 732);
    }
    if (a == "Residue name & id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 733);
    }
    if (a == "Chain id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 741);
    }
    if (a == "Chain & Residue") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 742);
    }
    if (a == "Chain & Residue id") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 743);
    }
    if (a == "Mix Info") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 744);
    }
    if (a == "B-Factor") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 752);
    }
    if (a == "VDW Radius") {
        document.getElementById("LbContentBtnMain").innerText = a;
        w3m.api.label_content(w3m.ATOM_MAIN, 753);
    }
}

function myFunction4() {
    w3m.api.hide_add('a', document.getElementById("startHide").value, document.getElementById("endHide").value);
}

function myFunction5() {
    w3m.api.hide_remove('a', document.getElementById("startHide").value, document.getElementById("endHide").value);
}

function scanProsite() {

    var xhttp = new XMLHttpRequest();
    var x = document.getElementsByTagName("tr").length;
    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }

    xhttp.onreadystatechange = function () {

        try {
            if (this.readyState === 4 && this.status === 200) {
                var abc = xhttp.responseXML;
                //alert(xhttp.responseText);

                var match = abc.getElementsByTagName("matchset")[0].getAttribute("n_match");

                if (match == 0) {
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = "None";
                    cell2.innerHTML = "";
                } else {
                    var i;
                    for (i = 0; i < match; i++) {

                        var chain = abc.getElementsByTagName("sequence_ac")[i].innerHTML;
                        //document.getElementById("Representation").innerText = chain;

                        var mol_id = w3m.global.mol;
                        var mol = w3m.mol[mol_id];
                        var residue_start = w3m_find_first(mol.residue[chain[5].toString().toLowerCase()]);

                        var start = parseInt(abc.getElementsByTagName("start")[i].innerHTML) + parseInt(residue_start) - 1;
                        var stop = parseInt(abc.getElementsByTagName("stop")[i].innerHTML) + parseInt(residue_start) - 1;


                        w3m.api.highlight_add(chain[5].toString().toLowerCase(), parseInt(start), parseInt(stop));

                        try {
                            var fragID = w3m.api.fragment_add(chain[5].toString().toLowerCase(), parseInt(start), parseInt(stop));
                            if (i == 0)
                                w3m.api.fragment_set(fragID, 105, 601, 703, 731, color);
                            if (i == 1)
                                w3m.api.fragment_set(fragID, 105, 601, 703, 731, color);
                        } catch (e) {

                        }
                        var table = document.getElementById("myTable");


                        var row = table.insertRow(i);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        cell1.innerHTML = chain[5].toString();
                        cell2.innerHTML = '<a href="https://prosite.expasy.org/cgi-bin/prosite/nicedoc.pl?' + abc.getElementsByTagName("signature_ac")[i].innerHTML + '">' + abc.getElementsByTagName("signature_id")[i].innerHTML + '</a>';
                        cell3.innerHTML = start.toString();
                        cell4.innerHTML = stop.toString();
                        //5e7w


                        //var mol_id = w3m.global.mol;
                        //var mol    = w3m.mol[mol_id];
                        //var residue_start = w3m_find_first(mol.residue[chain[5].toString().toLowerCase()]);
                        //document.getElementById("LabelContent").innerText = residue_start;





                    }
                }
            }
        } catch (e) {
            var table = document.getElementById("myTable");
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = e.toString();
            cell2.innerHTML = "";
        }

    };
    xhttp.open("GET", "https://prosite.expasy.org/cgi-bin/prosite/PSScan.cgi?skip=10&seq=" + document.getElementById("myProtein").value + "&output=xml", true);
    xhttp.send();
}

function myFunction7() {
    w3m.api.highlight_add('c', 10, 20);
    w3m.api.highlight_add('c', 90, 100);
}

function myFunction8() {
    var mol = w3m.mol[w3m.global.mol],
            info = mol.info;
    document.getElementById("signature").innerText = info.author;

}

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

function loadLigandSearch() {

    //document.getElementById("Ligand_ChemicalID").innerText = "";
    //document.getElementById("Ligand_ChemicalName").innerText = "";
    //document.getElementById("Ligand_Formula").innerText = "";
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

            var i;
            var table = document.getElementById("myTable");

            for (i = 0; i < count; i++) {
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = abc.getElementsByTagName("ligand")[i].getAttribute("chemicalID");
                cell2.innerHTML = abc.getElementsByTagName("chemicalName")[i].innerHTML;
                cell3.innerHTML = abc.getElementsByTagName("formula")[i].innerHTML;
                cell4.innerHTML = abc.getElementsByTagName("InChIKey")[i].innerHTML;

            }

        }

    }
    var url = "https://www.rcsb.org/pdb/rest/ligandInfo?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();

}


