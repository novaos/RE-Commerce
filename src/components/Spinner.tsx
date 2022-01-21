import { CircleLoader } from 'react-spinners';

export default function Spinner() {
  const css = `
    display: block;
    margin: 50px auto;
    border-color: red;
  `;

  return <CircleLoader color="#2faf6d" size={150} css={css} />;
}
