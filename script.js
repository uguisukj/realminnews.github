document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Curtido';
        });
    });

    document.querySelectorAll('.comment').forEach(button => {
        button.addEventListener('click', () => {
            const comments = button.parentElement.nextElementSibling;
            comments.style.display = comments.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.comments button').forEach(button => {
        button.addEventListener('click', () => {
            const commentText = button.previousElementSibling.value;
            if (commentText) {
                const commentList = button.nextElementSibling;
                const commentElement = document.createElement('p');
                commentElement.innerHTML = `<strong>Você:</strong> ${commentText}`;
                commentList.appendChild(commentElement);
                button.previousElementSibling.value = '';
            }
        });
    });

    document.getElementById('admin-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'admin.html';
    });

    document.getElementById('journalist-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'journalist.html';
    });

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Formulário enviado!');
        });
    });

    // Adiciona nova postagem
    document.querySelector('.journalist-section form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = e.target.querySelector('input').value;
        const content = e.target.querySelector('textarea').value;
        const author = 'Jornalista'; // Você pode adicionar uma maneira de obter o nome do jornalista logado

        if (title && content) {
            // Adiciona a postagem ao índice
            const noticiasSection = document.querySelector('.noticias');
            const newArticle = document.createElement('article');
            newArticle.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
                <p><em>Autor: ${author}</em></p>
                <div class="interaction">
                    <span class="like">Curtir</span>
                    <span class="comment">Comentários</span>
                </div>
                <div class="comments">
                    <textarea placeholder="Digite seu comentário"></textarea>
                    <button>Enviar</button>
                    <div class="comment-list"></div>
                </div>
            `;
            noticiasSection.appendChild(newArticle);

            // Adiciona a postagem às "Minhas Postagens"
            const minhasPostagensSection = document.querySelector('.journalist-section ul');
            const newPost = document.createElement('li');
            newPost.innerHTML = `
                <h4>${title}</h4>
                <p>${content}</p>
                <button>Editar</button>
                <button>Excluir</button>
            `;
            minhasPostagensSection.appendChild(newPost);

            // Limpa o formulário
            e.target.querySelector('input').value = '';
            e.target.querySelector('textarea').value = '';

            alert('Postagem publicada com sucesso!');
        }
    });
});
