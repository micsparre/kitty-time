// calls cat api and returns cat image url
export async function CatCall(): Promise<CatResponse[]> {
    const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'x-api-key':'5e1f1e0e-0abc-4bea-9160-28ef0f041d63'}
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&size=small', { headers} );
    return await response.json() as CatResponse[];
}

export type CatResponse = {
    id: string,
    url: string,
    width: number,
    height: number
}