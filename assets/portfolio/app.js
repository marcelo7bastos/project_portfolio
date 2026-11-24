const projects = [
  {id:'inflacao',category:'dados',title:'Da inflação ao que importa.',name:'Painéis de inflação (IPCA e IPCA-15)',tag:'DADOS & POLÍTICAS PÚBLICAS',status:'Painéis web · publicados',art:'chart',featured:true,summary:'Dados do IPCA e IPCA-15 organizados para explorar preços, grupos e períodos.',lead:'Uma pergunta econômica precisa de uma forma clara de ser explorada.',context:'O trabalho aproxima indicadores oficiais de uma experiência de consulta: navegação por competência, boletins, gráficos e leitura dos grupos de produtos e serviços.',contribution:'Construção e evolução das análises em Power BI e de uma camada web de exploração, conectadas à preparação e à documentação dos dados.',learning:'Um painel também é uma interface: a forma de organizar o período, a hierarquia e a comparação muda a leitura da informação.',note:'As séries e os valores oficiais estão nos painéis vinculados.',links:[['Abrir IPCA','https://marcelo7bastos.github.io/macroeconomia-agricultura-familiar/docs/gestao/ipca.html'],['Abrir IPCA-15','https://marcelo7bastos.github.io/macroeconomia-agricultura-familiar/docs/gestao/ipca15.html'],['Projeto no GitHub','https://github.com/marcelo7bastos/macroeconomia-agricultura-familiar']]},
  {id:'pu',category:'ia',title:'E se a ausência não for um “não”?',name:'PU Learning no acesso ao Pronaf',tag:'PESQUISA & IA APLICADA',status:'Capítulo de livro · Enap · 2026',art:'pu',featured:true,summary:'Um estudo sobre aprender com exemplos positivos e dados não rotulados no acesso ao crédito rural.',lead:'Não observar uma contratação não significa conhecer todos os motivos dessa ausência.',context:'O estudo investiga o uso de Positive–Unlabeled Learning para uma pergunta relacionada ao acesso ao Pronaf. A distinção entre positivo observado e dado não rotulado é central para escolher o método.',contribution:'Preparação e integração de dados, comparação de abordagens e análise dos limites de interpretar registros administrativos por meio de modelos.',learning:'O significado do rótulo vem antes do algoritmo. Explicar o que os dados permitem afirmar faz parte da pesquisa.',note:'Capítulo publicado em Análise de dados e IA a serviço da inovação em gestão pública (Enap, 2026, p. 216–231). A reprodução integral depende de acesso autorizado aos microdados do CAF.',links:[['Ler capítulo','https://repositorio.enap.gov.br/server/api/core/bitstreams/e9845237-a877-443c-9637-399191a28a86/content#page=217'],['Registro da Enap','https://repositorio.enap.gov.br/handle/1/10139']]},
  {id:'chat-pronaf',category:'ia',title:'Uma pergunta pode abrir o caminho.',name:'Chat Pronaf v1',tag:'IA & AGRICULTURA FAMILIAR',status:'Chatbot · 2025 · Protótipo',art:'chat',featured:true,summary:'Uma experiência conversacional para aproximar perguntas e informações sobre o Pronaf.',lead:'E se explorar informação sobre crédito rural começasse com uma conversa?',context:'O projeto de 2025 explora a interação em linguagem natural para consultar informações relacionadas ao Pronaf e à agricultura familiar.',contribution:'Exploração de uma interface conversacional e do caminho entre pergunta, fonte e apresentação da informação.',learning:'Uma resposta útil depende tanto de uma boa interface quanto da clareza sobre a origem e os limites da informação.',note:'O protótipo foi desenvolvido com dados oficiais do Banco Central e documentos complementares. Se o Streamlit mostrar a tela de inatividade, use o botão da plataforma para reativar o app.',links:[['Abrir protótipo v1','https://chat-pronaf-v1.streamlit.app/'],['Código da v1','https://github.com/marcelo7bastos/chat-pronaf-v1']]},
  {id:'oficina',category:'aprender',title:'Conhecimento bom circula.',name:'Hackeando o Pronaf',tag:'SEMANA DE INOVAÇÃO · ENAP',status:'Oficina · Semana de Inovação · 2025',art:'workshop',featured:true,summary:'Dados abertos, Python e IA em uma oficina para explorar o crédito rural.',lead:'Compartilhar o caminho também faz parte de construir.',context:'Oficina apresentada na Semana de Inovação da Enap em 2025, reunindo exploração de dados abertos, programação e inteligência artificial.',contribution:'Preparação e apresentação da oficina com Ernesto Galindo, aproximando perguntas sobre o Pronaf de exercícios e ferramentas de análise.',learning:'Ensinar exige tornar decisões visíveis: de onde vêm os dados, o que perguntar e como conferir a resposta.',note:'A oficina é um trabalho colaborativo. Os materiais externos mantêm seus próprios créditos e contexto.',links:[['Materiais públicos da oficina','https://github.com/marcelo7bastos/semana_inovacao_enap_2025']]},
  {id:'jogos',category:'pessoal',title:'Também construo para brincar.',name:'Jogos de matemática',tag:'PELO PRAZER DE FAZER',status:'Dois jogos publicados',art:'game',featured:true,summary:'Duas pequenas experiências para transformar ideias matemáticas em brincadeira.',lead:'Às vezes, uma boa razão para criar é fazer uma brincadeira para a filha.',context:'Missão Kits da Festa e Tabuada Run exploram matemática com desafios visuais, escolhas e feedback. A motivação é pessoal: aprender e brincar juntos.',contribution:'Construção das experiências, das regras e das interfaces, usando programação para tornar o raciocínio visível.',learning:'Uma explicação melhora quando a outra pessoa pode experimentar a ideia.',note:'A atividade abaixo é uma demonstração independente. Os dois jogos completos estão nos links.',links:[['Missão Kits da Festa','https://marcelo7bastos.github.io/aprendendo-maximo-divisor-comum/'],['Tabuada Run','https://marcelo7bastos.github.io/jogo_tabuada/']]},
  {id:'iris',category:'ia',name:'Íris',title:'Uma assistente, muitas decisões.',tag:'IA & ROTINAS PESSOAIS',status:'Relato descritivo',summary:'Experimentos com integração, memória e rotinas assistidas por IA.',context:'Um projeto pessoal para explorar o apoio de agentes a rotinas e à organização do conhecimento.',contribution:'Configuração e integração sobre a infraestrutura Hermes, com decisões sobre memória, continuidade e supervisão.',learning:'Automatizar uma rotina inclui pensar em como ela será acompanhada e retomada.',note:'Somente descrição. Sem acesso à assistente, às suas contas, memórias, documentos ou rotinas privadas.'},
  {id:'time-ti',category:'ia',name:'Time de TI com agentes',title:'Aprender a dirigir a construção.',tag:'IA & PROCESSO DE TRABALHO',status:'Teste / experimento',summary:'Papéis, revisão e acompanhamento no desenvolvimento com agentes.',context:'Um experimento de organização do trabalho de agentes em torno de tarefas e entregas revisáveis.',contribution:'Definição de papéis, fluxos e ferramentas de apoio ao processo de implementação e revisão.',learning:'Delegar execução exige continuar responsável pelas decisões e pela conferência.',note:'Apresentado como teste, com limitações. Não expõe configurações privadas nem promete autonomia garantida.'},
  {id:'eleitoral',category:'dados',name:'Monitor Eleitoral 2026',title:'Dados cívicos, método e contexto.',tag:'DADOS ABERTOS',status:'Projeto encerrado · 2026',summary:'Coleta e organização de dados oficiais em um projeto pessoal independente.',context:'Um exercício de coleta, organização e acompanhamento de dados eleitorais oficiais.',contribution:'Desenvolvimento e análise com colaboração de Ernesto Galindo, preservando origem, referência e registros de execução.',learning:'O contexto e a data de atualização fazem parte de qualquer visualização.',note:'Projeto pessoal independente, encerrado em outubro de 2026. O repositório separa os registros de coleta dos resultados oficiais e o protótipo visual com dados simulados.',links:[['Projeto público no GitHub','https://github.com/marcelo7bastos/monitor-eleitoral-2026']]},
  {id:'alerta',category:'ia',name:'Alerta de Inflação de Alimentos',title:'Um radar para boas perguntas.',tag:'IA & MONITORAMENTO',status:'Projeto em evolução',summary:'Notícias, filtros e classificação para acompanhar um tema.',context:'Uma experiência para organizar notícias relacionadas à inflação de alimentos.',contribution:'Coleta RSS, filtragem, armazenamento e classificação assistida por IA.',learning:'Encontrar uma notícia e produzir um indicador econômico são tarefas distintas.',note:'Descrição do projeto. Sem notícias carregadas, classificações reais ou promessas de recursos futuros já prontos.',links:[['Repositório público','https://github.com/marcelo7bastos/alerta_inflacao']]},
  {id:'compras',category:'dados',name:'Planejamento de compras públicas',title:'O que os dados abertos deixam perguntar?',tag:'DADOS ABERTOS & GESTÃO',status:'Análise · openDATA 2024',summary:'Exploração de aquisições planejadas em bases PGC/PCA.',context:'Uma análise dos itens e valores previstos no planejamento de compras públicas.',contribution:'Tratamento, exploração e organização dos dados para construção de rankings e comunicação da análise.',learning:'Planejamento de contratação não equivale a despesa executada.',note:'Descrição do trabalho; nenhum dado interno ou registro de pessoa é apresentado.',links:[['Código e materiais públicos','https://github.com/marcelo7bastos/dados_aberto_pgc_pca']]},
  {id:'conversor',category:'dados',name:'Da API à planilha',title:'Uma ferramenta pequena, uma fricção a menos.',tag:'AUTOMAÇÃO PRÁTICA',status:'Trabalho anterior',summary:'Conversor de respostas da API Compras para CSV e Excel.',context:'Levar uma resposta JSON para um formato tabular pode ser uma barreira para começar a análise.',contribution:'Uma aplicação de consulta, prévia e exportação de dados em formatos de planilha.',learning:'Uma solução útil também pode ser pequena e direta.',note:'Relato de um trabalho antigo. A ferramenta não está conectada a nenhuma API neste protótipo.',links:[['Repositório público','https://github.com/marcelo7bastos/api_compras_convert_json_to']]},
  {id:'skill',category:'aprender',name:'explicar-conteudo',title:'Um jeito de aprender que vira ferramenta.',tag:'APRENDIZAGEM & IA',status:'Skill criada',summary:'Um fluxo para explorar temas por perguntas, texto e recursos visuais.',context:'Nem toda explicação precisa começar pelo mesmo formato. Algumas ideias pedem perguntas; outras, um desenho ou uma experiência.',contribution:'Organização de um método reutilizável para explorar conteúdos e escolher formas de explicação.',learning:'Uma boa ferramenta também ajuda a formular melhor a pergunta.',note:'Descrição do método. Não afirma resultados de eficácia ou publica a biblioteca privada.'},
  {id:'trilhas',category:'aprender',name:'Trilhas de IA para servidores',title:'Aprender com um caminho em mente.',tag:'CURADORIA & FORMAÇÃO',status:'Curadoria pública',summary:'Curadoria de formação organizada pelas necessidades de pessoas e equipes.',context:'A quantidade de cursos torna importante conectar formação a contexto e objetivo.',contribution:'Curadoria independente de cursos e percursos ligados à EV.G/Enap.',learning:'Uma trilha começa com a pergunta: o que a pessoa precisa conseguir fazer?',note:'Curadoria independente, sem caráter oficial da Enap ou da EV.G. O aprimoramento do projeto ainda está em definição.',links:[['Guia público','https://github.com/marcelo7bastos/trilhas-ia-enap']]},
  {id:'mba',category:'aprender',name:'Pronaf no MBA',title:'Estudar usando uma pergunta concreta.',tag:'FORMAÇÃO & ANÁLISE',status:'Trabalho acadêmico',summary:'Análise estatística, gráficos e apresentação de dados do programa.',context:'Um trabalho de formação que aproxima aprendizagem em dados de uma temática de política pública.',contribution:'Construção de notebook, visualizações e materiais de apresentação sobre o Pronaf.',learning:'Aplicar uma ferramenta a um problema concreto ajuda a entender seus pressupostos e limites.',note:'Descrição acadêmica; não inclui bases ou resultados individuais.',links:[['Materiais públicos','https://github.com/marcelo7bastos/mba_mcdia_est_desc_analise_pronaf']]},
];

const featuredOrder = ['pu', 'chat-pronaf', 'inflacao', 'oficina', 'jogos'];

const categories={dados:{title:'Dados que ajudam a perguntar melhor.',label:'Dados & políticas públicas',description:'Análises, engenharia de dados e decisões de método. Histórias sobre transformar registros em informação útil.'},ia:{title:'Construir, testar e continuar aprendendo.',label:'IA & experimentos',description:'Pesquisa, interfaces e rotinas. Cada projeto tem seu próprio estado: estudo, teste, evolução ou relato descritivo.'},aprender:{title:'Aprender também é compartilhar.',label:'Aprender & compartilhar',description:'Oficinas, curadoria, métodos e narrativas visuais. Formas de aproximar conhecimento e experiência.'},pessoal:{title:'Pelo prazer de fazer.',label:'Brincadeiras & curiosidade',description:'Pequenos projetos com uma motivação pessoal. Os jogos para minha filha são parte deste laboratório.'}};

function graphic(kind){
 const open='<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">';
 const paper='#f6f3e8',ink='#304d42',orange='#be6549',line='#9cac91';
 let s='';
 if(kind==='chart')s=`<rect width="400" height="220" fill="#dce6da"/><rect x="37" y="27" width="326" height="160" rx="5" fill="${paper}" stroke="#b0c1a5"/><rect x="37" y="27" width="326" height="24" rx="4" fill="${ink}"/><circle cx="48" cy="39" r="2" fill="#edb670"/><circle cx="56" cy="39" r="2" fill="#8aab8a"/><text x="72" y="42" font-size="7" fill="${paper}" font-family="monospace">EXPLORAR / INFLAÇÃO</text><path d="M65 84H337M65 111H337M65 138H337M65 165H337" stroke="#dfe4d5" stroke-width="1"/><path d="M67 141L95 136L123 148L152 105L181 119L209 86L238 108L267 82L295 94L333 66" fill="none" stroke="${orange}" stroke-width="3" stroke-linecap="round"/><path d="M67 156L95 150L123 153L152 142L181 144L209 129L238 137L267 117L295 123L333 112" fill="none" stroke="#7d9e84" stroke-width="2"/><circle cx="267" cy="82" r="5" fill="${orange}" stroke="${paper}" stroke-width="2"/>`;
 if(kind==='pu'){s=`<rect width="400" height="220" fill="#e8e2d5"/><circle cx="151" cy="107" r="65" fill="#d3dcc7"/><circle cx="246" cy="107" r="65" fill="#e6b498" fill-opacity=".42"/><text x="88" y="30" font-family="monospace" font-size="7" fill="${ink}">UMA PERGUNTA SOBRE RÓTULOS</text>`;for(let i=0;i<37;i++){const x=89+(i*43%229),y=56+(i*31%108);s+=`<circle cx="${x}" cy="${y}" r="${i%5===0?4:3}" fill="${i%5===0?orange:paper}" stroke="${i%5===0?orange:'#94a18c'}"/>`;}s+=`<rect x="105" y="181" width="7" height="7" rx="3" fill="${orange}"/><text x="119" y="188" font-size="7" fill="${ink}" font-family="monospace">OBSERVADO</text><circle cx="220" cy="185" r="3" fill="${paper}" stroke="${line}"/><text x="231" y="188" font-size="7" fill="${ink}" font-family="monospace">NÃO ROTULADO</text>`;}
 if(kind==='chat')s=`<rect width="400" height="220" fill="#e3dfd0"/><rect x="58" y="25" width="284" height="166" rx="8" fill="${paper}" stroke="#b5bea5"/><rect x="58" y="25" width="284" height="32" rx="8" fill="${ink}"/><circle cx="77" cy="41" r="6" fill="#adc198"/><text x="92" y="44" font-size="9" fill="${paper}" font-family="monospace">chat / pronaf</text><rect x="131" y="71" width="193" height="34" rx="7" fill="#d6e1cf"/><text x="142" y="86" font-size="8" fill="${ink}" font-family="sans-serif">Por onde começar a explorar</text><text x="142" y="96" font-size="8" fill="${ink}" font-family="sans-serif">os dados do Pronaf?</text><circle cx="78" cy="124" r="9" fill="${orange}"/><path d="M99 121H299M99 131H278M99 141H228" stroke="#b1bca3" stroke-width="3" stroke-linecap="round"/><rect x="76" y="159" width="248" height="20" rx="4" fill="#eeeede"/><path d="M86 169H178" stroke="#b8bfaa"/><path d="M310 165L315 169L310 173" fill="none" stroke="${ink}"/>`;
 if(kind==='workshop')s=`<rect width="400" height="220" fill="#d4dece"/><g transform="rotate(-5 200 110)"><rect x="66" y="31" width="268" height="156" rx="3" fill="${orange}"/><path d="M269 31V187" stroke="#ead1b3" stroke-dasharray="3 4"/><text x="85" y="57" font-size="8" fill="${paper}" font-family="monospace" letter-spacing="1">SEMANA DE INOVAÇÃO · ENAP</text><text x="82" y="122" font-size="66" fill="${paper}" font-family="Georgia">SI / 25</text><text x="86" y="148" font-size="10" fill="${paper}" font-family="monospace">HACKEANDO O PRONAF</text><text x="86" y="165" font-size="7" fill="#eacfaf" font-family="monospace">DADOS ABERTOS + PYTHON + IA</text><path d="M283 64V159M288 64V159M297 64V159M302 64V159M310 64V159M316 64V159" stroke="#eec9a8" stroke-width="2"/></g>`;
 if(kind==='game')s=`<rect width="400" height="220" fill="#e8dac7"/><g transform="rotate(6 200 110)"><rect x="102" y="24" width="196" height="173" rx="13" fill="#566b4f"/><rect x="114" y="35" width="172" height="94" rx="5" fill="#243f35"/><rect x="124" y="44" width="152" height="74" rx="2" fill="#cbd69a"/><text x="139" y="65" font-size="8" fill="#536743" font-family="monospace">MISSÃO: KITS DA FESTA</text><path d="M139 80H260M139 98H260" stroke="#a4b475"/>${[0,1,2,3,4,5].map(i=>`<rect x="${143+i*20}" y="76" width="12" height="12" rx="2" fill="#748955"/>`).join('')}<text x="148" y="109" font-size="8" fill="#536743" font-family="monospace">APRENDER BRINCANDO</text><path d="M145 143V169M132 156H158" stroke="#e0d8b7" stroke-width="9"/><circle cx="247" cy="149" r="10" fill="#c5815d"/><circle cx="224" cy="166" r="10" fill="#ddaf77"/><path d="M185 178H202" stroke="#a5b08c" stroke-width="4" stroke-linecap="round"/></g>`;
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
  const linkCount = ['inflacao', 'jogos'].includes(project.id) ? 2 : 1;
  const links = project.links?.slice(0, linkCount) || [];
  return '<article class="project-card">' +
    '<div class="project-art">' + graphic(project.art) +
    '<span class="art-caption">ILUSTRAÇÃO CONCEITUAL</span></div>' +
    '<div class="project-card-copy"><div class="project-kicker">' + esc(project.tag) + '</div>' +
    '<h3>' + esc(project.name) + '</h3><p class="project-subtitle">' + esc(project.title) + '</p>' +
    '<p>' + esc(project.summary) + '</p><span class="project-status">' + esc(project.status) + '</span>' +
    '<div class="project-actions">' + externalLinks(links) +
    '<button type="button" data-project="' + esc(project.id) + '">Ver detalhes<span class="sr-only"> de ' + esc(project.name) + '</span></button>' +
    '</div></div></article>';
}

function smallCard(project) {
  return '<button type="button" class="archive-item" data-project="' + esc(project.id) +
    '"><span aria-hidden="true">↳</span><div><h3>' + esc(project.name) + '</h3><p>' + esc(project.status) +
    '</p></div><span aria-hidden="true">→</span></button>';
}
function renderProjects(){
 const list=projects.filter(p=>selectedFilter==='todos'||p.category===selectedFilter),high=featuredOrder.map(id=>list.find(p=>p.id===id)).filter(Boolean),others=list.filter(p=>!p.featured);
 featured.innerHTML=high.map(card).join(''); archive.innerHTML=others.map(smallCard).join('');
 archive.hidden=!archiveOpen||!others.length;archiveToggle.hidden=!others.length;
 archiveToggle.setAttribute('aria-expanded',String(archiveOpen));archiveToggle.innerHTML=`${archiveOpen?'Fechar as outras gavetas':'Abrir as outras gavetas'} <span>${others.length} trabalhos</span><span aria-hidden="true">${archiveOpen?'↑':'↓'}</span>`;
 document.querySelector('#filter-announcement').textContent=`${list.length} trabalhos em ${selectedFilter==='todos'?'todas as categorias':categories[selectedFilter].label}.`;
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
function gameMarkup(){return `<div class="demo-console"><p class="eyebrow">UMA MINI BRINCADEIRA PARA EXPERIMENTAR</p><h3>Vamos montar kits iguais?</h3><p>Temos <strong>12 flores</strong> e <strong>18 doces</strong>. Qual é o maior número de kits iguais que podemos montar, usando tudo?</p><div class="game-objects" aria-hidden="true">✿ ✿ ✿ ✿ ✿ ✿<br>✿ ✿ ✿ ✿ ✿ ✿<br>● ● ● ● ● ● ● ● ●<br>● ● ● ● ● ● ● ● ●</div><div class="game-options" role="group" aria-label="Escolha a quantidade de kits"><button data-answer="2">2 kits</button><button data-answer="3">3 kits</button><button data-answer="6">6 kits</button></div><p class="game-feedback" id="game-feedback" aria-live="polite">Experimente uma resposta. O raciocínio importa tanto quanto acertar.</p></div>`;}
function showProject(id){
 const p=projects.find(p=>p.id===id);if(!p)return;
 showDialog(`<article class="dialog-content">${p.art?`<div class="dialog-art project-art"><span class="art-caption">ILUSTRAÇÃO CONCEITUAL</span>${graphic(p.art)}</div>`:''}<p class="eyebrow">${p.tag}</p><h2 id="dialog-title">${p.name}</h2><p class="dialog-lead">${p.lead||p.title}</p><div class="dialog-meta">${p.status}</div><p class="dialog-text">${p.context}</p><div class="dialog-columns"><section><h3>Minha contribuição</h3><p>${p.contribution}</p></section><section><h3>O que levo comigo</h3><p>${p.learning}</p></section></div>${p.id==='jogos'?gameMarkup():''}<div class="dialog-privacy">${p.note}</div>${p.links?`<div class="dialog-links">${externalLinks(p.links)}</div>`:''}</article>`);
}
function showCategory(id){
 const c=categories[id];if(!c)return;
 const list=projects.filter(p=>p.category===id);
 showDialog(`<section class="dialog-content"><p class="eyebrow">EXPLORE O LABORATÓRIO / ${c.label}</p><h2 id="dialog-title">${c.title}</h2><p class="dialog-lead">${c.description}</p><div class="room-group">${list.map(p=>`<button data-project="${p.id}"><span>${p.name}<small>${p.status}</small></span><span aria-hidden="true">→</span></button>`).join('')}</div></section>`);
}
document.addEventListener('click',event=>{
 const target=event.target.closest('button');if(!target)return;
 if(target.dataset.project)showProject(target.dataset.project);
 else if(target.dataset.room)showCategory(target.dataset.room);
 else if(target.dataset.filter){selectedFilter=target.dataset.filter;archiveOpen=selectedFilter!=='todos';renderProjects();}
 else if(target.dataset.answer){const n=Number(target.dataset.answer);document.querySelector('#game-feedback').textContent=n===6?'Isso! 6 kits, cada um com 2 flores e 3 doces. Seis é o maior divisor comum de 12 e 18.':'Dá para montar essa quantidade de kits iguais. Mas será que conseguimos um número maior, sem sobrar nada?';}
});
archiveToggle.addEventListener('click',()=>{archiveOpen=!archiveOpen;renderProjects();});
document.querySelector('#dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
document.querySelector('#day-toggle').addEventListener('click',event=>{night=!night;room?.setNight(night);document.querySelector('#room-shell').classList.toggle('night',night);event.currentTarget.setAttribute('aria-pressed',String(night));event.currentTarget.title=night?'Voltar à luz do dia':'Acender a luz da noite';event.currentTarget.innerHTML=`${night?'☾':'☼'}<span class="sr-only">${night?'Voltar ao modo diurno':'Modo noturno'}</span>`;});
const motionButton=document.querySelector('#motion-toggle');
function updateMotion(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.title=paused?'Retomar movimento':'Pausar movimento';motionButton.innerHTML=`${paused?'▷':'Ⅱ'}<span class="sr-only">${paused?'Retomar':'Pausar'} movimento</span>`;}
motionButton.addEventListener('click',()=>{paused=!paused;room?.setPaused(paused);updateMotion();});
renderProjects();updateMotion();

const stage = document.querySelector('#room-stage');
const loading = document.querySelector('#room-loading');

async function loadRoom() {
  stage.setAttribute('aria-busy', 'true');
  try {
    const {createWorkshop} = await import('./scene.js');
    room = createWorkshop(stage, {
      onSelect: showCategory,
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
