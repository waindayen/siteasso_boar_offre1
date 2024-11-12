import type { APIRoute } from 'astro';
import { createClient } from '@libsql/client';

const db = createClient({
  url: 'file:local.db',
});

export const GET: APIRoute = async ({ params }) => {
  const { table } = params;
  
  try {
    const result = await db.execute(`SELECT * FROM ${table}`);
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};