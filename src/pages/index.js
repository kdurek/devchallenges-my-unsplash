import { useState, useEffect } from "react"
import Card from "../components/Card"

const samplePhotos = [
  {
    label: "Room",
    url:
      "https://images.unsplash.com/photo-1609965461134-00bb9e6589ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    label: "Road",
    url:
      "https://images.unsplash.com/photo-1609942781129-b36924bf2f81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    label: "Mountains",
    url:
      "https://images.unsplash.com/photo-1609966256132-896961507bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
  },
  {
    label: "Hello",
    url:
      "https://images.unsplash.com/photo-1578699183408-1258e0398a2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    label: "Food",
    url:
      "https://images.unsplash.com/photo-1606787503499-7a334588351f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    label: "Stars",
    url:
      "https://images.unsplash.com/photo-1609964061192-b0136fcc52d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",
  },
]

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
