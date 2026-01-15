# AI-Driven Software Engineering - IA na Prática: Acelerando o Desenvolvimento e Garantindo a Qualidade com um Fluxo de Trabalho Automatizado por IA

## 📌 Contexto do Problema

Este projeto simula um cenário real enfrentado por uma empresa de tecnologia que desenvolve uma ferramenta de colaboração online. Com o crescimento acelerado da empresa, a equipe de desenvolvimento passou a sofrer forte pressão para entregar novas funcionalidades em prazos cada vez menores, o que gerou um conflito direto entre velocidade de entrega e qualidade do software.

A equipe é formada majoritariamente por desenvolvedores de nível júnior e pleno, tecnicamente capazes, porém com dificuldades em manter uma boa cobertura de testes e revisões de código consistentes. Como consequência, bugs começaram a ser descobertos tardiamente, aumentando o custo de correção e impactando negativamente a experiência dos usuários finais.

Os principais problemas identificados foram:
- Lentidão no desenvolvimento devido à escrita repetitiva de código básico;
- Baixa cobertura de testes unitários;
- Ciclo de feedback lento, com detecção tardia de erros;
- Inconsistência de padrões na base de código.

---

## 🤖 O Papel da Inteligência Artificial no Desenvolvimento de Software

A Inteligência Artificial vem se consolidando como uma aliada estratégica no ciclo de desenvolvimento de software moderno. Ferramentas como o GitHub Copilot auxiliam diretamente na geração de código, criação de testes automatizados e entendimento de trechos complexos, reduzindo o esforço manual e aumentando a produtividade dos desenvolvedores.

Além disso, a automação de pipelines de integração contínua (CI) com GitHub Actions permite que testes sejam executados automaticamente a cada alteração no código, garantindo feedback rápido e confiável sobre a qualidade da aplicação.

É importante destacar que, conforme discutido por Martin Fowler, a cobertura de testes não deve ser vista apenas como uma métrica quantitativa, mas como um mecanismo para garantir confiança e segurança na evolução do sistema.

---

## 🛠️ Solução Proposta

A solução implementada combina o uso de duas ferramentas principais:

- **GitHub Copilot**: Utilizado para acelerar a criação da lógica de negócio e dos testes unitários, permitindo que a equipe foque mais nas regras de negócio e menos em código repetitivo.
- **GitHub Actions**: Responsável por automatizar o processo de build e execução dos testes a cada push no repositório, garantindo qualidade contínua.

Essa combinação permitiu aumentar a velocidade de desenvolvimento sem comprometer a qualidade do software entregue.

---

## 📂 Descrição do Projeto

Este repositório contém um projeto simples em Node.js que implementa uma função de cálculo de valor final de pedidos com aplicação de descontos, incluindo regras de negócio e validações.

### 🔹 Funcionalidade Principal
- Cálculo do valor final de um pedido com base em um percentual de desconto;
- Aplicação de desconto apenas para pedidos acima de um determinado valor;
- Validação de descontos inválidos;
- Garantia de que o valor final nunca seja negativo.

A função principal e seus testes foram gerados com auxílio do GitHub Copilot, com comentários no código indicando os prompts utilizados.

---

## 🧪 Testes Automatizados

Os testes unitários foram implementados utilizando o framework **Jest**, cobrindo os principais cenários da regra de negócio. A execução dos testes é automatizada através de um pipeline de CI configurado com GitHub Actions.

### ✔️ Pipeline de CI
- Instalação automática das dependências;
- Execução dos testes a cada push ou pull request;
- Feedback imediato sobre falhas no código.

---

## 🚀 Considerações Finais

A adoção de ferramentas baseadas em Inteligência Artificial no fluxo de trabalho de desenvolvimento demonstrou ser uma estratégia eficaz para equilibrar velocidade e qualidade. O GitHub Copilot reduziu o tempo de escrita de código e testes, enquanto o GitHub Actions garantiu a execução contínua de verificações de qualidade.

Esse modelo de desenvolvimento assistido por IA representa uma abordagem moderna, escalável e alinhada às melhores práticas da engenharia de software atual.

---

## 📚 Referências

- GitHub Copilot – Writing and Explaining Tests  
  https://github.com/features/copilot#writing-and-explaining-tests

- GitHub Actions – Building and Testing Node.js  
  https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

- Fowler, Martin. *Test Coverage*  
  https://martinfowler.com/bliki/TestCoverage.html
