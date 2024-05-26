import { serverSupabaseClient } from '#supabase/server'

//PAGE 'PROJECTS'
//Get all the projects

export default defineEventHandler(async (event) => {    
    const id = event.context.params.id 
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, description, image").eq('id', id).single();

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data;
})