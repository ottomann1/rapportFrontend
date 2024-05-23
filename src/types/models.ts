
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
  
  export interface ReportTemplate {
    id: number;
    name: string;
    accessible_by: number[];
    company: number | null;
    questions: Question[];
    reports: Report[];
  }
  
  export interface Question {
    id: number;
    text: string;
    template: number; 
    company: number | null;
  }
  
  export interface Report {
    id: number;
    report_title: string;
    submitted_on: string; 
    last_updated: string; 
    template: number | null; 
    submitted_by: number | null; 
    company: number | null; 
  }
  
  export interface Answer {
    id: number;
    question: number;
    report: number;
    answer: string;
    explanation?: string | null;
    company: number | null; 
  }