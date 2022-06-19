type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type UserAddressGeo = {
    lat: string,
    lng: string
}

type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UserAddressGeo
}

type UserCompany = {
    name: string,
    catchphrase: string,
    bs: string
}

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany
}
export type { Todo, User, UserAddress, UserAddressGeo, UserCompany }