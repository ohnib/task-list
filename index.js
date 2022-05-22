window.addEventListener('load', () =>{
    const form = document.querySelector('#nova-tarefa-form');
    const input = document.querySelector('#nova-tarefa-input');
    const lista_el = document.querySelector('#tarefas');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tarefa = input.value;

        if (!tarefa) {
            alert('Por favor preencha o campo!');
            return;
        }

        const tarefa_el = document.createElement('div');
        tarefa_el.classList.add('tarefa');

        const tarefa_conteudo_el = document.createElement('div');
        tarefa_conteudo_el.classList.add('conteudo');

        tarefa_el.appendChild(tarefa_conteudo_el);

        const tarefa_input_el = document.createElement('input');
        tarefa_input_el.classList.add('text');
        tarefa_input_el.type = 'text';
        tarefa_input_el.value = tarefa;
        tarefa_input_el.setAttribute('readonly', 'readonly');

        tarefa_conteudo_el.appendChild(tarefa_input_el);

        const tarefa_açao_el = document.createElement('div');
        tarefa_açao_el.classList.add('açoes');

        const tarefa_editar_el = document.createElement('button');
        tarefa_editar_el.classList.add('editar');
        tarefa_editar_el.innerHTML = 'editar';
        

        const tarefa_deletar_el = document.createElement('button');
        tarefa_deletar_el.classList.add('deletar')
        tarefa_deletar_el.innerHTML = 'deletar';

        tarefa_açao_el.appendChild(tarefa_editar_el);
        tarefa_açao_el.appendChild(tarefa_deletar_el);

        tarefa_el.appendChild(tarefa_açao_el);

        lista_el.appendChild(tarefa_el);

        input.value = '';

        tarefa_editar_el.addEventListener('click', () => {  
           if(tarefa_editar_el.innerText.toLowerCase() == 'editar'){
           
            tarefa_input_el.toggleAttribute('readonly');
            tarefa_input_el.focus();
            tarefa_editar_el.innerText = 'salvar'
        }
        else{
            tarefa_input_el.setAttribute('readonly', 'readonly');
            tarefa_editar_el.innerText = 'editar'
        }
        })

        tarefa_deletar_el.addEventListener('click', () =>{
            lista_el.removeChild(tarefa_el);
        })

    })
})

