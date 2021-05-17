import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';

export default function IconGrid(props) {
  const { children, maxColumns } = props;

  // Component styling
  const theme: any = useTheme();
  const IconGrid = styled.ul(() =>
    mq({
      display: 'grid',
      gridTemplateColumns:
        maxColumns === 3
          ? ['100%', '50% 50%', '50% 50%', '33.333% 33.333% 33.333%']
          : ['100%', '50% 50%', '50% 50%'],
      marginTop: ['3.5rem', '3.75rem', '4rem'],
      marginBottom: '0',
      padding: ['0', '0 2rem', '0'],
      listStyle: 'none',
      transition: theme.transitions.out,

      '& > li': {
        borderBottom: `solid 0.125rem ${theme.colors.mischka}`,
        borderRight: ['none', `solid 0.125rem ${theme.colors.mischka}`],

        '&:nth-child(even)': {
          borderRight:
            maxColumns === 3
              ? [
                  'none',
                  'none',
                  'none',
                  `solid 0.125rem ${theme.colors.mischka}`,
                ]
              : 'none',
        },
        '&:nth-child(3n)': {
          borderRight:
            maxColumns === 3
              ? [
                  'none',
                  `solid 0.125rem ${theme.colors.mischka}`,
                  `solid 0.125rem ${theme.colors.mischka}`,
                  'none',
                ]
              : null,
        },
        '&:nth-child(5)': {
          borderBottom:
            maxColumns === 2
              ? [`solid 0.125rem ${theme.colors.mischka}`, 'none']
              : null,
        },
        '&:nth-child(6)': {
          borderRight: ['inherit', `inherit`, `inherit`, 'inherit'],
        },
        '&:nth-child(7), &:nth-child(8)': {
          borderBottom: [
            `solid 0.125rem ${theme.colors.mischka}`,
            `solid 0.125rem ${theme.colors.mischka}`,
            `solid 0.125rem ${theme.colors.mischka}`,
            'none',
          ],
        },
        '&:last-child': {
          borderBottom: 'none',
          borderRight: 'none',
        },
      },
    })
  );

  return <IconGrid>{children}</IconGrid>;
}
