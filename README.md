Avaliação Técnica — Estágio SESI

Olá! Este repositório contém a minha entrega para a avaliação técnica de estágio do SESI.

O objetivo principal era estruturar um frontend capaz de gerenciar dados de funcionários e integrar o sistema a uma API pública para otimizar a experiência do usuário. Abaixo, explico brevemente como organizei o projeto.

💻 Tecnologias que utilizei

Para manter a aplicação leve, rápida e focada estritamente no ecossistema do frontend, utilizei:

HTML5: Para a estruturação semântica do formulário e dos campos de dados.
CSS3: Para a estilização visual, garantindo um layout responsivo, limpo e agradável.
JavaScript (ES6): Para o controle de eventos, validação dos campos e inteligência da página.
API ViaCEP: Integração assíncrona para busca e preenchimento automático de endereços de forma gratuita e pública.

🧠 Como eu pensei o projeto

O desafio exigia a coleta de dados básicos (Nome, Idade, Cargo e CEP) com regras específicas de usabilidade. Desenvolvi a solução focando em duas frentes de experiência do usuário (UX):

Seleção de cargos simplificada: Conforme solicitado, os cargos (Estagiário, Assistente Administrativo e Advogado) foram estruturados em um campo de seleção rápida (<select>), permitindo que o avaliador escolha e clique com facilidade.

Exibição dinâmica do endereço (Interface Limpa): Em vez de deixar o formulário poluído com campos vazios, a seção que contém Rua, Número, Bairro e Cidade fica completamente oculta por padrão.

O JavaScript monitora o campo de CEP. Assim que o usuário digita os 8 dígitos válidos, o sistema faz uma requisição em segundo plano (Fetch API) para o ViaCEP.

Se o CEP for válido, o bloco de endereço aparece na tela em um passe de mágica, preenchendo automaticamente a Rua, Bairro e Cidade (configurados como readonly para evitar erros de digitação do usuário).

O foco do teclado é automaticamente direcionado para o campo Número, que passa a ser obrigatório apenas se o endereço for exibido. Se o CEP for apagado ou alterado para um formato inválido, a seção se esconde novamente.

📂 Estrutura das pastas
Para demonstrar boas práticas de mercado e manter o código organizado (desmembrado), separei o projeto na seguinte estrutura:

Plaintext
├── index.html       # Estrutura esquelética da aplicação
├── style.css        # Estilização visual e regras de ocultação
└── script.js        # Lógica de validação, manipulação do DOM e consumo da API

🚀 Como testar o meu projeto

Por ser uma aplicação baseada puramente em frontend (Client-side), testar é extremamente simples e não requer a instalação de servidores locais como XAMPP ou NodeJS:

Baixe ou clone este repositório para o seu computador.

Certifique-se de que os arquivos index.html, style.css e script.js estão na mesma pasta.

Dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador padrão.

Abra o Console do Desenvolvedor (F12 no teclado) para checar o objeto JSON sendo gerado com sucesso ao submeter o formulário.

Muito obrigado pela oportunidade! Estou à disposição para esclarecer qualquer dúvida sobre a lógica ou a estrutura do código.
