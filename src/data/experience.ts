export const experience = [
  {
    role: 'Technical Lead / Full-Stack Engineer', company: 'Blautech', location: 'Guatemala', dates: 'Jun 2024 – Present', current: true,
    summary: 'Leading the design, development, and delivery of software solutions. Coordinating development teams, collaborating with stakeholders, and ensuring reliable, high-quality solutions.',
    highlights: [
      'Design and develop Frontend and Backend solutions for a network inventory dashboard. Using Angular, NestJS, PostgreSQL and Grafana.',
      'Design and develop Grafana operational dashboards to network data monitoring.',
      'Design and develop a daily automation to process large amounts of information. Creation of a backend service, with an API RESTful to manage operational processes, generation of reports and other automations.',
      'Deployment and maintenance of containers, managing all configurations needed to serve the entire solution for each project.',
      'Troubleshoot production issues across applications, Linux, databases and integrations with external APIs.',
      'Improve delivery quality through automated tests, code reviews, SonarQube remediation, vulnerability fixes and also reducing code duplicity.',
      'Use AI coding agents for unit test generation and documentation of our projects.',
      'Coordination of 4-6 devs, 2 teams for over 2 years, as a technical lead.',
      'Maintaining constant communication with stakeholders through weekly follow- up meetings. Transforming stakeholder requirements into new features, reviewing implementations, and managing the backlog to prioritize delivery.'
    ],
    stack: ['Python', 'FastAPI', 'NestJS', 'Grafana', 'Docker', 'Podman', 'Nginx', 'Linux', 'SonarQube']
  },
  {
    role: 'Mid Full-Stack Developer', company: 'Rootstack', location: 'Panama', dates: 'Dec 2023 – May 2024',
    summary: 'FullStack development of an web platform, API integration and CI/CD processes.',
    highlights: [
      'Develop frontend and backend features for an insurance platform using Next.js, Tailwind CSS, C#/.NET, and a Web API microservices architecture. API Gateway implementation.',
      'Implementation and validation of JWT token for the requests in the web application.',
      'Entity Framework migrations and database seeding.',
      'Usage of containers with Docker for .NET services.',
      'Implementation of Jenkins and SonarQube quality gates for project deployment and code review.'
    ],
    stack: ['Next.js', 'Tailwind CSS', '.NET / C#', 'Identity Server', 'Entity Framework', 'Docker', 'Docker Compose', 'Jenkins', 'SonarQube', 'Laravel']
  },
  {
    role: 'Full-Stack Developer / Technical Lead', company: 'Blautech', location: 'Guatemala', dates: 'Feb 2021 – Nov 2023',
    summary: 'Full-stack development and technical lead, delivering web applications and monitoring solutions.',
    highlights: [
      'Develop new features for a web application backend and frontend, using TypeScript/ NestJS/ Nuxt/ Vue.',
      'Creation of unit tests to accomplish with coverage requirements.',
      'Over 6 months as Technical Lead, helping my team in the final stage of a project to deliver all pending features.',
      'Develop new features for telecom monitoring solutions with Python, Ruby, ELK/ Elasticsearch, and Logstash.',
      'Built CI/ CD practices using Jenkins, Docker, Kubernetes, GitLab, and SonarQube.'
    ],
    stack: ['ELK', 'Python', 'Ruby', 'TypeScript', 'NestJS', 'Nuxt', 'Vue', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Nexus', 'SonarQube']
  },
  {
    role: 'IT Engineer / Tester', company: 'Ericsson', location: 'Guatemala', dates: 'Feb 2019 – Jan 2021',
    summary: 'Backend development and maintenance of telecom application, focusing on feature delivery, bug fixing, and operational support.', 
    highlights: [
      'Supported enterprise telecom delivery through engineering, testing, and operational technology activities.',
      'Develop new features of a backend project using Java Springboot application.',
      'Attention of Jira tickets to solve reported bugs for backend.'
    ], stack: ['Java', 'Spring Boot', 'SQL Server', 'Oracle', 'Linux']
  },
  {
    role: 'JavaScript Developer', company: 'CloudIT4', location: 'Guatemala', dates: 'Feb 2016 – Jan 2019',
    summary: 'Software development for GPS tracking solutions, business applications, and IT monitoring.',
    highlights: [
      'Develop features for a GPS tracking platform using javascript. Usage of GCP for deployment with virtual machines, serverless functions, google app engine. Usage of NoSQL/ Datastore, cloud storage, and AI APIs',
      'Implemented Odoo environments and Python customizations.',
      'Supported Windows Server monitoring with Nagios.'
      
    ],
    stack: ['JavaScript', 'GCP', 'Odoo', 'Python', 'Windows Server', 'Nagios']
  }
] as const;
