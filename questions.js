/* ============================================================
   Banque de questions — Préparation entretien RAF / DAF / FP&A
   ============================================================ */

// ----------------------------------------------------------------
// JEU 1 — Entretien classique (banque fixe de 19 questions)
// Chaque question a une réponse de référence condensée en points clés.
// ----------------------------------------------------------------
const STAR_QUESTIONS = [
  {
    id: "s01",
    fr: {
      q: "Pour commencer simplement, pouvez-vous me raconter rapidement votre parcours et ce qui vous amène aujourd'hui à postuler chez nous ?",
      a: [
        "Deux masters en finance (finance générale + finance d'entreprise à Paris-Saclay)",
        "Parcours progressif : analyste financier → gestionnaire facturation → finance manager (équipe de 3) → RAF",
        "Chez l'employeur actuel : structuration du périmètre financier, automatisation, tableaux de bord pour la direction",
        "Aujourd'hui : recherche d'un environnement en croissance, avec des choses à structurer"
      ]
    },
    en: {
      q: "To start simply, could you quickly walk me through your background and what brings you to apply here today?",
      a: [
        "Two master's degrees in finance (general finance + corporate finance at Paris-Saclay)",
        "Progressive path: financial analyst → billing manager → finance manager (team of 3) → Head of Admin & Finance",
        "In my current role: structured the finance function, automated processes, built dashboards for management",
        "Today: looking for a growing environment with things to build and structure"
      ]
    }
  },
  {
    id: "s02",
    fr: {
      q: "Pourquoi voulez-vous quitter votre entreprise actuelle ?",
      a: [
        "Bonne expérience actuelle, ce n'est pas une fuite",
        "Envie d'évoluer vers une structure avec un potentiel de croissance plus important",
        "Compétences transférables : mise en place de process, reporting, outils de pilotage"
      ]
    },
    en: {
      q: "Why do you want to leave your current company?",
      a: [
        "Good experience so far — this isn't about running away from something",
        "Looking to move to a company with stronger growth potential / scale-up phase",
        "Transferable skills: building processes, reporting, and steering tools"
      ]
    }
  },
  {
    id: "s03",
    fr: {
      q: "Vous dites avoir structuré la fonction finance. Pouvez-vous donner un exemple concret d'une amélioration mise en place qui a eu un impact réel ?",
      a: [
        "Constat : données financières dispersées dans plusieurs fichiers, analyses longues",
        "Action : centralisation en base de données unique + dashboards KPIs + modèle de forecasting à 5 ans",
        "Résultat : visibilité accrue pour la direction, décisions (recrutement, dépenses) mieux informées, gain de temps"
      ]
    },
    en: {
      q: "You mentioned structuring the finance function. Can you give a concrete example of an improvement you implemented that had a real impact?",
      a: [
        "Problem: financial data scattered across files, analysis took too long",
        "Action: centralized everything into one database + built KPI dashboards + a 5-year forecasting model",
        "Result: much more visibility for leadership, better-informed decisions, significant time saved"
      ]
    }
  },
  {
    id: "s04",
    fr: {
      q: "Comment décririez-vous votre rôle auprès d'un CEO ou d'un dirigeant ?",
      a: [
        "Un partenaire stratégique, pas juste un producteur de chiffres",
        "Capable d'être en désaccord : j'explique le risque, je le chiffre, je propose une alternative",
        "Exemple : désaccord sur un recrutement jugé prématuré → proposition d'un freelance à la place"
      ]
    },
    en: {
      q: "How would you describe your role working alongside a CEO or a business leader?",
      a: [
        "A strategic partner, not just someone who produces numbers",
        "I can disagree: I explain the risk, quantify the impact, and propose an alternative",
        "Example: disagreed on a hire I felt was premature → proposed a freelancer instead"
      ]
    }
  },
  {
    id: "s05",
    fr: {
      q: "Quelles sont vos attentes pour votre prochain poste, et qu'est-ce qui compte pour vous dans une entreprise ?",
      a: [
        "Une culture de collaboration et de confiance",
        "La possibilité de continuer à apprendre via de nouvelles responsabilités",
        "De la reconnaissance : que le travail réalisé soit vu et valorisé, pas seulement la rémunération"
      ]
    },
    en: {
      q: "What are you looking for in your next role, and what matters to you in a company?",
      a: [
        "A culture of collaboration and trust",
        "The chance to keep learning through new responsibilities",
        "Recognition: knowing the work delivers real value and is acknowledged — not just compensation"
      ]
    }
  },
  {
    id: "s06",
    fr: {
      q: "Votre parcours est intéressant, mais vous venez d'une structure plus petite. Ici, les volumes seront multipliés par 5. Pourquoi devrions-nous vous faire confiance sur une organisation aussi complexe ?",
      a: [
        "Reconnaître honnêtement la limite, sans se justifier à outrance",
        "Mettre en avant la capacité d'adaptation et de structuration rapide",
        "Premier réflexe en poste : cartographier les risques (cash, reporting, contrôle interne, équipe, process)"
      ]
    },
    en: {
      q: "Your background is interesting, but you come from a smaller structure. Here we'll multiply the volumes by 5. Why should we trust you to run a much more complex organization?",
      a: [
        "Acknowledge the gap honestly, without over-justifying",
        "Emphasize adaptability and speed at structuring new environments",
        "First move in the role: map the risk areas — cash, reporting, internal control, team, process"
      ]
    }
  },
  {
    id: "s07",
    fr: {
      q: "Qu'est-ce qui vous fait penser que vous pouvez réussir dans notre secteur ?",
      a: [
        "Spécificités du secteur reconnues, mais les fondamentaux de la finance restent les mêmes",
        "Déjà changé de secteur avec succès (énergie → distribution de licences/SaaS)",
        "À l'aise avec la phase d'apprentissage nécessaire (flux, KPIs métier)"
      ]
    },
    en: {
      q: "What makes you think you can succeed in our industry?",
      a: [
        "I acknowledge the sector's specifics, but finance fundamentals stay the same",
        "Already switched industries successfully before (energy → software/SaaS licensing)",
        "Comfortable with the learning curve needed on new flows and business-specific KPIs"
      ]
    }
  },
  {
    id: "s08",
    fr: {
      q: "Pouvez-vous me donner un exemple d'une erreur que vous avez commise, comment vous l'avez gérée, et ce que vous en avez appris ?",
      a: [
        "Contexte : chiffrage erroné transmis par un éditeur, détecté après signature du client",
        "Action : reconnaissance de ma part de responsabilité, transparence immédiate avec la direction et le client",
        "Leçon : renforcement systématique des contrôles avant tout engagement commercial"
      ]
    },
    en: {
      q: "Can you give me an example of a mistake you made, how you handled it, and what you learned from it?",
      a: [
        "Context: a vendor sent an incorrect price quote, caught only after the client had signed",
        "Action: owned my share of responsibility, was transparent immediately with leadership and the client",
        "Lesson: since then I systematically double-check before any commercial commitment goes out"
      ]
    }
  },
  {
    id: "s09",
    fr: {
      q: "Où vous voyez-vous dans 5 ans ?",
      a: [
        "Continuer à monter en compétence sur des sujets financiers de plus en plus complexes",
        "Grandir avec l'entreprise, avec une responsabilité d'équipe croissante",
        "Apporter une valeur ajoutée réelle et durable"
      ]
    },
    en: {
      q: "Where do you see yourself in 5 years?",
      a: [
        "Continuing to grow expertise on increasingly complex financial topics",
        "Growing with the company, with increasing team responsibility",
        "Delivering real, lasting added value"
      ]
    }
  },
  {
    id: "s10",
    fr: {
      q: "Quelles sont vos principales forces et faiblesses ?",
      a: [
        "Forces : optimisme face aux problèmes, engagement fort (apprentissage autonome d'outils comme Power BI/SQL), esprit d'équipe et autonomie",
        "Faiblesse 1 : impatience face aux délais → compensée par un effort accru pour avancer plus vite",
        "Faiblesse 2 : moins à l'aise dans un environnement non structuré → gérée en clarifiant proactivement rôles et process"
      ]
    },
    en: {
      q: "What are your main strengths and weaknesses?",
      a: [
        "Strengths: staying positive under pressure, strong commitment (self-taught Power BI, SQL...), teamwork combined with autonomy",
        "Weakness 1: impatience with slow timelines → I compensate by pushing harder to move faster",
        "Weakness 2: less comfortable in unstructured environments → I fix this by proactively clarifying roles and processes"
      ]
    }
  },
  {
    id: "s11",
    fr: {
      q: "Que diraient vos collègues à propos de vous ?",
      a: [
        "Quelqu'un de très orienté esprit d'équipe, toujours disponible pour aider",
        "Rigoureux, engagé, orienté recherche de solutions",
        "Contribue à une bonne ambiance de travail même sous forte charge"
      ]
    },
    en: {
      q: "What would your colleagues say about you?",
      a: [
        "Someone very team-oriented, always available to help",
        "Rigorous, committed, solution-focused",
        "Helps keep a good atmosphere even under heavy workload"
      ]
    }
  },
  {
    id: "s12",
    fr: {
      q: "Êtes-vous capable de travailler sous pression ?",
      a: [
        "Je vois la pression comme une opportunité de révéler ce dont je suis capable",
        "Méthode : lister les tâches, prioriser par urgence, estimer le temps nécessaire",
        "Si un délai n'est pas tenable, j'en informe la personne concernée en amont pour réorganiser"
      ]
    },
    en: {
      q: "Are you able to work under pressure?",
      a: [
        "I see pressure as a chance to show what I'm capable of",
        "My method: list tasks, prioritize by urgency, estimate time needed",
        "If a deadline isn't realistic, I flag it early so we can reorganize together"
      ]
    }
  },
  {
    id: "s13",
    fr: {
      q: "Qu'aimeriez-vous faire une fois en poste ?",
      a: [
        "Premières semaines : apprendre un maximum sur les outils, process et la culture de l'entreprise",
        "Une fois autonome : proposer des améliorations et automatiser certaines tâches",
        "Demander des retours réguliers pour identifier des axes de progression"
      ]
    },
    en: {
      q: "What would you like to do once you're in the role?",
      a: [
        "First weeks: learn as much as possible about the tools, processes and company culture",
        "Once autonomous: suggest improvements and automate certain tasks",
        "Ask for regular feedback to identify areas to improve"
      ]
    }
  },
  {
    id: "s14",
    fr: {
      q: "Quelles sont vos compétences en résolution de conflits ?",
      a: [
        "Peu de conflits par nature, car je résous les désaccords tôt, avant qu'ils s'enveniment",
        "Méthode : écouter le point de vue de l'autre, expliquer le mien, chercher un compromis",
        "La communication est la clé, surtout avec des services aux objectifs différents"
      ]
    },
    en: {
      q: "What are your conflict-resolution skills?",
      a: [
        "I rarely face real conflicts because I address disagreements early, before they escalate",
        "Method: listen to the other person's view, explain mine, look for a compromise",
        "Communication is key, especially across teams with different objectives"
      ]
    }
  },
  {
    id: "s15",
    fr: {
      q: "Pourquoi avez-vous choisi notre entreprise ?",
      a: [
        "Recherche approfondie sur l'entreprise après avoir vu l'offre",
        "Attrait pour la qualité des équipes et du management",
        "Opportunité d'apprendre, de partager et de contribuer aux succès futurs"
      ]
    },
    en: {
      q: "Why did you choose our company?",
      a: [
        "Did deep research on the company after seeing the job posting",
        "Attracted by the quality of the team and management",
        "An opportunity to learn, share, and contribute to future success"
      ]
    }
  },
  {
    id: "s16",
    fr: {
      q: "Pourquoi êtes-vous le candidat idéal pour ce poste ?",
      a: [
        "Le parcours seul ne suffit pas : d'autres candidats ont un parcours équivalent ou meilleur",
        "Ma différence : organisation, attention aux détails, gestion des priorités pour éviter les erreurs",
        "Appétence prouvée à apprendre en autodidacte (Power BI, Looker, SQL) pour gagner en efficacité"
      ]
    },
    en: {
      q: "Why are you the ideal candidate for this position?",
      a: [
        "Background alone isn't enough — other candidates may have an equal or better one",
        "My edge: organization, attention to detail, priority management to avoid costly mistakes",
        "Proven ability to self-teach (Power BI, Looker, SQL) to become more efficient"
      ]
    }
  },
  {
    id: "s17",
    fr: {
      q: "Qu'est-ce qui vous motive dans votre travail ?",
      a: [
        "Transformer des données financières en informations utiles à la décision",
        "Voir l'impact concret de mon travail sur l'entreprise",
        "Les problèmes rencontrés me motivent : ils me poussent à analyser et trouver des solutions"
      ]
    },
    en: {
      q: "What motivates you in your work?",
      a: [
        "Turning financial data into information that's actually useful for decisions",
        "Seeing the concrete impact of my work on the company",
        "Problems motivate me — they push me to analyze and find solutions"
      ]
    }
  },
  {
    id: "s18",
    fr: {
      q: "Qu'attendez-vous de votre manager ?",
      a: [
        "Être accompagné tout au long de mes missions",
        "Apprendre au maximum de son expérience et de ses connaissances",
        "Chercher à être à la hauteur de ses attentes"
      ]
    },
    en: {
      q: "What do you expect from your manager?",
      a: [
        "Support throughout my missions",
        "Learning as much as possible from their experience and knowledge",
        "Striving to live up to their expectations"
      ]
    }
  },
  {
    id: "s19",
    fr: {
      q: "Racontez-moi une fois où vous avez dû prendre une décision difficile.",
      a: [
        "Contexte : chiffres demandés en urgence par la direction, un mois après mon arrivée, sans avoir pu les vérifier",
        "Choix : transparence immédiate + demande d'un délai court plutôt que transmettre des chiffres non fiables",
        "Résultat : chiffres corrigés livrés le lendemain après vérification complète"
      ]
    },
    en: {
      q: "Tell me about a time you had to make a difficult decision.",
      a: [
        "Context: leadership urgently needed figures one month after I joined, before I could verify them",
        "Choice: immediate transparency + asked for a short delay rather than share unreliable numbers",
        "Result: delivered corrected, fully verified figures the next day"
      ]
    }
  }
];

// ----------------------------------------------------------------
// JEU 2 — Réflexe (grande banque, une question à la fois)
// categories : technique | psycho | situation | leadership | culture
// ----------------------------------------------------------------
const REFLEX_QUESTIONS = [
  // ---------- TECHNIQUE ----------
  { id:"r001", category:"technique", fr:{ q:"Qu'est-ce que le BFR et pourquoi est-il crucial pour une entreprise en croissance ?", example:"Le BFR mesure l'argent immobilisé entre le paiement des charges et l'encaissement des ventes (stocks + créances clients − dettes fournisseurs). En forte croissance, il augmente souvent plus vite que la rentabilité, ce qui peut créer une crise de trésorerie malgré un compte de résultat positif." }, en:{ q:"What is working capital requirement and why is it critical for a growing company?", example:"It measures the cash tied up between paying expenses and collecting sales (inventory + receivables − payables). In fast growth, it often rises faster than profit, which can trigger a cash crisis even with a profitable P&L." } },
  { id:"r002", category:"technique", fr:{ q:"Comment suivez-vous une trésorerie prévisionnelle au quotidien ?", example:"Un tableau glissant à 13 semaines, mis à jour chaque semaine avec les encaissements/décaissements réels vs prévus, des scénarios optimiste/pessimiste, et des alertes sur les échéances critiques (paie, TVA, fournisseurs clés)." }, en:{ q:"How do you monitor a cash forecast on a daily basis?", example:"A rolling 13-week cash view, updated weekly with actual vs. forecast inflows/outflows, best/worst-case scenarios, and alerts on critical deadlines like payroll, tax, or key suppliers." } },
  { id:"r003", category:"technique", fr:{ q:"Quelle est la différence entre l'EBITDA et le flux de trésorerie disponible ?", example:"L'EBITDA est un indicateur de rentabilité opérationnelle avant amortissements, intérêts et impôts — il ignore le cash. Le flux de trésorerie disponible reflète l'argent réellement généré après investissements, variations de BFR et impôts. Une entreprise peut avoir un bon EBITDA et un cash flow négatif." }, en:{ q:"What's the difference between EBITDA and free cash flow?", example:"EBITDA measures operating profitability before depreciation, interest and tax — it ignores cash. Free cash flow shows the actual cash generated after capex, working capital changes and tax. A company can have strong EBITDA and still burn cash." } },
  { id:"r004", category:"technique", fr:{ q:"La trésorerie sera négative dans 30 jours : quelle est votre démarche immédiate ?", example:"D'abord, quantifier précisément le trou et sa date. Ensuite, agir sur trois leviers en parallèle : accélérer les encaissements clients, négocier des délais fournisseurs, et alerter la direction/banque tôt plutôt que d'attendre. La transparence rapide évite une crise de confiance en plus d'une crise de cash." }, en:{ q:"Cash will go negative in 30 days: what's your immediate approach?", example:"First, precisely quantify the gap and its date. Then act on three levers in parallel: speed up customer collections, negotiate supplier terms, and alert leadership/the bank early rather than waiting. Early transparency avoids a trust crisis on top of a cash crisis." } },
  { id:"r005", category:"technique", fr:{ q:"Quels 3 KPIs financiers suivriez-vous en priorité dans une PME en croissance ?", example:"La trésorerie disponible et son runway, la marge brute par activité/client, et le délai moyen de paiement clients (DSO). Ce sont les trois qui préviennent le plus tôt une dérive." }, en:{ q:"What 3 financial KPIs would you prioritize in a fast-growing SMB?", example:"Available cash and runway, gross margin by activity/client, and days sales outstanding (DSO). Those three give the earliest warning of trouble." } },
  { id:"r006", category:"technique", fr:{ q:"Comment expliqueriez-vous la différence entre un budget et un forecast à un opérationnel non-financier ?", example:"Le budget est l'objectif fixé en début d'année, notre boussole. Le forecast, lui, est réévalué régulièrement pour refléter la réalité du terrain — c'est notre GPS qui recalcule l'itinéraire en cours de route." }, en:{ q:"How would you explain the difference between a budget and a forecast to a non-finance colleague?", example:"The budget is the target set at the start of the year — our compass. The forecast is updated regularly to reflect what's actually happening — our GPS recalculating the route as we go." } },
  { id:"r007", category:"technique", fr:{ q:"Un chiffre budgété dévie de 20% du réel : quelle est votre démarche ?", example:"Identifier si c'est un écart de volume, de prix ou de timing. Isoler la cause racine avec l'opérationnel concerné, quantifier l'impact sur l'année, puis ajuster le forecast plutôt que de simplement constater l'écart." }, en:{ q:"An actual figure deviates 20% from budget: what's your process?", example:"Identify whether it's a volume, price or timing gap. Isolate the root cause with the relevant team, quantify the full-year impact, then update the forecast rather than just noting the variance." } },
  { id:"r008", category:"technique", fr:{ q:"Comment structureriez-vous un reporting mensuel pour un comité de direction ?", example:"Une page de synthèse avec 5-6 KPIs clés et leur tendance, suivie d'un focus sur les écarts significatifs et leurs causes, et enfin les décisions ou arbitrages nécessaires. L'objectif : lisible en 5 minutes, actionnable immédiatement." }, en:{ q:"How would you structure a monthly report for an executive committee?", example:"One summary page with 5-6 key KPIs and their trend, followed by a focus on significant variances and their causes, then the decisions or trade-offs needed. Goal: readable in 5 minutes, immediately actionable." } },
  { id:"r009", category:"technique", fr:{ q:"Quels indicateurs suivriez-vous pour une entreprise SaaS ?", example:"Le MRR/ARR et sa croissance, le taux de churn, le CAC et le LTV, ainsi que le ratio LTV/CAC. Ce sont ces indicateurs qui racontent la vraie santé du modèle, bien plus que le chiffre d'affaires brut." }, en:{ q:"What metrics would you track for a SaaS company?", example:"MRR/ARR and its growth, churn rate, CAC and LTV, and the LTV/CAC ratio. These tell the real health of the business model far better than raw revenue." } },
  { id:"r010", category:"technique", fr:{ q:"Comment négocieriez-vous une ligne de crédit avec une banque ?", example:"Arriver avec un dossier solide : historique financier clair, business plan réaliste, scénarios de trésorerie, et une demande justifiée par un besoin précis. Construire la relation avant d'en avoir besoin, pas seulement en situation de crise." }, en:{ q:"How would you negotiate a credit line with a bank?", example:"Come with a solid file: clear financial history, realistic business plan, cash scenarios, and a request justified by a specific need. Build the relationship before you need it, not only in a crisis." } },
  { id:"r011", category:"technique", fr:{ q:"Comment construiriez-vous un business plan à 3 ans pour une nouvelle activité ?", example:"Partir des hypothèses commerciales (volumes, prix), les confronter aux coûts fixes et variables, modéliser plusieurs scénarios (prudent/réaliste/ambitieux), puis identifier le point mort et les besoins de financement associés." }, en:{ q:"How would you build a 3-year business plan for a new activity?", example:"Start from commercial assumptions (volumes, pricing), confront them with fixed and variable costs, model several scenarios (conservative/realistic/ambitious), then identify the break-even point and the related funding needs." } },
  { id:"r012", category:"technique", fr:{ q:"Comment sécurisez-vous une clôture mensuelle des comptes ?", example:"Une checklist standardisée (charges à payer, produits constatés d'avance, provisions), un rétroplanning partagé avec la comptabilité externalisée, et un contrôle croisé systématique des comptes sensibles avant validation." }, en:{ q:"How do you secure a monthly accounts closing?", example:"A standardized checklist (accruals, deferred revenue, provisions), a shared closing calendar with the accounting team, and systematic cross-checks on sensitive accounts before sign-off." } },
  { id:"r013", category:"technique", fr:{ q:"Pourquoi la distinction coûts fixes / coûts variables est-elle importante en pilotage ?", example:"Elle permet de calculer le point mort et de savoir comment la rentabilité réagit à une variation d'activité. C'est essentiel pour décider d'un investissement, d'une baisse de prix ou d'une réduction de volume." }, en:{ q:"Why does the fixed vs. variable cost distinction matter for financial steering?", example:"It lets you calculate the break-even point and understand how profitability reacts to a change in activity. It's essential when deciding on an investment, a price cut, or a volume drop." } },
  { id:"r014", category:"technique", fr:{ q:"Comment évalueriez-vous la rentabilité d'un projet d'investissement ?", example:"En calculant le retour sur investissement et le délai de récupération (payback), en actualisant les flux futurs si l'horizon est long, et en confrontant le résultat aux alternatives possibles pour ce même capital." }, en:{ q:"How would you assess the profitability of an investment project?", example:"By calculating ROI and the payback period, discounting future cash flows if the horizon is long, and comparing the result against alternative uses of the same capital." } },
  { id:"r015", category:"technique", fr:{ q:"Un investisseur vous demande de justifier une baisse de marge : que répondez-vous ?", example:"D'abord décomposer la baisse : effet prix, effet mix, ou effet coût. Ensuite présenter un plan d'action concret avec un calendrier de retour à la marge cible, plutôt que de simplement expliquer la cause." }, en:{ q:"An investor asks you to justify a margin decline: what do you say?", example:"First break down the decline: price effect, mix effect, or cost effect. Then present a concrete action plan with a timeline to return to the target margin, rather than just explaining the cause." } },

  // ---------- PSYCHO ----------
  { id:"r016", category:"psycho", fr:{ q:"Comment réagissez-vous quand votre travail est remis en question publiquement ?", example:"Je prends l'information sans la prendre personnellement, je demande des précisions si besoin, puis je réponds sur les faits. Si la critique est fondée, je le reconnais directement — cela renforce la crédibilité plus que de se justifier." }, en:{ q:"How do you react when your work is publicly challenged?", example:"I take the input without taking it personally, ask for clarification if needed, then respond with facts. If the criticism is fair, I acknowledge it directly — that builds more credibility than getting defensive." } },
  { id:"r017", category:"psycho", fr:{ q:"Décrivez un moment où vous avez douté de vous-même. Comment l'avez-vous géré ?", example:"J'identifie ce qui provoque le doute — souvent un manque d'information — et j'agis pour combler ce manque plutôt que de rester dans l'incertitude : je pose des questions, je vérifie, je demande un avis externe si nécessaire." }, en:{ q:"Describe a time you doubted yourself. How did you handle it?", example:"I identify what's causing the doubt — usually a lack of information — and act to close that gap rather than stay stuck in uncertainty: I ask questions, verify, or seek an outside opinion if needed." } },
  { id:"r018", category:"psycho", fr:{ q:"Comment gérez-vous une charge de travail qui dépasse ce qui est raisonnable ?", example:"Je priorise par impact et urgence, je communique tôt sur ce qui ne pourra pas être fait dans les délais, et je propose des options plutôt que de simplement signaler le problème." }, en:{ q:"How do you handle a workload that exceeds what's reasonable?", example:"I prioritize by impact and urgency, flag early what won't get done in time, and bring options rather than just raising the problem." } },
  { id:"r019", category:"psycho", fr:{ q:"Qu'est-ce qui vous met le plus mal à l'aise dans un environnement professionnel ?", example:"Le manque de clarté sur les rôles et les responsabilités — cela crée des zones grises qui ralentissent tout le monde. Ma réponse est toujours la même : clarifier plutôt que subir." }, en:{ q:"What makes you most uncomfortable in a work environment?", example:"Lack of clarity on roles and responsibilities — it creates grey zones that slow everyone down. My answer is always the same: clarify rather than endure it." } },
  { id:"r020", category:"psycho", fr:{ q:"Comment réagissez-vous face à un refus catégorique de votre supérieur sur une proposition ?", example:"Je cherche à comprendre les raisons du refus avant de réagir. Si je pense toujours avoir raison, je peux revenir avec des données supplémentaires ; sinon, j'exécute pleinement la décision prise, sans rancune." }, en:{ q:"How do you react to a flat 'no' from your manager on a proposal?", example:"I try to understand the reasoning behind the refusal before reacting. If I still believe I'm right, I may come back with more data; otherwise, I fully commit to the decision made, without resentment." } },
  { id:"r021", category:"psycho", fr:{ q:"Racontez un moment où vous avez dû dire non à votre manager.", example:"Je dis non rarement, mais quand c'est nécessaire, j'explique le risque concret encouru et je propose une alternative — dire non sans solution de rechange n'aide personne." }, en:{ q:"Tell me about a time you had to say no to your manager.", example:"I rarely say no, but when I need to, I explain the concrete risk involved and offer an alternative — saying no without an alternative doesn't help anyone." } },
  { id:"r022", category:"psycho", fr:{ q:"Comment gérez-vous la solitude parfois associée à un poste de direction financière ?", example:"En construisant un réseau de pairs (autres DAF, mentors) pour échanger sur des sujets qu'on ne peut pas toujours partager en interne, et en restant proche du terrain pour ne pas s'isoler dans les chiffres." }, en:{ q:"How do you handle the isolation sometimes tied to a finance leadership role?", example:"By building a peer network (other finance leaders, mentors) to discuss things you can't always share internally, and staying close to the ground so you don't get isolated in the numbers." } },
  { id:"r023", category:"psycho", fr:{ q:"Qu'est-ce qui vous fait perdre patience au travail, et comment le gérez-vous ?", example:"Les délais qui s'allongent sans raison claire. Je gère cela en redoublant d'efforts moi-même pour avancer, plutôt qu'en subissant l'attente — et en communiquant calmement sur l'impact du retard." }, en:{ q:"What makes you lose patience at work, and how do you manage it?", example:"Delays that stretch without a clear reason. I handle it by doubling my own effort to move things forward, rather than passively waiting — and calmly communicating the impact of the delay." } },
  { id:"r024", category:"psycho", fr:{ q:"Comment réagissez-vous face à un échec que vous n'aviez pas anticipé ?", example:"J'analyse d'abord ce qui a mené à l'échec avant de réagir émotionnellement, je corrige ce qui peut l'être, puis j'en tire une leçon concrète pour éviter que cela se reproduise." }, en:{ q:"How do you react to an unexpected failure?", example:"I first analyze what led to the failure before reacting emotionally, fix what can be fixed, then draw a concrete lesson to prevent it from happening again." } },
  { id:"r025", category:"psycho", fr:{ q:"Comment savez-vous que vous êtes en train de vous approcher du burn-out ?", example:"Quand je commence à perdre en qualité malgré plus d'heures travaillées, c'est un signal. J'en parle alors ouvertement à mon manager plutôt que d'attendre que la situation empire." }, en:{ q:"How do you know you're approaching burnout?", example:"When my output quality drops despite working more hours, that's the signal. I then talk openly with my manager rather than waiting for things to get worse." } },
  { id:"r026", category:"psycho", fr:{ q:"Décrivez une situation où vous avez dû accepter une critique injuste.", example:"Je sépare le fond de la forme : même si le ton est injuste, je cherche s'il y a un fond de vérité utile. Si vraiment la critique est infondée, je le dis calmement, avec des faits, sans être sur la défensive." }, en:{ q:"Describe a situation where you had to accept unfair criticism.", example:"I separate substance from tone: even if the tone feels unfair, I look for any useful truth in it. If the criticism is truly baseless, I say so calmly, with facts, without getting defensive." } },
  { id:"r027", category:"psycho", fr:{ q:"Comment restez-vous objectif quand un sujet vous touche personnellement ?", example:"Je prends un temps avant de répondre plutôt que de réagir à chaud, et je m'appuie sur des données factuelles pour ancrer la discussion plutôt que sur mon ressenti." }, en:{ q:"How do you stay objective when a topic affects you personally?", example:"I take a moment before responding rather than reacting in the heat of the moment, and I anchor the discussion in facts rather than in how I feel." } },
  { id:"r028", category:"psycho", fr:{ q:"Qu'est-ce qui vous motive un lundi matin difficile ?", example:"Savoir que mon travail a un impact concret sur les décisions de l'entreprise. Même un lundi difficile, ce sens du travail reste intact." }, en:{ q:"What motivates you on a tough Monday morning?", example:"Knowing my work has a concrete impact on the company's decisions. Even on a hard Monday, that sense of purpose stays intact." } },
  { id:"r029", category:"psycho", fr:{ q:"Comment gérez-vous le fait de ne pas avoir toutes les réponses face à une direction exigeante ?", example:"Je dis honnêtement ce que je ne sais pas encore, je donne un délai pour y répondre, et je tiens ce délai. La confiance vient de la fiabilité, pas de prétendre tout savoir." }, en:{ q:"How do you handle not having all the answers in front of a demanding leadership team?", example:"I'm honest about what I don't yet know, give a deadline to find out, and stick to it. Trust comes from reliability, not from pretending to know everything." } },
  { id:"r030", category:"psycho", fr:{ q:"Racontez un moment où vous avez dû faire confiance à quelqu'un malgré un doute.", example:"J'ai délégué une tâche sensible malgré une petite hésitation, en mettant un point de contrôle intermédiaire plutôt qu'en refusant de déléguer — cela a permis de sécuriser le résultat tout en faisant confiance." }, en:{ q:"Tell me about a time you had to trust someone despite a doubt.", example:"I delegated a sensitive task despite a slight hesitation, but added a mid-point check-in instead of refusing to delegate — that secured the outcome while still extending trust." } },

  // ---------- SITUATION / PIÈGE ----------
  { id:"r031", category:"situation", fr:{ q:"Votre CEO vous demande d'arrondir un chiffre pour rassurer un investisseur. Que faites-vous ?", example:"Je refuse poliment mais fermement : falsifier un chiffre engage ma responsabilité professionnelle et la crédibilité de l'entreprise sur le long terme. Je propose plutôt de présenter le chiffre réel avec un plan d'action pour l'améliorer." }, en:{ q:"Your CEO asks you to round up a figure to reassure an investor. What do you do?", example:"I politely but firmly refuse: misrepresenting a figure puts my professional integrity and the company's long-term credibility at risk. I offer instead to present the real number alongside a plan to improve it." } },
  { id:"r032", category:"situation", fr:{ q:"Vous découvrez une erreur dans un reporting déjà envoyé au board. Comment réagissez-vous ?", example:"Je corrige immédiatement et j'informe sans délai les destinataires, avec l'explication de l'erreur et son impact réel. Mieux vaut une correction rapide et transparente qu'un silence qui érode la confiance." }, en:{ q:"You discover an error in a report already sent to the board. How do you react?", example:"I correct it immediately and inform recipients without delay, explaining the error and its real impact. A fast, transparent correction beats staying silent and eroding trust." } },
  { id:"r033", category:"situation", fr:{ q:"Un collègue vous demande de couvrir une erreur qu'il a commise. Que répondez-vous ?", example:"Je refuse de couvrir l'erreur, mais je l'aide à la corriger et à en parler lui-même à qui de droit. Protéger quelqu'un en cachant un fait financier n'est jamais une option acceptable." }, en:{ q:"A colleague asks you to cover up a mistake they made. What do you say?", example:"I refuse to cover it up, but I help them fix it and encourage them to raise it themselves with the right person. Hiding a financial fact to protect someone is never an acceptable option." } },
  { id:"r034", category:"situation", fr:{ q:"Le CEO veut licencier un collaborateur pour un motif que vous jugez injuste. Quelle est votre posture ?", example:"J'exprime mon désaccord de façon factuelle et respectueuse au CEO, en privé. Si la décision finale reste inchangée après discussion, je l'exécute dans le cadre de mes responsabilités, tout en ayant fait entendre mon point de vue." }, en:{ q:"The CEO wants to fire an employee for a reason you find unfair. What's your stance?", example:"I raise my disagreement factually and respectfully with the CEO, privately. If the final decision stands after that discussion, I carry it out within my responsibilities, having made my view heard." } },
  { id:"r035", category:"situation", fr:{ q:"Vous devez annoncer un plan d'économies à une équipe qui ne s'y attend pas. Comment faites-vous ?", example:"J'annonce la nouvelle directement et clairement, sans détour, j'explique le contexte et les raisons, puis je laisse de l'espace aux questions et aux réactions plutôt que de fuir la discussion." }, en:{ q:"You need to announce a cost-cutting plan to a team that doesn't see it coming. How do you do it?", example:"I deliver the news directly and clearly, no beating around the bush, explain the context and reasons, then make space for questions and reactions instead of avoiding the discussion." } },
  { id:"r036", category:"situation", fr:{ q:"Un fournisseur clé menace de couper les livraisons faute de paiement, mais la trésorerie est tendue. Comment gérez-vous ?", example:"J'appelle le fournisseur directement pour négocier un échéancier réaliste plutôt que de laisser la situation se dégrader en silence, tout en évaluant en parallèle des solutions de trésorerie à court terme." }, en:{ q:"A key supplier threatens to halt deliveries over unpaid invoices, but cash is tight. How do you handle it?", example:"I call the supplier directly to negotiate a realistic payment schedule rather than letting the relationship deteriorate silently, while in parallel exploring short-term cash solutions." } },
  { id:"r037", category:"situation", fr:{ q:"Vendez-moi en 60 secondes pourquoi investir dans votre ancienne entreprise.", example:"Je m'appuie sur des faits concrets : marché, croissance, positionnement, équipe — et j'évite le discours commercial vague. Un bon pitch financier tient sur 2-3 chiffres clés bien choisis." }, en:{ q:"Sell me in 60 seconds why I should invest in your former company.", example:"I lean on concrete facts: market, growth, positioning, team — and avoid vague sales talk. A good financial pitch rests on 2-3 well-chosen key numbers." } },
  { id:"r038", category:"situation", fr:{ q:"Un actionnaire remet en cause votre légitimité en réunion. Comment répondez-vous sur le moment ?", example:"Je reste calme, je réponds avec des faits et des chiffres précis plutôt que sur la défensive émotionnelle. La crédibilité se regagne par la compétence démontrée, pas par la justification." }, en:{ q:"A shareholder questions your legitimacy in a meeting. How do you respond on the spot?", example:"I stay calm and respond with precise facts and figures rather than getting emotionally defensive. Credibility is regained by demonstrated competence, not by justifying yourself." } },
  { id:"r039", category:"situation", fr:{ q:"Vous devez choisir entre respecter un deadline ou la fiabilité d'un chiffre transmis à la direction. Que choisissez-vous ?", example:"La fiabilité prime toujours. Je préfère communiquer un délai supplémentaire court avec une explication claire, plutôt que de transmettre un chiffre non vérifié qui pourrait induire une mauvaise décision." }, en:{ q:"You must choose between meeting a deadline or the reliability of a figure going to leadership. What do you choose?", example:"Reliability always wins. I'd rather ask for a short extra delay with a clear explanation than send an unverified number that could lead to a bad decision." } },
  { id:"r040", category:"situation", fr:{ q:"On vous demande de justifier votre salaire face à un budget serré. Que dites-vous ?", example:"Je relie mon coût à la valeur créée : temps gagné, décisions mieux éclairées, risques évités — avec des exemples chiffrés si possible. On justifie un salaire par un impact, pas par une ancienneté." }, en:{ q:"You're asked to justify your salary against a tight budget. What do you say?", example:"I connect my cost to the value created: time saved, better-informed decisions, risks avoided — with figures where possible. You justify a salary through impact, not seniority." } },
  { id:"r041", category:"situation", fr:{ q:"Un client important menace de partir si vous ne baissez pas les prix sous le seuil de rentabilité. Quelle est votre position ?", example:"Je cherche d'abord une solution alternative (volume, durée d'engagement, périmètre du service) avant d'envisager une baisse de prix. Vendre à perte n'est jamais une stratégie durable, même pour garder un client important." }, en:{ q:"A key client threatens to leave unless you cut prices below profitability. What's your position?", example:"I first look for an alternative solution (volume, contract length, scope) before considering a price cut. Selling at a loss is never a sustainable strategy, even to keep an important client." } },
  { id:"r042", category:"situation", fr:{ q:"Vous apprenez qu'un collègue plus expérimenté critique votre travail auprès de la direction. Que faites-vous ?", example:"J'en parle directement avec le collègue concerné pour comprendre le fond de la critique, sans passer par des intermédiaires. Si le point est valable, je m'améliore ; sinon, je clarifie les faits avec la direction." }, en:{ q:"You learn a more senior colleague is criticizing your work to leadership. What do you do?", example:"I address it directly with that colleague to understand the substance of the criticism, without going through intermediaries. If the point is valid, I improve; if not, I clarify the facts with leadership." } },
  { id:"r043", category:"situation", fr:{ q:"On vous propose une opportunité interne totalement différente de votre plan de carrière. Comment décidez-vous ?", example:"J'évalue ce que ça m'apporterait en compétences transférables et en visibilité, même si ce n'est pas dans mon plan initial — une carrière n'est pas toujours une ligne droite." }, en:{ q:"You're offered an internal opportunity completely different from your career plan. How do you decide?", example:"I evaluate what transferable skills and visibility it would bring, even if it's outside my original plan — a career isn't always a straight line." } },
  { id:"r044", category:"situation", fr:{ q:"Le comptable externe transmet un bilan avec une anomalie 48h avant l'assemblée générale. Quelle est votre priorité ?", example:"Comprendre immédiatement la nature et l'ampleur de l'anomalie, corriger ce qui peut l'être dans les temps, et informer la direction sans attendre pour décider ensemble de la marche à suivre pour l'AG." }, en:{ q:"The external accountant sends a balance sheet with an anomaly 48 hours before the shareholders' meeting. What's your priority?", example:"Immediately understand the nature and scale of the anomaly, fix what can be fixed in time, and inform leadership right away to decide together how to handle the meeting." } },
  { id:"r045", category:"situation", fr:{ q:"Si vous n'obteniez pas ce poste, quelle serait votre prochaine étape ?", example:"Je demanderais un retour honnête sur les points à améliorer, et je continuerais mes recherches en ciblant des postes similaires dans des environnements en croissance, en appliquant les enseignements tirés." }, en:{ q:"If you didn't get this position, what would your next step be?", example:"I'd ask for honest feedback on areas to improve, and continue my search targeting similar roles in growing environments, applying the lessons learned." } },

  // ---------- LEADERSHIP ----------
  { id:"r046", category:"leadership", fr:{ q:"Un collaborateur sous-performe malgré vos retours répétés. Que faites-vous ?", example:"Je clarifie précisément les attentes et je fixe un plan d'amélioration avec des jalons courts. Si rien ne change après un délai raisonnable, j'escalade la situation avec les RH, en documentant les échanges." }, en:{ q:"A team member underperforms despite repeated feedback. What do you do?", example:"I clarify expectations precisely and set an improvement plan with short milestones. If nothing changes after a reasonable time, I escalate with HR, documenting the exchanges." } },
  { id:"r047", category:"leadership", fr:{ q:"Comment motivez-vous une équipe après une mauvaise nouvelle (plan d'économies, gel des embauches) ?", example:"En étant honnête sur la situation plutôt qu'en minimisant, puis en recentrant l'équipe sur ce qui est sous son contrôle et sur les objectifs concrets à court terme." }, en:{ q:"How do you motivate a team after bad news (cost cuts, hiring freeze)?", example:"By being honest about the situation rather than downplaying it, then refocusing the team on what's within their control and on concrete short-term goals." } },
  { id:"r048", category:"leadership", fr:{ q:"Comment déléguez-vous une tâche que vous savez mieux faire vous-même ?", example:"Je délègue quand même, en expliquant le résultat attendu plutôt que la méthode exacte, et en acceptant qu'elle soit faite différemment de la mienne tant que le résultat est atteint." }, en:{ q:"How do you delegate a task you know you'd do better yourself?", example:"I delegate it anyway, explaining the expected outcome rather than the exact method, and accepting it may be done differently from how I would, as long as the result is met." } },
  { id:"r049", category:"leadership", fr:{ q:"Deux membres de votre équipe sont en désaccord permanent. Comment intervenez-vous ?", example:"Je les rencontre séparément d'abord pour comprendre chaque point de vue, puis ensemble pour clarifier les objectifs communs et les rôles précis de chacun — souvent le conflit vient d'un flou sur les responsabilités." }, en:{ q:"Two team members are in constant disagreement. How do you step in?", example:"I meet them separately first to understand each perspective, then together to clarify shared goals and each person's exact role — conflict often comes from unclear responsibilities." } },
  { id:"r050", category:"leadership", fr:{ q:"Comment donnez-vous un feedback négatif à quelqu'un de sensible à la critique ?", example:"Je pars des faits concrets plutôt que du jugement, je souligne aussi ce qui fonctionne, et je termine sur une piste d'amélioration claire et actionnable." }, en:{ q:"How do you give negative feedback to someone sensitive to criticism?", example:"I start from concrete facts rather than judgment, also highlight what's working, and end with a clear, actionable improvement path." } },
  { id:"r051", category:"leadership", fr:{ q:"Comment intégrez-vous un nouveau collaborateur dans une équipe finance ?", example:"Un parcours d'onboarding structuré sur les 30 premiers jours, un référent désigné, et des points réguliers courts pour ajuster rapidement en cas de besoin." }, en:{ q:"How do you onboard a new hire into a finance team?", example:"A structured 30-day onboarding path, a designated buddy, and short regular check-ins to adjust quickly if needed." } },
  { id:"r052", category:"leadership", fr:{ q:"Un collaborateur démissionne en pleine clôture annuelle. Comment réagissez-vous ?", example:"Je sécurise d'abord la continuité opérationnelle en documentant ce qu'il fait et en réorganisant les priorités de l'équipe, avant de gérer la question du recrutement à moyen terme." }, en:{ q:"A team member resigns in the middle of the annual closing. How do you react?", example:"I first secure operational continuity by documenting their work and reorganizing team priorities, before addressing the mid-term hiring question." } },
  { id:"r053", category:"leadership", fr:{ q:"Comment arbitrez-vous les priorités de votre équipe quand tout est urgent ?", example:"Je distingue l'urgence réelle (impact business immédiat) de l'urgence ressentie, et je communique clairement l'ordre choisi et pourquoi, pour éviter le sentiment d'arbitraire." }, en:{ q:"How do you arbitrate your team's priorities when everything is urgent?", example:"I separate real urgency (immediate business impact) from perceived urgency, and clearly communicate the chosen order and why, to avoid a sense of arbitrariness." } },
  { id:"r054", category:"leadership", fr:{ q:"Comment construisez-vous la confiance avec une équipe qui n'a pas connu son ancien manager ?", example:"En étant transparent sur ma façon de travailler dès le début, en tenant mes engagements même petits, et en prenant le temps d'écouter chacun individuellement avant de changer quoi que ce soit." }, en:{ q:"How do you build trust with a team that hasn't experienced you as a manager before?", example:"By being transparent about how I work from day one, keeping even small commitments, and taking time to listen to each person individually before changing anything." } },
  { id:"r055", category:"leadership", fr:{ q:"Quel est, selon vous, le principal piège d'un manager qui vient d'être promu ?", example:"Vouloir tout faire soi-même par peur de déléguer, ou au contraire changer trop vite les méthodes en place sans comprendre pourquoi elles existent." }, en:{ q:"What do you think is the main trap for a newly promoted manager?", example:"Wanting to do everything themselves out of fear of delegating, or conversely changing existing methods too fast without understanding why they exist." } },
  { id:"r056", category:"leadership", fr:{ q:"Comment gérez-vous un collaborateur plus âgé ou plus expérimenté que vous ?", example:"Je reconnais explicitement son expérience et je m'appuie dessus, tout en assumant clairement mon rôle de décision quand c'est nécessaire — le respect mutuel n'empêche pas la clarté des rôles." }, en:{ q:"How do you manage a team member older or more experienced than you?", example:"I explicitly acknowledge their experience and lean on it, while clearly owning my decision-making role when needed — mutual respect doesn't remove role clarity." } },
  { id:"r057", category:"leadership", fr:{ q:"Comment mesurez-vous la performance de votre équipe au-delà des chiffres ?", example:"La qualité des décisions prises grâce à leur travail, l'autonomie gagnée dans le temps, et la capacité de l'équipe à anticiper les problèmes plutôt qu'à les subir." }, en:{ q:"How do you measure your team's performance beyond the numbers?", example:"The quality of decisions their work enables, the autonomy gained over time, and the team's ability to anticipate problems rather than just react to them." } },

  // ---------- CULTURE / RAPIDE ----------
  { id:"r058", category:"culture", fr:{ q:"Citez un chiffre ou une actualité économique récente qui vous a marqué.", example:"Choisir une actualité liée à votre secteur cible (taux d'intérêt, inflation, un rachat marquant) et expliquer en une phrase pourquoi elle a un impact concret sur les entreprises comme celle que vous visez." }, en:{ q:"Name a recent economic figure or news item that struck you.", example:"Pick a news item related to your target sector (interest rates, inflation, a notable acquisition) and explain in one sentence why it has a concrete impact on companies like the one you're targeting." } },
  { id:"r059", category:"culture", fr:{ q:"Quel DAF, CFO ou dirigeant admirez-vous, et pourquoi ?", example:"Choisir une personne dont le parcours illustre une qualité que vous voulez développer (rigueur, vision stratégique, capacité à structurer), et l'expliquer avec un exemple concret plutôt qu'un nom sans contexte." }, en:{ q:"Which CFO or business leader do you admire, and why?", example:"Pick someone whose path illustrates a quality you want to develop (rigor, strategic vision, ability to structure), and explain it with a concrete example rather than just naming them." } },
  { id:"r060", category:"culture", fr:{ q:"Quel est, selon vous, le rôle du directeur financier dans 10 ans ?", example:"Moins de production de chiffres (automatisée par les outils/IA) et davantage de conseil stratégique, d'analyse prédictive, et d'accompagnement des décisions à fort enjeu." }, en:{ q:"What do you think the CFO's role will look like in 10 years?", example:"Less number-crunching (automated by tools/AI) and more strategic advisory, predictive analysis, and support on high-stakes decisions." } },
  { id:"r061", category:"culture", fr:{ q:"Quelle est la différence entre un bon et un excellent directeur financier ?", example:"Le bon sécurise les chiffres et le reporting. L'excellent va plus loin : il anticipe les risques avant qu'ils n'arrivent et influence réellement les décisions stratégiques de l'entreprise." }, en:{ q:"What's the difference between a good and an excellent finance director?", example:"The good one secures the numbers and reporting. The excellent one goes further: they anticipate risks before they happen and genuinely influence the company's strategic decisions." } },
  { id:"r062", category:"culture", fr:{ q:"Quel outil ou technologie financière pensez-vous incontournable dans les 5 prochaines années ?", example:"L'automatisation du reporting et l'IA appliquée à la prévision financière — cela libère du temps pour l'analyse et le conseil plutôt que la production manuelle de données." }, en:{ q:"What financial tool or technology do you think will be essential in the next 5 years?", example:"Reporting automation and AI applied to financial forecasting — it frees up time for analysis and advisory rather than manual data production." } },
  { id:"r063", category:"culture", fr:{ q:"Comment définiriez-vous le succès professionnel en une phrase ?", example:"Avoir un impact mesurable sur les décisions et la croissance de l'entreprise, tout en continuant à apprendre." }, en:{ q:"How would you define professional success in one sentence?", example:"Having a measurable impact on the company's decisions and growth, while continuing to learn." } },
  { id:"r064", category:"culture", fr:{ q:"Quelle est la décision financière la plus risquée que vous ayez vu prendre ?", example:"Choisir un exemple précis (recrutement anticipé, investissement, changement de prix) et expliquer comment le risque a été géré ou aurait pu l'être mieux — cela montre votre esprit critique." }, en:{ q:"What's the riskiest financial decision you've seen made?", example:"Pick a specific example (early hiring, an investment, a pricing change) and explain how the risk was handled or could have been handled better — it shows critical thinking." } },
  { id:"r065", category:"culture", fr:{ q:"Quel livre ou podcast business vous a le plus marqué récemment ?", example:"Choisissez un contenu réellement lu/écouté et reliez-le à une pratique concrète que vous avez appliquée dans votre travail — la crédibilité vient du lien avec l'action, pas du titre cité." }, en:{ q:"What business book or podcast has influenced you most recently?", example:"Pick something you actually read/listened to and connect it to a concrete practice you applied at work — credibility comes from the link to action, not the title itself." } },
  { id:"r066", category:"culture", fr:{ q:"Si vous deviez résumer votre style de travail en 3 mots, lesquels choisiriez-vous ?", example:"Choisissez 3 mots que vous pouvez chacun illustrer avec un exemple concret de 10 secondes — ne pas se contenter d'énumérer des qualificatifs sans preuve." }, en:{ q:"If you had to sum up your work style in 3 words, what would they be?", example:"Choose 3 words you can each back up with a 10-second concrete example — don't just list adjectives without proof." } },
  { id:"r067", category:"culture", fr:{ q:"Qu'est-ce qu'un bon reporting financier doit absolument éviter ?", example:"La surcharge d'information sans hiérarchie claire — trop de chiffres tue le message. Un bon reporting va à l'essentiel et met en avant ce qui nécessite une décision." }, en:{ q:"What must a good financial report absolutely avoid?", example:"Information overload without clear hierarchy — too many numbers kill the message. A good report gets to the point and highlights what needs a decision." } },
  { id:"r068", category:"culture", fr:{ q:"Quelle industrie en dehors de la vôtre trouvez-vous financièrement fascinante, et pourquoi ?", example:"Choisissez un secteur avec un modèle économique distinctif (marketplace, énergie, luxe) et expliquez ce qui rend son pilotage financier particulier — cela montre une curiosité réelle pour la finance au-delà de votre poste." }, en:{ q:"What industry outside your own do you find financially fascinating, and why?", example:"Pick a sector with a distinctive business model (marketplace, energy, luxury) and explain what makes its financial steering unique — it shows genuine curiosity for finance beyond your own role." } },
  { id:"r069", category:"culture", fr:{ q:"Quelle est la plus grande erreur financière que vous ayez observée chez un ancien employeur ?", example:"Restez factuel et sans juger nommément les personnes ; concentrez-vous sur la cause structurelle (manque de contrôle, absence de process) et sur ce que vous en avez tiré comme leçon." }, en:{ q:"What's the biggest financial mistake you've observed at a former employer?", example:"Stay factual without naming or judging individuals; focus on the structural cause (lack of controls, missing process) and the lesson you took from it." } },
  { id:"r070", category:"culture", fr:{ q:"En une phrase, pourquoi la fonction finance est-elle stratégique et pas seulement comptable ?", example:"Parce qu'elle transforme des données brutes en décisions concrètes sur la croissance, les investissements et les risques — la comptabilité enregistre le passé, la finance éclaire l'avenir." }, en:{ q:"In one sentence, why is finance strategic and not just accounting?", example:"Because it turns raw data into concrete decisions about growth, investment and risk — accounting records the past, finance illuminates the future." } }
];

// ----------------------------------------------------------------
// JEU 3 — Face à face (par profil d'interlocuteur)
// persona : drh | cfo | ceo — 30 questions chacun
// ----------------------------------------------------------------
const PERSONA_QUESTIONS = [
  // =========================== DRH (30) ===========================
  { id:"h01", persona:"drh", fr:{ q:"Deux personnes de votre équipe sont en conflit et ça impacte le travail. Que faites-vous ?", example:"Je les reçois d'abord séparément pour comprendre chaque version, puis ensemble pour clarifier les faits et fixer des règles de fonctionnement claires. Si le conflit persiste, j'implique les RH." }, en:{ q:"Two people on your team are in conflict and it's affecting the work. What do you do?", example:"I meet each of them separately first to understand their side, then together to clarify the facts and set clear working rules. If the conflict continues, I involve HR." } },
  { id:"h02", persona:"drh", fr:{ q:"Un excellent salarié veut partir à cause de son salaire. Que faites-vous ?", example:"Je vérifie d'abord si c'est uniquement une question de salaire ou un signal plus large (reconnaissance, évolution). Si le marché justifie sa demande, je me bats pour l'ajuster ; sinon, je compense par d'autres leviers concrets." }, en:{ q:"A top performer wants to leave because of their salary. What do you do?", example:"I first check whether it's purely about salary or a broader signal (recognition, growth). If the market justifies the request, I push to adjust it; if not, I compensate with other concrete levers." } },
  { id:"h03", persona:"drh", fr:{ q:"Vous devez licencier une personne de votre équipe. Comment gérez-vous la situation ?", example:"Je prépare l'entretien avec les RH pour respecter le cadre légal, je suis direct et factuel sur les raisons, sans dramatiser ni minimiser, et je m'assure que la personne parte avec un minimum de dignité." }, en:{ q:"You have to let go of someone on your team. How do you handle it?", example:"I prepare the conversation with HR to respect the legal framework, I'm direct and factual about the reasons without dramatizing or minimizing, and I make sure the person leaves with dignity." } },
  { id:"h04", persona:"drh", fr:{ q:"Vous avez trop de travail et votre équipe aussi. Comment priorisez-vous ?", example:"Je priorise par impact business et je dis clairement à la direction ce qui ne sera pas fait dans les délais, plutôt que de laisser l'équipe s'épuiser en silence." }, en:{ q:"You have too much work and so does your team. How do you prioritize?", example:"I prioritize by business impact and clearly tell leadership what won't get done on time, rather than letting the team burn out silently." } },
  { id:"h05", persona:"drh", fr:{ q:"Votre manager vous demande quelque chose que vous pensez être une mauvaise décision. Que faites-vous ?", example:"J'exprime mon désaccord avec des arguments factuels, en privé. Si la décision est maintenue, je l'exécute loyalement, sauf si elle est illégale ou dangereuse." }, en:{ q:"Your manager asks you to do something you think is a bad call. What do you do?", example:"I raise my disagreement with factual arguments, privately. If the decision stands, I execute it loyally, unless it's illegal or dangerous." } },
  { id:"h06", persona:"drh", fr:{ q:"Vous arrivez dans une équipe où personne ne vous connaît. Comment gagnez-vous leur confiance ?", example:"Je passe du temps à écouter individuellement chaque personne avant de changer quoi que ce soit, je tiens mes engagements même petits, et je suis transparent sur ma façon de travailler." }, en:{ q:"You join a team where no one knows you. How do you earn their trust?", example:"I spend time listening to each person individually before changing anything, I keep even small commitments, and I'm transparent about how I work." } },
  { id:"h07", persona:"drh", fr:{ q:"Un collaborateur fait régulièrement des erreurs mais est très apprécié par l'équipe. Comment réagissez-vous ?", example:"Je sépare le lien personnel de la performance : je nomme clairement le problème avec des faits, je mets en place un plan d'amélioration, sans laisser la popularité empêcher un cadrage nécessaire." }, en:{ q:"A team member makes regular mistakes but is well liked by the team. How do you react?", example:"I separate the personal bond from performance: I name the problem clearly with facts and set an improvement plan, without letting popularity get in the way of necessary structure." } },
  { id:"h08", persona:"drh", fr:{ q:"Vous avez un désaccord avec un collègue senior. Comment le gérez-vous ?", example:"Je m'appuie sur les faits et les chiffres plutôt que sur la hiérarchie implicite, et je cherche d'abord un terrain d'entente en privé avant d'escalader si nécessaire." }, en:{ q:"You disagree with a senior colleague. How do you handle it?", example:"I lean on facts and figures rather than implicit hierarchy, and look for common ground privately first, before escalating if needed." } },
  { id:"h09", persona:"drh", fr:{ q:"Comment intégrez-vous un nouveau collaborateur pour qu'il soit rapidement opérationnel ?", example:"Un parcours structuré sur 30 jours avec un référent désigné, des points réguliers courts, et des objectifs clairs dès la première semaine pour éviter le flou." }, en:{ q:"How do you onboard a new hire so they become productive quickly?", example:"A structured 30-day path with a designated buddy, short regular check-ins, and clear goals from week one to avoid ambiguity." } },
  { id:"h10", persona:"drh", fr:{ q:"Comment donnez-vous un feedback à quelqu'un de très susceptible à la critique ?", example:"Je pars des faits observables, pas du jugement de la personne, je reconnais aussi ce qui fonctionne, et je termine sur une action concrète à améliorer." }, en:{ q:"How do you give feedback to someone very sensitive to criticism?", example:"I start from observable facts, not judgment of the person, I also acknowledge what's working, and I end on one concrete action to improve." } },
  { id:"h11", persona:"drh", fr:{ q:"Un collaborateur est régulièrement absent sans raison claire. Que faites-vous ?", example:"Je regarde d'abord s'il y a une cause sous-jacente (santé, personnel, désengagement) avant de sanctionner, puis je fixe un cadre clair avec des conséquences si rien ne change." }, en:{ q:"A team member is regularly absent without a clear reason. What do you do?", example:"I first check for an underlying cause (health, personal, disengagement) before sanctioning, then set a clear framework with consequences if nothing changes." } },
  { id:"h12", persona:"drh", fr:{ q:"Comment gérez-vous le travail hybride quand l'équipe n'a pas les mêmes attentes sur la présence au bureau ?", example:"Je fixe des règles claires sur les jours de présence et la disponibilité, basées sur les besoins réels de collaboration de l'équipe plutôt que sur des principes rigides." }, en:{ q:"How do you manage hybrid work when the team disagrees on office presence?", example:"I set clear rules on in-office days and availability, based on the team's real collaboration needs rather than rigid principles." } },
  { id:"h13", persona:"drh", fr:{ q:"Vous devez choisir entre deux candidats internes pour une promotion. Comment décidez-vous ?", example:"Je base la décision sur des critères objectifs de compétences et de potentiel, communiqués en amont, et je donne un retour constructif à la personne non retenue." }, en:{ q:"You must choose between two internal candidates for a promotion. How do you decide?", example:"I base the decision on objective skill and potential criteria, communicated in advance, and give constructive feedback to the person not selected." } },
  { id:"h14", persona:"drh", fr:{ q:"Un collaborateur demande une augmentation légitime mais le budget est serré. Que répondez-vous ?", example:"Je reconnais la légitimité de la demande, j'explique la contrainte budgétaire avec transparence, et je propose un calendrier ou des alternatives non-salariales en attendant." }, en:{ q:"An employee makes a legitimate raise request but the budget is tight. What do you say?", example:"I acknowledge the request is fair, explain the budget constraint transparently, and offer a timeline or non-salary alternatives in the meantime." } },
  { id:"h15", persona:"drh", fr:{ q:"Un collaborateur vous signale un comportement problématique de son manager direct. Que faites-vous ?", example:"Je prends le signalement au sérieux, je le documente, et je le fais remonter au bon niveau (RH, direction) sans essayer de gérer seul une situation qui dépasse mon rôle." }, en:{ q:"A team member reports concerning behavior from their direct manager. What do you do?", example:"I take the report seriously, document it, and escalate it to the right level (HR, leadership) rather than trying to handle alone something beyond my role." } },
  { id:"h16", persona:"drh", fr:{ q:"Comment menez-vous un entretien annuel difficile avec quelqu'un en sous-performance ?", example:"Je prépare des exemples factuels précis en amont, je laisse la personne s'exprimer, et je termine sur un plan d'action partagé plutôt qu'un simple constat." }, en:{ q:"How do you run a difficult annual review with an underperformer?", example:"I prepare specific factual examples in advance, let the person speak, and end with a shared action plan rather than just a verdict." } },
  { id:"h17", persona:"drh", fr:{ q:"Vous devez sanctionner une faute professionnelle. Comment procédez-vous ?", example:"Je vérifie les faits avec les RH avant d'agir, et j'applique une sanction proportionnée et cohérente avec ce qui a été fait pour des situations similaires." }, en:{ q:"You need to sanction professional misconduct. How do you proceed?", example:"I verify the facts with HR before acting, and apply a sanction proportionate and consistent with how similar situations were handled." } },
  { id:"h18", persona:"drh", fr:{ q:"Comment protégez-vous votre équipe d'un risque de burn-out en période de forte charge ?", example:"Je surveille les signaux (heures, qualité, ambiance), j'ajuste la charge ou les priorités en amont, et j'encourage activement la prise de repos plutôt que d'attendre la rupture." }, en:{ q:"How do you protect your team from burnout during a heavy workload period?", example:"I watch for signals (hours, quality, mood), adjust workload or priorities early, and actively encourage time off rather than waiting for a breakdown." } },
  { id:"h19", persona:"drh", fr:{ q:"Un collaborateur conteste systématiquement vos décisions. Comment réagissez-vous ?", example:"Je cherche à comprendre la source de la contestation — manque d'adhésion ou vrai désaccord de fond — et je clarifie que la discussion est ouverte en amont, mais que l'exécution est due une fois la décision prise." }, en:{ q:"A team member systematically challenges your decisions. How do you react?", example:"I try to understand the source — lack of buy-in or a genuine disagreement — and clarify that discussion is welcome beforehand, but execution is expected once a decision is made." } },
  { id:"h20", persona:"drh", fr:{ q:"Deux services sont en conflit et ça bloque un projet commun. Comment intervenez-vous ?", example:"Je réunis les deux parties pour clarifier l'objectif commun au-delà des intérêts de chaque service, et je fais arbitrer par un objectif business partagé plutôt qu'un rapport de force." }, en:{ q:"Two departments are in conflict and it's blocking a shared project. How do you step in?", example:"I bring both sides together to clarify the shared goal beyond each department's interests, and settle it against a common business objective rather than a power struggle." } },
  { id:"h21", persona:"drh", fr:{ q:"Comment anticipez-vous la succession d'un poste clé dans votre équipe ?", example:"J'identifie et je développe en amont un ou plusieurs relais potentiels via de la délégation progressive, pour ne pas dépendre d'une seule personne." }, en:{ q:"How do you plan succession for a key role on your team?", example:"I identify and develop potential successors early through progressive delegation, so the team doesn't depend on a single person." } },
  { id:"h22", persona:"drh", fr:{ q:"Des rumeurs négatives circulent sur un changement organisationnel à venir. Que faites-vous ?", example:"Je communique tôt et factuellement sur ce qui est décidé et ce qui ne l'est pas encore, pour combler le vide d'information qui nourrit les rumeurs." }, en:{ q:"Negative rumors are spreading about an upcoming reorganization. What do you do?", example:"I communicate early and factually about what's decided and what isn't yet, to close the information gap that feeds rumors." } },
  { id:"h23", persona:"drh", fr:{ q:"Un manager sous votre responsabilité gère mal son équipe. Comment intervenez-vous ?", example:"Je lui donne un feedback direct et concret sur ce qui ne va pas, je l'accompagne avec un plan d'amélioration, et j'évalue les progrès sur une période définie." }, en:{ q:"A manager reporting to you is mismanaging their team. How do you step in?", example:"I give them direct, concrete feedback on what's wrong, support them with an improvement plan, and assess progress over a defined period." } },
  { id:"h24", persona:"drh", fr:{ q:"Vous recevez une plainte de harcèlement au sein de votre équipe. Que faites-vous ?", example:"Je prends la plainte au sérieux immédiatement, je la fais remonter aux RH sans délai pour une enquête formelle, et je protège la personne qui a signalé de toute forme de représailles." }, en:{ q:"You receive a harassment complaint within your team. What do you do?", example:"I take it seriously immediately, escalate it to HR without delay for a formal investigation, and protect the person who reported it from any retaliation." } },
  { id:"h25", persona:"drh", fr:{ q:"Vous devez défendre votre budget d'effectif face aux RH ou à la direction. Comment argumentez-vous ?", example:"J'appuie ma demande sur des données concrètes (charge, impact business, risque si le poste n'est pas pourvu) plutôt que sur un simple ressenti d'équipe surchargée." }, en:{ q:"You need to defend your headcount budget to HR or leadership. How do you argue your case?", example:"I back the request with concrete data (workload, business impact, risk if unfilled) rather than a vague feeling that the team is overloaded." } },
  { id:"h26", persona:"drh", fr:{ q:"Comment gérez-vous les différences générationnelles au sein d'une même équipe ?", example:"Je valorise ce que chaque génération apporte (expérience vs nouvelles pratiques) et je fixe des règles communes claires plutôt que de créer des traitements différenciés." }, en:{ q:"How do you manage generational differences within the same team?", example:"I value what each generation brings (experience vs. new practices) and set clear common rules rather than differentiated treatment." } },
  { id:"h27", persona:"drh", fr:{ q:"L'équipe est divisée sur la politique de télétravail. Comment tranchez-vous ?", example:"Je cherche un compromis basé sur les besoins réels de collaboration de l'équipe, en évitant une règle universelle qui ignore les spécificités de chaque poste." }, en:{ q:"The team is split over the remote-work policy. How do you settle it?", example:"I look for a compromise based on the team's real collaboration needs, avoiding a blanket rule that ignores each role's specifics." } },
  { id:"h28", persona:"drh", fr:{ q:"Que faites-vous des enseignements d'un entretien de départ ?", example:"J'écoute sans me justifier, je cherche des patterns récurrents sur plusieurs départs plutôt qu'un cas isolé, et j'en tire des actions concrètes pour l'équipe restante." }, en:{ q:"What do you do with the takeaways from an exit interview?", example:"I listen without getting defensive, look for recurring patterns across several departures rather than one isolated case, and turn them into concrete actions for the remaining team." } },
  { id:"h29", persona:"drh", fr:{ q:"Un collaborateur très performant a un comportement toxique pour l'ambiance de l'équipe. Que faites-vous ?", example:"Je nomme clairement l'impact négatif sur l'équipe, même si la performance individuelle est bonne, et je fixe des attentes de comportement non négociables." }, en:{ q:"A high performer has a toxic effect on team morale. What do you do?", example:"I clearly name the negative impact on the team, even if individual performance is strong, and set non-negotiable behavior expectations." } },
  { id:"h30", persona:"drh", fr:{ q:"Une réorganisation va toucher directement votre équipe. Comment l'accompagnez-vous ?", example:"Je communique tôt et honnêtement sur ce qui est certain et ce qui ne l'est pas encore, et je reste disponible pour des questions individuelles plutôt que de tout gérer uniquement en collectif." }, en:{ q:"A reorganization will directly affect your team. How do you support them through it?", example:"I communicate early and honestly about what's certain and what isn't yet, and stay available for individual questions rather than only handling it as a group." } },

  // =========================== CFO (30) ===========================
  { id:"f01", persona:"cfo", fr:{ q:"Le CA augmente de 30 %, mais l'EBITDA baisse. Pourquoi ?", example:"Je regarde si la hausse du CA vient d'une baisse de prix, d'un mix moins rentable, ou d'une hausse disproportionnée des coûts liés à la croissance. La croissance ne doit jamais être poursuivie sans piloter la marge en parallèle." }, en:{ q:"Revenue is up 30%, but EBITDA is down. Why?", example:"I check whether the revenue growth came from lower prices, a less profitable mix, or costs growing faster than the top line. Growth should never be pursued without tracking margin alongside it." } },
  { id:"f02", persona:"cfo", fr:{ q:"Le cash baisse alors que l'EBITDA est positif. Expliquez-moi.", example:"L'écart vient généralement du BFR (stocks, créances clients qui gonflent) ou d'investissements/remboursements de dette non reflétés dans l'EBITDA. Je décompose le passage EBITDA → cash flow ligne par ligne." }, en:{ q:"Cash is falling even though EBITDA is positive. Explain that.", example:"The gap usually comes from working capital (growing inventory or receivables) or from capex/debt repayment not reflected in EBITDA. I break down the EBITDA-to-cash bridge line by line." } },
  { id:"f03", persona:"cfo", fr:{ q:"Le BFR augmente fortement. Que faites-vous ?", example:"Je décompose l'augmentation entre stocks, créances clients et dettes fournisseurs pour identifier la source, puis j'agis sur le levier le plus rapide à activer, souvent le recouvrement client." }, en:{ q:"Working capital requirement is rising sharply. What do you do?", example:"I break the increase down between inventory, receivables and payables to find the source, then act on the fastest lever available — usually customer collections." } },
  { id:"f04", persona:"cfo", fr:{ q:"Vous devez améliorer la trésorerie de 500k€. Par où commencez-vous ?", example:"Je commence par les leviers rapides et sans coût : accélérer le recouvrement clients, négocier les délais fournisseurs, réduire les stocks dormants — avant d'envisager du financement externe." }, en:{ q:"You need to improve cash by €500k. Where do you start?", example:"I start with the fast, free levers: speeding up collections, negotiating supplier terms, clearing dormant inventory — before considering external financing." } },
  { id:"f05", persona:"cfo", fr:{ q:"La marge baisse de 5 points. Comment analysez-vous le problème ?", example:"Je décompose l'effet prix, l'effet mix produit/client, et l'effet coût, pour isoler la cause dominante plutôt que de chercher une explication générale." }, en:{ q:"Margin has dropped 5 points. How do you analyze the problem?", example:"I break it into price effect, product/customer mix effect, and cost effect, to isolate the dominant cause rather than reaching for a general explanation." } },
  { id:"f06", persona:"cfo", fr:{ q:"Comment construiriez-vous un forecast de trésorerie ?", example:"Je pars des encaissements et décaissements certains (contrats, échéances fixes), j'ajoute les hypothèses commerciales avec un scénario prudent, et je le mets à jour chaque semaine en le comparant au réel." }, en:{ q:"How would you build a cash forecast?", example:"I start from known inflows and outflows (contracts, fixed deadlines), add commercial assumptions with a conservative scenario, and update it weekly against actuals." } },
  { id:"f07", persona:"cfo", fr:{ q:"Les prévisions sont systématiquement trop optimistes. Que changez-vous ?", example:"Je challenge systématiquement les hypothèses commerciales à la source avec les données historiques réelles, et j'ajoute une marge de prudence structurelle dans le budget plutôt que de corriger après coup." }, en:{ q:"Forecasts are consistently too optimistic. What do you change?", example:"I systematically challenge commercial assumptions against actual historical data, and build in a structural margin of caution rather than correcting after the fact." } },
  { id:"f08", persona:"cfo", fr:{ q:"Un client important paie avec 90 jours de retard. Quel impact ?", example:"Ça immobilise du cash et augmente le risque de défaut ; je chiffre l'impact en coût de financement, puis j'agis vite : relance, renégociation des conditions, voire affacturage si c'est récurrent." }, en:{ q:"A major client pays 90 days late. What's the impact?", example:"It ties up cash and raises default risk; I quantify the financing cost, then act fast: follow-up, renegotiated terms, or factoring if it becomes recurring." } },
  { id:"f09", persona:"cfo", fr:{ q:"Une BU est rentable sur le papier mais consomme beaucoup de cash. Pourquoi ?", example:"Souvent un BFR très élevé (stocks, délais clients longs) ou des investissements lourds non reflétés dans le compte de résultat. Il faut regarder le cash flow de la BU, pas seulement sa marge." }, en:{ q:"A business unit is profitable on paper but burns a lot of cash. Why?", example:"Usually very high working capital (inventory, long payment terms) or heavy capex not reflected in the P&L. You need to look at the BU's cash flow, not just its margin." } },
  { id:"f10", persona:"cfo", fr:{ q:"Comment détermineriez-vous si un client est réellement rentable ?", example:"Je vais au-delà de la marge brute : coût du service, du support, des délais de paiement, des remises accordées — certains clients rentables en apparence coûtent cher en réalité." }, en:{ q:"How would you determine if a client is truly profitable?", example:"I go beyond gross margin: cost to serve, support cost, payment terms, discounts granted — some clients look profitable but are actually costly." } },
  { id:"f11", persona:"cfo", fr:{ q:"Le commercial veut augmenter les remises pour accélérer les ventes. Quel est votre avis ?", example:"Je challenge avec les chiffres : l'impact sur la marge doit être compensé par un volume ou une récurrence suffisante, sinon on vend à perte pour accélérer un chiffre qui ne vaut rien." }, en:{ q:"Sales wants bigger discounts to close deals faster. What's your view?", example:"I challenge it with numbers: the margin hit must be offset by enough volume or recurrence, otherwise we're selling at a loss to inflate a number that isn't worth much." } },
  { id:"f12", persona:"cfo", fr:{ q:"Quels KPI suivriez-vous chaque mois en tant que Head of Finance ?", example:"Trésorerie et runway, marge par activité/client, et écart budget vs réel sur les postes clés — les trois qui alertent le plus tôt sur une dérive." }, en:{ q:"What KPIs would you track each month as Head of Finance?", example:"Cash and runway, margin by activity/client, and budget-vs-actual variance on key lines — the three that give the earliest warning of trouble." } },
  { id:"f13", persona:"cfo", fr:{ q:"Le budget prévoit +40 % de croissance, mais après 3 mois vous êtes à +10 %. Que faites-vous ?", example:"Je révise le forecast immédiatement à la baisse plutôt que d'espérer un rattrapage, j'identifie la cause de l'écart avec les équipes commerciales, et j'ajuste les dépenses engagées en conséquence." }, en:{ q:"Budget assumed +40% growth, but after 3 months you're at +10%. What do you do?", example:"I revise the forecast down immediately rather than hoping for a catch-up, identify the cause with the sales teams, and adjust committed spend accordingly." } },
  { id:"f14", persona:"cfo", fr:{ q:"Vous arrivez chez nous. Vous avez 30 jours pour comprendre la situation financière. Que faites-vous ?", example:"Je commence par la trésorerie réelle et les engagements à venir, puis les contrats clients/fournisseurs majeurs, la fiabilité des process de clôture, et enfin les risques cachés (litiges, engagements hors bilan)." }, en:{ q:"You join us. You have 30 days to understand the financial situation. What do you do?", example:"I start with real cash position and upcoming commitments, then major client/supplier contracts, the reliability of the closing process, and finally hidden risks (disputes, off-balance-sheet commitments)." } },
  { id:"f15", persona:"cfo", fr:{ q:"Vous n'êtes pas d'accord avec les chiffres présentés par le CEO. Comment réagissez-vous ?", example:"Je vérifie d'abord mes propres données pour être sûr de mon fait, puis je présente l'écart avec des sources factuelles, en privé, sans remettre en cause la personne publiquement." }, en:{ q:"You disagree with the numbers the CEO is presenting. How do you react?", example:"I first double-check my own data to be sure, then present the discrepancy with factual sources, privately, without publicly undermining them." } },
  { id:"f16", persona:"cfo", fr:{ q:"Vous trouvez une erreur importante dans les comptes juste avant la clôture. Que faites-vous ?", example:"Je priorise la correction avant la publication plutôt que le respect du délai, et j'informe immédiatement la direction de l'impact et du délai supplémentaire nécessaire." }, en:{ q:"You find a significant error in the accounts right before closing. What do you do?", example:"I prioritize fixing it before publication over hitting the deadline, and immediately inform leadership of the impact and the extra time needed." } },
  { id:"f17", persona:"cfo", fr:{ q:"Votre CEO vous demande de réduire les coûts, mais vous pensez que cela va freiner la croissance. Que faites-vous ?", example:"Je chiffre précisément l'impact des deux scénarios (économies vs perte de croissance) pour objectiver la discussion, plutôt que d'opposer simplement mon avis au sien." }, en:{ q:"Your CEO asks you to cut costs, but you believe it will slow growth. What do you do?", example:"I precisely quantify the impact of both scenarios (savings vs. lost growth) to ground the discussion in data, rather than just opposing my opinion to theirs." } },
  { id:"f18", persona:"cfo", fr:{ q:"Quel est le premier risque financier que vous cherchez dans une entreprise que vous ne connaissez pas ?", example:"La trésorerie réelle et sa capacité à tenir plusieurs mois — c'est le risque qui peut tuer une entreprise même rentable sur le papier." }, en:{ q:"What's the first financial risk you look for in a company you don't know?", example:"Real cash position and how many months it can sustain — that's the risk that can kill a company even if it's profitable on paper." } },
  { id:"f19", persona:"cfo", fr:{ q:"Le CA augmente de 30 %, mais le cash diminue. Que se passe-t-il ?", example:"C'est le symptôme classique d'une croissance mal financée : le BFR augmente plus vite que la rentabilité. Je vérifie immédiatement le cycle de conversion cash et les délais clients/fournisseurs." }, en:{ q:"Revenue is up 30%, but cash is dropping. What's going on?", example:"That's the classic symptom of growth outpacing its financing: working capital rises faster than profitability. I immediately check the cash conversion cycle and payment terms." } },
  { id:"f20", persona:"cfo", fr:{ q:"Tout va bien dans les comptes, mais vous sentez que quelque chose ne va pas dans le business. Que cherchez-vous ?", example:"Je regarde au-delà des comptes : le pipeline commercial, le taux de renouvellement clients, les délais de paiement qui s'allongent — les signaux faibles apparaissent souvent avant les chiffres." }, en:{ q:"The accounts look fine, but you sense something is off in the business. What do you look for?", example:"I look beyond the accounts: sales pipeline, customer renewal rate, lengthening payment terms — early warning signs usually show up before the numbers do." } },
  { id:"f21", persona:"cfo", fr:{ q:"Le CEO veut doubler les effectifs cette année. Vous pensez que l'entreprise n'en a pas les moyens. Comment réagissez-vous ?", example:"Je présente un scénario chiffré de la trésorerie et de la rentabilité avec ce doublement, pour que la décision soit prise sur des faits — mon rôle est d'éclairer le risque, pas de dire simplement non." }, en:{ q:"The CEO wants to double headcount this year. You believe the company can't afford it. How do you react?", example:"I present a quantified cash and profitability scenario under that plan, so the decision is made on facts — my role is to illuminate the risk, not just say no." } },
  { id:"f22", persona:"cfo", fr:{ q:"Comment évalueriez-vous une entreprise avant un rachat (cible d'acquisition) ?", example:"Je regarde la qualité des revenus (récurrents ou non), la rentabilité réelle après retraitements, la dette et les engagements cachés, et je confronte le prix demandé à plusieurs méthodes de valorisation." }, en:{ q:"How would you assess a company before an acquisition?", example:"I look at revenue quality (recurring or not), real profitability after adjustments, debt and hidden commitments, and check the asking price against several valuation methods." } },
  { id:"f23", persona:"cfo", fr:{ q:"Comment couvrez-vous un risque de change sur des ventes à l'international ?", example:"Je quantifie d'abord l'exposition réelle, puis j'utilise des couvertures simples (contrats à terme) proportionnées au risque plutôt que de sur-couvrir inutilement." }, en:{ q:"How do you hedge currency risk on international sales?", example:"I first quantify the real exposure, then use simple hedges (forward contracts) proportionate to the risk rather than over-hedging unnecessarily." } },
  { id:"f24", persona:"cfo", fr:{ q:"Faut-il internaliser ou externaliser une fonction (build vs buy) ? Comment décidez-vous ?", example:"Je compare le coût total sur plusieurs années (interne vs externe), le time-to-market, et le niveau de contrôle nécessaire sur la fonction avant de trancher." }, en:{ q:"Should a function be built in-house or outsourced? How do you decide?", example:"I compare total multi-year cost (in-house vs. outsourced), time-to-market, and the level of control needed over the function before deciding." } },
  { id:"f25", persona:"cfo", fr:{ q:"Vous découvrez que l'entreprise est proche de casser un covenant bancaire. Que faites-vous ?", example:"J'alerte la banque avant qu'elle ne le découvre elle-même, avec un plan d'action crédible — la transparence proactive préserve la relation bien mieux que la surprise." }, en:{ q:"You discover the company is close to breaching a bank covenant. What do you do?", example:"I alert the bank before they discover it themselves, with a credible action plan — proactive transparency preserves the relationship far better than a surprise." } },
  { id:"f26", persona:"cfo", fr:{ q:"L'entreprise envisage une levée de fonds. Quels indicateurs préparez-vous en priorité ?", example:"La croissance du chiffre d'affaires et sa qualité (récurrence, rétention), l'unit economics, et un plan d'usage des fonds clair et crédible." }, en:{ q:"The company is considering a fundraise. What metrics do you prepare first?", example:"Revenue growth and its quality (recurrence, retention), unit economics, and a clear, credible plan for use of funds." } },
  { id:"f27", persona:"cfo", fr:{ q:"Comment décidez-vous d'investir ou non dans un nouvel outil de gestion (ERP, BI) ?", example:"Je compare le gain de temps et de fiabilité attendu au coût total (licence + implémentation + formation), avec un retour sur investissement estimé sur 2-3 ans." }, en:{ q:"How do you decide whether to invest in a new management tool (ERP, BI)?", example:"I compare the expected time and reliability gain against total cost (license + implementation + training), with an estimated ROI over 2-3 years." } },
  { id:"f28", persona:"cfo", fr:{ q:"Vous découvrez une faiblesse de contrôle interne (ex : double validation absente). Que faites-vous ?", example:"Je corrige immédiatement le risque le plus critique, je documente la faille, et je mets en place un contrôle correctif avant de chercher un responsable." }, en:{ q:"You discover an internal control weakness (e.g. missing dual approval). What do you do?", example:"I fix the most critical risk immediately, document the gap, and put a corrective control in place before looking for who's responsible." } },
  { id:"f29", persona:"cfo", fr:{ q:"Comment arbitrez-vous entre optimisation fiscale et prudence face au risque de redressement ?", example:"Je privilégie toujours les schémas dont la substance économique est réelle et documentée ; l'optimisation ne doit jamais dépasser la ligne où le risque de redressement dépasse le gain." }, en:{ q:"How do you balance tax optimization against the risk of a tax audit reassessment?", example:"I always favor structures with real, documented economic substance; optimization should never cross the line where audit risk outweighs the gain." } },
  { id:"f30", persona:"cfo", fr:{ q:"Vous devez présenter le budget à un board sceptique sur vos hypothèses. Comment le convainquez-vous ?", example:"Je base mes hypothèses sur des données historiques et des benchmarks externes vérifiables, et je présente des scénarios haut/bas plutôt qu'un chiffre unique, pour montrer la robustesse de la réflexion." }, en:{ q:"You must present the budget to a board skeptical of your assumptions. How do you convince them?", example:"I ground my assumptions in historical data and verifiable external benchmarks, and present upside/downside scenarios rather than a single number, to show the thinking is robust." } },

  // =========================== CEO (30) ===========================
  { id:"e01", persona:"ceo", fr:{ q:"Votre CA baisse de 20 %, vous faites quoi ?", example:"Je distingue d'abord si c'est un problème de volume, de prix ou de churn client, puis j'ajuste les coûts variables en conséquence tout en protégeant les investissements qui génèrent la croissance future." }, en:{ q:"Your revenue drops 20%. What do you do?", example:"I first identify whether it's a volume, price, or churn problem, then adjust variable costs accordingly while protecting the investments that drive future growth." } },
  { id:"e02", persona:"ceo", fr:{ q:"Un gros client veut partir, comment vous réagissez ?", example:"Je cherche à comprendre la vraie raison avant de réagir — prix, service, produit — et je négocie une solution ciblée plutôt qu'une remise générale qui affaiblirait la marge sur tous les clients." }, en:{ q:"A major client wants to leave. How do you react?", example:"I try to understand the real reason before reacting — price, service, product — and negotiate a targeted solution rather than a blanket discount that would weaken margin across all clients." } },
  { id:"e03", persona:"ceo", fr:{ q:"On veut recruter 10 personnes mais le cash est tendu. Vous faites quoi ?", example:"Je priorise les postes à impact direct sur le chiffre d'affaires ou la survie de l'entreprise, j'étale les recrutements dans le temps, et je sécurise le financement avant de m'engager." }, en:{ q:"We want to hire 10 people but cash is tight. What do you do?", example:"I prioritize roles with direct impact on revenue or survival, spread hiring over time, and secure financing before committing." } },
  { id:"e04", persona:"ceo", fr:{ q:"Vous avez 500k€ de cash, quelles sont vos priorités ?", example:"Je sécurise d'abord un coussin de sécurité de plusieurs mois de charges fixes, puis j'investis le reste sur ce qui accélère le plus la croissance rentable, pas sur tout en même temps." }, en:{ q:"You have €500k in cash. What are your priorities?", example:"I first secure a safety buffer of several months of fixed costs, then invest the rest in whatever accelerates profitable growth the most — not everything at once." } },
  { id:"e05", persona:"ceo", fr:{ q:"Les ventes augmentent fortement mais la trésorerie baisse. Pourquoi ?", example:"C'est souvent un décalage de BFR : plus de ventes veut dire plus de stocks et de créances clients à financer avant l'encaissement. Je vérifie le cycle de conversion cash en premier." }, en:{ q:"Sales are growing fast but cash is falling. Why?", example:"It's usually a working capital lag: more sales mean more inventory and receivables to finance before cash comes in. I check the cash conversion cycle first." } },
  { id:"e06", persona:"ceo", fr:{ q:"Vous devez choisir entre recruter un commercial ou investir dans le produit. Comment décidez-vous ?", example:"Je regarde ce qui limite le plus la croissance aujourd'hui : un problème de demande (besoin commercial) ou un problème de rétention/qualité (besoin produit) — la data doit trancher, pas l'intuition." }, en:{ q:"You must choose between hiring a salesperson or investing in the product. How do you decide?", example:"I look at what's limiting growth most right now: a demand problem (sales) or a retention/quality problem (product) — data should decide, not intuition." } },
  { id:"e07", persona:"ceo", fr:{ q:"Votre entreprise doit réduire ses coûts de 15 %. Par où commencez-vous ?", example:"Je commence par les coûts qui n'ont pas d'impact direct sur la croissance ou la qualité perçue par le client, avant de toucher aux investissements stratégiques." }, en:{ q:"Your company needs to cut costs by 15%. Where do you start?", example:"I start with costs that don't directly affect growth or perceived customer quality, before touching strategic investments." } },
  { id:"e08", persona:"ceo", fr:{ q:"Un commercial vous demande de faire une grosse remise pour signer un client stratégique. Vous dites oui ?", example:"Je chiffre l'impact réel sur la marge et la valeur à long terme du client avant de répondre, et je cherche une contrepartie (volume, durée d'engagement) plutôt qu'une remise sèche." }, en:{ q:"A salesperson asks for a big discount to sign a strategic client. Do you say yes?", example:"I quantify the real margin impact and the client's long-term value before answering, and look for something in return (volume, contract length) rather than a flat discount." } },
  { id:"e09", persona:"ceo", fr:{ q:"Le CEO veut investir alors que vous pensez que ce n'est pas le bon moment. Que faites-vous ?", example:"J'exprime mon désaccord avec des chiffres précis sur le risque, mais une fois la décision prise par le CEO, je l'exécute pleinement en sécurisant au maximum les risques identifiés." }, en:{ q:"The CEO wants to invest, but you think the timing is wrong. What do you do?", example:"I voice my disagreement with precise figures on the risk, but once the CEO decides, I execute fully while securing the identified risks as much as possible." } },
  { id:"e10", persona:"ceo", fr:{ q:"On veut ouvrir un nouveau marché dans 3 mois. Quelles questions financières posez-vous ?", example:"Quel est le point mort de cette expansion, quel budget est nécessaire avant le premier euro de revenu, et quel est notre plan si les ventes sont inférieures aux prévisions ?" }, en:{ q:"We want to enter a new market in 3 months. What financial questions do you ask?", example:"What's the break-even point of this expansion, what budget is needed before the first euro of revenue, and what's our plan if sales fall short of projections?" } },
  { id:"e11", persona:"ceo", fr:{ q:"Vous arrivez demain chez nous : quelles sont les 5 choses que vous voulez comprendre en premier ?", example:"La trésorerie réelle et son runway, les contrats clients majeurs, la fiabilité des chiffres actuels, les engagements financiers cachés, et les priorités stratégiques de la direction." }, en:{ q:"You start with us tomorrow: what are the first 5 things you want to understand?", example:"Real cash position and runway, major client contracts, the reliability of current figures, hidden financial commitments, and leadership's strategic priorities." } },
  { id:"e12", persona:"ceo", fr:{ q:"Si vous aviez 1 million d'euros à investir dans l'entreprise, comment le répartissez-vous ?", example:"Je ne répartirais jamais également sans data : je financerais en priorité ce qui a le meilleur retour démontré, avec une réserve de sécurité, plutôt que de saupoudrer sur tous les projets." }, en:{ q:"If you had €1 million to invest in the company, how would you allocate it?", example:"I'd never split it evenly without data: I'd prioritize whatever has the best demonstrated return, keep a safety reserve, rather than spreading it thin across every project." } },
  { id:"e13", persona:"ceo", fr:{ q:"Votre meilleur client représente 40 % du CA et annonce qu'il veut partir. Que faites-vous ?", example:"C'est avant tout un risque de concentration que j'aurais dû anticiper. Je négocie activement pour le retenir, mais je lance en parallèle un plan de diversification client pour ne plus jamais dépendre autant d'un seul." }, en:{ q:"Your best client is 40% of revenue and announces they're leaving. What do you do?", example:"This is above all a concentration risk I should have anticipated. I negotiate hard to retain them, but in parallel launch a client diversification plan so we never depend this much on one again." } },
  { id:"e14", persona:"ceo", fr:{ q:"Vous avez seulement 100k€ disponibles. Trois départements demandent chacun 100k€. Comment décidez-vous ?", example:"Je base l'arbitrage sur le retour attendu et l'urgence réelle de chaque demande, pas sur un partage égal qui satisferait tout le monde à moitié sans résoudre aucun problème." }, en:{ q:"You only have €100k available. Three departments each request €100k. How do you decide?", example:"I base the decision on expected return and each request's real urgency, not an even split that would half-satisfy everyone while solving nothing." } },
  { id:"e15", persona:"ceo", fr:{ q:"L'entreprise doit choisir entre croissance rapide et rentabilité. Comment tranchez-vous ?", example:"Je regarde la trésorerie disponible et le contexte de financement : sans cash suffisant, la rentabilité doit primer ; avec un accès au capital, une croissance plus agressive peut être justifiée." }, en:{ q:"The company must choose between fast growth and profitability. How do you decide?", example:"I look at available cash and the financing context: without enough cash, profitability must come first; with access to capital, more aggressive growth can be justified." } },
  { id:"e16", persona:"ceo", fr:{ q:"Un concurrent casse les prix sur votre marché. Comment réagissez-vous ?", example:"Je résiste à la tentation de suivre automatiquement sur le prix, et je regarde si je peux différencier sur la valeur plutôt que de rentrer dans une guerre des prix qui détruit la marge de tout le marché." }, en:{ q:"A competitor is undercutting prices in your market. How do you react?", example:"I resist the urge to automatically match the price, and look for ways to differentiate on value instead of entering a price war that destroys margin for the whole market." } },
  { id:"e17", persona:"ceo", fr:{ q:"Vous envisagez de lever des fonds ou de vous endetter. Comment choisissez-vous ?", example:"Je compare la dilution du capital contre le coût et le risque de la dette au regard de la visibilité sur les revenus futurs — la dette suppose une prévisibilité de cash flow que la levée de fonds ne demande pas." }, en:{ q:"You're considering raising equity or taking on debt. How do you choose?", example:"I weigh equity dilution against the cost and risk of debt, based on visibility over future revenue — debt assumes cash-flow predictability that equity doesn't require." } },
  { id:"e18", persona:"ceo", fr:{ q:"Un produit phare échoue après son lancement. Quelle est votre priorité ?", example:"Ma priorité immédiate est de comprendre la cause racine (produit, positionnement, exécution) avant de décider entre corriger, pivoter, ou arrêter — agir vite mais sur un diagnostic clair." }, en:{ q:"A flagship product fails after launch. What's your priority?", example:"My immediate priority is understanding the root cause (product, positioning, execution) before deciding to fix, pivot, or kill it — act fast, but on a clear diagnosis." } },
  { id:"e19", persona:"ceo", fr:{ q:"L'entreprise grandit très vite et la culture commence à se dégrader. Que faites-vous ?", example:"Je réinvestis dans le management intermédiaire et la communication interne avant que ça ne devienne un problème de rétention — la culture se perd vite en hypercroissance si on ne l'entretient pas activement." }, en:{ q:"The company is growing very fast and culture is starting to erode. What do you do?", example:"I reinvest in middle management and internal communication before it becomes a retention problem — culture erodes fast during hypergrowth if it isn't actively maintained." } },
  { id:"e20", persona:"ceo", fr:{ q:"Le board n'est pas d'accord avec votre stratégie. Comment gérez-vous la situation ?", example:"J'écoute leurs objections avec de vrais arguments, j'ajuste ce qui doit l'être, mais je défends ma vision avec des données si j'y crois toujours — un board veut être convaincu, pas juste suivi." }, en:{ q:"The board disagrees with your strategy. How do you handle it?", example:"I listen to their objections with real arguments, adjust what needs adjusting, but defend my view with data if I still believe in it — a board wants to be convinced, not just followed." } },
  { id:"e21", persona:"ceo", fr:{ q:"Vous devez décider d'une expansion à l'international. Quels risques évaluez-vous en premier ?", example:"La réglementation locale, le besoin de trésorerie avant la rentabilité du nouveau marché, et la disponibilité d'une équipe locale de confiance." }, en:{ q:"You need to decide on an international expansion. What risks do you assess first?", example:"Local regulation, the cash needed before the new market becomes profitable, and the availability of a trustworthy local team." } },
  { id:"e22", persona:"ceo", fr:{ q:"Une opportunité de rachat d'un concurrent se présente. Comment évaluez-vous la décision ?", example:"J'évalue si l'acquisition apporte une vraie synergie (clients, technologie, équipe) au-delà de la simple taille, et je vérifie que le prix reflète la réalité financière, pas seulement le potentiel." }, en:{ q:"An opportunity to acquire a competitor comes up. How do you evaluate the decision?", example:"I assess whether the deal brings real synergy (clients, technology, team) beyond sheer size, and check that the price reflects financial reality, not just potential." } },
  { id:"e23", persona:"ceo", fr:{ q:"Un investisseur fait pression pour une sortie (exit) plus rapide que prévu. Que faites-vous ?", example:"Je challenge la logique de cet horizon face à la trajectoire réelle de l'entreprise, et je cherche un alignement d'intérêt plutôt qu'un conflit frontal avec l'actionnaire." }, en:{ q:"An investor is pushing for a faster exit than planned. What do you do?", example:"I challenge the logic of that timeline against the company's real trajectory, and look for an alignment of interests rather than a head-on conflict with the shareholder." } },
  { id:"e24", persona:"ceo", fr:{ q:"Vous perdez un collaborateur clé dont dépend une grande partie de l'activité. Comment réagissez-vous ?", example:"Je sécurise en urgence la continuité de son activité avec l'équipe existante, puis je traite la dépendance structurelle qui a permis qu'une seule personne soit indispensable." }, en:{ q:"You lose a key employee a large part of the business depends on. How do you react?", example:"I urgently secure continuity of their work with the existing team, then address the structural dependency that let one person become indispensable." } },
  { id:"e25", persona:"ceo", fr:{ q:"Vous devez choisir entre satisfaire les actionnaires à court terme et investir pour le long terme. Comment arbitrez-vous ?", example:"Je communique une trajectoire claire avec des jalons intermédiaires pour rassurer sur le court terme, sans sacrifier les investissements qui construisent la valeur future." }, en:{ q:"You must choose between satisfying shareholders short-term and investing for the long term. How do you balance it?", example:"I communicate a clear trajectory with interim milestones to reassure on the short term, without sacrificing the investments that build future value." } },
  { id:"e26", persona:"ceo", fr:{ q:"Le timing d'un plan de licenciements est en question : maintenant ou dans 3 mois ? Comment décidez-vous ?", example:"J'agis dès que la nécessité est confirmée par les chiffres, plutôt que d'attendre — un délai inutile prolonge l'incertitude pour tout le monde et aggrave souvent la situation financière." }, en:{ q:"The timing of layoffs is in question: now or in 3 months? How do you decide?", example:"I act as soon as the numbers confirm the necessity, rather than waiting — an unnecessary delay prolongs uncertainty for everyone and often worsens the financial situation." } },
  { id:"e27", persona:"ceo", fr:{ q:"Vous découvrez qu'un choix stratégique passé était une erreur coûteuse. Que faites-vous ?", example:"Je la reconnais ouvertement plutôt que de la justifier, je quantifie l'impact réel, et je corrige la trajectoire sans chercher de coupable — l'énergie doit aller à la correction, pas à la défense de l'ego." }, en:{ q:"You discover a past strategic choice was a costly mistake. What do you do?", example:"I acknowledge it openly rather than justifying it, quantify the real impact, and correct course without hunting for someone to blame — the energy should go to fixing it, not defending ego." } },
  { id:"e28", persona:"ceo", fr:{ q:"Vous devez motiver l'entreprise entière autour d'un objectif ambitieux et incertain. Comment faites-vous ?", example:"Je rends l'objectif concret avec des étapes intermédiaires atteignables, et je suis transparent sur les risques plutôt que de vendre une certitude qui n'existe pas." }, en:{ q:"You need to rally the whole company around an ambitious, uncertain goal. How do you do it?", example:"I make the goal concrete with achievable interim milestones, and I'm transparent about the risks rather than selling a certainty that doesn't exist." } },
  { id:"e29", persona:"ceo", fr:{ q:"Un cofondateur n'est plus aligné avec la direction de l'entreprise. Comment gérez-vous la situation ?", example:"Je cherche d'abord un dialogue honnête pour comprendre l'origine du désalignement, et si rien ne se résout, je privilégie l'intérêt de l'entreprise sur le confort de la relation personnelle." }, en:{ q:"A co-founder is no longer aligned with the company's direction. How do you handle it?", example:"I first seek an honest conversation to understand the root of the misalignment, and if nothing resolves it, I prioritize the company's interest over the comfort of the personal relationship." } },
  { id:"e30", persona:"ceo", fr:{ q:"Une décision rentable à court terme pose un problème éthique. Que faites-vous ?", example:"Je refuse la décision si elle compromet durablement la confiance des clients, des employés ou la réputation de l'entreprise — un gain financier de court terme ne justifie jamais un risque éthique majeur." }, en:{ q:"A short-term profitable decision raises an ethical problem. What do you do?", example:"I refuse it if it durably compromises the trust of clients, employees, or the company's reputation — a short-term financial gain never justifies a major ethical risk." } }
];
