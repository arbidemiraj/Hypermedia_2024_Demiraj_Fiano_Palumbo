import { serverSupabaseClient } from '#supabase/server'

//PAGE 'OUR ACTIVITIES'
//Get the top 3 services

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image").eq('type', 0).eq('isTop', true).order('id');
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})