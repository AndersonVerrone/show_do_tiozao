const initialQuestions = [
  {
    P : 'De onde é o homem mais alto do mundo?',
    A : ['Estados Unidos', false],
    B : ['Egíto', false],
    C : ['Turquia', true],
    D : ['Belgica', false]
  },
  {
    P : 'Qual é o livro mais vendido depois da Bíblia?',
    A : ['O Senhor dos Anéis', false],
    C : ['Dom Quixote', true],
    B : ['Harry Potter', false],
    D : ['O Pequeno Príncipe', false]
  },
  {
    P : 'Quanto tempo a luz do sol demora para chegar na terra?',
    A : ['12 minutos', false],
    B : ['2 segundos', false],
    D : ['12 horas', false],
    C : ['8 minutos', true]
  },
  {
    P : 'Quanto vale Pi?',
    C : ['3,14', true],
    A : ['2,14', false],
    B : ['5,21', false],
    D : ['3,47', false]
  },
  {
    P : 'Qual é o maior osso do corpo?',
    C : ['Fêmur', true],
    A : ['Radio', false],
    B : ['Cúbito', false],
    D : ['Esterno', false]
  },
  {
    P : 'Qual é o maior planeta do sistema solar?',
    C : ['Júpiter', true],
    A : ['Terra', false],
    B : ['Vênus', false],
    D : ['Marte', false]
  },
  {
    P : 'Quantas vezes você pode subtrair 10 de 100?',
    C : ['1', true],
    A : ['5', false],
    B : ['10', false],
    D : ['Nenhuma das anteriores', false]
  },
  {
    P : 'Qual é o mês com 28 dias?',
    C : ['Todos', true],
    A : ['Fevereiro', false],
    B : ['Janeiro', false],
    D : ['Nenhuma das Alternativas', false]
  },
  {
    P : 'Qual é o animal que é capaz de sobreviver sem beber água durante mais tempo?',
    C : ['Camelo', true],
    A : ['Canguru', false],
    B : ['Elefante', false],
    D : ['Rato', false]
  },
  {
    P : 'Qual é o planeta mais quente do sistema solar?',
    C : ['Vênus', true],
    A : ['Mercúrio', false],
    B : ['Terra', false],
    D : ['Júpiter', false]
  },

];
const phaseTwoQuestions = [
  {
    P : 'Qual é a coisa mais pesada do mundo?',
    A : ['Uma baleia-azul', false],
    B : ['Uma tonelada de penas', false],
    C : ['Um elefante africano macho adulto', false],
    D : ['A Terra', true]
  },
  {
    P : 'Qual é o animal que tem a cauda mais longa em relação ao seu corpo?',
    A : ['Díli', true],
    B : ['Jacarta', false],
    C : ['Manila', false],
    D : ['Phnom Penh', false]
  },
  {
    P : 'Qual é a capital do Timor-Leste?',
    A : ['Rato', true],
    B : ['Canguru', false],
    C : ['Girafa', false],
    D : ['Tubarão', false]
  },
  {
    P : 'Qual é a diferença entre um avião e um violino?',
    A : ['Um avião tem asas e um violino tem cordas', true],
    B : ['Nenhuma, ambos podem voar', false],
    C : ['Um avião é feito de metal e um violino é feito de madeira', false],
    D : ['Um avião faz barulho quando toca o solo e um violino faz música quando é tocado', false]
  },
  {
    P : 'Por que o cachorro atravessou a rua?',
    A : ['Para chegar ao outro lado', true],
    B : ['Porque ele achou que a grama era mais verde do outro lado', false],
    C : ['Para escapar do gato do outro lado', false],
    D : ['Para fazer uma caminhada', false]
  },
  {
    P : 'Qual desses países não faz parte da União Europeia?',
    A : ['Noruega', true],
    B : ['Alemanha', false],
    C : ['Reino Unido', false],
    D : ['França', false]
  },
  {
    P : 'Qual é o nome da famosa obra de Machado de Assis que retrata a história de Bentinho e Capitu?',
    A : ['Dom Casmurro', true],
    B : ['Memórias Póstumas de Brás Cubas', false],
    C : ['Quincas Borba', false],
    D : ['Esaú e Jacó', false]
  },
  {
    P : 'Qual é a capital do estado do Pará?',
    A : ['Belém', true],
    B : ['São Luis', false],
    C : ['Recife', false],
    D : ['Rio Branco', false]
  },
  {
    P : 'Qual é o nome da capital do Canadá?',
    A : ['Ottawa', true],
    B : ['Toronto', false],
    C : ['Vancouver', false],
    D : ['Montreal', false]
  },
  {
    P : 'Qual é a cidade brasileira conhecida como "cidade maravilhosa"?',
    A : ['Rio de Janeiro', true],
    B : ['São Paulo', false],
    C : ['Brasília', false],
    D : ['Salvador', false]
  },
];
const phaseThreeQuestions = [
  {
    P : 'Qual foi o primeiro satélite artificial lançado ao espaço?',
    A : ['Explorer 1', false],
    B : ['Vanguard 1', false],
    C : ['Sputnik 1', true],
    D : ['Telstar 1', false]
  },
  {
    P : 'Quem foi o autor da obra "A Divina Comédia"?',
    A : ['William Shakespeare', false],
    B : ['Miguel de Cervantes', false],
    C : ['Dante Alighieri', true],
    D : ['Giovanni Boccaccio', false]
  },
  {
    P : 'Qual o nome do processo de conversão de glicose em ácido lático, que ocorre em condições anaeróbicas?',
    A : ['Respiração celular', false],
    B : ['Fotossíntese', false],
    C : ['Fermentação láctica', true],
    D : ['Ciclo de Krebs', false]
  },
  {
    P : 'Qual o nome do fenômeno que ocorre quando a luz se desvia ao passar por uma superfície, como a refração da luz em uma lente?',
    A : ['Difração', false],
    B : ['Interferência', false],
    C : ['Reflexão', true],
    D : ['Dispersão', false]
  },
  {
    P : 'Quem foi o cientista que formulou a Lei da Gravitação Universal?',
    A : ['Albert Einstein', false],
    B : ['Galileu Galilei', false],
    C : ['Isaac Newton', true],
    D : ['Johannes Kepler', false]
  },
  {
    P : 'Qual é o nome do fundador da casa Sonserina em Hogwarts?',
    A : ['Godric', false],
    B : ['Helga', false],
    C : ['Salazar', true],
    D : ['Rowena', false]
  },
  {
    P : 'Qual é o nome do feitiço que apaga a memória de uma pessoa?',
    A : ['Petrificus Totalus', false],
    B : ['Expelliarmus', false],
    C : ['Avada Kedavra', false],
    D : ['Obliviate', true]
  },
  {
    P : 'Qual é o nome do leão protagonista do filme "O Rei Leão" da Disney?',
    A : ['Scar', false],
    B : ['Timão', false],
    C : ['Simba', true],
    D : ['Mufasa', false]
  },
  {
    P : 'Qual é o nome da série de televisão que conta a história de um grupo de adolescentes em um colégio dos Estados Unidos nos anos 80?',
    A : ['Stranger Things', false],
    B : ['That \'70s Show', false],
    C : ['Saved by the Bell', true],
    D : ['The Goldbergs', false]
  },
  {
    P : 'Qual é o nome do lendário Pokémon que é capaz de controlar o tempo e o espaço, e é considerado um dos mais poderosos e raros da série?',
    A : ['Mewtwo', false],
    B : ['Rayquaza', false],
    C : ['Dialga', true],
    D : ['Arceus', false]
  },
];
const finalQuestions = [
  {
    P : 'Qual é o som icônico que o Crazy Frog faz em seus vídeos?',
    A : ['Ring ring ring', false],
    B : ['Ribbit ribbit ribbit', false],
    C : ['Ding ding ding', true],
    D : ['Oink oink oink', false]
  },
  {
    P : 'Qual é o nome do personagem que liderou a rebelião contra a dinastia Targaryen e foi proclamado rei após a Guerra do Usurpador?',
    A : ['Tywin Lannister', false],
    B : ['Eddard Stark', false],
    C : ['Robert Baratheon', true],
    D : ['Stannis Baratheon', false]
  },
  {
    P : 'Qual é o nome do primeiro episódio de Os Simpsons a ser exibido na televisão?',
    A : ['Bart Gets an F', false],
    B : ['Simpsons Roasting on an Open Fire', true],
    C : ['Homer\'s Odyssey', false],
    D : ['There\'s No Disgrace Like Home', false]
  },
  {
    P : 'Qual é o nome da iguaria que era muito valorizada pelos romanos e que era feita a partir das vísceras e das gorduras de aves de caça?',
    A : ['Moretum', false],
    B : ['Silphium', false],
    C : ['Garum', true],
    D : ['Minutal', false]
  },
  {
    P : 'Quantas teclas de piano existem em um piano de cauda padrão?',
    A : ['100', false],
    B : ['92', false],
    C : ['88', true],
    D : ['104', false]
  },
  {
    P : 'Qual é a quantidade exata de grãos de areia na praia de Copacabana no Rio de Janeiro?',
    A : ['154,7 bilhões', false],
    B : ['42,8 bilhões', false],
    C : ['267,3 bilhões', false],
    D : ['Não sei...', true]
  },
]

function generateRandomNumber(maximo) {
  return Math.floor(Math.random()*(maximo+1));
};

function selectQuestions(arr,n,maximo) {
  let indexArr = [];
  let newArr = [];
  let i = 0;
  let num = 0;
  while (i < n) {
    num = generateRandomNumber(maximo);
    if (!indexArr.includes(num)) {
      indexArr.push(num);
      i++;
    }
  }
  for (let j=0; j < indexArr.length; j++) {
    newArr.push(arr[indexArr[j]]);
  }
  return newArr;
};



