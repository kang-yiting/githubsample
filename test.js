/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    rep_mode_main : 113, 
    rep_mode_het : 100, 
    bg : [ 0.78, 0.78, 0.78 ], 
    fog_color : [ 0.78, 0.78, 0.78 ], 
    fog_mode : 2, 
    fog_density : 0.7, 
    fog_start : 5.0, 
    fog_stop : 25.0, 
    geom_mol_size : 11.0
};
var color = {
    101 : [ 0.32, 0.32, 0.32 ], 
    102 : [ 0.8, 0.8, 0.8 ]
};

function myFunction() {
    w3m.api.loadPDB(document.getElementById("myProtein").value);
    //document.getElementById("myProtein").value = "Johnny Bravo";
}