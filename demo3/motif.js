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

function myFunction() {
    w3m.api.loadPDB(document.getElementById("myProtein").value);
    representation(document.getElementById("RepreBtnMain").innerText);
    var x = document.getElementsByTagName("tr").length;
    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }
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

function scanMotif() {

    getSequence();
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
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0, 0]);
                            if (i == 1)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 1, 0]);
                            if (i == 2)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0, 1, 0]);
                            if (i == 3)
                                w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0, 1, 1]);
                        } catch (e) {

                        }
                        var table = document.getElementById("myTable");
                        var row = table.insertRow(i);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        cell1.innerHTML = chain[5].toString();
                        cell2.innerHTML = '<a href="https://prosite.expasy.org/cgi-bin/prosite/nicedoc.pl?' + abc.getElementsByTagName("signature_ac")[i].innerHTML + '" target="_blank">' + abc.getElementsByTagName("signature_id")[i].innerHTML + '</a>';
                        cell3.innerHTML = start.toString();
                        cell4.innerHTML = stop.toString();

                        var butt = document.createElement('input'); // create a button
                        butt.setAttribute('type', 'button'); // set attributes ...
                        butt.setAttribute('name', i);
                        butt.setAttribute('value', 'Hide');
                        butt.onclick = getHide(i);

                        cell5.appendChild(butt);
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

function getHide(i) {
    
}



function getSequence() {
    document.getElementById("Seq").innerText = "";
    var mol = w3m.mol[w3m.global.mol];
    for (var i in mol.residue) {
        var chain = mol.residue[i], chain_id = i;
        var a = 0;

        document.getElementById("Seq").innerText = document.getElementById("Seq").innerText + "\nChain " + chain_id.toString().toUpperCase() + ":\n";

        for (var j in chain) {

            if (a == 100)
            {
                document.getElementById("Seq").innerText += "\n";
                a = 0;
            }
            var b = w3m.structure.info[chain[j]];
            document.getElementById("Seq").innerText = document.getElementById("Seq").innerText + b[0] + "\t";
            a++;
        }

    }
}