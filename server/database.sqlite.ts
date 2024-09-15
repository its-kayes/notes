export const getData = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return data.json();
  } catch (error) {
    throw new Error(error as string);
  }
};

// import * as SQLite from "expo-sqlite";
// const db = await SQLite.openDatabaseAsync("ura");

// // `execAsync()` is useful for bulk queries when you want to execute altogether.
// // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
// await db.execAsync(`
// PRAGMA journal_mode = WAL;
// CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
// INSERT INTO test (value, intValue) VALUES ('test1', 123);
// INSERT INTO test (value, intValue) VALUES ('test2', 456);
// INSERT INTO test (value, intValue) VALUES ('test3', 789);
// `);

// // `runAsync()` is useful when you want to execute some write operations.
// const result = await db.runAsync(
//   "INSERT INTO test (value, intValue) VALUES (?, ?)",
//   "aaa",
//   100
// );

// console.log(result.lastInsertRowId, result.changes);

// await db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", 999, "aaa"); // Binding unnamed parameters from variadic arguments
// await db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", [999, "aaa"]); // Binding unnamed parameters from array
// await db.runAsync("DELETE FROM test WHERE value = $value", { $value: "aaa" }); // Binding named parameters from object

// // `getFirstAsync()` is useful when you want to get a single row from the database.
// export const firstRow = await db.getFirstAsync("SELECT * FROM test");
// // console.log(firstRow.id, firstRow.value, firstRow.intValue);

// // `getAllAsync()` is useful when you want to get all results as an array of objects.
// const allRows = await db.getAllAsync("SELECT * FROM test");
// // for (const row of allRows) {
// //   console.log(row.id, row.value, row.intValue);
// // }

// // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
// // for await (const row of db.getEachAsync("SELECT * FROM test")) {
// //   console.log(row.id, row.value, row.intValue);
// // }
