import { ObjectId } from "mongodb";

// User from MongoDB
export interface User {
  _id?: ObjectId;
  googleId: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  // Streak tracking
  streak?: number;
  lastLoginDate?: Date;
  streakDates?: string[]; // ISO date strings (YYYY-MM-DD)
  lastStreakDate?: Date; // Last date streak was earned
  googleImage?: string; // Original Google profile image
  activeDays?: number;
  activeMinutes?: number;
  activityLog?: { date: Date; minutes: number }[];
  emailNotifications?: boolean; // defaults to true if undefined
  highestStreak?: number; // all-time highest consecutive days
}

// Vocabulary saved by user
export interface Vocabulary {
  _id?: ObjectId;
  userId: ObjectId;
  groupId?: ObjectId;
  word: string;
  meaning: string;
  partOfSpeech: string;
  level: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
  createdAt: Date;
}

// Vocabulary Group
export interface VocabularyGroup {
  _id?: ObjectId;
  userId: ObjectId;
  name: string;
  isDefault?: boolean;
  createdAt: Date;
}

// Response types from Gemini API
export interface WordAnalysis {
  type: "word";
  word: string;
  meaning: string;
  partOfSpeech: string;
  level: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
}

export interface SentenceTranslation {
  type: "sentence";
  original: string;
  translation: string;
}

export interface InvalidWord {
  type: "invalid_word";
  word: string;
  suggestions: string[];
}

export type TranslationResult = WordAnalysis | SentenceTranslation | InvalidWord;


// API Request/Response types
export interface TranslateRequest {
  text: string;
}

export interface SaveVocabularyRequest {
  word: string;
  meaning: string;
  partOfSpeech: string;
  level: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
  groupId?: string;
}

export interface GrammarCheckResult {
  isCorrect: boolean;
  correction: string;
  explanation: string;
  variations: {
    formal: string;
    friendly: string;
  };
}

// ---- Client-side types (used in React components) ----

/** Client-side vocabulary item (serialized from MongoDB) */
export interface ClientVocabulary {
  _id: string;
  word: string;
  meaning: string;
  pronunciation?: string;
  partOfSpeech?: string;
  example?: string;
  translation?: string;
  groupId?: string;
  image?: string;
  ipa?: string;
  phonetic?: string;
  level?: string;
  exampleTranslation?: string;
}

/** Client-side vocabulary group */
export interface ClientGroup {
  _id: string;
  name: string;
  description?: string;
  isDefault?: boolean;
}

/** Client-side profile data */
export interface ProfileData {
  name: string;
  email: string;
  image: string;
  googleImage?: string;
  emailNotifications?: boolean;
}

/** Client-side profile statistics */
export interface ProfileStats {
  joinDate: string;
  activeDays: number;
  activeTime: number;
  currentStreak: number;
  activeDates?: string[];
  freezeCount?: number;
  freezeDates?: string[];
  highestStreak?: number;
}

/** Weekly activity data point */
export interface WeeklyActivityItem {
  day: string;
  minutes: number;
}

