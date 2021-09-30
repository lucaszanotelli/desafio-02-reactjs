import { useState, useEffect } from 'react'
import { api } from '../services/api'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function Header(props: GenreResponseProps) {

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    api.get<GenreResponseProps>(`genres/${props.selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);

	return (
		<header>
		  <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
		</header>
	)
}
