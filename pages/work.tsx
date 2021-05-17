import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function Work() {
  const data = [
    {
      title: 'Retrio',
      text: `It’s that goal of finding the perfect solution for his end users’,
      that motivates Ryan. Staying in tune with the latest software
      trends, he actively searches for ways to employ modern approaches to
      his user centric solutions. Ryan is very passionate about usability
      and you shouldn’t be surprised if you hear him exclaiming “That’s a
      bad user experience!”`,
      projectUrls: {
        github: 'https://github.com/chasery/retrio',
        live: 'https://retrio-chasery.vercel.app/',
      },
      skills: [
        {
          icon: {
            path: '/icons/react-js.svg',
            alt: '',
            width: '35px',
            height: '32px',
          },
          name: 'ReactJS',
        },
        {
          icon: {
            path: '/icons/node-js.svg',
            alt: '',
            width: '28px',
            height: '32px',
          },
          name: 'NodeJS',
        },
        {
          icon: {
            path: '/icons/javascript.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'JavaScript',
        },
        {
          icon: {
            path: '/icons/postgresql.svg',
            alt: '',
            width: '30px',
            height: '32px',
          },
          name: 'PostgreSQL',
        },
        {
          icon: {
            path: '/icons/testing.svg',
            alt: '',
            width: '28px',
            height: '32px',
          },
          name: 'Testing',
        },
        {
          icon: {
            path: '/icons/git.svg',
            alt: '',
            width: '32px',
            height: '32px',
          },
          name: 'Git',
        },
      ],
    },
    {
      title: 'Ryan Chase Portfolio',
      text: `It’s that goal of finding the perfect solution for his end users’,
      that motivates Ryan. Staying in tune with the latest software
      trends, he actively searches for ways to employ modern approaches to
      his user centric solutions. Ryan is very passionate about usability
      and you shouldn’t be surprised if you hear him exclaiming “That’s a
      bad user experience!”`,
      projectUrls: {
        github: 'https://github.com/chasery/ryan-chase-portfolio',
      },
      skills: [
        {
          icon: {
            path: '/icons/react-js.svg',
            alt: '',
            width: '35px',
            height: '32px',
          },
          name: 'ReactJS',
        },
        {
          icon: {
            path: '/icons/javascript.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'JavaScript',
        },
        {
          icon: {
            path: '/icons/html-5.svg',
            alt: '',
            width: '25px',
            height: '28px',
          },
          name: 'HTML5',
        },
        {
          icon: {
            path: '/icons/css-3.svg',
            alt: '',
            width: '25px',
            height: '28px',
          },
          name: 'CSS3',
        },
        {
          icon: {
            path: '/icons/emotion.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'Emotion',
        },
        {
          icon: {
            path: '/icons/typescript.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'Typescript',
        },
      ],
    },
    {
      title: 'Racking Up',
      text: `It’s that goal of finding the perfect solution for his end users’,
      that motivates Ryan. Staying in tune with the latest software
      trends, he actively searches for ways to employ modern approaches to
      his user centric solutions. Ryan is very passionate about usability
      and you shouldn’t be surprised if you hear him exclaiming “That’s a
      bad user experience!”`,
      projectUrls: {
        github: 'https://github.com/chasery/racking-up',
        live: 'https://racking-up-chasery.vercel.app/',
      },
      skills: [
        {
          icon: {
            path: '/icons/react-js.svg',
            alt: '',
            width: '35px',
            height: '32px',
          },
          name: 'ReactJS',
        },
        {
          icon: {
            path: '/icons/node-js.svg',
            alt: '',
            width: '28px',
            height: '32px',
          },
          name: 'NodeJS',
        },
        {
          icon: {
            path: '/icons/javascript.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'JavaScript',
        },
        {
          icon: {
            path: '/icons/postgresql.svg',
            alt: '',
            width: '30px',
            height: '32px',
          },
          name: 'PostgreSQL',
        },
        {
          icon: {
            path: '/icons/testing.svg',
            alt: '',
            width: '28px',
            height: '32px',
          },
          name: 'Testing',
        },
        {
          icon: {
            path: '/icons/git.svg',
            alt: '',
            width: '32px',
            height: '32px',
          },
          name: 'Git',
        },
      ],
    },
  ];

  const renderContent = (data) => {
    return data.map((section, i) => {
      const skills = section.skills.map((skill, j) => (
        <li key={j}>
          <Icon
            name={skill.name}
            path={skill.icon.path}
            alt={skill.icon.alt}
            width={skill.icon.width}
            height={skill.icon.height}
          />
        </li>
      ));
      const projectUrls = Object.keys(section.projectUrls).map((key, k) => {
        if (key === 'github')
          return (
            <Button
              key={k}
              url='/ryan-chase-resume.pdf'
              text='View on GitHub'
            />
          );

        if (key === 'live')
          return (
            <Button key={k} url='/ryan-chase-resume.pdf' text='View App' />
          );

        return;
      });

      return (
        <Section key={i}>
          <ImageWrapper>
            <Image
              src='/images/porsche.jpg'
              alt='Some sort of text'
              layout='fill'
              objectFit='cover'
            />
          </ImageWrapper>
          <div>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            <IconGrid maxColumns={2}>{skills}</IconGrid>
            {projectUrls.length === 1 ? (
              <ButtonWrapper className='singleButton'>
                <div className='filler'></div>
                {projectUrls}
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>{projectUrls}</ButtonWrapper>
            )}
          </div>
        </Section>
      );
    });
  };

  // Page styles
  const theme: any = useTheme();
  const Section = styled.section(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: ['100%', '100%', '100%', '33.333% 66.666%'],
      gridTemplateRows: ['12rem auto', '12rem auto', '12rem auto', 'auto'],
      transition: theme.transitions.out,

      '& h3': {
        marginTop: ['1.5rem', '1.75rem', '2rem', '0'],
        transition: theme.transitions.out,
      },
    })
  );
  const ImageWrapper = styled.div(() =>
    mq({
      position: 'relative',
      width: ['100%', 'calc(100% - 4rem)', '100%', 'calc(100% - 2rem)'],
      height: ['12rem', '12rem', '12rem', 'auto'],
      margin: ['0', '0 2rem', '0'],
      overflow: 'hidden',
      transition: theme.transitions.out,

      '& > *': {
        position: 'absolute',
      },
    })
  );
  const ButtonWrapper = styled.div(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
      gridGap: '2rem',
      justifyItems: 'center',
      marginTop: ['3.5rem', '3.75rem', '4rem'],
      padding: ['0 1rem', '0 2rem', '0'],
      transition: theme.transitions.out,

      '&.singleButton': {
        gridGap: ['0', '0', '0', '2rem'],
        transition: theme.transitions.out,
      },

      '& > a': {
        minWidth: ['50%', '50%', '50%', 'calc(100% - 4rem)'],
        maxWidth: ['50%', '50%', '50%', 'calc(100% - 4rem)'],
        transition: theme.transitions.out,
      },
    })
  );

  return (
    <>
      <Header subHeading={`What I Can Do For You`} />
      <Main>{data && renderContent(data)}</Main>
    </>
  );
}
