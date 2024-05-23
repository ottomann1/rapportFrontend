import axiosInstance from './axiosInstance';
import { Company, UserProfile, ReportTemplate, Question, Report, Answer } from '../types/models';

// Companies
export const getCompanies = async (): Promise<Company[]> => {
  try {
    const response = await axiosInstance.get<Company[]>('/companies/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

// Reports
export const getReports = async (): Promise<Report[]> => {
  try {
    const response = await axiosInstance.get<Report[]>('/reports/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const createReport = async (reportData: Partial<Report>): Promise<Report> => {
  try {
    const response = await axiosInstance.post<Report>('/reports/', reportData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating report:', error);
    throw error;
  }
};

// UserProfiles
export const getUserProfiles = async (): Promise<UserProfile[]> => {
  try {
    const response = await axiosInstance.get<UserProfile[]>('/userprofiles/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    throw error;
  }
};

export const createUserProfile = async (userProfileData: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const response = await axiosInstance.post<UserProfile>('/userprofiles/', userProfileData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

// ReportTemplates
export const getReportTemplates = async (): Promise<ReportTemplate[]> => {
  try {
    const response = await axiosInstance.get<ReportTemplate[]>('/reporttemplates/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching report templates:', error);
    throw error;
  }
};

export const createReportTemplate = async (templateData: Partial<ReportTemplate>): Promise<ReportTemplate> => {
  try {
    const response = await axiosInstance.post<ReportTemplate>('/reporttemplates/', templateData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating report template:', error);
    throw error;
  }
};

// Questions
export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await axiosInstance.get<Question[]>('/questions/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const createQuestion = async (questionData: Partial<Question>): Promise<Question> => {
  try {
    const response = await axiosInstance.post<Question>('/questions/', questionData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
    throw error;
  }
};

// Answers
export const getAnswers = async (): Promise<Answer[]> => {
  try {
    const response = await axiosInstance.get<Answer[]>('/answers/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching answers:', error);
    throw error;
  }
};

export const createAnswer = async (answerData: Partial<Answer>): Promise<Answer> => {
  try {
    const response = await axiosInstance.post<Answer>('/answers/', answerData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating answer:', error);
    throw error;
  }
};