import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('---- LOGOUT REQUEST ----');
  console.log('Cookies antes do logout:', request.cookies.getAll().map(c => c.name).join(', '));
  
  // Criar a resposta de sucesso
  const response = NextResponse.json({
    message: 'Logout realizado com sucesso',
  });
  
  // Definir um cookie com o mesmo nome, mas com expiração imediata para removê-lo
  const cookieExpiry = 'auth_token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0';
  console.log('Configurando cookie para expirar:', cookieExpiry);
  
  response.headers.set('Set-Cookie', cookieExpiry);
  console.log('Header de cookie definido para expirar auth_token');
  
  return response;
} 