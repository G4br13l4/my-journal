import React, { FunctionComponent, ReactElement } from 'react';

interface TopicProps {
  title: string;
  content: ReactElement;
}

const Topic: FunctionComponent<TopicProps> = ({
  title,
  content,
}) => {

  return (
    <section>
      <h1>{title}</h1>
      {content}
    </section>
  );
};

export default Topic;
