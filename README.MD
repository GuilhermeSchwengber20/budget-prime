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



# Tabelas

User  
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255),
email VARCHAR(255) UNIQUE,
password VARCHAR(255),
isSuperUser BOOLEAN
--------------------------------
id: Identificador único para cada usuário.
nome: Nome do usuário.
email: Endereço de e-mail do usuário (com restrição UNIQUE para garantir que cada e-mail seja único).
senha: Senha do usuário (recomenda-se armazenar a senha de forma segura, possivelmente com hash e salting para segurança adicional).
usuarioSuper: Um booleano que indica se o usuário é o usuário principal (administrador, por exemplo). Este campo será verdadeiro apenas para o seu usuário.
------------------------------------

Expense
id INT PRIMARY KEY AUTO_INCREMENT,
description VARCHAR(255),
id_user INT,
category VARCHAR(255),
total_value DOUBLE,
value_per_installment DOUBLE,
total_installments INT,
current_installment INT,
paid BOOLEAN,
createdAt TIMESTAMP,
dueAt TIMESTAMP 
-------------------------------------------
description: Descrição da despesa.
id_user: ID do usuário associado à despesa.
category: Categoria da despesa.
total_value: Valor total da despesa.
value_per_installment: Valor de cada parcela, se todas as parcelas tiverem o mesmo valor.
total_installments: Número total de parcelas.
current_installment: Parcela atual em que a despesa está.
paid: Indica se a despesa foi paga ou está pendente.
createdAt: Data de criação da despesa.
dueAt: Data de vencimento da primeira parcela, se a despesa for parcelada.
------------------------------------------------


Revenue
id INT PRIMARY KEY AUTO_INCREMENT,
description VARCHAR(255),
id_user INT,
category VARCHAR(255),
total_value DOUBLE,
value_per_installment DOUBLE,
total_installments INT,
current_installment INT,
received BOOLEAN,
receivedAt TIMESTAMP,
dueAt TIMESTAMP
---------------------------------------------------
description: Descrição da receita.
id_user: ID do usuário associado à receita.
category: Categoria da receita.
total_value: Valor total da receita.
value_per_installment: Valor de cada parcela, se todas as parcelas tiverem o mesmo valor.
total_installments: Número total de parcelas.
current_installment: Parcela atual em que a receita está.
received: Indica se a receita foi recebida ou está pendente.
receivedAt: Data em que a receita foi recebida.
dueAt: Data de vencimento da primeira parcela, se a receita for parcelada.
---------------------------------------------------
