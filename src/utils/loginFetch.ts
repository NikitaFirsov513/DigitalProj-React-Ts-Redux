


export default async function loginFetch(email: string, pass: string) {

    const req = await fetch(`http://localhost:80/digital/hs/category/users/login`,
        {
            method: 'POST',
            body:
                JSON.stringify({
                    "Email": email,
                    "Pass": pass
                })
        });
    return req

}