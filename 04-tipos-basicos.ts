//booleano
let success: boolean = true; //implicita

// success = 'Guilherme';

//numeros
let num = 10;
let num1: number = 10.50;
let num2: number = 0xFA;

// num = true;
// num = 'Guilherme';

//string
let _name = 'Guilherme';
let name1: string = 'Guilherme';

// name = 10;
// name = true;

// name = "School of Net - " + name1;
_name = `School of Net - ${name1}`;
console.log(_name)

//Array
let arrayStrings: string[] = ['a', 'b', 'c'];
let arrayString1: Array<any> = ['a', 'b', 'c', 4];


//Enum
enum estado_civil { Solteiro, Casado, Divorciado};
enum estado_civil1 { 
    Solteiro = 'solteiro', 
    Casado = 'casado', 
    Divorciado = 'divorciado'
};

let meu_estado_civil: estado_civil = estado_civil.Solteiro;

if(meu_estado_civil == estado_civil.Solteiro) {
    console.log('sou solteiro');
}