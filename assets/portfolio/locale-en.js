export default {
  "projects": {
    "inflacao": {
      "name": "Inflation dashboards (IPCA and IPCA-15)",
      "title": "Making sense of inflation.",
      "tag": "DATA & PUBLIC POLICY",
      "status": "Web dashboards · published",
      "summary": "Explore Brazil’s consumer price indices by product group and period.",
      "lead": "An economic question deserves a clear way to explore it.",
      "context": "Official indicators are organized by reference period, with charts, bulletins, and detail on products and services.",
      "contribution": "I developed the Power BI analyses and web interface alongside the data preparation and documentation.",
      "learning": "How a dashboard organizes time periods and comparisons shapes what readers see.",
      "note": "The linked dashboards contain the official series and values.",
      "linkLabels": [
        "Open IPCA",
        "Open IPCA-15",
        "Project on GitHub"
      ]
    },
    "pu": {
      "name": "PU learning and access to Pronaf",
      "title": "What if missing does not mean no?",
      "tag": "RESEARCH & APPLIED AI",
      "status": "Book chapter · Enap · 2026",
      "summary": "A diagnostic ranking to investigate gaps in access to rural credit. Eligibility follows the program rules.",
      "lead": "A diagnostic ranking, not an eligibility classification.",
      "context": "SICOR records borrowers who received credit. The group without observed borrowing includes cases such as unformalized demand, access barriers, and low propensity. The study treats this group as unlabeled.",
      "contribution": "I authored the chapter, formulated the PU learning problem, integrated CAF and SICOR data, modeled the problem, and analyzed the results.",
      "note": "Full reproduction requires authorized access to CAF microdata.",
      "result": "Published in an Enap book, 2026.",
      "method": "I compared a supervised baseline, the classic Elkan–Noto estimator, and nnPU (positive–unlabeled learning with non-negative risk). I separated the training, validation, and test sets by household and compared models against observed borrowing.",
      "finding": "The baseline and Elkan–Noto recovered similar shares of observed positives at the top of the ranking. nnPU recovered fewer on that measure, which does not directly assess the latent class. The ranking supports coverage analysis and outreach, subject to human validation and Pronaf rules.",
      "linkLabels": [
        "Read the chapter",
        "Code"
      ]
    },
    "chat-pronaf": {
      "name": "Chat Pronaf v1",
      "title": "A question can open the way.",
      "tag": "AI & FAMILY FARMING",
      "status": "Chatbot · 2025 · Prototype",
      "summary": "A conversational interface for exploring rural credit information.",
      "lead": "What if exploring rural credit started with a conversation?",
      "context": "The 2025 project explores natural-language questions about Pronaf and family farming.",
      "contribution": "I explored the interface and the path from a question to its source and response.",
      "learning": "A useful response requires a good interface and clear information about its source and limits.",
      "note": "The prototype uses official Central Bank data and supporting documents. If Streamlit shows an inactivity screen, use its button to restart the app.",
      "linkLabels": [
        "Open v1 prototype",
        "v1 source code"
      ]
    },
    "oficina": {
      "name": "Hackeando o Pronaf",
      "title": "Good knowledge travels.",
      "tag": "ENAP INNOVATION WEEK",
      "status": "Workshop · 2025",
      "summary": "A workshop on exploring rural credit with open data, Python, and AI.",
      "lead": "Sharing the process is part of building.",
      "context": "The workshop at Enap’s 2025 Innovation Week combined open data exploration, programming, and AI.",
      "contribution": "I prepared and presented the workshop with Ernesto Galindo, using questions about Pronaf to guide practical data exercises.",
      "learning": "Teaching means making decisions visible, from data sources to questions and validation.",
      "note": "This was a collaborative workshop. The linked materials carry their own credits and context.",
      "result": "Presented at Enap’s 2025 Innovation Week.",
      "linkLabels": [
        "Public workshop materials"
      ]
    },
    "jogos": {
      "name": "Math games",
      "title": "I also build things for fun.",
      "tag": "THE JOY OF MAKING",
      "status": "Two published games",
      "summary": "Two games that turn mathematical ideas into play.",
      "lead": "Making a game for my daughter was a good reason to build.",
      "context": "Missão Kits da Festa and Tabuada Run explore mathematics through visual challenges, choices, and feedback.",
      "contribution": "I developed the games, rules, and interfaces to make the reasoning visible.",
      "learning": "An explanation improves when the other person can try the idea.",
      "note": "The activity below is a separate demo. Follow the links for the full games.",
      "linkLabels": [
        "Missão Kits da Festa",
        "Tabuada Run"
      ]
    },
    "iris": {
      "name": "Íris",
      "title": "One assistant, many decisions.",
      "tag": "AI & PERSONAL WORKFLOWS",
      "status": "Project overview",
      "summary": "Experiments with integration, memory, and AI-assisted routines.",
      "context": "A personal project exploring how agents can support routines and organize knowledge.",
      "contribution": "I configured the assistant and integrated workflows, making decisions about memory, continuity, and supervision.",
      "learning": "Automating a routine includes making it easy to monitor and resume.",
      "note": "This overview covers the project without exposing private accounts, documents, or routines."
    },
    "time-ti": {
      "name": "IT team with agents",
      "title": "Learning to direct the work.",
      "tag": "AI & WORK PROCESSES",
      "status": "Experiment",
      "summary": "Roles, reviews, and oversight in agent-assisted development.",
      "context": "An experiment in assigning agents tasks and reviewing their deliverables.",
      "contribution": "I defined roles and workflows for implementation and review.",
      "learning": "Delegating execution still leaves responsibility for decisions and verification.",
      "note": "This is a test of a working method, with private configurations excluded."
    },
    "eleitoral": {
      "name": "2026 Election Monitor",
      "title": "What can we learn while the votes are being counted?",
      "tag": "OPEN DATA",
      "status": "Independent project · 2026 · Concluded",
      "result": "Retrospective evaluation of 54 runoff snapshots.",
      "summary": "An independent monitor of Brazil’s presidential vote count using official TSE data.",
      "context": "The dashboard aggregated data from Brazil’s Superior Electoral Court (TSE) across 27 federal units and overseas voting. It distinguishes the official count from the project’s estimates.",
      "contribution": "I developed and analyzed the monitor with contributions from Ernesto Galindo. I automated data collection, implemented the estimates in Python, logged timestamps, and examined the series of updates.",
      "learning": "In the observed timeline, the estimate was within 0.424 percentage points of the last preserved result when 77.701% of runoff polling sections had been tallied. This finding comes from a retrospective analysis of one election.",
      "note": "An independent personal project concluded on 26 October 2026. The dashboard remains available as a historical record.",
      "linkLabels": [
        "Historical dashboard",
        "Retrospective evaluation",
        "Code on GitHub"
      ]
    },
    "alerta": {
      "name": "Food Inflation Monitor",
      "title": "A radar for good questions.",
      "tag": "AI & MONITORING",
      "status": "Project in development",
      "summary": "News, filters, and classification for following food inflation.",
      "context": "An experiment in organizing news about food inflation.",
      "contribution": "I worked on RSS feeds, filtering, storage, and AI-assisted classification.",
      "learning": "Finding news and producing an economic indicator are different tasks.",
      "note": "The portfolio presents an overview of the project under development.",
      "linkLabels": [
        "Public repository"
      ]
    },
    "compras": {
      "name": "Public procurement planning",
      "title": "What questions can open data answer?",
      "tag": "OPEN DATA & MANAGEMENT",
      "status": "Analysis",
      "summary": "Analysis of planned acquisitions using PGC/PCA data.",
      "context": "An analysis of items and estimated values in public procurement planning.",
      "contribution": "I prepared and explored the data to produce rankings and communicate the analysis.",
      "learning": "A planned acquisition is distinct from actual spending.",
      "note": "The project uses open procurement planning information.",
      "result": "Presented at SEGES openDATA 2024.",
      "linkLabels": [
        "Code and public materials"
      ]
    },
    "conversor": {
      "name": "From API to spreadsheet",
      "title": "A small tool that removes a barrier.",
      "tag": "PRACTICAL AUTOMATION",
      "status": "Earlier project",
      "summary": "Convert procurement API responses into CSV and Excel.",
      "context": "Turning a JSON response into a table can be a hurdle at the start of an analysis.",
      "contribution": "I built a tool to query, preview, and export data in spreadsheet formats.",
      "learning": "Small, focused tools can be useful.",
      "note": "This describes an earlier project. The portfolio does not run a live API integration.",
      "linkLabels": [
        "Public repository"
      ]
    },
    "skill": {
      "name": "explicar-conteudo",
      "title": "A way to learn that became a tool.",
      "tag": "LEARNING & AI",
      "status": "Skill created",
      "summary": "A workflow for exploring topics through questions, text, and visuals.",
      "context": "Some ideas start with a question. Others call for a diagram or a hands-on example.",
      "contribution": "I organized a reusable method for exploring content and choosing an explanatory format.",
      "learning": "A good tool also helps clarify the question.",
      "note": "The portfolio describes the method. The private library is excluded."
    },
    "trilhas": {
      "name": "AI learning paths for civil servants",
      "title": "Learning with a path in mind.",
      "tag": "CURATION & TRAINING",
      "status": "Public guide",
      "summary": "Training options organized around the needs of people and teams.",
      "context": "Choosing a course is easier when the options are tied to a goal and context.",
      "contribution": "I curated independent learning paths based on courses from Brazil’s Virtual School of Government (EV.G) and Enap.",
      "learning": "Start with what the learner needs to be able to do.",
      "note": "This is an independent guide to public courses.",
      "linkLabels": [
        "Public guide"
      ]
    },
    "mba": {
      "name": "Pronaf descriptive analysis for the MBA",
      "title": "Study through a concrete question.",
      "tag": "EDUCATION & ANALYSIS",
      "status": "Academic project",
      "summary": "Descriptive statistics and visualizations about Pronaf.",
      "context": "A training project connecting data analysis with a public policy topic.",
      "contribution": "I built a notebook, visualizations, and presentation materials about Pronaf.",
      "learning": "Applying a tool to a concrete problem makes its assumptions and limits clearer.",
      "note": "This academic overview excludes individual records and results.",
      "linkLabels": [
        "Public materials"
      ]
    }
  },
  "categories": {
    "dados": {
      "title": "Data that helps us ask better questions.",
      "label": "Data & public policy",
      "description": "Analysis, data engineering, and methods for turning records into useful information."
    },
    "ia": {
      "title": "Build, test, and keep learning.",
      "label": "AI & experiments",
      "description": "Research, interfaces, and workflows at different stages of development."
    },
    "aprender": {
      "title": "Learning also means sharing.",
      "label": "Learning & sharing",
      "description": "Workshops, curation, and methods for bringing knowledge and experience together."
    },
    "pessoal": {
      "title": "For the joy of making.",
      "label": "Games & curiosity",
      "description": "Small projects with a personal motivation, including games I made for my daughter."
    }
  },
  "ui": {
    "illustration": "CONCEPTUAL ILLUSTRATION",
    "details": "View details",
    "detailsOf": " for ",
    "openArchive": "Open the project archive",
    "closeArchive": "Close the project archive",
    "projectCount": "{count} projects",
    "announcement": "{count} projects · {category}",
    "allCategories": "all categories",
    "result": "Result.",
    "contribution": "My contribution",
    "learning": "What I learned",
    "method": "Method",
    "finding": "What the study found",
    "advisor": "Supervisor.",
    "citation": "How to cite (ABNT)",
    "available": "Available at:",
    "accessed": "Accessed:",
    "accessDate": "24 November 2026.",
    "exploreLab": "EXPLORE THE LAB",
    "pause": "Pause animation",
    "resume": "Resume animation",
    "night": "Night mode",
    "day": "Return to day mode",
    "gameTag": "A MINI GAME TO TRY",
    "gameTitle": "Can we make identical kits?",
    "gameIntro": "We have <strong>12 flowers</strong> and <strong>18 sweets</strong>. What is the largest number of identical kits we can make using everything?",
    "gameGroup": "Choose the number of kits",
    "gameOption": "{count} kits",
    "gameInitial": "Try an answer. How you reason matters as much as getting it right.",
    "gameCorrect": "Yes! Make 6 kits with 2 flowers and 3 sweets each. Six is the greatest common divisor of 12 and 18.",
    "gameTryAgain": "You can make that many identical kits. Can you make more without leaving anything over?",
    "exploreData": "Explore data",
    "exploreAI": "Explore AI",
    "exploreLearn": "Explore learning",
    "explorePlay": "Explore games",
    "roomData": "Data",
    "roomAI": "AI",
    "roomLearn": "Learn",
    "roomPlay": "Play",
    "chartHeader": "EXPLORE / INFLATION",
    "puHeader": "A QUESTION ABOUT LABELS",
    "observed": "OBSERVED",
    "unlabeled": "UNLABELED",
    "chatLine1": "Where can I start exploring",
    "chatLine2": "the Pronaf data?",
    "workshopHeader": "INNOVATION WEEK · ENAP",
    "workshopTools": "OPEN DATA + PYTHON + AI",
    "gameCover": "MISSION: PARTY KITS",
    "gameCoverFooter": "LEARNING THROUGH PLAY"
  }
};
