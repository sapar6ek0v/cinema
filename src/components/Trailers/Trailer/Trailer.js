import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import notFound from '../../../images/not-found.jpg';

const Trailer = ({ videos, turnOn, filmImg }) => {
  return (
    <div className="d-flex overflow-auto">
      {videos.map((video, idx) => {
        const poster = filmImg[idx]
          ? `https://image.tmdb.org/t/p/w300${filmImg[idx]?.file_path}`
          : `https://image.tmdb.org/t/p/w300${filmImg[0]?.file_path}`;

        return (
          <div className="col-6 md-trl-col-6">
            <div className="p-3 md-tr-pd">
              <button
                onClick={() => turnOn(video.key)}
                type="button"
                className="position-relative h-100 trailer-btn"
              >
                <FontAwesomeIcon className="trailer-icon" icon={faPlayCircle} />
                <img src={poster} alt="poster" className="trailer-img" />
                <div className="d-inline-block link py-3">{video.name}</div>
                <div className="trailer-size-title d-inline-block">
                  {video.size}
                  <span className="trailer-size">HD</span>
                </div>
              </button>
            </div>
          </div>
        );
      }) || (
        <div>
          <h3 className="text-white">Sorry but we don't have trailers or videos about this movie yet</h3>
          <img src={notFound} alt="trailer" />
        </div>
      )}
    </div>
  );
};

export default Trailer;
