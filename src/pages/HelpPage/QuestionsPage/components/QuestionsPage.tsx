import Accordion from '@/components/Informers/Accordion';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface QuestionInterface {
  title: string;
  body: string;
}

const Questions: QuestionInterface[] = [
  {
    title: 'Откуда TRONK берет информацию?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
  {
    title: 'Сколько по времени формируется отчет в AVinfoBot?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
  {
    title: 'В чем преимущества TRONK?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
  {
    title: 'Как часто обновляется информация об авто?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
  {
    title: 'Что входит в полный отчет AVinfoBot и как его анализировать?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
  {
    title: 'Можно ли получить отчет по ТС снятому с учета?',
    body: 'Сервис собирает информацию из 50-и самых популярных площадок по продаже подержанных ТС, например: Авито, Auto.ru и др.',
  },
];

const QuestionsPage = () => {
  return (
    <ScrollViewPage spaceVertical="sm">
      <Grid space="sm" style={{ marginBottom: 50 }}>
        {Questions.map((que, index) => (
          <Accordion key={index} title={que.title}>
            <Typography variant="footnote">{que.body}</Typography>
          </Accordion>
        ))}
      </Grid>
    </ScrollViewPage>
  );
};

export default QuestionsPage;
