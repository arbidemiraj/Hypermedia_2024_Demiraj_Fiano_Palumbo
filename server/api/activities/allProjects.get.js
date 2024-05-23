import { serverSupabaseClient } from '#supabase/server'

//PAGE 'PROJECTS'
//Get all the projects

export default defineEventHandler(async (event) => {    
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image").eq('type', true)

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})