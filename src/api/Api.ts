import axios from 'axios';


export const getAdvice = async (): Promise<string> => {
  const response = await axios.get('https://api.adviceslip.com/advice');
   return response.data.slip.advice; 
};
