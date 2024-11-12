import { supabase, db } from '../src/db/index.js';
import { users } from '../src/db/schema.js';
import { eq } from 'drizzle-orm';

async function setupAdmin() {
  const adminEmail = 'admin@ecosolidaire.org';
  const adminPassword = 'admin';

  try {
    // 1. Vérifier si l'utilisateur existe dans Supabase
    const { data: existingUser } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword
    });

    if (!existingUser?.user) {
      // Créer l'utilisateur dans Supabase
      const { data: newUser, error: signUpError } = await supabase.auth.signUp({
        email: adminEmail,
        password: adminPassword
      });

      if (signUpError) {
        throw new Error(`Erreur création Supabase: ${signUpError.message}`);
      }
    }

    // 2. Vérifier si l'utilisateur existe dans notre base de données
    const dbUser = await db.select().from(users).where(eq(users.email, adminEmail)).limit(1);

    if (dbUser.length === 0) {
      // Créer l'utilisateur dans notre base de données
      await db.insert(users).values({
        email: adminEmail,
        password: adminPassword, // En production, utiliser un hash
        role: 'admin'
      });
      console.log('Utilisateur admin créé avec succès');
    } else {
      console.log('L\'utilisateur admin existe déjà');
    }

  } catch (error) {
    console.error('Erreur lors de la configuration de l\'admin:', error);
    process.exit(1);
  }
}

setupAdmin();