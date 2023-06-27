import React, { FunctionComponent, ReactElement, useState } from 'react';
import Navbar from '../components/Navbar';
import { jsTopics } from '../../shared/utils/jsTopics.util';

const TopicDetailPage: FunctionComponent = () => {
  const [selectedTopic, setTopic] = useState<null | string>(null);
  const selectTopic = (topic: string) => setTopic(topic);

  return (
    <section>
      <Navbar selectTopic={selectTopic} />
      {selectedTopic && jsTopics.map(jsTopic => {
        if(jsTopic.propertyName === selectedTopic) {
          return <>{jsTopic.component}</>;
        }
      })}
    </section>
  );
};

export default TopicDetailPage;
