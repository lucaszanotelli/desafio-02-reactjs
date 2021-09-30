import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function NApp() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
	    <SideBar
	    selectedGenreId={selectedGenreId}
	    handleGenreId={handleGenreId}
	    />
	    <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
