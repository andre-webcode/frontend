# 🏥 Clínica Vida — Sistema de Agendamento Médico

Aplicação web full stack desenvolvida para uma clínica fictícia, com o objetivo de facilitar o acesso às informações sobre médicos, especialidades e agendamento de consultas.

O projeto foi desenvolvido com foco em uma experiência moderna, responsiva e intuitiva, integrando frontend, backend e banco de dados.

## ✨ Funcionalidades

- Apresentação da clínica e seus serviços.
- Listagem de especialidades médicas.
- Listagem de médicos e suas especialidades.
- Cadastro de pacientes durante o agendamento.
- Agendamento de consultas.
- Consulta de médicos disponíveis.
- Verificação de disponibilidade de horários.
- Validação de dados no frontend e backend.
- Integração com WhatsApp.
- Layout responsivo para dispositivos móveis e desktops.

## 🛠️ Tecnologias utilizadas

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod

## 📁 Estrutura do projeto

```text
clinica-de-agendamento/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js
- npm
- PostgreSQL
- Git

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd clinica-de-agendamento
```

### 2. Configurando o Backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as variáveis necessárias:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
PORT=4000
```

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

Inicie o servidor:

```bash
npm run dev
```

O backend estará disponível em:

```text
http://localhost:4000
```

### 3. Configurando o Frontend

Abra outro terminal e entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Inicie a aplicação:

```bash
npm run dev
```

O frontend estará disponível em:

```text
http://localhost:3000
```

## 🗄️ Banco de dados

O projeto utiliza PostgreSQL para armazenar os dados dos pacientes, médicos e agendamentos.

A comunicação com o banco de dados é realizada utilizando Prisma ORM.

## 📌 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de aplicar conhecimentos de desenvolvimento Full Stack, incluindo:

- Desenvolvimento de interfaces com React e Next.js.
- Criação de APIs REST com Node.js e Express.
- Integração entre frontend e backend.
- Modelagem e persistência de dados com PostgreSQL e Prisma.
- Validação de dados.
- Organização e estruturação de aplicações Full Stack.

## 👨‍💻 Autor

Desenvolvido como projeto de portfólio.