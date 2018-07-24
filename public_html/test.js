/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var config = {
    rep_mode_main: 113,
    rep_mode_het: 100,
    bg: [0.78, 0.78, 0.78],
    fog_color: [0.78, 0.78, 0.78],
    fog_mode: 2,
    fog_density: 0.7,
    fog_start: 5.0,
    fog_stop: 25.0,
    geom_mol_size: 11.0
};
var color = {
    101: [0.32, 0.32, 0.32],
    102: [0.8, 0.8, 0.8]
};
function myFunction() {
    w3m.api.loadPDB(document.getElementById("myProtein").value);
}
function myFunction2() {
    w3m.api.label_area(w3m.ATOM_MAIN, w3m.LABEL_AREA_BACKBONE);
}

function myFunction3() {
    w3m.api.color(w3m.ATOM_MAIN, 602);
}

function myFunction4() {
        w3m.api.hide_add('a', 1, 110);
}

function myFunction5() {
        w3m.api.hide_remove('a', 1, 110);
}