var addPostButton = document.querySelector('#add-post-btn');
var createPostArea = document.querySelector('#create-post-form');
var closeModalButton = document.querySelector('#close-modal-btn');


addPostButton.addEventListener('click', openCreatePostModal);
closeModalButton.addEventListener('click', closeCreatePostModal);

function openCreatePostModal() {
  createPostArea.style.display = 'block';
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}