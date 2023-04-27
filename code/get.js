async function get(url, data) {
    if(!url) throw new Error(`Please provide url...`);
    if(JSON.stringify(data) !== "{}") {
        url += '?' + new URLSearchParams(data).toString();
    } 
    try {
        const response = await fetch(url);
        if(response.status != 200) {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
        return response;  
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

get('https://jsonplaceholder.typicode.com/todos/', {id: 10})
      .then(response => response.json())
      .then(json => console.log(json))