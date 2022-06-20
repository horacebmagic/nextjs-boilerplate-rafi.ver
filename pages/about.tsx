import { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";

const About: NextPage = () => {
  return (
    <>
      <HeadComponent title="About" param={false} />
      <div className="">Next.js boilerplate - Rafi ver.</div>
    </>
  );
};

export default About;
