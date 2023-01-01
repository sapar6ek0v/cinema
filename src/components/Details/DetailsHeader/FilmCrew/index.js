import React, { useMemo } from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useLanguageContext } from '../../../../context/LanguageContext';
import { ActorServices } from '../../../../helpers/services/actorServices';

import { FilmCrewCard, FilmCrewCol, JobTitle, FilmCrewMemberName } from './styles';

const FilmCrew = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: list } = useQuery([`${type} film crew list`, type, id, language], () =>
    ActorServices.getFilmCrewById(type, id, language)
  );

  const filmCrew = useMemo(() => {
    if (!list) return;

    if (type === 'movie') {
      const jobs = ['Director', 'Producer', 'Screenplay'];
      return list.filter((item) => jobs.includes(item.job));
    } else {
      const jobs = ['Executive Producer', 'Original Music Composer', 'Costume Design'];
      return list.filter((item) => jobs.includes(item.job));
    }
  }, [list, type]);

  return (
    <Row>
      {!!filmCrew
        ? filmCrew.map((crew, idx) => (
            <FilmCrewCol key={crew.id + idx + Date.now()}>
              <FilmCrewCard>
                <JobTitle>{crew.job}</JobTitle>
                <FilmCrewMemberName>{crew.name}</FilmCrewMemberName>
              </FilmCrewCard>
            </FilmCrewCol>
          ))
        : null}
    </Row>
  );
};

export default FilmCrew;
