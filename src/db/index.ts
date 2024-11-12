import { createClient } from '@supabase/supabase-js';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';
import 'dotenv/config';

// Configuration Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

// Création du client Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Configuration de la connexion PostgreSQL
const connectionString = process.env.DATABASE_URL!;

// Client SQL pour les migrations et les requêtes
const migrationClient = postgres(connectionString, { max: 1 });
const queryClient = postgres(connectionString);

// Client Drizzle pour les opérations sur la base de données
export const db = drizzle(queryClient, { schema });

// Fonction pour exécuter les migrations
export async function runMigrations() {
  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: 'drizzle/migrations'
    });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    throw error;
  }
}