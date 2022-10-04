import { Database } from "sqlite3"

const db = new Database(
  "db.sqlite",
  err => {
    if (err)
      throw new Error(`Erro ao conectar no banco de dados: ${err.message}`)

    db.run(
      `
        CREATE TABLE IF NOT EXISTS user (
          id        INTEGER PRIMARY KEY AUTOINCREMENT,
          name      TEXT, 
          email     TEXT UNIQUE, 
          password  TEXT
        )
      `,
      err => {
        if (err) 
          throw new Error(`Erro ao criar tabela 'user': ${err.message}`)

        const insert = 'INSERT OR IGNORE INTO user (name, email, password) VALUES (?,?,?)'
        db.run(insert, ["admin", "admin@example.com", "123132"])
        db.run(insert, ["user", "user@example.com", "123123"])
      }
    )
  }
)

export default db