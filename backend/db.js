import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret123",
  database: "mern_dashboard",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});
