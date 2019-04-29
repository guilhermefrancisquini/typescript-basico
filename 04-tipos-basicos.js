//booleano
var success = true; //implicita
// success = 'Guilherme';
//numeros
var num = 10;
var num1 = 10.50;
var num2 = 0xFA;
// num = true;
// num = 'Guilherme';
//string
var _name = 'Guilherme';
var name1 = 'Guilherme';
// name = 10;
// name = true;
// name = "School of Net - " + name1;
_name = "School of Net - " + name1;
console.log(_name);
//Array
var arrayStrings = ['a', 'b', 'c'];
var arrayString1 = ['a', 'b', 'c', 4];
//Enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["Solteiro"] = 0] = "Solteiro";
    estado_civil[estado_civil["Casado"] = 1] = "Casado";
    estado_civil[estado_civil["Divorciado"] = 2] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var estado_civil1;
(function (estado_civil1) {
    estado_civil1["Solteiro"] = "solteiro";
    estado_civil1["Casado"] = "casado";
    estado_civil1["Divorciado"] = "divorciado";
})(estado_civil1 || (estado_civil1 = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil == estado_civil.Solteiro) {
    console.log('sou solteiro');
}
