import { useState } from "react"

import Modal from "./Modal"
import Button from "../Button"
import Input from "../Input"

const AddPhoto = ({ firebase, open, setOpen }) => {
  const [label, setLabel] = useState("")
  const [url, setUrl] = useState("")
  console.log(label)
  const db = firebase.firestore().collection("my-unsplash")

  const handleSumbit = async () => {
    const newPhoto = { label, url, timestamp: new Date() }
    db.doc().set(newPhoto)
    setOpen(false)
    setLabel("")
    setUrl("")
  }

  return (
    <Modal open={open}>
      <h1 className="font-not font-medium text-2xl text-gray-c333333">
        Add a new photo
      </h1>
      <Input
        label="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Display name of the photo"
      />
      <Input
        label="Photo URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://images.unsplash.com..."
      />
      <div className="flex justify-end">
        <Button onClick={() => setOpen(!open)}>Cancel</Button>
        <Button onClick={() => handleSumbit()} color="green">
          Submit
        </Button>
      </div>
    </Modal>
  )
}

export default AddPhoto
