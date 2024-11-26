export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const formatTime = (time: string): string => {
  return time;
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};