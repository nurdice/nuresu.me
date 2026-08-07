window.RESUME_DATA = {
    // ===== PERSONAL INFO =====
    name: "Nuruddinali (Nur) Dawoodani",
    role: "Business Analyst",
    profileImage: "assets/images/Profile.jpg",
    profileImageDark: "assets/images/Profile.jpg",
    profileImageLight: "assets/images/Profile.jpg",
    contact: {
        email: "nurrali786@gmail.com",
        phone: "+1 (236) 508-4786",
        website: "www.nuresu.me",
        linkedin: "linkedin.com/in/nur786",
        location: "Port Coquitlam, BC Canada"
    },
    summary: "Business Analyst specializing in digital transformation for high-scale retail and banking platforms since 2005. Proven track record of bridging technical architecture with multi-million dollar business value. Expert at leading cross-functional teams in SAFe environments to deliver guest-facing products that impact millions",
    pdfSummary: "Strategic Business Analyst driving operational excellence and digital innovation since 2005. Adept at navigating complex technical landscapes to deliver high-visibility projects, including architecture revamps and AI-driven personalization. A results-oriented leader focused on translating complex business needs into scalable, high-performance technical solutions within Agile and SAFe frameworks.",
    spaceSummary: "MISSION SPECIALIST logging mission-critical flight time since 2005, navigating complex enterprise constellations. Expert in calculating optimal trajectories for business system architectures and aligning disparate planetary stakeholders. Proven capability in establishing high-fidelity communication links between Mission Control (Business) and Engineering Crews. Track record of deploying high-velocity, mission-critical payloads that maintain peak performance across the guest-facing universe.",
    certifications: [
        "Certified Business Analysis Professional (CBAP) - IIBA - Expired"
    ],
    
    // ===== PLANETS (RESUME SECTIONS) =====
    // Solar System Metaphor: Each planet represents a different aspect of professional identity
    planets: [
        // ===== 1. SKILLS & TOOLS PLANET (Venus-like, 1st) =====
        {
            name: "Skills & Tools",
            title: "Skills & Technical Tools",
            section: "sidebar",
            order: 1,
            renderType: "list",
            size: 26,
            distance: 210,
            speed: 0.0005,
            type: "planet",
            inclination: -0.15,
            node: 1.5,
            eccentricity: 0.007,
            tilt: 3.09,
            color: 0x2ecc71,
            texture: "drawVenus",
            rings: { inner: 10, outer: 16 },
            description: "Technical and analytical capabilities that power delivery",
            
            moons: [
                { 
                    name: "Leadership & Analysis", 
                    size: 4.0, // Largest moon - most important
                    distance: 2, 
                    speed: 0.004,
                    color: 0x27ae60, // Green
                    texture: "drawGreen",
                    inclination: 0.2, // Custom inclination for this moon
                    node: 0.5, // Custom node orientation
                    pdfDetails: {
                        title: "LEADERSHIP & ANALYSIS",
                        description: "Leadership and Analytical Capabilities",
                        skills: [
                            "BA Mentorship & Team Leadership",
                            "Backlog Management & Prioritization",
                            "Stakeholder Collaboration",
                            "Data Analysis",
                            "Business Process Improvement",
                            "Strategic Planning & Roadmapping"
                        ]
                    }
                },
                { 
                    name: "Technical Tools", 
                    size: 3.5, // Second largest
                    distance: 3, 
                    speed: 0.003,
                    color: 0x3498db, // Blue
                    texture: "drawBlue",
                    inclination: -0.15, // Different inclination
                    node: 2.1, // Different node orientation
                    pdfDetails: {
                        title: "TECHNICAL TOOLS",
                        description: "Technical Platforms & Tools",
                        skills: [
                            "JIRA - Advanced workflows & reporting",
                            "Confluence - Documentation & knowledge base",
                            "SQL - Complex queries & optimization",
                            "Power Automate - Approval workflows & flow automation",
                            "Microsoft 365 & Power Platform",
                            "Microsoft Azure - Cloud platforms",
                            "Figma - Design collaboration"
                        ]
                    }
                },
                { 
                    name: "Languages", 
                    size: 3.2, // Distinctive size for Languages
                    distance: 5, 
                    speed: 0.0018,
                    color: 0xf39c12, // Orange/Gold
                    texture: "drawYellow",
                    inclination: -0.25, // Retrograde-like inclination
                    node: 1.8, // Different node orientation
                    renderType: "languages", // Special render type
                    pdfDetails: {
                        title: "LANGUAGES",
                        description: "Communication capabilities across multiple languages",
                        languages: [
                            {
                                name: "Hindi",
                                proficiency: "Native",
                                character: "�‍♂️", // Buddha - for native/spiritual connection
                                hero: "Buddha",
                                skills: { speaking: 10, reading: 10, writing: 10, comprehension: 10 }
                            },
                            {
                                name: "English", 
                                proficiency: "Professional",
                                character: "👨‍🔬", // Einstein - for professional/scientific excellence
                                hero: "Einstein",
                                skills: { speaking: 9, reading: 9, writing: 8, comprehension: 10 }
                            },
                            {
                                name: "Gujarati",
                                proficiency: "Intermediate", 
                                character: "🕊️", // Gandhi - for cultural/peaceful communication
                                hero: "Gandhi",
                                skills: { speaking: 7, reading: 5, writing: 4, comprehension: 8 }
                            },
                            {
                                name: "Marathi",
                                proficiency: "Basic",
                                character: "🍎", // Newton - for foundational/discovery learning
                                hero: "Newton", 
                                skills: { speaking: 5, reading: 3, writing: 2, comprehension: 6 }
                            }
                        ]
                    }
                }
            ]
        },
        
        // ===== 2. EXPERIENCE PLANET (Earth-like, 2nd) =====
        {
            name: "Experience",
            title: "Professional Experience",
            section: "main",
            order: 1,
            renderType: "experience",
            size: 56,
            distance: 500,
            speed: 0.0008,
            type: "planet",
            inclination: 0.05,
            node: 3.0,
            eccentricity: 0.017,
            tilt: 0.41,
            color: 0x6b93d6,
            texture: "drawEarth",
            description: "Delivered impact across retail, banking, and enterprise platforms since 2005",
            
            moons: [
                {
                    name: "lululemon athletica",
                    size: 6.0,
                    distance: 2,
                    speed: 0.003,
                    color: 0xc0392b,
                    details: "2020-Present | Business Analyst | Architectural Revamp | AI-Driven Highlights | SAFe Delivery",
                    pdfDetails: {
                        company: "LULULEMON ATHLETICA",
                        role: "Business Analyst",
                        duration: "03/2020 – Present",
                        location: "Vancouver, Canada",
                        industry: "Retail / E-commerce / Athleisure",
                        achievements: [
                            "Architectural Revamp Leadership: Served as BA for an Accelerated Development project to revamp the architecture across all guest-facing pages, ensuring scalability and performance.",
                            "Governance & Standardization: Guided the project team in following consistent patterns for Epic writing, User Story writing, and rigorous Backlog management.",
                            "AI-Driven Product Highlights: Led the 'Product Highlights' initiative, using AI to dynamically feature trending, new, and most-gifted products, resulting in a multi-million dollar revenue impact.",
                            "Home & Story Page Revamp: Developed new components to educate guests on popular categories and upcoming products, enhancing the 'Community Sweatlife Stories' hub.",
                            "Strategic Partnerships: Played a key role in high-profile initiatives including the Lululemon x Olympics Team Canada Partnership and the Holiday Gift Guide revamp.",
                            "SAFe Delivery: Authored Agile/Scrum User Stories for Web, iOS, and Services within the Scaled Agile Framework (SAFe)."
                        ]
                    }
                },
                {
                    name: "Vancity",
                    size: 4.5,
                    distance: 3,
                    speed: 0.0025,
                    color: 0xd35400,
                    details: "2019-2020 | System Migration | Stakeholder Management | Gap Analysis",
                    pdfDetails: {
                        company: "VANCITY",
                        role: "Business Analyst",
                        duration: "03/2019 – 02/2020",
                        location: "Vancouver, Canada",
                        industry: "Banking / Credit Union / Financial Services",
                        achievements: [
                            "System Migration: Acted as BA within a Scaled Agile structure for a major Commercial Banking system migration for staff and members.",
                            "Stakeholder Management: Collaborated with internal teams and external vendors to elicit integration requirements and formulate user stories.",
                            "Gap Analysis: Conducted thorough analysis of existing systems to understand behavior and identify critical gaps."
                        ]
                    }
                },
                {
                    name: "HSBC CANADA",
                    size: 5.2,
                    distance: 4,
                    speed: 0.002,
                    color: 0xe67e22,
                    details: "2011-2019 | Business Analysis | ITQA | Digital Transformation",
                    pdfDetails: {
                        company: "HSBC CANADA",
                        role: "Business Analyst / ITQA Test Lead",
                        duration: "10/2011 – 03/2019",
                        location: "Vancouver, Burnaby, Canada",
                        industry: "Banking / Financial Services / Digital Transformation",
                        achievements: [
                            "Digital Transformation: Delivered a digital communication platform for large customer segments, achieving sustainable cost savings and a reduced carbon footprint.",
                            "Process Improvement: Optimized business processes for Lending Systems, specifically the Credit Application and Mortgage Renewal processes.",
                            "QA Leadership: Created Test Strategies and Plans, leading manual and automated System Integration Testing (UFT) for core banking systems.",
                            "Core Banking: Managed requirements for system enhancements affecting customer-facing and back-office operations.",
                            "Regulatory Compliance: Worked on FATCA Reporting and Finance Transactions Reporting."
                        ]
                    }
                },
                {
                    name: "HSBC Global Technology",
                    size: 4.8,
                    distance: 5,
                    speed: 0.0008,
                    color: 0x8b7a57,
                    details: "2005-2011 | System Development | Modernization | Mainframe/zOS",
                    pdfDetails: {
                        company: "HSBC GLOBAL TECHNOLOGY",
                        role: "Senior Software Engineer - Subject Matter Expert",
                        duration: "08/2005 – 03/2011",
                        location: "Pune, India and Burnaby, Canada",
                        industry: "Banking / Financial Services / Enterprise Technology",
                        achievements: [
                            "System Development: Specialized in Retail Banking Systems (CRM and Transaction Processing) on mainframe/zOS platforms for HSBC UK.",
                            "Modernization: Delivered crucial transitional products to shift from legacy technology to future-proof, market-relevant solutions."
                        ]
                    }
                }
            ]
        },

        // ===== 3. EXPERTISE & IMPACT PLANET (Combined Saturn-sized, 3rd) =====
        {
            name: "Expertise & Impact",
            title: "Problem Domains & Measurable Impact",
            section: "main",
            order: 2,
            renderType: "projects",
            size: 45,
            distance: 810,
            speed: 0.0004,
            type: "planet",
            inclination: -0.1,
            node: 4.5,
            eccentricity: 0.056,
            tilt: 0.47,
            color: 0xf39c12,
            texture: "drawSaturn",
            hasRings: true,
            description: "Problem domains I solve and measurable business outcomes delivered",
            
            moons: [
                { 
                    name: "E-commerce & Digital Retail", 
                    size: 2.0, 
                    distance: 2, 
                    speed: 0.005,
                    color: 0xe67e22,
                    pdfDetails: {
                        title: "E-COMMERCE & DIGITAL RETAIL",
                        subtitle: "Community Engagement & Product Platforms",
                        description: "Solving problems in digital retail, content management, and customer engagement platforms.",
                        impact: [
                            "45% increase in community engagement (Sweatlife Stories)",
                            "Multi-million dollar revenue impact through AI-driven product highlights",
                            "10,000+ active users sharing stories across social channels",
                            "Successful Olympic partnership activation driving sales"
                        ],
                        problems: [
                            "User-generated content platforms and community engagement",
                            "Product catalog management and merchandising optimization",
                            "Shopping cart and checkout process improvement",
                            "Content management systems and publishing workflows"
                        ]
                    }
                },
                { 
                    name: "Banking & Financial Systems", 
                    size: 2.2, 
                    distance: 3, 
                    speed: 0.004,
                    color: 0x3498db,
                    pdfDetails: {
                        title: "BANKING & FINANCIAL SYSTEMS",
                        subtitle: "Core Banking & Digital Transformation",
                        description: "Solving complex problems in financial services, regulatory compliance, and system modernization.",
                        impact: [
                            "$500K+ annual savings through paperless banking transformation",
                            "Eliminated 2+ million sheets of paper annually",
                            "Zero data loss during major banking system migrations",
                            "15% improvement in customer satisfaction scores"
                        ],
                        problems: [
                            "Core banking system operations and transaction processing",
                            "Regulatory compliance and reporting (FATCA, AML)",
                            "Legacy system modernization and data migration",
                            "Multi-channel customer communication platforms"
                        ]
                    }
                },
                { 
                    name: "Agile & SAFe Delivery", 
                    size: 1.8, 
                    distance: 4, 
                    speed: 0.003,
                    color: 0x9b59b6,
                    pdfDetails: {
                        title: "AGILE & SAFE DELIVERY",
                        subtitle: "Scaled Agile Framework Implementation",
                        description: "Leading cross-functional teams in SAFe environments to deliver high-impact products.",
                        impact: [
                            "30% reduction in delivery time through optimized processes",
                            "Improved team productivity through better stakeholder alignment",
                            "Enhanced cross-team communication and collaboration",
                            "Faster time-to-market for critical business features"
                        ],
                        approaches: [
                            "SAFe Program Increment planning and execution",
                            "Epic and Feature decomposition with clear acceptance criteria",
                            "Stakeholder alignment across diverse groups and vendors",
                            "Progressive elaboration in ambiguous environments"
                        ]
                    }
                },
                { 
                    name: "System Integration & QA", 
                    size: 2.0, 
                    distance: 5, 
                    speed: 0.0025,
                    color: 0x1abc9c,
                    pdfDetails: {
                        title: "SYSTEM INTEGRATION & QA",
                        subtitle: "Testing Strategy & Quality Assurance",
                        description: "Comprehensive testing strategies and quality assurance for complex system integrations.",
                        impact: [
                            "40% reduction in testing time through automation",
                            "99.5% inventory accuracy through system optimization",
                            "Reduced system downtime through proactive testing",
                            "Improved audit readiness through comprehensive documentation"
                        ],
                        capabilities: [
                            "Automated testing strategy using UFT and Selenium",
                            "API testing and integration validation",
                            "Test case management and execution planning",
                            "Quality gates and release readiness assessment"
                        ]
                    }
                }
            ]
        },

        // ===== 4. PROJECTS PLANET (Mars-like, 4th) =====
        {
            name: "Projects",
            title: "Key Projects & Achievements",
            section: "main",
            order: 3,
            renderType: "projects",
            size: 24,
            distance: 985,
            speed: 0.0003,
            type: "planet",
            inclination: 0.08,
            node: 5.5,
            eccentricity: 0.093,
            tilt: 0.44,
            color: 0xe74c3c,
            texture: "drawMars",
            description: "Major projects and initiatives that demonstrate impact and innovation",
            
            moons: [
                {
                    name: "AI Product Highlights",
                    size: 2.8,
                    distance: 2,
                    speed: 0.004,
                    color: 0xff6b6b,
                    texture: "drawRed",
                    inclination: 0.15,
                    node: 1.2,
                    pdfDetails: {
                        title: "AI-DRIVEN PRODUCT HIGHLIGHTS",
                        subtitle: "Machine Learning & Personalization",
                        description: "Led AI initiative to dynamically feature trending and personalized products using machine learning algorithms.",
                        impact: [
                            "Multi-million dollar revenue impact through intelligent product recommendations",
                            "45% increase in click-through rates on featured products",
                            "Reduced manual merchandising effort by 70%",
                            "Improved customer engagement and personalization"
                        ]
                    }
                },
                {
                    name: "Architecture Revamp",
                    size: 2.5,
                    distance: 3,
                    speed: 0.003,
                    color: 0xe67e22,
                    texture: "drawYellow",
                    inclination: -0.1,
                    node: 3.8,
                    pdfDetails: {
                        title: "ENTERPRISE ARCHITECTURE REVAMP",
                        subtitle: "Scalability & Performance Optimization",
                        description: "Led business analysis for comprehensive architecture overhaul across all guest-facing platforms.",
                        impact: [
                            "Improved system scalability to handle 10x traffic growth",
                            "Reduced page load times by 40%",
                            "Enhanced development velocity through standardized patterns",
                            "Future-proofed technology stack for next 5 years"
                        ]
                    }
                },
                {
                    name: "Digital Banking Platform",
                    size: 2.3,
                    distance: 4,
                    speed: 0.0025,
                    color: 0x3498db,
                    texture: "drawBlue",
                    inclination: 0.2,
                    node: 5.1,
                    pdfDetails: {
                        title: "DIGITAL BANKING TRANSFORMATION",
                        subtitle: "Paperless Communication Platform",
                        description: "Delivered digital communication platform for large customer segments in banking sector.",
                        impact: [
                            "$500K+ annual cost savings through paperless processes",
                            "Eliminated 2+ million sheets of paper annually",
                            "Improved customer satisfaction by 15%",
                            "Reduced carbon footprint significantly"
                        ]
                    }
                }
            ]
        },

        // ===== COMMUNITY / VOLUNTEERING PLANET (Teal) =====
        {
            name: "Community",
            title: "Volunteering & Community",
            section: "main",
            order: 4,
            renderType: "experience",
            size: 16,
            distance: 1780,
            speed: 0.00013,
            type: "planet",
            inclination: 0.14,
            node: 3.2,
            eccentricity: 0.03,
            tilt: 0.3,
            color: 0x1abc9c,
            texture: "drawTeal",
            description: "Community leadership and volunteering — building tools that serve people",
            moons: [
                {
                    name: "Events Management System",
                    size: 2.0, distance: 2, speed: 0.004,
                    color: 0x16a085, texture: "drawTeal", inclination: 0.1, node: 0.6,
                    pdfDetails: {
                        company: "Ismaili Council for British Columbia",
                        role: "Developer — Data & Technology Team (BC)",
                        duration: "2022 – Present",
                        industry: "Non-profit / Community Technology",
                        achievements: [
                            "Built an Events Management System: a Drupal event-request form that triggers a Microsoft Power Automate flow, routing each submission through a two-stage approval workflow and auto-creating a calendar entry once approved.",
                            "Replaced a manual, email-driven intake with an automated pipeline — reducing turnaround time and eliminating missed or duplicated requests.",
                            "Standardized approvals with clear routing and an audit trail, giving the community reliable governance over events.",
                            "Volunteered on the Data & Technology team, supporting digital tooling and automation across community initiatives."
                        ]
                    }
                },
                {
                    name: "Care for the Elderly",
                    size: 1.7, distance: 3, speed: 0.003,
                    color: 0x2ecc71, texture: "drawGreen", inclination: -0.15, node: 2.4,
                    pdfDetails: {
                        company: "Ismaili Community, British Columbia",
                        role: "Volunteer — Care for the Elderly Team",
                        duration: "Ongoing",
                        industry: "Non-profit / Seniors Support",
                        achievements: [
                            "Standardized Visitation Reporting: designed a structured form for volunteers to capture details of each senior visit.",
                            "Automated consolidation of submissions into a unified report using spreadsheets and Microsoft Power Automate.",
                            "Gave coordinators a consistent, at-a-glance view of visits to better support seniors and follow up on needs.",
                            "Reduced manual compilation effort and improved data consistency across volunteers."
                        ]
                    }
                }
            ]
        },

        // ===== 5. EDUCATION PLANET (Blue, 5th) =====
        {
            name: "Education",
            title: "Education",
            section: "sidebar",
            order: 3,
            renderType: "education",
            size: 14,
            distance: 1194,
            speed: 0.00025,
            type: "planet",
            inclination: 0.1,
            node: 2.5,
            eccentricity: 0.02,
            tilt: 0.4,
            color: 0x3498db,
            texture: "drawBlue",
            description: "Academic foundation in Computer Science and Engineering",
            
            moons: [
                {
                    name: "B.E. Computer Science",
                    size: 2.5, // Increased size for better visibility
                    distance: 2, // Increased distance from planet for better spacing
                    speed: 0.003,
                    color: 0x3498db,
                    texture: "drawBlue",
                    inclination: 0.1, // Slight inclination
                    node: 0.8, // Custom orientation
                    institution: "V.E.S.I.T",
                    degree: "Bachelor of Engineering",
                    field: "Computer Science",
                    duration: "2005",
                    location: "Mumbai, India",
                    details: "Bachelor of Engineering - Computer Science\n2001 – 2005\n\nVivekanand Education Society's Institute of Technology (V.E.S.I.T)\nMumbai University, India\n\nSpecialization: Software Engineering, Database Systems, Computer Networks\nRelevant Coursework: Data Structures, Algorithms, Software Engineering, Database Management, Computer Networks, Operating Systems",
                    mapQuery: "Vivekanand Education Society's Institute of Technology Mumbai",
                    achievements: [
                        "Strong foundation in software engineering principles and methodologies",
                        "Comprehensive understanding of computer systems architecture",
                        "Database design and management expertise with SQL proficiency",
                        "Advanced knowledge of data structures and algorithm optimization",
                        "Computer networks and distributed systems understanding",
                        "Object-oriented programming and software design patterns",
                        "Operating systems concepts and system-level programming",
                        "Mathematical foundation for computational problem solving"
                    ],
                    pdfDetails: { 
                        degree: "Bachelor of Engineering - Computer Science", 
                        institution: "V.E.S.I.T, Mumbai University", 
                        year: "2005",
                        location: "Mumbai, India"
                    }
                },
                {
                    name: "H.S.C Science",
                    size: 2.0, // Increased size
                    distance: 3, // Increased distance for better spacing
                    speed: 0.0025,
                    color: 0x2980b9,
                    texture: "drawTeal",
                    inclination: -0.2, // Different inclination
                    node: 3.5, // Different orientation
                    institution: "K. J. Somaiya College",
                    degree: "Higher Secondary Certificate",
                    field: "Science Stream",
                    duration: "2001",
                    location: "Mumbai, India",
                    details: "Higher Secondary Certificate - Science Stream\n1999 – 2001\n\nK. J. Somaiya College of Science and Commerce\nMumbai University, India\n\nSubjects: Physics, Chemistry, Mathematics, Biology\nFocus: Mathematical and analytical thinking foundation",
                    mapQuery: "K. J. Somaiya College of Science and Commerce Mumbai",
                    achievements: [
                        "Strong mathematical foundation with advanced calculus and algebra",
                        "Scientific methodology and experimental design understanding",
                        "Analytical problem-solving skills development",
                        "Physics concepts including mechanics and electromagnetism",
                        "Chemistry knowledge with organic and inorganic compounds",
                        "Logical reasoning and critical thinking enhancement"
                    ],
                    pdfDetails: { 
                        degree: "H.S.C Science", 
                        institution: "K. J. Somaiya College, Mumbai", 
                        year: "2001",
                        location: "Mumbai, India"
                    }
                },
                {
                    name: "S.S.C",
                    size: 1.8, // Increased size for better visibility
                    distance: 4, // Increased distance for proper spacing
                    speed: 0.002,
                    color: 0x1abc9c,
                    texture: "drawGreen",
                    inclination: 0.25, // Higher inclination
                    node: 5.2, // Different orientation
                    institution: "St. Sebastian's High School",
                    degree: "Secondary School Certificate",
                    field: "General Education",
                    duration: "1999",
                    location: "Mumbai, India",
                    details: "Secondary School Certificate\n1988 – 1999\n\nSt. Sebastian's High School\nMumbai, India\n\nComprehensive secondary education with focus on academic excellence and character development. Strong foundation in core subjects including Mathematics, Science, and Languages.",
                    mapQuery: "St. Sebastian's High School Chembur Mumbai",
                    achievements: [
                        "Comprehensive academic foundation across multiple disciplines",
                        "Character development and disciplinary excellence",
                        "Multi-language proficiency development (English, Hindi, Marathi)",
                        "Mathematics and science fundamentals establishment",
                        "Communication skills and presentation abilities",
                        "Leadership qualities through school activities and projects"
                    ],
                    pdfDetails: { 
                        degree: "S.S.C", 
                        institution: "St. Sebastian's High School, Mumbai", 
                        year: "1999",
                        location: "Mumbai, India"
                    }
                }
            ]
        },

        // ===== 6. CERTIFICATIONS PLANET (Purple, 6th) =====
        {
            name: "Certifications",
            title: "Certifications & Professional Development",
            section: "sidebar",
            order: 4,
            renderType: "list",
            size: 12,
            distance: 1374,
            speed: 0.0002,
            type: "planet",
            inclination: -0.12,
            node: 4.2,
            eccentricity: 0.045,
            tilt: 0.35,
            color: 0x9b59b6,
            texture: "drawUranus",
            description: "Professional certifications and continuous learning achievements",
            
            moons: [
                {
                    name: "Business Analysis",
                    size: 2.0,
                    distance: 2,
                    speed: 0.004,
                    color: 0x8e44ad,
                    texture: "drawUranus",
                    inclination: 0.18,
                    node: 1.5,
                    pdfDetails: {
                        title: "Certified Business Analysis Professional (CBAP) - Expired",
                        description: "Professional certification in business analysis methodologies and practices",
                        skills: [
                            "Requirements Engineering and Management",
                            "Stakeholder Analysis and Engagement",
                            "Business Process Modeling and Improvement",
                            "Solution Assessment and Validation",
                            "Agile Business Analysis Techniques"
                        ]
                    }
                },
                {
                    name: "Agile & SAFe",
                    size: 1.8,
                    distance: 3,
                    speed: 0.003,
                    color: 0x9b59b6,
                    texture: "drawUranus",
                    inclination: -0.15,
                    node: 4.1,
                    pdfDetails: {
                        title: "AGILE & SAFE (PRACTITIONER)",
                        description: "Hands-on, practitioner-level experience with Agile and SAFe — working knowledge, not a formal certification",
                        skills: [
                            "SAFe Program Increment Planning",
                            "Scrum Master Principles",
                            "Agile User Story Writing",
                            "Epic and Feature Decomposition",
                            "Continuous Integration/Delivery",
                            "Lean Portfolio Management"
                        ]
                    }
                }
            ]
        },

        // ===== 7. CONTACT PLANET (Cyan, 7th) =====
        {
            name: "Contact",
            title: "Contact & Professional Network",
            section: "sidebar",
            order: 5,
            renderType: "contact",
            size: 32,
            distance: 1594,
            speed: 0.00015,
            type: "planet",
            inclination: 0.05,
            node: 6.1,
            eccentricity: 0.025,
            tilt: 0.28,
            color: 0x1abc9c,
            texture: "drawTeal",
            description: "Professional contact information and networking channels",
            
            moons: [
                {
                    name: "Email",
                    size: 1.5,
                    distance: 2,
                    speed: 0.005,
                    color: 0x16a085,
                    texture: "drawEmailSurface",
                    inclination: 0.1,
                    node: 0.5,
                    pdfDetails: {
                        title: "EMAIL COMMUNICATION",
                        description: "Primary professional email contact",
                        contact: {
                            method: "Email",
                            value: "nurrali786@gmail.com",
                            link: "mailto:nurrali786@gmail.com",
                            icon: "📧"
                        }
                    }
                },
                {
                    name: "LinkedIn",
                    size: 1.4,
                    distance: 3,
                    speed: 0.004,
                    color: 0x0077b5,
                    texture: "drawBlue",
                    inclination: -0.12,
                    node: 2.3,
                    pdfDetails: {
                        title: "PROFESSIONAL NETWORK",
                        description: "LinkedIn professional profile and network",
                        contact: {
                            method: "LinkedIn",
                            value: "linkedin.com/in/nur786",
                            link: "https://linkedin.com/in/nur786",
                            icon: "🔗"
                        }
                    }
                },
                {
                    name: "Phone",
                    size: 1.3,
                    distance: 4,
                    speed: 0.003,
                    color: 0x27ae60,
                    texture: "drawPhoneSurface",
                    inclination: 0.18,
                    node: 4.7,
                    pdfDetails: {
                        title: "PHONE CONTACT",
                        description: "Direct phone communication",
                        contact: {
                            method: "Phone",
                            value: "+1 (236) 508-4786",
                            link: "tel:+12365084786",
                            icon: "📱"
                        }
                    }
                },
                {
                    name: "Location",
                    size: 1.2,
                    distance: 5,
                    speed: 0.0025,
                    color: 0x2ecc71,
                    texture: "drawLocationSurface",
                    inclination: -0.08,
                    node: 1.9,
                    pdfDetails: {
                        title: "LOCATION",
                        description: "Current professional location",
                        contact: {
                            method: "Location",
                            value: "Port Coquitlam, BC Canada",
                            icon: "📍"
                        }
                    }
                }
            ]
        }
    ]
};

// =====================================================================
// ROLE-TARGETING VARIANTS  (used by resume.html — ignored by the site)
// ---------------------------------------------------------------------
// Single source of truth stays above. This block only controls WHICH
// summary + emphasis the clean printable resume shows for a given target.
// Aligned with RESUME_STRATEGY_PLAN.md (target: Senior / Lead / Principal BA).
// Edit freely — add or tweak a target any time.
// =====================================================================
window.RESUME_DATA.variants = {
    generic: {
        label: "Senior BA (all-round)",
        tagline: "Business Analyst | Bridging AI Technology & Multi-Million-Dollar Business Outcomes",
        summary: "Senior Business Analyst driving digital transformation across retail and financial services since 2005. Recently delivered a multi-million-dollar AI personalization initiative at lululemon and led an enterprise architecture revamp serving millions of guests. Expert at translating complex stakeholder needs into scalable technical solutions within Agile/SAFe frameworks, with a track record of zero-downtime migrations and measurable business impact.",
        emphasizeCompanies: ["LULULEMON ATHLETICA", "VANCITY", "HSBC CANADA"],
        focusSkills: [
            "Requirements engineering & user stories",
            "Backlog management & prioritization",
            "Stakeholder collaboration",
            "Agile / SAFe delivery",
            "Business process improvement",
            "Power Automate & workflow automation",
            "Data analysis · SQL",
            "JIRA · Confluence · Azure · Figma"
        ],
        focusHighlights: [
            "Multi-million-dollar revenue via AI product highlights",
            "$500K+ annual savings from paperless banking",
            "Enterprise architecture revamp — 40% faster page loads",
            "Zero data loss on core banking migration"
        ]
    },
    product: {
        label: "AI / Digital Product",
        tagline: "Business Analyst | AI-Driven Digital Products & Personalization",
        summary: "Product-focused Business Analyst turning customer problems into shipped digital products since 2005. At lululemon I led an AI-driven personalization initiative delivering multi-million-dollar revenue impact and drove an architecture revamp across all guest-facing pages. I partner with product, design, and engineering in SAFe — writing crisp epics and stories and aligning teams on outcomes for products reaching millions.",
        emphasizeCompanies: ["LULULEMON ATHLETICA"],
        focusSkills: [
            "AI-driven personalization & experimentation",
            "Epics, user stories & MVP definition",
            "Backlog management & roadmapping",
            "Product analytics & merchandising",
            "Power Automate & workflow automation",
            "Cross-functional facilitation",
            "JIRA · Confluence · Figma · SQL"
        ],
        focusHighlights: [
            "Multi-million-dollar revenue via AI product highlights",
            "45% increase in community engagement",
            "Architecture revamp — scaled for 10x traffic",
            "Olympics x Team Canada activation"
        ]
    },
    banking: {
        label: "Banking / FinTech",
        tagline: "Business Analyst | Banking, FinTech & Core Systems",
        summary: "Business Analyst with 13+ years in financial services across HSBC and Vancity — core banking, lending, migrations, and regulatory reporting. I elicit integration requirements, manage risk through change, and keep large programs compliant and on track, from FATCA reporting to a zero-data-loss commercial banking migration — backed by recent AI and digital-transformation delivery at lululemon.",
        emphasizeCompanies: ["VANCITY", "HSBC CANADA", "HSBC GLOBAL TECHNOLOGY"],
        focusSkills: [
            "Core banking & lending systems",
            "Integration requirements & APIs",
            "Regulatory reporting (FATCA)",
            "System migration & gap analysis",
            "System integration testing (UFT)",
            "Stakeholder & vendor management"
        ],
        focusHighlights: [
            "Zero data loss on commercial banking migration",
            "$500K+ annual savings from paperless banking",
            "40% reduction in testing time via automation",
            "13+ years across HSBC banking platforms"
        ]
    },
    lead: {
        label: "Lead / Principal BA",
        tagline: "Lead Business Analyst | BA Practice, Standards & Delivery Leadership",
        summary: "Lead Business Analyst with a deep technical foundation (B.E. Computer Science) and delivery experience since 2005. I mentor BAs, set standards for epic and story writing, and govern backlog quality across cross-functional SAFe teams. At lululemon I lead architecture and AI initiatives with multi-million-dollar impact; earlier I led QA strategy and delivery for core banking programs — pairing hands-on delivery with practice leadership.",
        emphasizeCompanies: ["LULULEMON ATHLETICA", "HSBC CANADA"],
        focusSkills: [
            "BA mentorship & team leadership",
            "Standards & governance (epics/stories)",
            "Backlog quality & prioritization",
            "Strategic planning & roadmapping",
            "SAFe delivery at scale",
            "Power Automate & workflow automation",
            "Stakeholder alignment across vendors"
        ],
        focusHighlights: [
            "Set epic/story standards across project teams",
            "Multi-million-dollar AI revenue initiative",
            "Led QA strategy for core banking (UFT)",
            "Delivering since 2005 — engineering-to-BA depth"
        ]
    },
    it: {
        label: "IT / Technical (Automation)",
        tagline: "Business Systems Analyst & Automation Developer | Power Platform · SQL · Integrations",
        summary: "Technically hands-on Business Systems Analyst and automation builder with an engineering foundation (B.E. Computer Science). I design and ship automations and integrations end-to-end — from Microsoft Power Automate approval workflows and Power Platform apps to SQL and API integrations — bridging business needs and working software. Background spans core-banking systems engineering (mainframe/zOS), test automation (UFT/Selenium), and delivery in Agile/SAFe teams.",
        emphasizeCompanies: ["LULULEMON ATHLETICA", "HSBC GLOBAL TECHNOLOGY", "HSBC CANADA"],
        focusSkills: [
            "Power Automate & Power Platform",
            "SQL — complex queries & optimization",
            "System integration & APIs",
            "Test automation (UFT, Selenium)",
            "Microsoft 365 · Azure",
            "Requirements-to-solution delivery"
        ],
        focusHighlights: [
            "Built Drupal → Power Automate approval + calendar workflow",
            "Automated visitation reporting (spreadsheets + Power Automate)",
            "40% less testing time via UFT automation",
            "Engineering foundation: core banking on mainframe/zOS"
        ]
    }
};

// =====================================================================
// VOLUNTEERING & COMMUNITY  (rendered by resume pages — ignored by site)
// ---------------------------------------------------------------------
// Kept compact on purpose. Edit bullets/dates freely.
// =====================================================================
window.RESUME_DATA.volunteering = [
    {
        role: "Developer — Data & Technology Team (BC)",
        organization: "Ismaili Council for British Columbia",
        duration: "2022 – Present",
        location: "British Columbia, Canada",
        bullets: [
            "Built an Events Management System: a Drupal event-request form that triggers a Microsoft Power Automate flow, routing each submission through a two-stage approval workflow and auto-creating a calendar entry once approved — replacing a manual, email-driven process."
        ]
    },
    {
        role: "Volunteer — Care for the Elderly Team",
        organization: "Ismaili Community, British Columbia",
        duration: "Ongoing",
        location: "British Columbia, Canada",
        bullets: [
            "Standardized Visitation Reporting: designed a structured form for volunteers to capture details of each senior visit, then automated consolidation of submissions into a unified report using spreadsheets and Microsoft Power Automate."
        ]
    }
];