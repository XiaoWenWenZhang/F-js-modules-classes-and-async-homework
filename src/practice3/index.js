export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", { method: "GET" })
    .then((Response) => {
      return Response.json();
    })
    .then((jsonData) => {
      const { origin, author, content } = jsonData;
      const result = [];
      result.push(origin);
      result.push(author);
      result.push(content);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};

// export default getPoetry;
