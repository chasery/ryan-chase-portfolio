import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { about } from '../data';
import Image from 'next/image';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';

export const getStaticProps = async () => {
  return {
    props: {
      data: about,
    },
  };
};

export default function About({ data }) {
  // Page styles
  const theme: any = useTheme();
  const Section = styled.section(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: ['100%', '100%', '100%', '66.666% 33.333%'],
      gridTemplateRows: ['auto, auto'],
      marginBottom: ['1rem !important', 'inherit'],
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
      transition: theme.transitions.out,
    })
  );
  const AboutAside = styled.aside(() =>
    mq({
      display: 'flex',
      flexDirection: ['column', 'row', 'row', 'column'],
      alignItems: ['center', 'flex-start'],
      marginTop: ['4rem', '5rem', '6rem', '0'],
      transition: theme.transitions.out,
    })
  );
  const AboutImage = styled.div(() =>
    mq({
      flexGrow: '0',
      width: ['66%', '33.333%', '33.333%', '100%'],
      margin: ['0 1rem', '0 0 0 2rem', '0'],
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
      margin: ['3.5rem 0 0', '0 2rem 0 3.75rem', '0 0 0 4rem', '4rem 0 0 0'],
      padding: '0',
      listStyle: 'none',
      textTransform: 'uppercase',
      transition: theme.transitions.out,

      '& > li': {
        display: 'flex',
        alignItems: 'center',
        height: '4rem',
        padding: ['0 1rem', '0'],
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
