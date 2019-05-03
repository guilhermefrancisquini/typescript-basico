var soma = function (x, y) {
    return x + y;
};
var num = soma(2, 3);
var soma1 = function (x, y) { return x + y; };
var funcao = function (name) {
    return "Guilherme Francisquini " + name;
};
var funcao1 = function (name) { return "Guilherme Francisquini " + name; };
var funcaoDefaultParameters = function (firstname, last_name) {
    if (last_name === void 0) { last_name = 'Francisquini'; }
};
funcaoDefaultParameters('Guilherme');
var funcaoOptionalParameters = function (firstname, last_name) {
    console.log(last_name);
};
funcaoOptionalParameters('Guilherme');
