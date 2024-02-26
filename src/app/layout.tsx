import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ProviderSetting } from '@/settings';
import { UiSidebarLayout } from '@/layout';
import { ProviderCustom } from '@/shared';
import { BtnSettings, UiHeader } from '@/components';
import { getDictionary, lang } from '@/translate';

const roboto = Roboto({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: 'Jeyson Guzman',
  description: 'Mi pagina wen de Jeyson Camilo Guzman Rico, donde se muestra las expericiencias y proyectos hechos',
  icons: [
    { rel: 'icon', url: '/img/favicon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/img/favicon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/img/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/img/favicon.png' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const dictionary = getDictionary();
  return (
    <html lang={lang} className={roboto.className}>
      <body>
        <ProviderCustom>
          <ProviderSetting>
            <UiSidebarLayout lang={lang} header={<UiHeader lang={dictionary} />} content={children} />
            <BtnSettings lang={dictionary} />
          </ProviderSetting>
        </ProviderCustom>
      </body>
    </html>
  );
}
