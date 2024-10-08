function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase();

    if(campoPesquisa ==""){
      section.innerHTML = "<p>Palavras são vento... Diga o nome de um personagem.</p>"
      return
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.img}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações.</a>
        </div>
      `;
      }
      
      
    }
    
    if (!resultados){
      resultados = "<p>Você não sabe de nada, Jon Snow.</p>"
    }

    // Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultados;
  }