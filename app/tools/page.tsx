"use client";
import './style.css'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import welcomeAnimation from "../../public/assets/Welcome.json";
import Lottie from "lottie-react";
import Image from 'next/image';

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");

  const tools = [
    // ---------- FRONTEND ----------
    {
      category: "Frontend",
      name: "Next.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      desc: "React framework for optimized, SEO-friendly apps with dynamic rendering.",
      color: "from-gray-50 to-neutral-100",
      link: "https://nextjs.org/",
    },
    {
      category: "Frontend",
      name: "React.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      desc: "Component-driven front-end library for crafting rich, dynamic UIs.",
      color: "from-sky-50 to-sky-100",
      link: "https://react.dev/",
    },
    // {
    //   category: "Frontend",
    //   name: "Vue.js",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    //   desc: "Lightweight progressive JavaScript framework focused on simplicity.",
    //   color: "from-emerald-50 to-green-100",
    //   link: "https://vuejs.org/",
    // },
    // {
    //   category: "Frontend",
    //   name: "Angular",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    //   desc: "Robust TypeScript-based front-end framework for enterprise-scale apps.",
    //   color: "from-red-50 to-rose-100",
    //   link: "https://angular.io/",
    // },
    {
      category: "Frontend",
      name: "Tailwind CSS",
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      desc: "Utility-first CSS framework for rapid and elegant frontend design.",
      color: "from-blue-50 to-cyan-100",
      link: "https://tailwindcss.com/",
    },
    {
      category: "Frontend",
      name: "Bootstrap",
      img: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
      desc: "Popular UI kit with grids, components, and responsive design helpers.",
      color: "from-purple-50 to-indigo-100",
      link: "https://getbootstrap.com/",
    },
    {
      category: "Frontend",
      name: "Sass",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      desc: "CSS preprocessor adding variables, mixins, and nested rules to stylesheets.",
      color: "from-pink-50 to-fuchsia-100",
      link: "https://sass-lang.com/",
    },
    {
      category: "Frontend",
      name: "Redux",
      img: "https://redux.js.org/img/redux.svg",
      desc: "Predictable state container to manage large-scale React applications.",
      color: "from-purple-50 to-violet-100",
      link: "https://redux.js.org/",
    },
    {
      category: "Frontend",
      name: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      desc: "JavaScript superset introducing robust static typing to projects.",
      color: "from-blue-50 to-sky-100",
      link: "https://www.typescriptlang.org/",
    },
    {
      category: "Frontend",
      name: "Vite",
      img: "https://vite.dev/logo.svg",
      desc: "Blazing-fast build tool and dev server for modern web projects.",
      color: "from-yellow-50 to-purple-100",
      link: "https://vitejs.dev/",
    },

    // ---------- BACKEND ----------
    {
      category: "Backend",
      name: "Node.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      desc: "JavaScript runtime enabling scalable, efficient backend systems.",
      color: "from-green-50 to-emerald-100",
      link: "https://nodejs.org/",
    },
    {
      category: "Backend",
      name: "Express.js",
      img: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      desc: "Fast, minimalist web framework perfect for building REST APIs.",
      color: "from-gray-50 to-zinc-100",
      link: "https://expressjs.com/",
    },
    {
      category: "Backend",
      name: "NestJS",
      img: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
      desc: "TypeScript-ready backend framework for scalable server solutions.",
      color: "from-pink-50 to-rose-100",
      link: "https://nestjs.com/",
    },
    // {
    //   category: "Backend",
    //   name: "Django",
    //   img: "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
    //   desc: "Python-based web framework promoting clean, pragmatic design.",
    //   color: "from-green-50 to-teal-100",
    //   link: "https://www.djangoproject.com/",
    // },
    // {
    //   category: "Backend",
    //   name: "Flask",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
    //   desc: "Micro web framework for Python with simplicity and flexibility.",
    //   color: "from-blue-50 to-gray-100",
    //   link: "https://flask.palletsprojects.com/",
    // },
    // {
    //   category: "Backend",
    //   name: "Laravel",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    //   desc: "Elegant PHP web framework with expressive syntax and tooling.",
    //   color: "from-red-50 to-rose-100",
    //   link: "https://laravel.com/",
    // },
    {
      category: "Backend",
      name: "GraphQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
      desc: "API query language making data fetching more flexible and efficient.",
      color: "from-pink-50 to-fuchsia-100",
      link: "https://graphql.org/",
    },
    {
      category: "Backend",
      name: "Postman",
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      desc: "Comprehensive API development, testing, and documentation suite.",
      color: "from-orange-50 to-amber-100",
      link: "https://www.postman.com/",
    },
    {
      category: "Backend",
      name: "Swagger",
      img: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",
      desc: "API design and visualization toolkit based on OpenAPI standard.",
      color: "from-green-50 to-lime-100",
      link: "https://swagger.io/",
    },
    // {
    //   category: "Backend",
    //   name: "Spring Boot",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    //   desc: "Java-based framework for microservices and enterprise-grade applications.",
    //   color: "from-green-50 to-emerald-100",
    //   link: "https://spring.io/projects/spring-boot",
    // },

    // ---------- DATABASES ----------
    {
      category: "Backend",
      name: "MongoDB",
      img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      desc: "NoSQL document database designed for developer ease and scalability.",
      color: "from-emerald-50 to-green-100",
      link: "https://www.mongodb.com/",
    },
    // {
    //   category: "Backend",
    //   name: "PostgreSQL",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    //   desc: "Advanced open-source relational database with robust features.",
    //   color: "from-blue-50 to-cyan-100",
    //   link: "https://www.postgresql.org/",
    // },
    {
      category: "Backend",
      name: "MySQL",
      img: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
      desc: "Popular relational database system powering millions of applications.",
      color: "from-sky-50 to-blue-100",
      link: "https://www.mysql.com/",
    },
    {
      category: "Backend",
      name: "Firebase",
      img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      desc: "Google's cloud-based suite for backend, auth, and realtime storage.",
      color: "from-yellow-50 to-orange-100",
      link: "https://firebase.google.com/",
    },
    {
      category: "Backend",
      name: "Redis",
      img: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
      desc: "In-memory data store and cache for high-performance systems.",
      color: "from-red-50 to-rose-100",
      link: "https://redis.io/",
    },

    // ---------- DEVOPS / TOOLS ----------
    {
      category: "Other",
      name: "Git",
      img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      desc: "Version control system enabling efficient collaboration.",
      color: "from-orange-50 to-red-100",
      link: "https://git-scm.com/",
    },
    {
      category: "Other",
      name: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      desc: "Popular platform for hosting and collaborating on repositories.",
      color: "from-gray-50 to-stone-100",
      link: "https://github.com/",
    },
    {
      category: "Other",
      name: "GitLab",
      img: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
      desc: "DevOps platform offering complete CI/CD pipelines and version control.",
      color: "from-orange-50 to-amber-100",
      link: "https://about.gitlab.com/",
    },
    {
      category: "Other",
      name: "Docker",
      img: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
      desc: "Containerization platform ensuring dependable deployments.",
      color: "from-cyan-50 to-blue-100",
      link: "https://www.docker.com/",
    },
    // {
    //   category: "Other",
    //   name: "Kubernetes",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    //   desc: "Orchestration tool for automating deployment of containerized apps.",
    //   color: "from-blue-50 to-indigo-100",
    //   link: "https://kubernetes.io/",
    // },
    {
      category: "Other",
      name: "AWS",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      desc: "Comprehensive cloud services platform for scalable applications.",
      color: "from-yellow-50 to-orange-100",
      link: "https://aws.amazon.com/",
    },
    {
      category: "Other",
      name: "Vercel",
      img: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png",
      desc: "Fast serverless deployment and CDN for modern web applications.",
      color: "from-gray-50 to-neutral-100",
      link: "https://vercel.com/",
    },
    {
      category: "Other",
      name: "Netlify",
      img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
      desc: "Platform for automating CI/CD and hosting Jamstack sites.",
      color: "from-cyan-50 to-emerald-100",
      link: "https://www.netlify.com/",
    },
    {
      category: "Other",
      name: "Nginx",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
      desc: "High-performance web server, load balancer, and proxy.",
      color: "from-green-50 to-emerald-100",
      link: "https://nginx.org/",
    },
    {
      category: "Other",
      name: "CI/CD (GitHub Actions)",
      img: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
      desc: "Streamlined automation of build, test, and deployment pipelines.",
      color: "from-blue-50 to-gray-100",
      link: "https://github.com/features/actions",
    },
    // {
    //   category: "Other",
    //   name: "Jenkins",
    //   img: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    //   desc: "Automation server widely used for CI/CD pipeline management.",
    //   color: "from-gray-50 to-red-100",
    //   link: "https://www.jenkins.io/",
    // },
    // {
    //   category: "Other",
    //   name: "Terraform",
    //   img: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
    //   desc: "Infrastructure as code tool for automating cloud provisioning.",
    //   color: "from-purple-50 to-indigo-100",
    //   link: "https://www.terraform.io/",
    // },

    // ---------- PRODUCTIVITY ----------
    {
      category: "Other",
      name: "Figma",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      desc: "Collaborative design platform for interface and prototyping.",
      color: "from-pink-50 to-fuchsia-100",
      link: "https://www.figma.com/",
    },
    {
      category: "Other",
      name: "VS Code",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      desc: "Lightweight yet powerful code editor with extensions galore.",
      color: "from-indigo-50 to-blue-100",
      link: "https://code.visualstudio.com/",
    },
    {
      category: "Other",
      name: "Slack",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
      desc: "Communication and collaboration platform for dev teams.",
      color: "from-purple-50 to-violet-100",
      link: "https://slack.com/",
    },
    {
      category: "Other",
      name: "Notion",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      desc: "All-in-one workspace for notes, documentation, and kanban boards.",
      color: "from-gray-50 to-neutral-100",
      link: "https://www.notion.so/",
    },
    {
      category: "Other",
      name: "Trello",
      img: "https://cdn.worldvectorlogo.com/logos/trello.svg",
      desc: "Kanban-style task management and project tracking tool.",
      color: "from-blue-50 to-cyan-100",
      link: "https://trello.com/",
    },
    {
      category: "Other",
      name: "Jira",
      img: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
      desc: "Agile project management software for tracking tasks and workflows.",
      color: "from-blue-50 to-indigo-100",
      link: "https://www.atlassian.com/software/jira",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Other"];
  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 ">

      <motion.div
        className="bg-white to-pink-50 border border-gray-200 rounded-3xl p-10 mb-5 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Icon / Visual */}
        <motion.div
          className="w-48 h-48 flex-shrink-0 relative z-10 flex items-center justify-center bg-gradient-to-tr from-pink-100 to-indigo-100 rounded-full shadow-md"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Lottie animationData={welcomeAnimation} loop={true} />
        </motion.div>

        {/* TextArea */}
        <div className="text-center md:text-left max-w-2xl relative z-10">
          <div className="relative">

            <p className="text-gray-700 leading-relaxed text-lg italic font-medium px-8 py-4">
              I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
              modern frameworks and languages to powerful platforms, my toolkit ensures high-quality and
              efficient development. Let&apos;s build something amazing together! 🚀🌟
            </p>

          </div>
        </div>
      </motion.div>

      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
        relative px-6 py-2.5 rounded-full text-sm font-medium
        transition-all duration-300 ease-out transform
        flex items-center justify-center
        ${activeCategory === cat
                ?
                "bg-gradient-to-r from-indigo-600 to-purple-600 text-white " +
                "shadow-[0_4px_12px_rgba(99,102,241,0.3)] " +
                "border border-indigo-500/30 " +
                "scale-105 hover:scale-110 " +
                "hover:shadow-[0_6px_16px_rgba(99,102,241,0.4)]"
                :
                "bg-white text-gray-700 " +
                "border border-gray-200 " +
                "hover:bg-indigo-50 hover:text-indigo-700 " +
                "hover:border-indigo-300 hover:shadow-sm " +
                "hover:scale-105"
              }
      `}
          >
            {activeCategory === cat && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
            )}

            <span className="relative z-10">
              {cat}
            </span>
            {activeCategory === cat && (
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-gradient-to-br ${tool.color} border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center flex flex-col justify-between h-auto`}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex flex-col items-center space-y-4 mb-5">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />

                <h3 className="text-lg font-semibold text-indigo-700">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              {/* Arrow Button */}
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all"
              >
                <FiArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}