import axiosInstance from './axiosInstance';

export const getCompanies = async () => {
  try {
    const response = await axiosInstance.get('/companies/');
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const getReports = async () => {
    try {
      const response = await axiosInstance.get('/reports/');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  };

export const createReport = async (reportData: any) => {
  try {
    const response = await axiosInstance.post('/reports/', reportData);
    return response.data;
  } catch (error) {
    console.error('Error creating report:', error);
    throw error;
  }
};