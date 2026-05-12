import type { Locale } from '../i18n/routing';

export type PostMeta = {
  slug: string;
  variant: number;
  cat: number;
  dateISO: string;
};

export type Post = {
  slug: string;
  variant: number;
  cat: string;
  catIdx: number;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  body: string;
  author: string;
};

export const POSTS_META: PostMeta[] = [
  { slug: 'agents-ia-no-son-chatbots', variant: 0, cat: 0, dateISO: '2026-04-18' },
  { slug: 'n8n-42h-mes', variant: 1, cat: 1, dateISO: '2026-04-02' },
  { slug: 'mcp-claude-code', variant: 2, cat: 2, dateISO: '2026-03-24' },
  { slug: 'rag-empresa-mitjana', variant: 3, cat: 0, dateISO: '2026-03-10' },
  { slug: 'ia-on-no', variant: 4, cat: 3, dateISO: '2026-05-12' },
  { slug: 'evals-produccio', variant: 5, cat: 2, dateISO: '2026-02-12' },
  { slug: 'claude-haiku-cost', variant: 0, cat: 4, dateISO: '2026-01-28' },
  { slug: 'handover-tecnic', variant: 1, cat: 3, dateISO: '2026-01-14' },
  { slug: 'boutique-restaurant', variant: 2, cat: 1, dateISO: '2025-12-18' },
  { slug: 'supabase-pgvector', variant: 3, cat: 2, dateISO: '2025-12-04' },
  { slug: 'agent-multitool', variant: 4, cat: 0, dateISO: '2025-11-20' },
  { slug: 'anthropic-2025-recap', variant: 5, cat: 4, dateISO: '2025-11-06' },
];

const LOREM: Record<Locale, string> = {
  ca: [
    "En aquest article repassem les implicacions pràctiques d'aplicar aquesta tècnica en un entorn real de producció. No parlem d'experiments aïllats: parlem de sistemes que han de funcionar cada dia.",
    "El primer error més comú és pensar que la solució és purament tecnològica. La realitat és que la part més difícil sol ser entendre el procés actual: què fa cada persona, quan, i per què. Sense aquesta capa, qualsevol implementació es queda a mig camí.",
    "Un cop tenim el procés mapejat, dissenyem l'arquitectura mínima viable. La regla és simple: si una peça no aporta valor mesurable, no entra. Cada component ha de justificar la seva existència en termes de cost operatiu i manteniment futur.",
    "La iteració és la clau. Lliurem versions petites, validem amb usuaris reals i ajustem. No hi ha cap entrega màgica final. Cada cop que un sistema arriba a producció és el resultat de desenes de microdecisions ben preses.",
    "Si vols aplicar aquest enfocament al teu cas, contacta'ns. Una primera conversa de 30 minuts és suficient per veure si encaixem.",
  ].join('\n\n'),
  es: [
    "En este artículo repasamos las implicaciones prácticas de aplicar esta técnica en un entorno real de producción. No hablamos de experimentos aislados: hablamos de sistemas que tienen que funcionar cada día.",
    "El primer error más común es pensar que la solución es puramente tecnológica. La realidad es que la parte más difícil suele ser entender el proceso actual: qué hace cada persona, cuándo, y por qué. Sin esa capa, cualquier implementación se queda a medias.",
    "Una vez tenemos el proceso mapeado, diseñamos la arquitectura mínima viable. La regla es simple: si una pieza no aporta valor medible, no entra. Cada componente tiene que justificar su existencia en términos de coste operativo y mantenimiento futuro.",
    "La iteración es la clave. Entregamos versiones pequeñas, validamos con usuarios reales y ajustamos. No hay una entrega mágica final. Cada vez que un sistema llega a producción es el resultado de decenas de microdecisiones bien tomadas.",
    "Si quieres aplicar este enfoque a tu caso, contáctanos. Una primera conversación de 30 minutos es suficiente para ver si encajamos.",
  ].join('\n\n'),
  en: [
    "In this article we go through the practical implications of applying this technique in a real production environment. We're not talking about isolated experiments: we're talking about systems that have to run every day.",
    "The most common first mistake is thinking the solution is purely technological. The reality is that the hardest part is usually understanding the current process: what each person does, when, and why. Without that layer, any implementation falls short.",
    "Once we have the process mapped, we design the minimum viable architecture. The rule is simple: if a piece doesn't add measurable value, it doesn't go in. Every component has to justify itself in terms of operational cost and future maintenance.",
    "Iteration is the key. We ship small versions, validate with real users and adjust. There's no magical final delivery. Every system that reaches production is the result of dozens of small decisions made well.",
    "If you want to apply this approach to your case, get in touch. A first 30-minute conversation is enough to see if we're a fit.",
  ].join('\n\n'),
  fr: [
    "Dans cet article, nous passons en revue les implications pratiques de l'application de cette technique dans un environnement de production réel. Nous ne parlons pas d'expériences isolées : nous parlons de systèmes qui doivent fonctionner tous les jours.",
    "La première erreur la plus courante est de penser que la solution est purement technologique. La réalité, c'est que la partie la plus difficile consiste généralement à comprendre le processus actuel : ce que fait chaque personne, quand, et pourquoi. Sans cette couche, toute implémentation reste à mi-chemin.",
    "Une fois le processus cartographié, nous concevons l'architecture minimale viable. La règle est simple : si une pièce n'apporte pas de valeur mesurable, elle n'entre pas. Chaque composant doit justifier son existence en termes de coût opérationnel et de maintenance future.",
    "L'itération est la clé. Nous livrons de petites versions, validons avec de vrais utilisateurs et ajustons. Il n'y a pas de livraison finale magique. Chaque fois qu'un système arrive en production, c'est le résultat de dizaines de micro-décisions bien prises.",
    "Si vous souhaitez appliquer cette approche à votre cas, contactez-nous. Une première conversation de 30 minutes suffit pour voir si nous nous accordons.",
  ].join('\n\n'),
};

const CONTENT: Record<Locale, Record<string, { title: string; excerpt: string }>> = {
  ca: {
    'agents-ia-no-son-chatbots': { title: "Per què els agents d'IA no són chatbots (ni ho han de ser)", excerpt: "La diferència entre un script i un sistema que raona: arquitectura, memòria i ferramentes." },
    'n8n-42h-mes': { title: "Com un flux n8n va eliminar 42h/mes de feina manual", excerpt: "Un cas real d'automatització de back-office a hospitalitat, pas a pas." },
    'mcp-claude-code': { title: "MCP i Claude Code: un nou model d'integració", excerpt: "El Model Context Protocol canvia com connectem l'IA amb les eines que ja fas servir." },
    'rag-empresa-mitjana': { title: "RAG en una empresa mitjana: què funciona i què no", excerpt: "Quan val la pena posar un sistema RAG i quan és sobreingeniería innecessària." },
    'ia-on-no': { title: "On NO posar IA (i per què costa tant dir-ho)", excerpt: "La pressió per 'fer alguna cosa amb IA' porta empreses a invertir on no toca." },
    'evals-produccio': { title: "Evals: com saber si el teu agent funciona realment", excerpt: "Un sistema d'IA sense evals és un sistema que no saps si funciona. Així els muntem." },
    'claude-haiku-cost': { title: "Claude Haiku 4.5: què canvia per a projectes reals", excerpt: "Un model més ràpid i barat redefineix què val la pena automatitzar." },
    'handover-tecnic': { title: "Què inclou un handover tècnic ben fet", excerpt: "Documentació, accessos, tests i una sessió de transferència. El detall importa." },
    'boutique-restaurant': { title: "Un restaurant boutique automatitza reserves i emails", excerpt: "De 3h diàries de gestió manual a 20 minuts. El procés que vam seguir." },
    'supabase-pgvector': { title: "Supabase + pgvector: la base de dades per a RAG", excerpt: "Per què hem deixat de muntar Pinecone per a la majoria de projectes." },
    'agent-multitool': { title: "Disseny d'un agent amb 12 eines sense que es perdi", excerpt: "El truc no és afegir més tools, sinó saber com presentar-les al model." },
    'anthropic-2025-recap': { title: "Anthropic 2025: el que importa per a productes reals", excerpt: "Resum sense soroll del que ha canviat aquest any en l'ecosistema d'Anthropic." },
  },
  es: {
    'agents-ia-no-son-chatbots': { title: "Por qué los agentes de IA no son chatbots (ni deben serlo)", excerpt: "La diferencia entre un script y un sistema que razona: arquitectura, memoria y herramientas." },
    'n8n-42h-mes': { title: "Cómo un flujo n8n eliminó 42h/mes de trabajo manual", excerpt: "Un caso real de automatización de back-office en hostelería, paso a paso." },
    'mcp-claude-code': { title: "MCP y Claude Code: un nuevo modelo de integración", excerpt: "El Model Context Protocol cambia cómo conectamos la IA con las herramientas que ya usas." },
    'rag-empresa-mitjana': { title: "RAG en una empresa mediana: qué funciona y qué no", excerpt: "Cuándo merece la pena montar un sistema RAG y cuándo es sobreingeniería innecesaria." },
    'ia-on-no': { title: "Dónde NO poner IA (y por qué cuesta tanto decirlo)", excerpt: "La presión por 'hacer algo con IA' lleva a empresas a invertir donde no toca." },
    'evals-produccio': { title: "Evals: cómo saber si tu agente funciona de verdad", excerpt: "Un sistema de IA sin evals es un sistema que no sabes si funciona. Así los montamos." },
    'claude-haiku-cost': { title: "Claude Haiku 4.5: qué cambia para proyectos reales", excerpt: "Un modelo más rápido y barato redefine qué vale la pena automatizar." },
    'handover-tecnic': { title: "Qué incluye un handover técnico bien hecho", excerpt: "Documentación, accesos, tests y una sesión de transferencia. El detalle importa." },
    'boutique-restaurant': { title: "Un restaurante boutique automatiza reservas y emails", excerpt: "De 3h diarias de gestión manual a 20 minutos. El proceso que seguimos." },
    'supabase-pgvector': { title: "Supabase + pgvector: la base de datos para RAG", excerpt: "Por qué hemos dejado de montar Pinecone para la mayoría de proyectos." },
    'agent-multitool': { title: "Diseño de un agente con 12 herramientas sin que se pierda", excerpt: "El truco no es añadir más tools, sino saber cómo presentárselas al modelo." },
    'anthropic-2025-recap': { title: "Anthropic 2025: lo que importa para productos reales", excerpt: "Resumen sin ruido de lo que ha cambiado este año en el ecosistema de Anthropic." },
  },
  en: {
    'agents-ia-no-son-chatbots': { title: "Why AI agents are not chatbots (and shouldn't be)", excerpt: "The difference between a script and a system that reasons: architecture, memory and tools." },
    'n8n-42h-mes': { title: "How an n8n flow eliminated 42h/month of manual work", excerpt: "A real back-office automation case in hospitality, step by step." },
    'mcp-claude-code': { title: "MCP and Claude Code: a new integration model", excerpt: "The Model Context Protocol changes how we connect AI with the tools you already use." },
    'rag-empresa-mitjana': { title: "RAG at a mid-sized company: what works and what doesn't", excerpt: "When a RAG system is worth setting up and when it's just unnecessary over-engineering." },
    'ia-on-no': { title: "Where NOT to put AI (and why it's so hard to say it)", excerpt: "Pressure to 'do something with AI' pushes companies to invest in the wrong place." },
    'evals-produccio': { title: "Evals: how to know whether your agent actually works", excerpt: "An AI system without evals is one you don't know is working. Here's how we build them." },
    'claude-haiku-cost': { title: "Claude Haiku 4.5: what changes for real projects", excerpt: "A faster, cheaper model redefines what's worth automating." },
    'handover-tecnic': { title: "What a proper technical handover includes", excerpt: "Documentation, access, tests and a transfer session. The detail matters." },
    'boutique-restaurant': { title: "A boutique restaurant automates bookings and emails", excerpt: "From 3h of daily manual work to 20 minutes. The process we followed." },
    'supabase-pgvector': { title: "Supabase + pgvector: the database for RAG", excerpt: "Why we stopped setting up Pinecone for most projects." },
    'agent-multitool': { title: "Designing an agent with 12 tools without it getting lost", excerpt: "The trick isn't adding more tools, but knowing how to present them to the model." },
    'anthropic-2025-recap': { title: "Anthropic 2025: what matters for real products", excerpt: "Noise-free summary of what's changed this year in the Anthropic ecosystem." },
  },
  fr: {
    'agents-ia-no-son-chatbots': { title: "Pourquoi les agents IA ne sont pas des chatbots (et ne doivent pas l'être)", excerpt: "La différence entre un script et un système qui raisonne : architecture, mémoire et outils." },
    'n8n-42h-mes': { title: "Comment un flux n8n a éliminé 42h/mois de travail manuel", excerpt: "Un cas réel d'automatisation back-office en hôtellerie, étape par étape." },
    'mcp-claude-code': { title: "MCP et Claude Code : un nouveau modèle d'intégration", excerpt: "Le Model Context Protocol change la façon dont nous connectons l'IA aux outils que vous utilisez déjà." },
    'rag-empresa-mitjana': { title: "RAG dans une entreprise de taille moyenne : ce qui marche", excerpt: "Quand un système RAG en vaut la peine et quand c'est de la sur-ingénierie." },
    'ia-on-no': { title: "Où NE PAS mettre d'IA (et pourquoi c'est si difficile à dire)", excerpt: "La pression de « faire quelque chose avec l'IA » pousse à investir au mauvais endroit." },
    'evals-produccio': { title: "Évaluations : comment savoir si votre agent fonctionne vraiment", excerpt: "Un système d'IA sans évaluations, c'est un système dont vous ignorez s'il fonctionne." },
    'claude-haiku-cost': { title: "Claude Haiku 4.5 : ce qui change pour les vrais projets", excerpt: "Un modèle plus rapide et moins cher redéfinit ce qui vaut la peine d'être automatisé." },
    'handover-tecnic': { title: "Ce qu'inclut un vrai handover technique", excerpt: "Documentation, accès, tests et une session de transfert. Le détail compte." },
    'boutique-restaurant': { title: "Un restaurant boutique automatise réservations et emails", excerpt: "De 3h de gestion manuelle quotidienne à 20 minutes. Le processus suivi." },
    'supabase-pgvector': { title: "Supabase + pgvector : la base de données pour RAG", excerpt: "Pourquoi nous n'utilisons plus Pinecone sur la plupart des projets." },
    'agent-multitool': { title: "Concevoir un agent avec 12 outils sans qu'il se perde", excerpt: "L'astuce n'est pas d'ajouter plus d'outils, mais de savoir les présenter au modèle." },
    'anthropic-2025-recap': { title: "Anthropic 2025 : ce qui compte pour les vrais produits", excerpt: "Résumé sans bruit de ce qui a changé cette année dans l'écosystème Anthropic." },
  },
};

const IA_ON_NO_CA = `Hi ha una conversa que tenim sovint amb clients potencials. Ens truquen amb una idea concreta: "volem aplicar IA a aquest procés". Escoltem, fem preguntes, mirem dades. I, en més casos dels que ens agradaria, acabem dient el mateix: aquí no toca.

No toca perquè la IA no resoldrà el problema. O perquè el resoldrà pitjor que el que ja teniu. O perquè el cost de muntar-la i mantenir-la serà més alt que el benefici. Direm que no, però amb arguments tècnics i de negoci, no com a postura comercial.

Aquest article va d'això: dels casos on **no s'ha de posar IA**, per què costa tant dir-ho obertament, i com identificar si el teu cas entra en algun d'aquests escenaris abans d'invertir temps i pressupost en alguna cosa que no farà cap diferència real.

## Per què és tan difícil dir "no" a un projecte d'IA

Vivim un moment estrany. La pressió per "fer alguna cosa amb IA" arriba per tot arreu: consells d'administració que llegeixen articles a Forbes, competidors que anuncien iniciatives en LinkedIn, agències que prometen transformacions completes amb tres prompts. La pregunta deixa de ser "això resol un problema?" i passa a ser "per què encara no ho fem?".

En aquest context, una consultora que diu "no calia" sona malament. Sona a poca ambició, a no saber. I tanmateix, és exactament el contrari: dir que no requereix entendre el problema millor que qui ven el sí per defecte.

La nostra posició és clara. La IA és una eina molt potent per a certs tipus de problemes, i una pèssima inversió per a d'altres. Distingir-ho és el primer pas seriós d'un projecte; saltar-se aquest pas és com començar una reforma sense mirar els fonaments.

## Els cinc casos on NO recomanem aplicar IA

A partir de la nostra experiència amb projectes propis i revisions de plantejaments d'altri, aquests són els cinc escenaris on, una vegada darrere l'altra, hem vist que la IA no aporta valor:

**1. Quan el procés ja funciona bé amb regles deterministes.** Si tens un sistema de regles clares que cobreix el 95% dels casos i només falla en situacions extremes, afegir IA gairebé sempre empitjora el conjunt. La IA introdueix imprevisibilitat: pot prendre decisions diferents en contextos similars, requereix monitoratge i evaluació constants, i obliga a mantenir un nou tipus d'infraestructura. Si una taula de càlcul ben dissenyada o un script Python amb cinc condicions resol el problema, deixa-ho així.

**2. Quan el volum no justifica el cost d'operació.** Cada crida a un model d'IA té un cost: en temps, en diners, en latència. Si el procés s'executa cinquanta vegades l'any, automatitzar-lo amb IA és construir una grua per moure una caixa. El temps que estalviaràs en execució no compensa el temps i diners de muntar i mantenir el sistema. Hi ha un llindar mínim de freqüència o complexitat per sota del qual no surt mai a compte.

**3. Quan no tens dades pròpies que aportin context real.** Una de les promeses més atractives de la IA és que entén el teu negoci. Però només l'entén si li donem les peces correctes. Si la teva empresa no té dades estructurades, històrics consolidats o documentació processada del coneixement intern, el que tindràs és un sistema que dóna respostes genèriques amb la teva marca al davant. Això no és diferenciació, és wallpaper.

**4. Quan la decisió té conseqüències regulatòries o legals importants.** Decidir qui rep un crèdit, qui passa un control de compliance, qui entra en una llista de risc. En sectors regulats com el financer o l'auditoria, hi ha decisions que requereixen explicabilitat completa, traçabilitat i acceptació explícita de responsabilitat. Els models actuals d'IA no ofereixen aquestes garanties de manera nativa. Pots fer servir IA com a suport (preparar dades, detectar patrons, generar borradors), però la decisió final ha de quedar en mans humanes amb criteris explícits. Si el procés que vols automatitzar és la decisió, no el suport, la IA no és la resposta.

**5. Quan l'objectiu real és "fer alguna cosa amb IA" i no resoldre un problema concret.** Aquest és el cas més comú i el més difícil de detectar des de dins de l'empresa. Apareix quan el projecte arrenca per pressió externa (junta directiva, premsa, competència) i no per una necessitat identificada des dels equips operatius. El resultat acostuma a ser un pilot que mai surt de la fase de prova, un cost que ningú vol explicar i un equip que perd confiança en la tecnologia. Si no pots descriure el problema en una frase abans d'introduir la paraula "IA", encara no estàs preparat per a un projecte d'IA.

## Com saber si el teu cas entra en algun d'aquests

A l'hora d'avaluar un projecte, fem tres preguntes prèvies. Aplica-les tu mateix abans de buscar pressupost:

**Pregunta 1: si demà la IA deixés d'existir, encara voldries resoldre aquest problema?** Si la resposta és no, el projecte no neix d'una necessitat real. Neix de la moda. Esperar.

**Pregunta 2: pots descriure el resultat esperat en una mètrica concreta?** "Reduir el temps de revisió de factures de 4 hores a 30 minuts" és una mètrica. "Modernitzar el departament" no ho és. Sense mètrica no hi ha projecte: hi ha desig.

**Pregunta 3: tens algú internament que pugui validar si el sistema funciona o no?** Un sistema d'IA en producció necessita seguiment, ajustos i decisions tècniques periòdiques. Si dins de l'empresa no hi ha ningú capaç de valorar si el sistema fa el que ha de fer, el projecte depèn al 100% del proveïdor. Això és risc, no autonomia.

## La nostra posició

A MindRise hem dit que no a diversos projectes en aquest últim any. No perquè no fos tècnicament possible muntar-los, sinó perquè el client no en sortiria guanyant. Aquesta és, probablement, la decisió més rendible que hem pres: prioritzar projectes on la IA marca una diferència real, on les nostres hores aporten valor mesurable, i on el client surt convençut que la inversió va valdre la pena.

La pregunta més valuosa que pots fer-te abans d'engegar un projecte d'IA no és "com aplico IA aquí?". És "tinc realment un problema que la IA resol millor que qualsevol altra solució disponible?". Si la resposta és sí, parlem. Si no, ens en alegrem igualment d'haver-ho parlat.

Si dubtes si el teu cas entra en algun dels escenaris d'aquest article, escriu-nos. Et donarem una valoració honesta en una primera trucada, sense compromís. A vegades la millor consultoria és confirmar que no necessites una consultora.`;

const IA_ON_NO_ES = `Hay una conversación que tenemos a menudo con clientes potenciales. Nos llaman con una idea concreta: "queremos aplicar IA a este proceso". Escuchamos, hacemos preguntas, miramos datos. Y, en más casos de los que nos gustaría, acabamos diciendo lo mismo: aquí no toca.

No toca porque la IA no va a resolver el problema. O porque lo resolverá peor que lo que ya tenéis. O porque el coste de montarla y mantenerla será más alto que el beneficio. Lo decimos con argumentos técnicos y de negocio, no como postura comercial.

Este artículo va de eso: de los casos donde **no hay que poner IA**, de por qué cuesta tanto decirlo abiertamente, y de cómo identificar si tu caso entra en alguno de estos escenarios antes de invertir tiempo y presupuesto en algo que no va a marcar una diferencia real.

## Por qué es tan difícil decir "no" a un proyecto de IA

Vivimos un momento extraño. La presión por "hacer algo con IA" llega por todas partes: consejos de administración que leen artículos en Forbes, competidores que anuncian iniciativas en LinkedIn, agencias que prometen transformaciones completas con tres prompts. La pregunta deja de ser "esto resuelve un problema?" y pasa a ser "¿por qué todavía no lo hacemos?".

En este contexto, una consultora que dice "no hacía falta" suena mal. Suena a poca ambición, a no saber. Y sin embargo, es exactamente lo contrario: decir que no requiere entender el problema mejor que quien vende el sí por defecto.

Nuestra posición es clara. La IA es una herramienta muy potente para ciertos tipos de problemas, y una pésima inversión para otros. Distinguirlo es el primer paso serio de un proyecto; saltárselo es como empezar una reforma sin mirar los cimientos.

## Los cinco casos donde NO recomendamos aplicar IA

A partir de nuestra experiencia con proyectos propios y revisiones de planteamientos ajenos, estos son los cinco escenarios donde, una y otra vez, hemos visto que la IA no aporta valor:

**1. Cuando el proceso ya funciona bien con reglas deterministas.** Si tienes un sistema de reglas claras que cubre el 95% de los casos y solo falla en situaciones extremas, añadir IA casi siempre empeora el conjunto. La IA introduce imprevisibilidad: puede tomar decisiones distintas en contextos similares, requiere monitorización y evaluación constantes, y obliga a mantener un nuevo tipo de infraestructura. Si una hoja de cálculo bien diseñada o un script Python con cinco condiciones resuelve el problema, déjalo así.

**2. Cuando el volumen no justifica el coste de operación.** Cada llamada a un modelo de IA tiene un coste: en tiempo, en dinero, en latencia. Si el proceso se ejecuta cincuenta veces al año, automatizarlo con IA es construir una grúa para mover una caja. El tiempo que ahorrarás en ejecución no compensa el tiempo y dinero de montar y mantener el sistema. Hay un umbral mínimo de frecuencia o complejidad por debajo del cual no sale nunca a cuenta.

**3. Cuando no tienes datos propios que aporten contexto real.** Una de las promesas más atractivas de la IA es que entiende tu negocio. Pero solo lo entiende si le damos las piezas correctas. Si tu empresa no tiene datos estructurados, históricos consolidados o documentación procesada del conocimiento interno, lo que tendrás es un sistema que da respuestas genéricas con tu marca delante. Eso no es diferenciación, es papel pintado.

**4. Cuando la decisión tiene consecuencias regulatorias o legales importantes.** Decidir quién recibe un crédito, quién pasa un control de compliance, quién entra en una lista de riesgo. En sectores regulados como el financiero o la auditoría, hay decisiones que requieren explicabilidad completa, trazabilidad y aceptación explícita de responsabilidad. Los modelos actuales de IA no ofrecen estas garantías de forma nativa. Puedes usar IA como apoyo (preparar datos, detectar patrones, generar borradores), pero la decisión final debe quedar en manos humanas con criterios explícitos. Si el proceso que quieres automatizar es la decisión, no el apoyo, la IA no es la respuesta.

**5. Cuando el objetivo real es "hacer algo con IA" y no resolver un problema concreto.** Este es el caso más común y el más difícil de detectar desde dentro de la empresa. Aparece cuando el proyecto arranca por presión externa (junta directiva, prensa, competencia) y no por una necesidad identificada desde los equipos operativos. El resultado suele ser un piloto que nunca sale de la fase de prueba, un coste que nadie quiere explicar y un equipo que pierde confianza en la tecnología. Si no puedes describir el problema en una frase antes de introducir la palabra "IA", todavía no estás preparado para un proyecto de IA.

## Cómo saber si tu caso entra en alguno de estos

A la hora de evaluar un proyecto, hacemos tres preguntas previas. Aplícalas tú mismo antes de buscar presupuesto:

**Pregunta 1: si mañana la IA dejara de existir, ¿seguirías queriendo resolver este problema?** Si la respuesta es no, el proyecto no nace de una necesidad real. Nace de la moda. Esperar.

**Pregunta 2: ¿puedes describir el resultado esperado en una métrica concreta?** "Reducir el tiempo de revisión de facturas de 4 horas a 30 minutos" es una métrica. "Modernizar el departamento" no lo es. Sin métrica no hay proyecto: hay deseo.

**Pregunta 3: ¿tienes a alguien internamente que pueda validar si el sistema funciona o no?** Un sistema de IA en producción necesita seguimiento, ajustes y decisiones técnicas periódicas. Si dentro de la empresa no hay nadie capaz de valorar si el sistema hace lo que debe, el proyecto depende al 100% del proveedor. Eso es riesgo, no autonomía.

## Nuestra posición

En MindRise hemos dicho que no a varios proyectos este último año. No porque no fuese técnicamente posible montarlos, sino porque el cliente no iba a salir ganando. Esta es, probablemente, la decisión más rentable que hemos tomado: priorizar proyectos donde la IA marca una diferencia real, donde nuestras horas aportan valor medible, y donde el cliente sale convencido de que la inversión mereció la pena.

La pregunta más valiosa que puedes hacerte antes de arrancar un proyecto de IA no es "¿cómo aplico IA aquí?". Es "¿tengo realmente un problema que la IA resuelva mejor que cualquier otra solución disponible?". Si la respuesta es sí, hablemos. Si no, nos alegramos igualmente de haberlo hablado.

Si dudas si tu caso entra en alguno de los escenarios de este artículo, escríbenos. Te daremos una valoración honesta en una primera llamada, sin compromiso. A veces la mejor consultoría es confirmar que no necesitas una consultora.`;

const IA_ON_NO_EN = `There's a conversation we have often with potential clients. They call us with a specific idea: "we want to apply AI to this process". We listen, ask questions, look at the data. And, in more cases than we'd like, we end up saying the same thing: this isn't the right fit.

It's not the right fit because AI won't solve the problem. Or because it'll solve it worse than what's already in place. Or because the cost of building and maintaining it will be higher than the benefit. We say it with technical and business arguments, not as a commercial stance.

This article is about that: the cases where **AI shouldn't be deployed**, why it's so hard to say it openly, and how to identify whether your case falls into any of these scenarios before investing time and budget in something that won't make a real difference.

## Why it's so hard to say "no" to an AI project

We live in strange times. Pressure to "do something with AI" comes from everywhere: boards that read Forbes articles, competitors announcing initiatives on LinkedIn, agencies promising full transformations with three prompts. The question stops being "does this solve a problem?" and becomes "why aren't we doing it yet?".

In this context, a consultancy that says "it wasn't needed" sounds bad. It sounds like a lack of ambition, like not knowing. And yet, it's exactly the opposite: saying no requires understanding the problem better than whoever sells the default yes.

Our position is clear. AI is a very powerful tool for certain kinds of problems, and a terrible investment for others. Distinguishing between the two is the first serious step in a project; skipping it is like starting a renovation without checking the foundations.

## The five cases where we don't recommend applying AI

Based on our experience with our own projects and reviews of others' approaches, these are the five scenarios where, time and again, we've seen that AI doesn't add value:

**1. When the process already works well with deterministic rules.** If you have a clear rules system covering 95% of cases that only fails in edge situations, adding AI almost always makes things worse. AI introduces unpredictability: it can make different decisions in similar contexts, requires constant monitoring and evaluation, and forces you to maintain a new kind of infrastructure. If a well-designed spreadsheet or a Python script with five conditions solves the problem, leave it that way.

**2. When the volume doesn't justify the operational cost.** Every call to an AI model has a cost: in time, in money, in latency. If the process runs fifty times a year, automating it with AI is like building a crane to move a box. The execution time saved won't compensate the time and money spent setting up and maintaining the system. There's a minimum frequency or complexity threshold below which it never pays off.

**3. When you don't have your own data providing real context.** One of AI's most attractive promises is that it understands your business. But it only understands it if we give it the right pieces. If your company doesn't have structured data, consolidated historical records, or processed documentation of internal knowledge, what you'll have is a system giving generic answers with your brand on top. That's not differentiation, it's wallpaper.

**4. When the decision has significant regulatory or legal consequences.** Deciding who gets a loan, who passes a compliance check, who ends up on a risk list. In regulated sectors like finance or auditing, there are decisions that require full explainability, traceability, and explicit acceptance of responsibility. Current AI models don't offer these guarantees natively. You can use AI as support (preparing data, detecting patterns, generating drafts), but the final decision must remain in human hands with explicit criteria. If the process you want to automate is the decision itself, not the support, AI isn't the answer.

**5. When the real goal is "do something with AI" rather than solving a concrete problem.** This is the most common case and the hardest to detect from inside the company. It appears when the project starts due to external pressure (board, press, competition) and not from a need identified by the operational teams. The result is usually a pilot that never leaves the testing phase, a cost no one wants to explain, and a team that loses confidence in technology. If you can't describe the problem in a single sentence before introducing the word "AI", you're not ready for an AI project yet.

## How to know if your case fits any of these

When evaluating a project, we ask three preliminary questions. Apply them yourself before looking for budget:

**Question 1: if AI ceased to exist tomorrow, would you still want to solve this problem?** If the answer is no, the project isn't born from a real need. It's born from the trend. Wait.

**Question 2: can you describe the expected outcome in a concrete metric?** "Reduce invoice review time from 4 hours to 30 minutes" is a metric. "Modernise the department" isn't. Without a metric there's no project: there's wishful thinking.

**Question 3: do you have someone internally who can validate whether the system works or not?** An AI system in production needs follow-up, adjustments, and periodic technical decisions. If there's no one inside the company capable of judging whether the system does what it should, the project depends 100% on the vendor. That's risk, not autonomy.

## Our position

At MindRise we've said no to several projects in the past year. Not because they weren't technically feasible to build, but because the client wasn't going to come out winning. This is, probably, the most profitable decision we've made: prioritising projects where AI makes a real difference, where our hours add measurable value, and where the client walks away convinced the investment was worth it.

The most valuable question you can ask yourself before starting an AI project isn't "how do I apply AI here?". It's "do I actually have a problem that AI solves better than any other available solution?". If the answer is yes, let's talk. If not, we're glad we discussed it anyway.

If you're unsure whether your case fits any of the scenarios in this article, get in touch. We'll give you an honest assessment in a first call, with no commitment. Sometimes the best consultancy is confirming that you don't need a consultancy.`;

const IA_ON_NO_FR = `Il y a une conversation que nous avons souvent avec des clients potentiels. Ils nous appellent avec une idée précise : « nous voulons appliquer l'IA à ce processus ». Nous écoutons, posons des questions, regardons les données. Et, dans plus de cas que nous le voudrions, nous finissons par dire la même chose : ici, ce n'est pas le bon endroit.

Ce n'est pas le bon endroit parce que l'IA ne résoudra pas le problème. Ou parce qu'elle le résoudra moins bien que ce qui existe déjà. Ou parce que le coût de construction et de maintenance sera plus élevé que le bénéfice. Nous le disons avec des arguments techniques et de business, pas comme posture commerciale.

Cet article parle de cela : des cas où **il ne faut pas mettre d'IA**, de pourquoi il est si difficile de le dire ouvertement, et comment identifier si votre cas entre dans l'un de ces scénarios avant d'investir du temps et du budget dans quelque chose qui ne fera pas de différence réelle.

## Pourquoi il est si difficile de dire « non » à un projet d'IA

Nous vivons une époque étrange. La pression pour « faire quelque chose avec l'IA » arrive de partout : conseils d'administration qui lisent des articles dans Forbes, concurrents qui annoncent des initiatives sur LinkedIn, agences qui promettent des transformations complètes avec trois prompts. La question cesse d'être « est-ce que cela résout un problème ? » et devient « pourquoi ne le faisons-nous pas encore ? ».

Dans ce contexte, un cabinet de conseil qui dit « ce n'était pas nécessaire » sonne mal. Cela sonne comme un manque d'ambition, comme une ignorance. Et pourtant, c'est exactement le contraire : dire non exige de comprendre le problème mieux que celui qui vend le oui par défaut.

Notre position est claire. L'IA est un outil très puissant pour certains types de problèmes, et un très mauvais investissement pour d'autres. Distinguer les deux est la première étape sérieuse d'un projet ; sauter cette étape, c'est commencer une rénovation sans regarder les fondations.

## Les cinq cas où nous ne recommandons pas d'appliquer l'IA

À partir de notre expérience avec des projets propres et des révisions d'approches d'autrui, voici les cinq scénarios où, encore et encore, nous avons vu que l'IA n'apporte pas de valeur :

**1. Quand le processus fonctionne déjà bien avec des règles déterministes.** Si vous avez un système de règles claires qui couvre 95 % des cas et qui n'échoue que dans des situations extrêmes, ajouter de l'IA empire presque toujours l'ensemble. L'IA introduit de l'imprévisibilité : elle peut prendre des décisions différentes dans des contextes similaires, requiert un suivi et une évaluation constants, et oblige à maintenir un nouveau type d'infrastructure. Si un tableur bien conçu ou un script Python avec cinq conditions résout le problème, laissez-le ainsi.

**2. Quand le volume ne justifie pas le coût opérationnel.** Chaque appel à un modèle d'IA a un coût : en temps, en argent, en latence. Si le processus s'exécute cinquante fois par an, l'automatiser avec de l'IA c'est construire une grue pour déplacer une boîte. Le temps économisé en exécution ne compensera pas le temps et l'argent investis dans la mise en place et la maintenance du système. Il existe un seuil minimum de fréquence ou de complexité en dessous duquel cela ne sera jamais rentable.

**3. Quand vous n'avez pas de données propres qui apportent un contexte réel.** L'une des promesses les plus attrayantes de l'IA est qu'elle comprend votre business. Mais elle ne le comprend que si nous lui donnons les bonnes pièces. Si votre entreprise n'a pas de données structurées, d'historiques consolidés ou de documentation traitée des connaissances internes, ce que vous aurez sera un système qui donne des réponses génériques avec votre marque devant. Ce n'est pas de la différenciation, c'est du papier peint.

**4. Quand la décision a des conséquences réglementaires ou juridiques importantes.** Décider qui obtient un crédit, qui passe un contrôle de compliance, qui figure sur une liste de risques. Dans des secteurs régulés comme la finance ou l'audit, il y a des décisions qui requièrent une explicabilité complète, une traçabilité et une acceptation explicite de responsabilité. Les modèles actuels d'IA n'offrent pas ces garanties de manière native. Vous pouvez utiliser l'IA comme support (préparer des données, détecter des patrons, générer des brouillons), mais la décision finale doit rester entre des mains humaines avec des critères explicites. Si le processus que vous voulez automatiser est la décision, et non le support, l'IA n'est pas la réponse.

**5. Quand l'objectif réel est « faire quelque chose avec l'IA » et non résoudre un problème concret.** C'est le cas le plus fréquent et le plus difficile à détecter de l'intérieur de l'entreprise. Il apparaît quand le projet démarre par pression externe (conseil d'administration, presse, concurrence) et non par un besoin identifié par les équipes opérationnelles. Le résultat est généralement un pilote qui ne quitte jamais la phase de test, un coût que personne ne veut expliquer et une équipe qui perd confiance en la technologie. Si vous ne pouvez pas décrire le problème en une phrase avant d'introduire le mot « IA », vous n'êtes pas encore prêt pour un projet d'IA.

## Comment savoir si votre cas correspond à l'un d'eux

Au moment d'évaluer un projet, nous posons trois questions préalables. Appliquez-les vous-même avant de chercher un budget :

**Question 1 : si demain l'IA cessait d'exister, voudriez-vous encore résoudre ce problème ?** Si la réponse est non, le projet ne naît pas d'un besoin réel. Il naît d'une mode. Attendre.

**Question 2 : pouvez-vous décrire le résultat attendu avec une métrique concrète ?** « Réduire le temps de révision des factures de 4 heures à 30 minutes » est une métrique. « Moderniser le département » ne l'est pas. Sans métrique il n'y a pas de projet : il y a un souhait.

**Question 3 : avez-vous quelqu'un en interne qui puisse valider si le système fonctionne ou non ?** Un système d'IA en production nécessite un suivi, des ajustements et des décisions techniques périodiques. Si à l'intérieur de l'entreprise il n'y a personne capable d'évaluer si le système fait ce qu'il doit faire, le projet dépend à 100 % du fournisseur. C'est du risque, pas de l'autonomie.

## Notre position

Chez MindRise, nous avons dit non à plusieurs projets cette dernière année. Pas parce qu'il n'était pas techniquement possible de les monter, mais parce que le client n'allait pas en sortir gagnant. C'est, probablement, la décision la plus rentable que nous ayons prise : prioriser les projets où l'IA fait une différence réelle, où nos heures apportent une valeur mesurable, et où le client repart convaincu que l'investissement en valait la peine.

La question la plus précieuse que vous pouvez vous poser avant de démarrer un projet d'IA n'est pas « comment appliquer l'IA ici ? ». C'est « ai-je réellement un problème que l'IA résout mieux que toute autre solution disponible ? ». Si la réponse est oui, parlons-en. Sinon, nous sommes contents d'en avoir parlé quand même.

Si vous doutez de savoir si votre cas entre dans l'un des scénarios de cet article, écrivez-nous. Nous vous donnerons une évaluation honnête lors d'un premier appel, sans engagement. Parfois, le meilleur conseil est de confirmer que vous n'avez pas besoin d'un cabinet de conseil.`;

const BODIES: Record<string, Record<Locale, string>> = {
  'ia-on-no': {
    ca: IA_ON_NO_CA,
    es: IA_ON_NO_ES,
    en: IA_ON_NO_EN,
    fr: IA_ON_NO_FR,
  },
};

const MONTH_SHORT: Record<Locale, Record<string, string>> = {
  ca: { '01': 'gen', '02': 'feb', '03': 'març', '04': 'abr', '05': 'maig', '06': 'juny', '07': 'jul', '08': 'ag', '09': 'set', '10': 'oct', '11': 'nov', '12': 'des' },
  es: { '01': 'ene', '02': 'feb', '03': 'mar', '04': 'abr', '05': 'may', '06': 'jun', '07': 'jul', '08': 'ago', '09': 'sep', '10': 'oct', '11': 'nov', '12': 'dic' },
  en: { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' },
  fr: { '01': 'janv.', '02': 'févr.', '03': 'mars', '04': 'avr.', '05': 'mai', '06': 'juin', '07': 'juil.', '08': 'août', '09': 'sept.', '10': 'oct.', '11': 'nov.', '12': 'déc.' },
};

const AUTHOR: Record<Locale, string> = {
  ca: 'Equip MindRise',
  es: 'Equipo MindRise',
  en: 'MindRise team',
  fr: 'Équipe MindRise',
};

export function buildCatalog(locale: Locale, cats: string[]): Post[] {
  const content = CONTENT[locale];
  const months = MONTH_SHORT[locale];
  const fallbackBody = LOREM[locale];
  const author = AUTHOR[locale];
  return POSTS_META.map((m) => {
    const c = content[m.slug] ?? { title: m.slug, excerpt: '' };
    const [yyyy, mm, dd] = m.dateISO.split('-');
    const date = `${parseInt(dd, 10)} ${months[mm]} ${yyyy}`;
    const body = BODIES[m.slug]?.[locale] ?? fallbackBody;
    return {
      slug: m.slug,
      variant: m.variant,
      cat: cats[m.cat],
      catIdx: m.cat,
      title: c.title,
      excerpt: c.excerpt,
      date,
      dateISO: m.dateISO,
      body,
      author,
    };
  }).sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}
