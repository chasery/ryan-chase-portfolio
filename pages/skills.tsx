import Header from '../components/Header';
import Main from '../components/Main';
import IconGrid from '../components/IconGrid/IconGrid';
import ButtonGroup from 'components/Button/ButtonGroup';
import Button from '../components/Button/Button';
import { pages } from '../utils/constants';
import { PageSection } from '../utils/types';

export default function Skills(): React.ReactElement {
  const { title, subtitle, sections } = pages.skills;

  const renderContent = (sections: PageSection[]) => {
    return sections.map((section: PageSection, i) => (
      <section key={i}>
        <h3>{section.title}</h3>
        <p>{section.description}</p>
        <IconGrid icons={section.skills} maxColumns={3} />
        <ButtonGroup single={true}>
          <Button path='/pdf/ryan-chase-resume.pdf' text='Download Resume' />
        </ButtonGroup>
      </section>
    ));
  };

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <Main>{Boolean(sections.length) && renderContent(sections)}</Main>
    </>
  );
}
