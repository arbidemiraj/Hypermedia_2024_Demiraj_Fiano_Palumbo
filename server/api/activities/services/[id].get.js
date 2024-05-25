import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {    
    const id = event.context.params.id 
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image, description").eq('id', id).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})