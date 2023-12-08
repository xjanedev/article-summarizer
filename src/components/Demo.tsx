import { useState, FormEvent } from "react";
import { copy, linkIcon, loader, tick, deleteIcon } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { useAppDispatch, useAppSelector } from "../hook/featurehooks";
import {
  Article,
  addArticle,
  removeArticle,
  clearArticles,
} from "../services/feature";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError & { data?: { error?: string } } => {
  return typeof error === "object" && error !== null && "status" in error;
};

const Demo = () => {
  const [article, setArticle] = useState<Article>({ url: "", summary: "" });
  const [copied, setCopied] = useState<string | boolean>(false);

  const dispatch = useAppDispatch();
  const allArticles = useAppSelector(state => state.articles.articles);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      dispatch(addArticle(newArticle));
      setArticle(newArticle);
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleRemove = (index: number) => {
    dispatch(removeArticle(index));
  };

  const handleClearAll = () => {
    dispatch(clearArticles());
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link_icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />
          <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={e => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer'
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700
          peer-focus:text-gray-700'
          >
            👻
          </button>
        </form>
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt='copy_icon'
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>
              <div className='delete_btn' onClick={() => handleRemove(index)}>
                <img
                  src={deleteIcon}
                  alt='delete_icon'
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className='font-inter font-medium text-sm text-gray-700 pt-2'
          onClick={handleClearAll}
        >
          Clear All History
        </button>
      </div>
      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : isFetchBaseQueryError(error) && error.data ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error.data.error
                ? error.data.error
                : "An unknown error occurred"}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
