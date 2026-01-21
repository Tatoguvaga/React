

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const { name, age, key} = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;
console.log({name, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = (hero: Hero) => {
    return {
        keyName: 'ABC'
    }
}