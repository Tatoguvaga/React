const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ , , trunks] = characterNames;

console.log({trunks});

const returnArrayFn = () => {
     return ['ABC ', 123] as const; //con (as const) quiere decirle a typescrip que no solo es readonly si no que primero va un string al inicio y numeros al final
};

const [ letters, numbers] = returnArrayFn();

console.log (letters + numbers);


//Tarea

const useState = (value:string) => {
    return [value, (newValue:string) => {
        console.log(newValue);
        },
    ] as const;
};

// function useState (a:string) {
//     return [a, (b:string) => console.log(b)] as const;
// };

const [name, setName] = useState('Goku');

console.log (name);
setName ('Vegeta');

