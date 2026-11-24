const primaryProjects = [
  {id:'inflacao',category:'dados',title:'Da inflação ao que importa.',name:'Painéis de inflação (IPCA e IPCA-15)',tag:'DADOS & POLÍTICAS PÚBLICAS',status:'Painéis web · publicados',art:'chart',featured:true,summary:'Dados do IPCA e IPCA-15 organizados para explorar preços, grupos e períodos.',lead:'Uma pergunta econômica precisa de uma forma clara de ser explorada.',context:'O trabalho aproxima indicadores oficiais de uma experiência de consulta: navegação por competência, boletins, gráficos e leitura dos grupos de produtos e serviços.',contribution:'Construção e evolução das análises em Power BI e de uma camada web de exploração, conectadas à preparação e à documentação dos dados.',learning:'Um painel também é uma interface: a forma de organizar o período, a hierarquia e a comparação muda a leitura da informação.',note:'As séries e os valores oficiais estão nos painéis vinculados.',links:[['Abrir IPCA','https://marcelo7bastos.github.io/macroeconomia-agricultura-familiar/docs/gestao/ipca.html'],['Abrir IPCA-15','https://marcelo7bastos.github.io/macroeconomia-agricultura-familiar/docs/gestao/ipca15.html'],['Projeto no GitHub','https://github.com/marcelo7bastos/macroeconomia-agricultura-familiar']]},
  {
    id: 'pu',
    category: 'ia',
    title: 'E se a ausência não for um “não”?',
    name: 'PU Learning no acesso ao Pronaf',
    tag: 'PESQUISA & IA APLICADA',
    status: 'Capítulo de livro · Enap · 2026',
    result: 'Publicado em livro da Enap, 2026.',
    art: 'pu',
    featured: true,
    summary: 'Um ranking diagnóstico para investigar lacunas de acesso ao crédito rural. A elegibilidade continua sujeita aos critérios do programa.',
    lead: 'Um ranking diagnóstico, não uma classificação de elegibilidade.',
    context: 'O SICOR registra quem contratou. Entre as pessoas sem contratação observada, há situações diferentes, como demanda não formalizada, barreiras de acesso e baixa propensão. O estudo trata esse grupo como não rotulado.',
    contribution: 'Autoria do artigo: formulação do problema como PU Learning, integração CAF–SICOR, modelagem e análise.',
    advisor: 'Prof. Dr. Hélio Bonfim de Macêdo Filho',
    method: 'Comparei um baseline supervisionado, o estimador clássico de Elkan e Noto e o nnPU (aprendizado PU com risco não negativo). Separei treino, validação e teste por família e comparei os modelos usando a contratação observada como referência.',
    finding: 'O baseline e Elkan e Noto recuperaram proporções semelhantes de positivos observados no topo. O nnPU concentrou menos positivos observados nessa avaliação, que não mede diretamente a classe latente. O ranking apoia diagnóstico de cobertura e busca ativa, com validação humana e observância das regras do Pronaf.',
    citation: {
      chapter: 'BASTOS, Marcelo Cabreira. Estimativa de propensão e exclusão no crédito rural: uma abordagem de positive-unlabeled learning e gradient boosting com dados do PRONAF e CAF.',
      editors: 'DE TONI, Jackson Silvano; DORNELES, Rachel Pereira (org.).',
      book: 'Análise de dados e IA a serviço da inovação em gestão pública.',
      publication: 'Brasília, DF: Enap, 2026. p. 216–231.',
      access: '24 nov. 2026.'
    },
    note: 'A reprodução integral depende de acesso autorizado aos microdados do CAF.',
    cardLinkCount: 2,
    links: [
      ['Ler capítulo', 'https://repositorio.enap.gov.br/handle/1/10139'],
      ['Código', 'https://github.com/marcelo7bastos/artigo-pu-learning']
    ]
  },
  {id:'chat-pronaf',category:'ia',title:'Uma pergunta pode abrir o caminho.',name:'Chat Pronaf v1',tag:'IA & AGRICULTURA FAMILIAR',status:'Chatbot · 2025 · Protótipo',art:'chat',featured:true,summary:'Uma experiência conversacional para aproximar perguntas e informações sobre o Pronaf.',lead:'E se explorar informação sobre crédito rural começasse com uma conversa?',context:'O projeto de 2025 explora a interação em linguagem natural para consultar informações relacionadas ao Pronaf e à agricultura familiar.',contribution:'Exploração de uma interface conversacional e do caminho entre pergunta, fonte e apresentação da informação.',learning:'Uma resposta útil depende tanto de uma boa interface quanto da clareza sobre a origem e os limites da informação.',note:'O protótipo foi desenvolvido com dados oficiais do Banco Central e documentos complementares. Se o Streamlit mostrar a tela de inatividade, use o botão da plataforma para reativar o app.',links:[['Abrir protótipo v1','https://chat-pronaf-v1.streamlit.app/'],['Código da v1','https://github.com/marcelo7bastos/chat-pronaf-v1']]},
  {id:'oficina',category:'aprender',title:'Conhecimento bom circula.',name:'Hackeando o Pronaf',tag:'SEMANA DE INOVAÇÃO · ENAP',status:'Oficina · 2025',result:'Apresentado na Semana de Inovação Enap 2025.',art:'workshop',featured:true,summary:'Dados abertos, Python e IA em uma oficina para explorar o crédito rural.',lead:'Compartilhar o caminho também faz parte de construir.',context:'Oficina apresentada na Semana de Inovação da Enap em 2025, reunindo exploração de dados abertos, programação e inteligência artificial.',contribution:'Preparação e apresentação da oficina com Ernesto Galindo, aproximando perguntas sobre o Pronaf de exercícios e ferramentas de análise.',learning:'Ensinar exige tornar decisões visíveis: de onde vêm os dados, o que perguntar e como conferir a resposta.',note:'A oficina é um trabalho colaborativo. Os materiais externos mantêm seus próprios créditos e contexto.',links:[['Materiais públicos da oficina','https://github.com/marcelo7bastos/semana_inovacao_enap_2025']]},
  {id:'jogos',category:'pessoal',title:'Também construo para brincar.',name:'Jogos de matemática',tag:'PELO PRAZER DE FAZER',status:'Dois jogos publicados',art:'game',featured:true,summary:'Duas pequenas experiências para transformar ideias matemáticas em brincadeira.',lead:'Às vezes, uma boa razão para criar é fazer uma brincadeira para a filha.',context:'Missão Kits da Festa e Tabuada Run exploram matemática com desafios visuais, escolhas e feedback. A motivação é pessoal: aprender e brincar juntos.',contribution:'Construção das experiências, das regras e das interfaces, usando programação para tornar o raciocínio visível.',learning:'Uma explicação melhora quando a outra pessoa pode experimentar a ideia.',note:'A atividade abaixo é uma demonstração independente. Os dois jogos completos estão nos links.',links:[['Missão Kits da Festa','https://marcelo7bastos.github.io/aprendendo-maximo-divisor-comum/'],['Tabuada Run','https://marcelo7bastos.github.io/jogo_tabuada/']]},
  {id:'iris',category:'ia',name:'Íris',title:'Uma assistente, muitas decisões.',tag:'IA & ROTINAS PESSOAIS',status:'Relato descritivo',summary:'Experimentos com integração, memória e rotinas assistidas por IA.',context:'Um projeto pessoal para explorar o apoio de agentes a rotinas e à organização do conhecimento.',contribution:'Configurei a assistente e integrei fluxos, com decisões sobre memória, continuidade e supervisão.',learning:'Automatizar uma rotina inclui pensar em como ela será acompanhada e retomada.',note:'Somente descrição. Sem acesso à assistente, às suas contas, memórias, documentos ou rotinas privadas.'},
  {id:'time-ti',category:'ia',name:'Time de TI com agentes',title:'Aprender a dirigir a construção.',tag:'IA & PROCESSO DE TRABALHO',status:'Teste / experimento',summary:'Papéis, revisão e acompanhamento no desenvolvimento com agentes.',context:'Um experimento de organização do trabalho de agentes em torno de tarefas e entregas revisáveis.',contribution:'Definição de papéis, fluxos e ferramentas de apoio ao processo de implementação e revisão.',learning:'Delegar execução exige continuar responsável pelas decisões e pela conferência.',note:'Apresentado como teste, com limitações. Não expõe configurações privadas nem promete autonomia garantida.'},
  {
    "id": "eleitoral",
    "category": "dados",
    "name": "Monitor Eleitoral 2026",
    "title": "O que dá para aprender enquanto a apuração avança?",
    "tag": "DADOS ABERTOS",
    "status": "Projeto independente · 2026 · Encerrado",
    "result": "Avaliação retrospectiva de 54 coletas do segundo turno.",
    "summary": "Acompanhamento independente da apuração presidencial brasileira com dados oficiais do TSE.",
    "context": "O painel reuniu os dados divulgados pelo Tribunal Superior Eleitoral nas 27 unidades federativas e no exterior. A visualização separa a apuração oficial das estimativas calculadas pelo projeto.",
    "contribution": "Desenvolvimento e análise, com colaboração de Ernesto Galindo. Automatizei a coleta, implementei as estimativas em Python, registrei os horários e analisei a série de atualizações.",
    "learning": "Na trajetória analisada, a estimativa teve erro absoluto de 0,424 ponto percentual em relação ao último resultado preservado quando 77,701% das seções do segundo turno estavam totalizadas. Esse é um resultado retrospectivo de uma eleição.",
    "note": "Projeto pessoal independente, encerrado em 26 de outubro de 2026. O painel ficou disponível para consulta histórica.",
    "links": [
      [
        "Painel histórico",
        "https://marcelo7bastos.github.io/monitor-eleitoral-2026/"
      ],
      [
        "Avaliação retrospectiva",
        "https://github.com/marcelo7bastos/monitor-eleitoral-2026/blob/main/docs/AVALIACAO_RETROSPECTIVA.md"
      ],
      [
        "Código no GitHub",
        "https://github.com/marcelo7bastos/monitor-eleitoral-2026"
      ]
    ]
  },
  {id:'alerta',category:'ia',name:'Alerta de Inflação de Alimentos',title:'Um radar para boas perguntas.',tag:'IA & MONITORAMENTO',status:'Projeto em evolução',summary:'Notícias, filtros e classificação para acompanhar um tema.',context:'Uma experiência para organizar notícias relacionadas à inflação de alimentos.',contribution:'Coleta RSS, filtragem, armazenamento e classificação assistida por IA.',learning:'Encontrar uma notícia e produzir um indicador econômico são tarefas distintas.',note:'Descrição do projeto. Sem notícias carregadas, classificações reais ou promessas de recursos futuros já prontos.',links:[['Repositório público','https://github.com/marcelo7bastos/alerta_inflacao']]},
  {id:'compras',category:'dados',name:'Planejamento de compras públicas',title:'O que os dados abertos deixam perguntar?',tag:'DADOS ABERTOS & GESTÃO',status:'Análise',result:'Apresentado no openDATA 2024 da SEGES.',summary:'Exploração de aquisições planejadas em bases PGC/PCA.',context:'Uma análise dos itens e valores previstos no planejamento de compras públicas.',contribution:'Tratamento, exploração e organização dos dados para construção de rankings e comunicação da análise.',learning:'Planejamento de contratação não equivale a despesa executada.',note:'Descrição do trabalho; nenhum dado interno ou registro de pessoa é apresentado.',links:[['Código e materiais públicos','https://github.com/marcelo7bastos/dados_aberto_pgc_pca']]},
  {id:'conversor',category:'dados',name:'Da API à planilha',title:'Uma ferramenta pequena, uma fricção a menos.',tag:'AUTOMAÇÃO PRÁTICA',status:'Trabalho anterior',summary:'Conversor de respostas da API Compras para CSV e Excel.',context:'Levar uma resposta JSON para um formato tabular pode ser uma barreira para começar a análise.',contribution:'Uma aplicação de consulta, prévia e exportação de dados em formatos de planilha.',learning:'Uma solução útil também pode ser pequena e direta.',note:'Relato de um trabalho antigo. A ferramenta não está conectada a nenhuma API neste protótipo.',links:[['Repositório público','https://github.com/marcelo7bastos/api_compras_convert_json_to']]},
  {id:'skill',category:'aprender',name:'explicar-conteudo',title:'Um jeito de aprender que vira ferramenta.',tag:'APRENDIZAGEM & IA',status:'Skill criada',summary:'Um fluxo para explorar temas por perguntas, texto e recursos visuais.',context:'Nem toda explicação precisa começar pelo mesmo formato. Algumas ideias pedem perguntas; outras, um desenho ou uma experiência.',contribution:'Organização de um método reutilizável para explorar conteúdos e escolher formas de explicação.',learning:'Uma boa ferramenta também ajuda a formular melhor a pergunta.',note:'Descrição do método. Não afirma resultados de eficácia ou publica a biblioteca privada.'},
  {id:'trilhas',category:'aprender',name:'Trilhas de IA para servidores',title:'Aprender com um caminho em mente.',tag:'CURADORIA & FORMAÇÃO',status:'Curadoria pública',summary:'Curadoria de formação organizada pelas necessidades de pessoas e equipes.',context:'A quantidade de cursos torna importante conectar formação a contexto e objetivo.',contribution:'Curadoria independente de cursos e percursos ligados à EV.G/Enap.',learning:'Uma trilha começa com a pergunta: o que a pessoa precisa conseguir fazer?',note:'Curadoria independente, sem caráter oficial da Enap ou da EV.G. O aprimoramento do projeto ainda está em definição.',links:[['Guia público','https://github.com/marcelo7bastos/trilhas-ia-enap']]},
  {id:'mba',category:'aprender',name:'Pronaf no MBA',title:'Estudar usando uma pergunta concreta.',tag:'FORMAÇÃO & ANÁLISE',status:'Trabalho acadêmico',summary:'Análise estatística, gráficos e apresentação de dados do programa.',context:'Um trabalho de formação que aproxima aprendizagem em dados de uma temática de política pública.',contribution:'Construção de notebook, visualizações e materiais de apresentação sobre o Pronaf.',learning:'Aplicar uma ferramenta a um problema concreto ajuda a entender seus pressupostos e limites.',note:'Descrição acadêmica; não inclui bases ou resultados individuais.',links:[['Materiais públicos','https://github.com/marcelo7bastos/mba_mcdia_est_desc_analise_pronaf']]},
];

const featuredOrder = ['pu', 'chat-pronaf', 'inflacao', 'oficina', 'jogos'];

const primaryCategories={dados:{title:'Dados que ajudam a perguntar melhor.',label:'Dados & políticas públicas',description:'Análises, engenharia de dados e decisões de método. Histórias sobre transformar registros em informação útil.'},ia:{title:'Construir, testar e continuar aprendendo.',label:'IA & experimentos',description:'Pesquisa, interfaces e rotinas. Cada projeto tem seu próprio estado: estudo, teste, evolução ou relato descritivo.'},aprender:{title:'Aprender também é compartilhar.',label:'Aprender & compartilhar',description:'Oficinas, curadoria, métodos e narrativas visuais. Formas de aproximar conhecimento e experiência.'},pessoal:{title:'Pelo prazer de fazer.',label:'Brincadeiras & curiosidade',description:'Pequenos projetos com uma motivação pessoal. Os jogos para minha filha são parte deste laboratório.'}};


const portuguese = {
  "illustration": "ILUSTRAÇÃO CONCEITUAL",
  "details": "Ver detalhes",
  "detailsOf": " de ",
  "openArchive": "Abrir as outras gavetas",
  "closeArchive": "Fechar as outras gavetas",
  "projectCount": "{count} trabalhos",
  "announcement": "{count} trabalhos em {category}.",
  "allCategories": "todas as categorias",
  "result": "Resultado.",
  "contribution": "Minha contribuição",
  "learning": "O que levo comigo",
  "method": "Método",
  "finding": "O que o estudo encontrou",
  "advisor": "Orientação.",
  "citation": "Como citar (ABNT)",
  "available": "Disponível em:",
  "accessed": "Acesso em:",
  "accessDate": "24 nov. 2026.",
  "exploreLab": "EXPLORE O LABORATÓRIO",
  "pause": "Pausar movimento",
  "resume": "Retomar movimento",
  "night": "Modo noturno",
  "day": "Voltar ao modo diurno",
  "gameTag": "UMA MINI BRINCADEIRA PARA EXPERIMENTAR",
  "gameTitle": "Vamos montar kits iguais?",
  "gameIntro": "Temos <strong>12 flores</strong> e <strong>18 doces</strong>. Qual é o maior número de kits iguais que podemos montar, usando tudo?",
  "gameGroup": "Escolha a quantidade de kits",
  "gameOption": "{count} kits",
  "gameInitial": "Experimente uma resposta. O raciocínio importa tanto quanto acertar.",
  "gameCorrect": "Isso! 6 kits, cada um com 2 flores e 3 doces. Seis é o maior divisor comum de 12 e 18.",
  "gameTryAgain": "Dá para montar essa quantidade de kits iguais. Mas será que conseguimos um número maior, sem sobrar nada?",
  "exploreData": "Explorar dados",
  "exploreAI": "Explorar IA",
  "exploreLearn": "Explorar aprendizagem",
  "explorePlay": "Explorar jogos",
  "roomData": "Dados",
  "roomAI": "IA",
  "roomLearn": "Aprender",
  "roomPlay": "Brincar",
  "chartHeader": "EXPLORAR / INFLAÇÃO",
  "puHeader": "UMA PERGUNTA SOBRE RÓTULOS",
  "observed": "OBSERVADO",
  "unlabeled": "NÃO ROTULADO",
  "chatLine1": "Por onde começar a explorar",
  "chatLine2": "os dados do Pronaf?",
  "workshopHeader": "SEMANA DE INOVAÇÃO · ENAP",
  "workshopTools": "DADOS ABERTOS + PYTHON + IA",
  "gameCover": "MISSÃO: KITS DA FESTA",
  "gameCoverFooter": "APRENDER BRINCANDO"
};

const language = document.documentElement.lang.split('-')[0];
const localeModules = {
  en: () => import('./locale-en.js?v=d0af16c5ce81'),
  es: () => import('./locale-es.js?v=eb94b3148670'),
};
const loadLocale = localeModules[language];
const copy = loadLocale ? (await loadLocale()).default : null;
const categories = copy?.categories ?? primaryCategories;

function t(key, values = {}) {
  const message = copy?.ui[key] ?? portuguese[key];
  return message.replace(/\{(\w+)\}/g, (_, name) => String(values[name]));
}

const projects = primaryProjects.map(project => {
  const translation = copy?.projects[project.id];
  if (!translation) return project;
  const {linkLabels, ...content} = translation;
  return {
    ...project,
    ...content,
    links: project.links?.map(([label, url], index) => [linkLabels?.[index] ?? label, url]),
  };
});

function graphic(kind){
 const open='<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">';
 const paper='#f6f3e8',ink='#304d42',orange='#be6549',line='#9cac91';
 let s='';
 if(kind==='chart')s=`<rect width="400" height="220" fill="#dce6da"/><rect x="37" y="27" width="326" height="160" rx="5" fill="${paper}" stroke="#b0c1a5"/><rect x="37" y="27" width="326" height="24" rx="4" fill="${ink}"/><circle cx="48" cy="39" r="2" fill="#edb670"/><circle cx="56" cy="39" r="2" fill="#8aab8a"/><text x="72" y="42" font-size="7" fill="${paper}" font-family="monospace">\${esc(t("chartHeader"))}</text><path d="M65 84H337M65 111H337M65 138H337M65 165H337" stroke="#dfe4d5" stroke-width="1"/><path d="M67 141L95 136L123 148L152 105L181 119L209 86L238 108L267 82L295 94L333 66" fill="none" stroke="${orange}" stroke-width="3" stroke-linecap="round"/><path d="M67 156L95 150L123 153L152 142L181 144L209 129L238 137L267 117L295 123L333 112" fill="none" stroke="#7d9e84" stroke-width="2"/><circle cx="267" cy="82" r="5" fill="${orange}" stroke="${paper}" stroke-width="2"/>`;
 if(kind==='pu'){s=`<rect width="400" height="220" fill="#e8e2d5"/><circle cx="151" cy="107" r="65" fill="#d3dcc7"/><circle cx="246" cy="107" r="65" fill="#e6b498" fill-opacity=".42"/><text x="88" y="30" font-family="monospace" font-size="7" fill="${ink}">\${esc(t("puHeader"))}</text>`;for(let i=0;i<37;i++){const x=89+(i*43%229),y=56+(i*31%108);s+=`<circle cx="${x}" cy="${y}" r="${i%5===0?4:3}" fill="${i%5===0?orange:paper}" stroke="${i%5===0?orange:'#94a18c'}"/>`;}s+=`<rect x="105" y="181" width="7" height="7" rx="3" fill="${orange}"/><text x="119" y="188" font-size="7" fill="${ink}" font-family="monospace">\${esc(t("observed"))}</text><circle cx="220" cy="185" r="3" fill="${paper}" stroke="${line}"/><text x="231" y="188" font-size="7" fill="${ink}" font-family="monospace">\${esc(t("unlabeled"))}</text>`;}
 if(kind==='chat')s=`<rect width="400" height="220" fill="#e3dfd0"/><rect x="58" y="25" width="284" height="166" rx="8" fill="${paper}" stroke="#b5bea5"/><rect x="58" y="25" width="284" height="32" rx="8" fill="${ink}"/><circle cx="77" cy="41" r="6" fill="#adc198"/><text x="92" y="44" font-size="9" fill="${paper}" font-family="monospace">chat / pronaf</text><rect x="131" y="71" width="193" height="34" rx="7" fill="#d6e1cf"/><text x="142" y="86" font-size="8" fill="${ink}" font-family="sans-serif">\${esc(t("chatLine1"))}</text><text x="142" y="96" font-size="8" fill="${ink}" font-family="sans-serif">\${esc(t("chatLine2"))}</text><circle cx="78" cy="124" r="9" fill="${orange}"/><path d="M99 121H299M99 131H278M99 141H228" stroke="#b1bca3" stroke-width="3" stroke-linecap="round"/><rect x="76" y="159" width="248" height="20" rx="4" fill="#eeeede"/><path d="M86 169H178" stroke="#b8bfaa"/><path d="M310 165L315 169L310 173" fill="none" stroke="${ink}"/>`;
 if(kind==='workshop')s=`<rect width="400" height="220" fill="#d4dece"/><g transform="rotate(-5 200 110)"><rect x="66" y="31" width="268" height="156" rx="3" fill="${orange}"/><path d="M269 31V187" stroke="#ead1b3" stroke-dasharray="3 4"/><text x="85" y="57" font-size="8" fill="${paper}" font-family="monospace" letter-spacing="1">\${esc(t("workshopHeader"))}</text><text x="82" y="122" font-size="66" fill="${paper}" font-family="Georgia">SI / 25</text><text x="86" y="148" font-size="10" fill="${paper}" font-family="monospace">HACKEANDO O PRONAF</text><text x="86" y="165" font-size="7" fill="#eacfaf" font-family="monospace">\${esc(t("workshopTools"))}</text><path d="M283 64V159M288 64V159M297 64V159M302 64V159M310 64V159M316 64V159" stroke="#eec9a8" stroke-width="2"/></g>`;
 if(kind==='game')s=`<rect width="400" height="220" fill="#e8dac7"/><g transform="rotate(6 200 110)"><rect x="102" y="24" width="196" height="173" rx="13" fill="#566b4f"/><rect x="114" y="35" width="172" height="94" rx="5" fill="#243f35"/><rect x="124" y="44" width="152" height="74" rx="2" fill="#cbd69a"/><text x="139" y="65" font-size="8" fill="#536743" font-family="monospace">\${esc(t("gameCover"))}</text><path d="M139 80H260M139 98H260" stroke="#a4b475"/>${[0,1,2,3,4,5].map(i=>`<rect x="${143+i*20}" y="76" width="12" height="12" rx="2" fill="#748955"/>`).join('')}<text x="148" y="109" font-size="8" fill="#536743" font-family="monospace">\${esc(t("gameCoverFooter"))}</text><path d="M145 143V169M132 156H158" stroke="#e0d8b7" stroke-width="9"/><circle cx="247" cy="149" r="10" fill="#c5815d"/><circle cx="224" cy="166" r="10" fill="#ddaf77"/><path d="M185 178H202" stroke="#a5b08c" stroke-width="4" stroke-linecap="round"/></g>`;
 return open+s+'</svg>';
}

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const featured=document.querySelector('#featured-grid'),archive=document.querySelector('#archive-grid'),archiveToggle=document.querySelector('#archive-toggle');
let selectedFilter='todos',archiveOpen=false,lastFocus=null,room=null,night=false,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const dialog=document.querySelector('#project-dialog'),dialogBody=document.querySelector('#dialog-body');

function externalLinks(links) {
  return links.map(([label, url]) => '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + ' <span aria-hidden="true">↗</span></a>').join('');
}

function card(project) {
  const linkCount = project.cardLinkCount ?? (['inflacao', 'jogos'].includes(project.id) ? 2 : 1);
  const links = project.links?.slice(0, linkCount) || [];
  return '<article class="project-card">' +
    '<div class="project-art">' + graphic(project.art) +
    '<span class="art-caption">' + esc(t('illustration')) + '</span></div>' +
    '<div class="project-card-copy"><div class="project-kicker">' + esc(project.tag) + '</div>' +
    '<h3>' + esc(project.name) + '</h3><p class="project-subtitle">' + esc(project.title) + '</p>' +
    '<p>' + esc(project.summary) + '</p><span class="project-status">' + esc(project.status) + '</span>' +
    resultMarkup(project) +
    '<div class="project-actions">' + externalLinks(links) +
    '<button type="button" data-project="' + esc(project.id) + '">' + esc(t('details')) + '<span class="sr-only">' + esc(t('detailsOf') + project.name) + '</span></button>' +
    '</div></div></article>';
}

function smallCard(project) {
  return '<button type="button" class="archive-item" data-project="' + esc(project.id) +
    '"><span aria-hidden="true">↳</span><div><h3>' + esc(project.name) + '</h3><p>' + esc(project.status) +
    '</p>' + resultMarkup(project) + '</div><span aria-hidden="true">→</span></button>';
}
function renderProjects(){
 const list=projects.filter(p=>selectedFilter==='todos'||p.category===selectedFilter),high=featuredOrder.map(id=>list.find(p=>p.id===id)).filter(Boolean),others=list.filter(p=>!p.featured);
 featured.innerHTML=high.map(card).join(''); archive.innerHTML=others.map(smallCard).join('');
 archive.hidden=!archiveOpen||!others.length;archiveToggle.hidden=!others.length;
 archiveToggle.setAttribute('aria-expanded',String(archiveOpen));archiveToggle.innerHTML=`${esc(t(archiveOpen?'closeArchive':'openArchive'))} <span>${esc(t('projectCount', {count: others.length}))}</span><span aria-hidden="true">${archiveOpen?'↑':'↓'}</span>`;
 document.querySelector('#filter-announcement').textContent=t('announcement', {count: list.length, category: selectedFilter === 'todos' ? t('allCategories') : categories[selectedFilter].label});
 document.querySelector('#total-count').textContent=projects.length;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===selectedFilter);b.setAttribute('aria-pressed',String(b.dataset.filter===selectedFilter));});
}
function showDialog(content){
 if(!dialog.open)lastFocus=document.activeElement;
 dialogBody.innerHTML=content;
 if(!dialog.open){dialog.showModal();document.body.classList.add('body-dialog-open');}
 dialog.scrollTop=0;document.querySelector('#dialog-close').focus();
}
function closeDialog(){dialog.close();document.body.classList.remove('body-dialog-open');lastFocus?.focus();}
function gameMarkup(){return `<div class="demo-console"><p class="eyebrow">${esc(t("gameTag"))}</p><h3>${esc(t("gameTitle"))}</h3><p>${t("gameIntro")}</p><div class="game-objects" aria-hidden="true">✿ ✿ ✿ ✿ ✿ ✿<br>✿ ✿ ✿ ✿ ✿ ✿<br>● ● ● ● ● ● ● ● ●<br>● ● ● ● ● ● ● ● ●</div><div class="game-options" role="group" aria-label="${esc(t("gameGroup"))}"><button data-answer="2">${esc(t("gameOption", {count: 2}))}</button><button data-answer="3">${esc(t("gameOption", {count: 3}))}</button><button data-answer="6">${esc(t("gameOption", {count: 6}))}</button></div><p class="game-feedback" id="game-feedback" aria-live="polite">${esc(t("gameInitial"))}</p></div>`;}

function resultMarkup(project) {
  return project.result ? '<p class="project-result"><strong>' + esc(t('result')) + '</strong> ' + esc(project.result) + '</p>' : '';
}

function formatCitation(citation, chapterUrl) {
  return '<section class="dialog-section article-citation" aria-labelledby="citation-title">' +
    '<h3 id="citation-title">' + esc(t('citation')) + '</h3><p lang="pt-BR">' + esc(citation.chapter) +
    ' In: ' + esc(citation.editors) + ' <cite>' + esc(citation.book) + '</cite> ' +
    esc(citation.publication) + ' </p><p>' + esc(t('available')) + ' <a href="' + esc(chapterUrl) + '">' +
    esc(chapterUrl) + '</a>. ' + esc(t('accessed')) + ' ' + esc(t('accessDate')) + '</p></section>';
}

function articleDetails(project) {
  const detail = '<div class="dialog-columns">' +
    '<section><h3>' + esc(t('contribution')) + '</h3><p>' + esc(project.contribution) + '</p></section>' +
    '<section><h3>' + esc(t(project.method ? 'method' : 'learning')) + '</h3><p>' +
    esc(project.method || project.learning) + '</p></section></div>';
  if (!project.citation) return detail;
  return detail +
    '<section class="dialog-section"><h3>' + esc(t('finding')) + '</h3><p>' + esc(project.finding) + '</p></section>' +
    '<p><strong>' + esc(t('advisor')) + '</strong> ' + esc(project.advisor) + '</p>' +
    formatCitation(project.citation, project.links[0][1]);
}

function showProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  const illustration = project.art && !project.citation
    ? '<div class="dialog-art project-art"><span class="art-caption">' + esc(t('illustration')) + '</span>' + graphic(project.art) + '</div>'
    : '';
  const links = project.links ? '<div class="dialog-links">' + externalLinks(project.links) + '</div>' : '';
  showDialog('<article class="dialog-content">' + illustration +
    '<p class="eyebrow">' + esc(project.tag) + '</p><h2 id="dialog-title">' + esc(project.name) + '</h2>' +
    '<p class="dialog-lead">' + esc(project.lead || project.title) + '</p>' +
    '<div class="dialog-meta">' + esc(project.status) + '</div>' + resultMarkup(project) +
    '<p class="dialog-text">' + esc(project.context) + '</p>' + articleDetails(project) +
    (project.id === 'jogos' ? gameMarkup() : '') +
    '<div class="dialog-privacy">' + esc(project.note) + '</div>' + links + '</article>');
}
function showCategory(id){
 const c=categories[id];if(!c)return;
 const list=projects.filter(p=>p.category===id);
 showDialog(`<section class="dialog-content"><p class="eyebrow">${esc(t("exploreLab"))} / ${esc(c.label)}</p><h2 id="dialog-title">${c.title}</h2><p class="dialog-lead">${c.description}</p><div class="room-group">${list.map(p=>`<button data-project="${p.id}"><span>${p.name}<small>${p.status}</small></span><span aria-hidden="true">→</span></button>`).join('')}</div></section>`);
}
document.addEventListener('click',event=>{
 const target=event.target.closest('button');if(!target)return;
 if(target.dataset.project)showProject(target.dataset.project);
 else if(target.dataset.room)showCategory(target.dataset.room);
 else if(target.dataset.filter){selectedFilter=target.dataset.filter;archiveOpen=selectedFilter!=='todos';renderProjects();}
 else if(target.dataset.answer){const n=Number(target.dataset.answer);document.querySelector('#game-feedback').textContent=t(n===6?'gameCorrect':'gameTryAgain');}
});
archiveToggle.addEventListener('click',()=>{archiveOpen=!archiveOpen;renderProjects();});
document.querySelector('#dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
document.querySelector('#day-toggle').addEventListener('click',event=>{night=!night;room?.setNight(night);document.querySelector('#room-shell').classList.toggle('night',night);event.currentTarget.setAttribute('aria-pressed',String(night));event.currentTarget.title=t(night?'day':'night');event.currentTarget.innerHTML=`${night?'☾':'☼'}<span class="sr-only">${esc(t(night?'day':'night'))}</span>`;});
const motionButton=document.querySelector('#motion-toggle');
function updateMotion(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.title=t(paused?'resume':'pause');motionButton.innerHTML=`${paused?'▷':'Ⅱ'}<span class="sr-only">${esc(t(paused?'resume':'pause'))}</span>`;}
motionButton.addEventListener('click',()=>{paused=!paused;room?.setPaused(paused);updateMotion();});
renderProjects();updateMotion();

const stage = document.querySelector('#room-stage');
const loading = document.querySelector('#room-loading');

async function loadRoom() {
  stage.setAttribute('aria-busy', 'true');
  try {
    const {createWorkshop} = await import('./scene.js?v=694031978c96');
    room = createWorkshop(stage, {
      onSelect: showCategory,
      labels: {
        dados: {text: t('roomData'), label: t('exploreData')},
        ia: {text: t('roomAI'), label: t('exploreAI')},
        aprender: {text: t('roomLearn'), label: t('exploreLearn')},
        pessoal: {text: t('roomPlay'), label: t('explorePlay')},
      },
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    room.setPaused(paused);
    room.setNight(night);
    loading.hidden = true;
    stage.dataset.ready = 'true';
  } catch (error) {
    console.error('A cena 3D não pôde ser iniciada:', error);
    stage.dataset.ready = 'fallback';
  } finally {
    stage.removeAttribute('aria-busy');
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      loadRoom();
    }
  });
  observer.observe(stage);
} else {
  loadRoom();
}
window.addEventListener('pagehide',event=>{if(!event.persisted)room?.destroy();});
