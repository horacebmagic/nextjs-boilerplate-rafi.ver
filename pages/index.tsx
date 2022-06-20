import { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title="Home" param={false} />
      <div>This boilerplate are using:</div>
      <div className="flex flex-col text-blue-500 underline">
        <a
          href="https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app"
          target="_blank"
        >
          Single shared layout with custom app
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>
        <a href="https://swr.vercel.app/" target="_blank">
          SWR
        </a>
        <a href="https://react-hook-form.com/" target="_blank">
          React hook form
        </a>
        <a href="https://ricostacruz.com/nprogress/" target="_blank">
          NProgress
        </a>
        <a href="" target="_blank"></a>
      </div>
    </>
  );
};

export default Home;
