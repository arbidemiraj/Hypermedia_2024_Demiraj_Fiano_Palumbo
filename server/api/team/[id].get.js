import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

//PAGE 'PERSON'
//Get data from Person by requested id

export default defineEventHandler(async (event) => {

    const id = event.context.params.id
    
    const client = createServerSupabaseClient(event)

    const { data, error } = await client.from('Person').select("id, name, surname, email, cv").eq('person_id', id).limit(1).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})