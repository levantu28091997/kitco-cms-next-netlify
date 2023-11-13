import type { FC } from "react";
import type { GetServerSideProps } from "next";

import {
  NewsLandingDesktop,
  NewsLandingMobile,
  NewsLandingTablet,
} from "~/src/features/news-landing-page";
import useScreenSize from "~/src/utils/useScreenSize";

import { news } from "~/src/lib/news-factory.lib";
import { ssrQueries } from "~/src/utils/ssr-wrappers";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { dehydratedState } = await ssrQueries({
    ctxRes: res,
    queries: [
      news.newsLandingPage({
        variables: {
          limit: 25,
          offset: 0,
        },
      }),

      news.newsTrending({
        variables: { limit: 10 },
      }),

      news.newsCommentaries({
        variables: { limit: 4, offset: 0 },
      }),

      news.newsCategoriesTree(),
    ],
  });

  return {
    props: {
      dehydratedState,
    },
  };
};

const News: FC = () => {
  const { isMobile, isTablet } = useScreenSize();

  if (isMobile) return <NewsLandingMobile />;
  if (isTablet) return <NewsLandingTablet />;
  return <NewsLandingDesktop />;
};

export default News;
