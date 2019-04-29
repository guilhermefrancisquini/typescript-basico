let meu_nome: any = "Guilherme Francisquini";

let count = (<string>meu_nome).length;
let count1 = (meu_nome as string).length;

let obj = {
    name: 'Guilherme Francisquini',
};

(<any>obj).texto = 'School of net';
(obj as any).texto = 'School of net';

console.log(obj);

let num = 2;

let numString = num + "";

console.log(typeof numString);

let stringNum = "-234";

let num2 = +stringNum;

console.log(typeof num2);
console.log(num2);
