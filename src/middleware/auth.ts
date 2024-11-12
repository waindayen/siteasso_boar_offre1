import { defineMiddleware } from 'astro/middleware';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith('/admin') && !context.url.pathname.includes('/login')) {
    const sessionId = context.cookies.get('admin_session')?.value;
    
    if (!sessionId) {
      return context.redirect('/admin/login');
    }
    
    try {
      // Vérifier que l'utilisateur existe et est admin
      const user = await db.query.users.findFirst({
        where: and(
          eq(users.id, parseInt(sessionId)),
          eq(users.role, 'admin')
        )
      });
      
      if (!user) {
        return context.redirect('/admin/login');
      }
    } catch (error) {
      console.error('Erreur de vérification de session:', error);
      return context.redirect('/admin/login');
    }
  }
  
  return next();
});