"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <div className="flex flex-col">
              <div className="flex">
                <Image
                  src="/ican.png"
                  alt=""
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover ring-1 ring-zinc-800 "
                />
                <div className="flex flex-col gap-2 self-center">
                  <h1 className="ps-6 text-2xl font-bold">
                    Muhamad Ichsan Fadilah
                  </h1>
                  <h2 className="ps-6 text-xl font-semibold text-zinc-700">
                    Bogor, Indonesia
                  </h2>
                </div>
              </div>
            </div>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Experienced in the field and service to costumer, I’m Seeking an
              exciting career change to digital marketing industry. Proficient
              in handling various administrative tasks with precision and
              efficiency, I am now channeling my passion for creativity to
              design and hopely can enter on web development in dynamic realm of
              digital marketing. I have been handled project that utilize
              marketing of product design and marketing with digital base.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Anything is possible for those who believe.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="202"
                height="163"
                viewBox="0 0 202 163"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5045 24.2224C33.1641 31.4123 35.7467 38.6066 37.7477 45.4724C43.2556 64.3709 48.9777 83.2706 55.4989 101.849C56.0821 103.51 58.6858 111.166 57.6841 104.649C56.6192 97.7216 56.127 90.7293 55.0072 83.8038C53.6364 75.3269 51.933 66.9119 50.6175 58.4237C50.3099 56.4387 46.6519 45.3793 51.4046 46.439C60.1492 48.3888 68.4569 51.5742 77.3322 53.2727C104.915 58.5513 133.343 61.0807 161.422 60.9642C169.033 60.9327 191.779 58.6624 184.193 59.2842C174.082 60.1129 163.285 64.3497 153.421 66.5184C114.139 75.1552 74.0067 80.609 35.0959 90.837C25.1362 93.4551 15.378 95.7416 5.23461 97.3634C-14.4887 100.517 45.0037 92.924 64.9766 92.7277C67.1896 92.7059 67.9188 93.5184 69.4056 94.9536C72.1793 97.6312 75.103 95.6605 77.9778 94.102C81.4468 92.2214 83.7518 90.1915 86.9668 92.881C90.8551 96.1337 93.0917 99.4911 97.1223 95.4385C99.0011 93.5493 99.2949 90.376 101.225 93.6867C103.203 97.0783 105.858 98.0503 109.101 94.7919C110.9 92.9851 110.034 91.2478 112.682 91.6674C122.003 93.1445 131.593 93.9621 140.981 94.7121C150.591 95.4799 158.416 96.0306 168.011 95.6816C174.331 95.4517 182.69 95.1346 188.142 91.1075C193.482 87.1636 200.29 67.5411 197.816 73.701"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M169.924 76.9925C170.432 75.7282 170.632 75.9925 171.868 76.1627"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                HTLM
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                PHP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Laravel
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Photoshop
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Illustrator
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Ms. Office
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Ms. Excel
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-fuchsia-700 text-zinc-100 hover:bg-zinc-200 hover:text-fuchsia-700">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Account Officer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Collecting and processing data for finance approval, funding
                    savings and handled bad debitur.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-fuchsia-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    KSPPS Baytul Ikhtiar
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-fuchsia-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-fuchsia-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Doing free for any job, like designing banners for any
                    community and event.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-fuchsia-400 text-sm font-semibold">
                    2016 - 2021{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit"></div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Warehouse Staff{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Responsible for fulfilling demand from more than 150 stores
                    per day for certain product and ensuring the conditions and
                    quantities of these products and appropriate.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-fuchsia-400 text-sm font-semibold">
                    2014 - 2016{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    PT Sumber Alfaria Trijaya Tbk.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-fuchsia-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
