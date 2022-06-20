import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface HeadComponentProps {
  title: string;
  description?: string;
  param: boolean;
}

const HeadComponent: NextPage<HeadComponentProps> = ({
  title,
  description,
  param,
}) => {
  const router = useRouter();
  const [titleState, setTitle] = useState<string>("");

  useEffect(() => {
    const titleIsReady = (): string => {
      const siteName = "Next.js Boilerplate";
      if (!param) return `${title} - ${siteName}`;
      if (router.isReady) return `${title} - ${siteName}`;
      return siteName;
    };

    titleIsReady();
    setTitle(titleIsReady());
  }, [router.isReady, param, title]);

  return (
    <Head>
      <title>{titleState}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
