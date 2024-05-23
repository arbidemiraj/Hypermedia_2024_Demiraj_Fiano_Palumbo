import { serverSupabaseClient } from '#supabase/server'


//PAGE 'PERSON'
//Get all the projects whose the current person is rsponsible for

export default defineEventHandler(async (event) => {
    const id = event.context.params.id //person id

    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image").eq('responsible', id).eq('type', true).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})