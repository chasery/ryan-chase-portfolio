import styled from '@emotion/styled';
import mq from '../services/responsive';
import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function Skills() {
  const data = [
    {
      title: 'Development',
      text: `It’s that goal of finding the perfect solution for his end users’,
      that motivates Ryan. Staying in tune with the latest software
      trends, he actively searches for ways to employ modern approaches to
      his user centric solutions. Ryan is very passionate about usability
      and you shouldn’t be surprised if you hear him exclaiming “That’s a
      bad user experience!”`,
      skills: [
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
            path: '/icons/typescript.svg',
            alt: '',
            width: '28px',
            height: '28px',
          },
          name: 'Typescript',
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
            path: '/icons/git.svg',
            alt: '',
            width: '32px',
            height: '32px',
          },
          name: 'Git',
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
      ],
    },
    {
      title: 'UX Design',
      text: `It’s that goal of finding the perfect solution for his end users’,
      that motivates Ryan. Staying in tune with the latest software
      trends, he actively searches for ways to employ modern approaches to
      his user centric solutions. Ryan is very passionate about usability
      and you shouldn’t be surprised if you hear him exclaiming “That’s a
      bad user experience!”`,
      skills: [
        {
          icon: {
            path: '/icons/storyboarding.svg',
            alt: '',
            width: '22px',
            height: '28px',
          },
          name: 'Storyboarding',
        },
        {
          icon: {
            path: '/icons/journey-mapping.svg',
            alt: '',
            width: '20px',
            height: '28px',
          },
          name: 'Journey Mapping',
        },
        {
          icon: {
            path: '/icons/personas.svg',
            alt: '',
            width: '33px',
            height: '22px',
          },
          name: 'Personas',
        },
        {
          icon: {
            path: '/icons/user-flows.svg',
            alt: '',
            width: '32px',
            height: '26px',
          },
          name: 'User Flows',
        },
        {
          icon: {
            path: '/icons/wireframing.svg',
            alt: '',
            width: '34px',
            height: '28px',
          },
          name: 'Wireframing',
        },
        {
          icon: {
            path: '/icons/rapid-prototyping.svg',
            alt: '',
            width: '32px',
            height: '22px',
          },
          name: 'Rapid Prototyping',
        },
        {
          icon: {
            path: '/icons/design-systems.svg',
            alt: '',
            width: '36px',
            height: '18px',
          },
          name: 'Design Systems',
        },
        {
          icon: {
            path: '/icons/style-guides.svg',
            alt: '',
            width: '30px',
            height: '30px',
          },
          name: 'Style Guides',
        },
        {
          icon: {
            path: '/icons/user-testing.svg',
            alt: '',
            width: '26px',
            height: '26px',
          },
          name: 'User Testing',
        },
      ],
    },
  ];
  const renderContent = (data) => {
    const ButtonWrapper = styled.div(() =>
      mq({
        display: 'flex',
        justifyContent: 'center',
        marginTop: ['3.5rem', '3.75rem', '4rem'],
        padding: ['0 1rem', '0 2rem', '0'],

        '& > a': {
          minWidth: [
            'calc(50% - 2rem)',
            'calc(50% - 2rem)',
            'calc(33.333% - 2rem)',
          ],
          flexGrow: '0',
        },
      })
    );
    return data.map((section) => {
      const skills = section.skills.map((skill) => (
        <li>
          <Icon
            name={skill.name}
            path={skill.icon.path}
            alt={skill.icon.alt}
            width={skill.icon.width}
            height={skill.icon.height}
          />
        </li>
      ));

      return (
        <section>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
          <IconGrid>{skills}</IconGrid>
          <ButtonWrapper>
            <Button url='/ryan-chase-resume.pdf' text='Download Resume' />
          </ButtonWrapper>
        </section>
      );
    });
  };
  return (
    <>
      <Header subHeading={`What I Can Do For You`} />
      <Main>{data && renderContent(data)}</Main>
    </>
  );
}
