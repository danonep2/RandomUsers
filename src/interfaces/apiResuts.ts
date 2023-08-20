interface Results{
    results: User[];
}

interface User {
    gender: string;
    name: Name;
    dob: Dob;
    id: Id;
    picture: Picture;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Dob {
    date: string;
    age: number;
}

interface Id {
    name: string;
    value: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export { User, Results }