import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Initialize database connection
async function getDb() {
  return open({
    filename: ':memory:', // In-memory database for WebContainer compatibility
    driver: sqlite3.Database
  });
}

// Initialize database schema
async function initDb() {
  const db = await getDb();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      user_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );

    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      post_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (post_id) REFERENCES posts (id),
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);

  return db;
}

// Database operations
export async function createUser(email, name) {
  const db = await getDb();
  return db.run('INSERT INTO users (email, name) VALUES (?, ?)', [email, name]);
}

export async function getUser(id) {
  const db = await getDb();
  return db.get('SELECT * FROM users WHERE id = ?', [id]);
}

export async function createPost(title, content, userId) {
  const db = await getDb();
  return db.run('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId]);
}

export async function getPosts() {
  const db = await getDb();
  return db.all(`
    SELECT posts.*, users.name as author
    FROM posts 
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.created_at DESC
  `);
}

export async function createComment(content, postId, userId) {
  const db = await getDb();
  return db.run('INSERT INTO comments (content, post_id, user_id) VALUES (?, ?, ?)', [content, postId, userId]);
}

export async function getComments(postId) {
  const db = await getDb();
  return db.all(`
    SELECT comments.*, users.name as author
    FROM comments
    JOIN users ON comments.user_id = users.id
    WHERE comments.post_id = ?
    ORDER BY comments.created_at DESC
  `, [postId]);
}

// Initialize database on import
initDb().catch(console.error);

export default { createUser, getUser, createPost, getPosts, createComment, getComments };