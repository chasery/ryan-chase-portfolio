import { skills } from '../data';
import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid';
import Icon from '../components/Icon';
import ButtonGroup from 'components/ButtonGroup';
import Button from '../components/Button';

export const getStaticProps = async () => {
  return {
    props: {
      data: skills,
    },
  };
};

export default function Skills({ data }) {
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

      return (
        <section key={i}>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
          <IconGrid maxColumns={3}>{skills}</IconGrid>
          <ButtonGroup single={true}>
            <Button url='/pdf/ryan-chase-resume.pdf' text='Download Resume' />
          </ButtonGroup>
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
