import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { work } from '../data';
import Image from 'next/image';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import ButtonGroup from 'components/ButtonGroup';
import Button from '../components/Button';

export const getStaticProps = async () => {
  return {
    props: {
      data: work,
    },
  };
};

export default function Work({ data }) {
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
      width: ['100%', 'calc(100% - 4rem)', '100%', 'calc(100% - 4rem)'],
      height: ['12rem', '12rem', '12rem', 'auto'],
      margin: ['0', '0 2rem', '0', '0 4rem 0 0'],
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
      <Main>{work && renderContent(work)}</Main>
    </>
  );
}
