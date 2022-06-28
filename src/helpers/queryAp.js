const queryApi = async () => {
  const resultado = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const frase = await resultado.json();
  console.log(...frase)
}
export default queryApi