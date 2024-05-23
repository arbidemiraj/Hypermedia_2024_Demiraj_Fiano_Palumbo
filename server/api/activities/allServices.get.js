import { serverSupabaseClient } from '#supabase/server'

//PAGE 'SERVICES'
//Get all the services

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image").eq('activity_id', id).eq('type', false)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})