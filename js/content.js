/* ============================================================
   CONTENT FILE — edit this file to update the whole website.
   Any text starting with "[" is a PLACEHOLDER (shown dashed).
   Set showPlaceholders to false to hide all placeholders.
   ============================================================ */
const SITE = {
  showPlaceholders: true,

  person: {
    name: "Gideon Abiodun",
    title: "Software Quality Assurance Engineer",
    tagline: "Building reliable software through strategic testing, effective QA leadership, and quality-driven engineering practices.",
    intro: "Over 5 years of experience in software quality assurance across FinTech, procurement, and ecommerce platforms, with expertise in team leadership, manual testing, API testing, automation, and end-to-end quality assurance.",
    location: "Lagos, Nigeria",
    photo: "assets/img/GideonAbiodunPortrait.jpg",
    photoAlt: "Portrait of Gideon Abiodun"
  },

  links: {
    email: "gideonabiodun02@gmail.com",
    phone: "+234 706 211 9352",
    phoneAlt: "+234 905 259 4692",
    github: "https://github.com/gideonabiodun",
    linkedin: "https://www.linkedin.com/in/gideonabiodun01/",               
    whatsapp: "https://wa.me/2347062119352",
    cv: "assets/cv/Gideon_Abiodun_CV.pdf",
    // Google Apps Script endpoint used by the contact form (from the original site)
    formEndpoint: "https://script.google.com/macros/s/AKfycbxUPMRJg4cgYNaPxGCBhMYySkEQrtnToaUdGHsmpRmtEUHDLJ9T0_tGsZiFw4kRUQ-ubA/exec"
  },

  about: [
    "I am an award-winning Software Quality Assurance professional with over five years of experience delivering quality software products across FinTech, procurement, and ecommerce platforms.",
    "My experience spans manual testing, API testing, automation testing, frontend and backend validation, integration testing, and end-to-end quality assurance.",
    "Beyond test execution, I lead QA teams, develop structured testing processes, establish quality standards, coordinate testing activities, and mentor QA engineers and interns.",
    "I work closely with developers, product managers, business analysts, and other stakeholders to translate business requirements into effective testing strategies, identify risks, uncover critical defects, and ensure reliable software delivery."
  ],

  stats: [
    { value: "5+", label: "Years in software QA" },
    { value: "10+", label: "Production applications tested and released" },
    { value: "1,227", label: "Test cases designed for NCDMB (21 modules)" },
    { value: "4", label: "QA engineers and interns led" }
  ],

  experience: [
    {
      featured: true, role: "Quality Assurance Engineer", company: "Famous Holdings", type: "Full-time",
      period: "March 2024 – Present",
      summary: "Leading a team of four QA engineers and interns, owning QA processes, test strategy and product quality across multiple projects.",
      bullets: [
        "Lead and manage a team of four QA Engineers and interns, coordinating testing activities, task assignments, reviews, and delivery across multiple projects.",
        "Developed and implemented structured QA processes, workflows, and testing standards for consistency, accountability, and quality best practice.",
        "Establish and oversee test strategies covering functional, non-functional, integration, API, and end-to-end testing across web and mobile applications."
      ],
      tags: ["Team leadership", "Test strategy", "API testing", "Payments", "Risk-based testing", "Mentoring"]
    },
    {
      featured: true, role: "Quality Assurance Engineer (Contract)", company: "NCDMB", type: "Contract",
      period: "March 2026 – November 2026",
      summary: "Testing a procurement platform across its Procurement, Vendor, and Directorate portals.",
      bullets: [
        "Designed a master test suite of over 1,227 test cases across 21 modules, based on the product requirements document.",
        "Ran live API tests in Postman covering authentication and user management endpoints, including Role-Based Access Control (RBAC).",
        "Reviewed API handoff documentation and logged defects in a structured format for the internal defect tracker."
      ],
      tags: ["Postman", "RBAC", "Test design", "Defect reporting"]
    },
    {
      featured: true, role: "Quality Assurance Engineer (Contract)", company: "AltMall", type: "Contract",
      period: "May 2026 – November 2026",
      summary: "Full-stack QA across both the Admin Portal and the Customer Portal of an ecommerce platform.",
      bullets: [
        "Designed and executed over 240 test cases across AltMall's Admin and Customer platforms, covering critical ecommerce workflows and business requirements.",
        "Tested frontend and backend on both portals: UI behaviour, API responses, business logic, data integrity, and system functionality.",
        "Performed integration testing across interconnected services, APIs, and third-party systems."     
      ],
      tags: ["Admin Portal", "Customer Portal", "Integration", "KYB", "BNPL", "Regression"]
    },
    {
      role: "Quality Assurance Engineer", company: "Toye Technology", type: "Full-time",
      period: "August 2022 – March 2024",
      summary: "Test planning, execution, and defect management across full release cycles on web and mobile platforms.",
      bullets: [
        "Test case development and review.",
        "Regression testing and defect analysis.",
        "Requirements traceability and test data management."
      ],
      tags: ["Regression", "Traceability", "UAT"]
    },
    {
      role: "Quality Assurance Engineer", company: "Crestmark Technology", type: "Full-time",
      period: "February 2021 – August 2022",
      summary: "Test planning, execution, and defect management across full release cycles on web and mobile platforms.",
      bullets: [
        "Authored test plans, user journey scenarios, and test case libraries from PRDs and user stories, using Boundary Value Analysis and Equivalence Partitioning.",
        "Tested APIs in Postman: endpoints, payloads, HTTP status codes, authentication, and error handling across third-party integrations.",
        "Ran cross-browser and cross-device testing for functional consistency and UI/UX integrity."
      ],
      tags: ["Web & mobile", "Postman", "Payments", "Jira"]
    }
  ],

  otherExperience: [],

  skills: [
    { icon: "fa-people-group", name: "QA leadership and management", items: ["QA team leadership", "Team coordination", "Mentorship and coaching", "QA process development", "Testing standards and best practices", "Test strategy development", "Quality reporting", "Risk-based testing"] },
    { icon: "fa-clipboard-check", name: "Manual testing", items: ["Functional", "Regression", "Smoke", "Sanity", "Integration", "System", "End-to-end", "Exploratory", "Cross-browser", "Responsive", "Usability", "User acceptance"] },
    { icon: "fa-robot", name: "Automation testing", items: ["Playwright", "Cypress", "JavaScript", "TypeScript", "Page Object Model", "Automated regression", "Test data management", "Authentication and session management"] },
    { icon: "fa-plug", name: "API and backend testing", items: ["Postman", "Swagger / OpenAPI", "Bruno", "REST API testing", "Request and response validation", "Authentication and authorisation", "Status codes", "Negative testing", "Business logic validation", "API integration testing"] },
    { icon: "fa-mobile-screen", name: "Web and mobile testing", items: ["Frontend testing", "Backend testing", "Android app testing", "iOS app testing", "Cross-device testing", "Mobile compatibility", "UI/UX validation"] },
    { icon: "fa-file-lines", name: "QA process and documentation", items: ["Test planning", "Test case design", "Test execution", "Defect lifecycle management", "Requirements analysis", "Requirements traceability", "Test reporting", "Bug documentation", "Agile / Scrum"] },
    { icon: "fa-screwdriver-wrench", name: "Tools and collaboration", items: ["Jira", "Confluence", "ClickUp", "Git", "GitHub", "VS Code", "Slack", "Microsoft Teams", "Figma", "Google Workspace", "Loom"] }
  ],

  achievements: {
    featured: {
      title: "Employee of the Year 2025",
      text: "Recognised for outstanding performance across the technology department in ensuring the quality of both new and legacy products."
    },
    items: [
      "Tested and contributed to the successful release of 10+ production applications across FinTech, procurement, and ecommerce.",
      "Designed over 1,227 test cases across 21 modules for the NCDMB procurement platform.",
      "Designed over 240 test cases across AltMall's Admin and Customer platforms.",
      "Lead and manage four QA engineers and interns at Famous Holdings.",
      "Introduced structured QA processes, standards, and tools that improved collaboration between development and QA.",
      "Validated critical payment workflows and third-party integrations."
    ]
  },

  projects: [
    {
      name: "AltMall", category: "Ecommerce platform", type: "Web: Admin Portal and Customer Portal",
      scope: "Two portals, tested separately and end to end. Admin Portal: frontend, backend, and integration testing. Customer Portal: frontend, backend, and integration testing.",
      approach: "Comprehensive, risk-based testing with positive, negative, boundary, and edge-case scenarios.",
      tools: ["Postman", "Swagger", "Jira"],
      activities: ["240+ test cases designed and executed", "Customer, vendor, catalogue, order, payment, and return workflows", "RBAC, KYB, Pay Now, Save to Own, and BNPL validation", "Regression testing of fixes"]
    },
    {
      name: "NCDMB procurement platform", category: "Government procurement", type: "Web: Procurement, Vendor, and Directorate portals",
      scope: "Three portals across 21 modules, tested against the product requirements document.",
      approach: "Requirements-based test design, live API testing, and structured defect reporting.",
      tools: ["Postman", "Excel", "Markdown bug reports"],
      activities: ["1,227+ test case master suite", "Authentication, user management, and RBAC API tests", "Purchase order validation debugging", "API handoff documentation review"]
    },
    {
      name: "FinTech applications", category: "FinTech", type: "Web and mobile",
      scope: "Transaction validation, multiple payment channels, API integrations, and critical business workflows.",
      approach: "Risk-based prioritisation of payment flows, with post-deployment sanity checks.",
      tools: ["Postman", "Bruno", "Swagger", "Jira"]
    },
    {
      name: "Web and mobile application testing", category: "Cross-platform QA", type: "Web, Android, and iOS",
      scope: "Functional, usability, and compatibility testing across browsers and devices.",
      approach: "Cross-browser and cross-device matrices, exploratory and regression testing.",
      tools: ["Mobile simulators", "Browser dev tools", "Jira"],
      activities: []
      
    },
    {
      name: "API testing and integration validation", category: "API quality", type: "REST APIs",
      scope: "Request and response validation, authentication, authorisation, status codes, and error handling.",
      approach: "Positive and negative API test design from API documentation.",
      tools: ["Postman", "Swagger / OpenAPI", "Bruno"],
      activities: []
    },
    {
      name: "Playwright and Cypress automation", category: "Test automation", type: "Web UI automation",
      scope: "Automated regression and end-to-end checks using the Page Object Model.",
      approach: "Maintainable page-object structure with managed test data and sessions.",
      tools: ["Playwright", "Cypress", "JavaScript", "TypeScript", "GitHub"],
      activities: []
    }
  ],

  documentation: [
    { icon: "fa-sitemap", name: "Test plans", description: "Defines the testing scope, objectives, risks, resources, schedule, and approach." },
    { icon: "fa-list-check", name: "Test cases", description: "Step-by-step scenarios with preconditions, test data, expected results, and coverage." },
    { icon: "fa-bug", name: "Bug reports", description: "Records reproducible defects, including steps, environment, severity, and expected versus actual results." },
    { icon: "fa-chart-simple", name: "Test execution reports", description: "Summarises test runs, pass and fail results, blocked cases, and defects found." },
    { icon: "fa-plug", name: "API testing reports", description: "Documents endpoint checks for requests, responses, authentication, validation, and error handling." },
    { icon: "fa-rotate", name: "Regression testing reports", description: "Tracks regression scope, execution results, and fixes verified for a release." },
    { icon: "fa-code", name: "Automation scripts", description: "Shows reusable automated checks for critical workflows and repeatable regression testing." },
    { icon: "fa-file-circle-check", name: "Test summary reports", description: "Provides release-level quality status, coverage, open risks, and recommendations." }
  ].map(d => ({ ...d, file: "" })),

  certifications: [
    { name: "Introduction to Playwright", issuer: "TestAutomationU", date: "September 2025" },
    { name: "Programming Foundations: Software Testing/QA", issuer: "LinkedIn Learning", date: "August 2024" },   // CV says "20224": confirm
    { name: "Software Testing Automation Internship Program", issuer: "Edureka!", date: "March 2024" },
    { name: "Software Testing Tutorial", issuer: "Great Learning Academy", date: "March 2024" }
  ],

  education: [
    { school: "Caleb University, Lagos", award: "MSc in Computer Science", period: "2026 – Current" },
    { school: "Babcock University, Ilishan-Remo, Ogun State", award: "BSc in Computer Science", period: "2023 – 2025" },
    { school: "Kwara State Polytechnic, Ilorin", award: "Higher National Diploma (HND) in Physics & Electronics", period: "2018 – 2021" },
    { school: "Kwara State Polytechnic, Ilorin", award: "National Diploma (ND) in Science Laboratory Technology", period: "2015 – 2017" }
  ],

  webBackground: {
    text: "Before moving into QA, I designed and built websites. That background helps me test frontends with a developer's eye. A few live sites I have built:",
    sites: [
      { name: "Drippy Nigeria", url: "https://drippynigeria.com.ng/" },
      { name: "Lagos Hotels", url: "https://lagoshotels.ng/" },
      { name: "Queens Yumyum", url: "https://queensyumyum.com/" },
      { name: "Spiffy Cozy Corner", url: "https://spiffycozycorner.com/" }
    ]
  }
};
