import { useGetArticleList } from "@/hooks/api/article/useGetArticleList";
import { usePostArticle } from "@/hooks/api/article/usePostArticle";
import { useEffect, useState } from "react";

const Article = () => {
  const { data, mutate } = useGetArticleList();
  const { postArticle } = usePostArticle();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [level, setLevel] = useState(0);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <h1>記事一覧</h1>
      <div className="my-4 ml-2">
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            id="title"
            className="border-2 border-gray-500 py-2"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="price">値段</label>
          <input
            id="price"
            className="border-2 border-gray-500 py-2"
            type="number"
            onChange={(e) => {
              const price = Number(e.target.value);
              setPrice(price);
            }}
          />
        </div>
        <div>
          <label htmlFor="level">レベル</label>
          <input
            min="1"
            max="5"
            id="level"
            className="border-2 border-gray-500 py-2"
            type="number"
            onChange={(e) => {
              const level = Number(e.target.value);
              setLevel(level);
            }}
          />
        </div>
        <div>
          <label htmlFor="image">写真</label>
          <input
            id="image"
            className="border-2 border-gray-500 py-2"
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="content">内容</label>
          <input
            id="content"
            className="border-2 border-gray-500 py-2"
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={async () => {
            await postArticle({
              title: title,
              content: content,
              user_id: 1,
              price: price,
              image: image,
              level: level,
            });
            mutate();
          }}
        >
          作成！
        </button>
      </div>
      {data &&
        data.map((article) => (
          <div key={article.id} className="flex gap-1">
            <p>{article.user_id}</p>
            <p>{article.title}</p>
            <p>{article.level}</p>
            <p>{article.price}</p>
            <p>{article.image}</p>
            <p>{article.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Article;
