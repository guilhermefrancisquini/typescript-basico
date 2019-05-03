const soma = function (x: number, y: number): number {
    return x + y;
};

let num = soma(2, 3);

const soma1 = (x: number, y: number): number => x + y;

let funcao = (name: string) => {
    return `Guilherme Francisquini ${name}`
};

let funcao1 = name => `Guilherme Francisquini ${name}`;

let funcaoDefaultParameters = (firstname, last_name = 'Francisquini') => {

};

funcaoDefaultParameters('Guilherme');

let funcaoOptionalParameters = (firstname: string, last_name?: string) => {
    console.log(last_name);
};

funcaoOptionalParameters('Guilherme');