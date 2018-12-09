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
    101: [0.70, 0.70, 0.70],
    102: [0.00, 0.00, 0.00]
            //101: [0.70, 0.70, 0.70],
};
function myFunction() { //Initialise and Generate 3D Protein
    w3m.api.loadPDB(document.getElementById("myProtein").value);
    representation(document.getElementById("RepreBtnMain").innerText);
    labelArea(document.getElementById("LbAreaBtnMain").innerText);
    labelContent(document.getElementById("LbContentBtnMain").innerText);
    var x = document.getElementById("myTableMotif").getElementsByTagName("tr").length;
    var j;
    for (j = 0; j < x; j++) {
        document.getElementById("myTableMotif").deleteRow(0);
    }

    x = document.getElementById("myTableLigand").getElementsByTagName("tr").length;
    for (j = 0; j < x; j++) {
        document.getElementById("myTableLigand").deleteRow(0);
    }

    x = document.getElementById("myTableMutation").getElementsByTagName("tr").length;
    for (j = 0; j < x; j++) {
        document.getElementById("myTableMutation").deleteRow(0);
    }

    w3m.api.representation(2, 100);
}

function representation(a) { // Set representation mode

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

function labelArea(a) { // Set label Area
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

function labelContent(a) { // Set label Content
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

//===============================================================  Motif Search  ==========================================================================//

function scanMotif() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        try {
            if (this.readyState === 4 && this.status === 200) {
                var abc = xhttp.responseXML;
                //alert(xhttp.responseText);

                var xx = document.getElementById("myTableMotif").getElementsByTagName("tr").length;
                var jj;
                var match;
                for (jj = 0; jj < xx; jj++) {
                    document.getElementById("myTableMotif").deleteRow(0);
                }
                match = abc.getElementsByTagName("matchset")[0].getAttribute("n_match");
                if (match == 0) {
                    var table = document.getElementById("myTableMotif");
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = "None";
                    cell2.innerHTML = "";
                } else {
                    var i, j;
                    var sequenceArr;
                    sequenceArr = getSequence2();
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
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0, 0.17]);
                            if (i == 1)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0.23, 0.62, 0.26]);
                            if (i == 2)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0, 0, 1]);
                            if (i == 3)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0.23, 0]);
                        } catch (e) {

                        }
                        representation(document.getElementById("RepreBtnMain").innerText);
                        labelArea(document.getElementById("LbAreaBtnMain").innerText);
                        labelContent(document.getElementById("LbContentBtnMain").innerText);
                        var table = document.getElementById("myTableMotif");
                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        var cell6 = row.insertCell(5);
                        cell1.innerHTML = chain[5].toString();
                        cell2.innerHTML = '<a href="https://prosite.expasy.org/cgi-bin/prosite/nicedoc.pl?' + abc.getElementsByTagName("signature_ac")[i].innerHTML + '" target="_blank">' + abc.getElementsByTagName("signature_id")[i].innerHTML + '</a>';
                        cell3.innerHTML = start.toString();
                        cell4.innerHTML = stop.toString();
                        if (i == 0)
                            cell5.innerHTML = "Red";
                        else if (i == 1)
                            cell5.innerHTML = "Green";
                        else if (i == 2)
                            cell5.innerHTML = "Blue";
                        else if (i == 3)
                            cell5.innerHTML = "Orange";
                        var checkbox = document.createElement('input');
                        checkbox.type = "checkbox";
                        checkbox.name = "name";
                        checkbox.value = "value";
                        var CBid = "CB" + i;
                        checkbox.id = CBid;
                        var hideCB = 'getHide(' + (i * 2) + ',' + '"' + CBid + '")';

                        checkbox.setAttribute('onclick', hideCB);
                        checkbox.checked = false;
                        cell6.appendChild(checkbox);
                        //5e7w

                        row = table.insertRow();
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = 'Sequence';
                        for (j in sequenceArr) {
                            if (sequenceArr[j]["chainID"] == chain[5].toString().toUpperCase())
                            {
                                var text = sequenceArr[j]["sequence"];
                                textlength = text.length;
                                var s = parseInt(abc.getElementsByTagName("start")[i].innerHTML);
                                var e = parseInt(abc.getElementsByTagName("stop")[i].innerHTML);
                                text = text.substring(0, s - 1) + "<span class='highlight'>" + text.substring(s - 1, e) + "</span>" + text.substring(e, textlength + 1);

                                cell2.innerHTML = text;
                            }
                        }
                        cell2.colSpan = 5;
                    }
                    getchain(match, sequenceArr);
                }
            }
        } catch (e) {
            var table = document.getElementById("myTableMotif");
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = e.toString();
            cell2.innerHTML = "";
        }

    };
    xhttp.open("GET", "https://prosite.expasy.org/cgi-bin/prosite/PSScan.cgi?skip=10&seq=" + document.getElementById("myProtein").value + "&output=xml", true);
    xhttp.send();
}

function getSequence2() { // Get chain sequence

    var seqArr = [];
    var temp = {chainID: "", sequence: ""};
    var mol = w3m.mol[w3m.global.mol];
    for (var i in mol.residue) {
        var chain = mol.residue[i], chain_id = i;
        temp["chainID"] = chain_id.toString().toUpperCase();
        for (var j in chain) {

            var b = w3m.structure.info[chain[j]];
            temp["sequence"] = temp["sequence"] + b[0];
        }
        seqArr.push(temp);
        temp = {chainID: "", sequence: ""};
    }
    return seqArr;
}

function getHide(i, j) { //hide motif chain
    var table = document.getElementById("myTableMotif");
    var chainid = table.rows[i].cells[0].innerHTML;
    var start = table.rows[i].cells[2].innerHTML;
    var stop = table.rows[i].cells[3].innerHTML;
    var checkbox = document.getElementById(j);
    if (checkbox.checked == true)
    {
        if (start != 1)
            w3m.api.hide_add(chainid.toLowerCase(), 0, parseInt(start) - 1);
        w3m.api.hide_add(chainid.toLowerCase(), parseInt(stop) + 1, 10000);
    }
    else {
        if (start != 1)
            w3m.api.hide_remove(chainid.toLowerCase(), 0, parseInt(start) - 1);
        w3m.api.hide_remove(chainid.toLowerCase(), parseInt(stop) + 1, 10000);
    }
}

function getchain(match, sequenceArr) // Get non-motif Chain
{
    var table = document.getElementById("myTableMotif");
    var mol = w3m.mol[w3m.global.mol];
    for (var i in mol.residue) {
        var chain_id = i;
        var check = 0;
        var a;
        for (a = 0; a < match; a++) {
            if (table.rows[a * 2].cells[0].innerHTML == chain_id.toUpperCase())
                check = 1;

        }

        if (check == 0) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = chain_id.toString().toUpperCase();
            cell2.innerHTML = 'None';
            cell3.innerHTML = '-';
            cell4.innerHTML = '-';
            cell5.innerHTML = 'Light Grey';
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            var CBid = "CB" + i;
            checkbox.id = CBid;
            var hideCB = 'getHide2("' + i + '",' + '"' + CBid + '")';
            checkbox.setAttribute('onclick', hideCB);
            checkbox.checked = false;
            cell6.appendChild(checkbox);

            row = table.insertRow();
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell1.innerHTML = 'Sequence';
            for (j in sequenceArr) {
                if (sequenceArr[j]["chainID"] == chain_id.toString().toUpperCase())
                    cell2.innerHTML = sequenceArr[j]["sequence"];
            }
            cell2.colSpan = 5;
        }
    }
}

function getHide2(i, j) { //hide non-motif chain
    var chainid = i;
    var checkbox = document.getElementById(j);
    if (checkbox.checked == true)
    {
        w3m.api.hide_add(chainid.toLowerCase(), 0, 10000);
    }
    else {
        w3m.api.hide_remove(chainid.toLowerCase(), 0, 10000);
    }
}
//===============================================================  Ligand Search  ==========================================================================//
function loadLigandSearch() {

    showligand();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //alert(xhttp.responseText);
            var xx = document.getElementById("myTableLigand").getElementsByTagName("tr").length;
            //document.getElementById("temp").innerText = x.toString();

            var jj;
            for (jj = 0; jj < xx; jj++) {
                document.getElementById("myTableLigand").deleteRow(0);
            }


            var abc = xhttp.responseXML;
            var count = abc.getElementsByTagName("ligand").length;
            if (count == 0) {
                var table = document.getElementById("myTableLigand");
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
                var table = document.getElementById("myTableLigand");
                for (i = 0; i < count; i++) {
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = '<a href="http://www.rcsb.org/ligand/' + abc.getElementsByTagName("ligand")[i].getAttribute("chemicalID") + '" target="_blank">' + abc.getElementsByTagName("ligand")[i].getAttribute("chemicalID") + '</a>';
                    cell2.innerHTML = abc.getElementsByTagName("chemicalName")[i].innerHTML;
                    cell3.innerHTML = abc.getElementsByTagName("formula")[i].innerHTML;
                    cell4.innerHTML = abc.getElementsByTagName("InChIKey")[i].innerHTML;
                }
                row = table.insertRow(i);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Ligand only :";
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = "name";
                checkbox.value = "value";
                checkbox.id = "ligandOnly";
                var lg = 'ligandOnly()';
                checkbox.setAttribute('onclick', lg);
                checkbox.checked = false;
                cell2.appendChild(checkbox);
            }
        }

    }
    var url = "https://www.rcsb.org/pdb/rest/ligandInfo?structureId=" + document.getElementById("myProtein").value;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showligand()
{
    w3m.api.representation(2, 115);
}

function ligandOnly() // Show only ligand
{
    var checkbox = document.getElementById("ligandOnly");
    if (checkbox.checked == true)
    {
        w3m.api.representation(1, 100);
        w3m.api.label_area(w3m.ATOM_MAIN, 700);
    }
    else {
        representation(document.getElementById("RepreBtnMain").innerText);
        labelArea(document.getElementById("LbAreaBtnMain").innerText);
    }

}

//===============================================================  Mutation Search  ==========================================================================//

function scanMutation()
{
    //1bgj
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function () {

        try {
            if (this.readyState === 4 && this.status === 200) {

                var xx = document.getElementById("myTableMutation").getElementsByTagName("tr").length;
                var jj;
                for (jj = 0; jj < xx; jj++) {
                    document.getElementById("myTableMutation").deleteRow(0);
                }
                //alert(xhttp.responseText);
                var text = xhttp.responseText;
                var temp = document.getElementById("myProtein").value.toLowerCase();
                text = text.replace(temp, "pdb");
                var obj = JSON.parse(text);
                var match = obj.pdb.length;

                var i;
                for (i = 0; i < match; i++) {

                    var table = document.getElementById("myTableMutation");
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = obj.pdb[i].chain_id;

                    var mol_id = w3m.global.mol;
                    var mol = w3m.mol[mol_id];
                    var residue_start = w3m_find_first(mol.residue[obj.pdb[i].chain_id.toString().toLowerCase()]);

                    w3m.api.highlight_add(obj.pdb[i].chain_id.toLowerCase(), parseInt(obj.pdb[i].residue_number), parseInt(obj.pdb[i].residue_number));
                    cell2.innerHTML = obj.pdb[i].residue_number.toString();
                    if (obj.pdb[i].mutation_details.from != null)
                        cell3.innerHTML = obj.pdb[i].mutation_details.from;
                    else
                        cell3.innerHTML = 'null';
                    cell4.innerHTML = obj.pdb[i].mutation_details.to;
                    cell5.innerHTML = obj.pdb[i].mutation_details.type;

                    var fragID;
                    try {
                        fragID = w3m.api.fragment_add(obj.pdb[i].chain_id.toLowerCase(), parseInt(obj.pdb[i].residue_number), parseInt(obj.pdb[i].residue_number));
                    } catch (e) {
                        var table = document.getElementById("myTableMutation");
                        var row = table.insertRow(i);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = e.toString();
                        cell2.innerHTML = "this";
                    }
                    if (i == 0)
                        w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 1, 0]);
                    if (i == 1)
                        w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0.3, 1]);
                    if (i == 2)
                        w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0.5, 0, 1]);
                    if (i == 3)
                        w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0.3, 1]);
                }

                representation(document.getElementById("RepreBtnMain").innerText);
                labelArea(document.getElementById("LbAreaBtnMain").innerText);
                labelContent(document.getElementById("LbContentBtnMain").innerText);
                //document.getElementById("Label").innerText = obj.pdb[0].residue_number;

            } else if (this.readyState === 2 && this.status === 404) {
                var table = document.getElementById("myTableMutation");
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                cell1.innerHTML = "None";
            }

        } catch (e) {
            var table = document.getElementById("myTableMutation");
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = e.toString();
            cell2.innerHTML = "";
        }

    };
    xhttp.open("GET", "http://www.ebi.ac.uk/pdbe/api/pdb/entry/mutated_AA_or_NA/" + document.getElementById("myProtein").value, true);
    xhttp.send();
}

