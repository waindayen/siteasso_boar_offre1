import type { APIRoute } from 'astro';
import { supabase, db } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json();
    const { email, password } = data;
    
    // Authentification via Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (authError) {
      return new Response(JSON.stringify({ error: 'Identifiants incorrects' }), {
        status: 401
      });
    }

    if (authData.user) {
      // Vérifier le rôle dans notre base de données
      const user = await db.select().from(users).where(
        eq(users.email, email)
      ).limit(1);

      if (user.length > 0 && user[0].role === 'admin') {
        // Créer une session sécurisée
        cookies.set('admin_session', authData.session?.access_token || '', {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 // 24 heures
        });

        return new Response(JSON.stringify({ success: true }), {
          status: 200
        });
      }
    }

    return new Response(JSON.stringify({ error: 'Accès non autorisé' }), {
      status: 403
    });
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return new Response(JSON.stringify({ error: 'Erreur de connexion au serveur' }), {
      status: 500
    });
  }
};