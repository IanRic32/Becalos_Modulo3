document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
})

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString()    

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacio")
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments))

    document.getElementById('comment').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments'))|| [];

    commentSection.innerHTML = '';

    comments.forEach((comment) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario")
        comentarioSection.innerHTML = `<img src="${comment.image}" class="user-image"> <strong>${comment.name}</strong>  <br><p>${comment.timestamp}</p><br> ${comment.commentText}`;
        commentSection.appendChild(comentarioSection);
    });
}


// document.addEventListener("DOMContentLoaded", function() {
//     mostrarComentarios();
// });

// let currentEditCommentId = null;

// function postComment() {
//     const commentText = document.getElementById('comment').value;
//     const user = JSON.parse(localStorage.getItem("loggedUser"));
//     const fecha = new Date().toLocaleString();

//     if (commentText.trim() === "") {
//         alert("El comentario no puede ir vacío");
//         return;
//     }

//     const newComment = {
//         id: Date.now(), // ID único para cada comentario
//         username: user.username,
//         name: user.name,
//         image: user.image,
//         commentText: commentText,
//         timestamp: fecha
//     };

//     let comments = JSON.parse(localStorage.getItem('comments')) || [];
//     comments.push(newComment);

//     localStorage.setItem('comments', JSON.stringify(comments));

//     document.getElementById('comment').value = "";
//     mostrarComentarios();
// }

// function mostrarComentarios() {
//     const commentSection = document.getElementById('comment-section');
//     const comments = JSON.parse(localStorage.getItem('comments')) || [];
//     const user = JSON.parse(localStorage.getItem("loggedUser"));

//     commentSection.innerHTML = '';

//     comments.forEach((comment) => {
//         const comentarioSection = document.createElement("section");
//         comentarioSection.classList.add("comentario");
//         comentarioSection.innerHTML = `
//             <img src="${comment.image}" class="user-image">
//             <strong>${comment.name}</strong>
//             <br>
//             <p>${comment.timestamp}</p>
//             <br>
//             <p>${comment.commentText}</p>
//             ${comment.username === user.username ? `
//                 <button onclick="editComment(${comment.id})">Editar</button>
//                 <button onclick="deleteComment(${comment.id})">Eliminar</button>
//             ` : ''}
//         `;
//         commentSection.appendChild(comentarioSection);
//     });
// }

// function editComment(commentId) {
//     const comments = JSON.parse(localStorage.getItem('comments'));
//     const comment = comments.find(c => c.id === commentId);
//     currentEditCommentId = commentId;

//     document.getElementById('comment').value = comment.commentText;
//     document.getElementById('editModal').style.display = 'block';
// }

// function confirmEdit() {
//     const password = document.getElementById('confirmPassword').value;
//     const user = JSON.parse(localStorage.getItem("loggedUser"));

//     if (password !== user.password) {
//         alert("Contraseña incorrecta");
//         return;
//     }

//     const comments = JSON.parse(localStorage.getItem('comments'));
//     const commentIndex = comments.findIndex(c => c.id === currentEditCommentId);

//     if (commentIndex !== -1) {
//         comments[commentIndex].commentText = document.getElementById('comment').value;
//         localStorage.setItem('comments', JSON.stringify(comments));
//         mostrarComentarios();
//         closeModal();
//     }
// }

// function deleteComment(commentId) {
//     const comments = JSON.parse(localStorage.getItem('comments'));
//     const updatedComments = comments.filter(c => c.id !== commentId);
//     localStorage.setItem('comments', JSON.stringify(updatedComments));
//     mostrarComentarios();
// }

// function closeModal() {
//     document.getElementById('editModal').style.display = 'none';
//     document.getElementById('confirmPassword').value = "";
// }