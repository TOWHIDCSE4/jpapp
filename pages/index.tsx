import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { KanaType, KanaCategory } from '@/types/kana';
import { useLanguage } from '@/stores/app-store';
import { KANA_BY_CATEGORY } from '@/constants/kana';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import KanaGrid from '@/components/learning/KanaGrid';
const HomePage: React.FC = () => {
  const router = useRouter();
  const language = useLanguage();
  const practiceOptions = [
    {
      id: 'recognition',
      title: { en: 'Recognition Practice', zh: 'dd' },
      description: { en: 'See romaji and choose kana', zh: 'dd' },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      color: 'bg-japanese-katakana',
      href: '/practice/recognition'
    },
    {
      id: 'dictation',
      title: { en: 'Listening Practice', zh: 'dd' },
      description: { en: 'Listen and write down kana characters', zh: 'ddd' },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      ),
      color: 'bg-japanese-hiragana',
      href: '/practice/dictation'
    },
    {
      id: 'typing',
      title: { en: 'Typing Practice', zh: 'ddd' },
      description: { en: 'Type romaji for kana characters', zh: '为假名字符输入罗马音' },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/>
        </svg>
      ),
      color: 'bg-japanese-romaji',
      href: '/practice/typing'
    }
  ];
  return (
    <Layout>
      <Head>
        <title>Learn Japanese</title>
        <meta name="description" content="Learn Japanese Hiragana and Katakana with fun and interactive exercises" />
      </Head>
      <Container className="py-8">
        {}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">
            {language === 'zh' ? 'ddd' : 'Learn Hiragana & Katakana the Easy Way'}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            {language === 'zh'
              ? 'dddd'
              : 'Practice Japanese kana interactively and build a strong foundation for your language skills'
            }
          </p>


        </div>
        {}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            {language === 'zh' ? 'ddd' : 'Choose Practice Mode'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceOptions.map((option) => (
              <Card
                key={option.id}
                hover
                clickable
                onClick={() => router.push(option.href)}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${option.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {option.title[language]}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {option.description[language]}
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  {language === 'zh' ? 'ddd' : 'Start Practice'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
        {}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            {language === 'zh' ? 'dd' : 'Kana Overview'}
          </h2>
          <div className="space-y-8">
            {}
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-fit">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-japanese-hiragana text-white mr-3">
                      {language === 'zh' ? 'ddd' : 'Practice'}
                    </span>
                  </h3>
                  <KanaGrid
                    kanaList={KANA_BY_CATEGORY[KanaCategory.SEION]}
                    displayType={KanaType.HIRAGANA}
                    showRomaji
                    showBoth
                    playAudio
                    useTraditionalLayout
                    category={KanaCategory.SEION}
                  />
                </div>
              </div>
            </div>
            {}
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-fit">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-japanese-katakana text-white mr-3">
                      {language === 'zh' ? 'dd' : 'Practice'}
                    </span>
                  </h3>
                  <KanaGrid
                    kanaList={KANA_BY_CATEGORY[KanaCategory.DAKUON]}
                    displayType={KanaType.HIRAGANA}
                    showRomaji
                    showBoth
                    playAudio
                    useTraditionalLayout
                    category={KanaCategory.DAKUON}
                  />
                </div>
              </div>
            </div>
            {}
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-fit">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-japanese-romaji text-white mr-3">
                      {language === 'zh' ? 'dd' : 'Practice'}
                    </span>
                  </h3>
                  <KanaGrid
                    kanaList={KANA_BY_CATEGORY[KanaCategory.HANDAKUON]}
                    displayType={KanaType.HIRAGANA}
                    showRomaji
                    showBoth
                    playAudio
                    useTraditionalLayout
                    category={KanaCategory.HANDAKUON}
                  />
                </div>
              </div>
            </div>
            {}
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-fit">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-japanese-accent text-white mr-3">
                      {language === 'zh' ? 'dd' : 'Practice'}
                    </span>
                  </h3>
                  <KanaGrid
                    kanaList={KANA_BY_CATEGORY[KanaCategory.YOON]}
                    displayType={KanaType.HIRAGANA}
                    showRomaji
                    showBoth
                    playAudio
                    useTraditionalLayout
                    category={KanaCategory.YOON}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default HomePage;
