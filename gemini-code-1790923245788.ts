export interface UserProfile {
  uid: string;
  name: string;
  franchise: "Marvel" | "DC" | "HarryPotter" | "Minecraft";
  xp: number;
  rankIndex: number;
  usedQuestionIds: string[];
  wrongQuestionIds: string[];
  unlockedModules: {
    week3: boolean;
    final3: boolean;
    week4: boolean;
    final4: boolean;
    errorWork: boolean;
    monthly: boolean;
  };
}

export function calculateRankUp(currentXp: number): number {
  const rankThresholds = [0, 500, 1500, 3000, 5000, 8000, 12000];
  let rank = 0;
  for (let i = 0; i < rankThresholds.length; i++) {
    if (currentXp >= rankThresholds[i]) rank = i;
  }
  return rank;
}