
export interface Company {
    id: number;
    name: string;
  }
  
  export interface UserProfile {
    id: number;
    user: number;
    company: number;
    is_company_admin: boolean;
  }
  
  export interface Answer {
    id: number;
    question: number; // Question ID
    report: number; // Report ID
    answer: string;
    explanation?: string | null;
    company: number | null; // Company ID or null
  }
  
  export interface Question {
    id: number;
    text: string;
    template: number; // Template ID
    company: number | null; // Company ID or null
    answers: Answer[]; // Nested answers
  }
  
  export interface Report {
    id: number;
    report_title: string;
    submitted_on: string; // Date as a string
    last_updated: string; // Date as a string
    template: number | null; // Template ID or null
    submitted_by: number | null; // User ID or null
    company: number | null; // Company ID or null
    questions: Question[]; // Nested questions
  }
  
  export interface ReportTemplate {
    id: number;
    name: string;
    accessible_by: number[]; // Array of user IDs
    company: number | null; // Company ID or null
    questions: Question[];
    reports: Report[];
  }