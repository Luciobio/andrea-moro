import { envs } from "@/config";
import { connect, connection } from "mongoose";

export class MongoDatabase {
  static async connect() {
    try {
      await connect(envs.MONGODB_URI);
      console.info("🔌 DB connected");
      return true;
    } catch (err) {
      console.error("Error in MongoDB connect. Details: ", err);
      throw err;
    }
  }
  static async close() {
    try {
      await connection.close();
      console.info(" DB closed");
      return true;
    } catch (err) {
      console.error("Error in MongoDB connect. Details: ", err);
      throw err;
    }
  }
}
