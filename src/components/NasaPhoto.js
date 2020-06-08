import React, { useState, useEffect } from "react"
import "./NasaPhoto.css"
import { Jumbotron, Collapse, Button, CardBody, Card } from "reactstrap";

const apiKey = process.env.REACT_APP_NASA_KEY

export default function NasaPhoto  ()  {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [ photoData, setPhotoData ] = useState(null)

    useEffect(()=> {
        fetchPhoto()
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json()
            setPhotoData(data)
            console.log(data)
            // console.log(apiKey)
        }
    }, [])
    if (!photoData) return <div />
    return(
      <>
      <div class="vanillaCSSLayout">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Blast Off!</Button>
      <Collapse isOpen={isOpen}>
        <Card>
        <Jumbotron>
        <CardBody>
            {photoData.media_type === "image" ? (
            <img
                
                src={photoData.url}
                alt={photoData.title}/>
                ) : (
                    <iframe
                        title="space=video"
                        src={photoData.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="photo"
                    />
                )}

            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p className="lead">{photoData.explanation}</p>
        </CardBody>
        </Jumbotron>
        </Card>
        </Collapse>
        </div>
        </>
    )
}
