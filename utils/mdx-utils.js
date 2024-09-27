import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');
    console.log('Posts data:', data);

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
      // Faz a requisição para buscar o post específico pelo id
      const { data } = await api.get(`/posts?id=eq.${id}`);
  
      // Verifica se algum dado foi retornado
      if (data && data.length > 0) {
        return data[0]; // Retorna o primeiro post encontrado, pois a API retorna um array
      } else {
        console.log(`Nenhum post encontrado com o id: ${id}`);
        return null;
      }
    } catch (error) {
      console.error(`Erro ao buscar o post com o id: ${id}`, error);
      return null;
    }
  };