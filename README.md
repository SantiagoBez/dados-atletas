# Projeto de Certificação 02 - Trilha 01 - Jornada DevStart

 ## Descrição: 
  Elaboração da classe Atleta, bem como a instânciação de atributos e métodos de instância correspondentes para retorno de informações como: apresentação de nome, idade, peso, altura, categoria de participação, cálculo de índice de massa corporal, cálculo de média conforme critérios do [Projeto de Certificação - Trilha 01 - Jornada DevStart](https://github.com/SantiagoBez/notas-atletas/tree/main), entre outros.
  
 ## Status: 
  A funcionalidade atende aos objetivos, porém segue em desenvolvimento de melhorias e otimizações.
  
 ## Funcionalidades: 
  A classe possui estrutura completa, na qual seus atributos e métodos estarão listados a seguir:
  
 ## Atributos/Propriedades:
  * Nome: recebe o nome do atleta, deve ser indicado durante a *instânciação*;
  * Idade: recebe a idade do atleta, deve ser indicado durante a *instânciação*;
  * Peso: recebe o peso do atleta, deve ser indicado durante a *instânciação*;
  * Altura: recebe a altura do atleta, deve ser indicado durante a *instânciação*, obs.: deve ser registrado no formato *(Altura)*;
  * Notas: recebe as notas obtidas pelo atleta, deve ser indicado durante a *instânciação*, obs.: deve ser registrado em formato de matriz *([nota1, nota2, notaN])*;
  
 ## Métodos:
  * constructor(): usado para criar um novo objeto de representação de atletas por meio da *instânciação*;
  * calculaCategoria(): efetua a identificação e classificação da categoria do atleta por meio da verificação da faixa de idade, usado estruturas condicionais *if / else if / else*;
  * calculaIMC(): identifica o índice de massa corporal do atleta correspondente, obtido por meio da fórmula: *peso/(altura)²*
  * calculaMediaValida(): realiza o cálculo da média das notas obtidas pelo atleta correspondente, respeitando o critério estabelecido no projeto anterior, qual seja, são consideradas somente as notas intermediárias (excluí-se a maior e menor nota);
  * obtemInfoAtleta(): sequência de métodos utilizados para resgatar uma das informações registradas durante a instânciação, por exemplo: obtemNomeAtleta() - retorna o nome do atleta, demais métodos seguem o mesmo padrão, onde *info* deve ser substituída pela informação desejada.

 ## Tecnologias:
 
 ### Conceitos Abordados - JavaScript:
   - [x] Declaração de classes
   - [x] Instânciação de novos objetos por meio da função **constructor()**
   - [x] Declaração de métodos e propriedades de instância
   - [x] Matriz de objetos
   - [x] Estruturas condicionais (if/else)
   - [x] Estrutura de repetição (for)
   - [x] Iteração de matrizes (.forEach)
   - [x] Template strings
   
  ### Conceitos Abordados - HTML:
   - [x] Uso de tags semânticas
   - [x] Uso de estruturas de ordenação (listas)
   - [x] Boilertemplate
   - [x] Atributos e Propriedades
   - [x] Metatags
   - [x] Incorporação de arquivos **JavaScript (.js)** e **Cascading Style Sheets (.css)** externos
   - [x] Estruturação hierárquica de contéudo
         
  ### Conceitos Abordados - CSS: 
   - [x] Declaração de regras CSS
   - [x] Estilização por **seletor de _classe_ e _id_**
   - [x] Combinação de seletores
   - [x] Boilertemplate
   - [x] Atributos e Propriedades
   - [x] Estilização por **seletor de _tipo_**
   - [x] Modelo **Box Model**
      
 ## Próximas Atualizações *(TO-DO LIST)*:
  - [ ] Melhorias de formatação no Arquivo **README**;
  - [ ] Melhorias de semântica do Arquivo **HTML**;
  - [ ] Otimização/Refatoração dos Arquivos **HTML** e **CSS**;

 ## Autor: [@SantiagoBez](https://github.com/SantiagoBez).
