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
    w3m.api.representation(w3m.ATOM_MAIN, 105);
    var x = document.getElementsByTagName("tr").length;
    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }
}

function scanMutation()
{
    //1bgj
    var xhttp = new XMLHttpRequest();
    var x = document.getElementsByTagName("tr").length;
    var j;
    for (j = 1; j < x; j++) {
        document.getElementById("myTable").deleteRow(0);
    }

    xhttp.onreadystatechange = function () {

        try {
            if (this.readyState === 4 && this.status === 200) {

                //alert(xhttp.responseText);
                var text = xhttp.responseText;
                var temp = document.getElementById("myProtein").value.toLowerCase();
                text = text.replace(temp, "pdb");
                var obj = JSON.parse(text);
                var match = obj.pdb.length;
                if (isEmpty(obj.pdb)) {
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(i);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = "None";
                    cell2.innerHTML = "";
                } else {
                    var i;
                    for (i = 0; i < match; i++) {

                        var table = document.getElementById("myTable");
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
                            var table = document.getElementById("myTable");
                            var row = table.insertRow(i);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell1.innerHTML = e.toString();
                            cell2.innerHTML = "this";
                        }
                        if (i == 0)
                            w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0, 0.17]);
                        if (i == 1)
                            w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0.23, 0.62, 0.26]);
                        if (i == 2)
                            w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [0, 0, 1]);
                        if (i == 3)
                            w3m.api.fragment_set(fragID, w3m.CARTOON, w3m.COLOR_BY_USER, w3m.LABEL_AREA_RESIDUE, w3m.LABEL_RESIDUE_NAME, [1, 0.23, 0]);
                    }
                    //document.getElementById("Label").innerText = obj.pdb[0].residue_number;
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
    xhttp.open("GET", "http://www.ebi.ac.uk/pdbe/api/pdb/entry/mutated_AA_or_NA/" + document.getElementById("myProtein").value, true);
    xhttp.send();
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}