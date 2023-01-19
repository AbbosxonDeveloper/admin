export const dbFoodGet = `
    SELECT * from food
`

export const dbFootPost = `
    INSERT INTO food(title) values($1) RETURNING *
`