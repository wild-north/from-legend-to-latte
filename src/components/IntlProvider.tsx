'use client';

import { ReactNode } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { messages, defaultLocale, type Locale } from '@/lib/intl';

interface IntlProviderProps {
  children: ReactNode;
  locale?: Locale;
}

export default function IntlProvider({ children, locale = defaultLocale }: IntlProviderProps) {
  return (
    <ReactIntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </ReactIntlProvider>
  );
} 