import { db } from "../name";
import {createAnswerCollection} from "./answer.collection";
import {createCommentCollection} from "./comment.collection";
import {createQuestionCollection} from "./question.collection";
import {createVoteCollection} from "./vote.collection";

import { tables } from "./config";

export default async function getOrCreateDB(){
  try {
    await tables.getTable({databaseId: db, tableId: db})
    console.log("Database connection")
  } catch (error) {
    try {
      await tables.createTable({
        databaseId: db,
        tableId: db,
        name: db,
      });
      console.log("database created")
      //create collections
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),

      ])
      console.log("Collection created")
      console.log("Database connected")
    } catch (error) {
      console.log("Error creating databases or collection", error)
    }
  }

  return tables
}