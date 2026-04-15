import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useMemo } from 'react';
import Button from '../components/ui/Button';

export default function Services() {
  const { lang } = useLanguage();

  const treatwellUrl = 'https://book.treatwell.lt/salonas/kirpeja-virginija/';
  const siteUrl = 'https://kirpeja-virginija.lt/';

  const services = useMemo(
    () => [
      {
        id: 'women-haircut',
        category: 'haircut',
        name: { lt: 'Moterų kirpimas', en: "Women's haircut" },
        desc: {
          lt: 'Individualus moterų kirpimas ir lengvas suformavimas pagal veido bruožus, plaukų tipą ir kasdienius poreikius.',
          en: 'Personalised women’s haircut and light styling based on face shape, hair type and daily routine.',
        },
        price: { amount: '15', from: true },
      },
      {
        id: 'mens-haircut',
        category: 'haircut',
        name: { lt: 'Vyrų kirpimas', en: 'Men’s haircut' },
        desc: {
          lt: 'Tvarkingas klasikinis arba modernesnis vyriškas kirpimas, pritaikytas Jūsų stiliui.',
          en: 'Classic or modern men’s haircut tailored to your style.',
        },
        price: { amount: '17', from: false },
      },
      {
        id: 'haircut-beard',
        category: 'haircut',
        name: {
          lt: 'Plaukų kirpimas ir barzdos modeliavimas',
          en: 'Haircut & beard styling',
        },
        desc: {
          lt: 'Pilnas vyriškas įvaizdis: plaukų kirpimas, kontūrų sutvarkymas ir barzdos modeliavimas.',
          en: 'Complete men’s grooming: haircut, contour cleanup and beard styling.',
        },
        price: { amount: '25', from: false },
      },
      {
        id: 'kids-haircut',
        category: 'haircut',
        name: { lt: 'Vaikų kirpimas', en: 'Children’s haircut' },
        desc: {
          lt: 'Švelnus ir greitas vaikų kirpimas, kad vizitas būtų kuo patogesnis mažiesiems.',
          en: 'Gentle and quick haircut for children for a more comfortable visit.',
        },
        price: { amount: '15', from: false },
      },
      {
        id: 'hair-color-consultation',
        category: 'color',
        name: {
          lt: 'Plaukų dažymo konsultacija',
          en: 'Hair colouring consultation',
        },
        desc: {
          lt: 'Konsultacija prieš dažymą: plaukų būklės įvertinimas, spalvos krypties parinkimas ir rekomendacijos pagal plaukų ilgį bei storį.',
          en: 'Pre-colour consultation including hair condition assessment, colour direction planning and recommendations based on hair length and density.',
        },
        price: { amount: '5', from: false },
        duration: {
          lt: '30 min.',
          en: '30 min.',
        },
      },
      {
        id: 'express-styling',
        category: 'styling',
        name: {
          lt: 'Express bangavimas / šukuosena',
          en: 'Express styling / waves',
        },
        desc: {
          lt: 'Greitas bangavimas arba lengva šukuosena šventei, progai ar fotosesijai.',
          en: 'Quick waves or light occasion styling for events, celebrations or photoshoots.',
        },
        price: { amount: '25', from: true },
      },
      {
        id: 'braiding',
        category: 'styling',
        name: {
          lt: 'Plaukų pynimas su pluoštu',
          en: 'Braiding with fiber',
        },
        desc: {
          lt: 'Kūrybiški, ilgiau išliekantys pynimai naudojant pluoštą.',
          en: 'Creative, longer-lasting braids using hair fiber.',
        },
        price: { amount: '25', from: false },
      },
      {
        id: 'perm',
        category: 'styling',
        name: {
          lt: 'Cheminis sušukavimas',
          en: 'Perm (chemical styling)',
        },
        desc: {
          lt: 'Ilgalaikis garbanų ir apimties formavimas plaukams, kuriems norisi daugiau tekstūros.',
          en: 'Long-lasting curl and volume creation for hair that needs more texture.',
        },
        price: { amount: '40', from: false },
      },
      {
        id: 'damaged-hair-treatment',
        category: 'treatment',
        name: {
          lt: 'Procedūra pažeistiems plaukams',
          en: 'Treatment for damaged hair',
        },
        desc: {
          lt: 'Atstatomoji plaukų procedūra pažeistiems, išsausėjusiems ar nualintiems plaukams, siekiant suteikti daugiau glotnumo ir gyvybingumo.',
          en: 'Restorative hair treatment for damaged, dry or weakened hair to improve smoothness and vitality.',
        },
        price: { amount: '30', from: false },
        duration: {
          lt: '1 val.',
          en: '1 hr',
        },
      },
    ],
    [],
  );

  const pageTitle =
    lang === 'LT'
      ? 'Kirpimo, dažymo konsultacijos ir plaukų procedūros Kaune | Kirpėja Virginija'
      : 'Haircuts, colour consultations and hair treatments in Kaunas | Hairdresser Virginija';

  const pageDescription =
    lang === 'LT'
      ? 'Kirpėja Virginija Kaune teikia moterų, vyrų ir vaikų kirpimo paslaugas, plaukų dažymo konsultacijas, plaukų procedūras pažeistiems plaukams, barzdos modeliavimą, pynimus, šukuosenas ir cheminį sušukavimą. Registracija internetu per Treatwell.'
      : 'Hairdresser Virginija in Kaunas offers women’s, men’s and children’s haircuts, hair colouring consultations, damaged hair treatments, beard styling, braiding, occasion styling and perms. Online booking via Treatwell.';

  const keywords =
    lang === 'LT'
      ? 'kirpėja Kaune, kirpimas Kaune, moterų kirpimas Kaune, vyrų kirpimas Kaune, vaikų kirpimas Kaune, plaukų dažymo konsultacija Kaune, plaukų procedūros Kaune, pažeistų plaukų procedūra, barzdos modeliavimas Kaune'
      : 'hairdresser Kaunas, haircut Kaunas, women haircut Kaunas, men haircut Kaunas, children haircut Kaunas, hair colour consultation Kaunas, hair treatment Kaunas, damaged hair treatment, beard styling Kaunas';

  const formatPrice = (price) => {
    if (!price) return '';
    if (typeof price === 'string') return price;
    const prefix = price.from ? (lang === 'LT' ? 'nuo ' : 'from ') : '';
    return `${prefix}${price.amount} €`;
  };

  const structuredData = useMemo(() => {
    const selectedLang = lang === 'LT' ? 'lt' : 'en';

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name:
        lang === 'LT'
          ? 'Kirpimo ir plaukų priežiūros paslaugos Kaune'
          : 'Hair and grooming services in Kaunas',
      itemListElement: services.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: item.name[selectedLang],
          description: item.desc[selectedLang],
          serviceType: item.category,
          areaServed: {
            '@type': 'City',
            name: 'Kaunas',
          },
          provider: {
            '@type': 'HairSalon',
            name: 'Kirpėja Virginija',
            url: siteUrl,
            image: `${siteUrl}logo.png`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Pramonės pr. 15A',
              addressLocality: 'Kaunas',
              postalCode: '51327',
              addressCountry: 'LT',
            },
          },
          offers: {
            '@type': 'Offer',
            url: treatwellUrl,
            priceCurrency: 'EUR',
            price: item.price.amount,
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    };

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HairSalon',
      name: 'Kirpėja Virginija',
      url: siteUrl,
      image: `${siteUrl}logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pramonės pr. 15A',
        addressLocality: 'Kaunas',
        postalCode: '51327',
        addressCountry: 'LT',
      },
      areaServed: {
        '@type': 'City',
        name: 'Kaunas',
      },
      sameAs: [treatwellUrl],
      makesOffer: services.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name[selectedLang],
          description: item.desc[selectedLang],
        },
        priceCurrency: 'EUR',
        price: item.price.amount,
        url: treatwellUrl,
      })),
    };

    return {
      itemList: JSON.stringify(itemList),
      localBusiness: JSON.stringify(localBusiness),
    };
  }, [lang, services, siteUrl, treatwellUrl]);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('paslaugos');
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.6) {
        window.gtag?.('event', 'scroll_services', {
          event_category: 'scroll',
          event_label: 'Reached Services Section',
        });
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id='paslaugos'
      className='py-20 bg-white'
      aria-labelledby='services-heading'
    >
      <Helmet>
        <html lang={lang === 'LT' ? 'lt' : 'en'} />
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='keywords' content={keywords} />
        <meta name='robots' content='index,follow,max-image-preview:large' />
        <link rel='canonical' href={siteUrl} />

        <meta property='og:type' content='website' />
        <meta
          property='og:locale'
          content={lang === 'LT' ? 'lt_LT' : 'en_GB'}
        />
        <meta property='og:site_name' content='Kirpėja Virginija' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:image' content={`${siteUrl}logo.png`} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={`${siteUrl}logo.png`} />

        <script type='application/ld+json'>{structuredData.itemList}</script>
        <script type='application/ld+json'>
          {structuredData.localBusiness}
        </script>
      </Helmet>

      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2
          id='services-heading'
          className='text-3xl font-serif mb-10 text-[#3E3B38]'
        >
          {lang === 'LT'
            ? 'Kirpimo ir plaukų priežiūros paslaugos Kaune'
            : 'Hair and grooming services in Kaunas'}
        </h2>

        <p className='max-w-3xl mx-auto text-sm md:text-base text-[#6B6966] mb-10 leading-relaxed'>
          {lang === 'LT'
            ? 'Kirpėja Virginija Kaune teikia moterų, vyrų ir vaikų kirpimo paslaugas, plaukų dažymo konsultacijas bei plaukų procedūras pažeistiems plaukams. Taip pat atliekamas barzdos modeliavimas, plaukų pynimas, šukuosenos, bangavimas ir cheminis sušukavimas. Patogi vieta Kaune, lengvai pasiekiama iš Dainavos, Petrašiūnų, Šančių, Eigulių ir Žaliakalnio.'
            : 'Hairdresser Virginija in Kaunas offers women’s, men’s and children’s haircuts, hair colouring consultations and treatments for damaged hair. Beard styling, braiding, special occasion styling, waves and perms are also available in a convenient Kaunas location.'}
        </p>

        <div
          className='grid md:grid-cols-2 gap-6'
          aria-label={
            lang === 'LT'
              ? 'Kirpimo, dažymo konsultacijų ir plaukų procedūrų sąrašas'
              : 'List of haircut, colour consultation and hair treatment services'
          }
        >
          {services.map((item) => (
            <a
              key={item.id}
              href={treatwellUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${
                lang === 'LT' ? item.name.lt : item.name.en
              } – ${formatPrice(item.price)}. ${
                item.duration
                  ? `${lang === 'LT' ? 'Trukmė' : 'Duration'}: ${
                      lang === 'LT' ? item.duration.lt : item.duration.en
                    }. `
                  : ''
              }${lang === 'LT' ? 'Registruotis internetu' : 'Book online'}`}
              onClick={() => {
                window.gtag?.('event', 'service_click', {
                  event_category: 'engagement',
                  event_label: item.id,
                });

                window.gtag?.('event', 'outbound_treatwell', {
                  event_category: 'outbound',
                  event_label: item.id,
                });
              }}
              className='p-6 border border-[#e5e4e1] rounded-xl hover:shadow-md transition flex justify-between items-start bg-[#F8F7F4] hover:bg-[#f1efeb] text-left'
            >
              <div className='pr-4'>
                <h3 className='font-medium text-[#3E3B38] text-lg'>
                  {lang === 'LT' ? item.name.lt : item.name.en}
                </h3>

                <p className='text-sm text-[#6B6966] mt-1 leading-snug'>
                  {lang === 'LT' ? item.desc.lt : item.desc.en}
                </p>

                {item.duration && (
                  <p className='text-xs text-[#8A8783] mt-3'>
                    {lang === 'LT' ? 'Trukmė:' : 'Duration:'}{' '}
                    {lang === 'LT' ? item.duration.lt : item.duration.en}
                  </p>
                )}
              </div>

              <span className='font-semibold text-[#C1A173] text-lg whitespace-nowrap'>
                {formatPrice(item.price)}
              </span>
            </a>
          ))}
        </div>

        <Button
          as='a'
          href={treatwellUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-10 px-8 py-3'
          onClick={() => {
            window.gtag?.('event', 'booking_click', {
              event_category: 'engagement',
              event_label: 'services_cta',
            });
            window.gtag?.('event', 'outbound_treatwell', {
              event_category: 'outbound',
              event_label: 'services_cta',
            });
          }}
        >
          {lang === 'LT'
            ? 'Registruok vizitą internetu'
            : 'Book your visit online'}
        </Button>
      </div>
    </section>
  );
}
