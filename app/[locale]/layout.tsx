import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBarProvider from "@/components/providers/ProgressBarProvider";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }


  return (
    <html lang={locale}>
      <body>
        <>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <ProgressBarProvider>
                <Header />
                <div className="h-auto">{children}</div>
                <Footer />
              </ProgressBarProvider>
          </NextIntlClientProvider>
        </>
      </body>
    </html>
  );
}
