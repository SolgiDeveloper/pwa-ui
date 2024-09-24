import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import '../styles/index.css';

import { isPWA } from '@/lib/helper';

import Layout, { yekanBakhFont } from '@/components/layout';
import { metadata as PWAMetadata } from '@/components/layout/meta';

import 'react-spring-bottom-sheet/dist/style.css';
import ReactQueryClientContext from '@/@core/contexts/react-query-client-context';
import { locale } from '@/locale';

const {
  common: { app },
} = locale;
const mergeMeta = isPWA() ? PWAMetadata : {};
export const metadata: Metadata = {
  title: app,
  description: app,
  ...mergeMeta,
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='fa-IR' dir='rtl'>
      <link
        rel='apple-touch-startup-image'
        media='screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
        href='/images/splash_screens/8.3__iPad_Mini_portrait.png'
      />
      <link rel='icon' href='/images/logo/SmallLogo.svg' type='image/x-icon' />
      <body className={yekanBakhFont.className}>
        <ReactQueryClientContext>
          <Layout>{children}</Layout>
        </ReactQueryClientContext>
      </body>
    </html>
  );
}
