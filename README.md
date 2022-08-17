
# Boas Vindas a Máquina do Tempo

Neste projeto vamos desenvolver uma máquina do tempo, isso mesmo!

Este projeto consiste em um formulário onde é possível pesquisar um site específico em um determinado momento no passado e visualizar como este site era naquele momento.

Então neste projeto serão duas partes específicas, um formulário para pesquisar sites e a visualização do site logo abaixo.

---


# Sumário

- [Boas vindas ao repositório do projeto Trybe Wallet!](#boas-vindas-ao-repositório-do-projeto-trybe-wallet)
- [Sumário](#sumário)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)
    - [Formulário](#página-de-login)
      - [1. Crie um formulário para pesquisar sites no passado:](#1-crie-uma-página-inicial-de-login-com-os-seguintes-campos-e-características)
    - [Pré-visualização do site](#página-da-carteira)
      - [2. Crie um iframe onde é possível pré-visualizar um site específico:](#2-crie-uma-página-para-sua-carteira-com-as-seguintes-características)
## Documentação da API Web Archive

Sua página _web_ irá consumir os dados da API do _Web Archive API_ para buscar e exibir o estado de sites no passado. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://archive.org/wayback/available?url={URL}&timestamp={Timestamp}

Onde {URL} é a URL do site em que se deseja pesquisar no passado.
E {Timestamp} é o momento no seguinte formato, uma string com ano, mês, dia, hora, minutos e segundos todos concatenados juntos e sempre números. Então por exemplo para a seguinte data e hora: 11/09/2001 ás 20:53 e 40 segundos o {Timestamp} ficaria assim: _20010911205340_

O retorno desse endpoint será algo no formato:
```json
{
  "url": "cnn.com",
  "archived_snapshots": {
    "closest": {
      "status": "200",
      "available": true,
      "url": "http://web.archive.org/web/20010911204733/http://www2.cnn.com:80/",
      "timestamp": "20010911204733"
    }
  },
  "timestamp": "20010911205340"
}
```

Dentro da chave archived_snapshots temos os resultados para a busca, e iremos utilizar o conteúdo de da chave _closest_ que contém o status mais próximo encontrado de nossa pesquisa.

---
## Lista de requisitos

### Formulário


#### 1. Crie um formulário para pesquisar sites no passado:

### Pré-visualização do site

#### 2. Crie um iframe onde é possível pré-visualizar um site específico:
