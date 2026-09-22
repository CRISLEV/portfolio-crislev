export const experience = [
  {
    role: 'Technical Lead / Full-Stack Engineer', company: 'Blautech', location: 'Guatemala', dates: 'Jun 2024 – Present', current: true,
    summary: 'Leading telecom platforms that connect network operations, data processing, reliable deployments, and client requirements.',
    highlights: [
      'Lead two telecom projects in parallel, coordinating approximately 4–6 engineers, delivery priorities, knowledge sharing, and direct client communication',
      'Lead a network monitoring and quality platform with daily ETL workloads, recurring data updates, operational dashboards, reports, and KPIs',
      'Lead a network inventory and configuration platform, including network element workflows and Grafana dashboards for operational monitoring',
      'Keep production deployments stable and diagnose incidents across application, ETL, database, and infrastructure layers; manage Docker/Podman, Nginx, and Linux environments',
      'Build REST APIs with NestJS and FastAPI and Python automation through cron jobs and long-running containerized services',
      'Guide architecture and infrastructure analysis, database redesign, migration and capacity planning; evaluate Kafka messaging and Kubernetes as future options',
      'Promote automated testing, SonarQube quality practices, vulnerability remediation, and shared ownership across the team',
      'Integrate AI-assisted development and coding agents into engineering workflows to accelerate test generation, repetitive development tasks, code analysis, documentation, and well-defined implementation work, while maintaining human review, testing, and quality controls before integration'
    ],
    stack: ['Python', 'FastAPI', 'NestJS', 'Grafana', 'Docker', 'Podman', 'Nginx', 'Linux', 'SonarQube']
  },
  {
    role: 'Mid Full-Stack Developer', company: 'Rootstack', location: 'Panama', dates: 'Dec 2023 – May 2024',
    summary: 'Contributed to an insurance platform across application development, identity, and delivery workflows.',
    highlights: [
      'Built frontend and backend features with Next.js, Tailwind CSS, and .NET/C# Web API microservices',
      'Implemented token generation and validation, request middleware, and Identity Server SSO features; worked on user management, permissions, and Entity Framework migrations and seeding',
      'Containerized .NET services with Docker Compose and implemented Jenkins pipelines with SonarQube quality gates for QA and delivery'
    ],
    stack: ['Next.js', 'Tailwind CSS', '.NET / C#', 'Identity Server', 'Entity Framework', 'Docker', 'Docker Compose', 'Jenkins', 'SonarQube', 'Laravel']
  },
  {
    role: 'Full-Stack Developer / Technical Lead', company: 'Blautech', location: 'Guatemala', dates: 'Feb 2021 – Nov 2023',
    summary: 'Worked across telecom monitoring, application delivery, and CI/CD while taking on technical leadership responsibilities.',
    highlights: [
      'Developed telecom monitoring and alarm-processing solutions using ELK Stack, Docker, Python, Ruby, and Logstash pipelines, with regular expressions and rules tailored to countries and vendors',
      'Served as developer and Technical Lead on a TypeScript/NestJS/Nuxt/Vue project; coordinated final-sprint delivery, completed pending features, and added endpoint unit tests to meet coverage requirements',
      'Built CI/CD workflows with Jenkins, Docker, Kubernetes, GitLab, Nexus, and SonarQube'
    ],
    stack: ['ELK', 'Python', 'Ruby', 'TypeScript', 'NestJS', 'Nuxt', 'Vue', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Nexus', 'SonarQube']
  },
  {
    role: 'IT Engineer / Tester', company: 'Ericsson', location: 'Guatemala', dates: 'Feb 2019 – Jan 2021',
    summary: 'Worked in telecommunications engineering and testing environments.', highlights: [], stack: []
  },
  {
    role: 'JavaScript Developer', company: 'CloudIT4', location: 'Guatemala', dates: 'Feb 2016 – Jan 2019',
    summary: 'Developed GPS tracking and cloud-based solutions with supporting infrastructure and monitoring.',
    highlights: ['Worked with virtual machines, serverless functions, NoSQL data and cloud storage'],
    stack: ['JavaScript', 'GCP', 'Odoo', 'Python', 'Windows Server', 'Nagios']
  }
] as const;
