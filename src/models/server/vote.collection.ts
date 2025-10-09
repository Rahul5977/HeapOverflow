//voteCollection.ts
import { Permission } from "node-appwrite";
import { db, voteCollection } from "../name";
import { tables } from "./config";

export async function createVoteCollection() {
    // Creating Collection
    await tables.createTable({
        databaseId: db,
        tableId: voteCollection,
        name: voteCollection,
        permissions: [
            Permission.create("users"),
            Permission.read("any"),
            Permission.read("users"),
            Permission.update("users"),
            Permission.delete("users"),
        ],
    });
    console.log("Vote Collection Created");

    // Creating Attributes
    await Promise.all([
        tables.createEnumColumn({
            databaseId: db,
            tableId: voteCollection,
            key: "type",
            elements: ["question", "answer"],
            required: true,
        }),
        tables.createStringColumn({
            databaseId: db,
            tableId: voteCollection,
            key: "typeId",
            size: 50,
            required: true,
        }),
        tables.createEnumColumn({
            databaseId: db,
            tableId: voteCollection,
            key: "voteStatus",
            elements: ["upvoted", "downvoted"],
            required: true
        }),
        tables.createStringColumn({
            databaseId: db,
            tableId: voteCollection,
            key: "votedById",
            size: 50,
            required: true
        }),
    ]);
    console.log("Vote Attributes Created");
}