"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface EmailTemplateProps {
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const useSendEmail = () => {
  return useMutation({
    mutationFn: async (data: EmailTemplateProps) => {
      const response = await axios.post('http://localhost:3000/api/send/', data);
      return response.data;
    },
  });
};