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
