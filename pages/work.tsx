import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import ButtonGroup from 'components/ButtonGroup';
import Button from '../components/Button';

export default function Work() {
  const data = [
    {
      title: 'Retrio',
      text: `With Agile teams making an in-office to work-from-home shift, Retrio makes this transition easier by creating an online communal space to collaborate on what went well, what didn't go well, things to try, and shout outs, during your sprint.`,
      projectUrls: {
        github: 'https://github.com/chasery/retrio',
        live: 'https://retrio-chasery.vercel.app/',
      },
      image: {
        path: '/images/retrio.jpg',
        alt: '',
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
      text: `Inspired by his dabblings in ReactJs, among many other technologies in Thinkful's code school, Ryan has set out on an adventure to rebrand his personal portfolio. With an emphasis on responsive and mobile first development, Ryan has created a portfolio that demonstrates simplicity and elegance in both design and development.`,
      projectUrls: {
        github: 'https://github.com/chasery/ryan-chase-portfolio',
      },
      image: {
        path: '/images/ryan-chase-portfolio.jpg',
        alt: '',
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
      text: `Racking Up helps you organize your upcoming wardrobe purchases with a custom rack system. With a little help from the app, you can curate lists of those clothing items you fancy from any online retailer.`,
      projectUrls: {
        github: 'https://github.com/chasery/racking-up',
        live: 'https://racking-up-chasery.vercel.app/',
      },
      image: {
        path: '/images/racking-up.jpg',
        alt: '',
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
  const ProjectImage = styled.div(() =>
    mq({
      position: 'relative',
      width: ['100%', 'calc(100% - 4rem)', '100%', 'calc(100% - 2rem)'],
      height: ['12rem', '12rem', '12rem', 'auto'],
      margin: ['0', '0 2rem', '0', '0 2rem 0 0'],
      overflow: 'hidden',
      transition: theme.transitions.out,

      '& > *': {
        position: 'absolute',
      },
    })
  );

  const renderContent = (data) => {
    return data.map((section, i) => {
      // Handle project skills
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

      // Handle project URLs
      const projectUrls = [];
      for (const [key, value] of Object.entries(section.projectUrls)) {
        if (key === 'github')
          projectUrls.push(
            <Button key={key} url={value} text='View on GitHub' />
          );

        if (key === 'live')
          projectUrls.push(<Button key={key} url={value} text='View App' />);
      }

      return (
        <Section key={i}>
          <ProjectImage>
            <Image
              src={section.image.path}
              alt={section.image.alt}
              layout='fill'
              objectFit='cover'
            />
          </ProjectImage>
          <div>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            <IconGrid maxColumns={2}>{skills}</IconGrid>
            {projectUrls.length === 1 ? (
              <ButtonGroup single={true} alignment='end'>
                <div className='Filler'></div>
                {projectUrls}
              </ButtonGroup>
            ) : (
              <ButtonGroup single={false}>{projectUrls}</ButtonGroup>
            )}
          </div>
        </Section>
      );
    });
  };

  return (
    <>
      <Header subHeading={`What I Have Been Doing`} />
      <Main>{data && renderContent(data)}</Main>
    </>
  );
}
