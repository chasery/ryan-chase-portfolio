import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';

export default function About() {
  const data = {
    title: 'Hey there!',
    text: `I am Ryan and I love tackling problems from conceptualization to implementation. My desire to build started at a young age with countless hours of piecing together anything from Lego cities to model cars. Every aspect challenged me to plan, analyze, and overcome the obstacles that arise when ever you are creating. Since my young city planning days, I have grown into a career of problem solving with a splash of creativity and life long learning.
    Currently, I am working full time as a Sr. UX Designer while moonlighting in Thinkful's Software Engineering program. My current path has me leading a team by driving an empathic approach to software development while cultivating the skills necessary to be able to construct my ideas. With a background in both design and development, I am able to foster a collaborative environment between the two camps. My life time of experience in creativity and problem solving allows me to bring a versatile set of tools to your team.
    My specialties are HTML, CSS, JavaScript, ReactJS, Node.JS, PostgreSQL, Deployment, Version Control, Story Boarding, User Flows, Prototyping, and Usability Testing.`,
    image: {
      path: '/images/ryan-chase@2x.jpg',
      alt: '',
    },
    details: [
      {
        label: 'Status',
        value: 'Available',
      },
      {
        label: 'Location',
        value: 'Portland, OR',
      },
      {
        label: 'Tech Exp.',
        value: '10yrs+',
      },
      {
        label: 'Pref. Role',
        value: 'Front-End Dev',
      },
      {
        label: 'Interests',
        value: 'ReactJs',
      },
      {
        value: 'Components',
      },
      {
        value: 'CSS-in-JS',
      },
    ],
  };

  // Page styles
  const theme: any = useTheme();
  const Section = styled.section(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: ['100%', '100%', '100%', '66.666% 33.333%'],
      gridTemplateRows: ['auto, auto'],
      transition: theme.transitions.out,

      '& h3': {
        marginTop: ['1.5rem', '1.75rem', '2rem', '0'],
        transition: theme.transitions.out,
      },
    })
  );
  const AboutText = styled.div(() =>
    mq({
      marginRight: ['0', '0', '0', '4rem'],
    })
  );
  const AboutAside = styled.aside(() =>
    mq({
      display: 'flex',
      flexDirection: ['column', 'row', 'row', 'column'],
      alignItems: ['center', 'flex-start'],
      marginTop: ['3.5rem', '3.75rem', '4rem', '0'],
      transition: theme.transitions.out,
    })
  );
  const AboutImage = styled.div(() =>
    mq({
      flexGrow: '0',
      width: ['66%', '33.333%', '33.333%', '100%'],
      margin: ['0 1rem', '0 2rem', '0'],
      overflow: 'hidden',
      transition: theme.transitions.out,

      '& > *': {
        borderRadius: '50%',
      },
    })
  );
  const AboutDetails = styled.ul(() =>
    mq({
      flexGrow: '1',
      width: ['100%', '66.666%', '66.666%', '100%'],
      margin: ['3.5rem 0 0', '0 0 0 4rem', '0 0 0 4rem', '4rem 0 0 0'],
      padding: '0',
      listStyle: 'none',
      textTransform: 'uppercase',
      transition: theme.transitions.out,

      '& > li': {
        display: 'flex',
        alignItems: 'center',
        height: '3rem',
        padding: ['0 1rem', '0 2rem', '0'],
        letterSpacing: ['0.25rem', '0.125rem', '0.125rem', '0.25rem'],
        fontSize: '1rem',
        transition: theme.transitions.out,

        '&.no-border': {
          borderTop: 'none',
        },
        '& + li': {
          borderTop: `solid 0.125rem ${theme.colors.mischka}`,
        },
      },

      '& > li > strong': {
        flexGrow: '1',
        fontWeight: '500',
        textAlign: 'right',
      },
    })
  );

  const renderAboutText = (data) => {
    const content = [];
    if (data.title) content.push(<h3 key={1}>{data.title}</h3>);
    if (data.text)
      // Split text string on returns and wrap in JSX
      content.push(data.text.split('\n').map((p, i) => <p key={i}>{p}</p>));

    return content;
  };

  const renderAboutDetails = (details) => {
    return details.map((detail, i) => {
      return (
        <li key={i} className={!detail.label ? 'no-border' : null}>
          {detail.label ? <label htmlFor={i}>{detail.label}</label> : null}
          <strong id={detail.label ? i : null}>{detail.value}</strong>
        </li>
      );
    });
  };

  return (
    <>
      <Header subHeading='Learn A Little About Me' />
      <Main>
        <Section>
          <AboutText>{data && renderAboutText(data)}</AboutText>
          <AboutAside>
            <AboutImage>
              <Image
                src={data.image.path}
                alt={data.image.alt}
                layout='responsive'
                width='100%'
                height='100%'
              />
            </AboutImage>
            {data.details && (
              <AboutDetails>{renderAboutDetails(data.details)}</AboutDetails>
            )}
          </AboutAside>
        </Section>
      </Main>
    </>
  );
}
