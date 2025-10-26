import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiSequelize, SiMongodb, SiReactquery } from "react-icons/si";
import { FaListOl, FaProjectDiagram, FaSortAmountDown, FaSearch, FaTree, FaCogs, FaNetworkWired, FaLayerGroup, FaSyncAlt, FaChessBoard } from "react-icons/fa";
import {  SiBackbone } from "react-icons/si";
import { FaDesktop } from "react-icons/fa";

export const developmentTopics = [
  {
    title: "HTML",
    description: "Learn the fundamentals of structuring web pages with HTML elements and semantics.",
    icon: FaHtml5,
    iconColor: "text-orange-500",
  },
  {
    title: "CSS",
    description: "Style your websites with CSS, including layouts, animations, and responsive design.",
    icon: FaCss3Alt,
    iconColor: "text-blue-500",
  },
  {
    title: "Tailwind CSS",
    description: "Use Tailwind CSS utility classes to rapidly build modern, responsive user interfaces.",
    icon: SiTailwindcss,
    iconColor: "text-teal-500",
  },
  {
    title: "JavaScript",
    description: "Master core JavaScript concepts to add interactivity and dynamic behavior to websites.",
    icon: FaJs,
    iconColor: "text-yellow-500",
  },
  {
    title: "TypeScript",
    description: "Enhance your JavaScript with strong typing and powerful developer tooling using TypeScript.",
    icon: SiTypescript,
    iconColor: "text-blue-600",
  },
  {
    title: "React",
    description: "Build component-based UIs efficiently with React and its modern ecosystem.",
    icon: FaReact,
    iconColor: "text-sky-500",
  },
  {
    title: "React Query",
    description: "Handle server state and API calls with ease using React Query hooks.",
    icon: SiReactquery,
    iconColor: "text-pink-500",
  },
  {
    title: "Redux",
    description: "Manage complex application state with Redux and Redux Toolkit.",
    icon: SiRedux,
    iconColor: "text-purple-500",
  },
  {
    title: "Node.js",
    description: "Write server-side JavaScript with Node.js for building scalable backend services.",
    icon: FaNodeJs,
    iconColor: "text-green-500",
  },
  {
    title: "SQL",
    description: "Work with relational databases using SQL queries for data storage and retrieval.",
    icon: FaDatabase,
    iconColor: "text-blue-700",
  },
  {
    title: "Sequelize",
    description: "Use Sequelize ORM to interact with SQL databases in a clean, model-based way.",
    icon: SiSequelize,
    iconColor: "text-indigo-500",
  },
  {
    title: "MongoDB",
    description: "Store and manage data with MongoDB, a popular NoSQL database.",
    icon: SiMongodb,
    iconColor: "text-green-600",
  },
  {
    title: "Git",
    description: "Track code changes, collaborate, and manage versions using Git and GitHub.",
    icon: FaGitAlt,
    iconColor: "text-red-500",
  },
  {
    title: "Next.js",
    description: "Build fast, SEO-friendly React applications with server-side rendering using Next.js.",
    icon: SiNextdotjs,
    iconColor: "text-gray-700",
  },
];




export const gettingStarted = [
    {
      title: "Development",
      description: "Learn how to build and structure a webpage with HTML.",
      colors: "from-blue-100 to-blue-200",
    },
    {
      title: "DSA",
      description: "Style your pages with modern CSS techniques.",
      colors: "from-pink-100 to-pink-200",
    },
    {
      title: "Core",
      description: "Add interactivity and dynamic behavior to your apps.",
      colors: "from-orange-100 to-orange-200",
    },
  ];
  

  export const dsaTopics = [
    {
      title: "Arrays",
      description: "Understand how to store and access elements efficiently in contiguous memory using arrays.",
      icon: FaListOl,
      iconColor: "text-orange-500",
    },
    {
      title: "Linked Lists",
      description: "Learn about singly, doubly, and circular linked lists for dynamic memory management.",
      icon: FaProjectDiagram,
      iconColor: "text-purple-500",
    },
    {
      title: "Stacks",
      description: "Implement LIFO (Last In First Out) data structures for tasks like expression evaluation and undo operations.",
      icon: FaLayerGroup,
      iconColor: "text-blue-500",
    },
    {
      title: "Queues",
      description: "Explore FIFO (First In First Out) structures including simple, circular, and priority queues.",
      icon: FaCogs,
      iconColor: "text-green-500",
    },
    {
      title: "Hashing",
      description: "Use hash tables to store key-value pairs and achieve constant-time data retrieval.",
      icon: FaSyncAlt,
      iconColor: "text-yellow-500",
    },
    {
      title: "Trees",
      description: "Learn tree structures like binary trees, binary search trees, and AVL trees for hierarchical data.",
      icon: FaTree,
      iconColor: "text-green-700",
    },
    {
      title: "Graphs",
      description: "Understand graph theory concepts and algorithms for representing networks and relationships.",
      icon: FaNetworkWired,
      iconColor: "text-red-500",
    },
    {
      title: "Heaps",
      description: "Implement min-heaps and max-heaps for priority queues and efficient sorting algorithms.",
      icon: FaSortAmountDown,
      iconColor: "text-indigo-500",
    },
    {
      title: "Recursion",
      description: "Solve problems using recursive approaches, breaking them into smaller subproblems.",
      icon: FaSyncAlt,
      iconColor: "text-pink-500",
    },
    {
      title: "Sorting Algorithms",
      description: "Learn popular sorting techniques like Quick Sort, Merge Sort, Bubble Sort, and Heap Sort.",
      icon: FaSortAmountDown,
      iconColor: "text-blue-600",
    },
    {
      title: "Searching Algorithms",
      description: "Implement linear search, binary search, and other optimized search strategies.",
      icon: FaSearch,
      iconColor: "text-orange-600",
    },
    {
      title: "Dynamic Programming",
      description: "Solve complex problems by breaking them into overlapping subproblems and using memoization.",
      icon: FaSearch,
      iconColor: "text-purple-600",
    },
    {
      title: "Greedy Algorithms",
      description: "Make locally optimal choices at each step to find globally optimal solutions for problems like activity selection.",
      icon: FaSearch,
      iconColor: "text-yellow-600",
    },
    {
      title: "Backtracking",
      description: "Explore solutions for constraint satisfaction problems like N-Queens and Sudoku using backtracking techniques.",
      icon: SiBackbone,
      iconColor: "text-red-600",
    },
    {
      title: "Graph Algorithms",
      description: "Master BFS, DFS, Dijkstra, Kruskal, and Prim algorithms for solving graph-related problems.",
      icon: FaChessBoard,
      iconColor: "text-blue-500",
    },
  ];
  
  

 
export const coreSubjects = [
  {
    title: "Operating Systems (OS)",
    description: "Learn how operating systems manage hardware resources, processes, memory, and provide a platform for applications.",
    icon: FaDesktop,
    iconColor: "text-blue-500",
  },
  {
    title: "Computer Networks (CN)",
    description: "Understand network architectures, protocols, data transmission, and concepts like TCP/IP, routing, and switching.",
    icon: FaNetworkWired,
    iconColor: "text-green-500",
  },
  {
    title: "Database Management Systems (DBMS)",
    description: "Study relational databases, SQL queries, normalization, transactions, and database design principles.",
    icon: FaDatabase,
    iconColor: "text-red-500",
  },
  {
    title: "Object-Oriented Programming (OOPs)",
    description: "Master OOP concepts like classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
    icon: FaCogs,
    iconColor: "text-purple-500",
  },
];
  