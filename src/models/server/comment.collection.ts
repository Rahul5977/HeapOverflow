//comment collection
import { Permission } from "node-appwrite";
import { db, commentCollection } from "../name";
import { tables } from "./config";

export async function createCommentCollection() {
  await tables.createTable({
    databaseId: db,
    tableId: commentCollection,
    name: commentCollection,
    permissions: [
      Permission.read("any"),
      Permission.write("user"),
      Permission.update("user"),
      Permission.delete("user"),
      Permission.create("user"),
    ],
  });
  console.log(`Comment table '${commentCollection}' created successfully.`);

  // Add columns to the table
  await Promise.all([
    tables.createStringColumn({
      databaseId: db,
      tableId: commentCollection,
      key: "typeId",
      size: 50,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: commentCollection,
      key: "content",
      size: 5000,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: commentCollection,
      key: "authorId",
      size: 50,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: commentCollection,
      key: "attachmentId",
      size: 50,
      required: false,
    }),
  ]);
  console.log("Comment columns created");
}