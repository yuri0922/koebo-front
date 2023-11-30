import { useGetArticleList } from '@/hooks/api/article/useGetArticleList';
import { usePostArticle } from '@/hooks/api/article/usePostArticle';
import { useEffect, useRef, useState } from 'react';

const Article = () => {
  const { data, mutate } = useGetArticleList();
  const { postArticle } = usePostArticle();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [level, setLevel] = useState(0);
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const imageFormRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (selectedFile) {
      setImageSrc(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

  return (
    <div className="px-6 lg:px-16">
      <input
        ref={imageFormRef}
        type="file"
        className="hidden w-full"
        accept="image/*" //画像のみを選択できるようにする
        onChange={(e) => {
          const fileList = e.target.files;
          if (fileList && fileList[0]) {
            setSelectedFile(fileList[0]);
          }
        }}
      />

      {imageSrc ? (
        <img
          src={imageSrc}
          className="mx-auto mt-6 h-52 w-full cursor-pointer rounded-md border-2 border-gray-700 bg-orange-50 object-cover shadow-sm"
          onClick={() => {
            if (imageFormRef.current) {
              imageFormRef.current.click();
            }
          }}
        />
      ) : (
        <div
          className="relative mx-auto mt-6 flex h-52 w-full cursor-pointer items-center rounded-md border-2 border-gray-700 bg-orange-50 shadow-sm"
          onClick={() => {
            if (imageFormRef.current) {
              imageFormRef.current.click();
            }
          }}
        >
          <div className="mx-auto flex flex-col items-center">
            <img src="/icons/upload.svg" alt="" className="h-14 w-14" />
            <p className="text-sm text-gray-500">アップロード</p>
          </div>
        </div>
      )}
      <div className="my-4 ml-2">
        <div>
          <label className="whitespace-nowrap" htmlFor="title">
            タイトル
          </label>
          <input
            id="title"
            placeholder="例:洗濯バサミで使いかけの袋を留める"
            className="w-full rounded-md border-2 border-gray-700 bg-orange-50 p-1"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="level">難易度</label>
          <input
            min="1"
            max="5"
            id="level"
            type="number"
            onChange={(e) => {
              const level = Number(e.target.value);
              setLevel(level);
            }}
          />

          <div className="flex items-start justify-around">
            <div
              onClick={() => {
                setLevel(1);
              }}
            >
              <img
                src={level >= 1 ? '/icons/yellowstar.svg' : '/icons/star1.svg'}
                alt=""
                className=" w-10 border-spacing-1 cursor-pointer"
              />
              <p className=" text-sm text-gray-500">優しい</p>
            </div>
            <img
              onClick={() => {
                setLevel(2);
              }}
              src={level >= 2 ? '/icons/yellowstar.svg' : '/icons/star2.svg'}
              alt=""
              className=" w-10 border-spacing-1 cursor-pointer"
            />
            <div>
              <img
                onClick={() => {
                  setLevel(3);
                }}
                src={level >= 3 ? '/icons/yellowstar.svg' : '/icons/star3.svg'}
                alt=""
                className=" w-10 border-spacing-1 cursor-pointer"
              />
              <p className=" ml-1 text-sm text-gray-700">普通</p>
            </div>

            <img
              onClick={() => {
                setLevel(4);
              }}
              src={level >= 4 ? '/icons/yellowstar.svg' : '/icons/star4.svg'}
              alt=""
              className=" w-10 border-spacing-1 cursor-pointer"
            />
            <div>
              <div
                onClick={() => {
                  setLevel(5);
                }}
              >
                <img
                  src={level >= 5 ? '/icons/yellowstar.svg' : '/icons/star5.svg'}
                  alt=""
                  className=" w-10 border-spacing-1 cursor-pointer"
                />
                <p className=" text-sm text-gray-800">難しい</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="price">値段</label>
          <input
            id="price"
            placeholder="例:500"
            className="w-full rounded-md border-2 border-gray-700 bg-orange-50 p-1"
            type="number"
            onChange={(e) => {
              const price = Number(e.target.value);
              setPrice(price);
            }}
          />
        </div>
        <div>
          <label htmlFor="content">使い方</label>
          <textarea
            id="content"
            placeholder="便利な使い方を詳しく教えてください♩"
            className="w-full rounded-md border-2 border-gray-700 bg-orange-50 p-1"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="rounded bg-lime-500 px-4 py-2 font-bold text-white hover:bg-lime-700"
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
            投稿！
          </button>
        </div>
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
