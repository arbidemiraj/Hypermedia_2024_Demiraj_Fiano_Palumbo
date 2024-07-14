
export default function handleFetchError(data, errorCode) {
    let errorMessage = '';
    if (!data.value) {
        errorMessage = 'Oops! The page you were looking for seems inexistent...';
        throw createError({ statusCode: 404, message: errorMessage });
    } else {
        errorMessage = 'There was an error catching a value from the database... Try again later!';
        throw createError({ statusCode: errorCode, message: errorMessage });
    }
    
}