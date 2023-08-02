import mysql from 'mysql'

export const db = mysql.createPool({
    host: "qa-final-db.cdlwjisxqhdd.us-east-1.rds.amazonaws.com",
    user: "qafinalbackof",
    password: "7SyDdDmIS6kixv2pZr9v",
    database: "qalojapf",
  });