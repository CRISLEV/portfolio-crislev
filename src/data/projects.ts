export const projects = [
  {
    number: '01', title: 'Telecom Network Monitoring & Quality Platform', category: 'Monitoring · ETL · Reporting · Telecom',
    description: 'An operational platform that processes network data and gives teams dashboards, KPIs and reports for daily monitoring and decisions.',
    contribution: ['Technical leadership and architecture evolution', 'Daily ETL, recurring data updates and reporting', 'Production deployment stability and troubleshooting', 'Database optimization, infrastructure analysis and migration planning'],
    technologies: ['Python', 'FastAPI', 'Grafana', 'Oracle', 'Docker / Podman', 'Nginx', 'Linux', 'Prometheus', 'REST APIs'],
    architecture: 'Network data → daily ETL → Oracle; FastAPI services, reports, and Grafana dashboards',
    evolution: 'Database redesign, ETL orchestration, infrastructure changes, and Kubernetes migration for reliability and scale.'
  },
  {
    number: '02', title: 'Network Inventory & Configuration Management Platform', category: 'Network Management · APIs · Dashboards · Automation',
    description: 'A platform for managing telecom network elements, configurations and inventory, supported by operational dashboards and monitoring.',
    contribution: ['Technical leadership and client requirements', 'Network configuration workflows and API development', 'Backend and deployment architecture', 'Automation, code quality and infrastructure planning'],
    technologies: ['Angular', 'TypeScript', 'NestJS', 'FastAPI', 'Python', 'Grafana', 'Docker', 'Nginx', 'Oracle / PostgreSQL', 'REST APIs', 'Linux'],
    architecture: 'Angular interface → NestJS / FastAPI services → Oracle / PostgreSQL; Grafana for operational monitoring',
    evolution: 'Service separation, Kafka messaging, Kubernetes, CI/CD, and high availability.'
  },
  {
    number: '03', title: 'Staff Meal & Operations Platform', category: 'Association · Meal Management · Full-Stack',
    description: 'A working web application built for an association in Guatemala to manage staff meals and the related day-to-day operations. It brings menus, food records, kitchen workflows, staff, guests, reports, and access control into one administrative platform.',
    contribution: [
      'Built the modular Next.js interface for meal administration, kitchen workflows, staff, and reporting',
      'Developed NestJS REST APIs backed by MongoDB for users, roles, menus, food records, and operational modules',
      'Integrated Firebase Authentication with backend token validation and role-based access',
      'Added dashboards, report exports, and Swagger API documentation',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Material UI', 'NestJS', 'MongoDB / Mongoose', 'Firebase Auth', 'JWT', 'Swagger', 'Google App Engine'],
    architecture: 'Next.js interface → NestJS REST API → MongoDB; Firebase Authentication and JWT-based access',
    evolution: null,
    url: 'https://elfaro-frontend.uc.r.appspot.com/'
  }
] as const;
