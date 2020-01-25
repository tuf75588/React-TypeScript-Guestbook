import React from 'react';
import { useStoreState } from '../../hooks/index';

const Home: React.FC = () => {
  const entries = useStoreState((state) => state.guestbook.entries);
  return (
    <div>
      <ul>
        {entries.map((e) => (
          <li key={e.name}>
            <div>
              <p>{e.name}</p>
              <p>{e.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
