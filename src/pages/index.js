import { useState, useEffect } from "react"
import Card from "../components/Card"

import Layout from "../components/Layout"
import DeletePhoto from "../components/Modal/DeletePhoto"

export default function Home({ firebase }) {
  const [photoToDelete, setPhotoToDelete] = useState(undefined)
  const [photos, setPhotos] = useState([])
  const [filter, setFilter] = useState("")

  const db = firebase.firestore().collection("my-unsplash")

  useEffect(() => {
    db.onSnapshot((snap) => {
      const photos = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPhotos(photos)
    })
  }, [])

  return (
    <Layout
      firebase={firebase}
      photos={photos}
      setPhotos={setPhotos}
      setFilter={setFilter}
    >
      <DeletePhoto
        firebase={firebase}
        photoToDelete={photoToDelete}
        open={photoToDelete}
        setOpen={setPhotoToDelete}
      />
      {photos
        .filter((photo) => photo.label.toLowerCase().includes(filter))
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((photo) => (
          <Card
            key={photo.id}
            setPhotoToDelete={setPhotoToDelete}
            photo={photo}
          />
        ))}
    </Layout>
  )
}
