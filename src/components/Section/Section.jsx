import { SectionTag, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      <Title>{title}</Title>
      {children}
    </SectionTag>
  );
};
