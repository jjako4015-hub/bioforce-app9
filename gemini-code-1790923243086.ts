// Сұрақтарды генерациялау логикасы
export function generateTestQuestions(
  pool: Question[], 
  usedIds: Set<string>, 
  requiredCount: number
): Question[] {
  // 1. Бұрын қолданылмаған сұрақтарды ғана іріктеп алу
  const availableQuestions = pool.filter(q => !usedIds.has(q.id));

  // 2. Сұрақтар жеткіліксіз болса, қате шығару немесе логиканы реттеу
  if (availableQuestions.length < requiredCount) {
    console.error("Бұл модуль үшін жаңа сұрақтар жеткіліксіз!");
    return availableQuestions; // Бар сұрақтарды қайтару
  }

  // 3. Рандомизация алгоритмі (Fisher-Yates)
  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, requiredCount);
}