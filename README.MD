# Fin.organizer

O fin.organizer é uma aplicação para a organização, controle de gastos e recebimentos mensais.

A ferramenta permite que o usuário cadastre contas a receber e a pagar, definindo parcelas e valores.

Também deve permitir ao usuário filtrar as contas por data de vencimento e pelo mês.


## Requisitos

### Requisitos funcionais

- [x] Autenticação e cadastro de usuários baseado em email e senha;
- [x] Gestão de contas, permite cadastrar contas a pagar e a receber;
- [x] Filtro de contas, permite filtrar contas por data de vencimento ou pelo mês;
- [x] Gestão de saldo, permite adicionar um saldo inicial a sua carteira;
- [x] O saldo deve ser atualizado automaticamente com base nas contas a receber e a pagar;


### Requisitos não funcionais

- [x] Desempenho, a aplicação deve ser responsiva e de alto desempenho, mesmo com grandes conjuntos de dados.
- [x] O tempo de resposta das interações do usuário deve ser rápido.
- [x] Segurança, A autenticação deve ser segura, protegendo as informações dos usuários.
- [x] Os dados do usuário devem ser armazenados de forma segura e protegidos contra acessos não autorizados


### Regras de Negócio

Saldo da Carteira
- [x] O saldo da carteira deve ser atualizado automaticamente com base nas transações de contas a pagar e a receber.
- [x] O saldo inicial da carteira pode ser ajustado manualmente pelos usuários, se necessário

