import mysql from 'mysql2'

const pool = mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    password: '9EC24c6612!',
    database: 'database',
  })
  .promise()

const query = await pool.query('SELECT * FROM blogs')

export async function CreateBlog(data) {
  data = JSON.parse(data.toString())
  if (data.blogInfo) {
    const titleF = data.blogInfo.title
    const contentF = data.blogInfo.content
    await pool.query('INSERT INTO blogs (title, text) VALUES (?, ?)', [titleF, contentF])
  }
}
