// const API = 'https://jsonplaceholder.typicode.com/todos/1';
// const ol = document.getElementById('ol');
// const request = new XMLHttpRequest();
// const h1 = document.getElementById('h1');

// request.addEventListener('readystatechange', () => {
//     if (request.readyState !== 4) { 
//         console.log(request);
//         h1.textContent = "Loading...";
//     } else if (request.readyState == 4) {
//         const data = JSON.parse(request.responseText);
//         api(data);
//         h1.textContent = "done";
//     }
// });

// request.open('GET', API);
// request.send();

// function api(todo) {
//     const newTodo = todo.slice(0,20);
//     newTodo.forEach((todos) => {
//         const li = document.createElement('li');
//         let pTitle = document.createElement('h5');
//         let pId = document.createElement('p');
//         let pComp = document.createElement('h6');

//         pTitle.textContent = todos.title;
//         pId.textContent = todos.id;
//         pComp.textContent = todos.completed;
//         li.append(pTitle, pId, pComp);
//         ol.appendChild(li);
//     });
// }
// const API = 'https://jsonplaceholder.typicode.com/todos';
//         const ol = document.getElementById('ol');
//         const request = new XMLHttpRequest();
//         const h1 = document.getElementById('h1');

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState !== 4) { 
//                 console.log(request);
//                 h1.textContent = "Loading...";
//             } else if (request.readyState === 4) {
//                 if (request.status === 200) { 
//                     const data = JSON.parse(request.responseText);
//                     api(data);
//                     h1.textContent = "Done";
//                 }
//             }
//         });

//         request.open('GET', API);
//         request.send();

//         function api(todo) {
//             const li = document.createElement('li');
//             const newTodo = todo.slice(0,20)
//             li.textContent = `${newTodo.id} , ${newTodo.title}`;
//             ol.appendChild(li);
//         }

// const API = 'https://jsonplaceholder.typicode.com/todos/1';
// const ol = document.getElementById('ol');
// const request = new XMLHttpRequest();
// const h1 = document.getElementById('h1');

// request.addEventListener('readystatechange', () => {
//     if (request.readyState !== 4) {
//         console.log(request);
//         h1.textContent = "Loading...";
//     } else if (request.readyState == 4) {
//         const data = JSON.parse(request.responseText);
//         api(data);
//         h1.textContent = "done";
//     }
// });

// request.open('GET', API);
// request.send();

// function api(todo) {
//     const newTodo = todo.slice(0, 20);
//     newTodo.forEach((todos) => {
//         const li = document.createElement('li');
//         let pTitle = document.createElement('h5');
//         let pId = document.createElement('p');
//         let pComp = document.createElement('h6');

//         pTitle.textContent = todos.title;
//         pId.textContent = todos.id;
//         pComp.textContent = todos.completed;
//         li.append(pTitle, pId, pComp);

//         ol.appendChild(li);
//     });
// }
// const input = document.querySelector('.form-control');
// const todo = document.querySelector('.todo');
// const API = 'https://jsonplaceholder.typicode.com/todos';
// const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const responseData = JSON.parse(xhr.responseText);
//     responseData.forEach(item => {
//       let card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//         <h4>completed: ${item.completed}</h4>
//         <p>id: ${item.id}</p>
//         <h4>title: ${item.title}</h4>
//         <p>userID: ${item.userId}</p>
//       `;
//       todo.appendChild(card);
//     });
//   }
// });
// input.addEventListener('input', () => {
// });
// xhr.open('GET', API);
// xhr.send();

const input = document.querySelector('.form-control');
const todo = document.querySelector('.todo');
const API = 'https://jsonplaceholder.typicode.com/todos';
const xhr = new XMLHttpRequest();
const btn = document.querySelector('.btn')

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const responseData = JSON.parse(xhr.responseText);
    const userValue = input.value;
    const filter = responseData.filter(item => {
      return item.id === parseInt(userValue) ;
    });
    todo.innerHTML = '';
    filter.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h4>completed: ${item.completed}</h4>
        <p>id: ${item.id}</p>
        <h4>title: ${item.title}</h4>
        <p>userID: ${item.userId}</p>
        
      `;
      todo.appendChild(card);
      btn.addEventListener('click' , () =>{
        card.innerHTML = ''
      });
    });
  }
});

input.addEventListener('input', () => {

  xhr.open('GET', API);
  xhr.send();
});
