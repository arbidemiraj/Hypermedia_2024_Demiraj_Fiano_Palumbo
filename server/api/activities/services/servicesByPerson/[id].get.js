import { serverSupabaseClient } from '#supabase/server'


//PAGE 'PERSON'
//Get all the services whose the current person is rsponsible for

export default defineEventHandler(async (event) => {
    const person = event.context.params.id; //person id

    const client = await serverSupabaseClient(event);

    const { data, error } = await client.from('Activity').select("id, name, image").eq('type', false).eq('responsible', person).single();
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message});
    }
    
    return data;
})