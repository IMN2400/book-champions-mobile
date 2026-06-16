
// export const addToMyBooks = ({id}) => {
//     let myBooks = localStorage.getItem('MyBooks') | [];
//     myBooks = JSON.parse(myBooks);
//     myBooks.push(id);
//     myBooks = JSON.stringify(myBooks);
//     localStorage.setItem('MyBooks', myBooks);
//     let flag = myBooks === localStorage.getItem('MyBooks');
//     return flag;
// }

// export const removeFromMyBooks = ({id}) => {
//     let myBooks = localStorage.getItem('MyBooks') | [];
//     myBooks = JSON.parse(myBooks);
//     myBooks.shift((myBooks.filter((item)=>item===id)), 1);
//     myBooks = JSON.stringify(myBooks);
//     localStorage.setItem('MyBooks', myBooks);
//     let flag = myBooks === localStorage.getItem('MyBooks');
//     return flag;
// }


