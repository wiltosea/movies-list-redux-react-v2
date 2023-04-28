import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTIzNTlkOWM5N2Y5YzM1MDZmNzY0N2RmMGY0MDMxNSIsInN1YiI6IjYzM2I1Y2RlNGNiZTEyMDA3YzNhMmEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Ek0Tv1NsZ5NAn8PsizoHldZCzs841FbQ5wfgjvzgk4',
    'Content-Type': 'application/json;charset=utf-8',
  },
});
