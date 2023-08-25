import { faker } from '@faker-js/faker';

export type Person = {
    firstName: string
    lastname: string
}

const range = (len: number) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
};

const newPerson = (): Person => ({
        firstName: faker.person.firstName(),
        lastname: faker.person.lastName(),
    });

// export
export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!;
        return range(len).map((d):Person => ({
                ...newPerson(),
            }));
    };
    return makeDataLevel();
}
