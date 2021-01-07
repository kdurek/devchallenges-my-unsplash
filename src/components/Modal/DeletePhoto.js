import { useState } from "react"

import Modal from "./Modal"
import Button from "../Button"
import Input from "../Input"

const DeletePhoto = ({ firebase, photoToDelete, open, setOpen }) => {
  const [givenLabel, setGivenLabel] = useState("")

  const db = firebase.firestore().collection("my-unsplash")

  const handleDelete = (photoToDelete) => {
    if (photoToDelete.label === givenLabel) {
      db.doc(photoToDelete.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!")
        })
        .catch(function (error) {
          console.error("Error removing document: ", error)
        })
      setOpen(false)
    } else {
      setGivenLabel("Wrong label name provided")
    }
  }

  return (
    <Modal open={open}>
      <h1 className="font-not font-medium text-2xl text-gray-c333333">
        Are you sure?
      </h1>
      <Input
        label="Label"
        value={givenLabel}
        onChange={(e) => setGivenLabel(e.target.value)}
        placeholder="Enter photo label for confirmation"
      />
      <div className="flex justify-end">
        <Button onClick={() => setOpen(!open)}>Cancel</Button>
        <Button onClick={() => handleDelete(photoToDelete)} color="green">
          Submit
        </Button>
      </div>
    </Modal>
  )
}

export default DeletePhoto
