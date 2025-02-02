import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import mq from '../utils/responsive';
import Header from '../components/Header';
import Main from '../components/Main';
import React from 'react';
import { pages } from '../utils/constants';
import { PageSection, PageSectionDetail } from '../utils/types';

export default function About(): React.ReactElement {
  const theme: Theme = useTheme();
  const { title, subtitle, sections } = pages.about;
  const { image, details } = sections[0];

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

  const renderAboutText = (section: PageSection): React.ReactElement[] => {
    const content = [];
    if (section.title) content.push(<h3 key={1}>{section.title}</h3>);
    if (section.description)
      // Split text string on returns and wrap in JSX
      content.push(
        section.description.split('\n').map((p, i) => <p key={i}>{p}</p>)
      );

    return content;
  };

  const renderAboutDetails = (details: PageSectionDetail[]) => {
    return details.map((detail, i) => {
      return (
        <li key={i} className={!detail.label && 'no-border'}>
          {detail.label && <label htmlFor={`${i}`}>{detail.label}</label>}
          <strong id={`${i}`}>{detail.value}</strong>
        </li>
      );
    });
  };

  return (
    <>
      <title>Ryan Chase / Portfolio - About</title>
      <Header title={title} subtitle={subtitle} />
      <Main>
        <Section>
          <AboutText>
            {Boolean(sections.length) && renderAboutText(sections[0])}
          </AboutText>
          <AboutAside>
            <AboutImage>
              <Image
                src={image.path}
                width={0}
                height={0}
                alt={image.alt}
                layout='responsive'
              />
            </AboutImage>
            {Boolean(details.length) && (
              <AboutDetails>{renderAboutDetails(details)}</AboutDetails>
            )}
          </AboutAside>
        </Section>
      </Main>
    </>
  );
}
