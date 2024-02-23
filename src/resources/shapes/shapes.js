export const Polygon = () => {
  return <PolygonStyle />;
};

const PolygonStyle = styled.div`
  width: 200px;
  aspect-ratio: 1;
  clip-path: polygon(
    100% 50%,
    81.17% 89.09%,
    38.87% 98.75%,
    4.95% 71.69%,
    4.95% 28.31%,
    38.87% 1.25%,
    81.17% 10.91%
  );
`;
