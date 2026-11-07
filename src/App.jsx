import { useEffect, useMemo, useState } from 'react'
import './App.css'

const livros = [
  {
    id: 1,
    titulo: 'A Floresta que Aprendeu a Falar',
    emoji: '🌳',
    categoria: 'Natureza',
    descricao:
      'Uma aventura sobre uma floresta ameaçada e um grupo de amigos que decide protegê-la.',
    historia: `Em uma pequena cidade cercada por montanhas existia a Floresta Verde, um lugar conhecido pelo canto dos pássaros, pelas árvores antigas e por um riacho que brilhava ao sol. Os moradores costumavam passear por suas trilhas, mas poucos percebiam como cada parte daquele ambiente dependia das outras.

Certa manhã, Lia, Caio e Bento notaram que o riacho estava mais baixo do que de costume. Havia marcas de rodas perto das árvores e alguns ninhos pareciam abandonados. Em vez de espalhar boatos, os três anotaram o que viram, tiraram fotos dos locais afetados e conversaram com a professora de Ciências.

A professora explicou que uma floresta é um conjunto de relações. As árvores oferecem abrigo, ajudam a manter o solo firme e participam do ciclo da água. Insetos polinizam flores, fungos ajudam a decompor folhas e os animais espalham sementes. Quando uma parte é prejudicada, muitas outras podem sentir os efeitos.

Os amigos organizaram uma pequena equipe de observação com moradores e especialistas. Eles mapearam as áreas danificadas, recolheram o lixo encontrado nas trilhas e pediram à prefeitura que investigasse o corte irregular de árvores. Também prepararam placas explicando como visitar a floresta sem perturbar os animais.

No começo, nem todos deram atenção ao projeto. Alguns achavam que três crianças não conseguiriam mudar nada. Mas, quando a escola apresentou os registros e os moradores viram a quantidade de resíduos retirada das trilhas, mais pessoas se ofereceram para ajudar. A comunidade plantou espécies nativas em áreas adequadas e passou a acompanhar o crescimento das mudas.

Meses depois, os sinais de recuperação começaram a aparecer. Novas plantas cobriam partes do solo, aves voltaram a ser vistas perto do riacho e a comunidade aprendeu a observar a natureza com mais cuidado. A floresta não se recuperou de um dia para o outro, mas agora tinha pessoas comprometidas com sua proteção.

Na semana seguinte, a turma voltou à floresta acompanhada por uma bióloga. Ela mostrou como observar pegadas sem perseguir os animais e como registrar mudanças nas plantas sem arrancar folhas. Cada criança recebeu uma pequena ficha de campo e aprendeu a anotar data, local e condições do tempo.

Durante a caminhada, Bento encontrou uma área onde o solo estava descoberto. A bióloga explicou que, sem raízes e folhas protegendo a terra, a chuva pode levar nutrientes para longe e aumentar a erosão. O grupo marcou o trecho no mapa e combinou de acompanhar sua recuperação, sem pisotear a vegetação que começava a nascer.

Mais adiante, ouviram um zumbido vindo de flores pequenas. Lia observou abelhas visitando cada uma e desenhou o caminho delas no caderno. A professora explicou que muitos alimentos dependem da polinização e que jardins com espécies variadas podem oferecer abrigo e alimento a diferentes polinizadores.

Os amigos organizaram uma exposição na escola com fotos, desenhos e dados das visitas. Em vez de apenas dizer que a floresta precisava de ajuda, mostraram o que tinham observado e apresentaram propostas: proteger as margens do riacho, evitar lixo nas trilhas e pedir orientação técnica para recuperar áreas danificadas.

Nem todo mundo concordou de imediato. Um morador achou que as mudanças dariam trabalho demais, enquanto outro perguntou se plantar árvores resolveria tudo. Caio respondeu que cada lugar precisava de uma solução adequada e que as mudas certas, o cuidado contínuo e a proteção das plantas existentes eram tão importantes quanto o plantio.

Meses depois, os alunos compararam seus registros. Em alguns pontos, a vegetação estava mais forte; em outros, ainda havia problemas que exigiam atenção. Eles aprenderam que cuidar da natureza não produz resultados instantâneos: observar, ajustar o plano e continuar trabalhando também fazem parte da conservação.

Lia, Caio e Bento entenderam que proteger a natureza não significa apenas plantar árvores: também é investigar problemas, respeitar os seres vivos e trabalhar em conjunto. Desde então, a Floresta Verde passou a ser conhecida como o lugar onde uma comunidade aprendeu a escutar os sinais da natureza.`,
  },
  {
    id: 2,
    titulo: 'O Último Rio Azul',
    emoji: '💧',
    categoria: 'Água',
    descricao:
      'Uma comunidade decide recuperar o rio que abastece sua cidade.',
    historia: `Durante muitos anos, o Rio Azul atravessava uma comunidade e fornecia água para plantações, animais e moradores. Nos fins de semana, famílias caminhavam pelas margens e crianças observavam pequenos peixes nas partes rasas. O rio fazia parte da memória de todos.

Com o crescimento do bairro, porém, o cenário mudou. Sacolas e garrafas se acumulavam em alguns pontos, a água ficou turva e o cheiro desagradável afastou os visitantes. Sofia, que morava perto dali, começou a perguntar aos adultos o que havia acontecido. Descobriu que o lixo descartado incorretamente e o despejo de resíduos sem tratamento estavam prejudicando o rio.

Sofia conversou com seus colegas e sugeriu investigar o problema antes de organizar qualquer ação. Com a orientação de professores, eles registraram os pontos com maior acúmulo de lixo e entrevistaram moradores. Aprenderam também que ninguém deveria entrar em água contaminada ou recolher materiais perigosos sem equipamento e supervisão adequada.

A turma apresentou as observações em uma reunião comunitária. Os moradores organizaram uma limpeza segura das margens, enquanto a escola preparou cartazes sobre descarte correto e economia de água. Representantes da comunidade levaram os registros aos órgãos responsáveis e solicitaram a verificação de possíveis fontes de poluição.

A mudança exigiu paciência. Em algumas semanas, ainda surgiam resíduos trazidos pela chuva, e todos perceberam que uma única limpeza não resolveria o problema. Por isso, criaram um calendário de monitoramento, instalaram avisos em locais permitidos e divulgaram informações sobre coleta de lixo e descarte de óleo de cozinha.

Com o passar dos meses, certos trechos ficaram mais limpos e os moradores voltaram a usar os caminhos próximos ao rio. O acompanhamento continuou, porque a qualidade da água depende de saneamento, fiscalização e hábitos responsáveis — não apenas de mutirões ocasionais.

Sofia criou um diário do rio com páginas para anotar a cor da água, o cheiro, a quantidade de chuva e os locais onde havia resíduos. Ela aprendeu que uma observação isolada não prova a causa de um problema, mas registros feitos ao longo do tempo ajudam especialistas a investigar o que está acontecendo.

A turma convidou uma técnica ambiental para explicar como a água usada nas casas precisa passar por coleta e tratamento. Ela mostrou, com desenhos simples, que jogar óleo, produtos químicos ou lixo no ralo pode dificultar o tratamento e prejudicar rios e animais. As crianças prepararam cartazes com orientações seguras para as famílias.

Durante uma reunião comunitária, um pescador contou que algumas áreas tinham menos peixes do que antes. A técnica ouviu o relato e explicou que era importante combinar a experiência dos moradores com análises da água e estudos sobre o habitat. Ninguém precisava adivinhar: era possível reunir evidências e encaminhar as informações aos órgãos responsáveis.

Uma semana depois, a escola organizou uma caminhada apenas pelas áreas autorizadas e seguras das margens. Os participantes recolheram resíduos com luvas e equipamentos adequados, sem entrar na água. O grupo separou o que podia ser encaminhado para reciclagem e registrou os pontos onde o lixo se acumulava com frequência.

Sofia percebeu que limpar o rio uma vez não bastaria se o lixo continuasse chegando todos os dias. Por isso, os moradores pediram mais lixeiras nos locais de visitação, placas educativas e fiscalização de possíveis despejos irregulares. A associação de bairro passou a acompanhar as respostas e a cobrar medidas concretas.

No fim do semestre, a turma apresentou o diário do rio e comparou os registros iniciais com os mais recentes. Nem todos os sinais tinham melhorado, mas agora havia dados, responsáveis envolvidos e um plano de acompanhamento. Sofia entendeu que a esperança fica mais forte quando vem acompanhada de informação e persistência.

Sofia compreendeu que uma ideia pode começar com uma pergunta, mas precisa de conhecimento, segurança e colaboração para virar uma transformação duradoura. O Rio Azul ainda tinha desafios, porém a comunidade já não fingia que eles não existiam.`,
  },
  {
    id: 3,
    titulo: 'A Cidade dos Mil Recipientes',
    emoji: '♻️',
    categoria: 'Reciclagem',
    descricao:
      'Uma cidade descobre que os materiais podem ganhar novos usos.',
    historia: `Na Cidade dos Mil Recipientes havia lixeiras de várias cores nas praças, nas escolas e perto das lojas. Mesmo assim, quase tudo acabava misturado: papel limpo ficava junto de restos de comida, embalagens recicláveis iam para o lixo comum e objetos que ainda poderiam ser usados eram descartados.

Helena percebeu o problema durante uma feira escolar. Ao final do evento, viu pilhas de caixas, copos e embalagens. Em vez de apenas reclamar, perguntou à professora se a turma poderia descobrir quanto material era desperdiçado e o que poderia ser evitado.

Durante uma semana, os alunos observaram os resíduos produzidos na escola, sem tocar em materiais sujos ou perigosos. Separaram os dados por tipo e descobriram que muitas embalagens poderiam ter sido evitadas com garrafas reutilizáveis e recipientes duráveis. Também aprenderam que as regras de reciclagem variam de acordo com a coleta disponível em cada município.

A turma criou três propostas: reduzir materiais descartáveis nos eventos, reutilizar objetos em bom estado e encaminhar recicláveis limpos para a coleta adequada. Caixas viraram organizadores, folhas usadas de um lado serviram para rascunhos e potes foram aproveitados em atividades de artesanato. O que não podia ser reutilizado foi separado conforme as orientações locais.

No início, algumas pessoas se confundiam com as lixeiras. Helena e os colegas prepararam placas com exemplos simples e explicaram por que restos de alimentos podem contaminar certos recicláveis. A escola também convidou uma cooperativa de catadores para falar sobre o trabalho de triagem e a importância de encaminhar materiais corretamente.

Depois de algumas semanas, a quantidade de lixo misturado diminuiu. A escola passou a planejar melhor as compras e a evitar produtos com embalagens desnecessárias. Os estudantes descobriram que reciclar é importante, mas reduzir o consumo e reutilizar com segurança também fazem diferença.

Helena começou a observar as compras feitas pela família. Notou que alguns produtos vinham com várias camadas de embalagem e que outros podiam ser comprados em recipientes reutilizáveis. Ela montou uma tabela simples para comparar quantidade, necessidade e possibilidade de reaproveitamento, sem concluir que toda embalagem era inútil.

Na escola, os alunos fizeram uma auditoria dos resíduos durante uma semana, separando os materiais com orientação dos professores. Descobriram que grande parte do lixo vinha de copos descartáveis, folhas usadas apenas de um lado e embalagens de lanches. A turma decidiu testar mudanças pequenas antes de propor regras para toda a escola.

Uma comerciante local aceitou participar do projeto e passou a oferecer descontos modestos para quem levava sacolas reutilizáveis, quando isso era adequado. Ela também explicou que higiene e conservação dos alimentos continuavam sendo essenciais. Reutilizar não significava usar qualquer recipiente em qualquer situação.

Os estudantes criaram uma oficina para transformar potes limpos em organizadores e vasos, mas aprenderam que reaproveitar tinha limites: materiais sujos, perigosos ou sem uso real não deveriam ser guardados só para parecer ecológicos. O melhor resultado era evitar o desperdício antes que ele acontecesse.

Alguns moradores perguntaram se bastava colocar tudo na coleta seletiva. Helena pesquisou as orientações do serviço municipal e descobriu que a aceitação de materiais podia variar de um lugar para outro. O grupo publicou um guia com informações verificadas e indicou onde consultar as regras locais, em vez de espalhar instruções genéricas.

Depois de dois meses, a escola comparou a quantidade de resíduos com a medição inicial. O resultado melhorou, mas ainda havia espaço para mudanças. Helena percebeu que consumir com consciência não era uma competição para produzir zero lixo de um dia para o outro; era um processo de fazer escolhas melhores e aprender com os resultados.

A Cidade dos Mil Recipientes ganhou fama não por ter mais lixeiras, mas por fazer escolhas mais conscientes. Helena percebeu que cada embalagem tem uma história antes e depois do descarte — e que pensar nessa história ajuda a construir uma cidade com menos desperdício.`,
  },
  {
    id: 4,
    titulo: 'O Jardim das Estrelas',
    emoji: '🌟',
    categoria: 'Meio Ambiente',
    descricao:
      'Um terreno abandonado vira um jardim comunitário.',
    historia: `No centro de um bairro movimentado havia um terreno vazio. O solo estava coberto por entulho, quase não havia sombra e as pessoas atravessavam a rua para evitar o local. Mesmo assim, Joana imaginava como aquele espaço poderia ser diferente.

Ela conversou com vizinhos, professores e comerciantes para saber o que o bairro precisava. Alguns queriam flores, outros gostariam de cultivar temperos e várias famílias pediram um lugar tranquilo para conversar. Antes de começar, o grupo procurou os responsáveis pelo terreno e verificou quais cuidados e autorizações seriam necessários.

Com a permissão e a orientação adequadas, os voluntários organizaram a limpeza do espaço. Resíduos perigosos e entulho foram destinados a serviços apropriados, e ninguém tentou manusear materiais desconhecidos. Depois, especialistas e moradores avaliaram a luz do sol, a drenagem e as condições do solo para escolher plantas adequadas à região.

O projeto recebeu o nome de Jardim das Estrelas. Foram plantadas espécies nativas e flores que atraíam polinizadores, além de uma pequena horta comunitária. As crianças fizeram placas com os nomes das plantas, enquanto adultos organizaram uma escala para regar, cuidar das ferramentas e observar sinais de pragas sem prejudicar o ambiente.

Nem tudo saiu como planejado. Algumas mudas não resistiram ao calor e uma parte da horta recebeu pouca luz. Em vez de desistir, os moradores pesquisaram, pediram orientação e adaptaram o plantio. Aprenderam que um jardim saudável exige observação, manutenção e escolhas adequadas ao clima local.

Com o tempo, o terreno ganhou cores, sombra e visitantes. Vizinhos que antes quase não se conheciam passaram a trocar sementes, receitas e ideias. Abelhas e borboletas apareceram entre as flores, e a horta forneceu pequenas colheitas para atividades comunitárias.

Joana e seus amigos desenharam um mapa do terreno, anotando onde havia sol durante a manhã e onde a sombra permanecia à tarde. A professora explicou que observar o espaço antes de plantar ajuda a escolher espécies adequadas e evita gastar água e esforço com plantas que não conseguem se desenvolver naquele lugar.

Uma moradora que cuidava de jardins ensinou as crianças a reconhecer plantas nativas da região. Elas descobriram que espécies locais podem oferecer alimento e abrigo a animais da área e que não era necessário encher o terreno de flores exóticas para deixá-lo bonito. A diversidade seria mais importante do que uma aparência uniforme.

Antes de construir os canteiros, o grupo conversou sobre acessibilidade e segurança. Deixaram caminhos livres, identificaram ferramentas que só adultos poderiam manusear e combinaram uma escala de rega. Assim, o jardim seria um espaço de todos, e não apenas um projeto que dependesse de uma única pessoa.

Quando as primeiras mudas perderam folhas, Joana ficou preocupada. A professora explicou que era preciso observar o solo, a luz e a quantidade de água antes de decidir o que fazer. Os alunos ajustaram os cuidados e anotaram as mudanças, aprendendo que plantas diferentes não precisam exatamente do mesmo tratamento.

Com o tempo, apareceram borboletas e pequenos insetos. A turma observou os visitantes sem capturá-los e criou placas explicando a função das plantas e dos polinizadores. Também montou um cantinho de leitura com livros emprestados, para que o jardim servisse tanto à biodiversidade quanto à convivência.

No dia da abertura, cada grupo apresentou o que tinha aprendido e contou quais tarefas ainda precisavam ser feitas. As famílias se comprometeram a manter a escala de cuidados e a avaliar o jardim a cada estação. Joana percebeu que um espaço vivo precisa de atenção contínua, não apenas de uma inauguração bonita.

Joana entendeu que transformar um lugar não acontece por mágica: exige planejamento, cuidado e participação. O Jardim das Estrelas tornou-se um lembrete de que espaços pequenos também podem apoiar a biodiversidade e fortalecer os laços de uma comunidade.`,
  },
  {
    id: 5,
    titulo: 'A Expedição Verde',
    emoji: '🧭',
    categoria: 'Aventura',
    descricao:
      'Quatro amigos estudam diferentes ecossistemas.',
    historia: `Quatro amigos — Ravi, Bia, Miguel e Nara — receberam da professora um caderno de campo e uma missão: conhecer diferentes ecossistemas da região e descobrir como os seres vivos se relacionavam com o ambiente. Não era uma competição para chegar primeiro, mas uma investigação para observar com respeito.

Na primeira parada, uma trilha atravessava uma área de mata. Os amigos viram folhas comidas por insetos, aves procurando alimento e sementes espalhadas pelo chão. A professora explicou que os ecossistemas incluem seres vivos, solo, água, luz e clima. Cada organismo participa de relações que ajudam a manter o ambiente funcionando.

Depois, o grupo visitou um centro de educação ambiental próximo a um rio. Ali aprenderam como a poluição pode afetar organismos aquáticos e por que não se deve jogar lixo na água. Observaram o local a partir de áreas seguras, anotaram as diferenças entre trechos sombreados e abertos e conversaram com uma educadora sobre a importância das matas ciliares.

Na terceira etapa, viram uma área que havia sofrido com a retirada de vegetação. O solo estava mais exposto e a chuva formava pequenos sulcos. A educadora explicou que a perda de plantas pode aumentar a erosão, reduzir abrigos para animais e alterar a circulação da água. A recuperação precisava considerar as espécies nativas e as condições daquele lugar.

Os amigos também visitaram uma horta agroecológica. Descobriram que compostagem bem feita pode transformar restos vegetais adequados em matéria orgânica para o solo, e que economizar água e diversificar cultivos são práticas úteis. Cada anotação do caderno ajudava a comparar os ambientes sem concluir que todos precisavam das mesmas soluções.

Ao voltar para a escola, o grupo organizou uma exposição com mapas, desenhos, fotografias autorizadas e pequenas explicações. Em vez de apresentar apenas problemas, mostraram exemplos de recuperação e atitudes possíveis: reduzir resíduos, respeitar áreas protegidas, consumir com responsabilidade e apoiar projetos ambientais sérios.

Na primeira parada, os quatro amigos observaram um campo aberto e uma área de mata próxima. A guia pediu que comparassem temperatura, sombra, umidade e presença de animais sem retirar nada do ambiente. As diferenças mostraram como a cobertura vegetal influencia as condições de um lugar.

Durante a caminhada, encontraram marcas de erosão ao lado de uma trilha. Em vez de sair do caminho para investigar de perto, fotografaram o local de uma distância segura e anotaram sua posição. A guia explicou que atalhos criados por visitantes podem danificar plantas e concentrar o escoamento da água.

No acampamento autorizado, o grupo praticou a regra de levar de volta todo o resíduo produzido. Também aprendeu a economizar água, armazenar alimentos corretamente e respeitar os avisos da área protegida. A aventura ficou mais interessante quando perceberam que responsabilidade e diversão podiam caminhar juntas.

Na manhã seguinte, observaram aves com binóculos e registraram cores, tamanhos e comportamentos, sem tentar atraí-las ou tocar em ninhos. Um pesquisador mostrou como essas anotações ajudam a acompanhar a presença de espécies, desde que sejam feitas com cuidado e comparadas com outras observações.

Uma chuva forte mudou o plano do dia. A guia escolheu uma rota segura e explicou que insistir no percurso original seria arriscado. Os amigos entenderam que uma boa expedição depende de preparação, previsão do tempo e disposição para mudar de ideia quando as condições não são favoráveis.

De volta à escola, organizaram as descobertas em um mapa ilustrado e separaram observações confirmadas de perguntas ainda sem resposta. A turma decidiu pesquisar mais antes de sugerir soluções para os problemas encontrados. A expedição ensinou que explorar é também reconhecer os limites do próprio conhecimento.

A Expedição Verde terminou, mas o caderno continuou sendo preenchido. Os quatro amigos aprenderam que explorar a natureza significa fazer perguntas, observar sem destruir e reconhecer que cada ecossistema tem características próprias que merecem ser compreendidas e protegidas.`,
  },
  {
    id: 6,
    titulo: 'O Planeta Depois da Chuva',
    emoji: '🌍',
    categoria: 'Sustentabilidade',
    descricao:
      'Jovens ajudam a reconstruir uma cidade sustentável.',
    historia: `A cidade de Aurora era conhecida por suas avenidas movimentadas, mas enfrentava problemas cada vez mais difíceis: poucas áreas verdes, desperdício de água, excesso de resíduos e ruas que alagavam quando chovia muito. Depois de uma temporada de chuvas intensas, os moradores decidiram que reconstruir não poderia significar apenas reparar o que havia quebrado.

Um grupo de jovens criou o projeto Novo Amanhã. Antes de propor soluções, eles conversaram com moradores de diferentes bairros e fizeram um mapa dos problemas mais citados. Descobriram que algumas ruas tinham poucas árvores, certos locais não possuíam coleta seletiva regular e muitas pessoas não sabiam onde solicitar reparos em vazamentos.

A equipe apresentou as informações em uma reunião pública e trabalhou com professores, técnicos e representantes da prefeitura. Aprenderam que projetos urbanos precisam considerar acessibilidade, orçamento, manutenção e as necessidades das pessoas que vivem em cada área. Nenhuma solução isolada resolveria todos os problemas.

Uma das primeiras iniciativas foi criar jardins de chuva em locais adequados, com orientação técnica, para ajudar a absorver parte da água que escorria pelas superfícies impermeáveis. Em outras áreas, foram plantadas árvores apropriadas e melhorados espaços de sombra. A escola iniciou uma campanha para reduzir descartáveis e explicar a separação de resíduos conforme os serviços disponíveis.

Os jovens também organizaram oficinas sobre economia de água e energia. As famílias aprenderam a identificar desperdícios, planejar compras e reaproveitar materiais quando isso era seguro. Pequenos comércios passaram a reduzir embalagens e divulgar pontos de coleta. A cidade não ficou perfeita de repente, mas começou a medir resultados e ajustar o que não funcionava.

Alguns meses depois, moradores notaram praças mais cuidadas e uma participação maior nas reuniões. Os jardins precisavam de manutenção, as árvores ainda eram jovens e a coleta seletiva continuava sendo ampliada. O grupo registrou os avanços e as dificuldades para que o projeto não dependesse apenas do entusiasmo inicial.

Na reunião seguinte, os moradores de Aurora dividiram o plano em etapas. Primeiro, precisavam descobrir quais ruas alagavam com mais frequência; depois, identificar possíveis causas e definir quais órgãos poderiam agir. A cidade montou um mapa com relatos e registros, deixando claro que as informações ainda precisavam ser verificadas tecnicamente.

Uma engenheira explicou que enchentes podem envolver vários fatores, como drenagem insuficiente, impermeabilização do solo, descarte irregular de resíduos e ocupação de áreas vulneráveis. Nenhuma solução isolada resolveria tudo. Era necessário combinar infraestrutura, planejamento urbano, manutenção e orientação à população.

Os estudantes participaram de uma atividade sobre áreas permeáveis. Compararam o que acontece quando a água cai sobre uma superfície coberta por concreto e quando encontra solo com vegetação. O experimento não substituía um estudo profissional, mas ajudou a entender por que jardins de chuva e espaços verdes podem contribuir para o manejo da água quando bem planejados.

Enquanto isso, comerciantes discutiram maneiras de reduzir desperdícios de energia e materiais. Algumas medidas eram simples, outras exigiam investimento e apoio público. A comunidade registrou os custos e os benefícios esperados, evitando prometer que uma mudança resolveria todos os problemas imediatamente.

Nem todas as propostas foram aprovadas de primeira. Os moradores organizaram perguntas, solicitaram explicações e revisaram as ideias com base nas respostas. Aprenderam que participação cidadã também significa ouvir opiniões diferentes, acompanhar decisões e cobrar transparência sem espalhar informações não confirmadas.

Um ano depois, Aurora ainda enfrentava desafios, mas possuía dados melhores, projetos em andamento e moradores mais preparados para participar. A transformação não foi um milagre depois da chuva: foi o resultado de planejamento, conhecimento e trabalho coletivo mantido mesmo quando a empolgação inicial passou.

O Novo Amanhã mostrou que sustentabilidade não é uma decoração verde nem uma promessa rápida. É um processo que combina ciência, planejamento, participação pública e hábitos cotidianos. Aurora começou a mudar quando seus moradores perceberam que uma cidade melhor é construída por muitas decisões compartilhadas.`,
  },
  {
    id: 7,
    titulo: 'O Mistério dos Números',
    emoji: '🔢',
    categoria: 'Matemática',
    descricao:
      'Uma aventura que mostra a Matemática no cotidiano.',
    historia: `Pedro adorava organizar coisas, mas quando a escola anunciou uma feira, percebeu que sua lista de tarefas estava cheia de números. Precisava calcular quantos cartazes seriam necessários, dividir as mesas entre as turmas, estimar o custo dos materiais e organizar o dinheiro arrecadado.

Primeiro, Pedro contou os grupos participantes e desenhou um mapa simples do pátio. Se cada mesa pudesse receber dois projetos, quantas mesas seriam necessárias? Se cada turma trouxesse três caixas de livros, quantas caixas haveria ao todo? Ele descobriu que multiplicação e divisão ajudavam a planejar sem adivinhar.

Depois, comparou preços e montou um orçamento. Somou os custos, subtraiu o dinheiro já arrecadado e reservou uma pequena margem para imprevistos. A professora explicou que estimar também era importante: um cálculo aproximado podia revelar rapidamente se uma ideia estava muito cara antes de gastar tempo com detalhes.

No dia da preparação, surgiu um problema. Uma turma trouxe mais objetos do que o espaço permitia. Pedro mediu as mesas, reorganizou as caixas e calculou como distribuir tudo sem bloquear as passagens. Usou frações para dividir uma área de exposição e percebeu que medidas e geometria eram tão úteis quanto as quatro operações.

Durante a feira, os visitantes compraram alguns produtos e fizeram doações. Pedro anotou cada valor e conferiu o total com um colega. Quando encontraram uma diferença, revisaram as contas com calma e localizaram um número registrado duas vezes. Ele aprendeu que verificar o resultado faz parte da Matemática.

No fim do dia, a feira arrecadou o suficiente para comprar materiais para a biblioteca. Pedro percebeu que os números não eram apenas exercícios de um caderno: ajudavam a tomar decisões, comparar opções e resolver problemas reais.

Na manhã seguinte, Theo voltou ao quadro e decidiu verificar cada pista com calma. Em vez de tentar adivinhar o resultado, escreveu o que já sabia, marcou o que precisava descobrir e escolheu uma operação para cada etapa. A professora lembrou que uma resposta precisa fazer sentido dentro da situação apresentada.

O grupo encontrou uma tabela com a quantidade de sementes recolhidas por cada equipe. Theo organizou os dados em colunas e percebeu que a tabela facilitava a comparação. Depois, transformou os números em um gráfico simples, que mostrou rapidamente qual equipe havia recolhido mais sementes e quais resultados estavam próximos.

Uma pista usava frações para dividir uma caixa de materiais igualmente entre quatro salas. Theo desenhou a caixa em partes iguais antes de calcular. Ao visualizar a divisão, percebeu por que o tamanho de cada parte dependia tanto da quantidade total quanto do número de grupos.

Outra etapa exigia estimar o tempo de uma caminhada. Os amigos compararam a distância com o ritmo médio do grupo e fizeram uma previsão. Quando chegaram ao local, compararam a estimativa com o tempo real e discutiram quais fatores poderiam explicar a diferença, como pausas e mudanças no caminho.

Quase no fim, Theo encontrou uma conta com resultado estranho. Ele refez os passos e descobriu que havia copiado um número incorretamente. A experiência mostrou que revisar não era sinal de fracasso: conferir unidades, operações e resultados ajuda a encontrar erros antes que eles causem confusão.

Quando o mistério foi resolvido, a turma percebeu que os números estavam ligados a decisões do cotidiano: repartir materiais, comparar quantidades, planejar horários e interpretar informações. Theo guardou o caderno, agora cheio de estratégias diferentes para enfrentar o próximo desafio.

A partir daquela experiência, ele passou a enfrentar desafios matemáticos como quem monta um quebra-cabeça. Em vez de procurar uma resposta sem pensar, identificava o que sabia, escolhia uma estratégia e conferia se o resultado fazia sentido.`,
  },
  {
    id: 8,
    titulo: 'A Máquina das Palavras',
    emoji: '📖',
    categoria: 'Português',
    descricao:
      'Uma aventura sobre leitura, interpretação e escrita.',
    historia: `Ana encontrou um livro antigo na estante da avó. Na primeira página havia uma frase escrita à mão: “As palavras podem abrir portas, mas é preciso aprender a atravessá-las.” Curiosa, ela perguntou o que aquilo significava. A avó respondeu que ler era uma forma de viajar por ideias, lugares e épocas sem sair do lugar.

Na escola, a professora propôs um desafio: cada aluno deveria encontrar uma mensagem escondida em um pequeno conto. Ana leu depressa na primeira tentativa, mas não percebeu por que a personagem havia tomado determinada decisão. Então voltou ao texto, observou as pistas e percebeu que compreender exige atenção ao contexto, às intenções e às palavras escolhidas pelo autor.

Inspirada pelo desafio, Ana criou a Máquina das Palavras — um caderno em que cada página guardava uma palavra nova, seu significado e uma frase inventada por ela. Quando encontrava uma palavra desconhecida, tentava compreender pelo contexto e depois consultava uma fonte confiável. Aos poucos, seu vocabulário cresceu.

Um dia, a turma precisou escrever uma notícia sobre um projeto de reciclagem. Ana entrevistou colegas, anotou informações e separou fatos de opiniões. Fez um primeiro rascunho, releu para corrigir trechos confusos e pediu a alguém que verificasse se a mensagem estava clara. Descobriu que escrever bem envolve planejar, revisar e pensar no leitor.

A máquina também a ajudou a perceber que uma mesma palavra pode ter sentidos diferentes conforme a situação. Em poemas, imagens e comparações criavam emoções; em instruções, a clareza era essencial; em uma notícia, era importante indicar de onde vinham as informações. Cada tipo de texto tinha uma finalidade.

Quando a turma publicou o jornal escolar, Ana ficou orgulhosa. Sua notícia ajudou outros estudantes a conhecer o projeto e participar. Ela entendeu que a linguagem não serve apenas para responder provas: permite compartilhar descobertas, fazer perguntas, contar experiências e compreender pontos de vista diferentes.

Ana começou a guardar na máquina palavras que encontrava em livros, conversas e placas da cidade. Para cada palavra, anotava o significado e uma frase própria. Quando surgia uma expressão desconhecida, tentava compreender o contexto e depois consultava uma fonte confiável para confirmar a interpretação.

Em uma das aventuras, a máquina produziu uma carta sem pontuação. Ana leu o texto em voz alta e percebeu que o sentido mudava conforme as pausas. Ela acrescentou pontos e vírgulas, depois comparou as versões para entender como a pontuação ajuda a organizar as ideias e orientar quem está lendo.

Mais tarde, encontrou duas personagens que discordavam sobre como resolver um problema. Ana escreveu as falas de cada uma e procurou mostrar seus motivos sem transformar nenhuma delas em caricatura. Descobriu que narrativas ficam mais interessantes quando os personagens têm objetivos, dúvidas e maneiras próprias de enxergar o mundo.

A máquina também apresentou uma notícia curta. Antes de compartilhá-la, Ana verificou quem havia publicado, quando o texto tinha sido escrito e se outras fontes confiáveis confirmavam a informação. Ela aprendeu que compreender a linguagem inclui reconhecer opiniões, fatos e possíveis tentativas de convencer o leitor.

Na escola, Ana organizou uma roda de leitura. Cada participante escolheu um trecho e explicou por que gostava dele. Algumas interpretações eram diferentes, mas o grupo voltou ao texto para encontrar pistas que sustentassem cada leitura. Assim, todos praticaram a escuta e a argumentação respeitosa.

No final, Ana escreveu sua própria história, revisou a ordem dos acontecimentos e pediu a um colega que a lesse. As sugestões ajudaram a esclarecer partes confusas sem apagar seu estilo. A Máquina das Palavras mostrou que escrever é imaginar, organizar, revisar e compartilhar.

Desde então, Ana continuou enchendo sua Máquina das Palavras. A cada leitura, descobria uma nova porta — e aprendeu que a chave mais importante era a curiosidade.`,
  },
  {
    id: 9,
    titulo: 'A Viagem pelo Corpo Humano',
    emoji: '🧬',
    categoria: 'Ciências',
    descricao:
      'Uma aventura educativa sobre o corpo humano.',
    historia: `Lucas sempre quis saber como o corpo conseguia correr, pensar, respirar e transformar alimentos em energia. Na aula de Ciências, a professora propôs uma viagem imaginária pelo corpo humano, usando desenhos, modelos e experiências simples para mostrar como os sistemas trabalham juntos.

A primeira parada foi o sistema respiratório. Lucas aprendeu que o ar entra pelas vias respiratórias e chega aos pulmões, onde ocorre a troca de gases. O oxigênio passa para o sangue, enquanto o gás carbônico é eliminado na expiração. Respirar parecia automático, mas envolvia estruturas que precisavam funcionar em conjunto.

Depois, a turma estudou o sistema circulatório. O coração impulsiona o sangue, que transporta oxigênio e nutrientes para diferentes partes do corpo. Lucas percebeu que os sistemas respiratório e circulatório cooperam: um ajuda a obter oxigênio e o outro o distribui pelo organismo.

Na etapa seguinte, conheceram o sistema digestório. Os alimentos passam por transformações ao longo do processo de digestão, e os nutrientes são absorvidos para serem usados pelo corpo. A professora destacou que uma alimentação variada, água potável, sono e acompanhamento de profissionais de saúde contribuem para o bem-estar, sem existir uma única rotina igual para todas as pessoas.

Lucas também aprendeu que o sistema nervoso recebe informações, coordena respostas e participa da memória, da aprendizagem e dos movimentos. O corpo não funciona como máquinas separadas: cérebro, músculos, ossos, órgãos e sentidos interagem continuamente, ajustando-se às necessidades de cada momento.

Para a atividade final, os alunos montaram um grande mapa corporal com setas mostrando como os sistemas se relacionam. Precisaram conferir as informações em materiais confiáveis e corrigir algumas ideias que pareciam certas, mas estavam incompletas. Lucas descobriu que a Ciência avança quando observamos, fazemos perguntas e verificamos evidências.

Na primeira parada, Leo observou como o coração acelerava quando ele se movimentava e voltava gradualmente ao ritmo habitual durante o descanso. A guia explicou que o corpo ajusta várias funções conforme a atividade, e que a sensação de cada pessoa pode variar. A experiência serviu para fazer perguntas, não para tirar conclusões médicas.

Na estação da respiração, ele acompanhou uma animação mostrando como o oxigênio entra no corpo e como o gás carbônico é eliminado. Também aprendeu que o ar precisa percorrer caminhos próprios e que os pulmões trabalham junto com o sistema circulatório para levar oxigênio às células.

Na sala da digestão, os alimentos viajavam por um modelo transparente. Leo descobriu que a digestão transforma os alimentos em substâncias que o corpo pode absorver e utilizar. Uma alimentação variada ajuda a fornecer nutrientes, mas as necessidades podem ser diferentes conforme a idade, a rotina e a saúde de cada pessoa.

A estação do cérebro parecia uma cidade cheia de mensagens. A guia explicou que o sistema nervoso recebe informações, coordena movimentos e participa da memória, das emoções e da aprendizagem. Dormir e fazer pausas também são importantes para o funcionamento cotidiano, embora cada pessoa tenha necessidades próprias.

Leo perguntou por que as pessoas ficam doentes mesmo quando tentam cuidar da saúde. A guia explicou que a saúde depende de muitos fatores, incluindo microrganismos, ambiente, acesso a cuidados e características individuais. Higiene, vacinação quando indicada, alimentação e acompanhamento profissional podem ajudar, mas não garantem que ninguém fique doente.

Antes de voltar, Leo montou um mapa ligando os sistemas do corpo. Percebeu que nenhum funciona sozinho: eles trocam informações e materiais o tempo todo. A viagem terminou com novas perguntas e com a ideia de que estudar o corpo exige curiosidade, respeito e informações confiáveis.

Ao terminar a viagem imaginária, ele passou a olhar o próprio corpo com mais curiosidade e respeito. Entendeu que aprender Ciências não é decorar nomes difíceis, mas compreender processos, valorizar a saúde e reconhecer o quanto ainda há para descobrir.`,
  },
  {
    id: 10,
    titulo: 'O Mapa Perdido',
    emoji: '🗺️',
    categoria: 'Geografia',
    descricao:
      'Uma aventura sobre mapas, paisagens e localização.',
    historia: `Marina encontrou um mapa dobrado dentro de um livro na biblioteca da escola. Ele mostrava ruas antigas, um pequeno córrego e uma praça que já não aparecia da mesma forma nos mapas atuais. Ela levou o achado à professora de Geografia, que sugeriu investigar como o bairro havia mudado.

A turma começou aprendendo que mapas são representações do espaço e usam elementos como título, legenda, escala e orientação. Um mapa não mostra tudo ao mesmo tempo: ele seleciona informações conforme sua finalidade. Um mapa de transporte, por exemplo, destaca caminhos; um mapa físico pode mostrar relevo e rios.

Com orientação da escola, os alunos desenharam um mapa simples do entorno, identificando ruas, praças, pontos de ônibus e serviços públicos. Precisaram observar com segurança, respeitar a privacidade dos moradores e conferir nomes e posições antes de finalizar o trabalho. A atividade mostrou que localização é mais do que decorar pontos cardeais.

Ao comparar o mapa antigo com o atual, descobriram que uma área antes ocupada por vegetação havia recebido novas construções e que o córrego fora canalizado em parte do trajeto. A professora explicou que as paisagens resultam da interação entre elementos naturais e ações humanas. Mudanças podem trazer benefícios, mas também criar desafios, como reduzir áreas verdes ou aumentar o escoamento da chuva.

Marina quis entender por que algumas ruas alagavam mais do que outras. A turma pesquisou a relação entre superfícies impermeáveis, drenagem e ocupação do solo. Aprendeu que mapas temáticos ajudam a comparar informações e que decisões urbanas precisam considerar dados, planejamento e as experiências das comunidades.

Para compartilhar a descoberta, os estudantes criaram um mapa com duas camadas: o bairro de antes, baseado em registros históricos, e o bairro atual, observado em campo e em fontes públicas. Acrescentaram uma legenda clara e explicaram quais informações ainda precisavam ser verificadas.

Marina e os amigos começaram conferindo a legenda do mapa antigo. Descobriram símbolos para rios, caminhos, áreas elevadas e construções. A escala ajudava a relacionar as distâncias desenhadas com as distâncias reais, mas era necessário verificar se o documento ainda representava o lugar corretamente.

Na visita seguinte, compararam o mapa com a paisagem atual, sem entrar em terrenos privados nem se afastar das trilhas autorizadas. Algumas ruas haviam mudado e uma área antes aberta agora tinha construções. O grupo anotou as diferenças e procurou registros mais recentes para entender quando as mudanças aconteceram.

Um morador contou que o córrego costumava passar por outro trecho antes de uma obra. Marina não tratou o relato como prova definitiva, mas como uma pista importante. A turma procurou fotografias antigas, mapas públicos e informações da prefeitura para montar uma explicação mais consistente.

Os alunos aprenderam que mapas podem destacar informações diferentes conforme o objetivo. Um mapa de transporte não mostra necessariamente a mesma coisa que um mapa de vegetação ou de risco de alagamento. Escolher a representação adequada é essencial para responder à pergunta certa.

Quando a equipe encontrou uma área verde pouco marcada no mapa, discutiu como registrar sua localização e descrever o que observava. Evitou afirmar que o lugar era protegido sem verificar a informação. O professor explicou a diferença entre observar uma característica da paisagem e confirmar sua situação legal.

Marina apresentou um mapa atualizado com fontes e uma lista de perguntas que ainda precisavam de resposta. A descoberta mais valiosa não foi um tesouro, mas a habilidade de comparar documentos, observar o espaço e reconhecer que as paisagens mudam com o tempo e com as escolhas humanas.

Marina percebeu que a Geografia ajuda a compreender o lugar onde vivemos e as relações entre sociedade e natureza. O mapa perdido não revelou um tesouro escondido, mas mostrou algo igualmente valioso: cada paisagem guarda histórias e decisões que podemos aprender a interpretar.`,
  },
  {
    id: 11,
    titulo: 'A Máquina do Tempo',
    emoji: '⏳',
    categoria: 'História',
    descricao:
      'Uma aventura imaginária sobre o estudo do passado.',
    historia: `Gabriel gostava de imaginar como seria viajar ao passado. Um dia, desenhou uma máquina do tempo para um trabalho escolar e decidiu que sua primeira parada seria uma cidade de muitos séculos atrás. A professora explicou que, embora não possamos usar uma máquina real, os historiadores investigam o passado com pistas que sobreviveram ao tempo.

A turma visitou um pequeno museu e observou fotografias, ferramentas, cartas e objetos cotidianos. Cada item oferecia informações, mas também deixava perguntas sem resposta. Gabriel aprendeu que uma fonte histórica é um vestígio usado para investigar o passado e que fontes diferentes podem contar partes distintas de uma mesma história.

Em seguida, os alunos compararam relatos sobre um acontecimento local. Alguns foram escritos por pessoas que participaram dele; outros foram produzidos anos depois. A professora explicou que é importante considerar quem criou cada fonte, quando foi feita, para quem se destinava e o que talvez tenha ficado de fora. Investigar História exige contexto e comparação, não apenas aceitar a primeira versão.

Gabriel pesquisou como as pessoas viviam em épocas diferentes. Descobriu mudanças na alimentação, no transporte, no trabalho e nas formas de comunicação, mas também percebeu que nem todos viviam da mesma maneira. A experiência variava conforme a região, a posição social, o gênero, a cultura e muitas outras condições.

Para o projeto final, ele montou uma linha do tempo sobre a história do bairro, usando fotografias autorizadas, depoimentos de moradores e registros públicos. Indicou as fontes e separou fatos documentados das lembranças pessoais. Quando duas fontes apresentavam informações diferentes, não escolheu uma ao acaso: procurou mais evidências e explicou a dúvida.

O trabalho mostrou que o passado não é uma coleção de datas isoladas. Estudar História ajuda a compreender mudanças, permanências, conflitos e escolhas que influenciam o presente. Também permite ouvir experiências de pessoas que nem sempre aparecem nos relatos mais conhecidos.

Gabriel escolheu começar a investigação por uma fotografia antiga da praça. Observou as roupas, os veículos e os prédios ao fundo, mas anotou que uma imagem sozinha não explicava tudo o que acontecia naquele período. Era preciso buscar outras fontes e compreender quem havia produzido o registro e com qual finalidade.

Na biblioteca, encontrou uma notícia de jornal e um depoimento de uma moradora idosa. Os relatos coincidiam em alguns pontos e divergiam em outros. A professora mostrou que memórias pessoais são fontes valiosas, mas podem destacar experiências diferentes; compará-las com documentos ajuda a construir uma visão mais ampla.

A máquina levou Gabriel a uma antiga oficina onde os trabalhadores organizavam ferramentas de modo diferente do presente. Ele percebeu que as tecnologias mudam o trabalho, mas também que essas mudanças afetam grupos de maneiras distintas. Para entender o passado, era importante perguntar quem se beneficiou e quem enfrentou dificuldades.

Em outra parada, estudou uma linha do tempo e aprendeu que acontecimentos históricos não surgem isolados. Decisões políticas, condições econômicas, movimentos sociais e mudanças culturais podem se relacionar. A linha do tempo ajudava a organizar datas, mas explicar as causas exigia pesquisa e comparação de fontes.

Gabriel descobriu também que muitos grupos aparecem pouco nos registros mais conhecidos. A turma procurou relatos de trabalhadores, mulheres, comunidades locais e pessoas comuns para ampliar a investigação. Ouvir diferentes perspectivas não significava aceitar toda afirmação sem análise, mas fazer perguntas e avaliar as evidências disponíveis.

Quando voltou ao presente, Gabriel escreveu um pequeno texto separando o que as fontes confirmavam daquilo que ainda era hipótese. A máquina do tempo não lhe deu respostas perfeitas; ensinou um método para investigar o passado com curiosidade, cuidado e respeito às experiências de diferentes pessoas.

Gabriel guardou o desenho da máquina do tempo no caderno. Talvez não pudesse atravessar séculos de verdade, mas agora sabia fazer uma viagem histórica usando perguntas, fontes e pensamento crítico. Sua aventura estava apenas começando.`,
  },
]

const desafios = {
  reciclagem: {
    nome: 'RECICLAGEM',
    emoji: '♻️',
    perguntas: [
      ['Onde devemos colocar uma garrafa de plástico vazia?', ['Lixo orgânico', 'Reciclagem', 'Pia'], 1],
      ['Uma lata de alumínio deve ser descartada onde?', ['Reciclagem', 'Lixo orgânico', 'No chão'], 0],
      ['Onde devemos colocar uma casca de banana?', ['Reciclagem', 'Lixo orgânico', 'Pia'], 1],
      ['Uma caixa de papelão limpa pode ser encaminhada para:', ['Reciclagem', 'Lixo orgânico', 'Ralo'], 0],
      ['Qual destes materiais pode ser reciclado?', ['Garrafa de vidro', 'Restos de comida', 'Guardanapo sujo'], 0],
      ['Por que devemos separar materiais recicláveis?', ['Para facilitar a reciclagem', 'Para produzir mais lixo', 'Para gastar mais água'], 0],
      ['Qual atitude ajuda a diminuir a quantidade de lixo?', ['Reutilizar materiais quando possível', 'Jogar tudo na rua', 'Comprar produtos desnecessários'], 0],
      ['O que significa reutilizar um objeto?', ['Usá-lo novamente', 'Jogá-lo fora imediatamente', 'Queimá-lo'], 0],
    ],
  },

  natureza: {
    nome: 'NATUREZA',
    emoji: '🌳',
    perguntas: [
      ['Por que as árvores são importantes?', ['Porque ajudam no equilíbrio dos ecossistemas', 'Porque produzem plástico', 'Porque eliminam animais'], 0],
      ['Qual atitude protege animais silvestres?', ['Comprar animais ilegalmente', 'Respeitar seus habitats naturais', 'Destruir seus habitats'], 1],
      ['O que significa biodiversidade?', ['Variedade de seres vivos', 'Somente árvores', 'Somente animais domésticos'], 0],
      ['Qual atitude ajuda a preservar uma floresta?', ['Evitar desmatamentos desnecessários', 'Cortar todas as árvores', 'Jogar lixo no solo'], 0],
      ['O que pode acontecer quando uma floresta é destruída?', ['Pode ocorrer perda de biodiversidade', 'Sempre aumenta a biodiversidade', 'Nada muda'], 0],
      ['Por que os animais precisam de habitats preservados?', ['Para encontrar alimento e abrigo', 'Para produzir plástico', 'Para aumentar a poluição'], 0],
      ['Qual atitude ajuda a proteger os rios?', ['Evitar jogar lixo na água', 'Jogar óleo no rio', 'Despejar plástico na água'], 0],
      ['O que pode acontecer quando uma espécie desaparece?', ['O equilíbrio pode ser afetado', 'Nada muda', 'Todas as espécies somem'], 0],
    ],
  },

  agua: {
    nome: 'ÁGUA',
    emoji: '💧',
    perguntas: [
      ['Qual atitude ajuda a economizar água?', ['Fechar a torneira enquanto escovamos os dentes', 'Deixar a torneira aberta', 'Deixar a mangueira aberta'], 0],
      ['Por que a água é importante?', ['É essencial para a vida', 'Serve apenas para lavar objetos', 'Não possui importância'], 0],
      ['Qual atitude evita desperdício?', ['Consertar vazamentos', 'Ignorar torneiras pingando', 'Deixar o chuveiro ligado'], 0],
      ['O que pode contaminar um rio?', ['Despejo de lixo e substâncias poluentes', 'Preservação das margens', 'Tratamento adequado'], 0],
      ['Como proteger recursos hídricos?', ['Evitar desperdício e poluição', 'Jogar lixo nos rios', 'Desperdiçar água'], 0],
      ['O que é desperdício de água?', ['Usar água sem necessidade', 'Economizar água', 'Consertar vazamentos'], 0],
      ['Qual atitude preserva a qualidade da água?', ['Não jogar produtos químicos em rios', 'Jogar óleo no ralo', 'Jogar lixo na água'], 0],
    ],
  },

  matematica: {
    nome: 'MATEMÁTICA',
    emoji: '🔢',
    perguntas: [
      ['Quanto é 8 + 7?', ['15', '14', '16'], 0],
      ['Quanto é 9 × 6?', ['45', '54', '63'], 1],
      ['Quanto é 100 ÷ 10?', ['5', '10', '20'], 1],
      ['Quanto é 25 - 9?', ['14', '16', '18'], 1],
      ['Qual número é maior?', ['27', '72', '62'], 1],
      ['Qual é o dobro de 15?', ['20', '25', '30'], 2],
      ['Qual é a metade de 50?', ['20', '25', '30'], 1],
      ['3 caixas com 4 objetos em cada uma têm quantos objetos?', ['7', '12', '14'], 1],
      ['Qual número é par?', ['17', '21', '24'], 2],
    ],
  },

  portugues: {
    nome: 'PORTUGUÊS',
    emoji: '📖',
    perguntas: [
      ['Qual palavra está escrita corretamente?', ['Casa', 'Caza', 'Cassa'], 0],
      ['Qual palavra é um substantivo?', ['Correr', 'Escola', 'Rapidamente'], 1],
      ['Qual é o plural de animal?', ['Animais', 'Animals', 'Animalis'], 0],
      ['Qual palavra representa uma ação?', ['Correr', 'Mesa', 'Azul'], 0],
      ['Qual palavra é um adjetivo?', ['Bonito', 'Casa', 'Estudar'], 0],
      ['Qual é o contrário de alto?', ['Grande', 'Baixo', 'Largo'], 1],
      ['Qual palavra é sinônimo de feliz?', ['Alegre', 'Triste', 'Cansado'], 0],
      ['Para que serve a leitura?', ['Para compreender informações e histórias', 'Para esquecer informações', 'Para impedir o aprendizado'], 0],
    ],
  },

  ciencias: {
    nome: 'CIÊNCIAS',
    emoji: '🧬',
    perguntas: [
      ['Qual órgão bombeia o sangue pelo corpo?', ['Coração', 'Pulmão', 'Estômago'], 0],
      ['Qual gás é essencial para a respiração?', ['Oxigênio', 'Hélio', 'Hidrogênio'], 0],
      ['Qual é um estado físico da água?', ['Sólido', 'Elétrico', 'Metálico'], 0],
      ['Qual parte da planta absorve água do solo?', ['Raiz', 'Flor', 'Fruto'], 0],
      ['O que os seres humanos precisam para sobreviver?', ['Água, alimento e ar', 'Somente brinquedos', 'Somente luz'], 0],
      ['Qual astro é uma estrela?', ['Sol', 'Lua', 'Terra'], 0],
      ['Qual sistema ajuda o corpo a respirar?', ['Respiratório', 'Digestório', 'Esquelético'], 0],
      ['O que é biodiversidade?', ['Variedade de seres vivos', 'Somente plantas', 'Somente animais domésticos'], 0],
    ],
  },

  historia: {
    nome: 'HISTÓRIA',
    emoji: '⏳',
    perguntas: [
      ['O que a História estuda?', ['Acontecimentos e sociedades do passado', 'Somente matemática', 'Somente animais'], 0],
      ['O que podemos usar para estudar o passado?', ['Documentos e objetos históricos', 'Somente jogos', 'Somente televisão'], 0],
      ['O que é uma fonte histórica?', ['Um registro que ajuda a conhecer o passado', 'Uma fonte de água', 'Uma conta matemática'], 0],
      ['Por que estudar História é importante?', ['Para compreender mudanças e acontecimentos', 'Para esquecer o passado', 'Para evitar aprender'], 0],
      ['O que podemos aprender estudando diferentes povos?', ['Costumes e formas de organização', 'Somente receitas', 'Somente esportes'], 0],
      ['Uma fotografia antiga pode ser fonte histórica?', ['Sim', 'Não', 'Nunca'], 0],
    ],
  },

  geografia: {
    nome: 'GEOGRAFIA',
    emoji: '🗺️',
    perguntas: [
      ['O que a Geografia estuda?', ['O espaço geográfico e sua relação com sociedade e natureza', 'Somente números', 'Somente histórias fictícias'], 0],
      ['Para que serve um mapa?', ['Para representar lugares', 'Para cozinhar', 'Para medir o peso'], 0],
      ['Qual é um elemento natural da paisagem?', ['Rio', 'Prédio', 'Estrada'], 0],
      ['Qual é um elemento construído?', ['Prédio', 'Montanha', 'Rio'], 0],
      ['O que é clima?', ['Conjunto de condições atmosféricas observadas ao longo do tempo', 'Temperatura de um dia', 'Quantidade de árvores'], 0],
      ['O Brasil está em qual continente?', ['América do Sul', 'Europa', 'Ásia'], 0],
    ],
  },
}

const dificuldades = {
  facil: { nome: 'FÁCIL', emoji: '🟢', xp: 10, dano: 15 },
  medio: { nome: 'MÉDIO', emoji: '🟡', xp: 20, dano: 20 },
  dificil: { nome: 'DIFÍCIL', emoji: '🔴', xp: 30, dano: 30 },
}

const poderesBatalha = {
  natureza: {
    nome: 'Regeneração Verde',
    emoji: '🌿',
    descricao: 'Recupera 20 HP da sua torre.',
    tipo: 'cura',
  },
  dark: {
    nome: 'Escudo Sombrio',
    emoji: '🌑',
    descricao: 'Reduz pela metade o próximo dano recebido.',
    tipo: 'escudo',
  },
  arcano: {
    nome: 'Impacto Arcano',
    emoji: '🔮',
    descricao: 'Adiciona 20 de dano ao próximo ataque correto.',
    tipo: 'dano',
  },
  neon: {
    nome: 'Sobrecarga Neon',
    emoji: '⚡',
    descricao: 'Dobra o dano do próximo ataque correto.',
    tipo: 'dobro',
  },
}

const missoesPesquisa = [
  {
    id: 'missao-plastico',
    titulo: 'Detetive do Plástico',
    emoji: '🔎',
    categoria: 'Reciclagem',
    descricao:
      'Descubra por que reduzir o uso de plástico é importante para o meio ambiente.',
    pergunta:
      'Pesquise e explique de forma simples por que reduzir o uso de plástico é importante para o meio ambiente, quais problemas o plástico pode causar na natureza e cite pelo menos duas atitudes que ajudam a reduzir seu uso.',
    xp: 30,
  },
  {
    id: 'missao-agua',
    titulo: 'Guardião da Água',
    emoji: '💧',
    categoria: 'Água',
    descricao:
      'Aprenda maneiras de economizar água e proteger os recursos hídricos.',
    pergunta:
      'Explique de forma educativa por que a água é importante para a vida, o que significa desperdício de água e cite pelo menos três atitudes simples para economizar água.',
    xp: 30,
  },
  {
    id: 'missao-reciclagem',
    titulo: 'Mestre da Reciclagem',
    emoji: '♻️',
    categoria: 'Reciclagem',
    descricao:
      'Aprenda como a separação dos resíduos ajuda o planeta.',
    pergunta:
      'Explique de forma simples o que é reciclagem, por que separar materiais recicláveis é importante e dê exemplos de materiais que podem ser reciclados.',
    xp: 35,
  },
  {
    id: 'missao-biodiversidade',
    titulo: 'Protetor da Biodiversidade',
    emoji: '🦋',
    categoria: 'Natureza',
    descricao:
      'Descubra o que é biodiversidade e por que ela precisa ser protegida.',
    pergunta:
      'Explique de forma simples o que significa biodiversidade, por que ela é importante para os ecossistemas e cite algumas atitudes que ajudam a protegê-la.',
    xp: 35,
  },
  {
    id: 'missao-arvores',
    titulo: 'Amigo das Árvores',
    emoji: '🌳',
    categoria: 'Natureza',
    descricao:
      'Descubra como as árvores ajudam os ecossistemas e as cidades.',
    pergunta:
      'Explique de forma educativa por que as árvores são importantes para o meio ambiente, para os animais e para as cidades. Cite pelo menos três benefícios das árvores.',
    xp: 30,
  },
  {
    id: 'missao-energia',
    titulo: 'Energia Consciente',
    emoji: '⚡',
    categoria: 'Sustentabilidade',
    descricao:
      'Aprenda como o consumo de energia está relacionado à sustentabilidade.',
    pergunta:
      'Explique de forma simples o que significa economizar energia, por que isso pode ajudar o meio ambiente e cite pelo menos quatro atitudes para reduzir o consumo de energia.',
    xp: 35,
  },
  {
    id: 'missao-energia-solar',
    titulo: 'Explorador Solar',
    emoji: '☀️',
    categoria: 'Energia',
    descricao:
      'Descubra como a energia solar pode ser usada.',
    pergunta:
      'Explique de forma simples o que é energia solar, como ela pode ser utilizada para produzir eletricidade e cite alguns benefícios e desafios dessa fonte de energia.',
    xp: 40,
  },
  {
    id: 'missao-compostagem',
    titulo: 'Mestre da Compostagem',
    emoji: '🌱',
    categoria: 'Resíduos',
    descricao:
      'Aprenda como restos orgânicos podem voltar para a natureza.',
    pergunta:
      'Explique de forma simples o que é compostagem, quais tipos de resíduos orgânicos podem participar dela e por que a compostagem ajuda a reduzir resíduos.',
    xp: 35,
  },
  {
    id: 'missao-produto-eco',
    titulo: 'Caçador de Produtos Verdes',
    emoji: '🛍️',
    categoria: 'Consumo',
    descricao:
      'Descubra o que pode tornar um produto mais sustentável.',
    pergunta:
      'Explique de forma simples o que pode tornar um produto mais ecológico ou sustentável. Fale sobre materiais, embalagem, durabilidade, reutilização e descarte responsável.',
    xp: 40,
  },
  {
    id: 'missao-consumo',
    titulo: 'Consumidor Consciente',
    emoji: '🌍',
    categoria: 'Consumo',
    descricao:
      'Aprenda a fazer escolhas de consumo mais conscientes.',
    pergunta:
      'Explique o que significa consumo consciente e cite pelo menos cinco atitudes que uma pessoa pode tomar para consumir de maneira mais responsável e reduzir impactos ambientais.',
    xp: 40,
  },
  {
    id: 'missao-oceanos',
    titulo: 'Defensor dos Oceanos',
    emoji: '🌊',
    categoria: 'Oceanos',
    descricao:
      'Descubra os principais desafios ambientais enfrentados pelos oceanos.',
    pergunta:
      'Explique de forma simples por que os oceanos são importantes para o planeta, quais ameaças ambientais eles enfrentam e cite atitudes que ajudam a protegê-los.',
    xp: 40,
  },
  {
    id: 'missao-florestas',
    titulo: 'Sentinela das Florestas',
    emoji: '🌲',
    categoria: 'Florestas',
    descricao:
      'Aprenda por que preservar florestas é importante.',
    pergunta:
      'Explique por que as florestas são importantes para a biodiversidade, para a água e para o equilíbrio ambiental. Cite algumas formas de ajudar na conservação das florestas.',
    xp: 40,
  },
]

const produtosEcologicos = [
  {
    id: 'produto-sacola-reutilizavel',
    nome: 'Sacola reutilizável',
    emoji: '🛍️',
    categoria: 'Reutilização',
    descricao:
      'Uma alternativa reutilizável às sacolas descartáveis.',
    beneficio:
      'Pode ajudar a diminuir o consumo de sacolas de uso único.',
    estudo:
      'Pesquise como sacolas reutilizáveis podem reduzir resíduos e quais cuidados aumentam sua vida útil.',
    xp: 25,
  },
  {
    id: 'produto-garrafa-reutilizavel',
    nome: 'Garrafa reutilizável',
    emoji: '🚰',
    categoria: 'Reutilização',
    descricao:
      'Recipiente que pode ser utilizado diversas vezes.',
    beneficio:
      'Pode reduzir a necessidade de comprar garrafas descartáveis com frequência.',
    estudo:
      'Pesquise as vantagens de utilizar uma garrafa reutilizável e como fazer sua higienização corretamente.',
    xp: 25,
  },
  {
    id: 'produto-ecobag',
    nome: 'Ecobag',
    emoji: '🌱',
    categoria: 'Consumo consciente',
    descricao:
      'Bolsa reutilizável para transportar compras e objetos.',
    beneficio:
      'Pode substituir diversas sacolas descartáveis quando utilizada muitas vezes.',
    estudo:
      'Pesquise o que deve ser considerado ao escolher uma ecobag sustentável e durável.',
    xp: 30,
  },
  {
    id: 'produto-lapis-reciclado',
    nome: 'Lápis reciclado',
    emoji: '✏️',
    categoria: 'Material escolar',
    descricao:
      'Material escolar produzido com materiais reaproveitados ou reciclados.',
    beneficio:
      'Mostra como materiais podem receber novos usos.',
    estudo:
      'Pesquise como materiais reciclados podem ser utilizados na produção de materiais escolares.',
    xp: 25,
  },
  {
    id: 'produto-caderno-reciclado',
    nome: 'Caderno com papel reciclado',
    emoji: '📓',
    categoria: 'Papel',
    descricao:
      'Caderno que utiliza papel reciclado em sua produção.',
    beneficio:
      'Ajuda a mostrar possibilidades de reaproveitamento de fibras de papel.',
    estudo:
      'Pesquise como o papel reciclado é produzido e quais cuidados ajudam a evitar desperdício de papel.',
    xp: 30,
  },
  {
    id: 'produto-escova-bambu',
    nome: 'Escova de dentes com cabo de bambu',
    emoji: '🪥',
    categoria: 'Higiene',
    descricao:
      'Uma opção que utiliza bambu em parte do produto.',
    beneficio:
      'Pode utilizar um material de origem vegetal no cabo, dependendo do produto.',
    estudo:
      'Pesquise o que significa avaliar corretamente um produto de higiene sustentável e como seu descarte deve ser feito.',
    xp: 30,
  },
  {
    id: 'produto-sabao-ecologico',
    nome: 'Sabão ecológico',
    emoji: '🧼',
    categoria: 'Limpeza',
    descricao:
      'Produto de limpeza desenvolvido com foco em menor impacto ambiental.',
    beneficio:
      'Algumas formulações e embalagens podem buscar reduzir determinados impactos.',
    estudo:
      'Pesquise quais características podem ser observadas para avaliar se um produto de limpeza é mais sustentável.',
    xp: 30,
  },
  {
    id: 'produto-composteira',
    nome: 'Composteira doméstica',
    emoji: '🪱',
    categoria: 'Resíduos orgânicos',
    descricao:
      'Sistema para transformar resíduos orgânicos em composto.',
    beneficio:
      'Pode ajudar a aproveitar resíduos orgânicos e produzir composto para plantas.',
    estudo:
      'Pesquise como funciona a compostagem e quais materiais orgânicos são normalmente utilizados.',
    xp: 40,
  },
  {
    id: 'produto-luminaria-solar',
    nome: 'Luminária solar',
    emoji: '☀️',
    categoria: 'Energia',
    descricao:
      'Luminária que pode utilizar energia captada do Sol.',
    beneficio:
      'Pode utilizar uma fonte renovável de energia durante seu funcionamento.',
    estudo:
      'Pesquise como uma luminária solar armazena e utiliza energia e quais são suas limitações.',
    xp: 35,
  },
  {
    id: 'produto-painel-solar',
    nome: 'Painel solar',
    emoji: '🔋',
    categoria: 'Energia renovável',
    descricao:
      'Equipamento que pode transformar a energia da luz solar em eletricidade.',
    beneficio:
      'Permite utilizar uma fonte renovável de energia.',
    estudo:
      'Pesquise de forma simples como painéis solares produzem eletricidade e quais fatores influenciam sua geração.',
    xp: 40,
  },
]

/* ============================
   LOJA ECO
\============================ */

const categoriasLoja = [
  {
    id: 'todos',
    nome: 'Todos',
    emoji: '🛍️',
  },
  {
    id: 'titulos',
    nome: 'Títulos',
    emoji: '🏷️',
  },
  {
    id: 'emblemas',
    nome: 'Emblemas',
    emoji: '🏅',
  },
  {
    id: 'boosts',
    nome: 'Boosts',
    emoji: '⚡',
  },
  {
    id: 'especiais',
    nome: 'Especiais',
    emoji: '✨',
  },
]

const raridades = {
  comum: {
    nome: 'Comum',
    emoji: '⚪',
    multiplicador: 1,
  },
  raro: {
    nome: 'Raro',
    emoji: '🔵',
    multiplicador: 1.2,
  },
  epico: {
    nome: 'Épico',
    emoji: '🟣',
    multiplicador: 1.5,
  },
  lendario: {
    nome: 'Lendário',
    emoji: '🟠',
    multiplicador: 2,
  },
}

const itensLoja = [
  {
    id: 'loja-titulo-aprendiz',
    nome: 'Aprendiz Verde',
    emoji: '🌱',
    categoria: 'titulos',
    raridade: 'comum',
    preco: 50,
    tipo: 'titulo',
    valor: '🌱 Aprendiz Verde',
    descricao:
      'Um título para quem está começando sua jornada ecológica.',
  },
  {
    id: 'loja-titulo-explorador',
    nome: 'Explorador Eco',
    emoji: '🧭',
    categoria: 'titulos',
    raridade: 'raro',
    preco: 85,
    tipo: 'titulo',
    valor: '🧭 Explorador Eco',
    descricao:
      'Para jogadores que gostam de descobrir novos conhecimentos.',
  },
  {
    id: 'loja-titulo-guardiao',
    nome: 'Guardião da Natureza',
    emoji: '🌳',
    categoria: 'titulos',
    raridade: 'epico',
    preco: 120,
    tipo: 'titulo',
    valor: '🌳 Guardião da Natureza',
    descricao:
      'Mostre sua dedicação à proteção do planeta.',
  },
  {
    id: 'loja-titulo-mestre',
    nome: 'Mestre Eco',
    emoji: '🏆',
    categoria: 'titulos',
    raridade: 'lendario',
    preco: 200,
    tipo: 'titulo',
    valor: '🏆 Mestre Eco',
    descricao:
      'Um dos títulos mais especiais da Loja Eco.',
  },

  {
    id: 'loja-emblema-reciclagem',
    nome: 'Emblema Reciclagem',
    emoji: '♻️',
    categoria: 'emblemas',
    raridade: 'comum',
    preco: 60,
    tipo: 'emblema',
    valor: '♻️ Emblema Reciclagem',
    descricao:
      'Um emblema especial para quem apoia a reciclagem.',
  },
  {
    id: 'loja-emblema-agua',
    nome: 'Emblema da Água',
    emoji: '💧',
    categoria: 'emblemas',
    raridade: 'raro',
    preco: 75,
    tipo: 'emblema',
    valor: '💧 Emblema da Água',
    descricao:
      'Mostre seu cuidado com os recursos hídricos.',
  },
  {
    id: 'loja-emblema-floresta',
    nome: 'Emblema da Floresta',
    emoji: '🌲',
    categoria: 'emblemas',
    raridade: 'epico',
    preco: 100,
    tipo: 'emblema',
    valor: '🌲 Emblema da Floresta',
    descricao:
      'Uma medalha para defensores das florestas.',
  },
  {
    id: 'loja-emblema-planeta',
    nome: 'Emblema Planeta',
    emoji: '🌍',
    categoria: 'emblemas',
    raridade: 'lendario',
    preco: 180,
    tipo: 'emblema',
    valor: '🌍 Emblema Planeta',
    descricao:
      'Uma recompensa especial para grandes jogadores Eco.',
  },

  {
    id: 'loja-boost-50xp',
    nome: 'Boost +50 XP',
    emoji: '⭐',
    categoria: 'boosts',
    raridade: 'raro',
    preco: 100,
    tipo: 'xp',
    valor: 50,
    descricao:
      'Adiciona 50 XP imediatamente ao seu perfil.',
  },
  {
    id: 'loja-boost-100xp',
    nome: 'Boost +100 XP',
    emoji: '🌟',
    categoria: 'boosts',
    raridade: 'epico',
    preco: 175,
    tipo: 'xp',
    valor: 100,
    descricao:
      'Adiciona 100 XP imediatamente ao seu perfil.',
  },
  {
    id: 'loja-boost-200xp',
    nome: 'Boost +200 XP',
    emoji: '💫',
    categoria: 'boosts',
    raridade: 'lendario',
    preco: 300,
    tipo: 'xp',
    valor: 200,
    descricao:
      'Um grande impulso de 200 XP.',
  },

  {
    id: 'loja-especial-moedas',
    nome: 'Pacote Eco 100',
    emoji: '🪙',
    categoria: 'especiais',
    raridade: 'raro',
    preco: 120,
    tipo: 'moedas',
    valor: 100,
    descricao:
      'Receba 100 moedas bônus instantaneamente.',
  },
  {
    id: 'loja-especial-combo',
    nome: 'Emblema Mestre da Arena',
    emoji: '⚔️',
    categoria: 'especiais',
    raridade: 'epico',
    preco: 150,
    tipo: 'emblema',
    valor: '⚔️ Mestre da Arena',
    descricao:
      'Recompensa especial para quem gosta de batalhas.',
  },
  {
    id: 'loja-especial-heroi',
    nome: 'Herói do Planeta',
    emoji: '🌎',
    categoria: 'especiais',
    raridade: 'lendario',
    preco: 250,
    tipo: 'titulo',
    valor: '🌎 Herói do Planeta',
    descricao:
      'O título mais raro disponível na loja.',
  },
]

const efeitos = [
  {
    id: 'natureza',
    emoji: '🌿',
    nome: 'Eco Natureza',
    descricao:
      'Folhas, energia verde e natureza.',
  },
  {
    id: 'dark',
    emoji: '🌑',
    nome: 'Dark Fantasy',
    descricao:
      'Sombras, névoa e energia sombria.',
  },
  {
    id: 'arcano',
    emoji: '🔮',
    nome: 'Arcano',
    descricao:
      'Magia, runas e energia mística.',
  },
  {
    id: 'neon',
    emoji: '⚡',
    nome: 'Neon',
    descricao:
      'Energia futurista e brilho intenso.',
  },
]

const missoesDiarias = [
  {
    id: 'quiz',
    emoji: '🎯',
    titulo: 'Desafio do dia',
    descricao:
      'Complete pelo menos 1 desafio.',
    alvo: 1,
    recompensaXp: 25,
    recompensaMoedas: 15,
    tipo: 'desafio',
  },
  {
    id: 'pesquisa',
    emoji: '🤖',
    titulo: 'Curiosidade do dia',
    descricao:
      'Faça 1 pesquisa com o Zinho.',
    alvo: 1,
    recompensaXp: 20,
    recompensaMoedas: 15,
    tipo: 'pesquisa',
  },
  {
    id: 'missao',
    emoji: '🔎',
    titulo: 'Missão ecológica',
    descricao:
      'Conclua 1 missão de pesquisa.',
    alvo: 1,
    recompensaXp: 30,
    recompensaMoedas: 20,
    tipo: 'missao',
  },
  {
    id: 'produto',
    emoji: '🛍️',
    titulo: 'Compra consciente',
    descricao:
      'Estude 1 produto ecológico.',
    alvo: 1,
    recompensaXp: 25,
    recompensaMoedas: 20,
    tipo: 'produto',
  },
  {
    id: 'xp',
    emoji: '⭐',
    titulo: 'Caçador de XP',
    descricao:
      'Ganhe 50 XP em atividades.',
    alvo: 50,
    recompensaXp: 30,
    recompensaMoedas: 25,
    tipo: 'xp',
  },
  {
    id: 'batalha',
    emoji: '⚔️',
    titulo: 'Arena ecológica',
    descricao:
      'Participe de 1 batalha de torres.',
    alvo: 1,
    recompensaXp: 30,
    recompensaMoedas: 25,
    tipo: 'batalha',
  },
]

const conquistas = [
  {
    id: 'primeira',
    emoji: '🎮',
    nome: 'Primeira partida',
    descricao:
      'Complete seu primeiro desafio.',
  },
  {
    id: 'sabio',
    emoji: '🧠',
    nome: 'Conhecimento',
    descricao:
      'Consiga 10 respostas corretas.',
  },
  {
    id: 'veterano',
    emoji: '🏆',
    nome: 'Veterano',
    descricao:
      'Complete 5 partidas.',
  },
  {
    id: 'guardiao',
    emoji: '🌍',
    nome: 'Guardião do planeta',
    descricao:
      'Alcance 500 XP.',
  },
  {
    id: 'primeira-pesquisa',
    emoji: '🔎',
    nome: 'Primeira pesquisa',
    descricao:
      'Complete sua primeira missão de pesquisa.',
  },
  {
    id: 'pesquisador',
    emoji: '📚',
    nome: 'Pesquisador Eco',
    descricao:
      'Complete 5 missões de pesquisa.',
  },
  {
    id: 'cientista-eco',
    emoji: '🧪',
    nome: 'Cientista Eco',
    descricao:
      'Complete 10 missões de pesquisa.',
  },
  {
    id: 'catalogo',
    emoji: '🛍️',
    nome: 'Explorador sustentável',
    descricao:
      'Estude seu primeiro produto ecológico.',
  },
  {
    id: 'comprador-consciente',
    emoji: '🌱',
    nome: 'Consumidor consciente',
    descricao:
      'Estude 5 produtos ecológicos.',
  },
  {
    id: 'especialista-eco',
    emoji: '🏅',
    nome: 'Especialista Eco',
    descricao:
      'Complete todas as missões de pesquisa.',
  },
  {
    id: 'sequencia-3',
    emoji: '🔥',
    nome: 'Ritmo verde',
    descricao:
      'Mantenha uma sequência de 3 dias.',
  },
  {
    id: 'moedas-100',
    emoji: '🪙',
    nome: 'Eco Colecionador',
    descricao:
      'Junte 100 moedas.',
  },
  {
    id: 'nivel-5',
    emoji: '⭐',
    nome: 'Evolução Eco',
    descricao:
      'Alcance o nível 5.',
  },
  {
    id: 'primeira-batalha',
    emoji: '⚔️',
    nome: 'Primeira batalha',
    descricao:
      'Participe da sua primeira batalha de torres.',
  },
  {
    id: 'campeao-arena',
    emoji: '👑',
    nome: 'Campeão da Arena',
    descricao:
      'Vença 5 batalhas de torres.',
  },
]


const recompensasPorNivel = [
  {
    nivel: 2,
    id: 'nivel-2-moedas',
    emoji: '🪙',
    nome: 'Bônus de 25 moedas',
    descricao:
      'Ganhe 25 moedas ao atingir o nível 2.',
    tipo: 'moedas',
    valor: 25,
  },
  {
    nivel: 3,
    id: 'nivel-3-titulo',
    emoji: '🌱',
    nome: 'Título Aprendiz Verde',
    descricao:
      'Desbloqueia o título Aprendiz Verde.',
    tipo: 'titulo',
    valor: '🌱 Aprendiz Verde',
  },
  {
    nivel: 4,
    id: 'nivel-4-emblema',
    emoji: '♻️',
    nome: 'Emblema Reciclagem',
    descricao:
      'Desbloqueia o emblema de Reciclagem e ganha 40 moedas.',
    tipo: 'emblema-moedas',
    valor: 40,
    recompensaExtra:
      '♻️ Emblema Reciclagem',
  },
  {
    nivel: 5,
    id: 'nivel-5-guardiao',
    emoji: '🌳',
    nome: 'Guardião da Natureza',
    descricao:
      'Desbloqueia o título Guardião da Natureza e ganha 50 moedas.',
    tipo: 'titulo-moedas',
    valor: 50,
    recompensaExtra:
      '🌳 Guardião da Natureza',
  },
  {
    nivel: 6,
    id: 'nivel-6-xp',
    emoji: '⭐',
    nome: 'Bônus de 75 XP',
    descricao:
      'Ganhe 75 XP ao atingir o nível 6.',
    tipo: 'xp',
    valor: 75,
  },
  {
    nivel: 7,
    id: 'nivel-7-oceanos',
    emoji: '🌊',
    nome: 'Emblema Oceanos',
    descricao:
      'Desbloqueia o emblema dos Oceanos e ganha 75 moedas.',
    tipo: 'emblema-moedas',
    valor: 75,
    recompensaExtra:
      '🌊 Emblema Oceanos',
  },
  {
    nivel: 8,
    id: 'nivel-8-moedas',
    emoji: '🪙',
    nome: 'Bônus de 100 moedas',
    descricao:
      'Ganhe 100 moedas ao atingir o nível 8.',
    tipo: 'moedas',
    valor: 100,
  },
  {
    nivel: 9,
    id: 'nivel-9-emblema',
    emoji: '⚡',
    nome: 'Emblema Energia Limpa',
    descricao:
      'Desbloqueia um emblema especial de energia limpa.',
    tipo: 'emblema',
    valor:
      '⚡ Emblema Energia Limpa',
  },
  {
    nivel: 10,
    id: 'nivel-10-heroi',
    emoji: '🌍',
    nome: 'Herói do Planeta',
    descricao:
      'Desbloqueia o título máximo Herói do Planeta e ganha 100 moedas.',
    tipo: 'titulo-moedas',
    valor: 100,
    recompensaExtra:
      '🌍 Herói do Planeta',
  },
]

function embaralhar(lista) {
  const copia = [...lista]

  for (
    let i = copia.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
          (i + 1)
      )

    ;[copia[i], copia[j]] = [
      copia[j],
      copia[i],
    ]
  }

  return copia
}

function criarPerguntas(
  tipo,
  quantidade = 5
) {
  const banco =
    desafios[tipo]
      ?.perguntas || []

  return embaralhar(
    banco.map(
      (item, indice) => ({
        id: `${tipo}-${indice}`,
        pergunta: item[0],
        opcoes: item[1].map(
          (
            texto,
            i
          ) => ({
            texto,
            correta:
              i === item[2],
          })
        ),
      })
    )
  )
    .slice(
      0,
      Math.min(
        quantidade,
        banco.length
      )
    )
    .map(
      (pergunta) => ({
        ...pergunta,
        opcoes:
          embaralhar(
            pergunta.opcoes
          ),
      })
    )
}

function calcularNivel(xp) {
  return (
    Math.floor(
      (Number(xp) ||
        0) / 100
    ) + 1
  )
}

function xpDoNivel(xp) {
  return (
    (Number(xp) || 0) %
    100
  )
}

function dataHoje() {
  const agora =
    new Date()

  return `${agora.getFullYear()}-${String(
    agora.getMonth() + 1
  ).padStart(
    2,
    '0'
  )}-${String(
    agora.getDate()
  ).padStart(2, '0')}`
}

function diferencaDias(
  dataAnterior,
  dataAtual
) {
  if (!dataAnterior)
    return null

  const a = new Date(
    `${dataAnterior}T00:00:00`
  )

  const b = new Date(
    `${dataAtual}T00:00:00`
  )

  return Math.round(
    (b - a) / 86400000
  )
}

function indiceMissaoDiaria() {
  const agora =
    new Date()

  const base =
    agora.getFullYear() *
      372 +
    (agora.getMonth() + 1) *
      31 +
    agora.getDate()

  return (
    Math.abs(base) %
    missoesDiarias.length
  )
}

function atualizarMissaoDiariaNoJogador(
  jogador,
  evento,
  quantidade = 1,
  xpGanho = 0
) {
  const hoje =
    dataHoje()

  const atual =
    jogador.missaoDiaria ||
    {}

  const missao =
    missoesDiarias[
      indiceMissaoDiaria()
    ]

  let nova = {
    ...atual,
  }

  if (
    nova.data !== hoje ||
    nova.id !== missao.id
  ) {
    nova = {
      id: missao.id,
      data: hoje,
      progresso: 0,
      concluida: false,
      resgatada: false,
    }
  }

  if (
    nova.concluida ||
    nova.resgatada
  ) {
    return nova
  }

  if (
    missao.tipo ===
    evento
  ) {
    nova.progresso =
      Math.min(
        missao.alvo,
        (nova.progresso ||
          0) +
          quantidade
      )
  }

  if (
    missao.tipo === 'xp' &&
    xpGanho > 0
  ) {
    nova.progresso =
      Math.min(
        missao.alvo,
        (nova.progresso ||
          0) +
          xpGanho
      )
  }

  if (
    nova.progresso >=
    missao.alvo
  ) {
    nova.concluida =
      true
  }

  return nova
}

function normalizarJogador(
  j
) {
  return {
    nome: j.nome,
    xp:
      Number(j.xp) || 0,
    moedas:
      Number(j.moedas) ||
      0,
    partidas:
      Number(j.partidas) ||
      0,
    acertos:
      Number(j.acertos) ||
      0,
    vitorias:
      Number(j.vitorias) ||
      0,
    derrotas:
      Number(j.derrotas) ||
      0,
    batalhasJogadas:
      Number(j.batalhasJogadas) ||
      0,
    batalhasVencidas:
      Number(j.batalhasVencidas) ||
      0,
    conquistas:
      Array.isArray(
        j.conquistas
      )
        ? j.conquistas
        : [],
    missoesConcluidas:
      Array.isArray(
        j.missoesConcluidas
      )
        ? j.missoesConcluidas
        : [],
    produtosEstudados:
      Array.isArray(
        j.produtosEstudados
      )
        ? j.produtosEstudados
        : [],
    pesquisasRealizadas:
      Number(
        j.pesquisasRealizadas
      ) || 0,
    missaoDiaria:
      j.missaoDiaria &&
      typeof j.missaoDiaria ===
        'object'
        ? j.missaoDiaria
        : null,
    sequenciaDias:
      Number(
        j.sequenciaDias
      ) || 0,
    ultimoDiaAtivo:
      j.ultimoDiaAtivo ||
      '',
    recompensasResgatadas:
      Array.isArray(
        j.recompensasResgatadas
      )
        ? j.recompensasResgatadas
        : [],
    recompensasNivelRecebidas:
      Array.isArray(
        j.recompensasNivelRecebidas
      )
        ? j.recompensasNivelRecebidas
        : [],
    tituloPerfil:
      j.tituloPerfil ||
      '',
    avatar:
      j.avatar || '🌱',
  }
}

function aproveitamento(
  jogador
) {
  if (
    !jogador?.partidas
  ) {
    return 0
  }

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(
        (jogador.acertos /
          Math.max(
            1,
            jogador.partidas *
              5
          )) *
          100
      )
    )
  )
}

function ExplicacaoZinho({
  pergunta,
  respostaCorreta,
  explicacaoPronta,
}) {
  const [texto, setTexto] = useState(
    explicacaoPronta || ''
  )

  useEffect(() => {
    if (explicacaoPronta) {
      setTexto(explicacaoPronta)
      return
    }

    let cancelado = false
    setTexto('🤖 Zinho está pensando...')

    fetch('/api/explicar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pergunta,
        respostaCorreta,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (!cancelado)
          setTexto(d.explicacao || '')
      })
      .catch(() => {
        if (!cancelado)
          setTexto(
            '🤖 Zinho: Não consegui explicar agora, mas continue aprendendo! 🌱'
          )
      })

    return () => {
      cancelado = true
    }
  }, [pergunta, respostaCorreta, explicacaoPronta])

  if (!texto) return null

  return (
    <div className="zinho-explica">
      <strong>💡 Explicação do Zinho</strong>
      <p>{texto}</p>
    </div>
  )
}

function App() {
  const [jogadores, setJogadores] =
    useState(() => {
      try {
        const dados =
          JSON.parse(
            localStorage.getItem(
              'ecoBattleJogadores'
            ) || '[]'
          )

        return Array.isArray(
          dados
        )
          ? dados.map(
              normalizarJogador
            )
          : []
      } catch {
        return []
      }
    })

  const [
    jogadorAtual,
    setJogadorAtual,
  ] = useState(
    () =>
      localStorage.getItem(
        'ecoBattleJogadorAtual'
      ) || ''
  )

  const [tela, setTela] =
    useState('inicio')

  // Biblioteca interativa: busca, filtros, progresso e leitura
  const [livroAberto, setLivroAberto] = useState(null)
  const [paginaLivro, setPaginaLivro] = useState(0)
  const [buscaLivro, setBuscaLivro] = useState('')
  const [categoriaLivro, setCategoriaLivro] = useState('Todos')
  const [livrosConcluidos, setLivrosConcluidos] = useState(() => {
    try {
      const salvos = JSON.parse(localStorage.getItem('ecoLifeLivrosConcluidos') || '[]')
      return Array.isArray(salvos) ? salvos : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('ecoLifeLivrosConcluidos', JSON.stringify(livrosConcluidos))
    } catch {
      // A biblioteca continua funcionando mesmo se o navegador bloquear o armazenamento.
    }
  }, [livrosConcluidos])

  useEffect(() => {
    if (!livroAberto) return undefined
    const fecharComTeclado = (event) => {
      if (event.key === 'Escape') setLivroAberto(null)
      if (event.key === 'ArrowRight') setPaginaLivro((pagina) => Math.min(livroAberto.historia.split('\n\n').length - 1, pagina + 1))
      if (event.key === 'ArrowLeft') setPaginaLivro((pagina) => Math.max(0, pagina - 1))
    }
    window.addEventListener('keydown', fecharComTeclado)
    return () => window.removeEventListener('keydown', fecharComTeclado)
  }, [livroAberto])

  const [
    efeitoVisual,
    setEfeitoVisual,
  ] = useState(
    () =>
      localStorage.getItem(
        'ecoBattleEfeitoVisual'
      ) || 'dark'
  )

  const [
    tipoDesafio,
    setTipoDesafio,
  ] = useState(null)

  const [
    dificuldade,
    setDificuldade,
  ] = useState(null)

  const [
    perguntas,
    setPerguntas,
  ] = useState([])

  const [
    perguntaAtual,
    setPerguntaAtual,
  ] = useState(0)

  const [
    resposta,
    setResposta,
  ] = useState(null)

  const [
    indiceSelecionado,
    setIndiceSelecionado,
  ] = useState(null)

  const [
    xpGanho,
    setXpGanho,
  ] = useState(0)

  const [
    novoJogador,
    setNovoJogador,
  ] = useState('')

  const [
    mensagem,
    setMensagem,
  ] = useState('')

  const [
    oponente,
    setOponente,
  ] = useState('')

  const [
    tipoBatalha,
    setTipoBatalha,
  ] = useState(null)

  const [
    dificuldadeBatalha,
    setDificuldadeBatalha,
  ] = useState(null)

  const [
    perguntasBatalha,
    setPerguntasBatalha,
  ] = useState([])

  const [
    perguntaBatalhaAtual,
    setPerguntaBatalhaAtual,
  ] = useState(0)

  const [
    turnoBatalha,
    setTurnoBatalha,
  ] = useState(1)

  const [
    vidaTorre1,
    setVidaTorre1,
  ] = useState(100)

  const [
    vidaTorre2,
    setVidaTorre2,
  ] = useState(100)

  const [
    combo1,
    setCombo1,
  ] = useState(0)

  const [
    combo2,
    setCombo2,
  ] = useState(0)

  const [
    defesa1,
    setDefesa1,
  ] = useState(false)

  const [
    defesa2,
    setDefesa2,
  ] = useState(false)

  const [
    energiaEspecial1,
    setEnergiaEspecial1,
  ] = useState(100)

  const [
    energiaEspecial2,
    setEnergiaEspecial2,
  ] = useState(100)

  const [
    bonusDano1,
    setBonusDano1,
  ] = useState(0)

  const [
    bonusDano2,
    setBonusDano2,
  ] = useState(0)

  const [
    dobroDano1,
    setDobroDano1,
  ] = useState(false)

  const [
    dobroDano2,
    setDobroDano2,
  ] = useState(false)

  const [
    ataqueAnimando,
    setAtaqueAnimando,
  ] = useState(false)

  const [
    defesaAnimando,
    setDefesaAnimando,
  ] = useState(false)

  const [
    criticoAtual,
    setCriticoAtual,
  ] = useState(false)

  const [
    mensagemBatalha,
    setMensagemBatalha,
  ] = useState('')

  const [
    habilidadeUsada,
    setHabilidadeUsada,
  ] = useState(null)

  const [
    respostaBatalha,
    setRespostaBatalha,
  ] = useState(null)

  const [
    indiceBatalhaSelecionado,
    setIndiceBatalhaSelecionado,
  ] = useState(null)

  const [
    ultimoAtaque,
    setUltimoAtaque,
  ] = useState(null)

  const [
    resultadoBatalha,
    setResultadoBatalha,
  ] = useState(null)

  const [
    xpBatalha1,
    setXpBatalha1,
  ] = useState(0)

  const [
    xpBatalha2,
    setXpBatalha2,
  ] = useState(0)

  const [
    perguntaIA,
    setPerguntaIA,
  ] = useState('')

  const [
    respostaIA,
    setRespostaIA,
  ] = useState('')

  const [
    carregandoIA,
    setCarregandoIA,
  ] = useState(false)

  const [
    erroIA,
    setErroIA,
  ] = useState('')

  const [
    pontosPesquisaIA,
    setPontosPesquisaIA,
  ] = useState(0)

  const [
    assuntoPesquisaIA,
    setAssuntoPesquisaIA,
  ] = useState('')

  const [
    pesquisasIA,
    setPesquisasIA,
  ] = useState(() => {
    try {
      const dados =
        JSON.parse(
          localStorage.getItem(
            'ecoLifePesquisasZinho'
          ) || '[]'
        )

      return Array.isArray(
        dados
      )
        ? dados
        : []
    } catch {
      return []
    }
  })

  const [
    missaoSelecionada,
    setMissaoSelecionada,
  ] = useState(null)

  const [
    respostaMissao,
    setRespostaMissao,
  ] = useState('')

  const [
    carregandoMissao,
    setCarregandoMissao,
  ] = useState(false)

  const [
    resultadoMissao,
    setResultadoMissao,
  ] = useState(null)

  const [
    produtoSelecionado,
    setProdutoSelecionado,
  ] = useState(null)

  const [
    respostaProduto,
    setRespostaProduto,
  ] = useState('')

  const [
    carregandoProduto,
    setCarregandoProduto,
  ] = useState(false)

  const [
    resultadoProduto,
    setResultadoProduto,
  ] = useState(null)

  const [
    categoriaLoja,
    setCategoriaLoja,
  ] = useState('todos')

  const [
    raridadeLoja,
    setRaridadeLoja,
  ] = useState('todos')

  const [
    buscaLoja,
    setBuscaLoja,
  ] = useState('')

  const [
    mensagemLoja,
    setMensagemLoja,
  ] = useState('')

  useEffect(() => {
    localStorage.setItem(
      'ecoBattleJogadores',
      JSON.stringify(
        jogadores
      )
    )
  }, [jogadores])

  useEffect(() => {
    if (jogadorAtual) {
      localStorage.setItem(
        'ecoBattleJogadorAtual',
        jogadorAtual
      )
    }
  }, [jogadorAtual])

  useEffect(() => {
    localStorage.setItem(
      'ecoBattleEfeitoVisual',
      efeitoVisual
    )

    document.documentElement.setAttribute(
      'data-efeito',
      efeitoVisual
    )
  }, [efeitoVisual])

  useEffect(() => {
    localStorage.setItem(
      'ecoLifePesquisasZinho',
      JSON.stringify(
        pesquisasIA
      )
    )
  }, [pesquisasIA])

  const jogador =
    jogadores.find(
      (j) =>
        j.nome ===
        jogadorAtual
    )

  const hoje =
    dataHoje()

  const missaoDiariaBase =
    missoesDiarias[
      indiceMissaoDiaria()
    ]

  const nivelAtual = jogador
    ? calcularNivel(
        jogador.xp
      )
    : 1

  const xpAtual = jogador
    ? xpDoNivel(
        jogador.xp
      )
    : 0

  const missoesConcluidas =
    jogador
      ?.missoesConcluidas
      ?.length || 0

  const produtosEstudados =
    jogador
      ?.produtosEstudados
      ?.length || 0

  const missaoDiariaAtual =
    jogador?.missaoDiaria?.data ===
      hoje &&
    jogador?.missaoDiaria?.id ===
      missaoDiariaBase.id
      ? jogador.missaoDiaria
      : {
          id:
            missaoDiariaBase.id,
          data: hoje,
          progresso: 0,
          concluida: false,
          resgatada: false,
        }

  const proximaRecompensa =
    recompensasPorNivel.find(
      (item) =>
        item.nivel >
        nivelAtual
    )

  function atualizarJogador(
    nome,
    callback
  ) {
    setJogadores(
      (lista) =>
        lista.map((j) =>
          j.nome === nome
            ? callback(j)
            : j
        )
    )
  }

  function definirAvatar(
    avatar
  ) {
    atualizarJogador(
      jogadorAtual,
      (j) => ({
        ...j,
        avatar,
      })
    )
  }

  function recompensaJaExiste(
    j,
    id
  ) {
    return (
      j.recompensasResgatadas ||
      []
    ).some(
      (item) =>
        typeof item ===
          'object'
          ? item.id === id
          : item === id
    )
  }

  function aplicarConquistas(
    j
  ) {
    const novas =
      new Set(
        j.conquistas || []
      )

    if (j.partidas >= 1)
      novas.add('primeira')

    if (j.acertos >= 10)
      novas.add('sabio')

    if (j.partidas >= 5)
      novas.add('veterano')

    if (j.xp >= 500)
      novas.add('guardiao')

    if (
      j.missoesConcluidas
        ?.length >= 1
    ) {
      novas.add(
        'primeira-pesquisa'
      )
    }

    if (
      j.missoesConcluidas
        ?.length >= 5
    ) {
      novas.add(
        'pesquisador'
      )
    }

    if (
      j.missoesConcluidas
        ?.length >= 10
    ) {
      novas.add(
        'cientista-eco'
      )
    }

    if (
      j.produtosEstudados
        ?.length >= 1
    ) {
      novas.add(
        'catalogo'
      )
    }

    if (
      j.produtosEstudados
        ?.length >= 5
    ) {
      novas.add(
        'comprador-consciente'
      )
    }

    if (
      j.missoesConcluidas
        ?.length >=
      missoesPesquisa.length
    ) {
      novas.add(
        'especialista-eco'
      )
    }

    if (
      (j.sequenciaDias ||
        0) >= 3
    ) {
      novas.add(
        'sequencia-3'
      )
    }

    if (
      (j.moedas || 0) >=
      100
    ) {
      novas.add(
        'moedas-100'
      )
    }

    if (
      calcularNivel(
        j.xp
      ) >= 5
    ) {
      novas.add(
        'nivel-5'
      )
    }

    if ((j.batalhasJogadas || 0) >= 1) {
      novas.add('primeira-batalha')
    }

    if ((j.batalhasVencidas || 0) >= 5) {
      novas.add('campeao-arena')
    }

    return {
      ...j,
      conquistas: [
        ...novas,
      ],
    }
  }

  function adicionarJogador() {
    const nome =
      novoJogador.trim()

    if (!nome) {
      setMensagem(
        'Digite um nome.'
      )
      return
    }

    if (
      jogadores.some(
        (j) =>
          j.nome.toLowerCase() ===
          nome.toLowerCase()
      )
    ) {
      setMensagem(
        'Esse jogador já existe.'
      )
      return
    }

    setJogadores(
      (lista) => [
        ...lista,
        normalizarJogador({
          nome,
          avatar:
            '🌱',
        }),
      ]
    )

    setJogadorAtual(
      nome
    )

    setNovoJogador('')
    setMensagem('')
    setTela('inicio')
  }

  function trocarJogador(
    nome
  ) {
    setJogadorAtual(
      nome
    )
    setTela('inicio')
  }

  function responder(
    indice
  ) {
    if (
      resposta !== null
    )
      return

    const pergunta =
      perguntas[
        perguntaAtual
      ]

    if (!pergunta)
      return

    const alternativa =
      pergunta.opcoes[
        indice
      ]

    setIndiceSelecionado(
      indice
    )

    if (
      alternativa.correta
    ) {
      const ganho =
        dificuldades[
          dificuldade
        ].xp

      setXpGanho(
        (v) =>
          v + ganho
      )

      atualizarJogador(
        jogadorAtual,
        (j) =>
          aplicarConquistas({
            ...j,
            xp:
              j.xp + ganho,
            moedas:
              (j.moedas ||
                0) + 3,
            acertos:
              j.acertos + 1,
            missaoDiaria:
              atualizarMissaoDiariaNoJogador(
                j,
                'desafio',
                0,
                ganho
              ),
          })
      )

      setResposta(
        'correta'
      )
    } else {
      setResposta(
        'errada'
      )
    }
  }

  function proximaPergunta() {
    if (
      perguntaAtual <
      perguntas.length - 1
    ) {
      setPerguntaAtual(
        (v) => v + 1
      )
      setResposta(null)
      setIndiceSelecionado(
        null
      )
      return
    }

    atualizarJogador(
      jogadorAtual,
      (j) =>
        aplicarConquistas({
          ...j,
          partidas:
            j.partidas + 1,
          ultimoDiaAtivo:
            hoje,
          missaoDiaria:
            atualizarMissaoDiariaNoJogador(
              j,
              'desafio',
              1
            ),
        })
    )

    setTela(
      'resultado'
    )
  }

  function escolherDesafio(
    tipo
  ) {
    setTipoDesafio(
      tipo
    )

    setTela(
      'dificuldade'
    )
  }

  async function iniciarDesafio(
    nivel
  ) {
    setDificuldade(
      nivel
    )

    // 3 perguntas do banco fixo + 2 geradas pelo Zinho (mudam a cada partida).
    // Se o servidor estiver desligado, usa só o banco fixo (plano B).
    let listaFinal = criarPerguntas(
      tipoDesafio,
      5
    )
    try {
      const r = await fetch(
        `/api/perguntas?nivel=${nivel}&tema=${encodeURIComponent(
          tipoDesafio
        )}&quantidade=2`,
        {
          signal:
            AbortSignal.timeout(3000),
        }
      )
      const d = await r.json()
      if (
        r.ok &&
        Array.isArray(d.perguntas) &&
        d.perguntas.length > 0
      ) {
        listaFinal = embaralhar([
          ...criarPerguntas(
            tipoDesafio,
            3
          ),
          ...d.perguntas,
        ])
      }
    } catch {
      /* servidor offline: segue com o banco fixo */
    }

    setPerguntas(listaFinal)

    setPerguntaAtual(0)
    setResposta(null)
    setIndiceSelecionado(
      null
    )
    setXpGanho(0)
    setTela('pergunta')
  }

  function prepararBatalha(
    tipo
  ) {
    setTipoBatalha(
      tipo
    )
    setTela(
      'batalha-dificuldade'
    )
  }

  function iniciarBatalha(
    nivel
  ) {
    if (!oponente) {
      setMensagem(
        'Escolha um adversário.'
      )
      return
    }

    setDificuldadeBatalha(
      nivel
    )

    setPerguntasBatalha(
      criarPerguntas(
        tipoBatalha,
        desafios[
          tipoBatalha
        ].perguntas.length
      )
    )

    setPerguntaBatalhaAtual(
      0
    )

    setTurnoBatalha(1)
    setVidaTorre1(100)
    setVidaTorre2(100)
    setCombo1(0)
    setCombo2(0)
    setDefesa1(false)
    setDefesa2(false)
    setEnergiaEspecial1(100)
    setEnergiaEspecial2(100)
    setBonusDano1(0)
    setBonusDano2(0)
    setDobroDano1(false)
    setDobroDano2(false)
    setAtaqueAnimando(false)
    setDefesaAnimando(false)
    setCriticoAtual(false)
    setMensagemBatalha('')
    setHabilidadeUsada(null)
    setRespostaBatalha(
      null
    )
    setIndiceBatalhaSelecionado(
      null
    )
    setUltimoAtaque(
      null
    )
    setXpBatalha1(0)
    setXpBatalha2(0)
    setResultadoBatalha(
      null
    )

    setTela(
      'batalha'
    )
  }

  function responderBatalha(
    indice
  ) {
    if (
      respostaBatalha !==
      null ||
      ataqueAnimando
    ) {
      return
    }

    const pergunta =
      perguntasBatalha[
        perguntaBatalhaAtual
      ]

    const alternativa =
      pergunta?.opcoes[
        indice
      ]

    if (!alternativa)
      return

    const nivel =
      dificuldades[
        dificuldadeBatalha
      ]

    setIndiceBatalhaSelecionado(
      indice
    )

    if (
      alternativa.correta
    ) {
      // Marca a resposta como respondida para liberar o botão Próxima.
      setRespostaBatalha('correta')

      const comboAtual =
        turnoBatalha === 1
          ? combo1 + 1
          : combo2 + 1

      const bonusDano =
        turnoBatalha === 1
          ? bonusDano1
          : bonusDano2

      const dobrar =
        turnoBatalha === 1
          ? dobroDano1
          : dobroDano2

      const critico =
        Math.random() < 0.2

      let dano =
        nivel.dano +
        (comboAtual >= 3
          ? 10
          : 0) +
        bonusDano

      if (critico)
        dano = Math.round(dano * 1.5)

      if (dobrar)
        dano *= 2

      const defesaAlvo =
        turnoBatalha === 1
          ? defesa2
          : defesa1

      if (defesaAlvo) {
        dano = Math.ceil(dano * 0.5)
        setDefesaAnimando(true)
        setTimeout(() =>
          setDefesaAnimando(false),
          650
        )

        if (turnoBatalha === 1)
          setDefesa2(false)
        else
          setDefesa1(false)
      }

      if (turnoBatalha === 1) {
        setCombo1(comboAtual)
        setVidaTorre2((v) =>
          Math.max(0, v - dano)
        )
        setXpBatalha1((v) =>
          v + nivel.xp +
          (critico ? 10 : 0)
        )
        setBonusDano1(0)
        setDobroDano1(false)
      } else {
        setCombo2(comboAtual)
        setVidaTorre1((v) =>
          Math.max(0, v - dano)
        )
        setXpBatalha2((v) =>
          v + nivel.xp +
          (critico ? 10 : 0)
        )
        setBonusDano2(0)
        setDobroDano2(false)
      }

      setCriticoAtual(critico)
      setAtaqueAnimando(true)
      setTimeout(() =>
        setAtaqueAnimando(false),
        650
      )

      setUltimoAtaque({
        jogador:
          turnoBatalha === 1
            ? jogador.nome
            : oponente,
        dano,
        combo: comboAtual,
        critico,
        bloqueado: defesaAlvo,
        id: Date.now(),
      })

      setMensagemBatalha(
        critico
          ? '🔥 CRÍTICO! O ataque ficou mais forte!'
          : defesaAlvo
          ? '🛡️ O escudo reduziu o impacto!'
          : comboAtual >= 3
          ? '🔥 COMBO! Ataque fortalecido!'
          : '💥 Ataque certeiro!'
      )
    } else {
      setRespostaBatalha(
        'errada'
      )

      if (turnoBatalha === 1)
        setCombo1(0)
      else
        setCombo2(0)

      setCriticoAtual(false)
      setUltimoAtaque({
        jogador:
          turnoBatalha === 1
            ? jogador.nome
            : oponente,
        dano: 0,
        combo: 0,
        critico: false,
        bloqueado: false,
        id: Date.now(),
      })

      setMensagemBatalha(
        '❌ Resposta incorreta. O combo foi perdido.'
      )
    }
  }

  function ativarDefesa() {
    if (
      respostaBatalha !== null ||
      defesaAnimando
    ) return

    if (turnoBatalha === 1) {
      if (defesa1) return
      setDefesa1(true)
    } else {
      if (defesa2) return
      setDefesa2(true)
    }

    setMensagemBatalha(
      '🛡️ Defesa ativada! O próximo dano recebido será reduzido pela metade.'
    )
  }

  function usarHabilidadeEspecial() {
    if (
      respostaBatalha !== null ||
      !dificuldadeBatalha
    ) return

    const poder =
      poderesBatalha[efeitoVisual] ||
      poderesBatalha.dark

    const energia =
      turnoBatalha === 1
        ? energiaEspecial1
        : energiaEspecial2

    if (energia < 100) {
      setMensagemBatalha(
        '⚡ A habilidade especial já foi usada nesta batalha.'
      )
      return
    }

    if (turnoBatalha === 1)
      setEnergiaEspecial1(0)
    else
      setEnergiaEspecial2(0)

    setHabilidadeUsada({
      jogador:
        turnoBatalha === 1
          ? jogador.nome
          : oponente,
      poder: poder.nome,
      id: Date.now(),
    })

    if (poder.tipo === 'cura') {
      if (turnoBatalha === 1) {
        setVidaTorre1((v) =>
          Math.min(100, v + 20)
        )
      } else {
        setVidaTorre2((v) =>
          Math.min(100, v + 20)
        )
      }
    }

    if (poder.tipo === 'escudo') {
      if (turnoBatalha === 1)
        setDefesa1(true)
      else
        setDefesa2(true)
    }

    if (poder.tipo === 'dano') {
      if (turnoBatalha === 1)
        setBonusDano1(20)
      else
        setBonusDano2(20)
    }

    if (poder.tipo === 'dobro') {
      if (turnoBatalha === 1)
        setDobroDano1(true)
      else
        setDobroDano2(true)
    }

    setMensagemBatalha(
      `${poder.emoji} ${poder.nome} ativado! ${poder.descricao}`
    )
  }

  function proximoTurnoBatalha() {
    if (
      respostaBatalha ===
      null
    )
      return

    // No modo contra IA, o Zinho ataca automaticamente após a resposta do jogador.
    if (oponente === 'Zinho (IA)') {
      if (vidaTorre2 <= 0) {
        finalizarBatalha(jogador.nome)
        return
      }

      const nivelIA = dificuldades[dificuldadeBatalha] || dificuldades.medio
      const chanceAcerto = dificuldadeBatalha === 'facil'
        ? 0.45
        : dificuldadeBatalha === 'dificil'
        ? 0.9
        : 0.7
      const acertouIA = Math.random() < chanceAcerto
      let danoIA = 0
      let novoComboIA = 0

      if (acertouIA) {
        novoComboIA = combo2 + 1
        danoIA = Math.max(8, nivelIA.dano - 5 + (novoComboIA >= 3 ? 8 : 0))
        if (defesa1) {
          danoIA = Math.ceil(danoIA / 2)
          setDefesa1(false)
          setDefesaAnimando(true)
          setTimeout(() => setDefesaAnimando(false), 650)
        }
        setCombo2(novoComboIA)
        setVidaTorre1((v) => Math.max(0, v - danoIA))
        setXpBatalha2((v) => v + Math.round(nivelIA.xp / 2))
        setMensagemBatalha(
          defesa1
            ? `🛡️ Você se defendeu! O Zinho causou apenas ${danoIA} de dano.`
            : novoComboIA >= 3
            ? `🤖🔥 O Zinho acertou um combo e causou ${danoIA} de dano!`
            : `🤖 O Zinho acertou um ataque de ${danoIA} de dano!`
        )
        setUltimoAtaque({
          jogador: oponente,
          dano: danoIA,
          combo: novoComboIA,
          critico: false,
          bloqueado: defesa1,
          id: Date.now(),
        })
      } else {
        setCombo2(0)
        setMensagemBatalha('🤖 O Zinho errou o ataque! Aproveite para continuar.')
        setUltimoAtaque({
          jogador: oponente,
          dano: 0,
          combo: 0,
          critico: false,
          bloqueado: false,
          id: Date.now(),
        })
      }

      setAtaqueAnimando(true)
      setTimeout(() => setAtaqueAnimando(false), 650)

      const vidaJogadorDepois = Math.max(0, vidaTorre1 - danoIA)
      if (vidaJogadorDepois <= 0) {
        finalizarBatalha(oponente)
        return
      }

      if (perguntaBatalhaAtual >= perguntasBatalha.length - 1) {
        const vidaIADepois = vidaTorre2
        finalizarBatalha(vidaJogadorDepois > vidaIADepois ? jogador.nome : oponente)
        return
      }

      setPerguntaBatalhaAtual((v) => v + 1)
      setTurnoBatalha(1)
      setRespostaBatalha(null)
      setIndiceBatalhaSelecionado(null)
      setCriticoAtual(false)
      setHabilidadeUsada(null)
      return
    }

    if (
      vidaTorre1 <= 0 ||
      vidaTorre2 <= 0
    ) {
      finalizarBatalha(
        vidaTorre2 <= 0
          ? jogador.nome
          : oponente
      )
      return
    }

    if (
      perguntaBatalhaAtual >=
      perguntasBatalha.length -
        1
    ) {
      const vencedor =
        vidaTorre1 >
        vidaTorre2
          ? jogador.nome
          : vidaTorre2 >
            vidaTorre1
          ? oponente
          : jogador.nome

      finalizarBatalha(
        vencedor
      )
      return
    }

    setPerguntaBatalhaAtual(
      (v) => v + 1
    )

    setTurnoBatalha(
      (v) =>
        v === 1 ? 2 : 1
    )

    setRespostaBatalha(
      null
    )

    setIndiceBatalhaSelecionado(
      null
    )

    setUltimoAtaque(
      null
    )

    setCriticoAtual(false)
    setMensagemBatalha('')
    setHabilidadeUsada(null)
  }

  function finalizarBatalha(
    vencedor
  ) {
    const perdedor =
      vencedor ===
      jogador.nome
        ? oponente
        : jogador.nome

    const xpVencedor =
      vencedor ===
      jogador.nome
        ? xpBatalha1 + 50
        : xpBatalha2 + 50

    const xpPerdedor =
      perdedor ===
      jogador.nome
        ? xpBatalha1 + 10
        : xpBatalha2 + 10

    if (oponente === 'Zinho (IA)') {
      const venceu = vencedor === jogador.nome
      const xpRecebido = venceu ? xpBatalha1 + 50 : xpBatalha1 + 10
      atualizarJogador(jogador.nome, (j) =>
        aplicarConquistas({
          ...j,
          xp: j.xp + xpRecebido,
          moedas: (j.moedas || 0) + (venceu ? 25 : 10),
          vitorias: (j.vitorias || 0) + (venceu ? 1 : 0),
          derrotas: (j.derrotas || 0) + (venceu ? 0 : 1),
          batalhasJogadas: (j.batalhasJogadas || 0) + 1,
          batalhasVencidas: (j.batalhasVencidas || 0) + (venceu ? 1 : 0),
          missaoDiaria: atualizarMissaoDiariaNoJogador(j, 'batalha', 1, xpRecebido),
          partidas: (j.partidas || 0) + 1,
        })
      )
      setResultadoBatalha({
        vencedor,
        perdedor,
        xpVencedor: venceu ? xpRecebido : 0,
        xpPerdedor: venceu ? 0 : xpRecebido,
      })
      setTela('resultado-batalha')
      return
    }

    atualizarJogador(
      vencedor,
      (j) =>
        aplicarConquistas({
          ...j,
          xp:
            j.xp +
            xpVencedor,
          moedas:
            (j.moedas ||
              0) + 25,
          vitorias:
            (j.vitorias ||
              0) + 1,
          batalhasJogadas:
            (j.batalhasJogadas ||
              0) + 1,
          batalhasVencidas:
            (j.batalhasVencidas ||
              0) + 1,
          missaoDiaria:
            atualizarMissaoDiariaNoJogador(
              j,
              'batalha',
              1,
              xpVencedor
            ),
          partidas:
            (j.partidas ||
              0) + 1,
        })
    )

    atualizarJogador(
      perdedor,
      (j) =>
        aplicarConquistas({
          ...j,
          xp:
            j.xp +
            xpPerdedor,
          moedas:
            (j.moedas ||
              0) + 10,
          derrotas:
            (j.derrotas ||
              0) + 1,
          batalhasJogadas:
            (j.batalhasJogadas ||
              0) + 1,
          missaoDiaria:
            atualizarMissaoDiariaNoJogador(
              j,
              'batalha',
              1,
              xpPerdedor
            ),
          partidas:
            (j.partidas ||
              0) + 1,
        })
    )

    setResultadoBatalha({
      vencedor,
      perdedor,
      xpVencedor,
      xpPerdedor,
    })

    setTela(
      'resultado-batalha'
    )
  }

  async function perguntarIA() {
    const pergunta =
      perguntaIA.trim()

    if (
      !pergunta ||
      carregandoIA ||
      !jogador
    )
      return

    setCarregandoIA(
      true
    )

    setRespostaIA('')
    setErroIA('')

    try {
      const resposta =
        await fetch(
          '/api/ia',
          {
            method:
              'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body:
              JSON.stringify({
                pergunta,
              }),
          }
        )

      const dados =
        await resposta.json()

      if (!resposta.ok) {
        throw new Error(
          dados?.detalhes
            ?.error
            ?.message ||
            dados?.erro ||
            'Erro ao consultar o Zinho.'
        )
      }

      setRespostaIA(
        dados.resposta
      )

      const pontos =
        Number(
          dados.pontos
        ) || 0

      setPontosPesquisaIA(
        pontos
      )

      setAssuntoPesquisaIA(
        dados.assunto ||
          pergunta
      )

      const idPesquisa =
        dados.id ||
        pergunta.toLowerCase()

      if (
        pontos > 0 &&
        !pesquisasIA.includes(
          idPesquisa
        )
      ) {
        setPesquisasIA(
          (lista) => [
            ...lista,
            idPesquisa,
          ]
        )

        atualizarJogador(
          jogadorAtual,
          (j) =>
            aplicarConquistas({
              ...j,
              xp:
                j.xp + pontos,
              moedas:
                (j.moedas ||
                  0) + 5,
              pesquisasRealizadas:
                (j.pesquisasRealizadas ||
                  0) + 1,
              missaoDiaria:
                atualizarMissaoDiariaNoJogador(
                  j,
                  'pesquisa',
                  1,
                  pontos
                ),
            })
        )
      }
    } catch (erro) {
      setErroIA(
        `Erro: ${erro.message}`
      )
    } finally {
      setCarregandoIA(
        false
      )
    }
  }

  function abrirMissao(
    missao
  ) {
    setMissaoSelecionada(
      missao
    )

    setRespostaMissao(
      ''
    )

    setResultadoMissao(
      jogador.missoesConcluidas.includes(
        missao.id
      )
        ? {
            tipo: 'info',
            mensagem:
              '✅ Missão já concluída.',
          }
        : null
    )

    setTela('missao')
  }

  async function iniciarMissaoPesquisa() {
    if (
      !missaoSelecionada ||
      carregandoMissao
    )
      return

    if (
      jogador.missoesConcluidas.includes(
        missaoSelecionada.id
      )
    )
      return

    setCarregandoMissao(
      true
    )

    try {
      const resposta =
        await fetch(
          '/api/ia',
          {
            method:
              'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body:
              JSON.stringify({
                pergunta: `${missaoSelecionada.pergunta}

Você é o Zinho, assistente educativo do EcoLife.

Responda em português do Brasil de forma simples e educativa.

No final, escreva:
🌱 O que posso fazer?

e dê 3 atitudes práticas.`,
              }),
          }
        )

      const dados =
        await resposta.json()

      if (!resposta.ok) {
        throw new Error(
          dados?.erro ||
            'Erro ao realizar a missão.'
        )
      }

      setRespostaMissao(
        dados.resposta
      )

      atualizarJogador(
        jogadorAtual,
        (j) =>
          aplicarConquistas({
            ...j,
            xp:
              j.xp +
              missaoSelecionada.xp,
            moedas:
              (j.moedas ||
                0) + 10,
            missoesConcluidas:
              [
                ...j.missoesConcluidas,
                missaoSelecionada.id,
              ],
            pesquisasRealizadas:
              (j.pesquisasRealizadas ||
                0) + 1,
            missaoDiaria:
              atualizarMissaoDiariaNoJogador(
                j,
                'missao',
                1,
                missaoSelecionada.xp
              ),
          })
      )

      setResultadoMissao({
        tipo: 'success',
        mensagem: `🎉 Missão concluída! +${missaoSelecionada.xp} XP e 🪙 +10.`,
      })
    } catch (erro) {
      setResultadoMissao({
        tipo: 'error',
        mensagem:
          `⚠️ ${erro.message}`,
      })
    } finally {
      setCarregandoMissao(
        false
      )
    }
  }

  function abrirProduto(
    produto
  ) {
    setProdutoSelecionado(
      produto
    )

    setRespostaProduto(
      ''
    )

    setResultadoProduto(
      jogador.produtosEstudados.includes(
        produto.id
      )
        ? {
            tipo: 'info',
            mensagem:
              '✅ Produto já estudado.',
          }
        : null
    )

    setTela('produto')
  }

  async function estudarProduto() {
    if (
      !produtoSelecionado ||
      carregandoProduto
    )
      return

    if (
      jogador.produtosEstudados.includes(
        produtoSelecionado.id
      )
    )
      return

    setCarregandoProduto(
      true
    )

    try {
      const resposta =
        await fetch(
          '/api/ia',
          {
            method:
              'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body:
              JSON.stringify({
                pergunta: `Você é o Zinho, assistente educativo do EcoLife.

Produto: ${produtoSelecionado.nome}
Categoria: ${produtoSelecionado.categoria}
Descrição: ${produtoSelecionado.descricao}

${produtoSelecionado.estudo}

Explique:
1\. O que é.
2\. Como pode ajudar.
3\. Cuidados.
4\. Descarte responsável.

No final:
🌱 Dica do Zinho:`,
              }),
          }
        )

      const dados =
        await resposta.json()

      if (!resposta.ok) {
        throw new Error(
          dados?.erro ||
            'Erro ao estudar produto.'
        )
      }

      setRespostaProduto(
        dados.resposta
      )

      atualizarJogador(
        jogadorAtual,
        (j) =>
          aplicarConquistas({
            ...j,
            xp:
              j.xp +
              produtoSelecionado.xp,
            moedas:
              (j.moedas ||
                0) + 8,
            produtosEstudados:
              [
                ...j.produtosEstudados,
                produtoSelecionado.id,
              ],
            missaoDiaria:
              atualizarMissaoDiariaNoJogador(
                j,
                'produto',
                1,
                produtoSelecionado.xp
              ),
          })
      )

      setResultadoProduto({
        tipo: 'success',
        mensagem: `🎉 Produto estudado! +${produtoSelecionado.xp} XP e 🪙 +8.`,
      })
    } catch (erro) {
      setResultadoProduto({
        tipo: 'error',
        mensagem:
          `⚠️ ${erro.message}`,
      })
    } finally {
      setCarregandoProduto(
        false
      )
    }
  }

  function comprarItem(
    item
  ) {
    if (!jogador)
      return

    if (
      recompensaJaExiste(
        jogador,
        item.id
      )
    ) {
      setMensagemLoja(
        '✅ Você já possui este item.'
      )
      return
    }

    const moedas =
      jogador.moedas || 0

    if (
      moedas <
      item.preco
    ) {
      setMensagemLoja(
        `🪙 Você precisa de mais ${
          item.preco - moedas
        } moedas.`
      )
      return
    }

    atualizarJogador(
      jogadorAtual,
      (j) => {
        let novoXp = j.xp
        let novasMoedas =
          moedas -
          item.preco
        let novoTitulo =
          j.tituloPerfil

        if (
          item.tipo ===
          'xp'
        ) {
          novoXp +=
            Number(
              item.valor
            ) || 0
        }

        if (
          item.tipo ===
          'moedas'
        ) {
          novasMoedas +=
            Number(
              item.valor
            ) || 0
        }

        if (
          item.tipo ===
          'titulo'
        ) {
          novoTitulo =
            item.valor
        }

        return aplicarConquistas({
          ...j,
          xp: novoXp,
          moedas:
            novasMoedas,
          tituloPerfil:
            novoTitulo,
          recompensasResgatadas:
            [
              ...(j.recompensasResgatadas ||
                []),
              {
                id:
                  item.id,
                nome:
                  item.nome,
                emoji:
                  item.emoji,
                raridade:
                  item.raridade,
                tipo:
                  item.tipo,
              },
            ],
        })
      }
    )

    setMensagemLoja(
      `🎉 ${item.nome} comprado com sucesso!`
    )
  }

  const itensLojaFiltrados =
    useMemo(() => {
      return itensLoja.filter(
        (item) => {
          const categoriaOk =
            categoriaLoja ===
              'todos' ||
            item.categoria ===
              categoriaLoja

          const raridadeOk =
            raridadeLoja ===
              'todos' ||
            item.raridade ===
              raridadeLoja

          const buscaOk =
            item.nome
              .toLowerCase()
              .includes(
                buscaLoja
                  .toLowerCase()
              ) ||
            item.descricao
              .toLowerCase()
              .includes(
                buscaLoja
                  .toLowerCase()
              )

          return (
            categoriaOk &&
            raridadeOk &&
            buscaOk
          )
        }
      )
    }, [
      categoriaLoja,
      raridadeLoja,
      buscaLoja,
    ])

  const ranking = useMemo(
    () =>
      [...jogadores].sort(
        (a, b) =>
          b.xp - a.xp ||
          b.vitorias -
            a.vitorias
      ),
    [jogadores]
  )

  const posicao =
    Math.max(
      0,
      ranking.findIndex(
        (j) =>
          j.nome ===
          jogadorAtual
      )
    ) + 1

  const proximasMoedas =
    jogador?.moedas ||
    0

  if (!jogador) {
    return (
      <div className="app eco-motion-enabled">
        <header className="header">
          <div className="logo">
            🌱{' '}
            <span>
              EcoLife
            </span>
          </div>
        </header>

        <main className="main">
          <section className="hero">
            <p className="tag">
              👥 JOGADORES
            </p>

            <h1>
              Quem vai
              <br />
              <span>
                jogar?
              </span>
            </h1>

            <div className="card">
              <input
                type="text"
                placeholder="Nome do jogador"
                value={
                  novoJogador
                }
                onChange={(e) =>
                  setNovoJogador(
                    e.target.value
                  )
                }
                onKeyDown={(e) =>
                  e.key ===
                    'Enter' &&
                  adicionarJogador()
                }
              />

              <button
                onClick={
                  adicionarJogador
                }
              >
                ➕ Adicionar jogador
              </button>

              {mensagem && (
                <div className="result wrong">
                  {mensagem}
                </div>
              )}
            </div>

            <section className="cards">
              {jogadores.map(
                (j) => (
                  <div
                    className="card"
                    key={
                      j.nome
                    }
                  >
                    <div className="card-icon">
                      {j.avatar}
                    </div>

                    <h2>
                      {j.nome}
                    </h2>

                    <p>
                      ⭐ {j.xp} XP
                      <br />
                      🏆 Nível{' '}
                      {calcularNivel(
                        j.xp
                      )}
                      <br />
                      🪙{' '}
                      {j.moedas}
                    </p>

                    <button
                      onClick={() =>
                        trocarJogador(
                          j.nome
                        )
                      }
                    >
                      Entrar
                    </button>
                  </div>
                )
              )}
            </section>
          </section>
        </main>
      </div>
    )
  }

  function Cabecalho() {
    return (
      <header className="header">
        <div className="logo">
          🌱{' '}
          <span>
            EcoLife
          </span>
        </div>

        <div className="score">
          {jogador.avatar}{' '}
          {jogador.nome}
        </div>

        <div className="score">
          ⭐ {jogador.xp}
        </div>

        <div className="score">
          🪙{' '}
          {jogador.moedas ||
            0}
        </div>

        <div className="score">
          🏆 Nível{' '}
          {nivelAtual}
        </div>

        <button
          className="profile-button"
          onClick={() =>
            setTela(
              'perfil'
            )
          }
        >
          👤 Perfil
        </button>

        <button
          className="back-button"
          onClick={() =>
            setJogadorAtual('')
          }
        >
          🔄 Trocar
        </button>
      </header>
    )
  }

  if (tela === 'loja') {
    const comprados =
      jogador.recompensasResgatadas ||
      []

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🛍️ LOJA ECO
            </p>

            <h1>
              Sua moeda.
              <br />
              <span>
                Suas recompensas.
              </span>
            </h1>

            <div className="card">
              <div
                className="card-icon"
                style={{
                  fontSize:
                    '3rem',
                }}
              >
                🪙
              </div>

              <h2>
                Carteira Eco
              </h2>

              <p
                style={{
                  fontSize:
                    '1.5rem',
                }}
              >
                <strong>
                  {proximasMoedas}
                </strong>{' '}
                moedas
              </p>

              <div className="progress-info">
                <span>
                  Itens desbloqueados
                </span>

                <span>
                  {
                    comprados.length
                  }
                </span>
              </div>
            </div>
          </section>

          <section className="profile-panel">
            <input
              type="text"
              placeholder="🔎 Procurar recompensa..."
              value={buscaLoja}
              onChange={(e) =>
                setBuscaLoja(
                  e.target.value
                )
              }
              style={{
                width:
                  '100%',
                boxSizing:
                  'border-box',
                marginBottom:
                  15,
              }}
            />

            <div
              className="victory-buttons"
              style={{
                flexWrap:
                  'wrap',
              }}
            >
              {categoriasLoja.map(
                (categoria) => (
                  <button
                    key={
                      categoria.id
                    }
                    className={
                      categoriaLoja ===
                      categoria.id
                        ? 'play-button'
                        : 'back-button'
                    }
                    onClick={() =>
                      setCategoriaLoja(
                        categoria.id
                      )
                    }
                  >
                    {
                      categoria.emoji
                    }{' '}
                    {
                      categoria.nome
                    }
                  </button>
                )
              )}
            </div>

            <div
              className="victory-buttons"
              style={{
                flexWrap:
                  'wrap',
              }}
            >
              <button
                className={
                  raridadeLoja ===
                  'todos'
                    ? 'play-button'
                    : 'back-button'
                }
                onClick={() =>
                  setRaridadeLoja(
                    'todos'
                  )
                }
              >
                ✨ Todas
              </button>

              {Object.entries(
                raridades
              ).map(
                ([
                  id,
                  raridade,
                ]) => (
                  <button
                    key={
                      id
                    }
                    className={
                      raridadeLoja ===
                      id
                        ? 'play-button'
                        : 'back-button'
                    }
                    onClick={() =>
                      setRaridadeLoja(
                        id
                      )
                    }
                  >
                    {
                      raridade.emoji
                    }{' '}
                    {
                      raridade.nome
                    }
                  </button>
                )
              )}
            </div>
          </section>

          {mensagemLoja && (
            <div className="result correct">
              {mensagemLoja}
            </div>
          )}

          <section className="cards">
            {itensLojaFiltrados.map(
              (item) => {
                const possui =
                  recompensaJaExiste(
                    jogador,
                    item.id
                  )

                const raridade =
                  raridades[
                    item.raridade
                  ]

                const podeComprar =
                  !possui &&
                  jogador.moedas >=
                    item.preco

                return (
                  <div
                    className="card"
                    key={
                      item.id
                    }
                    style={{
                      opacity:
                        possui
                          ? 0.65
                          : 1,
                    }}
                  >
                    <div className="card-icon">
                      {
                        item.emoji
                      }
                    </div>

                    <p className="tag">
                      {raridade.emoji}{' '}
                      {
                        raridade.nome
                      }
                    </p>

                    <h2>
                      {item.nome}
                    </h2>

                    <p>
                      {
                        item.descricao
                      }
                    </p>

                    <div
                      style={{
                        margin:
                          '12px 0',
                      }}
                    >
                      <strong>
                        🪙{' '}
                        {
                          item.preco
                        }{' '}
                        moedas
                      </strong>
                    </div>

                    {item.tipo ===
                      'xp' && (
                      <div className="result">
                        ⭐ +{
                          item.valor
                        }{' '}
                        XP
                      </div>
                    )}

                    {item.tipo ===
                      'moedas' && (
                      <div className="result">
                        🪙 +{
                          item.valor
                        }{' '}
                        moedas
                      </div>
                    )}

                    {possui ? (
                      <button
                        disabled
                      >
                        ✅ Já desbloqueado
                      </button>
                    ) : (
                      <button
                        disabled={
                          !podeComprar
                        }
                        onClick={() =>
                          comprarItem(
                            item
                          )
                        }
                      >
                        {podeComprar
                          ? '🛍️ Comprar'
                          : `🔒 Faltam ${Math.max(
                              0,
                              item.preco -
                                jogador.moedas
                            )}`}
                      </button>
                    )}
                  </div>
                )
              }
            )}
          </section>

          {itensLojaFiltrados.length ===
            0 && (
            <div className="card">
              <div className="card-icon">
                🔎
              </div>

              <h2>
                Nenhum item encontrado.
              </h2>

              <p>
                Tente outro filtro ou outra
                pesquisa.
              </p>
            </div>
          )}

          {livroAberto && (
            <div
              className="book-modal-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={livroAberto.titulo}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setLivroAberto(null)
                }
              }}
            >
              <section className="storybook-modal">
                <button
                  className="book-close-button"
                  onClick={() => setLivroAberto(null)}
                  aria-label="Fechar livro"
                >
                  ✕
                </button>

                <div className="storybook-mascots" aria-hidden="true">
                  <span className="storybook-character character-left">🦊</span>
                  <span className="storybook-character character-right">🐸</span>
                  <span className="storybook-book-emoji">📖</span>
                  <span className="storybook-sparkle sparkle-one">✨</span>
                  <span className="storybook-sparkle sparkle-two">🌟</span>
                </div>

                <div className="storybook-heading">
                  <span className="storybook-category">{livroAberto.categoria}</span>
                  <h2>{livroAberto.emoji} {livroAberto.titulo}</h2>
                  <p>{livroAberto.descricao}</p>
                </div>

                <div className="storybook-open-book" key={`${livroAberto.id}-${paginaLivro}`}>
                  <div className="storybook-page-decoration" aria-hidden="true">
                    <span>{livroAberto.emoji}</span>
                  </div>
                  <div className="storybook-page-content">
                    <span className="storybook-page-label">CAPÍTULO {paginaLivro + 1}</span>
                    <p>{livroAberto.historia.split('\n\n')[paginaLivro]}</p>
                    <span className="storybook-page-number">
                      {paginaLivro + 1} / {livroAberto.historia.split('\n\n').length}
                    </span>
                  </div>
                </div>

                <div className="storybook-controls">
                  <button
                    className="storybook-nav-button"
                    disabled={paginaLivro === 0}
                    onClick={() => setPaginaLivro((pagina) => Math.max(0, pagina - 1))}
                  >
                    ← Anterior
                  </button>
                  <span className="storybook-progress">
                    Página {paginaLivro + 1} de {livroAberto.historia.split('\n\n').length}
                  </span>
                  {paginaLivro < livroAberto.historia.split('\n\n').length - 1 ? (
                    <button
                      className="storybook-next-button"
                      onClick={() => setPaginaLivro((pagina) => Math.min(livroAberto.historia.split('\n\n').length - 1, pagina + 1))}
                    >
                      Virar página →
                    </button>
                  ) : (
                    <button
                      className="storybook-next-button"
                      onClick={() => setLivroAberto(null)}
                    >
                      Terminar história ✓
                    </button>
                  )}
                </div>
              </section>
            </div>
          )}

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'ranking'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🏆 RANKING ECO
            </p>

            <h1>
              Os melhores
              <br />
              <span>
                guerreiros.
              </span>
            </h1>

            <p>
              Sua posição:
              <strong>
                \#{posicao}
              </strong>
            </p>
          </section>

          <section className="cards">
            {ranking
              .slice(
                0,
                3
              )
              .map(
                (j, i) => (
                  <div
                    className="card"
                    key={
                      j.nome
                    }
                  >
                    <div className="card-icon">
                      {
                        [
                          '🥇',
                          '🥈',
                          '🥉',
                        ][i]
                      }
                    </div>

                    <h2>
                      {j.avatar}{' '}
                      {j.nome}
                    </h2>

                    <p>
                      ⭐ {j.xp} XP
                      <br />
                      🏆 Nível{' '}
                      {calcularNivel(
                        j.xp
                      )}
                      <br />
                      ⚔️{' '}
                      {j.vitorias ||
                        0}{' '}
                      vitórias
                      <br />
                      🧠{' '}
                      {j.acertos ||
                        0}{' '}
                      acertos
                    </p>
                  </div>
                )
              )}
          </section>

          <section className="ranking-list">
            {ranking.map(
              (j, i) => (
                <div
                  className={`ranking-item ${
                    j.nome ===
                    jogador.nome
                      ? 'ranking-current'
                      : ''
                  }`}
                  key={
                    j.nome
                  }
                >
                  <div className="ranking-position">
                    \#{i + 1}
                  </div>

                  <div className="ranking-info">
                    <strong>
                      {j.avatar}{' '}
                      {j.nome}
                    </strong>

                    <span>
                      🏆 Nível{' '}
                      {calcularNivel(
                        j.xp
                      )}
                    </span>

                    <span>
                      ⚔️{' '}
                      {j.vitorias ||
                        0}{' '}
                      vitórias
                    </span>
                  </div>

                  <div className="ranking-xp">
                    ⭐ {j.xp}{' '}
                    XP
                    <br />
                    🪙{' '}
                    {j.moedas ||
                      0}
                  </div>
                </div>
              )
            )}
          </section>

          <div className="victory-buttons">
            <button
              className="back-button"
              onClick={() =>
                setTela('inicio')
              }
            >
              ← Início
            </button>

            <button
              className="play-button"
              onClick={() =>
                setTela('loja')
              }
            >
              🛍️ Loja
            </button>
          </div>
        </main>
      </div>
    )
  }

  if (
    tela === 'efeitos'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              ✨ PERSONALIZAÇÃO
            </p>

            <h1>
              Escolha seu
              <br />
              <span>
                estilo de batalha.
              </span>
            </h1>
          </section>

          <section className="cards">
            {efeitos.map(
              (efeito) => (
                <div
                  className="card"
                  key={
                    efeito.id
                  }
                >
                  <div className="card-icon">
                    {
                      efeito.emoji
                    }
                  </div>

                  <h2>
                    {efeito.nome}
                  </h2>

                  <p>
                    {
                      efeito.descricao
                    }
                  </p>

                  <button
                    onClick={() =>
                      setEfeitoVisual(
                        efeito.id
                      )
                    }
                  >
                    {efeitoVisual ===
                    efeito.id
                      ? '✅ Selecionado'
                      : '✨ Usar'}
                  </button>
                </div>
              )
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'niveis'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🏆 NÍVEIS
            </p>

            <h1>
              Evolua
              <br />
              <span>
                no EcoLife.
              </span>
            </h1>

            <p>
              Nível atual:{' '}
              <strong>
                {nivelAtual}
              </strong>
              <br />
              ⭐ {jogador.xp} XP
            </p>
          </section>

          <section className="cards">
            {recompensasPorNivel.map(
              (r) => (
                <div
                  className="card"
                  key={
                    r.id
                  }
                  style={{
                    opacity:
                      nivelAtual >=
                      r.nivel
                        ? 1
                        : 0.45,
                  }}
                >
                  <div className="card-icon">
                    {nivelAtual >=
                    r.nivel
                      ? r.emoji
                      : '🔒'}
                  </div>

                  <h2>
                    Nível{' '}
                    {r.nivel}
                  </h2>

                  <p>
                    {
                      r.nome
                    }

                    <br />

                    {
                      r.descricao
                    }
                  </p>

                  <strong>
                    {nivelAtual >=
                    r.nivel
                      ? '✅ DESBLOQUEADO'
                      : '🔒 BLOQUEADO'}
                  </strong>
                </div>
              )
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'perfil'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="profile-hero">
            <div className="profile-avatar">
              {jogador.avatar}
            </div>

            <div>
              <p className="tag">
                👤 PERFIL
              </p>

              <h1>
                {jogador.nome}
              </h1>

              <p className="profile-title">
                {jogador.tituloPerfil ||
                  '🍃 Iniciante Eco'}
              </p>
            </div>
          </section>

          <section className="cards">
            <div className="card">
              <div className="card-icon">
                🏆
              </div>

              <h2>
                Nível
              </h2>

              <strong>
                {nivelAtual}
              </strong>
            </div>

            <div className="card">
              <div className="card-icon">
                ⭐
              </div>

              <h2>
                XP
              </h2>

              <strong>
                {jogador.xp}
              </strong>
            </div>

            <div className="card">
              <div className="card-icon">
                🪙
              </div>

              <h2>
                Moedas
              </h2>

              <strong>
                {jogador.moedas ||
                  0}
              </strong>
            </div>

            <div className="card">
              <div className="card-icon">
                🏆
              </div>

              <h2>
                Ranking
              </h2>

              <strong>
                \#{posicao}
              </strong>
            </div>

            <div className="card">
              <div className="card-icon">
                ⚔️
              </div>

              <h2>
                Vitórias
              </h2>

              <strong>
                {jogador.vitorias ||
                  0}
              </strong>
            </div>

            <div className="card">
              <div className="card-icon">
                📈
              </div>

              <h2>
                Aproveitamento
              </h2>

              <strong>
                {aproveitamento(
                  jogador
                )}
                %
              </strong>
            </div>
          </section>

          <section className="profile-panel">
            <h2>
              🛍️ Loja Eco
            </h2>

            <p>
              Você possui{' '}
              <strong>
                {jogador.moedas ||
                  0}
              </strong>{' '}
              moedas.
            </p>

            <button
              className="play-button"
              onClick={() =>
                setTela('loja')
              }
            >
              🛍️ Abrir Loja
            </button>
          </section>

          <section className="profile-panel">
            <h2>
              🎨 Avatar
            </h2>

            <div className="avatar-grid">
              {[
                '🌱',
                '🌳',
                '🦋',
                '🌍',
                '♻️',
                '💧',
                '☀️',
                '🧠',
                '🏆',
                '🤖',
              ].map(
                (avatar) => (
                  <button
                    key={
                      avatar
                    }
                    className={`avatar-choice ${
                      jogador.avatar ===
                      avatar
                        ? 'avatar-active'
                        : ''
                    }`}
                    onClick={() =>
                      definirAvatar(
                        avatar
                      )
                    }
                  >
                    {avatar}
                  </button>
                )
              )}
            </div>
          </section>

          <div className="victory-buttons">
            <button
              className="play-button"
              onClick={() =>
                setTela(
                  'ranking'
                )
              }
            >
              🏆 Ranking
            </button>

            <button
              className="back-button"
              onClick={() =>
                setTela(
                  'niveis'
                )
              }
            >
              ⭐ Níveis
            </button>

            <button
              className="back-button"
              onClick={() =>
                setTela(
                  'inicio'
                )
              }
            >
              🏠 Início
            </button>
          </div>
        </main>
      </div>
    )
  }

  if (
    tela === 'desafios'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🎯 DESAFIOS
            </p>

            <h1>
              Escolha seu
              <br />
              <span>
                desafio.
              </span>
            </h1>
          </section>

          <section className="cards">
            {Object.entries(
              desafios
            ).map(
              ([id, desafio]) => (
                <div
                  className="card"
                  key={id}
                >
                  <div className="card-icon">
                    {
                      desafio.emoji
                    }
                  </div>

                  <h2>
                    {desafio.nome}
                  </h2>

                  <p>
                    {
                      desafio
                        .perguntas
                        .length
                    }{' '}
                    perguntas
                  </p>

                  <button
                    onClick={() =>
                      escolherDesafio(
                        id
                      )
                    }
                  >
                    🎮 Jogar
                  </button>
                </div>
              )
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'dificuldade'
  ) {
    const desafio =
      desafios[tipoDesafio]

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              {desafio.emoji}{' '}
              {desafio.nome}
            </p>

            <h1>
              Escolha a
              <br />
              <span>
                dificuldade.
              </span>
            </h1>
          </section>

          <section className="cards">
            {Object.entries(
              dificuldades
            ).map(
              ([id, nivel]) => (
                <div
                  className="card"
                  key={id}
                >
                  <div className="card-icon">
                    {nivel.emoji}
                  </div>

                  <h2>
                    {nivel.nome}
                  </h2>

                  <p>
                    ⭐ +{nivel.xp}{' '}
                    XP
                    <br />
                    🪙 +3 moedas
                  </p>

                  <button
                    onClick={() =>
                      iniciarDesafio(
                        id
                      )
                    }
                  >
                    Jogar
                  </button>
                </div>
              )
            )}
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'pergunta'
  ) {
    const pergunta =
      perguntas[
        perguntaAtual
      ]

    const nivel =
      dificuldades[
        dificuldade
      ]

    if (!pergunta)
      return null

    const progresso =
      ((perguntaAtual +
        1) /
        perguntas.length) *
      100

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="question">
            <p className="tag">
              {desafios[
                tipoDesafio
              ].emoji}{' '}
              {
                desafios[
                  tipoDesafio
                ].nome
              }
            </p>

            <div className="progress-info">
              <span>
                PERGUNTA{' '}
                {perguntaAtual +
                  1}{' '}
                /{' '}
                {
                  perguntas.length
                }
              </span>

              <span>
                {Math.round(
                  progresso
                )}
                %
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progresso}%`,
                }}
              />
            </div>

            <p className="difficulty-info">
              {nivel.emoji}{' '}
              +{nivel.xp} XP
              <br />
              🪙 +3 moedas
            </p>

            <h1>
              {
                pergunta.pergunta
              }
            </h1>

            <div className="answers">
              {pergunta.opcoes.map(
                (
                  opcao,
                  indice
                ) => (
                  <button
                    key={
                      opcao.texto
                    }
                    className={`answer ${
                      resposta &&
                      opcao.correta
                        ? 'answer-correct'
                        : resposta &&
                          indice ===
                            indiceSelecionado
                        ? 'answer-wrong'
                        : ''
                    }`}
                    disabled={
                      resposta !==
                      null
                    }
                    onClick={() =>
                      responder(
                        indice
                      )
                    }
                  >
                    {
                      opcao.texto
                    }
                  </button>
                )
              )}
            </div>

            {resposta && (
              <div
                className={`result ${
                  resposta ===
                  'correta'
                    ? 'correct'
                    : 'wrong'
                }`}
              >
                {resposta ===
                'correta'
                  ? `🎉 Correto! +${nivel.xp} XP e +3 moedas`
                  : `❌ Incorreto. Resposta certa: ${
                      pergunta.opcoes.find(
                        (o) =>
                          o.correta
                      ).texto
                    }`}
              </div>
            )}

            {resposta && (
              <ExplicacaoZinho
                pergunta={
                  pergunta.pergunta
                }
                respostaCorreta={
                  pergunta.opcoes.find(
                    (o) => o.correta
                  ).texto
                }
                explicacaoPronta={
                  pergunta.explicacao
                }
              />
            )}

            {resposta && (
              <button
                className="play-button"
                onClick={
                  proximaPergunta
                }
              >
                {perguntaAtual <
                perguntas.length -
                  1
                  ? '➡️ Próxima'
                  : '🏆 Resultado'}
              </button>
            )}
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'resultado'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="victory-card">
            <div className="victory-icon">
              🏆
            </div>

            <p className="tag">
              🎉 DESAFIO CONCLUÍDO
            </p>

            <h1>
              Parabéns!
            </h1>

            <div className="victory-score">
              <span>
                XP GANHO
              </span>

              <strong>
                +{xpGanho}
              </strong>
            </div>

            <p>
              ⭐ XP total:{' '}
              {jogador.xp}
              <br />
              🏆 Nível:{' '}
              {nivelAtual}
              <br />
              🪙 Moedas:{' '}
              {jogador.moedas}
            </p>

            <div className="victory-buttons">
              <button
                className="play-button"
                onClick={() =>
                  setTela(
                    'niveis'
                  )
                }
              >
                🏆 Níveis
              </button>

              <button
                className="play-button"
                onClick={() =>
                  setTela(
                    'loja'
                  )
                }
              >
                🛍️ Loja
              </button>

              <button
                className="back-button"
                onClick={() =>
                  setTela(
                    'inicio'
                  )
                }
              >
                🏠 Início
              </button>
            </div>
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'missoes'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🔎 MISSÕES
            </p>

            <h1>
              Aprenda com
              <br />
              <span>
                o Zinho.
              </span>
            </h1>
          </section>

          <section className="cards">
            {missoesPesquisa.map(
              (missao) => {
                const concluida =
                  jogador.missoesConcluidas.includes(
                    missao.id
                  )

                return (
                  <div
                    className="card"
                    key={
                      missao.id
                    }
                  >
                    <div className="card-icon">
                      {concluida
                        ? '✅'
                        : missao.emoji}
                    </div>

                    <h2>
                      {
                        missao.titulo
                      }
                    </h2>

                    <p>
                      {
                        missao.descricao
                      }

                      <br />
                      <br />

                      ⭐ +{
                        missao.xp
                      }{' '}
                      XP
                    </p>

                    <button
                      onClick={() =>
                        abrirMissao(
                          missao
                        )
                      }
                    >
                      {concluida
                        ? '🔒 Ver'
                        : '🤖 Pesquisar'}
                    </button>
                  </div>
                )
              }
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'missao'
  ) {
    if (!missaoSelecionada)
      return null

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="victory-card">
            <div className="victory-icon">
              {
                missaoSelecionada.emoji
              }
            </div>

            <h1>
              {
                missaoSelecionada.titulo
              }
            </h1>

            <p>
              {
                missaoSelecionada.descricao
              }
            </p>

            <div className="card">
              <p>
                {
                  missaoSelecionada.pergunta
                }
              </p>
            </div>

            {!jogador.missoesConcluidas.includes(
              missaoSelecionada.id
            ) &&
              !respostaMissao && (
                <button
                  className="play-button"
                  onClick={
                    iniciarMissaoPesquisa
                  }
                  disabled={
                    carregandoMissao
                  }
                >
                  {carregandoMissao
                    ? '⏳ Zinho pesquisando...'
                    : '🤖 Fazer missão'}
                </button>
              )}

            {respostaMissao && (
              <div className="ia-response">
                <div className="ia-response-icon">
                  🤖
                </div>

                <div>
                  <strong>
                    Zinho
                  </strong>

                  <p
                    style={{
                      whiteSpace:
                        'pre-wrap',
                    }}
                  >
                    {respostaMissao}
                  </p>
                </div>
              </div>
            )}

            {resultadoMissao && (
              <div
                className={`result ${
                  resultadoMissao.tipo ===
                  'success'
                    ? 'correct'
                    : resultadoMissao.tipo ===
                      'error'
                    ? 'wrong'
                    : ''
                }`}
              >
                {
                  resultadoMissao.mensagem
                }
              </div>
            )}

            <button
              className="back-button"
              onClick={() =>
                setTela(
                  'missoes'
                )
              }
            >
              ← Missões
            </button>
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'catalogo'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🛍️ CATÁLOGO
            </p>

            <h1>
              Produtos que
              <br />
              <span>
                ensinam.
              </span>
            </h1>
          </section>

          <section className="cards">
            {produtosEcologicos.map(
              (produto) => {
                const estudado =
                  jogador.produtosEstudados.includes(
                    produto.id
                  )

                return (
                  <div
                    className="card"
                    key={
                      produto.id
                    }
                  >
                    <div className="card-icon">
                      {estudado
                        ? '✅'
                        : produto.emoji}
                    </div>

                    <h2>
                      {
                        produto.nome
                      }
                    </h2>

                    <p>
                      {
                        produto.descricao
                      }

                      <br />
                      <br />

                      🌱{' '}
                      {
                        produto.beneficio
                      }
                    </p>

                    <button
                      onClick={() =>
                        abrirProduto(
                          produto
                        )
                      }
                    >
                      {estudado
                        ? '🔒 Ver'
                        : '🤖 Estudar'}
                    </button>
                  </div>
                )
              }
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'produto'
  ) {
    if (!produtoSelecionado)
      return null

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="victory-card">
            <div className="victory-icon">
              {
                produtoSelecionado.emoji
              }
            </div>

            <h1>
              {
                produtoSelecionado.nome
              }
            </h1>

            <p>
              {
                produtoSelecionado.descricao
              }
            </p>

            {!jogador.produtosEstudados.includes(
              produtoSelecionado.id
            ) &&
              !respostaProduto && (
                <button
                  className="play-button"
                  onClick={
                    estudarProduto
                  }
                  disabled={
                    carregandoProduto
                  }
                >
                  {carregandoProduto
                    ? '⏳ Estudando...'
                    : '🤖 Estudar com Zinho'}
                </button>
              )}

            {respostaProduto && (
              <div className="ia-response">
                <div className="ia-response-icon">
                  🤖
                </div>

                <div>
                  <strong>
                    Zinho
                  </strong>

                  <p
                    style={{
                      whiteSpace:
                        'pre-wrap',
                    }}
                  >
                    {respostaProduto}
                  </p>
                </div>
              </div>
            )}

            {resultadoProduto && (
              <div
                className={`result ${
                  resultadoProduto.tipo ===
                  'success'
                    ? 'correct'
                    : 'wrong'
                }`}
              >
                {
                  resultadoProduto.mensagem
                }
              </div>
            )}

            <button
              className="back-button"
              onClick={() =>
                setTela(
                  'catalogo'
                )
              }
            >
              ← Catálogo
            </button>
          </section>
        </main>
      </div>
    )
  }

  if (
    tela ===
    'batalha-jogador'
  ) {
    const outros =
      jogadores.filter(
        (j) =>
          j.nome !==
          jogador.nome
      )

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              ⚔️ BATALHA
            </p>

            <h1>
              Escolha seu
              <br />
              <span>
                adversário.
              </span>
            </h1>
          </section>

          <section className="cards">
            <div className="card">
              <div className="card-icon">🤖</div>
              <h2>Zinho (IA)</h2>
              <p>
                Treine contra um oponente controlado pelo jogo.
                <br />
                🧠 Fácil, Médio ou Difícil
              </p>
              <button
                className="play-button"
                onClick={() => {
                  setOponente('Zinho (IA)')
                  setTela('batalha-tipo')
                  setMensagemBatalha('Zinho preparou um desafio para você!')
                }}
              >
                ⚔️ Treinar contra IA
              </button>
            </div>
            {outros.map(
              (j) => (
                <div
                  className="card"
                  key={
                    j.nome
                  }
                >
                  <div className="card-icon">
                    🏰
                  </div>

                  <h2>
                    {j.nome}
                  </h2>

                  <p>
                    ⭐ {j.xp}
                    <br />
                    🏆 Nível{' '}
                    {calcularNivel(
                      j.xp
                    )}
                    <br />
                    ⚔️{' '}
                    {j.vitorias ||
                      0}
                  </p>

                  <button
                    onClick={() => {
                      setOponente(
                        j.nome
                      )
                      setTela(
                        'batalha-tipo'
                      )
                    }}
                  >
                    ⚔️ Desafiar
                  </button>
                </div>
              )
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela ===
    'batalha-tipo'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <h1>
              {jogador.nome}
              <br />
              <span>
                VS {oponente}
              </span>
              {oponente === 'Zinho (IA)' && (
                <p>🤖 Escolha um tema e enfrente a inteligência do EcoLife.</p>
              )}
            </h1>
          </section>

          <section className="cards">
            {Object.entries(
              desafios
            ).map(
              ([id, desafio]) => (
                <div
                  className="card"
                  key={
                    id
                  }
                >
                  <div className="card-icon">
                    {
                      desafio.emoji
                    }
                  </div>

                  <h2>
                    {
                      desafio.nome
                    }
                  </h2>

                  <button
                    onClick={() =>
                      prepararBatalha(
                        id
                      )
                    }
                  >
                    ⚔️ Escolher
                  </button>
                </div>
              )
            )}
          </section>
        </main>
      </div>
    )
  }

  if (
    tela ===
    'batalha-dificuldade'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="cards">
            {Object.entries(
              dificuldades
            ).map(
              ([id, nivel]) => (
                <div
                  className="card"
                  key={
                    id
                  }
                >
                  <div className="card-icon">
                    {nivel.emoji}
                  </div>

                  <h2>
                    {nivel.nome}
                  </h2>

                  <p>
                    ⚔️{' '}
                    {nivel.dano}{' '}
                    dano
                    <br />
                    ⭐ +
                    {nivel.xp}{' '}
                    XP
                  </p>

                  <button
                    onClick={() =>
                      iniciarBatalha(
                        id
                      )
                    }
                  >
                    🏰 Começar
                  </button>
                </div>
              )
            )}
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'batalha'
  ) {
    const pergunta =
      perguntasBatalha[
        perguntaBatalhaAtual
      ]

    if (!pergunta)
      return null

    const poderAtual =
      poderesBatalha[efeitoVisual] ||
      poderesBatalha.dark

    const vidaPercentual1 =
      Math.max(0, Math.min(100, vidaTorre1))

    const vidaPercentual2 =
      Math.max(0, Math.min(100, vidaTorre2))

    const contraIA = oponente === 'Zinho (IA)'

    const turnoNome =
      contraIA
        ? jogador.nome
        : turnoBatalha === 1
        ? jogador.nome
        : oponente

    const defesaAtiva =
      turnoBatalha === 1
        ? defesa1
        : defesa2

    const energiaAtual =
      turnoBatalha === 1
        ? energiaEspecial1
        : energiaEspecial2

    return (
      <div className="app eco-motion-enabled">
        <style>{`
          @keyframes ecoTowerAttack {
            0% { transform: translateX(0) scale(1); filter: brightness(1); }
            35% { transform: translateX(18px) scale(1.08); filter: brightness(1.5); }
            65% { transform: translateX(-5px) scale(0.98); filter: brightness(1.15); }
            100% { transform: translateX(0) scale(1); filter: brightness(1); }
          }
          @keyframes ecoTowerHit {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(5px); }
          }
          @keyframes ecoPop {
            0% { transform: scale(.7); opacity: .2; }
            60% { transform: scale(1.18); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .battle-arena .tower-side { animation: ecoPop .35s ease-out; }
          .battle-arena .tower-side.attack-animation { animation: ecoTowerAttack .6s ease-in-out; }
          .battle-arena .attack-message { animation: ecoPop .35s ease-out; font-weight: 800; }
          .battle-arena .health-box { transition: all .35s ease; }
          .battle-arena .tower { font-size: 3rem; transition: transform .25s ease; }
        `}</style>
        <Cabecalho />

        <main className="main">
          <section className="battle-arena">
            <div className="battle-title">
              <h1>🏰 BATALHA DE TORRES</h1>
              <p>
                {contraIA
                  ? <>🤖 Você joga; o Zinho responde automaticamente.</>
                  : <>Turno de <strong>{turnoNome}</strong></>}
              </p>
              <p>
                🤖 Zinho: {mensagemBatalha || 'Concentre-se na pergunta e proteja sua torre!'}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 18,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <div
                className={ataqueAnimando && turnoBatalha === 1 ? 'tower-side attack-animation' : 'tower-side'}
                style={{
                  width: 'min(100%, 280px)',
                  flex: '1 1 240px',
                  transform:
                    ataqueAnimando && turnoBatalha === 1
                      ? 'translateX(8px) scale(1.04)'
                      : 'translateX(0) scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              >
                <div className="tower-player">
                  🟢 {jogador.nome}
                </div>
                <div className="tower">🏰</div>
                <div className="health-box">
                  ❤️ {vidaTorre1}/100
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 14,
                    borderRadius: 999,
                    overflow: 'hidden',
                    background: 'rgba(0,0,0,0.18)',
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      width: `${vidaPercentual1}%`,
                      height: '100%',
                      background: 'currentColor',
                      transition: 'width 0.55s ease',
                    }}
                  />
                </div>
                {defesa1 && (
                  <div className="result correct">
                    🛡️ Escudo ativo
                  </div>
                )}
                {combo1 >= 2 && (
                  <div className="combo">🔥 x{combo1}</div>
                )}
              </div>

              <div className="battle-center">
                <div className="vs">VS</div>
                {ultimoAtaque && (
                  <div
                    className="attack-message"
                    style={{
                      transform: ataqueAnimando ? 'scale(1.18)' : 'scale(1)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    {ultimoAtaque.dano > 0
                      ? `${ultimoAtaque.critico ? '🔥 CRÍTICO ' : '💥 '}-${ultimoAtaque.dano}`
                      : '❌ ERROU!'}
                  </div>
                )}
                {criticoAtual && (
                  <div className="result correct">🔥 ATAQUE CRÍTICO!</div>
                )}
                {habilidadeUsada && (
                  <div className="result">
                    ✨ {habilidadeUsada.poder}
                  </div>
                )}
              </div>

              <div
                className={ataqueAnimando && turnoBatalha === 2 ? 'tower-side attack-animation' : 'tower-side'}
                style={{
                  width: 'min(100%, 280px)',
                  flex: '1 1 240px',
                  transform:
                    ataqueAnimando && turnoBatalha === 2
                      ? 'translateX(-8px) scale(1.04)'
                      : 'translateX(0) scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              >
                <div className="tower-player">
                  🔴 {oponente}
                </div>
                <div className="tower">🏰</div>
                <div className="health-box">
                  ❤️ {vidaTorre2}/100
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 14,
                    borderRadius: 999,
                    overflow: 'hidden',
                    background: 'rgba(0,0,0,0.18)',
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      width: `${vidaPercentual2}%`,
                      height: '100%',
                      background: 'currentColor',
                      transition: 'width 0.55s ease',
                    }}
                  />
                </div>
                {defesa2 && (
                  <div className="result correct">
                    🛡️ Escudo ativo
                  </div>
                )}
                {combo2 >= 2 && (
                  <div className="combo">🔥 x{combo2}</div>
                )}
              </div>
            </div>

            <div className="card">
              <h3>✨ Poder do efeito: {poderAtual.emoji} {poderAtual.nome}</h3>
              <p>{poderAtual.descricao}</p>
              <div className="progress-info">
                <span>⚡ Energia especial</span>
                <strong>{energiaAtual}/100</strong>
              </div>
              <div
                style={{
                  width: '100%',
                  height: 10,
                  borderRadius: 999,
                  overflow: 'hidden',
                  background: 'rgba(0,0,0,0.18)',
                  margin: '8px 0 14px',
                }}
              >
                <div
                  style={{
                    width: `${energiaAtual}%`,
                    height: '100%',
                    transition: 'width 0.4s ease',
                    background: 'currentColor',
                  }}
                />
              </div>

              <div
                className="victory-buttons"
                style={{ flexWrap: 'wrap' }}
              >
                <button
                  className="play-button"
                  disabled={respostaBatalha !== null || energiaAtual < 100}
                  onClick={usarHabilidadeEspecial}
                >
                  {poderAtual.emoji} Usar habilidade
                </button>
                <button
                  className="back-button"
                  disabled={respostaBatalha !== null || defesaAtiva}
                  onClick={ativarDefesa}
                >
                  🛡️ Defesa
                </button>
              </div>
            </div>

            <div className="battle-question">
              <p className="tag">
                Pergunta {perguntaBatalhaAtual + 1} de {perguntasBatalha.length}
              </p>
              <h2>{pergunta.pergunta}</h2>

              <div className="answers">
                {pergunta.opcoes.map(
                  (opcao, indice) => (
                    <button
                      className={`answer ${
                        respostaBatalha && opcao.correta
                          ? 'answer-correct'
                          : respostaBatalha && indice === indiceBatalhaSelecionado
                          ? 'answer-wrong'
                          : ''
                      }`}
                      key={opcao.texto}
                      disabled={respostaBatalha !== null || ataqueAnimando}
                      onClick={() => responderBatalha(indice)}
                    >
                      {opcao.texto}
                    </button>
                  )
                )}
              </div>

              {respostaBatalha && (
                <button
                  className="play-button"
                  onClick={proximoTurnoBatalha}
                >
                  Próxima →
                </button>
              )}
            </div>
          </section>
        </main>
      </div>
    )
  }

  if (
    tela ===
    'resultado-batalha'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="victory-card">
            <div className="victory-icon">
              👑
            </div>

            <h1>
              {resultadoBatalha?.vencedor === jogador.nome
                ? '🏆 Vitória!'
                : '🛡️ Fim de batalha'}
            </h1>

            <h2>
              {
                resultadoBatalha?.vencedor
              }
            </h2>

            <p>
              ⭐ +{
                resultadoBatalha?.vencedor ===
                jogador.nome
                  ? resultadoBatalha.xpVencedor
                  : resultadoBatalha.xpPerdedor
              }{' '}
              XP · 🪙 +{
                resultadoBatalha?.vencedor === jogador.nome ? 25 : 10
              } moedas
            </p>

            <p>🤖 Zinho: {resultadoBatalha?.vencedor === jogador.nome
              ? 'Excelente! Sua estratégia ecológica venceu a batalha.'
              : 'Boa tentativa! Cada batalha ajuda a aprender e melhorar.'}</p>

            <div className="victory-buttons">
              <button
                className="play-button"
                onClick={() =>
                  setTela(
                    'ranking'
                  )
                }
              >
                🏆 Ranking
              </button>

              <button
                className="play-button"
                onClick={() =>
                  setTela(
                    'loja'
                  )
                }
              >
                🛍️ Loja
              </button>

              <button
                className="back-button"
                onClick={() =>
                  setTela(
                    'inicio'
                  )
                }
              >
                🏠 Início
              </button>
            </div>
          </section>
        </main>
      </div>
    )
  }

  if (
    tela === 'biblioteca'
  ) {
    const categoriasBiblioteca = ['Todos', ...new Set(livros.map((livro) => livro.categoria))]
    const livrosFiltrados = livros.filter((livro) => {
      const termo = buscaLivro.trim().toLocaleLowerCase('pt-BR')
      const correspondeBusca = !termo || `${livro.titulo} ${livro.descricao} ${livro.categoria}`.toLocaleLowerCase('pt-BR').includes(termo)
      const correspondeCategoria = categoriaLivro === 'Todos' || livro.categoria === categoriaLivro
      return correspondeBusca && correspondeCategoria
    })

    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />
        <main className="main library-page">
          <section className="hero library-hero">
            <p className="tag">📚 BIBLIOTECA ECO</p>
            <h1>Histórias <span>que ensinam.</span></h1>
            <p className="library-intro">Explore pequenas aventuras, descubra ideias sustentáveis e aprenda uma atitude de cada vez.</p>
            <div className="library-summary">
              <div className="library-summary-item"><span className="library-summary-icon">📚</span><div><strong>{livros.length}</strong><span>histórias</span></div></div>
              <div className="library-summary-item"><span className="library-summary-icon">🌱</span><div><strong>{livrosConcluidos.length}</strong><span>concluídas</span></div></div>
              <div className="library-summary-item"><span className="library-summary-icon">✨</span><div><strong>{Math.round((livrosConcluidos.length / Math.max(livros.length, 1)) * 100)}%</strong><span>explorado</span></div></div>
            </div>
          </section>

          <section className="library-tools" aria-label="Pesquisar histórias">
            <label className="library-search">
              <span aria-hidden="true">🔎</span>
              <input type="search" value={buscaLivro} onChange={(event) => setBuscaLivro(event.target.value)} placeholder="Buscar por título, tema ou palavra..." aria-label="Buscar livros" />
              {buscaLivro && <button type="button" onClick={() => setBuscaLivro('')} aria-label="Limpar busca">✕</button>}
            </label>
            <div className="library-filter-row" aria-label="Filtrar por categoria">
              {categoriasBiblioteca.map((categoria) => (
                <button key={categoria} type="button" className={`library-filter-chip ${categoriaLivro === categoria ? 'active' : ''}`} onClick={() => setCategoriaLivro(categoria)} aria-pressed={categoriaLivro === categoria}>
                  {categoria === 'Todos' ? '🌎 Todos' : categoria}
                </button>
              ))}
            </div>
          </section>

          <section className="cards library-cards">
            {livrosFiltrados.map((livro, indice) => {
              const concluido = livrosConcluidos.includes(livro.id)
              const capitulos = livro.historia.split('\n\n').length
              return (
                <article className={`card library-book-card ${concluido ? 'is-complete' : ''}`} key={livro.id} style={{ '--book-index': indice }}>
                  <div className="library-card-topline"><span className="library-category-pill">{livro.categoria}</span>{concluido && <span className="library-complete-pill">✓ Concluído</span>}</div>
                  <div className="card-icon library-card-icon" aria-hidden="true">{livro.emoji}</div>
                  <h2>{livro.titulo}</h2>
                  <p>{livro.descricao}</p>
                  <div className="library-book-meta"><span>📄 {capitulos} capítulos</span><span>⏱️ Leitura rápida</span></div>
                  <div className="library-card-progress" aria-label={concluido ? 'Livro concluído' : 'Livro ainda não concluído'}><span style={{ width: concluido ? '100%' : '0%' }} /></div>
                  <button className="book-read-button" onClick={() => { setLivroAberto(livro); setPaginaLivro(0) }}>{concluido ? '🔁 Ler novamente' : '📖 Abrir livro'}</button>
                </article>
              )
            })}
          </section>

          {livrosFiltrados.length === 0 && <div className="library-empty"><span>🔍</span><h2>Nenhuma história encontrada</h2><p>Tente outro termo ou escolha a categoria “Todos”.</p><button className="book-read-button" onClick={() => { setBuscaLivro(''); setCategoriaLivro('Todos') }}>Limpar filtros</button></div>}

          {livroAberto && (() => {
            const capitulos = livroAberto.historia.split('\n\n')
            const progresso = Math.round(((paginaLivro + 1) / capitulos.length) * 100)
            return (
              <div className="book-modal-overlay" role="dialog" aria-modal="true" aria-label={livroAberto.titulo} onClick={(event) => { if (event.target === event.currentTarget) setLivroAberto(null) }}>
                <section className="storybook-modal storybook-modal-enhanced">
                  <button className="book-close-button" onClick={() => setLivroAberto(null)} aria-label="Fechar livro">✕</button>
                  <div className="storybook-mascots" aria-hidden="true"><span className="storybook-character character-left">🦊</span><span className="storybook-book-emoji">📖</span><span className="storybook-character character-right">🐸</span><span className="storybook-sparkle sparkle-one">✨</span><span className="storybook-sparkle sparkle-two">🌟</span></div>
                  <div className="storybook-heading"><span className="storybook-category">{livroAberto.categoria}</span><h2>{livroAberto.emoji} {livroAberto.titulo}</h2><p>{livroAberto.descricao}</p></div>
                  <div className="storybook-reading-progress"><div><span>Seu progresso</span><strong>{progresso}%</strong></div><div className="storybook-reading-track"><span style={{ width: `${progresso}%` }} /></div></div>
                  <div className="storybook-open-book storybook-open-book-enhanced" key={`${livroAberto.id}-${paginaLivro}`}>
                    <div className="storybook-page-decoration" aria-hidden="true"><span>{livroAberto.emoji}</span><small>EcoLife</small></div>
                    <div className="storybook-page-content"><span className="storybook-page-label">CAPÍTULO {paginaLivro + 1}</span><p>{capitulos[paginaLivro]}</p><span className="storybook-page-number">{paginaLivro + 1} / {capitulos.length}</span></div>
                  </div>
                  <div className="storybook-controls">
                    <button className="storybook-nav-button" disabled={paginaLivro === 0} onClick={() => setPaginaLivro((pagina) => Math.max(0, pagina - 1))}>← Anterior</button>
                    <span className="storybook-progress">Página {paginaLivro + 1} de {capitulos.length}</span>
                    {paginaLivro < capitulos.length - 1 ? <button className="storybook-next-button" onClick={() => setPaginaLivro((pagina) => Math.min(capitulos.length - 1, pagina + 1))}>Virar página →</button> : <button className="storybook-next-button" onClick={() => { setLivrosConcluidos((atuais) => atuais.includes(livroAberto.id) ? atuais : [...atuais, livroAberto.id]); setLivroAberto(null) }}>Concluir leitura ✓</button>}
                  </div>
                  <p className="storybook-keyboard-hint">Dica: use as setas ← → para virar páginas e Esc para fechar.</p>
                </section>
              </div>
            )
          })()}
          <button className="back-button" onClick={() => setTela('inicio')}>← Início</button>
        </main>
      </div>
    )
  }

  if (
    tela === 'conquistas'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🏅 CONQUISTAS
            </p>

            <h1>
              Suas
              <br />
              <span>
                conquistas.
              </span>
            </h1>
          </section>

          <section className="cards">
            {conquistas.map(
              (c) => {
                const desbloqueada =
                  jogador.conquistas.includes(
                    c.id
                  )

                return (
                  <div
                    className="card"
                    key={
                      c.id
                    }
                    style={{
                      opacity:
                        desbloqueada
                          ? 1
                          : 0.45,
                    }}
                  >
                    <div className="card-icon">
                      {desbloqueada
                        ? c.emoji
                        : '🔒'}
                    </div>

                    <h2>
                      {c.nome}
                    </h2>

                    <p>
                      {
                        c.descricao
                      }
                    </p>
                  </div>
                )
              }
            )}
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'progresso'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              📊 PROGRESSO
            </p>

            <h1>
              Seu caminho
              <br />
              <span>
                no EcoLife.
              </span>
            </h1>
          </section>

          <section className="cards">
            <div className="card">
              <div className="card-icon">
                ⭐
              </div>
              <h2>
                XP
              </h2>
              <p>
                {jogador.xp}
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                🏆
              </div>
              <h2>
                Nível
              </h2>
              <p>
                {nivelAtual}
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                🪙
              </div>
              <h2>
                Moedas
              </h2>
              <p>
                {jogador.moedas}
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                🏆
              </div>
              <h2>
                Ranking
              </h2>
              <p>
                \#{posicao}
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                ⚔️
              </div>
              <h2>
                Vitórias
              </h2>
              <p>
                {jogador.vitorias}
              </p>
            </div>
          </section>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  if (
    tela === 'diaria'
  ) {
    return (
      <div className="app eco-motion-enabled">
        <Cabecalho />

        <main className="main">
          <section className="hero">
            <p className="tag">
              🔥 MISSÃO DIÁRIA
            </p>

            <h1>
              Desafio de
              <br />
              <span>
                hoje.
              </span>
            </h1>
          </section>

          <div className="card">
            <div className="card-icon">
              {
                missaoDiariaBase.emoji
              }
            </div>

            <h2>
              {
                missaoDiariaBase.titulo
              }
            </h2>

            <p>
              {
                missaoDiariaBase.descricao
              }
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${Math.min(
                    100,
                    (missaoDiariaAtual.progresso /
                      missaoDiariaBase.alvo) *
                      100
                  )}%`,
                }}
              />
            </div>

            <p>
              {
                missaoDiariaAtual.progresso
              }
              /
              {
                missaoDiariaBase.alvo
              }
            </p>

            {missaoDiariaAtual.concluida &&
              !missaoDiariaAtual.resgatada && (
                <button
                  className="play-button"
                  onClick={() => {
                    atualizarJogador(
                      jogadorAtual,
                      (j) => ({
                        ...j,
                        xp:
                          j.xp +
                          missaoDiariaBase.recompensaXp,
                        moedas:
                          (j.moedas ||
                            0) +
                          missaoDiariaBase.recompensaMoedas,
                        missaoDiaria:
                          {
                            ...missaoDiariaAtual,
                            resgatada:
                              true,
                          },
                      })
                    )
                  }}
                >
                  🎁 Resgatar recompensa
                </button>
              )}

            {missaoDiariaAtual.resgatada && (
              <div className="result correct">
                ✅ Recompensa resgatada!
              </div>
            )}
          </div>

          <button
            className="back-button"
            onClick={() =>
              setTela('inicio')
            }
          >
            ← Início
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className="app eco-motion-enabled">
      <Cabecalho />

      <main className="main">
        <section className="hero">
          <p className="tag">
            🌍 ECOLIFE
          </p>

          <h1>
            Salve o planeta.
            <br />
            <span>
              Vença a batalha.
            </span>
          </h1>

          <p className="description">
            Olá,{' '}
            <strong>
              {jogador.nome}
            </strong>
            !
            <br />
            🏆 Nível{' '}
            {nivelAtual}
            <br />
            ⭐ {jogador.xp}{' '}
            XP
            <br />
            🪙{' '}
            {jogador.moedas ||
              0}{' '}
            moedas
            <br />
            🏆 Ranking #{posicao}
          </p>

          <div className="home-buttons">
            <button
              className="play-button"
              onClick={() =>
                setTela(
                  'desafios'
                )
              }
            >
              🎯 DESAFIOS
            </button>

            <button
              className="battle-button"
              onClick={() =>
                setTela(
                  'batalha-jogador'
                )
              }
            >
              🏰 BATALHA
            </button>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <div className="card-icon">
              🛍️
            </div>

            <h2>
              Loja Eco
            </h2>

            <p>
              🪙{' '}
              {jogador.moedas ||
                0}{' '}
              moedas
            </p>

            <button
              onClick={() =>
                setTela('loja')
              }
            >
              🛍️ Abrir loja
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              🏆
            </div>

            <h2>
              Ranking
            </h2>

            <p>
              Sua posição #{posicao}
            </p>

            <button
              onClick={() =>
                setTela('ranking')
              }
            >
              Ver ranking
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              ⭐
            </div>

            <h2>
              Níveis
            </h2>

            <p>
              Nível {nivelAtual}
            </p>

            <button
              onClick={() =>
                setTela('niveis')
              }
            >
              Ver níveis
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              👤
            </div>

            <h2>
              Perfil
            </h2>

            <button
              onClick={() =>
                setTela('perfil')
              }
            >
              Abrir perfil
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              🔎
            </div>

            <h2>
              Missões
            </h2>

            <p>
              {
                missoesConcluidas
              }/
              {
                missoesPesquisa.length
              }
            </p>

            <button
              onClick={() =>
                setTela('missoes')
              }
            >
              Ver missões
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              🛍️
            </div>

            <h2>
              Catálogo
            </h2>

            <p>
              {
                produtosEstudados
              }/
              {
                produtosEcologicos.length
              }
            </p>

            <button
              onClick={() =>
                setTela(
                  'catalogo'
                )
              }
            >
              Abrir catálogo
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              🏅
            </div>

            <h2>
              Conquistas
            </h2>

            <p>
              {
                jogador.conquistas
                  .length
              }
              /
              {
                conquistas.length
              }
            </p>

            <button
              onClick={() =>
                setTela(
                  'conquistas'
                )
              }
            >
              Ver
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              📊
            </div>

            <h2>
              Progresso
            </h2>

            <button
              onClick={() =>
                setTela(
                  'progresso'
                )
              }
            >
              Abrir
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              🔥
            </div>

            <h2>
              Missão diária
            </h2>

            <button
              onClick={() =>
                setTela(
                  'diaria'
                )
              }
            >
              Ver missão
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              📚
            </div>

            <h2>
              Biblioteca
            </h2>

            <button
              onClick={() => {
                setPaginaLivro(0)
                setLivroAberto(livros[0])
                setTela('biblioteca')
              }}
            >
              Ler história
            </button>
          </div>

          <div className="card">
            <div className="card-icon">
              ✨
            </div>

            <h2>
              Efeitos
            </h2>

            <button
              onClick={() =>
                setTela(
                  'efeitos'
                )
              }
            >
              Personalizar
            </button>
          </div>
        </section>

        <section className="ia-section">
          <div className="ia-header">
            <div className="ia-icon">
              🤖
            </div>

            <div>
              <p className="tag">
                🤖 ZINHO
              </p>

              <h2>
                Pergunte à IA
              </h2>

              <p>
                Tire dúvidas sobre meio
                ambiente e sustentabilidade.
              </p>
            </div>
          </div>

          <div className="ia-input-area">
            <input
              type="text"
              value={
                perguntaIA
              }
              placeholder="Ex.: O que é reciclagem?"
              onChange={(e) =>
                setPerguntaIA(
                  e.target.value
                )
              }
              onKeyDown={(e) =>
                e.key ===
                  'Enter' &&
                perguntarIA()
              }
            />

            <button
              className="ia-button"
              onClick={
                perguntarIA
              }
              disabled={
                carregandoIA ||
                !perguntaIA.trim()
              }
            >
              {carregandoIA
                ? '⏳'
                : '✨ Perguntar'}
            </button>
          </div>

          {carregandoIA && (
            <div className="ia-loading">
              <div className="ia-orbit">
                🌱
              </div>

              <span>
                Zinho está pensando...
              </span>
            </div>
          )}

          {respostaIA &&
            !carregandoIA && (
              <div className="ia-response">
                <div className="ia-response-icon">
                  🤖
                </div>

                <div>
                  <strong>
                    Zinho
                  </strong>

                  <p
                    style={{
                      whiteSpace:
                        'pre-wrap',
                    }}
                  >
                    {respostaIA}
                  </p>

                  {pontosPesquisaIA >
                    0 && (
                    <div className="result correct">
                      ⭐ +{
                        pontosPesquisaIA
                      }{' '}
                      XP
                      <br />
                      🪙 +5 moedas
                    </div>
                  )}
                </div>
              </div>
            )}

          {erroIA && (
            <div className="ia-error">
              ⚠️ {erroIA}
            </div>
          )}
        </section>
      </main>

      <footer>
        🌱 EcoLife — Cada ação faz a diferença.
      </footer>
    </div>
  )
}

export default App
