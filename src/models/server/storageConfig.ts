//storage.collection.ts
import { IndexType, Permission } from "node-appwrite";
import {questionAttachmentBucket } from "../name";
import {storage } from "./config";
import { log } from "console";

export async function createQuestionAttachmentBucket() {
    //get bucket
    try {
        //get bucket
        const bucket = await storage.getBucket({bucketId: questionAttachmentBucket});
        log("Bucket already exists:", bucket);
    } catch (error) {
        // If the bucket does not exist, create it
        log("Bucket does not exist, creating...");
        try {
            await storage.createBucket({
                bucketId: questionAttachmentBucket,
                name: questionAttachmentBucket,
                permissions: [
                    Permission.create("users"),
                    Permission.read("any"),
                    Permission.read("users"),
                    Permission.update("users"),
                    Permission.delete("users"),
                ],
                fileSecurity: false,
                maximumFileSize: undefined,
                allowedFileExtensions: ["jpg", "png", "gif", "jpeg", "webp", "heic"]
            });

            console.log("Storage Created");
            console.log("Storage Connected");
        } catch (createError) {
            console.error("Error creating bucket:", createError);
        }
    }
}