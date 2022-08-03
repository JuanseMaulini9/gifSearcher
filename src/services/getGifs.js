const apiKey = `THGJ45V0ESgCr0PtW6UB3HSu3Ms4tK3J`;

export default async function getGifs({ keyword = "spiderman" } = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  const res = await fetch(apiURL);
  const response = await res.json();
  const { data } = response;
  const gifs = data.map((image) => {
    const {images, title, id} = image
    const {url} = images.downsized_medium;
    return {title, id, url}
  })
  return gifs;
}
