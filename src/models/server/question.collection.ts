import { IndexType, Permission } from "node-appwrite";
import { db, questionCollection } from "../name";
import {tables } from "./config"; 

export async function createQuestionCollection() {
  await tables.createTable({
    databaseId: db,
    tableId: questionCollection,
    name: questionCollection,
    permissions: [
      Permission.read("any"),
      Permission.write("user"),
      Permission.update("user"),
      Permission.delete("user"),
      Permission.create("user"),
    ],
  });
  console.log(`Question table '${questionCollection}' created successfully.`);

  // Add columns to the table
  await Promise.all([
    tables.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "title",
      size: 100,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "content",
      size: 10000,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "authorId",
      size: 50,
      required: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "tags",
      size: 50,
      required: true,
      array: true,
    }),
    tables.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "attachmentId",
      size: 50,
      required: false,
    }),
  ]);
  console.log("Question columns created");

  //create indexes 
  await Promise.all([
    tables.createIndex({
      databaseId: db,
      tableId: questionCollection,
      key: "title",
      type: IndexType.Unique,
      columns: ["title"],
    }),
    tables.createIndex({
      databaseId: db,
      tableId: questionCollection,
      key: "content",
      type: IndexType.Unique,
      columns: ["content"],
    }),
  ]);
  console.log("Question indexes created");
}