async function getAllCommunities(){
    const resp = await fetch("http://localhost:3000/communities")
    const data = await resp.json();
    displayOnDom(Community.createCommunities(data), '#communitiesList') 
}