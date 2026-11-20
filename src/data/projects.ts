export const projects = [
  {
    number: '01', title: 'Telecom Network Monitoring & Quality Platform', category: 'Monitoring · ETL · Reporting · Automation',
    description: 'An operational platform that processes network data and provides dashboards, KPIs and reports for daily monitoring and decisions.',
    contribution: ['Technical leadership and architecture vision', 'Deployment management, of all services', 'Production deployment stability and troubleshooting', 'Database optimization, infrastructure analysis and Dashboards design'],
    technologies: ['Python', 'FastAPI', 'Grafana', 'Oracle', 'Docker / Podman', 'Nginx', 'Linux', 'Prometheus', 'REST APIs'],
    architecture: 'Network data → daily ETL → Oracle; FastAPI services, reports, and Grafana dashboards',
    evolution: 'Database redesign, ETL orchestration, infrastructure changes, and Kubernetes migration for reliability and scale.'
  },
  {
    number: '02', title: 'Network Inventory & Configuration Management Platform', category: 'Network Management Platform · APIs · Dashboards · Automation',
    description: 'A web application and services for a network inventory, configurations and automations. Also design of operational dashboards and monitoring.',
    contribution: ['Technical leadership and gathering of requirements', 'Frontend and backend development to centralize all network inventory information', 'Management of deployment and maintenance of services', 'Automation, code quality and infrastructure planning'],
    technologies: ['Angular', 'TypeScript', 'NestJS', 'FastAPI', 'Python', 'Grafana', 'Docker', 'Nginx', 'Oracle / PostgreSQL', 'REST APIs', 'Linux'],
    architecture: 'Angular interface → NestJS / FastAPI services → Oracle / PostgreSQL; Grafana for operational monitoring',
    evolution: 'Service separation, Kafka messaging, Kubernetes, CI/CD, and high availability.'
  },
  {
    number: '03', title: 'Staff Meal & Operations Platform', category: 'Web application · Management software · Cloud solution',
    description: 'A working web application built for an association in Guatemala to manage staff meals and the related day-to-day operations. It brings menus, food records, kitchen workflows, staff, guests, reports, and access control into one administrative platform.',
    contribution: [
      'Design and Development of all administration modules, staff modules, and reporting',
      'Implementation of NestJS REST APIs backed and MongoDB to manage all data and operations',
      'Integrated Firebase Authentication with JWT token validation and role-based access',
      'Host of the application on Google App Engine, with CI/CD and automated deployment',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Material UI', 'NestJS', 'MongoDB / Mongoose', 'Firebase Auth', 'JWT', 'Swagger', 'Google App Engine'],
    architecture: 'Next.js interface → NestJS REST API → MongoDB; Firebase Authentication and JWT-based access',
    evolution: null,
    url: 'https://elfaro-frontend.uc.r.appspot.com/'
  }
] as const;
