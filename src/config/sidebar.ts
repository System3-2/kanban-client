import React from "react";

type Props = {
  name: string;
  icon: React.ReactNode,
  path: string;
}

export const sidebarLinks: Props[] = [
  {
    name: 'Kanban Board',
    icon: 'board',
    path: '/board',
    
  },
  {
    name: 'Project Settings',
    icon: 'settings',
    path: '/settings'
    
  },
  {
    name: 'Releases',
    icon: 'releases',
    path: ''
  },
  {
    name: 'Issues and Filters',
    icon: 'issues',
    path: ''
    
  },
  {
    name: 'Pages',
    icon: 'pages',
    path: ''
    
  },
  {
    name: 'Reports',
    icon: 'reports',
    path: ''
    
  },
  {
    name: 'Components',
    icon: 'components',
    path: ''
    
  },
]
