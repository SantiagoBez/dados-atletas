# Projeto de Certificação 02 - Trilha 01 - Jornada DevStart
# Descrição: elaboração da classe Atleta, bem como a instânciação de atributos e métodos de instância correspondentes para retorno de informações como: apresentação de nome, idade, peso, altura, categoria de participação, cálculo de índice de massa corporal, cálculo de média conforme critérios do projeto https://github.com/SantiagoBez/notas-atletas/tree/main, entre outros.
# Status: a funcionalidade atende aos objetivos, porém segue em desenvolvimento de melhorias e otimizações.
# Funcionalidades: a classe possui estrutura completa, na qual seus atributos e métodos estarão listados a seguir:
# Atributos/Propriedades:
* Nome: recebe o nome do atleta, deve ser indicado durante a *instânciação*;
* Idade: recebe a idade do atleta, deve ser indicado durante a *instânciação*;
* Peso: recebe o peso do atleta, deve ser indicado durante a *instânciação*;
* Altura: recebe a altura do atleta, deve ser indicado durante a *instânciação*, obs.: deve ser registrado no formato *(Altura)*;
* Notas: recebe as notas obtidas pelo atleta, deve ser indicado durante a *instânciação*, obs.: deve ser registrado em formato de matriz *([nota1, nota2, notaN])*;
# Métodos:
* constructor(): usado para criar um novo objeto de representação de atletas por meio da *instânciação*;
* calculaCategoria(): efetua a identificação e classificação da categoria do atleta por meio da verificação da faixa de idade, usado estruturas condicionais *if / else if / else*;
* calculaIMC(): identifica o índice de massa corporal do atleta correspondente, obtido por meio da fórmula: *peso/(altura)²*
* calculaMediaValida(): realiza o cálculo da média das notas obtidas pelo atleta correspondente, respeitando o critério estabelecido no projeto anterior, qual seja, são consideradas somente as notas intermediárias (excluí-se a maior e menor nota);
* obtemInfoAtleta(): sequência de métodos utilizados para resgatar uma das informações registradas durante a instânciação, por exemplo: obtemNomeAtleta() - retorna o nome do atleta, demais métodos seguem o mesmo padrão, onde *info* deve ser substituída pela informação desejada.
# Tecnologias:
  * JavaScript, conceitos abordados: declaração de classes, instânciação de novos objetos por meio de função construtura, declaração de métodos de instância e propriedades de instância, entre outros.
  * HTML, conceitos abordados: uso de tags semânticas, uso de estruturas de ordenação (listas), entre outros.
  * CSS, conceitos abordados: declaração de regras css, atributos, propriedades comuns, etc, estilização por classe e id, modelo box model, combinação de seletores, entre outros.
# Autor: [@SantiagoBez](https://github.com/SantiagoBez).
