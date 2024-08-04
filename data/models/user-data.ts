import { UserData } from '../interfaces/user.i';

import { faker } from '@faker-js/faker';

// export const defaultUser = () => new User({
//     email: User.email,
//     password: User.password
// })

export function newUser(): UserData {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName }),
        password: faker.internet.password()
    }
}




