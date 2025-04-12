import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { Database } from '../../../lib/supabase/db.types'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    
    if (!code) {
      return NextResponse.redirect(`${requestUrl.origin}/login?error=no_code`)
    }

    const supabase = createRouteHandlerClient<Database>({ cookies })
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('Auth error:', error.message)
      return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_failed`)
    }

    return NextResponse.redirect(requestUrl.origin)
    
  } catch (error: any) {
    console.error('Unexpected error:', error)
    return NextResponse.redirect(`${new URL(request.url).origin}/login?error=unexpected`)
  }
} 