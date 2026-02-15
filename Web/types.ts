
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
