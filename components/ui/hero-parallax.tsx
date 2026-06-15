"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "framer-motion";

export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  type: string;
  date: string;
  github?: string;
};

export const HeroParallax = ({ projects }: { projects: Project[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Dynamically slice projects into 3 balanced rows (duplicating if < 9 to ensure dense grid)
  const displayProjects = projects.length > 0 && projects.length < 9
    ? Array.from({ length: 9 }, (_, i) => projects[i % projects.length])
    : projects;

  const count = displayProjects.length;
  const perRow = Math.max(3, Math.ceil(count / 3));
  const rows = [
    displayProjects.slice(0, perRow),
    displayProjects.slice(perRow, perRow * 2),
    displayProjects.slice(perRow * 2, perRow * 3),
  ].filter((row) => row.length > 0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Desktop motion
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative min-h-[220vh] md:min-h-[300vh] py-24 md:py-40 antialiased overflow-hidden w-full flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="hidden md:block space-y-16"
      >
        <AnimatePresence>
          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex ${index % 2 === 0
                  ? "flex-row-reverse space-x-reverse"
                  : "flex-row"
                } space-x-20 mb-20`}
            >
              {row.map((project, projIdx) => (
                <ProjectCard
                  key={`${project.id}-${index}-${projIdx}`}
                  project={project}
                  translate={
                    index % 2 === 0 ? translateX : translateXReverse
                  }
                />
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="md:hidden mt-12 space-y-8 px-4">
        {projects.map((project) => (
          <MobileProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-16"
        style={{
          // opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
          y: useTransform(scrollYProgress, [0.7, 0.9], [80, 0]),
        }}
      >
        <motion.a
          href="/contact"
          className="px-4 py-3 md:px-4 md:py-4 text-base md:text-lg
                     bg-linear-to-r from-purple-500 to-pink-500 
                     text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s build something impactful together
        </motion.a>
      </motion.div>
    </div>
  );
};



const Header = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 md:py-40 px-4">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selected <br />
        <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-base md:text-xl mt-6 dark:text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Here are some of the projects I&apos;ve worked on with various technologies.
      </motion.p>
    </div>
  );
};


const ProjectCard = ({
  project,
  translate,
}: {
  project: Project;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -16, scale: 1.03 }}
      className="group relative h-96 w-[26rem] lg:w-[30rem] shrink-0 rounded-xl overflow-hidden shadow-2xl"
    >
      <CardContent project={project} />
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MOBILE CARD                                  */
/* -------------------------------------------------------------------------- */

const MobileProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg"
    >
      <CardContent project={project} />
    </motion.div>
  );
};



const CardContent = ({ project }: { project: Project }) => {
  const href = project.github || "#";
  const thumbnail = project.image || "/images/placeholder.png";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={thumbnail}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 480px"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-neutral-300 line-clamp-2">
          {project.description}
        </p>
      </div>
    </a>
  );
};
