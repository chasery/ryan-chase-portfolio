import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';

export default function ButtonGroup(props) {
  const { single, alignment, children } = props;

  // Component styling
  const theme: any = useTheme();
  const ButtonGroup = styled.div(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: [
        '1fr',
        '1fr',
        '1fr',
        `${single && !alignment ? '1fr' : '1fr 1fr'}`,
      ],
      gridGap: `${single && !alignment ? '0' : '2rem'}`,
      justifyItems: ['center', 'center', 'center', `${alignment}`],
      marginTop: ['3.5rem', '3.75rem', '4rem'],
      padding: ['0 1rem', '0 2rem', '0'],
      transition: theme.transitions.out,

      '& > a': {
        minWidth: [
          'calc(75% - 2rem)',
          '50%',
          '50%',
          `${single && !alignment ? 'calc(40% - 4rem)' : 'calc(100% - 4rem)'}`,
        ],
        maxWidth: ['calc(75% - 2rem)', '50%', '50%', 'calc(100% - 4rem)'],
        transition: theme.transitions.out,
      },
    })
  );

  return <ButtonGroup>{children}</ButtonGroup>;
}
