//write answers collection 
import { Permission } from "node-appwrite";
import { db, answerCollection } from "../name";
import { tables } from "./config";

export async function createAnswerCollection() {
  await tables.createTable({
    databaseId: db,
    tableId: answerCollection,
    name: answerCollection,
    permissions: [
      Permission.read("any"),
      Permission.write("user"),
      Permission.update("user"),
      Permission.delete("user"),
      Permission.create("user"),
    ],
  });
  console.log(`Answer table '${answerCollection}' created successfully.`);

  // Add columns to the table
  await Promise.all([
    tables.createStringColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "questionId",
      size: 50,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "content",
      size: 10000,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "authorId",
      size: 50,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "attachmentId",
      size: 50,
      required: false,
    }),
    tables.createIntegerColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "upvotes",
      required: true,
      xdefault: 0,
    }),
    tables.createIntegerColumn({
      databaseId: db,
      tableId: answerCollection,
      key: "downvotes",
      required: true,
      xdefault: 0,
    }),
  ]);
  console.log("Answer columns created");
}

// No indexes for now, but can be added later as needed