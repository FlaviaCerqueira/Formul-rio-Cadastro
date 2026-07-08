const cepInput = document.getElementById('cep');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const cargoSelect = document.getElementById('cargo');

// Elementos do endereço
const secaoEndereco = document.getElementById('secao-endereco');
const ruaInput = document.getElementById('rua');
const numeroInput = document.getElementById('numero');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const cepErro = document.getElementById('cepErro');


cepInput.addEventListener('keyup', verificarEBuscarCEP);
cepInput.addEventListener('blur', verificarEBuscarCEP);

function verificarEBuscarCEP() {
  let cep = cepInput.value.replace(/\D/g, '');

  if (cep.length === 8) {
    if (cepInput.dataset.ultimoCep === cep) return;
    cepInput.dataset.ultimoCep = cep;

    cepErro.style.color = "#666";
    cepErro.textContent = "Buscando endereço...";

    // Requisição para a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
         
          ruaInput.value = data.logradouro;
          bairroInput.value = data.bairro;
          cidadeInput.value = `${data.localidade} - ${data.uf}`;

          cepErro.textContent = "";

         
          secaoEndereco.style.display = 'block';
          numeroInput.required = true;
          numeroInput.focus();
        } else {
          ocultarELimparEndereco();
          cepErro.style.color = "red";
          cepErro.textContent = "CEP não encontrado.";
        }
      })
      .catch(error => {
        ocultarELimparEndereco();
        cepErro.style.color = "red";
        cepErro.textContent = "Erro ao buscar o CEP.";
        console.error(error);
      });
  } else {
    ocultarELimparEndereco(); cepInput.removeAttribute('data-ultimo-cep');
    if (cep.length > 0 && cep.length < 8) {
      cepErro.style.color = "red";
      cepErro.textContent = "O CEP deve ter 8 dígitos.";
    } else {
      cepErro.textContent = "";
    }
  }
}

function ocultarELimparEndereco() {
  secaoEndereco.style.display = 'none';
  ruaInput.value = "";
  numeroInput.value = "";
  bairroInput.value = "";
  cidadeInput.value = "";
  numeroInput.required = false; 
}

document.getElementById('cadastroForm').addEventListener('submit', (e) => {  e.preventDefault();

  const dadosFuncionario = {
    nome: nomeInput.value,
    idade: idadeInput.value,
    cargo: cargoSelect.value,
    cep: cepInput.value,
    rua: ruaInput.value,
    numero: numeroInput.value,
    bairro: bairroInput.value,
    cidade: cidadeInput.value
  };

  console.log("Funcionário Cadastrado com Sucesso:", dadosFuncionario);
  alert(`Sucesso! ${dadosFuncionario.nome} cadastrado.`);
});