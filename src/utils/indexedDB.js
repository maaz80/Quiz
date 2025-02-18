import { openDB } from "idb";

// Database names for our quiz application
const DB_NAME = "quizDB";
const STORE_NAME = "quizAttempts";

// Initializing the IndexedDB database
export const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      // create a new store if it does not exist yet
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        // Using auto-incrementing IDs to make each attempt unique
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
  return db;
};

// Save a new quiz attempt to the database
export const saveAttempt = async (attempt) => {
  const db = await initDB();
  // sTart a new data to safely write the data
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.add(attempt);
  // Wait for the data to complete before moving on
  await tx.done;
};

// Retrieve all previous quiz attempts from the database
export const getAttempts = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
