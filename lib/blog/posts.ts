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
  { slug: 'ia-on-no', variant: 4, cat: 3, dateISO: '2026-05-12' },
  { slug: 'agents-ia-no-son-chatbots', variant: 0, cat: 0, dateISO: '2026-05-12' },
  { slug: 'n8n-42h-mes', variant: 1, cat: 1, dateISO: '2026-05-14' },
  { slug: 'handover-tecnic', variant: 1, cat: 3, dateISO: '2026-05-15' },
  { slug: 'rag-empresa-mitjana', variant: 3, cat: 0, dateISO: '2026-05-16' },
  { slug: 'mcp-claude-code', variant: 2, cat: 2, dateISO: '2026-05-17' },
  { slug: 'boutique-restaurant', variant: 2, cat: 1, dateISO: '2026-05-18' },
  { slug: 'evals-produccio', variant: 5, cat: 2, dateISO: '2026-05-19' },
  { slug: 'agent-multitool', variant: 4, cat: 0, dateISO: '2026-05-20' },
  { slug: 'supabase-pgvector', variant: 3, cat: 2, dateISO: '2026-05-21' },
  { slug: 'claude-haiku-cost', variant: 0, cat: 4, dateISO: '2026-05-22' },
  { slug: 'anthropic-2025-recap', variant: 5, cat: 4, dateISO: '2026-05-23' },
];

export function isPublished(dateISO: string, now: Date = new Date()): boolean {
  const today = now.toISOString().slice(0, 10);
  return dateISO <= today;
}

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

const AGENTS_NO_CHATBOTS_CA = `Quan parlem amb empreses que estan explorant projectes d'IA, una de les confusions més comunes és pensar que tot el que respon en llenguatge natural és el mateix tipus de sistema. "Ja tenim un chatbot, ara volem un agent". "Necessitem que el chatbot pugui fer reserves, prendre decisions, contestar emails". La paraula "chatbot" s'ha convertit en una mena de comodí que cobreix coses molt diferents, i això porta a expectatives equivocades sobre què es pot construir, què costa i quins resultats donarà.

La diferència entre un chatbot i un agent no és cosmètica. És arquitectònica. I entendre-la abans de demanar un pressupost t'estalviarà sorpreses tant tècniques com econòmiques.

Aquest article explica què és realment un agent d'IA, en què es diferencia d'un chatbot, i per què aquesta distinció és rellevant a l'hora de decidir què construir per a la teva empresa.

## Què és realment un agent

Un chatbot és, en essència, una interfície de conversa. Reps una pregunta, generes una resposta, fi. Pot semblar intel·ligent perquè utilitza un model de llenguatge potent, però la seva feina acaba en el text que produeix. No fa res més enllà de respondre.

Un agent, en canvi, és un sistema que **actua sobre el món**. Pot consultar dades, escriure en sistemes externs, executar accions, comprovar resultats, tornar enrere si alguna cosa falla i prendre decisions sobre què fer a continuació. Una conversa amb un agent pot acabar amb un correu enviat, una factura registrada, una reserva confirmada o tres consultes fetes a tres sistemes diferents. La conversa és només la capa visible; el que importa és el que passa per sota.

Una analogia útil: un chatbot és un caixer automàtic que sap respondre preguntes sobre el teu compte. Un agent és un assessor financer que pot consultar el teu compte, fer transferències, contactar la teva gestoria i preparar-te una proposta d'inversió. Tots dos parlen, però la naturalesa del que fan és radicalment diferent.

## Les quatre diferències clau

A partir dels projectes que hem construït i revisat aquest últim any, hi ha quatre dimensions on un agent es separa clarament d'un chatbot:

**1. Accés a eines i sistemes externs.** Un chatbot funciona amb el que té dins del seu model: el coneixement amb el qual va ser entrenat i, opcionalment, alguns documents que li passes per context. Un agent té accés a "eines" (tools): pot consultar una base de dades, cridar una API, llegir un correu, executar un script. Aquesta capacitat el converteix en un actor dins del teu sistema, no només en un comentarista. Quan un agent diu "he reservat la sala a les 10h", ha reservat la sala de veritat. Quan un chatbot ho diu, només ho ha dit.

**2. Memòria i estat entre passos.** Un chatbot tradicional treballa pregunta a pregunta: rep input, genera output, oblida. Un agent manté un estat al llarg d'un procés que pot durar segons, minuts o hores. Sap què ha intentat ja, què ha funcionat, què ha de tornar a provar amb un altre enfocament. Aquesta memòria operativa és el que li permet completar tasques de múltiples passos sense perdre's pel camí.

**3. Capacitat de raonar sobre seqüències d'accions.** Un chatbot respon una pregunta directament. Un agent decideix què fer abans de fer-ho: "per resoldre això, primer he de consultar la base X, després comprovar el calendari Y, i si l'horari és lliure, fer la reserva a Z". Aquesta planificació no la fa un humà al davant; la fa el sistema. El model raona sobre quina seqüència d'eines i decisions porta al resultat desitjat, i s'ajusta si una de les passes falla. Això requereix arquitectura específica, no només un bon prompt.

**4. Manteniment, observabilitat i evaluació.** Aquesta és la diferència que més sorprèn als clients: un agent en producció no és software estàtic. Necessita monitoratge constant per veure què fa, evaluacions periòdiques per validar que segueix prenent decisions correctes, i ajustos quan el comportament deriva. Un chatbot pots posar-lo en marxa i revisar-lo cada sis mesos. Un agent és un sistema viu que requereix la mateixa atenció operativa que qualsevol altre component crític de la teva infraestructura.

## Per què aquesta distinció importa al teu negoci

Aquestes diferències arquitectòniques tenen tres implicacions directes per a una empresa que es planteja un projecte:

**Implicació 1: el cost de construcció i operació no és comparable.** Muntar un chatbot avui és relativament econòmic. Hi ha plataformes que et permeten desplegar-ne un en hores. Un agent, en canvi, requereix disseny d'arquitectura, integració amb sistemes interns, sistema d'evaluacions, monitoratge i, sovint, infraestructura pròpia. La inversió inicial pot ser entre cinc i deu vegades superior. Si un proveïdor t'ofereix un "agent complet per 500€/mes", desconfia: probablement et ven un chatbot vestit d'agent.

**Implicació 2: el valor que aporta tampoc és comparable.** Un chatbot pot resoldre consultes simples: horaris, preguntes freqüents, primera línia de suport. Un agent pot **substituir tasques operatives senceres**: revisar factures, gestionar agendes, preparar borradors d'auditoria, coordinar processos multi-sistema. La diferència de ROI és proporcional a la diferència de complexitat: el primer redueix temps de resposta; el segon redueix hores-persona.

**Implicació 3: el manteniment és diferent.** Un chatbot mal mantingut és un xat lent o desactualitzat. Un agent mal mantingut pot prendre decisions equivocades sobre dades reals. Aquesta diferència de risc operatiu obliga a tractar els projectes d'agent com a infraestructura crítica, no com a tool de marketing. Equip de manteniment, sistema d'alertes, plans de rollback, evaluacions setmanals: tot això forma part del cost real de tenir un agent en producció.

## Llavors, quan vull un chatbot i quan vull un agent?

Una pregunta útil abans de decidir: **el que necessites és respondre o és fer?**

Si el que necessites és que algú parli amb l'usuari, doni informació o respongui dubtes freqüents, probablement vols un chatbot. Si el que necessites és que un sistema actuï sobre la teva operativa, coordini sistemes interns o executi tasques completes, vols un agent. Confondre els dos porta a invertir massa en projectes que no ho necessitaven, o massa poc en projectes que sí.

A MindRise, abans de proposar arquitectura d'agent a un client, ens preguntem si el cas justifica la complexitat. A vegades la resposta és no: un chatbot ben dissenyat amb tres integracions clau resol el problema millor i a una fracció del cost. Altres vegades la resposta és clarament sí: el problema és sistèmic, repetitiu, multi-pas, i automatitzar-lo amb un chatbot seria pegar tirets a un tanc.

La pregunta correcta no és "vull un chatbot o un agent?". És "quin tipus de sistema necessita realment el meu problema?". Si t'ajuda a decidir, escriu-nos. Et donarem una valoració honesta abans de plantejar res. A vegades el millor consell és confirmar que un chatbot et serveix; altres vegades és explicar-te per què tens un problema d'agent encara que no en sabessis el nom.`;

const AGENTS_NO_CHATBOTS_ES = `Cuando hablamos con empresas que están explorando proyectos de IA, una de las confusiones más comunes es pensar que todo lo que responde en lenguaje natural es el mismo tipo de sistema. "Ya tenemos un chatbot, ahora queremos un agente". "Necesitamos que el chatbot pueda hacer reservas, tomar decisiones, contestar emails". La palabra "chatbot" se ha convertido en una especie de comodín que cubre cosas muy distintas, y eso lleva a expectativas equivocadas sobre qué se puede construir, qué cuesta y qué resultados dará.

La diferencia entre un chatbot y un agente no es cosmética. Es arquitectónica. Y entenderla antes de pedir un presupuesto te ahorrará sorpresas tanto técnicas como económicas.

Este artículo explica qué es realmente un agente de IA, en qué se diferencia de un chatbot, y por qué esta distinción es relevante a la hora de decidir qué construir para tu empresa.

## Qué es realmente un agente

Un chatbot es, en esencia, una interfaz de conversación. Recibes una pregunta, generas una respuesta, fin. Puede parecer inteligente porque utiliza un modelo de lenguaje potente, pero su trabajo acaba en el texto que produce. No hace nada más allá de responder.

Un agente, en cambio, es un sistema que **actúa sobre el mundo**. Puede consultar datos, escribir en sistemas externos, ejecutar acciones, comprobar resultados, volver atrás si algo falla y tomar decisiones sobre qué hacer a continuación. Una conversación con un agente puede acabar con un correo enviado, una factura registrada, una reserva confirmada o tres consultas hechas a tres sistemas diferentes. La conversación es solo la capa visible; lo que importa es lo que pasa por debajo.

Una analogía útil: un chatbot es un cajero automático que sabe responder preguntas sobre tu cuenta. Un agente es un asesor financiero que puede consultar tu cuenta, hacer transferencias, contactar a tu gestoría y prepararte una propuesta de inversión. Ambos hablan, pero la naturaleza de lo que hacen es radicalmente distinta.

## Las cuatro diferencias clave

A partir de los proyectos que hemos construido y revisado este último año, hay cuatro dimensiones donde un agente se separa claramente de un chatbot:

**1. Acceso a herramientas y sistemas externos.** Un chatbot funciona con lo que tiene dentro de su modelo: el conocimiento con el que fue entrenado y, opcionalmente, algunos documentos que le pasas por contexto. Un agente tiene acceso a "herramientas" (tools): puede consultar una base de datos, llamar a una API, leer un correo, ejecutar un script. Esta capacidad lo convierte en un actor dentro de tu sistema, no solo en un comentarista. Cuando un agente dice "he reservado la sala a las 10h", ha reservado la sala de verdad. Cuando un chatbot lo dice, solo lo ha dicho.

**2. Memoria y estado entre pasos.** Un chatbot tradicional trabaja pregunta a pregunta: recibe input, genera output, olvida. Un agente mantiene un estado a lo largo de un proceso que puede durar segundos, minutos u horas. Sabe qué ha intentado ya, qué ha funcionado, qué tiene que volver a probar con otro enfoque. Esta memoria operativa es lo que le permite completar tareas de múltiples pasos sin perderse por el camino.

**3. Capacidad de razonar sobre secuencias de acciones.** Un chatbot responde una pregunta directamente. Un agente decide qué hacer antes de hacerlo: "para resolver esto, primero tengo que consultar la base X, después comprobar el calendario Y, y si el horario está libre, hacer la reserva en Z". Esta planificación no la hace un humano delante; la hace el sistema. El modelo razona sobre qué secuencia de herramientas y decisiones lleva al resultado deseado, y se ajusta si uno de los pasos falla. Eso requiere arquitectura específica, no solo un buen prompt.

**4. Mantenimiento, observabilidad y evaluación.** Esta es la diferencia que más sorprende a los clientes: un agente en producción no es software estático. Necesita monitorización constante para ver qué hace, evaluaciones periódicas para validar que sigue tomando decisiones correctas, y ajustes cuando el comportamiento deriva. Un chatbot puedes ponerlo en marcha y revisarlo cada seis meses. Un agente es un sistema vivo que requiere la misma atención operativa que cualquier otro componente crítico de tu infraestructura.

## Por qué esta distinción importa a tu negocio

Estas diferencias arquitectónicas tienen tres implicaciones directas para una empresa que se plantea un proyecto:

**Implicación 1: el coste de construcción y operación no es comparable.** Montar un chatbot hoy es relativamente económico. Hay plataformas que te permiten desplegar uno en horas. Un agente, en cambio, requiere diseño de arquitectura, integración con sistemas internos, sistema de evaluaciones, monitorización y, a menudo, infraestructura propia. La inversión inicial puede ser entre cinco y diez veces superior. Si un proveedor te ofrece un "agente completo por 500€/mes", desconfía: probablemente te vende un chatbot disfrazado de agente.

**Implicación 2: el valor que aporta tampoco es comparable.** Un chatbot puede resolver consultas simples: horarios, preguntas frecuentes, primera línea de soporte. Un agente puede **sustituir tareas operativas enteras**: revisar facturas, gestionar agendas, preparar borradores de auditoría, coordinar procesos multi-sistema. La diferencia de ROI es proporcional a la diferencia de complejidad: el primero reduce tiempo de respuesta; el segundo reduce horas-persona.

**Implicación 3: el mantenimiento es distinto.** Un chatbot mal mantenido es un chat lento o desactualizado. Un agente mal mantenido puede tomar decisiones equivocadas sobre datos reales. Esta diferencia de riesgo operativo obliga a tratar los proyectos de agente como infraestructura crítica, no como tool de marketing. Equipo de mantenimiento, sistema de alertas, planes de rollback, evaluaciones semanales: todo eso forma parte del coste real de tener un agente en producción.

## Entonces, ¿cuándo quiero un chatbot y cuándo quiero un agente?

Una pregunta útil antes de decidir: **¿lo que necesitas es responder o es hacer?**

Si lo que necesitas es que alguien hable con el usuario, dé información o responda dudas frecuentes, probablemente quieres un chatbot. Si lo que necesitas es que un sistema actúe sobre tu operativa, coordine sistemas internos o ejecute tareas completas, quieres un agente. Confundir los dos lleva a invertir demasiado en proyectos que no lo necesitaban, o demasiado poco en proyectos que sí.

En MindRise, antes de proponer arquitectura de agente a un cliente, nos preguntamos si el caso justifica la complejidad. A veces la respuesta es no: un chatbot bien diseñado con tres integraciones clave resuelve el problema mejor y a una fracción del coste. Otras veces la respuesta es claramente sí: el problema es sistémico, repetitivo, multi-paso, y automatizarlo con un chatbot sería pegar tiros a un tanque.

La pregunta correcta no es "¿quiero un chatbot o un agente?". Es "¿qué tipo de sistema necesita realmente mi problema?". Si te ayuda a decidir, escríbenos. Te daremos una valoración honesta antes de plantear nada. A veces el mejor consejo es confirmar que un chatbot te sirve; otras veces es explicarte por qué tienes un problema de agente aunque no supieras el nombre.`;

const AGENTS_NO_CHATBOTS_EN = `When we talk to companies exploring AI projects, one of the most common confusions is thinking that anything responding in natural language is the same kind of system. "We already have a chatbot, now we want an agent". "We need the chatbot to make reservations, take decisions, reply to emails". The word "chatbot" has become a sort of catch-all covering very different things, and that leads to wrong expectations about what can be built, what it costs and what results it'll deliver.

The difference between a chatbot and an agent isn't cosmetic. It's architectural. And understanding it before asking for a quote will save you both technical and financial surprises.

This article explains what an AI agent really is, how it differs from a chatbot, and why this distinction is relevant when deciding what to build for your company.

## What an agent really is

A chatbot is, essentially, a conversation interface. You get a question, you generate an answer, done. It can seem intelligent because it uses a powerful language model, but its work ends with the text it produces. It does nothing beyond responding.

An agent, on the other hand, is a system that **acts on the world**. It can query data, write to external systems, execute actions, check results, roll back if something fails and take decisions about what to do next. A conversation with an agent can end with an email sent, an invoice registered, a reservation confirmed or three queries made to three different systems. The conversation is only the visible layer; what matters is what happens underneath.

A useful analogy: a chatbot is an ATM that can answer questions about your account. An agent is a financial advisor that can check your account, make transfers, contact your accountant and prepare an investment proposal. Both speak, but the nature of what they do is radically different.

## The four key differences

Based on the projects we've built and reviewed this past year, there are four dimensions where an agent clearly separates from a chatbot:

**1. Access to external tools and systems.** A chatbot works with what it has inside its model: the knowledge it was trained on and, optionally, some documents you pass it as context. An agent has access to "tools": it can query a database, call an API, read an email, execute a script. This capacity turns it into an actor inside your system, not just a commentator. When an agent says "I've booked the room for 10am", it has actually booked the room. When a chatbot says it, it just said it.

**2. Memory and state across steps.** A traditional chatbot works question by question: receives input, generates output, forgets. An agent maintains state throughout a process that may last seconds, minutes or hours. It knows what it has already tried, what worked, what it needs to try again with a different approach. This operational memory is what allows it to complete multi-step tasks without getting lost along the way.

**3. Ability to reason about sequences of actions.** A chatbot answers a question directly. An agent decides what to do before doing it: "to solve this, first I need to query database X, then check calendar Y, and if the slot is free, make the reservation on Z". This planning isn't done by a human at the front; it's done by the system. The model reasons about which sequence of tools and decisions leads to the desired outcome, and adjusts if one of the steps fails. That requires specific architecture, not just a good prompt.

**4. Maintenance, observability and evaluation.** This is the difference that surprises clients the most: an agent in production isn't static software. It needs constant monitoring to see what it's doing, periodic evaluations to validate that it keeps making correct decisions, and adjustments when behaviour drifts. A chatbot you can launch and review every six months. An agent is a living system that requires the same operational attention as any other critical component of your infrastructure.

## Why this distinction matters to your business

These architectural differences have three direct implications for a company considering a project:

**Implication 1: build and operation costs aren't comparable.** Building a chatbot today is relatively cheap. There are platforms that let you deploy one in hours. An agent, on the other hand, requires architectural design, integration with internal systems, an evaluation system, monitoring and often dedicated infrastructure. Initial investment can be five to ten times higher. If a vendor offers you a "complete agent for €500/month", be suspicious: they're probably selling you a chatbot dressed as an agent.

**Implication 2: the value it delivers isn't comparable either.** A chatbot can solve simple queries: opening hours, FAQs, first-line support. An agent can **replace entire operational tasks**: reviewing invoices, managing calendars, preparing audit drafts, coordinating multi-system processes. The ROI difference is proportional to the complexity difference: the first reduces response time; the second reduces person-hours.

**Implication 3: maintenance is different.** A poorly maintained chatbot is a slow or outdated chat. A poorly maintained agent can make wrong decisions about real data. This difference in operational risk forces you to treat agent projects as critical infrastructure, not as a marketing tool. Maintenance team, alert system, rollback plans, weekly evaluations: all of that is part of the real cost of running an agent in production.

## So, when do I want a chatbot and when do I want an agent?

A useful question before deciding: **do you need to respond or do you need to act?**

If what you need is someone to talk to the user, give information or answer common questions, you probably want a chatbot. If what you need is a system that acts on your operations, coordinates internal systems or executes complete tasks, you want an agent. Confusing the two leads to investing too much in projects that didn't need it, or too little in projects that did.

At MindRise, before proposing agent architecture to a client, we ask ourselves whether the case justifies the complexity. Sometimes the answer is no: a well-designed chatbot with three key integrations solves the problem better and at a fraction of the cost. Other times the answer is clearly yes: the problem is systemic, repetitive, multi-step, and automating it with a chatbot would be like shooting a tank with a slingshot.

The right question isn't "do I want a chatbot or an agent?". It's "what kind of system does my problem actually need?". If it helps you decide, get in touch. We'll give you an honest assessment before proposing anything. Sometimes the best advice is confirming that a chatbot serves you; other times it's explaining why you have an agent problem even if you didn't know the name.`;

const AGENTS_NO_CHATBOTS_FR = `Quand nous discutons avec des entreprises qui explorent des projets d'IA, l'une des confusions les plus courantes consiste à penser que tout ce qui répond en langage naturel est le même type de système. « Nous avons déjà un chatbot, maintenant nous voulons un agent ». « Nous avons besoin que le chatbot puisse faire des réservations, prendre des décisions, répondre à des emails ». Le mot « chatbot » est devenu une sorte de fourre-tout qui couvre des choses très différentes, et cela conduit à de fausses attentes sur ce qui peut être construit, ce que cela coûte et quels résultats cela donnera.

La différence entre un chatbot et un agent n'est pas cosmétique. Elle est architecturale. Et la comprendre avant de demander un devis vous évitera des surprises tant techniques que financières.

Cet article explique ce qu'est vraiment un agent d'IA, en quoi il diffère d'un chatbot, et pourquoi cette distinction est pertinente au moment de décider quoi construire pour votre entreprise.

## Ce qu'est vraiment un agent

Un chatbot est, essentiellement, une interface de conversation. Vous recevez une question, vous générez une réponse, fin. Cela peut sembler intelligent parce qu'il utilise un modèle de langage puissant, mais son travail s'arrête au texte qu'il produit. Il ne fait rien au-delà de répondre.

Un agent, en revanche, est un système qui **agit sur le monde**. Il peut consulter des données, écrire dans des systèmes externes, exécuter des actions, vérifier des résultats, revenir en arrière si quelque chose échoue et prendre des décisions sur la suite. Une conversation avec un agent peut se terminer par un email envoyé, une facture enregistrée, une réservation confirmée ou trois requêtes faites à trois systèmes différents. La conversation n'est que la couche visible ; ce qui compte est ce qui se passe en dessous.

Une analogie utile : un chatbot est un distributeur automatique qui sait répondre à des questions sur votre compte. Un agent est un conseiller financier qui peut consulter votre compte, effectuer des virements, contacter votre comptable et vous préparer une proposition d'investissement. Les deux parlent, mais la nature de ce qu'ils font est radicalement différente.

## Les quatre différences clés

À partir des projets que nous avons construits et révisés cette dernière année, il existe quatre dimensions où un agent se sépare clairement d'un chatbot :

**1. Accès aux outils et systèmes externes.** Un chatbot fonctionne avec ce qu'il a à l'intérieur de son modèle : les connaissances avec lesquelles il a été entraîné et, optionnellement, quelques documents que vous lui passez en contexte. Un agent a accès à des « outils » (tools) : il peut consulter une base de données, appeler une API, lire un email, exécuter un script. Cette capacité le transforme en acteur à l'intérieur de votre système, et non pas seulement en commentateur. Quand un agent dit « j'ai réservé la salle pour 10h », il a vraiment réservé la salle. Quand un chatbot le dit, il l'a seulement dit.

**2. Mémoire et état entre les étapes.** Un chatbot traditionnel travaille question par question : il reçoit l'entrée, génère la sortie, oublie. Un agent maintient un état tout au long d'un processus qui peut durer des secondes, des minutes ou des heures. Il sait ce qu'il a déjà essayé, ce qui a fonctionné, ce qu'il doit réessayer avec une autre approche. Cette mémoire opérationnelle est ce qui lui permet de compléter des tâches en plusieurs étapes sans se perdre en chemin.

**3. Capacité à raisonner sur des séquences d'actions.** Un chatbot répond directement à une question. Un agent décide quoi faire avant de le faire : « pour résoudre cela, je dois d'abord consulter la base X, puis vérifier le calendrier Y, et si le créneau est libre, faire la réservation sur Z ». Cette planification n'est pas faite par un humain en face ; elle est faite par le système. Le modèle raisonne sur quelle séquence d'outils et de décisions mène au résultat souhaité, et s'ajuste si l'une des étapes échoue. Cela nécessite une architecture spécifique, pas seulement un bon prompt.

**4. Maintenance, observabilité et évaluation.** C'est la différence qui surprend le plus les clients : un agent en production n'est pas un logiciel statique. Il a besoin d'une surveillance constante pour voir ce qu'il fait, d'évaluations périodiques pour valider qu'il continue à prendre des décisions correctes, et d'ajustements quand le comportement dérive. Un chatbot, vous pouvez le mettre en marche et le revoir tous les six mois. Un agent est un système vivant qui requiert la même attention opérationnelle que n'importe quel autre composant critique de votre infrastructure.

## Pourquoi cette distinction importe pour votre business

Ces différences architecturales ont trois implications directes pour une entreprise qui envisage un projet :

**Implication 1 : le coût de construction et d'opération n'est pas comparable.** Monter un chatbot aujourd'hui est relativement bon marché. Il existe des plateformes qui vous permettent d'en déployer un en quelques heures. Un agent, en revanche, nécessite une conception architecturale, l'intégration avec des systèmes internes, un système d'évaluations, une surveillance et, souvent, une infrastructure propre. L'investissement initial peut être de cinq à dix fois supérieur. Si un fournisseur vous propose un « agent complet pour 500 €/mois », méfiez-vous : il vous vend probablement un chatbot déguisé en agent.

**Implication 2 : la valeur apportée n'est pas comparable non plus.** Un chatbot peut résoudre des requêtes simples : horaires, FAQ, première ligne de support. Un agent peut **remplacer des tâches opérationnelles entières** : réviser des factures, gérer des agendas, préparer des brouillons d'audit, coordonner des processus multi-systèmes. La différence de ROI est proportionnelle à la différence de complexité : le premier réduit le temps de réponse ; le second réduit les heures-personnes.

**Implication 3 : la maintenance est différente.** Un chatbot mal maintenu est un chat lent ou obsolète. Un agent mal maintenu peut prendre de mauvaises décisions sur des données réelles. Cette différence de risque opérationnel oblige à traiter les projets d'agent comme une infrastructure critique, pas comme un outil de marketing. Équipe de maintenance, système d'alertes, plans de rollback, évaluations hebdomadaires : tout cela fait partie du coût réel d'avoir un agent en production.

## Alors, quand est-ce que je veux un chatbot et quand est-ce que je veux un agent ?

Une question utile avant de décider : **ce dont vous avez besoin, c'est de répondre ou d'agir ?**

Si ce dont vous avez besoin, c'est que quelqu'un parle avec l'utilisateur, donne des informations ou réponde à des questions fréquentes, vous voulez probablement un chatbot. Si ce dont vous avez besoin, c'est qu'un système agisse sur votre opérationnel, coordonne des systèmes internes ou exécute des tâches complètes, vous voulez un agent. Confondre les deux conduit à investir trop dans des projets qui n'en avaient pas besoin, ou trop peu dans des projets qui en avaient besoin.

Chez MindRise, avant de proposer une architecture d'agent à un client, nous nous demandons si le cas justifie la complexité. Parfois la réponse est non : un chatbot bien conçu avec trois intégrations clés résout le problème mieux et à une fraction du coût. D'autres fois la réponse est clairement oui : le problème est systémique, répétitif, multi-étapes, et l'automatiser avec un chatbot reviendrait à tirer sur un char avec un lance-pierre.

La bonne question n'est pas « est-ce que je veux un chatbot ou un agent ? ». C'est « quel type de système mon problème nécessite-t-il vraiment ? ». Si cela vous aide à décider, écrivez-nous. Nous vous donnerons une évaluation honnête avant de proposer quoi que ce soit. Parfois le meilleur conseil consiste à confirmer qu'un chatbot vous suffit ; d'autres fois, c'est de vous expliquer pourquoi vous avez un problème d'agent même sans en connaître le nom.`;

const N8N_42H_CA = `Un dels nostres clients d'hostaleria —un hotel boutique d'unes 50 habitacions en zona turística alpina europea— va arribar a MindRise amb un problema que es nota poc però que pesa molt en el dia a dia: el personal de recepció dedicava unes 2-3 hores diàries a contestar les mateixes consultes una vegada darrere l'altra. Horaris de l'spa, recomanacions de restaurants, com arribar al telecadira més proper, què hi ha de meteorologia per als propers dies, com reservar una taula al restaurant de l'hotel. Multiplicat per quatre idiomes —espanyol, anglès, francès i català— i per una temporada alta de cinc mesos a l'any.

El càlcul net, fet amb el director de l'hotel, sortia a unes **42 hores al mes** de temps real de personal qualificat dedicat a tasques repetitives. Temps que no es podia destinar a check-ins, a atenció presencial, a problemes reals dels hostes ni a coordinar equips. La direcció ho havia identificat com un punt clar de millora però no sabia per on començar.

Aquest article explica el cas pas a pas: què trobàrem al diagnòstic, per què la solució òbvia (un chatbot) no era suficient, com vam dissenyar la solució que finalment es va implantar i quins resultats vam mesurar als tres mesos d'estar en producció.

## El problema en concret

Quan analitzem un cas, sempre comencem demanant una mostra del flux real d'una setmana. En aquest hotel, la mostra incloïa:

- 87 consultes per WhatsApp en una setmana, en quatre idiomes diferents
- 34 consultes a recepció presencial sobre temes que es podrien resoldre per missatge
- 12 trucades telefòniques amb la mateixa naturalesa
- Una distribució del temps mitjana de **8-12 minuts per consulta** (incloent cerca d'informació, redacció de la resposta, possible seguiment)

El patró era predictible: el 70% de les consultes es repetia setmana rere setmana. Recomanacions de restaurants a 10 minuts a peu. Horari del telecadira més proper. Si l'spa estava obert els diumenges. Si calia reservar el sopar al restaurant de l'hotel. Quina previsió hi havia de neu per als propers tres dies.

Aquest perfil de consultes té dues característiques: són **fàcilment automatitzables** (resposta amb informació estructurada) i, alhora, **requereixen context actualitzat** (meteorologia avui, esdeveniments locals aquest cap de setmana, horaris que canvien per temporada). No és el típic FAQ estàtic. Necessitàvem una solució que combinés base de coneixement pròpia amb accés a dades en temps real.

## Per què un chatbot estàndard no servia

Aquí entra una distinció que sempre intentem explicar als clients abans de proposar res. Un chatbot tradicional —del tipus que es desplega en una plataforma estàndard amb tres prompts— hauria resolt el 30-40% de les consultes. Hauria estat capaç de respondre horaris fixos i preguntes estàtiques. Però hauria fallat en el 60% restant: les consultes que requereixen accés a sistemes externs (meteorologia, esdeveniments, disponibilitat), les que necessiten redacció multidioma fluida, i les que han de redirigir a una persona quan la cosa es complica.

L'altra opció extrema —construir un agent complex amb arquitectura de planificació— hauria estat sobreingeniería per aquest cas. No calia que el sistema "raonés" sobre seqüències llargues d'accions. Calia que respongués bé, en quatre idiomes, amb context fresc, i que sabés quan derivar a recepció.

La conclusió després del diagnòstic va ser clara: necessitàvem una **arquitectura intermèdia**. Un sistema amb capacitats d'agent per fer consultes externes en temps real, però amb un disseny més simple que un agent generalista. El que tècnicament anomenem un sistema híbrid, però que al client li expliquem com "un assistent que sap el que sap del teu hotel, busca el que no sap quan ho necessita, i sap quan callar i avisar al teu equip".

## La solució que vam dissenyar

L'arquitectura final va combinar set components clau, cadascun amb una funció específica:

**WhatsApp Business API** com a canal principal. És on els hostes ja escriuen, així que no calia educar-los en una nova interfície. Es va connectar mitjançant l'API oficial de Meta, no a través de tercers, perquè volíem control complet sobre el flux de dades i complint amb requisits de privacitat de l'hotel.

**Kapso** com a capa d'orquestració de la conversa. S'encarrega de mantenir el context d'una conversa al llarg del temps (un mateix hoste pot escriure dimecres a la nit i continuar la conversa dijous al matí), gestionar el flux de torns, i decidir quan derivar a un humà.

**n8n self-hosted** com a motor d'integracions. Aquí és on passen totes les coses: connexió amb la base de coneixement de l'hotel, consultes a serveis externs, lectura i escriptura a Google Sheets per a registre operatiu, gestió de fallbacks. Self-hosted perquè les dades dels hostes mai surten de la infraestructura del client.

**GPT-4.1-mini** com a model principal de generació. Era la millor relació qualitat-cost-velocitat per al cas. Models més potents oferien marginalment millor resposta a un cost molt superior; models més petits no mantenien la qualitat multilingüe que requeríem.

**Perplexity** com a font d'informació actualitzada en temps real. Quan un hoste pregunta per la previsió meteorològica, els esdeveniments d'aquest cap de setmana o el preu de les forfaits avui, Perplexity respon amb informació al dia, no amb dades obsoletes del training del model.

**Redis** per a la gestió de sessions i memòria a curt termini de cada conversa.

**PostgreSQL** per al registre persistent de totes les interaccions, sense incloure dades personals identificables. Imprescindible per a auditoria, millora contínua i compliance.

Tot el sistema opera en quatre idiomes amb detecció automàtica del primer missatge. Si un hoste comença en francès, tota la conversa segueix en francès tret que canviï explícitament. La detecció va ser un dels punts més delicats: els primers missatges curts ("Hola") són ambigus entre català i castellà, així que vam haver d'afinar el sistema amb regles de fallback intel·ligent.

## Resultats mesurables als 3 mesos

Tres mesos després de la posada en producció, vam fer la mesura objectiva amb el director de l'hotel. Els resultats:

**Reducció de càrrega de personal: 42 hores/mes** alliberades del personal de recepció en consultes repetitives. Equivalent a unes 1,4 hores de personal qualificat per dia.

**Cobertura de consultes: el 73%** de les consultes entrants es resolen completament pel sistema sense intervenció humana. El 27% restant es deriva a recepció amb context complet, no com a "missatge nou": l'equip sap què s'ha demanat, què s'ha respost ja i per què s'està derivant.

**Temps de resposta: 4-8 segons** de mitjana per al 73% automatitzat. Abans, els missatges fora d'hores podien quedar sense resposta durant 2-6 hores. Ara la primera resposta és immediata 24/7.

**Multidioma efectiu: 4 idiomes** en producció amb detecció automàtica. La distribució real va ser un 38% castellà, 27% francès, 21% anglès, 14% català. Sense el sistema, l'hotel només garantia atenció fluida en dos idiomes a recepció en hores diürnes.

**Cost operatiu: aproximadament 80€/mes** de costos d'IA (models + Perplexity + infraestructura compartida). Comparat amb el cost de personal alliberat, el retorn d'inversió va ser positiu des del primer mes.

Aquests no són números teòrics: són mesurats amb dades reals durant tres mesos de producció.

## Què vam aprendre

Tres lliçons clau d'aquest projecte que apliquem ara a cassos similars:

**1. La detecció d'idioma val la pena treballar-la bé.** Els primers missatges són curts i ambigus. Vam tenir un bug inicial en el qual el sistema queia per defecte a un idioma equivocat quan la sessió de Redis encara no s'havia creat. Va ser un dia de debug, però una vegada arreglat, la fiabilitat del sistema multilingüe va saltar significativament.

**2. La integració amb el personal humà és tan important com l'automatització.** El 27% de consultes que es deriven no són "fracassos" del sistema. Són exactament el que volíem: el sistema sap quan no està a l'alçada i ho passa a humans amb context. Aquest disseny —el "saber callar"— va ser una de les decisions de producte més importants, no una concessió.

**3. El model més car no sempre és el millor.** Vam fer evaluacions amb GPT-4o, Claude Sonnet i GPT-4.1-mini. La diferència de qualitat percebuda pels hostes va ser mínima; la diferència de cost era 3-5x. Per a aquest cas concret, mini era la decisió correcta. Per a un cas de banca o legal, probablement hauria estat al revés.

## Conclusió

Aquest projecte és un cas relativament típic del que fem a MindRise: un problema operatiu real, un disseny acotat a la complexitat necessària, una arquitectura agnòstica de cap eina concreta i resultats mesurables. No és un piloto que mai surt de proves; és un sistema en producció que continua funcionant cada dia.

Si tens un cas similar —tasques operatives repetitives, multidioma, integració amb sistemes externs—, escriu-nos. Et donarem una valoració honesta abans de plantejar res. A vegades el caso justifica un sistema com aquest. Altres vegades una solució més simple ja resol el problema. La diferència entre les dues respostes la sabem després de mirar les dades reals, no abans.`;

const N8N_42H_ES = `Uno de nuestros clientes del sector hostelero —un hotel boutique de unas 50 habitaciones en zona turística alpina europea— llegó a MindRise con un problema que se nota poco pero que pesa mucho en el día a día: el personal de recepción dedicaba unas 2-3 horas diarias a contestar las mismas consultas una y otra vez. Horarios del spa, recomendaciones de restaurantes, cómo llegar al telesilla más cercano, qué hay de meteorología para los próximos días, cómo reservar mesa en el restaurante del hotel. Multiplicado por cuatro idiomas —español, inglés, francés y catalán— y por una temporada alta de cinco meses al año.

El cálculo neto, hecho con el director del hotel, salía a unas **42 horas al mes** de tiempo real de personal cualificado dedicado a tareas repetitivas. Tiempo que no podía destinarse a check-ins, a atención presencial, a problemas reales de los huéspedes ni a coordinar equipos. La dirección lo había identificado como un punto claro de mejora pero no sabía por dónde empezar.

Este artículo explica el caso paso a paso: qué encontramos en el diagnóstico, por qué la solución obvia (un chatbot) no era suficiente, cómo diseñamos la solución que finalmente se implantó y qué resultados medimos a los tres meses de estar en producción.

## El problema en concreto

Cuando analizamos un caso, siempre empezamos pidiendo una muestra del flujo real de una semana. En este hotel, la muestra incluía:

- 87 consultas por WhatsApp en una semana, en cuatro idiomas distintos
- 34 consultas en recepción presencial sobre temas que podían resolverse por mensaje
- 12 llamadas telefónicas de la misma naturaleza
- Una distribución del tiempo media de **8-12 minutos por consulta** (incluyendo búsqueda de información, redacción de la respuesta, posible seguimiento)

El patrón era predecible: el 70% de las consultas se repetía semana tras semana. Recomendaciones de restaurantes a 10 minutos a pie. Horario del telesilla más cercano. Si el spa estaba abierto los domingos. Si había que reservar la cena en el restaurante del hotel. Qué previsión había de nieve para los próximos tres días.

Este perfil de consultas tiene dos características: son **fácilmente automatizables** (respuesta con información estructurada) y, al mismo tiempo, **requieren contexto actualizado** (meteorología de hoy, eventos locales de este fin de semana, horarios que cambian por temporada). No es el típico FAQ estático. Necesitábamos una solución que combinase base de conocimiento propia con acceso a datos en tiempo real.

## Por qué un chatbot estándar no servía

Aquí entra una distinción que siempre intentamos explicar a los clientes antes de proponer nada. Un chatbot tradicional —del tipo que se despliega en una plataforma estándar con tres prompts— habría resuelto el 30-40% de las consultas. Habría sido capaz de responder horarios fijos y preguntas estáticas. Pero habría fallado en el 60% restante: las consultas que requieren acceso a sistemas externos (meteorología, eventos, disponibilidad), las que necesitan redacción multidioma fluida, y las que tienen que derivar a una persona cuando la cosa se complica.

La otra opción extrema —construir un agente complejo con arquitectura de planificación— habría sido sobreingeniería para este caso. No hacía falta que el sistema "razonase" sobre secuencias largas de acciones. Hacía falta que respondiese bien, en cuatro idiomas, con contexto fresco, y que supiese cuándo derivar a recepción.

La conclusión tras el diagnóstico fue clara: necesitábamos una **arquitectura intermedia**. Un sistema con capacidades de agente para hacer consultas externas en tiempo real, pero con un diseño más simple que un agente generalista. Lo que técnicamente llamamos un sistema híbrido, pero que al cliente le explicamos como "un asistente que sabe lo que sabe de tu hotel, busca lo que no sabe cuando lo necesita, y sabe cuándo callar y avisar a tu equipo".

## La solución que diseñamos

La arquitectura final combinó siete componentes clave, cada uno con una función específica:

**WhatsApp Business API** como canal principal. Es donde los huéspedes ya escriben, así que no había que educarlos en una nueva interfaz. Se conectó mediante la API oficial de Meta, no a través de terceros, porque queríamos control completo sobre el flujo de datos y cumpliendo con requisitos de privacidad del hotel.

**Kapso** como capa de orquestación de la conversación. Se encarga de mantener el contexto de una conversación a lo largo del tiempo (un mismo huésped puede escribir el miércoles por la noche y continuar la conversación el jueves por la mañana), gestionar el flujo de turnos, y decidir cuándo derivar a un humano.

**n8n self-hosted** como motor de integraciones. Aquí es donde pasan todas las cosas: conexión con la base de conocimiento del hotel, consultas a servicios externos, lectura y escritura en Google Sheets para registro operativo, gestión de fallbacks. Self-hosted porque los datos de los huéspedes nunca salen de la infraestructura del cliente.

**GPT-4.1-mini** como modelo principal de generación. Era la mejor relación calidad-coste-velocidad para el caso. Modelos más potentes ofrecían marginalmente mejor respuesta a un coste muy superior; modelos más pequeños no mantenían la calidad multilingüe que requeríamos.

**Perplexity** como fuente de información actualizada en tiempo real. Cuando un huésped pregunta por la previsión meteorológica, los eventos de este fin de semana o el precio de los forfaits hoy, Perplexity responde con información al día, no con datos obsoletos del training del modelo.

**Redis** para la gestión de sesiones y memoria a corto plazo de cada conversación.

**PostgreSQL** para el registro persistente de todas las interacciones, sin incluir datos personales identificables. Imprescindible para auditoría, mejora continua y compliance.

Todo el sistema opera en cuatro idiomas con detección automática del primer mensaje. Si un huésped empieza en francés, toda la conversación sigue en francés salvo que cambie explícitamente. La detección fue uno de los puntos más delicados: los primeros mensajes cortos ("Hola") son ambiguos entre catalán y castellano, así que tuvimos que afinar el sistema con reglas de fallback inteligente.

## Resultados medibles a los 3 meses

Tres meses después de la puesta en producción, hicimos la medición objetiva con el director del hotel. Los resultados:

**Reducción de carga de personal: 42 horas/mes** liberadas del personal de recepción en consultas repetitivas. Equivalente a unas 1,4 horas de personal cualificado por día.

**Cobertura de consultas: el 73%** de las consultas entrantes se resuelven completamente por el sistema sin intervención humana. El 27% restante se deriva a recepción con contexto completo, no como "mensaje nuevo": el equipo sabe qué se ha pedido, qué se ha respondido ya y por qué se está derivando.

**Tiempo de respuesta: 4-8 segundos** de media para el 73% automatizado. Antes, los mensajes fuera de horario podían quedar sin respuesta durante 2-6 horas. Ahora la primera respuesta es inmediata 24/7.

**Multidioma efectivo: 4 idiomas** en producción con detección automática. La distribución real fue un 38% castellano, 27% francés, 21% inglés, 14% catalán. Sin el sistema, el hotel solo garantizaba atención fluida en dos idiomas en recepción en horas diurnas.

**Coste operativo: aproximadamente 80€/mes** de costes de IA (modelos + Perplexity + infraestructura compartida). Comparado con el coste de personal liberado, el retorno de inversión fue positivo desde el primer mes.

Estos no son números teóricos: están medidos con datos reales durante tres meses de producción.

## Qué aprendimos

Tres lecciones clave de este proyecto que aplicamos ahora a casos similares:

**1. La detección de idioma vale la pena trabajarla bien.** Los primeros mensajes son cortos y ambiguos. Tuvimos un bug inicial en el que el sistema caía por defecto a un idioma equivocado cuando la sesión de Redis aún no se había creado. Fue un día de debug, pero una vez arreglado, la fiabilidad del sistema multilingüe saltó significativamente.

**2. La integración con el personal humano es tan importante como la automatización.** El 27% de consultas que se derivan no son "fracasos" del sistema. Son exactamente lo que queríamos: el sistema sabe cuándo no está a la altura y lo pasa a humanos con contexto. Este diseño —el "saber callarse"— fue una de las decisiones de producto más importantes, no una concesión.

**3. El modelo más caro no siempre es el mejor.** Hicimos evaluaciones con GPT-4o, Claude Sonnet y GPT-4.1-mini. La diferencia de calidad percibida por los huéspedes fue mínima; la diferencia de coste era 3-5x. Para este caso concreto, mini era la decisión correcta. Para un caso de banca o legal, probablemente habría sido al revés.

## Conclusión

Este proyecto es un caso relativamente típico de lo que hacemos en MindRise: un problema operativo real, un diseño acotado a la complejidad necesaria, una arquitectura agnóstica de cualquier herramienta concreta y resultados medibles. No es un piloto que nunca sale de pruebas; es un sistema en producción que sigue funcionando cada día.

Si tienes un caso similar —tareas operativas repetitivas, multidioma, integración con sistemas externos—, escríbenos. Te daremos una valoración honesta antes de plantear nada. A veces el caso justifica un sistema como este. Otras veces una solución más simple ya resuelve el problema. La diferencia entre las dos respuestas la sabemos después de mirar los datos reales, no antes.`;

const N8N_42H_EN = `One of our hospitality clients —a boutique hotel of around 50 rooms in a European alpine tourist area— came to MindRise with a problem that's barely noticeable but weighs heavily on day-to-day operations: the reception staff spent around 2-3 hours daily answering the same queries over and over again. Spa opening hours, restaurant recommendations, how to get to the nearest chairlift, weather forecasts for the coming days, how to book a table at the hotel restaurant. Multiplied across four languages —Spanish, English, French and Catalan— and across a high season of five months a year.

The net calculation, done with the hotel director, came to around **42 hours per month** of qualified staff time spent on repetitive tasks. Time that couldn't be allocated to check-ins, in-person attention, real guest problems or team coordination. Management had identified it as a clear improvement point but didn't know where to start.

This article explains the case step by step: what we found in the diagnosis, why the obvious solution (a chatbot) wasn't enough, how we designed the solution that was finally implemented and what results we measured three months into production.

## The problem in detail

When we analyse a case, we always start by asking for a sample of a real week's flow. In this hotel, the sample included:

- 87 WhatsApp queries in a week, across four different languages
- 34 in-person reception queries about topics that could be solved by message
- 12 phone calls of the same nature
- An average time distribution of **8-12 minutes per query** (including information lookup, response drafting, possible follow-up)

The pattern was predictable: 70% of queries repeated week after week. Restaurant recommendations 10 minutes' walk away. The nearest chairlift's schedule. Whether the spa was open on Sundays. Whether dinner at the hotel restaurant needed to be reserved. The snow forecast for the next three days.

This query profile has two characteristics: they are **easily automatable** (response with structured information) and, at the same time, **require updated context** (today's weather, this weekend's local events, schedules that change by season). It's not the typical static FAQ. We needed a solution that combined an in-house knowledge base with access to real-time data.

## Why a standard chatbot wouldn't do

This is where a distinction we always try to explain to clients before proposing anything comes in. A traditional chatbot —the kind that gets deployed on a standard platform with three prompts— would have solved 30-40% of queries. It would have been capable of answering fixed schedules and static questions. But it would have failed on the remaining 60%: queries requiring access to external systems (weather, events, availability), those needing fluid multilingual drafting, and those that have to escalate to a person when things get complicated.

The other extreme option —building a complex agent with planning architecture— would have been overengineering for this case. We didn't need the system to "reason" about long sequences of actions. We needed it to respond well, in four languages, with fresh context, and to know when to hand off to reception.

The conclusion after the diagnosis was clear: we needed an **intermediate architecture**. A system with agent capabilities to make external queries in real time, but with a simpler design than a general-purpose agent. What we technically call a hybrid system, but explain to the client as "an assistant that knows what it knows about your hotel, searches for what it doesn't when it needs to, and knows when to keep quiet and alert your team".

## The solution we designed

The final architecture combined seven key components, each with a specific function:

**WhatsApp Business API** as the main channel. It's where guests already write, so there was no need to educate them on a new interface. Connected via Meta's official API, not through third parties, because we wanted complete control over data flow and to meet the hotel's privacy requirements.

**Kapso** as the conversation orchestration layer. It handles maintaining the context of a conversation over time (the same guest can write Wednesday night and continue the conversation Thursday morning), managing turn flow, and deciding when to hand off to a human.

**n8n self-hosted** as the integrations engine. This is where everything happens: connection with the hotel's knowledge base, queries to external services, reading and writing to Google Sheets for operational logging, fallback management. Self-hosted because guest data never leaves the client's infrastructure.

**GPT-4.1-mini** as the main generation model. It was the best quality-cost-speed ratio for the case. More powerful models offered marginally better responses at a much higher cost; smaller models didn't maintain the multilingual quality we required.

**Perplexity** as the source of real-time updated information. When a guest asks about the weather forecast, this weekend's events or today's ski pass price, Perplexity responds with up-to-date information, not stale data from the model's training.

**Redis** for session management and short-term memory of each conversation.

**PostgreSQL** for persistent logging of all interactions, without including personally identifiable data. Essential for audit, continuous improvement and compliance.

The whole system operates in four languages with automatic detection from the first message. If a guest starts in French, the entire conversation continues in French unless they explicitly switch. Detection was one of the trickiest points: short opening messages ("Hi") are ambiguous between Catalan and Spanish, so we had to tune the system with intelligent fallback rules.

## Measurable results at 3 months

Three months after going to production, we did the objective measurement with the hotel director. The results:

**Staff workload reduction: 42 hours/month** freed from reception staff on repetitive queries. Equivalent to about 1.4 hours of qualified staff per day.

**Query coverage: 73%** of incoming queries are resolved completely by the system with no human intervention. The remaining 27% gets escalated to reception with full context, not as a "new message": the team knows what's been asked, what's already been answered, and why it's being escalated.

**Response time: 4-8 seconds** average for the 73% automated. Before, after-hours messages could go unanswered for 2-6 hours. Now the first response is immediate 24/7.

**Effective multilingual: 4 languages** in production with automatic detection. The actual distribution was 38% Spanish, 27% French, 21% English, 14% Catalan. Without the system, the hotel only guaranteed fluid attention in two languages at reception during daytime hours.

**Operational cost: approximately €80/month** in AI costs (models + Perplexity + shared infrastructure). Compared to the cost of staff time freed, ROI was positive from the first month.

These aren't theoretical numbers: they're measured with real data over three months of production.

## What we learned

Three key lessons from this project that we now apply to similar cases:

**1. Language detection is worth working on properly.** First messages are short and ambiguous. We had an initial bug where the system defaulted to the wrong language when the Redis session hadn't yet been created. It was a day of debugging, but once fixed, the reliability of the multilingual system jumped significantly.

**2. Integration with human staff is as important as automation.** The 27% of queries that get escalated aren't system "failures". They're exactly what we wanted: the system knows when it's not up to it and passes it to humans with context. This design —the "knowing when to be quiet"— was one of the most important product decisions, not a concession.

**3. The most expensive model isn't always the best.** We did evaluations with GPT-4o, Claude Sonnet and GPT-4.1-mini. The quality difference perceived by guests was minimal; the cost difference was 3-5x. For this specific case, mini was the right decision. For a banking or legal case, it would probably have been the other way around.

## Conclusion

This project is a relatively typical case of what we do at MindRise: a real operational problem, a design scoped to the necessary complexity, an architecture agnostic to any specific tool, and measurable results. It's not a pilot that never leaves testing; it's a system in production that keeps working every day.

If you have a similar case —repetitive operational tasks, multilingual, integration with external systems—, get in touch. We'll give you an honest assessment before proposing anything. Sometimes the case justifies a system like this. Other times a simpler solution already solves the problem. The difference between the two answers is something we know after looking at the real data, not before.`;

const N8N_42H_FR = `L'un de nos clients dans l'hôtellerie —un hôtel boutique d'environ 50 chambres en zone touristique alpine européenne— est arrivé chez MindRise avec un problème qui se voit peu mais qui pèse beaucoup au quotidien : le personnel de réception consacrait environ 2-3 heures par jour à répondre aux mêmes demandes encore et encore. Horaires du spa, recommandations de restaurants, comment se rendre au télésiège le plus proche, prévisions météo pour les prochains jours, comment réserver une table au restaurant de l'hôtel. Multiplié par quatre langues —espagnol, anglais, français et catalan— et par une haute saison de cinq mois par an.

Le calcul net, fait avec le directeur de l'hôtel, donnait environ **42 heures par mois** de temps réel de personnel qualifié consacré à des tâches répétitives. Du temps qui ne pouvait être consacré aux check-ins, à l'accueil en personne, à de vrais problèmes des clients ni à la coordination des équipes. La direction l'avait identifié comme un point d'amélioration clair mais ne savait pas par où commencer.

Cet article explique le cas pas à pas : ce que nous avons trouvé lors du diagnostic, pourquoi la solution évidente (un chatbot) ne suffisait pas, comment nous avons conçu la solution qui a finalement été implantée et quels résultats nous avons mesurés trois mois après la mise en production.

## Le problème en détail

Quand nous analysons un cas, nous commençons toujours par demander un échantillon du flux réel d'une semaine. Dans cet hôtel, l'échantillon comprenait :

- 87 demandes par WhatsApp en une semaine, dans quatre langues différentes
- 34 demandes à la réception en personne sur des sujets qui pouvaient être résolus par message
- 12 appels téléphoniques de même nature
- Une distribution moyenne du temps de **8-12 minutes par demande** (incluant recherche d'informations, rédaction de la réponse, suivi éventuel)

Le schéma était prévisible : 70 % des demandes se répétaient semaine après semaine. Recommandations de restaurants à 10 minutes à pied. Horaires du télésiège le plus proche. Si le spa était ouvert le dimanche. S'il fallait réserver le dîner au restaurant de l'hôtel. Quelles étaient les prévisions de neige pour les trois prochains jours.

Ce profil de demandes a deux caractéristiques : elles sont **facilement automatisables** (réponse avec information structurée) et, en même temps, **nécessitent un contexte actualisé** (météo d'aujourd'hui, événements locaux de ce week-end, horaires qui changent selon la saison). Ce n'est pas la typique FAQ statique. Nous avions besoin d'une solution qui combinait une base de connaissances propre avec un accès aux données en temps réel.

## Pourquoi un chatbot standard ne convenait pas

C'est ici qu'intervient une distinction que nous essayons toujours d'expliquer aux clients avant de proposer quoi que ce soit. Un chatbot traditionnel —du type déployé sur une plateforme standard avec trois prompts— aurait résolu 30-40 % des demandes. Il aurait été capable de répondre aux horaires fixes et aux questions statiques. Mais il aurait échoué sur les 60 % restants : les demandes qui nécessitent un accès aux systèmes externes (météo, événements, disponibilité), celles qui requièrent une rédaction multilingue fluide, et celles qui doivent être transférées à une personne quand les choses se compliquent.

L'autre option extrême —construire un agent complexe avec architecture de planification— aurait été du sur-engineering pour ce cas. Il n'était pas nécessaire que le système « raisonne » sur de longues séquences d'actions. Il fallait qu'il réponde bien, en quatre langues, avec un contexte frais, et qu'il sache quand transférer à la réception.

La conclusion après le diagnostic était claire : nous avions besoin d'une **architecture intermédiaire**. Un système avec des capacités d'agent pour faire des requêtes externes en temps réel, mais avec un design plus simple qu'un agent généraliste. Ce que nous appelons techniquement un système hybride, mais que nous expliquons au client comme « un assistant qui sait ce qu'il sait sur votre hôtel, cherche ce qu'il ne sait pas quand il en a besoin, et sait quand se taire et prévenir votre équipe ».

## La solution que nous avons conçue

L'architecture finale combinait sept composants clés, chacun avec une fonction spécifique :

**WhatsApp Business API** comme canal principal. C'est là que les clients écrivent déjà, donc il n'était pas nécessaire de les éduquer à une nouvelle interface. Connecté via l'API officielle de Meta, pas via des tiers, parce que nous voulions un contrôle complet sur le flux de données et le respect des exigences de confidentialité de l'hôtel.

**Kapso** comme couche d'orchestration de la conversation. Elle se charge de maintenir le contexte d'une conversation au fil du temps (un même client peut écrire mercredi soir et continuer la conversation jeudi matin), gérer le flux des tours, et décider quand transférer à un humain.

**n8n self-hosted** comme moteur d'intégrations. C'est là que tout se passe : connexion avec la base de connaissances de l'hôtel, requêtes aux services externes, lecture et écriture sur Google Sheets pour le registre opérationnel, gestion des fallbacks. Self-hosted parce que les données des clients ne quittent jamais l'infrastructure du client.

**GPT-4.1-mini** comme modèle principal de génération. C'était le meilleur rapport qualité-coût-vitesse pour le cas. Des modèles plus puissants offraient des réponses marginalement meilleures à un coût bien plus élevé ; des modèles plus petits ne maintenaient pas la qualité multilingue dont nous avions besoin.

**Perplexity** comme source d'information actualisée en temps réel. Quand un client demande les prévisions météo, les événements de ce week-end ou le prix des forfaits aujourd'hui, Perplexity répond avec des informations à jour, pas avec des données obsolètes issues de l'entraînement du modèle.

**Redis** pour la gestion des sessions et la mémoire à court terme de chaque conversation.

**PostgreSQL** pour l'enregistrement persistant de toutes les interactions, sans inclure de données personnelles identifiables. Indispensable pour l'audit, l'amélioration continue et la compliance.

L'ensemble du système opère en quatre langues avec détection automatique dès le premier message. Si un client commence en français, toute la conversation continue en français sauf changement explicite. La détection a été l'un des points les plus délicats : les premiers messages courts (« Bonjour ») sont ambigus entre le catalan et l'espagnol, nous avons donc dû affiner le système avec des règles de fallback intelligentes.

## Résultats mesurables à 3 mois

Trois mois après la mise en production, nous avons fait la mesure objective avec le directeur de l'hôtel. Les résultats :

**Réduction de la charge de personnel : 42 heures/mois** libérées du personnel de réception sur des demandes répétitives. Équivalent à environ 1,4 heure de personnel qualifié par jour.

**Couverture des demandes : 73 %** des demandes entrantes sont résolues complètement par le système sans intervention humaine. Les 27 % restants sont transférés à la réception avec un contexte complet, pas comme un « nouveau message » : l'équipe sait ce qui a été demandé, ce qui a déjà été répondu et pourquoi le transfert a lieu.

**Temps de réponse : 4-8 secondes** en moyenne pour les 73 % automatisés. Avant, les messages en dehors des heures pouvaient rester sans réponse pendant 2-6 heures. Maintenant la première réponse est immédiate 24/7.

**Multilingue effectif : 4 langues** en production avec détection automatique. La distribution réelle a été de 38 % espagnol, 27 % français, 21 % anglais, 14 % catalan. Sans le système, l'hôtel ne garantissait une attention fluide qu'en deux langues à la réception aux heures de jour.

**Coût opérationnel : environ 80€/mois** de coûts d'IA (modèles + Perplexity + infrastructure partagée). Comparé au coût du personnel libéré, le retour sur investissement a été positif dès le premier mois.

Ce ne sont pas des chiffres théoriques : ils sont mesurés avec des données réelles sur trois mois de production.

## Ce que nous avons appris

Trois leçons clés de ce projet que nous appliquons maintenant à des cas similaires :

**1. La détection de langue mérite d'être bien travaillée.** Les premiers messages sont courts et ambigus. Nous avons eu un bug initial où le système retombait par défaut sur la mauvaise langue quand la session Redis n'avait pas encore été créée. Une journée de debug, mais une fois corrigé, la fiabilité du système multilingue a fait un bond significatif.

**2. L'intégration avec le personnel humain est aussi importante que l'automatisation.** Les 27 % de demandes transférées ne sont pas des « échecs » du système. Ils sont exactement ce que nous voulions : le système sait quand il n'est pas à la hauteur et le transmet à des humains avec contexte. Ce design —le « savoir se taire »— a été l'une des décisions produit les plus importantes, pas une concession.

**3. Le modèle le plus cher n'est pas toujours le meilleur.** Nous avons fait des évaluations avec GPT-4o, Claude Sonnet et GPT-4.1-mini. La différence de qualité perçue par les clients était minime ; la différence de coût était de 3-5x. Pour ce cas concret, mini était la bonne décision. Pour un cas bancaire ou juridique, cela aurait probablement été l'inverse.

## Conclusion

Ce projet est un cas relativement typique de ce que nous faisons chez MindRise : un problème opérationnel réel, un design adapté à la complexité nécessaire, une architecture agnostique vis-à-vis de tout outil spécifique et des résultats mesurables. Ce n'est pas un pilote qui ne quitte jamais les tests ; c'est un système en production qui continue à fonctionner chaque jour.

Si vous avez un cas similaire —tâches opérationnelles répétitives, multilingue, intégration avec des systèmes externes—, écrivez-nous. Nous vous donnerons une évaluation honnête avant de proposer quoi que ce soit. Parfois le cas justifie un système comme celui-ci. D'autres fois une solution plus simple résout déjà le problème. La différence entre les deux réponses, nous la connaissons après avoir regardé les données réelles, pas avant.`;

const HANDOVER_CA = `No hem hagut de rescatar encara cap client d'un projecte d'IA mal lliurat. Hem vist sistemes mal documentats en altres contextos, sabem el cost real que té heretar-los, i per això tractem cada entrega com si el client hagués de continuar amb un altre proveïdor demà, encara que no sigui així.

Aquesta forma de pensar canvia com es dissenya el projecte des del principi. No s'escriu codi pensant "ja documentarem al final", no es deixen credencials en arxius personals, no s'utilitzen serveis que només una persona del nostre equip sap configurar. Cada decisió tècnica passa per un filtre senzill: si demà el client volgués portar-se aquest sistema a casa, podria fer-ho?

Aquest article explica per què els handovers en projectes d'IA són més complexos que en altres sistemes, què hauria d'incloure una entrega ben feta, i quines són les senyals d'alerta abans de signar amb qualsevol proveïdor que prometi "sistemes intel·ligents".

## Per què un handover d'IA és més complex que un altre

En un projecte web tradicional, un handover ben fet implica codi documentat, accessos i un README clar. La gran majoria del coneixement està en el codi: si una persona nova el llegeix, en pot deduir què fa el sistema i com mantenir-lo.

En un projecte d'IA, això no és suficient. **El comportament del sistema no està només al codi**: està en els prompts, en les configuracions del model, en les eines connectades, en els fluxos d'orquestració, en els evals que defineixen què és una resposta correcta i en les decisions arquitectòniques que sovint només es justifiquen amb el context del cas concret. Un nou equip pot llegir el codi i entendre què fa cada funció, però sense documentació addicional no entendrà per què es va decidir aquell prompt, aquell model o aquella seqüència d'accions.

A això s'hi suma un altre factor: els sistemes d'IA són **sistemes vius**, no estàtics. Calen evals periòdiques, ajustos quan el comportament deriva, decisions sobre quan actualitzar models. Sense traspàs adequat d'aquesta capa operativa, el sistema funcionarà el primer mes i començarà a degradar-se lentament el segon o tercer, sense que el client sàpiga per què.

Un handover de qualitat ha de cobrir totes aquestes capes, no només el codi.

## Els sis elements d'un handover ben fet

A partir de la nostra experiència construint sistemes d'IA i de la pràctica de tractar cada projecte com si fos lliurable demà, aquests són els sis elements que considerem imprescindibles en una entrega tècnica seriosa:

**1. Documentació tècnica completa.** No és un README de tres línies. És un conjunt estructurat que inclou: arquitectura del sistema (què hi ha, què fa cada part, com es comuniquen), decisions tècniques rellevants (per què aquest model, per què aquesta base de dades, per què aquesta orquestració), runbooks operatius (què fer quan falla X, com diagnosticar Y), i diagrames quan són útils. Si un enginyer sènior pot llegir-ho i entendre el sistema en una tarda, està ben fet.

**2. Accés total a credencials i comptes.** Tots els comptes, APIs, tokens, repositoris i serveis han d'estar en propietat del client, no del proveïdor. Sembla obvi però és el primer punt on molts handovers fallen: el compte de l'API està a nom del proveïdor, el repositori està al seu GitHub personal, el monitor està a un servei que el proveïdor paga. Quan el client vol marxar, té un sistema però no en té control. Un handover ben fet inverteix aquesta situació: el client té tot, el proveïdor només té accés mentre dura la relació.

**3. Tests automatitzats i sistema d'evals.** En IA, els evals són tan importants com els tests unitaris en software tradicional. Permeten validar que el sistema continua prenent decisions correctes quan algú toca el codi, canvia un model o ajusta un prompt. Sense evals, qualsevol modificació al sistema és un acte de fe. Un handover ben fet inclou una bateria d'evals executable amb un sol comando, datasets de test pròpies del cas i criteris clars d'èxit.

**4. Sessió de transferència presencial o per videoconferència.** La documentació és necessària però no suficient. Una sessió de 2-3 hores amb l'equip tècnic del client, on s'explica el sistema, es fan demostracions reals i es resolen dubtes, val per cinquanta pàgines de documentació. És on es transfereix el coneixement tàcit: aquelles coses que ningú escriu però que tothom necessita saber per operar el sistema.

**5. Període d'acompanyament posterior.** Un sistema mai es lliura "tancat". Sempre apareixen dubtes, comportaments inesperats o necessitats noves en els primers mesos. Un handover ben fet inclou un període de suport posterior —típicament entre 1 i 3 mesos— on l'equip que va construir el sistema queda disponible per a consultes. No és un servei premium amagat: és part de la responsabilitat del proveïdor que va construir el sistema.

**6. Pla de manteniment documentat.** Què cal fer cada setmana, cada mes, cada trimestre per mantenir el sistema saludable: revisar evals, mirar logs d'errors, comprovar costos, actualitzar dependències crítiques. Un pla de manteniment clar permet al client decidir si vol portar-ho internament o contractar manteniment a algú —al mateix proveïdor o a un altre—. La clau és que pugui escollir amb informació, no amb desconeixement.

## Senyals d'alerta abans de signar amb un proveïdor

Si estàs avaluant proveïdors per a un projecte d'IA, aquí van quatre senyals d'alerta que indiquen que probablement no rebràs un handover decent:

**Senyal 1: el proveïdor parla només de la demo i no de com es manté en producció.** Si en les reunions comercials es dediquen 90% del temps a ensenyar què bonic queda el sistema funcionant i 10% (o menys) a explicar com s'opera, com es mesura i com es manté, és senyal que la seva mentalitat és "lliurar i marxar", no construir alguna cosa que duri.

**Senyal 2: al pressupost no hi ha cap partida de documentació, transferència o període d'acompanyament.** Si el pressupost inclou només desenvolupament i res més, vol dir que el proveïdor està pensant en mínim viable per cobrar i marxar. Un proveïdor seriós considera la documentació i la transferència com una part integral del projecte, no com un servei addicional.

**Senyal 3: et demanen signar un contracte on només ells tenen accés al codi o a infraestructura.** Si la propietat intel·lectual no queda clarament al client, o si els comptes principals queden a nom del proveïdor, t'estan creant dependència estructural des del minut zero. Un proveïdor seriós insisteix que tot quedi a nom del client des de l'inici.

**Senyal 4: t'ofereixen un manteniment mensual obligatori sense opció de sortir o canviar de mans.** Hi ha proveïdors que estructuren els contractes perquè el client quedi atrapat: només ells poden mantenir el sistema, només ells tenen accés, només ells coneixen com funciona. Aquesta no és una relació comercial, és una hipoteca tècnica. Un proveïdor seriós ofereix manteniment com una opció més, no com una necessitat imposada per disseny.

## Per què escrivim sobre això sense haver hagut de rescatar ningú

Reconeixem que aquest article no es basa en l'experiència d'haver rescatat clients de proveïdors anteriors. Es basa en el criteri tècnic acumulat construint sistemes que volem que sobrevisquin a la nostra relació amb el client. Cada decisió que prenem en un projecte passa per la pregunta: si demà aquest client volgués portar-se el sistema, podria? La resposta ha de ser sempre sí.

Aquest enfocament té un cost. Significa més temps en documentació, més temps en sessions de transferència, més rigor en com es gestionen accessos i comptes. Però el cost val la pena: és el que diferencia un proveïdor que tracta cada projecte com una venda d'algú que el tracta com una relació professional.

Si estàs avaluant proveïdors per a un projecte d'IA, fes-los aquestes preguntes abans de signar: com seria un handover si demà decidíssim canviar de proveïdor? Quina documentació rebríem? Quins accessos? Hi ha període d'acompanyament inclòs? Si les respostes són vagues o defensives, ja saps el que cal saber.

Si vols parlar amb nosaltres d'un projecte concret —el teu o un que estàs avaluant—, escriu-nos. Tinguis o no tinguis intenció d'acabar treballant amb MindRise, una valoració honesta del plantejament pot estalviar-te problemes importants més endavant.`;

const HANDOVER_ES = `Aún no hemos tenido que rescatar a ningún cliente de un proyecto de IA mal entregado. Hemos visto sistemas mal documentados en otros contextos, sabemos el coste real que tiene heredarlos, y por eso tratamos cada entrega como si el cliente fuera a continuar con otro proveedor mañana, aunque no sea así.

Esta forma de pensar cambia cómo se diseña el proyecto desde el principio. No se escribe código pensando "ya documentaremos al final", no se dejan credenciales en archivos personales, no se utilizan servicios que solo una persona de nuestro equipo sabe configurar. Cada decisión técnica pasa por un filtro sencillo: si mañana el cliente quisiera llevarse este sistema a casa, ¿podría hacerlo?

Este artículo explica por qué los handovers en proyectos de IA son más complejos que en otros sistemas, qué debería incluir una entrega bien hecha, y cuáles son las señales de alerta antes de firmar con cualquier proveedor que prometa "sistemas inteligentes".

## Por qué un handover de IA es más complejo que otro

En un proyecto web tradicional, un handover bien hecho implica código documentado, accesos y un README claro. La gran mayoría del conocimiento está en el código: si una persona nueva lo lee, puede deducir qué hace el sistema y cómo mantenerlo.

En un proyecto de IA, eso no es suficiente. **El comportamiento del sistema no está solo en el código**: está en los prompts, en las configuraciones del modelo, en las herramientas conectadas, en los flujos de orquestación, en los evals que definen qué es una respuesta correcta y en las decisiones arquitectónicas que a menudo solo se justifican con el contexto del caso concreto. Un nuevo equipo puede leer el código y entender qué hace cada función, pero sin documentación adicional no entenderá por qué se decidió aquel prompt, aquel modelo o aquella secuencia de acciones.

A esto se le suma otro factor: los sistemas de IA son **sistemas vivos**, no estáticos. Hacen falta evals periódicos, ajustes cuando el comportamiento deriva, decisiones sobre cuándo actualizar modelos. Sin traspaso adecuado de esta capa operativa, el sistema funcionará el primer mes y empezará a degradarse lentamente el segundo o tercero, sin que el cliente sepa por qué.

Un handover de calidad debe cubrir todas estas capas, no solo el código.

## Los seis elementos de un handover bien hecho

A partir de nuestra experiencia construyendo sistemas de IA y de la práctica de tratar cada proyecto como si fuera entregable mañana, estos son los seis elementos que consideramos imprescindibles en una entrega técnica seria:

**1. Documentación técnica completa.** No es un README de tres líneas. Es un conjunto estructurado que incluye: arquitectura del sistema (qué hay, qué hace cada parte, cómo se comunican), decisiones técnicas relevantes (por qué este modelo, por qué esta base de datos, por qué esta orquestación), runbooks operativos (qué hacer cuando falla X, cómo diagnosticar Y), y diagramas cuando son útiles. Si un ingeniero senior puede leerlo y entender el sistema en una tarde, está bien hecho.

**2. Acceso total a credenciales y cuentas.** Todas las cuentas, APIs, tokens, repositorios y servicios deben estar en propiedad del cliente, no del proveedor. Parece obvio pero es el primer punto donde muchos handovers fallan: la cuenta de la API está a nombre del proveedor, el repositorio está en su GitHub personal, el monitor está en un servicio que el proveedor paga. Cuando el cliente quiere marcharse, tiene un sistema pero no tiene control sobre él. Un handover bien hecho invierte esta situación: el cliente lo tiene todo, el proveedor solo tiene acceso mientras dura la relación.

**3. Tests automatizados y sistema de evals.** En IA, los evals son tan importantes como los tests unitarios en software tradicional. Permiten validar que el sistema sigue tomando decisiones correctas cuando alguien toca el código, cambia un modelo o ajusta un prompt. Sin evals, cualquier modificación al sistema es un acto de fe. Un handover bien hecho incluye una batería de evals ejecutable con un solo comando, datasets de test propios del caso y criterios claros de éxito.

**4. Sesión de transferencia presencial o por videoconferencia.** La documentación es necesaria pero no suficiente. Una sesión de 2-3 horas con el equipo técnico del cliente, donde se explica el sistema, se hacen demostraciones reales y se resuelven dudas, vale por cincuenta páginas de documentación. Es donde se transfiere el conocimiento tácito: aquellas cosas que nadie escribe pero que todo el mundo necesita saber para operar el sistema.

**5. Periodo de acompañamiento posterior.** Un sistema nunca se entrega "cerrado". Siempre aparecen dudas, comportamientos inesperados o necesidades nuevas en los primeros meses. Un handover bien hecho incluye un periodo de soporte posterior —típicamente entre 1 y 3 meses— donde el equipo que construyó el sistema queda disponible para consultas. No es un servicio premium escondido: es parte de la responsabilidad del proveedor que construyó el sistema.

**6. Plan de mantenimiento documentado.** Qué hay que hacer cada semana, cada mes, cada trimestre para mantener el sistema saludable: revisar evals, mirar logs de errores, comprobar costes, actualizar dependencias críticas. Un plan de mantenimiento claro permite al cliente decidir si quiere llevarlo internamente o contratar mantenimiento a alguien —al mismo proveedor o a otro—. La clave es que pueda escoger con información, no con desconocimiento.

## Señales de alerta antes de firmar con un proveedor

Si estás evaluando proveedores para un proyecto de IA, aquí van cuatro señales de alerta que indican que probablemente no recibirás un handover decente:

**Señal 1: el proveedor habla solo de la demo y no de cómo se mantiene en producción.** Si en las reuniones comerciales se dedican 90% del tiempo a enseñar lo bonito que queda el sistema funcionando y 10% (o menos) a explicar cómo se opera, cómo se mide y cómo se mantiene, es señal de que su mentalidad es "entregar y marcharse", no construir algo que dure.

**Señal 2: en el presupuesto no hay ninguna partida de documentación, transferencia o periodo de acompañamiento.** Si el presupuesto incluye solo desarrollo y nada más, significa que el proveedor está pensando en mínimo viable para cobrar y marcharse. Un proveedor serio considera la documentación y la transferencia como parte integral del proyecto, no como un servicio adicional.

**Señal 3: te piden firmar un contrato donde solo ellos tienen acceso al código o a la infraestructura.** Si la propiedad intelectual no queda claramente en el cliente, o si las cuentas principales quedan a nombre del proveedor, te están creando dependencia estructural desde el minuto cero. Un proveedor serio insiste en que todo quede a nombre del cliente desde el inicio.

**Señal 4: te ofrecen un mantenimiento mensual obligatorio sin opción de salir o cambiar de manos.** Hay proveedores que estructuran los contratos para que el cliente quede atrapado: solo ellos pueden mantener el sistema, solo ellos tienen acceso, solo ellos conocen cómo funciona. Esto no es una relación comercial, es una hipoteca técnica. Un proveedor serio ofrece mantenimiento como una opción más, no como una necesidad impuesta por diseño.

## Por qué escribimos sobre esto sin haber tenido que rescatar a nadie

Reconocemos que este artículo no se basa en la experiencia de haber rescatado clientes de proveedores anteriores. Se basa en el criterio técnico acumulado construyendo sistemas que queremos que sobrevivan a nuestra relación con el cliente. Cada decisión que tomamos en un proyecto pasa por la pregunta: si mañana este cliente quisiera llevarse el sistema, ¿podría? La respuesta siempre debe ser sí.

Este enfoque tiene un coste. Significa más tiempo en documentación, más tiempo en sesiones de transferencia, más rigor en cómo se gestionan accesos y cuentas. Pero el coste vale la pena: es lo que diferencia a un proveedor que trata cada proyecto como una venta de alguien que lo trata como una relación profesional.

Si estás evaluando proveedores para un proyecto de IA, hazles estas preguntas antes de firmar: ¿cómo sería un handover si mañana decidiéramos cambiar de proveedor? ¿Qué documentación recibiríamos? ¿Qué accesos? ¿Hay periodo de acompañamiento incluido? Si las respuestas son vagas o defensivas, ya sabes lo que necesitas saber.

Si quieres hablar con nosotros de un proyecto concreto —el tuyo o uno que estás evaluando—, escríbenos. Tengas o no tengas intención de acabar trabajando con MindRise, una valoración honesta del planteamiento puede ahorrarte problemas importantes más adelante.`;

const HANDOVER_EN = `We haven't yet had to rescue a client from a poorly delivered AI project. We've seen badly documented systems in other contexts, we know the real cost of inheriting them, and that's why we treat every delivery as if the client would be continuing with another vendor tomorrow, even when that's not the case.

This way of thinking changes how the project is designed from the start. You don't write code thinking "we'll document at the end", you don't leave credentials in personal files, you don't use services that only one person on our team knows how to configure. Every technical decision passes through a simple filter: if tomorrow the client wanted to take this system home, could they?

This article explains why handovers in AI projects are more complex than in other systems, what a well-done delivery should include, and what the warning signs are before signing with any vendor promising "intelligent systems".

## Why an AI handover is more complex than others

In a traditional web project, a well-done handover involves documented code, access credentials and a clear README. Most knowledge is in the code: if a new person reads it, they can deduce what the system does and how to maintain it.

In an AI project, that isn't enough. **The system's behaviour isn't only in the code**: it's in the prompts, in the model configurations, in the connected tools, in the orchestration flows, in the evals that define what a correct response looks like and in the architectural decisions that often only make sense with the context of the specific case. A new team can read the code and understand what each function does, but without additional documentation they won't understand why this prompt, this model or this sequence of actions was chosen.

On top of that, there's another factor: AI systems are **living systems**, not static. They need periodic evals, adjustments when behaviour drifts, decisions about when to update models. Without proper handover of this operational layer, the system will work the first month and start degrading slowly the second or third, without the client knowing why.

A quality handover must cover all of these layers, not just the code.

## The six elements of a well-done handover

Based on our experience building AI systems and the practice of treating every project as if it were deliverable tomorrow, these are the six elements we consider essential in a serious technical delivery:

**1. Complete technical documentation.** It's not a three-line README. It's a structured collection that includes: system architecture (what exists, what each part does, how they communicate), relevant technical decisions (why this model, why this database, why this orchestration), operational runbooks (what to do when X fails, how to diagnose Y), and diagrams where useful. If a senior engineer can read it and understand the system in an afternoon, it's well done.

**2. Full access to credentials and accounts.** All accounts, APIs, tokens, repositories and services must belong to the client, not the vendor. It sounds obvious but it's the first point where many handovers fail: the API account is under the vendor's name, the repository is on their personal GitHub, the monitor is on a service the vendor pays for. When the client wants to leave, they have a system but no control over it. A well-done handover reverses this: the client has everything, the vendor only has access while the relationship lasts.

**3. Automated tests and evals system.** In AI, evals are as important as unit tests in traditional software. They let you validate that the system keeps making correct decisions when someone touches the code, changes a model or adjusts a prompt. Without evals, any modification to the system is an act of faith. A well-done handover includes an eval suite runnable with a single command, test datasets specific to the case, and clear success criteria.

**4. In-person or video transfer session.** Documentation is necessary but not sufficient. A 2-3 hour session with the client's technical team, where the system is explained, real demonstrations are made and questions are answered, is worth fifty pages of documentation. It's where tacit knowledge is transferred: those things no one writes down but everyone needs to know to operate the system.

**5. Post-delivery support period.** A system is never delivered "closed". Questions, unexpected behaviours or new needs always appear in the first few months. A well-done handover includes a post-delivery support period —typically between 1 and 3 months— during which the team that built the system remains available for queries. It's not a hidden premium service: it's part of the responsibility of the vendor who built the system.

**6. Documented maintenance plan.** What needs to be done weekly, monthly, quarterly to keep the system healthy: review evals, check error logs, monitor costs, update critical dependencies. A clear maintenance plan lets the client decide whether to handle it internally or hire maintenance from someone —the same vendor or another. The key is being able to choose with information, not with ignorance.

## Warning signs before signing with a vendor

If you're evaluating vendors for an AI project, here are four warning signs that indicate you probably won't receive a decent handover:

**Sign 1: the vendor talks only about the demo and not about how it's maintained in production.** If in commercial meetings 90% of the time is spent showing how beautiful the system looks running and 10% (or less) explaining how it's operated, measured and maintained, that's a sign their mindset is "deliver and leave", not build something that lasts.

**Sign 2: the budget has no line for documentation, transfer or post-delivery support.** If the budget only includes development and nothing else, it means the vendor is thinking minimum viable to charge and leave. A serious vendor considers documentation and transfer as integral parts of the project, not as additional services.

**Sign 3: they ask you to sign a contract where only they have access to the code or infrastructure.** If intellectual property doesn't clearly stay with the client, or if main accounts remain under the vendor's name, they're creating structural dependence from minute zero. A serious vendor insists that everything stays under the client's name from the start.

**Sign 4: they offer mandatory monthly maintenance with no option to exit or switch hands.** There are vendors who structure contracts so the client stays trapped: only they can maintain the system, only they have access, only they know how it works. This isn't a commercial relationship, it's a technical mortgage. A serious vendor offers maintenance as one option among others, not as a need imposed by design.

## Why we write about this without having had to rescue anyone

We acknowledge that this article isn't based on the experience of having rescued clients from previous vendors. It's based on the technical judgement accumulated building systems that we want to survive our relationship with the client. Every decision we make in a project passes through the question: if tomorrow this client wanted to take the system, could they? The answer must always be yes.

This approach has a cost. It means more time in documentation, more time in transfer sessions, more rigour in how accesses and accounts are managed. But the cost is worth it: it's what distinguishes a vendor who treats each project as a sale from one who treats it as a professional relationship.

If you're evaluating vendors for an AI project, ask them these questions before signing: what would a handover look like if tomorrow we decided to change vendors? What documentation would we receive? What access? Is a post-delivery support period included? If the answers are vague or defensive, you already know what you need to know.

If you want to talk to us about a specific project —yours or one you're evaluating—, get in touch. Whether or not you end up working with MindRise, an honest assessment of the approach can save you significant problems down the road.`;

const HANDOVER_FR = `Nous n'avons pas encore eu à sauver un client d'un projet d'IA mal livré. Nous avons vu des systèmes mal documentés dans d'autres contextes, nous connaissons le coût réel d'en hériter, et c'est pourquoi nous traitons chaque livraison comme si le client devait continuer avec un autre fournisseur demain, même si ce n'est pas le cas.

Cette façon de penser change la conception du projet dès le départ. On n'écrit pas du code en se disant « on documentera à la fin », on ne laisse pas les credentials dans des fichiers personnels, on n'utilise pas des services que seule une personne de notre équipe sait configurer. Chaque décision technique passe par un filtre simple : si demain le client voulait emporter ce système chez lui, pourrait-il le faire ?

Cet article explique pourquoi les handovers dans des projets d'IA sont plus complexes que dans d'autres systèmes, ce que devrait inclure une livraison bien faite, et quels sont les signaux d'alerte avant de signer avec n'importe quel fournisseur qui promet des « systèmes intelligents ».

## Pourquoi un handover d'IA est plus complexe qu'un autre

Dans un projet web traditionnel, un handover bien fait implique du code documenté, des accès et un README clair. La grande majorité des connaissances se trouve dans le code : si une nouvelle personne le lit, elle peut en déduire ce que fait le système et comment le maintenir.

Dans un projet d'IA, cela ne suffit pas. **Le comportement du système ne se trouve pas seulement dans le code** : il se trouve dans les prompts, dans les configurations du modèle, dans les outils connectés, dans les flux d'orchestration, dans les évaluations qui définissent ce qu'est une bonne réponse et dans les décisions architecturales qui ne se justifient souvent qu'avec le contexte du cas concret. Une nouvelle équipe peut lire le code et comprendre ce que fait chaque fonction, mais sans documentation supplémentaire elle ne comprendra pas pourquoi ce prompt, ce modèle ou cette séquence d'actions ont été choisis.

À cela s'ajoute un autre facteur : les systèmes d'IA sont **des systèmes vivants**, pas statiques. Il faut des évaluations périodiques, des ajustements quand le comportement dérive, des décisions sur quand mettre à jour les modèles. Sans transmission adéquate de cette couche opérationnelle, le système fonctionnera le premier mois et commencera à se dégrader lentement le deuxième ou le troisième, sans que le client sache pourquoi.

Un handover de qualité doit couvrir toutes ces couches, pas seulement le code.

## Les six éléments d'un handover bien fait

À partir de notre expérience à construire des systèmes d'IA et de la pratique de traiter chaque projet comme s'il était livrable demain, voici les six éléments que nous considérons indispensables dans une livraison technique sérieuse :

**1. Documentation technique complète.** Ce n'est pas un README de trois lignes. C'est un ensemble structuré qui inclut : l'architecture du système (ce qu'il y a, ce que fait chaque partie, comment elles communiquent), les décisions techniques pertinentes (pourquoi ce modèle, pourquoi cette base de données, pourquoi cette orchestration), les runbooks opérationnels (que faire quand X échoue, comment diagnostiquer Y), et des schémas quand ils sont utiles. Si un ingénieur senior peut le lire et comprendre le système en un après-midi, c'est bien fait.

**2. Accès total aux credentials et aux comptes.** Tous les comptes, APIs, tokens, dépôts et services doivent appartenir au client, pas au fournisseur. Cela semble évident mais c'est le premier point où de nombreux handovers échouent : le compte de l'API est au nom du fournisseur, le dépôt est sur son GitHub personnel, le monitoring est sur un service que le fournisseur paie. Quand le client veut partir, il a un système mais n'en a pas le contrôle. Un handover bien fait inverse cette situation : le client a tout, le fournisseur n'a accès que pendant que dure la relation.

**3. Tests automatisés et système d'évaluations.** En IA, les évaluations sont aussi importantes que les tests unitaires en logiciel traditionnel. Elles permettent de valider que le système continue à prendre des décisions correctes quand quelqu'un touche au code, change un modèle ou ajuste un prompt. Sans évaluations, toute modification du système est un acte de foi. Un handover bien fait inclut une suite d'évaluations exécutable avec une seule commande, des datasets de test propres au cas et des critères clairs de succès.

**4. Session de transfert en présentiel ou par visioconférence.** La documentation est nécessaire mais pas suffisante. Une session de 2-3 heures avec l'équipe technique du client, où on explique le système, on fait des démonstrations réelles et on répond aux questions, vaut cinquante pages de documentation. C'est là que se transfère le savoir tacite : ces choses que personne n'écrit mais que tout le monde doit savoir pour opérer le système.

**5. Période d'accompagnement post-livraison.** Un système ne se livre jamais « fermé ». Il y a toujours des questions, des comportements inattendus ou des nouveaux besoins dans les premiers mois. Un handover bien fait inclut une période de support post-livraison —typiquement entre 1 et 3 mois— où l'équipe qui a construit le système reste disponible pour les questions. Ce n'est pas un service premium caché : c'est une partie de la responsabilité du fournisseur qui a construit le système.

**6. Plan de maintenance documenté.** Ce qu'il faut faire chaque semaine, chaque mois, chaque trimestre pour maintenir le système en bonne santé : réviser les évaluations, regarder les logs d'erreurs, vérifier les coûts, mettre à jour les dépendances critiques. Un plan de maintenance clair permet au client de décider s'il veut le porter en interne ou contracter la maintenance auprès de quelqu'un —le même fournisseur ou un autre. L'essentiel est qu'il puisse choisir avec information, pas avec ignorance.

## Signaux d'alerte avant de signer avec un fournisseur

Si vous évaluez des fournisseurs pour un projet d'IA, voici quatre signaux d'alerte qui indiquent que vous ne recevrez probablement pas un handover décent :

**Signal 1 : le fournisseur parle seulement de la démo et pas de comment elle se maintient en production.** Si dans les réunions commerciales on consacre 90 % du temps à montrer comme c'est beau de voir le système fonctionner et 10 % (ou moins) à expliquer comment on l'opère, comment on le mesure et comment on le maintient, c'est le signe que sa mentalité est « livrer et partir », pas construire quelque chose qui dure.

**Signal 2 : dans le budget il n'y a aucune ligne de documentation, de transfert ou de période d'accompagnement.** Si le budget inclut seulement du développement et rien d'autre, cela signifie que le fournisseur pense au minimum viable pour facturer et partir. Un fournisseur sérieux considère la documentation et le transfert comme une partie intégrante du projet, pas comme un service supplémentaire.

**Signal 3 : ils vous demandent de signer un contrat où seuls eux ont accès au code ou à l'infrastructure.** Si la propriété intellectuelle ne reste pas clairement au client, ou si les comptes principaux restent au nom du fournisseur, ils créent une dépendance structurelle dès la minute zéro. Un fournisseur sérieux insiste pour que tout reste au nom du client dès le début.

**Signal 4 : ils vous offrent une maintenance mensuelle obligatoire sans option de sortir ou de changer de mains.** Il y a des fournisseurs qui structurent les contrats pour que le client reste piégé : seuls eux peuvent maintenir le système, seuls eux ont accès, seuls eux savent comment ça fonctionne. Ce n'est pas une relation commerciale, c'est une hypothèque technique. Un fournisseur sérieux offre la maintenance comme une option parmi d'autres, pas comme un besoin imposé par conception.

## Pourquoi nous écrivons à ce sujet sans avoir eu à sauver personne

Nous reconnaissons que cet article ne se base pas sur l'expérience d'avoir sauvé des clients de fournisseurs antérieurs. Il se base sur le critère technique accumulé en construisant des systèmes que nous voulons voir survivre à notre relation avec le client. Chaque décision que nous prenons dans un projet passe par la question : si demain ce client voulait emporter le système, pourrait-il le faire ? La réponse doit toujours être oui.

Cette approche a un coût. Elle signifie plus de temps en documentation, plus de temps en sessions de transfert, plus de rigueur dans la gestion des accès et des comptes. Mais le coût en vaut la peine : c'est ce qui différencie un fournisseur qui traite chaque projet comme une vente de quelqu'un qui le traite comme une relation professionnelle.

Si vous évaluez des fournisseurs pour un projet d'IA, posez-leur ces questions avant de signer : à quoi ressemblerait un handover si demain nous décidions de changer de fournisseur ? Quelle documentation recevrions-nous ? Quels accès ? Y a-t-il une période d'accompagnement incluse ? Si les réponses sont vagues ou défensives, vous savez déjà ce que vous devez savoir.

Si vous voulez nous parler d'un projet concret —le vôtre ou un que vous évaluez—, écrivez-nous. Que vous ayez ou non l'intention de finir par travailler avec MindRise, une évaluation honnête de l'approche peut vous éviter des problèmes importants par la suite.`;

const BODIES: Record<string, Record<Locale, string>> = {
  'ia-on-no': {
    ca: IA_ON_NO_CA,
    es: IA_ON_NO_ES,
    en: IA_ON_NO_EN,
    fr: IA_ON_NO_FR,
  },
  'agents-ia-no-son-chatbots': {
    ca: AGENTS_NO_CHATBOTS_CA,
    es: AGENTS_NO_CHATBOTS_ES,
    en: AGENTS_NO_CHATBOTS_EN,
    fr: AGENTS_NO_CHATBOTS_FR,
  },
  'n8n-42h-mes': {
    ca: N8N_42H_CA,
    es: N8N_42H_ES,
    en: N8N_42H_EN,
    fr: N8N_42H_FR,
  },
  'handover-tecnic': {
    ca: HANDOVER_CA,
    es: HANDOVER_ES,
    en: HANDOVER_EN,
    fr: HANDOVER_FR,
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
  return POSTS_META.filter((m) => isPublished(m.dateISO)).map((m) => {
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
