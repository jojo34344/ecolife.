const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Serve o jogo (pasta "dist", gerada por npm run build) junto com a API
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));

// =====================================================
// 🤖 ZINHO - IA EDUCATIVA DO ECOLIFE
// TEMA: MEIO AMBIENTE + PRODUTOS ECOLÓGICOS
// =====================================================

const nomeIA = "Zinho";

// =====================================================
// 🚫 FILTRO DE CONTEÚDO INADEQUADO
// =====================================================

const palavrasBloqueadas = [
  "pornografia",
  "pornografico",
  "pornográfico",
  "porno",
  "nude",
  "nudes",
  "sexo",
  "sexual",
  "sexuais",
  "erotico",
  "erótico",
  "erotica",
  "erótica",
  "fetiche",
  "prostituição",
  "prostituicao",
  "conteúdo adulto",
  "conteudo adulto",
  "site adulto",
  "video porno",
  "vídeo pornô",
  "video adulto",
  "vídeo adulto"
];

// =====================================================
// 🌱 BASE DE CONHECIMENTO DO ZINHO
// =====================================================

const conhecimentos = [

  // ===================================================
  // 🌎 MEIO AMBIENTE
  // ===================================================

  {
    id: "meio-ambiente",
    categoria: "Meio Ambiente",
    palavras: [
      "meio ambiente",
      "ambiente",
      "preservacao ambiental",
      "preservação ambiental"
    ],
    pontos: 10,
    resposta:
      "🌎 O meio ambiente é formado pelos seres vivos, pelo ar, pela água, pelo solo e pelos demais elementos naturais e pelas relações entre eles. Preservá-lo é importante para manter os ecossistemas e a qualidade de vida."
  },

  {
    id: "sustentabilidade",
    categoria: "Sustentabilidade",
    palavras: [
      "sustentabilidade",
      "sustentavel",
      "sustentável"
    ],
    pontos: 10,
    resposta:
      "🌱 Sustentabilidade é utilizar os recursos naturais de maneira responsável, buscando atender às necessidades atuais sem comprometer as futuras gerações."
  },

  {
    id: "desenvolvimento-sustentavel",
    categoria: "Sustentabilidade",
    palavras: [
      "desenvolvimento sustentável",
      "desenvolvimento sustentavel"
    ],
    pontos: 10,
    resposta:
      "🌱 Desenvolvimento sustentável busca equilibrar aspectos ambientais, sociais e econômicos, permitindo desenvolvimento sem causar danos ambientais desnecessários."
  },

  {
    id: "biodiversidade",
    categoria: "Natureza",
    palavras: [
      "biodiversidade",
      "diversidade biologica",
      "diversidade biológica"
    ],
    pontos: 10,
    resposta:
      "🦋 Biodiversidade é a variedade de seres vivos, espécies, genes e ecossistemas existentes. Preservá-la ajuda a manter o equilíbrio dos ambientes naturais."
  },

  {
    id: "ecossistema",
    categoria: "Natureza",
    palavras: [
      "ecossistema",
      "ecossistemas"
    ],
    pontos: 10,
    resposta:
      "🌳 Um ecossistema é formado pelos seres vivos e pelos elementos não vivos de um ambiente, que interagem entre si."
  },

  {
    id: "cadeia-alimentar",
    categoria: "Natureza",
    palavras: [
      "cadeia alimentar",
      "cadeias alimentares"
    ],
    pontos: 10,
    resposta:
      "🐾 A cadeia alimentar representa a transferência de energia e matéria entre organismos, começando geralmente pelos produtores e seguindo pelos consumidores."
  },

  // ===================================================
  // ♻️ RECICLAGEM
  // ===================================================

  {
    id: "reciclagem",
    categoria: "Reciclagem",
    palavras: [
      "reciclagem",
      "reciclar",
      "reciclavel",
      "reciclável"
    ],
    pontos: 15,
    resposta:
      "♻️ Reciclagem é o processo de transformar resíduos que podem ser reaproveitados em novos materiais ou produtos. Ela ajuda a diminuir a quantidade de resíduos descartados e pode economizar recursos naturais."
  },

  {
    id: "coleta-seletiva",
    categoria: "Reciclagem",
    palavras: [
      "coleta seletiva",
      "coleta-seletiva"
    ],
    pontos: 15,
    resposta:
      "♻️ Coleta seletiva é a separação dos resíduos de acordo com seu tipo para facilitar o reaproveitamento e a reciclagem."
  },

  {
    id: "papel",
    categoria: "Reciclagem",
    palavras: [
      "papel",
      "papéis",
      "papeis",
      "papelao",
      "papelão"
    ],
    pontos: 5,
    resposta:
      "📄 Papel e papelão podem ser reciclados quando estão adequadamente separados e, em geral, limpos e secos. A reciclagem reduz a necessidade de utilizar novas matérias-primas."
  },

  {
    id: "plastico",
    categoria: "Reciclagem",
    palavras: [
      "plastico",
      "plástico",
      "garrafa pet",
      "pet"
    ],
    pontos: 5,
    resposta:
      "🥤 Muitos tipos de plástico podem ser reciclados. Separar corretamente embalagens plásticas ajuda a encaminhá-las para sistemas de reaproveitamento."
  },

  {
    id: "vidro",
    categoria: "Reciclagem",
    palavras: [
      "vidro",
      "garrafa de vidro",
      "pote de vidro"
    ],
    pontos: 5,
    resposta:
      "🫙 O vidro pode ser reciclado diversas vezes. Garrafas e potes devem ser encaminhados corretamente para a coleta ou para pontos de recebimento."
  },

  {
    id: "metal",
    categoria: "Reciclagem",
    palavras: [
      "metal",
      "metais",
      "lata",
      "latas",
      "aluminio",
      "alumínio"
    ],
    pontos: 5,
    resposta:
      "🥫 Metais como alumínio e aço podem ser reciclados. A reciclagem ajuda a reduzir a necessidade de extrair novas matérias-primas."
  },

  // ===================================================
  // 🗑️ RESÍDUOS
  // ===================================================

  {
    id: "residuos",
    categoria: "Resíduos",
    palavras: [
      "residuo",
      "resíduos",
      "residuos",
      "lixo"
    ],
    pontos: 10,
    resposta:
      "🗑️ A gestão adequada dos resíduos envolve reduzir o consumo, reutilizar materiais, separar recicláveis, tratar resíduos quando necessário e fazer a destinação correta."
  },

  {
    id: "reduzir-reutilizar-reciclar",
    categoria: "Resíduos",
    palavras: [
      "reduzir reutilizar reciclar",
      "3 rs",
      "tres rs",
      "três rs"
    ],
    pontos: 15,
    resposta:
      "♻️ Os 3 Rs são reduzir, reutilizar e reciclar. A ideia é primeiro evitar o desperdício, depois aproveitar os produtos pelo maior tempo possível e, quando adequado, encaminhar materiais para reciclagem."
  },

  {
    id: "residuos-organicos",
    categoria: "Resíduos",
    palavras: [
      "resíduo orgânico",
      "residuo organico",
      "resíduos orgânicos",
      "restos de comida"
    ],
    pontos: 10,
    resposta:
      "🍎 Resíduos orgânicos incluem restos de alimentos e outros materiais biodegradáveis. Muitos deles podem ser destinados à compostagem."
  },

  // ===================================================
  // 💧 ÁGUA
  // ===================================================

  {
    id: "agua",
    categoria: "Água",
    palavras: [
      "agua",
      "água",
      "recursos hidricos",
      "recursos hídricos"
    ],
    pontos: 10,
    resposta:
      "💧 A água é essencial para a vida e para diversas atividades humanas. Preservar rios, lagos, nascentes e águas subterrâneas é fundamental."
  },

  {
    id: "economia-agua",
    categoria: "Água",
    palavras: [
      "economizar agua",
      "economizar água",
      "economia de agua",
      "economia de água"
    ],
    pontos: 10,
    resposta:
      "💧 Podemos economizar água evitando desperdícios, fechando a torneira quando não estiver em uso, consertando vazamentos e utilizando água de maneira consciente."
  },

  {
    id: "poluicao-agua",
    categoria: "Água",
    palavras: [
      "poluicao da agua",
      "poluição da água",
      "poluicao dos rios",
      "poluição dos rios"
    ],
    pontos: 15,
    resposta:
      "💧 A poluição da água pode ser causada pelo lançamento inadequado de resíduos, esgoto e outras substâncias. O tratamento de efluentes e a prevenção da contaminação são importantes para proteger os recursos hídricos."
  },

  // ===================================================
  // ⚡ ENERGIA
  // ===================================================

  {
    id: "energia",
    categoria: "Energia",
    palavras: [
      "energia",
      "eletricidade",
      "economizar energia"
    ],
    pontos: 10,
    resposta:
      "⚡ Economizar energia significa evitar o consumo desnecessário. Podemos apagar luzes sem uso, desligar aparelhos e aproveitar a iluminação natural."
  },

  {
    id: "energia-solar",
    categoria: "Energia",
    palavras: [
      "energia solar",
      "painel solar",
      "placa solar",
      "energia fotovoltaica",
      "energia fotovoltaica"
    ],
    pontos: 15,
    resposta:
      "☀️ A energia solar utiliza a radiação do Sol para produzir energia. Sistemas fotovoltaicos transformam a luz solar em eletricidade."
  },

  {
    id: "energia-eolica",
    categoria: "Energia",
    palavras: [
      "energia eolica",
      "energia eólica",
      "energia dos ventos"
    ],
    pontos: 10,
    resposta:
      "🌬️ A energia eólica aproveita a força dos ventos para produzir eletricidade por meio de turbinas."
  },

  {
    id: "energias-renovaveis",
    categoria: "Energia",
    palavras: [
      "energia renovavel",
      "energia renovável",
      "energias renovaveis",
      "energias renováveis"
    ],
    pontos: 15,
    resposta:
      "☀️ Energias renováveis são obtidas de fontes que se renovam naturalmente, como Sol, vento e água. Elas podem contribuir para diversificar a matriz energética."
  },

  // ===================================================
  // 🌳 FLORESTAS E NATUREZA
  // ===================================================

  {
    id: "florestas",
    categoria: "Natureza",
    palavras: [
      "floresta",
      "florestas"
    ],
    pontos: 10,
    resposta:
      "🌳 As florestas abrigam grande diversidade de espécies, ajudam a proteger o solo e participam do ciclo da água. Sua conservação é importante para os ecossistemas."
  },

  {
    id: "desmatamento",
    categoria: "Natureza",
    palavras: [
      "desmatamento",
      "desmatar",
      "desmatada"
    ],
    pontos: 15,
    resposta:
      "🌳 O desmatamento é a remoção da vegetação de uma área. Quando ocorre de maneira intensa, pode causar perda de habitat, erosão e redução da biodiversidade."
  },

  {
    id: "reflorestamento",
    categoria: "Natureza",
    palavras: [
      "reflorestamento",
      "restauracao florestal",
      "restauração florestal"
    ],
    pontos: 15,
    resposta:
      "🌱 Reflorestamento pode envolver o plantio de árvores em áreas que perderam sua cobertura vegetal. Projetos de restauração ecológica buscam recuperar funções dos ecossistemas."
  },

  // ===================================================
  // 🌡️ CLIMA
  // ===================================================

  {
    id: "aquecimento-global",
    categoria: "Clima",
    palavras: [
      "aquecimento global"
    ],
    pontos: 15,
    resposta:
      "🌡️ O aquecimento global é o aumento da temperatura média do sistema climático da Terra. A atividade humana, especialmente a emissão de gases de efeito estufa, contribui significativamente para esse processo."
  },

  {
    id: "efeito-estufa",
    categoria: "Clima",
    palavras: [
      "efeito estufa",
      "gases de efeito estufa",
      "gases do efeito estufa"
    ],
    pontos: 15,
    resposta:
      "🌍 O efeito estufa é um fenômeno natural que ajuda a manter a Terra aquecida. O aumento da concentração de determinados gases intensifica esse efeito e contribui para o aquecimento global."
  },

  {
    id: "mudancas-climaticas",
    categoria: "Clima",
    palavras: [
      "mudancas climaticas",
      "mudanças climáticas",
      "mudanca climatica",
      "mudança climática"
    ],
    pontos: 15,
    resposta:
      "🌡️ Mudanças climáticas são alterações duradouras nos padrões do clima. O aquecimento causado pelo aumento dos gases de efeito estufa influencia diversos sistemas naturais e humanos."
  },

  // ===================================================
  // 🐾 ANIMAIS
  // ===================================================

  {
    id: "animais",
    categoria: "Biodiversidade",
    palavras: [
      "animais",
      "animal",
      "fauna"
    ],
    pontos: 5,
    resposta:
      "🐾 Os animais são parte importante dos ecossistemas. A conservação de seus habitats ajuda a manter as populações e a biodiversidade."
  },

  {
    id: "especies-ameacadas",
    categoria: "Biodiversidade",
    palavras: [
      "especies ameacadas",
      "espécies ameaçadas",
      "animais ameaçados",
      "animais ameacados"
    ],
    pontos: 15,
    resposta:
      "🐾 Espécies ameaçadas enfrentam riscos elevados de redução populacional ou desaparecimento. Proteção de habitats, combate à caça ilegal e conservação são algumas medidas importantes."
  },

  // ===================================================
  // 🛍️ PRODUTOS ECOLÓGICOS
  // ===================================================

  {
    id: "produtos-ecologicos",
    categoria: "Produtos Ecológicos",
    palavras: [
      "produto ecologico",
      "produto ecológico",
      "produtos ecologicos",
      "produtos ecológicos"
    ],
    pontos: 20,
    resposta:
      "🛍️ Produtos ecológicos são produtos desenvolvidos buscando reduzir impactos ambientais em alguma etapa do seu ciclo de vida. É importante analisar materiais, durabilidade, embalagem, fabricação, transporte e descarte."
  },

  {
    id: "sacola-reutilizavel",
    categoria: "Produtos Ecológicos",
    palavras: [
      "sacola reutilizavel",
      "sacola reutilizável",
      "ecobag"
    ],
    pontos: 10,
    resposta:
      "🛍️ Sacolas reutilizáveis podem diminuir a necessidade de sacolas descartáveis quando são usadas muitas vezes. O benefício depende também do material, da fabricação e principalmente da frequência de reutilização."
  },

  {
    id: "garrafa-reutilizavel",
    categoria: "Produtos Ecológicos",
    palavras: [
      "garrafa reutilizavel",
      "garrafa reutilizável",
      "squeeze"
    ],
    pontos: 10,
    resposta:
      "🥤 Garrafas reutilizáveis podem reduzir o consumo de embalagens descartáveis quando são utilizadas por bastante tempo e higienizadas corretamente."
  },

  {
    id: "canudo-reutilizavel",
    categoria: "Produtos Ecológicos",
    palavras: [
      "canudo reutilizavel",
      "canudo reutilizável"
    ],
    pontos: 10,
    resposta:
      "🥤 Canudos reutilizáveis podem reduzir o uso de canudos descartáveis quando são realmente reutilizados. É importante considerar higiene, durabilidade e material."
  },

  {
    id: "produtos-biodegradaveis",
    categoria: "Produtos Ecológicos",
    palavras: [
      "biodegradavel",
      "biodegradável",
      "biodegradaveis",
      "biodegradáveis"
    ],
    pontos: 15,
    resposta:
      "🌱 Um material biodegradável pode ser decomposto por organismos vivos em determinadas condições. Isso não significa automaticamente que o produto seja ambientalmente melhor em todos os aspectos."
  },

  {
    id: "produtos-compostaveis",
    categoria: "Produtos Ecológicos",
    palavras: [
      "compostavel",
      "compostável",
      "compostaveis",
      "compostáveis"
    ],
    pontos: 15,
    resposta:
      "🍃 Produtos compostáveis são desenvolvidos para se decompor em condições adequadas de compostagem. É importante verificar as instruções do fabricante e a existência de estrutura adequada para compostagem."
  },

  {
    id: "bambu",
    categoria: "Produtos Ecológicos",
    palavras: [
      "bambu",
      "produto de bambu",
      "produtos de bambu"
    ],
    pontos: 10,
    resposta:
      "🎋 O bambu é usado em diversos produtos. Apesar de ser uma matéria-prima renovável em determinadas condições, é importante analisar origem, processamento, transporte, durabilidade e descarte do produto."
  },

  {
    id: "roupa-sustentavel",
    categoria: "Produtos Ecológicos",
    palavras: [
      "roupa sustentavel",
      "roupa sustentável",
      "moda sustentavel",
      "moda sustentável"
    ],
    pontos: 15,
    resposta:
      "👕 Moda sustentável busca reduzir impactos ambientais e sociais relacionados à produção e ao consumo de roupas. Comprar menos, escolher peças duráveis e reutilizar ou doar roupas pode ajudar."
  },

  {
    id: "cosmeticos-sustentaveis",
    categoria: "Produtos Ecológicos",
    palavras: [
      "cosmetico sustentavel",
      "cosmético sustentável",
      "cosmeticos sustentaveis",
      "cosméticos sustentáveis"
    ],
    pontos: 15,
    resposta:
      "🧴 Cosméticos com propostas ambientais podem utilizar embalagens reutilizáveis ou recicláveis, refis e ingredientes de determinadas origens. É importante verificar informações confiáveis e não confiar apenas em propagandas."
  },

  {
    id: "embalagem-ecologica",
    categoria: "Produtos Ecológicos",
    palavras: [
      "embalagem ecologica",
      "embalagem ecológica",
      "embalagens sustentaveis",
      "embalagens sustentáveis"
    ],
    pontos: 15,
    resposta:
      "📦 Uma embalagem com menor impacto pode usar menos material, ser reutilizável ou facilitar a reciclagem. A avaliação deve considerar todo o ciclo de vida da embalagem."
  },

  // ===================================================
  // 🚨 GREENWASHING
  // ===================================================

  {
    id: "greenwashing",
    categoria: "Consumo Consciente",
    palavras: [
      "greenwashing",
      "maquiagem verde",
      "propaganda enganosa ambiental"
    ],
    pontos: 20,
    resposta:
      "🔎 Greenwashing é quando uma empresa ou produto transmite uma imagem ambientalmente responsável sem apresentar evidências suficientes para sustentar essa afirmação. Por isso, é importante verificar informações concretas."
  },

  {
    id: "selos-ambientais",
    categoria: "Consumo Consciente",
    palavras: [
      "selo ambiental",
      "selos ambientais",
      "certificacao ambiental",
      "certificação ambiental"
    ],
    pontos: 15,
    resposta:
      "🏷️ Selos e certificações podem ajudar o consumidor a identificar determinadas características ambientais ou sociais de produtos. É importante verificar quem concede a certificação e quais critérios são utilizados."
  },

  {
    id: "consumo-consciente",
    categoria: "Consumo Consciente",
    palavras: [
      "consumo consciente",
      "consumir conscientemente",
      "consumo sustentavel",
      "consumo sustentável"
    ],
    pontos: 15,
    resposta:
      "🛒 Consumo consciente significa pensar antes de comprar, avaliar a necessidade, a durabilidade, a origem, o impacto ambiental e as possibilidades de reutilização e descarte."
  },

  // ===================================================
  // 🔄 ECONOMIA CIRCULAR
  // ===================================================

  {
    id: "economia-circular",
    categoria: "Economia Circular",
    palavras: [
      "economia circular",
      "economia-circular"
    ],
    pontos: 20,
    resposta:
      "🔄 Economia circular busca manter produtos e materiais em uso pelo maior tempo possível, por meio de estratégias como reutilização, reparo, recuperação e reciclagem."
  },

  {
    id: "reutilizacao",
    categoria: "Economia Circular",
    palavras: [
      "reutilizacao",
      "reutilização",
      "reutilizar"
    ],
    pontos: 10,
    resposta:
      "🔄 Reutilização significa usar novamente um produto ou material, com ou sem adaptação. Ela pode prolongar a vida útil dos produtos e reduzir a geração de resíduos."
  },

  {
    id: "conserto",
    categoria: "Economia Circular",
    palavras: [
      "consertar",
      "conserto",
      "reparo",
      "reparar"
    ],
    pontos: 10,
    resposta:
      "🔧 Reparar um produto pode aumentar sua vida útil e evitar que ele seja descartado antes da hora. Isso é uma prática relacionada à economia circular."
  },

  // ===================================================
  // 🌱 AGRICULTURA E ALIMENTAÇÃO
  // ===================================================

  {
    id: "agricultura-sustentavel",
    categoria: "Agricultura",
    palavras: [
      "agricultura sustentavel",
      "agricultura sustentável"
    ],
    pontos: 15,
    resposta:
      "🌱 Agricultura sustentável busca produzir alimentos preservando recursos naturais, reduzindo impactos ambientais e considerando aspectos sociais e econômicos."
  },

  {
    id: "alimentos-organicos",
    categoria: "Alimentação",
    palavras: [
      "alimento organico",
      "alimentos organicos",
      "alimento orgânico",
      "alimentos orgânicos"
    ],
    pontos: 10,
    resposta:
      "🥕 Alimentos orgânicos são produzidos seguindo regras específicas de produção orgânica. No Brasil, produtos orgânicos certificados seguem critérios definidos pela legislação."
  },

  {
    id: "desperdicio-alimentos",
    categoria: "Alimentação",
    palavras: [
      "desperdicio de alimentos",
      "desperdício de alimentos",
      "desperdicio alimentos"
    ],
    pontos: 15,
    resposta:
      "🍎 Reduzir o desperdício de alimentos ajuda a evitar o uso desnecessário de água, energia, terra e outros recursos utilizados na produção e distribuição dos alimentos."
  },

  // ===================================================
  // 🚲 TRANSPORTE
  // ===================================================

  {
    id: "transporte-sustentavel",
    categoria: "Transporte",
    palavras: [
      "transporte sustentavel",
      "transporte sustentável"
    ],
    pontos: 15,
    resposta:
      "🚲 Transporte sustentável busca reduzir impactos ambientais e melhorar a eficiência da mobilidade. Caminhar, usar bicicleta, transporte público e compartilhar viagens podem ser alternativas dependendo da situação."
  },

  {
    id: "bicicleta",
    categoria: "Transporte",
    palavras: [
      "bicicleta",
      "bicicletas"
    ],
    pontos: 5,
    resposta:
      "🚲 A bicicleta não utiliza combustível durante seu uso e pode ser uma alternativa de mobilidade de baixo impacto ambiental, além de contribuir para a atividade física."
  },

  // ===================================================
  // 🏙️ CIDADES
  // ===================================================

  {
    id: "cidade-sustentavel",
    categoria: "Cidades",
    palavras: [
      "cidade sustentavel",
      "cidade sustentável",
      "cidades sustentaveis",
      "cidades sustentáveis"
    ],
    pontos: 15,
    resposta:
      "🏙️ Cidades sustentáveis buscam melhorar qualidade de vida e eficiência no uso de recursos, com ações relacionadas a transporte, energia, resíduos, áreas verdes, água e planejamento urbano."
  },

  {
    id: "areas-verdes",
    categoria: "Cidades",
    palavras: [
      "area verde",
      "área verde",
      "areas verdes",
      "áreas verdes"
    ],
    pontos: 10,
    resposta:
      "🌳 Áreas verdes urbanas podem contribuir para o conforto térmico, biodiversidade, lazer, paisagem e qualidade ambiental das cidades."
  }
];

// =====================================================
// 🧹 NORMALIZAÇÃO
// =====================================================

function normalizar(texto) {
  return String(texto)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// =====================================================
// 🚫 FILTRO
// =====================================================

function conteudoBloqueado(pergunta) {
  const texto = normalizar(pergunta);

  return palavrasBloqueadas.some((palavra) =>
    texto.includes(normalizar(palavra))
  );
}

// =====================================================
// 👋 SAUDAÇÕES E IDENTIDADE
// =====================================================

function mensagemEspecial(pergunta) {
  const texto = normalizar(pergunta).trim();

  if (
    texto.includes("quem e voce") ||
    texto.includes("quem e vc") ||
    texto.includes("seu nome") ||
    texto.includes("qual seu nome")
  ) {
    return `🤖 Eu sou o ${nomeIA}! Sou a IA educativa do EcoLife. 🌱 Meu objetivo é ajudar você a aprender sobre meio ambiente, sustentabilidade e produtos ecológicos.`;
  }

  if (
    texto === "oi" ||
    texto === "ola" ||
    texto === "bom dia" ||
    texto === "boa tarde" ||
    texto === "boa noite"
  ) {
    return `🤖 Olá! Eu sou o ${nomeIA}! 🌱 Faça uma pergunta sobre meio ambiente, sustentabilidade ou produtos ecológicos.`;
  }

  if (
    texto.includes("o que voce sabe") ||
    texto.includes("o que vc sabe")
  ) {
    return `🤖 Eu sou o ${nomeIA}! 🌱 Posso ajudar com reciclagem, resíduos, água, energia, biodiversidade, clima, sustentabilidade, economia circular, consumo consciente, produtos ecológicos e muitos outros assuntos ambientais.`;
  }

  return null;
}

// =====================================================
// 🔎 PESQUISA
// =====================================================

function pesquisar(pergunta) {
  const especial = mensagemEspecial(pergunta);

  if (especial) {
    return {
      resposta: especial,
      pontos: 0,
      assunto: "Zinho"
    };
  }

  const texto = normalizar(pergunta);

  for (const conhecimento of conhecimentos) {
    for (const palavra of conhecimento.palavras) {
      if (texto.includes(normalizar(palavra))) {
        return {
          resposta: `🤖 ${nomeIA}: ${conhecimento.resposta}`,
          pontos: conhecimento.pontos,
          assunto: conhecimento.categoria,
          id: conhecimento.id
        };
      }
    }
  }

  return {
    resposta:
      `🤖 ${nomeIA}: 🤔 Ainda não encontrei esse assunto na minha base de conhecimento. Tente pesquisar sobre meio ambiente, reciclagem, água, energia, biodiversidade, sustentabilidade ou produtos ecológicos. 🌱`,
    pontos: 0,
    assunto: "Não encontrado"
  };
}

// =====================================================
// 🔌 API PRINCIPAL
// =====================================================

app.post("/api/ia", (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta || !String(pergunta).trim()) {
      return res.status(400).json({
        erro: "Nenhuma pergunta foi enviada."
      });
    }

    // 🚫 BLOQUEIO
    if (conteudoBloqueado(pergunta)) {
      return res.json({
        nome: nomeIA,
        resposta:
          `🚫 ${nomeIA}: Não posso pesquisar ou responder sobre conteúdo indecente ou inadequado. 🌱`,
        pontos: 0,
        bloqueado: true
      });
    }

    const resultado = pesquisar(pergunta);

    res.json({
      nome: nomeIA,
      resposta: resultado.resposta,
      pontos: resultado.pontos,
      assunto: resultado.assunto,
      bloqueado: false
    });

  } catch (erro) {
    console.error("❌ Erro no Zinho:", erro);

    res.status(500).json({
      erro: "O Zinho encontrou um erro ao processar sua pesquisa."
    });
  }
});

// =====================================================
// 🧠 GERADOR DE PERGUNTAS DO ZINHO (por nível)
// Cria perguntas novas a cada partida usando a base de conhecimento.
// FÁCIL: 3 opções, erradas de outros temas.
// MÉDIO: 4 opções, erradas de temas variados.
// DIFÍCIL: 4 opções, erradas do MESMO tema (mais parecidas).
// =====================================================

const regrasNivel = {
  facil: { opcoes: 3, mesmoTema: false },
  medio: { opcoes: 4, mesmoTema: null },
  dificil: { opcoes: 4, mesmoTema: true }
};

function embaralharLista(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function primeiraFrase(texto) {
  const limpo = String(texto)
    .replace(/^[^\p{L}\p{N}]+/u, "")
    .replace(/\s+/g, " ")
    .trim();
  const achou = limpo.match(/^.+?[.!?](\s|$)/);
  return (achou ? achou[0] : limpo).trim();
}

function gerarPerguntas(nivel, tema, quantidade) {
  const regra = regrasNivel[nivel] || regrasNivel.medio;
  const temaNorm = normalizar(tema || "");

  // Sem tema: usa tudo. Com tema (ex.: "agua"): só temas ambientais que combinem.
  // Desafios de outras matérias (matemática etc.) não geram nada e usam o banco fixo.
  const base = temaNorm
    ? conhecimentos.filter((c) => normalizar(c.categoria).includes(temaNorm))
    : conhecimentos;
  if (base.length < 3) return [];

  return embaralharLista(base)
    .slice(0, quantidade)
    .map((item) => {
      const certa = primeiraFrase(item.resposta);
      const outros = conhecimentos.filter((c) => c.id !== item.id);
      const mesmos = outros.filter((c) => c.categoria === item.categoria);
      const diferentes = outros.filter((c) => c.categoria !== item.categoria);

      let pool;
      if (regra.mesmoTema === true) pool = [...embaralharLista(mesmos), ...embaralharLista(diferentes)];
      else if (regra.mesmoTema === false) pool = [...embaralharLista(diferentes), ...embaralharLista(mesmos)];
      else pool = embaralharLista(outros);

      const erradas = [];
      for (const c of pool) {
        const frase = primeiraFrase(c.resposta);
        if (frase !== certa && !erradas.includes(frase)) erradas.push(frase);
        if (erradas.length === regra.opcoes - 1) break;
      }

      const assunto = item.palavras[0].charAt(0).toUpperCase() + item.palavras[0].slice(1);

      return {
        id: `zinho-${item.id}`,
        pergunta: `Qual afirmação sobre "${assunto}" está correta?`,
        opcoes: embaralharLista([
          { texto: certa, correta: true },
          ...erradas.map((texto) => ({ texto, correta: false }))
        ]),
        explicacao: `🤖 ${nomeIA}: ${item.resposta}`
      };
    });
}

app.get("/api/perguntas", (req, res) => {
  const nivel = String(req.query.nivel || "medio");
  const quantidade = Math.min(Math.max(parseInt(req.query.quantidade) || 5, 1), 10);
  res.json({
    nome: nomeIA,
    nivel,
    perguntas: gerarPerguntas(nivel, req.query.tema, quantidade)
  });
});

// =====================================================
// 💡 EXPLICAÇÃO DAS RESPOSTAS
// Recebe a pergunta e a resposta certa e devolve a explicação do Zinho.
// =====================================================

app.post("/api/explicar", (req, res) => {
  const { pergunta, respostaCorreta } = req.body || {};
  const textoTotal = `${pergunta || ""} ${respostaCorreta || ""}`.trim();

  if (!textoTotal) {
    return res.status(400).json({ erro: "Envie a pergunta e a resposta correta." });
  }

  if (conteudoBloqueado(textoTotal)) {
    return res.json({ nome: nomeIA, explicacao: `🚫 ${nomeIA}: Não posso explicar esse conteúdo. 🌱` });
  }

  const tentativas = [respostaCorreta || "", pergunta || "", textoTotal];
  for (const tentativa of tentativas) {
    if (!tentativa.trim()) continue;
    const r = pesquisar(tentativa);
    if (r.assunto !== "Não encontrado" && r.assunto !== "Zinho") {
      return res.json({ nome: nomeIA, explicacao: r.resposta, assunto: r.assunto });
    }
  }

  res.json({
    nome: nomeIA,
    explicacao: `🤖 ${nomeIA}: A resposta certa é "${respostaCorreta}". 🌱 Sempre pense no impacto que cada atitude tem no meio ambiente!`,
    assunto: "Geral"
  });
});

// =====================================================
// 🏠 TESTE DO SERVIDOR
// =====================================================

app.get("/", (req, res) => {
  res.json({
    nome: nomeIA,
    status: "online",
    projeto: "EcoLife",
    mensagem: "🤖 Zinho está funcionando!",
    especialidade:
      "Meio ambiente, sustentabilidade e produtos ecológicos"
  });
});

// =====================================================
// 📚 LISTAR ASSUNTOS
// =====================================================

app.get("/api/assuntos", (req, res) => {
  const assuntos = conhecimentos.map((item) => ({
    id: item.id,
    categoria: item.categoria,
    pontos: item.pontos
  }));

  res.json({
    nome: nomeIA,
    total: assuntos.length,
    assuntos: assuntos
  });
});

// =====================================================
// 🚀 SERVIDOR
// =====================================================

const PORTA = process.env.PORT || 3001;

app.listen(PORTA, () => {
  console.log("");
  console.log("==============================================");
  console.log("🤖 ZINHO - IA EDUCATIVA DO ECOLIFE");
  console.log("==============================================");
  console.log("🌱 Meio ambiente: ATIVO");
  console.log("♻️ Reciclagem: ATIVO");
  console.log("🛍️ Produtos ecológicos: ATIVO");
  console.log("🌎 Sustentabilidade: ATIVO");
  console.log("🔎 Sistema de pesquisa: ATIVO");
  console.log("⭐ Sistema de pontos: ATIVO");
  console.log("🚫 Filtro de conteúdo: ATIVO");
  console.log(`📡 http://localhost:${PORTA}`);
  console.log("==============================================");
  console.log("");
});