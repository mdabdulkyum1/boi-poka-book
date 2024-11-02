const getBookIdLists = () => {
    const getIds = localStorage.getItem('list-item');

    if(getIds){
       return JSON.parse(getIds)
    }
    else{
        return [];
    }
}



const setIds = id => {
    // console.log(id)
    const isExist = getBookIdLists();
    console.log(isExist)
    if(isExist.includes(id)){
        console.log("exist already");
    }else{
        isExist.push(id)
        localStorage.setItem('list-item', JSON.stringify(isExist));
    }
}

export { setIds }