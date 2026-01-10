import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../../utils/responsive';
import Icon, { IconProps } from './Icon';

export interface IconGridProps {
  icons: IconProps[];
  maxColumns: number;
}

export default function IconGrid({
  icons = [],
  maxColumns,
}: IconGridProps): React.ReactElement<IconGridProps> {
  const theme: Theme = useTheme();

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

        '&:nth-of-type(even)': {
          // No border-right on evens until largest breakpoint
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
        '&:nth-of-type(3n)': {
          // Adds border to every third element in ipad and small desktop views
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
        '&:nth-of-type(5)': {
          // Here to create desired border on 5th element for two column layout
          borderBottom:
            maxColumns === 2
              ? [`solid 0.125rem ${theme.colors.mischka}`, 'none']
              : null,
        },
        '&:nth-of-type(6)': {
          // Need to check if this can be refactored out
          borderRight: ['inherit', `inherit`, `inherit`, 'inherit'],
        },
        '&:nth-of-type(7), &:nth-of-type(8)': {
          // Handles some of the responsive issues as we scale down
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

  return (
    <IconGrid>
      {Boolean(icons.length) &&
        icons.map(
          (skill: IconProps, j): React.ReactElement => (
            <li key={j}>
              <Icon
                label={skill.label}
                path={skill.path}
                width={skill.width}
                height={skill.height}
                alt={skill.alt}
              />
            </li>
          )
        )}
    </IconGrid>
  );
}
