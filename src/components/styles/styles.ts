import { background } from 'react-pie-menu';
import { css } from 'styled-components';

export const trolls = [
  {
    title: "resume",
    color: '#EE0000',// "#C5140A",
  },
  {
    title: "about me",
    color: "#FE8415",
  },
  {
    title: "tech projects",
    color: "#F0CE0B",
  },
  {
    title: "art",
    color: 'green'// "#69A529",
  },
  {
    title: "currently watching",
    color: "#155DC1",
  },
  {
    title: "playlist",
    color: "#7025B5",
  },
]

export const container = css`
position: fixed;
left: 50%;
transform: translate(-50%);
display: flex;
`;

export const center = css`
  &:not(:empty):hover {
    cursor: pointer;
  }
`;

export const slice = (props: any) => css`
  color: #ecf0c7;
  font-family: BagelFat;
  &[active="true"],
    &[_highlight="true"] {
     color: ${props.backgroundColor};
     ${background('#E0F5F2')}
     cursor: pointer;
   }
`; 