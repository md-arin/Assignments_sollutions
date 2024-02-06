import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */


export async function createUser(username: string, password: string, name: string) {
    
    const res = await client.query(`
        INSERT into users (username,password,name)
        VALUES ( '${username}', '${password}', '${name}' )    
    `)

    return res.rows[0];
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const res = await client.query(`
        SELECT * FROM users WHERE id= ${userId}
    `)

    return res.rows[0];
}
