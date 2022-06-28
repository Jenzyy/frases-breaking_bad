const queryApi = async () => {
  const resultado = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const dataApi = await resultado.json();
  return dataApi[0]
}
export default queryApi