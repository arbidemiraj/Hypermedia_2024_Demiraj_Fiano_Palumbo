import { serverSupabaseClient } from '#supabase/server'

//PAGE 'SERVICES'
//Get all the services

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image, description").eq('type', false)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})