import { User } from '../types/User';

interface Response {
  user: User;
  token: string;
}

export async function signIn(): Promise<Response> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        user: {
          name: 'Diego Araújo',
          email: 'contato@diegoaraujopro.com.br',
        },
        token: 'isdjfioasjfoiajsdoifjasdoijfasodjf',
      });
    }, 2000);
  });
}
