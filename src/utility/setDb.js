import { toast } from "react-toastify";

const getBookIdLists = () => {
    const getIds = localStorage.getItem('list-item');

    if(getIds){
       return JSON.parse(getIds)
    }
    else{
        return [];
    }
}

const setIds = (id, bookName) => {
    const isExist = getBookIdLists();
    if(isExist.includes(id)){
        existNotify();
    }else{
        notify(bookName);
        isExist.push(id)
        localStorage.setItem('list-item', JSON.stringify(isExist));
    }
}

const notify = (bookName) => {
    toast.success(`${bookName} is successfully added`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

const existNotify = () => {
    toast.info(`Already Exist!!!  ) :`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }






export { setIds, getBookIdLists }