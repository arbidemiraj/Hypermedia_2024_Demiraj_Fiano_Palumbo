
import { serverSupabaseClient } from '#supabase/server'

//PAGE 'OUR TEAM'
//Get all data from Person 

export default defineEventHandler(async (event) => {
      const client = await serverSupabaseClient(event);
      const { data, error } = await client.from('Person').select('id, name, surname, photo');
  
      if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
      }
  
      return data;
  });