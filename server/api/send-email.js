export default eventHandler(async (event) => {
  const body = await readBody(event);

  console.log('--> the body is: ', body);

  const data = { status: 200, message: 'Mail sent' };
  return data;
});
