import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

//PAGE 'OUR ACTIVITIES'
//Get the top 3 projects

export default defineEventHandler(async (event) => {
    
    const id = event.context.params.id //person id
    
    const client = createServerSupabaseClient(event)

    const { data, error }= await client.from('Activity').select("id, name, image, description").eq('responsible', id).eq('type', 1).limit(3)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})