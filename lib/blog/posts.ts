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
  body: string[];
  author: string;
};

export const POSTS_META: PostMeta[] = [
  { slug: 'agents-ia-no-son-chatbots', variant: 0, cat: 0, dateISO: '2026-04-18' },
  { slug: 'n8n-42h-mes', variant: 1, cat: 1, dateISO: '2026-04-02' },
  { slug: 'mcp-claude-code', variant: 2, cat: 2, dateISO: '2026-03-24' },
  { slug: 'rag-empresa-mitjana', variant: 3, cat: 0, dateISO: '2026-03-10' },
  { slug: 'ia-on-no', variant: 4, cat: 3, dateISO: '2026-02-26' },
  { slug: 'evals-produccio', variant: 5, cat: 2, dateISO: '2026-02-12' },
  { slug: 'claude-haiku-cost', variant: 0, cat: 4, dateISO: '2026-01-28' },
  { slug: 'handover-tecnic', variant: 1, cat: 3, dateISO: '2026-01-14' },
  { slug: 'boutique-restaurant', variant: 2, cat: 1, dateISO: '2025-12-18' },
  { slug: 'supabase-pgvector', variant: 3, cat: 2, dateISO: '2025-12-04' },
  { slug: 'agent-multitool', variant: 4, cat: 0, dateISO: '2025-11-20' },
  { slug: 'anthropic-2025-recap', variant: 5, cat: 4, dateISO: '2025-11-06' },
];

const LOREM: Record<Locale, string[]> = {
  ca: [
    "En aquest article repassem les implicacions pràctiques d'aplicar aquesta tècnica en un entorn real de producció. No parlem d'experiments aïllats: parlem de sistemes que han de funcionar cada dia.",
    "El primer error més comú és pensar que la solució és purament tecnològica. La realitat és que la part més difícil sol ser entendre el procés actual: què fa cada persona, quan, i per què. Sense aquesta capa, qualsevol implementació es queda a mig camí.",
    "Un cop tenim el procés mapejat, dissenyem l'arquitectura mínima viable. La regla és simple: si una peça no aporta valor mesurable, no entra. Cada component ha de justificar la seva existència en termes de cost operatiu i manteniment futur.",
    "La iteració és la clau. Lliurem versions petites, validem amb usuaris reals i ajustem. No hi ha cap entrega màgica final. Cada cop que un sistema arriba a producció és el resultat de desenes de microdecisions ben preses.",
    "Si vols aplicar aquest enfocament al teu cas, contacta'ns. Una primera conversa de 30 minuts és suficient per veure si encaixem.",
  ],
  es: [
    "En este artículo repasamos las implicaciones prácticas de aplicar esta técnica en un entorno real de producción. No hablamos de experimentos aislados: hablamos de sistemas que tienen que funcionar cada día.",
    "El primer error más común es pensar que la solución es puramente tecnológica. La realidad es que la parte más difícil suele ser entender el proceso actual: qué hace cada persona, cuándo, y por qué. Sin esa capa, cualquier implementación se queda a medias.",
    "Una vez tenemos el proceso mapeado, diseñamos la arquitectura mínima viable. La regla es simple: si una pieza no aporta valor medible, no entra. Cada componente tiene que justificar su existencia en términos de coste operativo y mantenimiento futuro.",
    "La iteración es la clave. Entregamos versiones pequeñas, validamos con usuarios reales y ajustamos. No hay una entrega mágica final. Cada vez que un sistema llega a producción es el resultado de decenas de microdecisiones bien tomadas.",
    "Si quieres aplicar este enfoque a tu caso, contáctanos. Una primera conversación de 30 minutos es suficiente para ver si encajamos.",
  ],
  en: [
    "In this article we go through the practical implications of applying this technique in a real production environment. We're not talking about isolated experiments: we're talking about systems that have to run every day.",
    "The most common first mistake is thinking the solution is purely technological. The reality is that the hardest part is usually understanding the current process: what each person does, when, and why. Without that layer, any implementation falls short.",
    "Once we have the process mapped, we design the minimum viable architecture. The rule is simple: if a piece doesn't add measurable value, it doesn't go in. Every component has to justify itself in terms of operational cost and future maintenance.",
    "Iteration is the key. We ship small versions, validate with real users and adjust. There's no magical final delivery. Every system that reaches production is the result of dozens of small decisions made well.",
    "If you want to apply this approach to your case, get in touch. A first 30-minute conversation is enough to see if we're a fit.",
  ],
  fr: [
    "Dans cet article, nous passons en revue les implications pratiques de l'application de cette technique dans un environnement de production réel. Nous ne parlons pas d'expériences isolées : nous parlons de systèmes qui doivent fonctionner tous les jours.",
    "La première erreur la plus courante est de penser que la solution est purement technologique. La réalité, c'est que la partie la plus difficile consiste généralement à comprendre le processus actuel : ce que fait chaque personne, quand, et pourquoi. Sans cette couche, toute implémentation reste à mi-chemin.",
    "Une fois le processus cartographié, nous concevons l'architecture minimale viable. La règle est simple : si une pièce n'apporte pas de valeur mesurable, elle n'entre pas. Chaque composant doit justifier son existence en termes de coût opérationnel et de maintenance future.",
    "L'itération est la clé. Nous livrons de petites versions, validons avec de vrais utilisateurs et ajustons. Il n'y a pas de livraison finale magique. Chaque fois qu'un système arrive en production, c'est le résultat de dizaines de micro-décisions bien prises.",
    "Si vous souhaitez appliquer cette approche à votre cas, contactez-nous. Une première conversation de 30 minutes suffit pour voir si nous nous accordons.",
  ],
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
  const body = LOREM[locale];
  const author = AUTHOR[locale];
  return POSTS_META.map((m) => {
    const c = content[m.slug] ?? { title: m.slug, excerpt: '' };
    const [yyyy, mm, dd] = m.dateISO.split('-');
    const date = `${parseInt(dd, 10)} ${months[mm]} ${yyyy}`;
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
