import { useAxios } from "@/hooks/useAxios";

type PostArticleRequestData = {
  title: string;
  content: string;
  user_id: number;
  price: number;
  image: string;
  level: number;
};

export const usePostArticle = () => {
  const { axios } = useAxios();

  const postArticle = async ({
    title,
    content,
    user_id,
    price,
    image,
    level,
  }: PostArticleRequestData) => {
    await axios.post("/articles", {
      title: title,
      user_id: user_id,
      content: content,
      image: image,
      price: price,
      level: level,
    });
  };

  return { postArticle };
};
