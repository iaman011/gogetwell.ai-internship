import { Themes } from "./themes/Themes";

const Home = () => (
  <div>
    <h1 className="text-4xl font-bold text-center p-2 text-gray-800 mb-2">
      Welcome to GoGetWell AI
    </h1>
    <p className="text-lg text-gray-700 leading-relaxed text-justify">
      GoGetWell is a cutting-edge platform transforming the medical tourism
      industry by combining artificial intelligence and digital innovation to
      streamline operations and enhance patient experiences. Founded by Honey
      Singh, a visionary entrepreneur with extensive experience in AI-driven
      healthcare transformation, GoGetWell aims to solve critical issues such as
      inefficiency, lack of coordination, and fragmented patient care. By
      integrating intelligent automation and personalized digital solutions, the
      platform enables healthcare providers and facilitators to deliver more
      organized, responsive, and effective services to patients globally.
    </p>
    <div className="mt-2">
      <Themes />
    </div>
  </div>
);

export default Home;
