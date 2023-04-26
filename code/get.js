async function get(url, data) {
    if(!url) console.error(`Please provide url. Url: ${url}`);
    if(JSON.stringify(data) !== "{}") {
        url += '?' + new URLSearchParams(data).toString();
    } 
    try {
        return await fetch(url);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

get('https://jsonplaceholder.typicode.com/todos/', {id: 10})
      .then(response => response.json())
      .then(json => console.log(json))