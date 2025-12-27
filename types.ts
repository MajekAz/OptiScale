
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}