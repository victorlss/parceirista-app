# PARCEIRISTA - HACKATHON GETNET 2020
![parceirista-logo](https://user-images.githubusercontent.com/11720000/95804671-c0fa5580-0cd9-11eb-87bb-d8f2ff0af5f0.png)

### PROPOSTA DE VALOR
O Parceirista tem como missão facilitar a vida dos microempreendedores por meio de acesso a serviços essenciais para a estruturação do seu novo negócio, com o pagamento destes serviços acontecendo gradualmente através de uma porcentagem da receita gerada pela operação do negócio. 
Gerando demanda para profissionais de diversas áreas ao mesmo tempo que garante a criação de negócios mais preparados para crescer.

### TECNOLOGIA
#### REACT NATIVE + EXPO
Com React Native e EXPO garantimos a criação de uma aplição robusta, estável e de fácil manutenção,com grande suporte para expansão de funcionalidades.
#### NODE + EXPRESS ([Repositório do BFF](https://github.com/victorlss/parceirista-bff))
Com esta stack conseguimos garantir uma aplicação leve com capacidades elásticas, podendo ser fácilmente dockerizada e orquestrada com Kubernetes.
#### MONGODB
NoSQL mais famoso do momento, consegue suportar gigantescos fluxos de dados. Nos dá a flexibilidade de tanto ter collections com schema definido, mas caso necessário flexibilidade para adotar estruturas schemaless.
#### HEROKU + CONTINOUS INTEGRATION = ENTREGA DE VALOR CONTÍNUA
Nossa aplicação tem seu pipeline integrado ao HEROKU, possibilitando que todo Push bem sucedido vá para produção de forma totalmente automatizada, com deploys progressivos para evitar indisponibilidade do serviço.

### ARQUITETURA
![Arquitetura](https://user-images.githubusercontent.com/11720000/95804478-2732a880-0cd9-11eb-9f6e-3e2a72a963bc.png)

### EXECUTANDO A APLICAÇÃO
Instale as dependencias executando os comandos:<br />
`yarn install`<br />
<br />
Para alterar a URL da API, deve colocar a nova URL no arquivo <b>/src/api/env.js</b><br />
<br />
Para executar no iOS, utilize o comando:<br />
`yarn ios`<br />
<br />
Para executar no Android, utilize o comando:<br />
`yarn android`<br />
<br />
Para executar o expo, utilize o comando:<br />
`yarn start`
