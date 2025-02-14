//https://mindicador.cl/api/uf

export async function getUf() {
  const response = await fetch("https://mindicador.cl/api/uf");
  const data = await response.json();
  return data;
}
