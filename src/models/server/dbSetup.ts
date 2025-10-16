import { db } from "../name";
import { createAnswerCollection } from "./answer.collection";
import { createCommentCollection } from "./comment.collection";
import { createQuestionCollection } from "./question.collection";
import { createVoteCollection } from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB() {
  try {
    await databases.get({ databaseId: db });
    console.log("Database already exists");
  } catch (error) {
    try {
      await databases.create({
        databaseId: db,
        name: db,
      });
      console.log("Database created");
      //create collections
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
      ]);
      console.log("Collections created");
      console.log("Database setup complete");
    } catch (error) {
      console.log("Error creating database or collections:", error);
    }
  }

  return databases;
}
