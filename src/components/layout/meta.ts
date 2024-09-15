import type { Metadata } from 'next';

import { locale } from '@/locale';

const {
  common: { app },
} = locale;

export const metadata: Metadata = {
  applicationName: app,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: app,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};
