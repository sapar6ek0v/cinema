import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Credits from '../../components/Credits/Credits'
import { API_KEY, URL_BASE } from '../../constants/api'
import Trailers from '../../components/Trailers/Trailers'
import Creators from '../../components/Creators/Creators'
import notFound from '../../image/not found.jpg'
import Loading from '../../components/Loading/Loading'
import StartMovieTrailer from '../../components/Trailers/StartMovieTrailer'
import Media from '../../components/Media/Media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import FactsCard from '../../components/Facts/FactsCard'
import ShowImage from '../../components/ShowImage/ShowImage'
import FilmsRecommendation from '../../components/FilmCard/FilmsRecommendation'
import 'react-circular-progressbar/dist/styles.css'
import './films-info.css'
import CircularBar from '../../components/CircularBar/CircularBar'
import { LanguageContext } from '../../context/LanguageContext'

const FilmsInfo = () => {
  const { language } = useContext(LanguageContext)
  const { id } = useParams()
  const [film, setFilm] = useState({})
  const [videos, setVideos] = useState([])
  const [modal, setModal] = useState(false)
  const [videoKey, setVideoKey] = useState('')
  const [loading, setLoading] = useState(true)
  const [media, setMedia] = useState({})
  const [keyWords, setKeyWords] = useState([])
  const [modalImage, setModalImage] = useState(false)
  const [recommendation, setRecommendation] = useState([])

  useEffect(() => {
    const prom1 = axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=${language}`
    ).then(({ data }) => {
      setFilm(data)
    })

    const prom2 = axios(
      `${URL_BASE}/movie/${id}/videos?api_key=${API_KEY}&language=ru,en`
    ).then(({ data }) => {
      setVideos(data.results)
    })

    const prom3 = axios(
      `${URL_BASE}/movie/${id}/external_ids?api_key=${API_KEY}`
    ).then(({ data }) => {
      setMedia(data)
    })

    const prom4 = axios(
      `${URL_BASE}/movie/${id}/keywords?api_key=${API_KEY}&language=${language}`
    ).then(({ data }) => {
      setKeyWords(data.keywords)
    })

    const prom5 = axios(
      `${URL_BASE}/movie/${id}/recommendations?api_key=${API_KEY}`
    ).then(({ data }) => {
      setRecommendation(data.results)
    })

    Promise.all([prom1, prom2, prom3, prom4, prom5])
      // .catch((e) => console.log(e))
      // .finally(() => setLoading(false))
      .then(() => setLoading(false))
  }, [id, language])

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  const turnOn = (key) => {
    setVideoKey(key)
    setModal(true)
  }

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalImage])

  const input = film.release_date?.split('-')
  const output = input?.slice(0, 1)

  if (loading) return <Loading />

  return (
    <div key={film.id} className="about-film">
      <>
        <div
          className="info"
          style={{
            background: `rgba(0,0,0,0.8) url(https://image.tmdb.org/t/p/original/${film.backdrop_path}) center/cover`,
            backgroundBlendMode: 'darken',
          }}
        >
          <Container>
            <div className="d-flex md-film-bl">
              <div className="title-block col-4">
                <div className="film-info-box">
                  <div
                    onClick={() => setModalImage(true)}
                    className="position-relative"
                  >
                    <img
                      className="film-info-img"
                      src={
                        film.poster_path
                          ? 'https://image.tmdb.org/t/p/w500' + film.poster_path
                          : notFound
                      }
                      alt="film"
                    />
                    <span className="image-text-grow">
                      Expand{' '}
                      <span>
                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-8 md-film-col-8">
                <div className="film-title">
                  {film.title}
                  <span className="film-date">({output})</span>
                </div>
                <div className="film-sub-title">
                  <span className="film-pod-title">
                    {film.release_date?.split('-').join('/')}
                  </span>
                  <span className="film-pod-title">&bull;</span>
                  <span className="film-pod-title">
                    {film.genres?.map((it) => {
                      return <span className="film-sub-title">{it.name},</span>
                    })}
                    &bull;
                  </span>
                  <span className="film-pod-title"> {film.runtime}мин </span>
                </div>

                <div className="d-flex align-items-center  md-film-over">
                  <CircularBar item={film} />
                  <span className="actor-link-block">
                    <a className="actor-link" href={film.homepage}>
                      {' '}
                      <FontAwesomeIcon icon={faHome} />{' '}
                    </a>
                  </span>
                  <Media media={media} />
                </div>
                <div className="film-tagline">{film.tagline || ''}</div>
                <div className="info-block md-film-over">
                  <h3 className="h3">Overview</h3>
                  <div>
                    {film.overview
                      ? film.overview
                      : "Sorry but we don't have information about this movie yet"}
                  </div>
                </div>
                <Creators />
              </div>
            </div>
          </Container>
        </div>
        <div
          className="films-info-box"
          style={{
            background: `rgba(0,0,0,0.9) url(https://image.tmdb.org/t/p/original/${film.backdrop_path}) center/cover`,
            backgroundBlendMode: 'darken',
          }}
        >
          <Container>
            <div className="d-flex md-block">
              <div
                className="col-8 md-sub-film-col-8"
                style={{
                  background: '#020d18',
                }}
              >
                <Credits />
                <StartMovieTrailer videos={videos} turnOn={turnOn} />
                <FilmsRecommendation recommendation={recommendation} />
              </div>
              <div
                className="col-4 md-pod-film-col-8"
                style={{
                  background: '#020d18',
                }}
              >
                <FactsCard key={film.id} film={film} keyWords={keyWords} />
              </div>
            </div>
          </Container>
        </div>
      </>
      {modal && <Trailers setModal={setModal} videoKey={videoKey} />}
      {modalImage && <ShowImage setModalImage={setModalImage} item={film} />}
    </div>
  )
}

export default FilmsInfo
