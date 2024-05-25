import { serverSupabaseClient } from '#supabase/server'

//PAGE 'PERSON'
//Get data from Person by requested id

export default defineEventHandler(async (event) => {

    const id = event.context.params.id
    const client = await serverSupabaseClient(event)

    const { data, error } = await client.from('Person').select("id, name, surname, mail, birthdate, photo, cv").eq('id', id).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})

