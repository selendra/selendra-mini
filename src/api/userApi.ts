import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export interface IUser {
  username: string;
  points: number;
  level: number;
  profitPerHour: number;
  lastDailyReward: Date | null;
  lastDailyCipher: Date | null;
  lastDailyCombo: Date | null;
}

export const getUserData = async (username: string): Promise<IUser> => {
  const response = await axios.get<IUser>(`${API_URL}/${username}`);
  return response.data;
};

export const updateUserPoints = async (username: string, points: number) => {
    try {
      const response = await axios.post(`${API_URL}/${username}/points`, { points });
      return response.data;
    } catch (error) {
      console.error('Error updating points:', error);
      throw error;
    }
  };

export const updateUserLevel = async (username: string, level: number): Promise<IUser> => {
  const response = await axios.post<IUser>(`${API_URL}/${username}/level`, { level });
  return response.data;
};

export interface IDailyTasks {
  dailyReward?: boolean;
  dailyCipher?: boolean;
  dailyCombo?: boolean;
}

export const updateDailyTasks = async (username: string, tasks: IDailyTasks): Promise<IUser> => {
  const response = await axios.post<IUser>(`${API_URL}/${username}/daily-tasks`, tasks);
  return response.data;
};