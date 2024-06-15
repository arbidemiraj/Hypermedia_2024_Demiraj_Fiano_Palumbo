
export default function handleFetchError(data: Ref<any>, errorCode: number) {
    let errorMessage = '';
    if (!data.value) {
        errorMessage = 'This page does not exist';
        throw createError({ statusCode: 404, message: errorMessage });
    } else {
        errorMessage = 'Error while fetching data from the database ';
        throw createError({ statusCode: errorCode, message: errorMessage });
    }
    
}