import { v4 as uuidv4 } from 'uuid';

export const getSessionId = (): string => {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

export const getSubscriberId = (): string => {
  let subscriberId = localStorage.getItem('subscriberId');
  if (!subscriberId) {
    subscriberId = uuidv4(); 
    localStorage.setItem('subscriberId', subscriberId);
  }
  return subscriberId;
};
