async function getJson(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw 'shit is indeed fucked'
        return response.json();
    } catch (e) {
        console.error(e)
    }
}

export {}