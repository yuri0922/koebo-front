import useSWR from "swr";

type Article = {
  id: number;
  title: string;
  user_id: number;
  content: string;
  image: string;
  price: number;
  level: number;
};

type ArticleResponse = Article[];

export const useGetArticleList = () => {
  const { data, error, mutate } = useSWR<ArticleResponse>("/articles");
  return { data, error, mutate };
};
