import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Row} from "react-bootstrap";

const CreditsPhotos = () => {
    const {id} = useParams()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}/images?api_key=${API_KEY}`)
            .then(({data}) => {
                setPhotos(data.profiles)
            })
    } , [])

    return (
        <Row key={photos.id}>
            {
                photos?.slice(0,8).map( photo => {
                    return (
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <div className='p-2'>
                                <img className='w-100 bor-rad' src={photo.file_path ? `${PHOTO_BASE}${photo.file_path}` : 'We don\'t have any photos yet'} alt=""/>
                            </div>
                        </div>
                    )
                } )
            }
        </Row>
    );
};

export default CreditsPhotos;