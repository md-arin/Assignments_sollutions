import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

export async function createTodo(userId: number, title: string, description: string) {

    await client.query(`
    INSERT INTO todos (user_id, title, description) 
    VALUES (${userId},'${title}', '${description}')
    
    `);
    
    const res = await client.query(`
        SELECT * FROM todos
        WHERE  user_id=${userId} AND title='${title}'
    `)
    return res.rows[0];
}



/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {t
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.query(`
        UPDATE todos
        SET done =true
        WHERE id = ${todoId}
    `)

    const res = await client.query(`
        SELECT * FROM todos
        WHERE id = ${todoId}
    `)
    return res.rows[0];

}


/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const res = await client.query(`
        SELECT * FROM todos
        WHERE user_id = ${userId}
    `)
    return res.rows;
}