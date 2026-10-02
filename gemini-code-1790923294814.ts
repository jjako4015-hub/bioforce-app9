export interface Question {
  id: string;
  week: number;
  module: "week3" | "week4" | "final3" | "final4" | "monthly";
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const questionDatabase: Question[] = [
  {
    id: "bio-3-001",
    week: 3,
    module: "week3",
    topic: "Асқорыту",
    question: "Сілекей ферменті амилаза крахмалды қандай затқа дейін ыдыратады?",
    options: ["Аминқышқылдарына", "Глюкозаға", "Глицеринге", "Май қышқылдарына"],
    correctAnswer: 1, // B нұсқа
    explanation: "Ауызда негізгі сілекей ферменті амилаза әсерінен көмірсулар ыдырайды, ол крахмалды глюкозаға дейін ыдыратады[cite: 3].",
    difficulty: "easy"
  },
  {
    id: "bio-3-002",
    week: 3,
    module: "week3",
    topic: "Асқорыту жүйесі",
    question: "Адамның асқазаны қанша бөлімнен тұрады?",
    options: ["Бір бөлімді", "Екі бөлімді", "Үш бөлімді", "Төрт бөлімді"],
    correctAnswer: 0, // A нұсқа
    explanation: "Адамның асқазаны бір бөлімді және онда асқазан сөлі түзіледі[cite: 3].",
    difficulty: "medium"
  },
  {
    id: "bio-3-003",
    week: 3,
    module: "final3",
    topic: "Өсімдіктердегі тасымал",
    question: "Су мен минералды заттар тамырдан жоғары қарай қандай ұлпа арқылы көтеріледі?",
    options: ["Флоэма", "Эпидермис", "Ксилема (сүрек)", "Камбий"],
    correctAnswer: 2, // C нұсқа
    explanation: "Ксилема – тамырдан жоғары қарай сабақ пен жапыраққа заттардың көтерілуіне септігін тигізеді[cite: 4].",
    difficulty: "hard"
  },
  {
    id: "bio-4-001",
    week: 4,
    module: "week4",
    topic: "Сұйық орта",
    question: "Лимфа құрамында судың мөлшері қанша пайызды құрайды?",
    options: ["80%", "90%", "95%", "99%"],
    correctAnswer: 2, // C нұсқа
    explanation: "Лимфа 95% судан, 0,9% тұздан және 0,1% глюкозадан тұрады[cite: 4].",
    difficulty: "medium"
  },
  {
    id: "bio-monthly-001",
    week: 4,
    module: "monthly",
    topic: "Өсімдіктер анатомиясы",
    question: "Өсімдіктердегі заттардың төменгі ағысы қандай құрылым арқылы жүзеге асады?",
    options: ["Трахеидтер", "Тіннің сүзгілі түтікшелері (флоэма)", "Сүрек", "Өзек"],
    correctAnswer: 1, // B нұсқа
    explanation: "Жапырақтағы органикалық заттар өсімдіктің барлық бөліктеріне тіннің сүзгілі түтікшелері арқылы тарайды (төменгі ағыс)[cite: 4].",
    difficulty: "medium"
  }
];