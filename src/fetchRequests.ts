import { Todo, User } from "./types";

async function getJson(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw 'shit is indeed fucked'
        return response.json();
    } catch (e) {
        console.error(e)
    }
}

export const [userData, todoData] = await Promise.all(
    ['users', 'todos'].map(f => getJson(`https://jsonplaceholder.typicode.com/${f}`))
    ) as [User[], Todo[]];