import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const TREATWELL_BOOK_URL =
  'https://book.treatwell.lt/salonas/kirpeja-virginija/';
const TREATWELL_REVIEWS_URL =
  'https://www.treatwell.lt/salonas/kirpeja-virginija/';
const SITE_URL = 'https://kirpeja-virginija.lt/';

const RATING = 5.0;
const REVIEW_COUNT = 94;

const SUBRATINGS = [
  { key: 'atmosphere', value: 5 },
  { key: 'staff', value: 5 },
  { key: 'cleanliness', value: 5 },
];

const TESTIMONIALS = [
  {
    id: 'sigitas',
    rating: 5,
    quote: {
      lt: 'Labai įdėmi ir įsiklausanti specialistė.',
      en: 'Very attentive specialist who really listens.',
    },
    author: 'Sigitas',
    service: { lt: 'Vyriškas kirpimas', en: "Men's haircut" },
  },
  {
    id: 'jovita',
    rating: 5,
    quote: {
      lt: 'Puikiai atliko savo darbą, buvo malonu būti, išėjus iš kirpyklos jaučiausi laiminga.',
      en: 'She did a wonderful job, it was a pleasure being there — I left the salon feeling happy.',
    },
    author: 'Jovita',
    service: { lt: 'Plaukų procedūros', en: 'Hair treatment' },
  },
];

function Stars({ count = 5, size = 18, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < count
              ? 'fill-[#C1A173] text-[#C1A173]'
              : 'fill-transparent text-[#D9D3C8]'
          }
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  const { lang } = useLanguage();

  const trackEvent = (eventName, params = {}) => {
    window.gtag?.('event', eventName, {
      language: lang,
      page_path: window.location.pathname,
      page_location: window.location.href,
      ...params,
    });
  };

  const t = {
    LT: {
      eyebrow: 'Atsiliepimai',
      title: 'Klientų įvertinimai Treatwell',
      subtitle: `Įvertinta ${REVIEW_COUNT} klientų – atmosfera, personalas ir švara įvertinti maksimaliais 5 žvaigždučių balais.`,
      ratingLabel: `${RATING.toFixed(1).replace('.', ',')} iš 5`,
      reviewCountLabel: `${REVIEW_COUNT} atsiliepimai`,
      readAll: 'Skaityti visus atsiliepimus Treatwell',
      readAllAria: 'Skaityti visus atsiliepimus svetainėje Treatwell',
      book: 'Registruokis internetu',
      bookAria: 'Registruotis vizitui internetu per Treatwell',
      subratings: {
        atmosphere: 'Atmosfera',
        staff: 'Personalas',
        cleanliness: 'Švara',
      },
      verified: 'Patvirtintas atsiliepimas',
      sectionAria: 'Klientų atsiliepimų skiltis',
    },
    EN: {
      eyebrow: 'Reviews',
      title: 'Client ratings on Treatwell',
      subtitle: `Rated by ${REVIEW_COUNT} clients – atmosphere, staff and cleanliness all scored a perfect 5 out of 5.`,
      ratingLabel: `${RATING.toFixed(1)} out of 5`,
      reviewCountLabel: `${REVIEW_COUNT} reviews`,
      readAll: 'Read all reviews on Treatwell',
      readAllAria: 'Read all reviews on the Treatwell website',
      book: 'Book online',
      bookAria: 'Book an appointment online via Treatwell',
      subratings: {
        atmosphere: 'Atmosphere',
        staff: 'Staff',
        cleanliness: 'Cleanliness',
      },
      verified: 'Verified review',
      sectionAria: 'Client reviews section',
    },
  };

  const selectedLang = lang === 'LT' ? 'lt' : 'en';

  const reviewSchema = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HairSalon',
        name: 'Kirpėja Virginija',
        url: SITE_URL,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: RATING,
          reviewCount: REVIEW_COUNT,
          bestRating: 5,
          worstRating: 1,
        },
        review: TESTIMONIALS.map((r) => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
            bestRating: 5,
          },
          author: { '@type': 'Person', name: r.author },
          reviewBody: r.quote[selectedLang],
        })),
      }),
    [selectedLang],
  );

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('atsiliepimai');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.6) {
        window.gtag?.('event', 'scroll_reviews', {
          event_category: 'scroll',
          event_label: 'Reached Reviews Section',
        });
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id='atsiliepimai'
      className='py-20 bg-white'
      aria-labelledby='reviews-heading'
      aria-label={t[lang].sectionAria}
    >
      <Helmet>
        <script type='application/ld+json'>{reviewSchema}</script>
      </Helmet>

      <div className='max-w-5xl mx-auto px-6 text-center'>
        <p className='text-[#C1A173] text-sm uppercase tracking-[0.2em] mb-3'>
          {t[lang].eyebrow}
        </p>

        <h2
          id='reviews-heading'
          className='text-3xl font-serif mb-4 text-[#3E3B38]'
        >
          {t[lang].title}
        </h2>

        <div className='flex flex-col items-center gap-2 mb-3'>
          <span className='text-5xl font-serif text-[#3E3B38]'>
            {t[lang].ratingLabel}
          </span>
          <Stars count={5} size={24} />
          <span className='text-sm text-[#6B6966]'>
            {t[lang].reviewCountLabel}
          </span>
        </div>

        <p className='max-w-2xl mx-auto text-sm md:text-base text-[#6B6966] mb-10 leading-relaxed'>
          {t[lang].subtitle}
        </p>

        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12'>
          {SUBRATINGS.map((s) => (
            <div key={s.key} className='flex flex-col items-center gap-1'>
              <span className='text-sm text-[#3E3B38] font-medium'>
                {t[lang].subratings[s.key]}
              </span>
              <Stars count={s.value} size={16} />
            </div>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-6 text-left mb-12'>
          {TESTIMONIALS.map((r) => (
            <div
              key={r.id}
              className='p-6 border border-[#e5e4e1] rounded-xl bg-[#F8F7F4]'
            >
              <Stars count={r.rating} size={16} className='mb-3' />
              <p className='text-[#3E3B38] leading-relaxed mb-4'>
                “{r.quote[selectedLang]}”
              </p>
              <div className='flex items-center justify-between text-sm text-[#6B6966]'>
                <span className='font-medium text-[#3E3B38]'>{r.author}</span>
                <span>{r.service[selectedLang]}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href={TREATWELL_REVIEWS_URL}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t[lang].readAllAria}
            onClick={() =>
              trackEvent('reviews_link_click', {
                link_location: 'reviews',
                destination: 'treatwell_reviews',
              })
            }
            className='text-sm font-medium text-[#3E3B38] underline hover:text-[#8A744F] transition'
          >
            {t[lang].readAll}
          </a>

          <Button
            as='a'
            href={TREATWELL_BOOK_URL}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t[lang].bookAria}
            className='px-8 py-3'
            onClick={() =>
              trackEvent('booking_click', {
                link_location: 'reviews',
                destination: 'treatwell',
                event_label: 'reviews_cta',
              })
            }
          >
            {t[lang].book}
          </Button>
        </div>
      </div>
    </section>
  );
}
