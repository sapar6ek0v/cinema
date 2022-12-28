import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { useLanguageContext } from '../../../../context/LanguageContext';
import { getImage } from '../../../../helpers/getImage';
import { RecommendationServices } from '../../../../helpers/services/recommendationServices';
import { ContentFlexContainer, ContentWrapper, SliderContainer, Title } from '../styles';
import { CardWrapper, Image, ImageWrapperLink, TitleGroup, TitleLink, VoteAverage } from './styles';

const Recommendations = ({ type, id }) => {
  const { language } = useLanguageContext();
  const { data: recommendations } = useQuery(`${type} recommendation list`, () =>
    RecommendationServices.getRecommendationsById(type, id, language)
  );
  console.log({ recommendations });
  return (
    <ContentWrapper>
      <Container>
        <ContentFlexContainer>
          <Title>#Recommendations</Title>
          <SliderContainer>
            {!!recommendations
              ? recommendations.map((recommendation) => (
                  <CardWrapper key={recommendation.id}>
                    <ImageWrapperLink to={`/movie-info/${recommendation.id}`}>
                      <Image src={getImage(recommendation.poster_path)} alt={recommendation.title} />
                    </ImageWrapperLink>

                    <TitleGroup>
                      <TitleLink to={`/movie-info/${recommendation.id}`}>
                        {recommendation.title || recommendation.name}
                      </TitleLink>
                      <VoteAverage>{(recommendation.vote_average * 10).toFixed(0)}%</VoteAverage>
                    </TitleGroup>
                  </CardWrapper>
                ))
              : null}
          </SliderContainer>
        </ContentFlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Recommendations;
