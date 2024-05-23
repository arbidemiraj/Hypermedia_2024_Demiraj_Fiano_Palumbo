// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.SUPABASE_URL
  const supabaseKey = config.public.SUPABASE_KEY

  const supabase = createClient(supabaseUrl, supabaseKey)
  nuxtApp.provide('supabase', supabase)
})
