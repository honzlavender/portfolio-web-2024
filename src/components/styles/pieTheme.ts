import { css } from "styled-components";

export const pieTheme = {
    pieMenu: {
      container: css`
        /* Custom styles for the pie menu container */
      `,
      list: css`
        /* Custom styles for the list of items in the pie menu */
      `,
      item: css`
        /* Custom styles for individual items in the pie menu */
      `,
      center: css`
        /* Custom styles for the center of the pie menu */
      `,
    },
    slice: {
      container: css`
        /* Custom styles for the slice container */
      `,
      contentContainer: css`
        font-size: calc(10px + 2vmin);
        /* Custom styles for the container of the content within the slice */
      `,
      content: css`
        /* Custom styles for the content within the slice */
      `,
    },
  };