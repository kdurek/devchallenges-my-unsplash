import { useState } from "react"

import Head from "next/head"
import SearchInput from "../SearchInput"
import AddPhoto from "../Modal/AddPhoto"
import Button from "../Button"

const Layout = ({ firebase, setFilter, children }) => {
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false)

  return (
    <div className="w-11/12 mx-auto mt-8">
      <Head>
        <title>My Unsplash</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>
      <header className="flex justify-between">
        <div className="flex">
          <img src="my_unsplash_logo.svg" alt="my_unsplash_logo" />
          <SearchInput setFilter={setFilter} />
        </div>
        <AddPhoto
          firebase={firebase}
          open={isAddPhotoOpen}
          setOpen={setIsAddPhotoOpen}
        />
        <Button
          onClick={() => setIsAddPhotoOpen(!isAddPhotoOpen)}
          color="green"
        >
          Add a photo
        </Button>
      </header>
      <main
        style={{ columnCount: 3, columnGap: 48 }}
        className="mt-12 min-w-screen"
      >
        {children}
      </main>
      <footer className="">
        <p className="pb-4 font-mon text-black text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io/profile/XsvmnN0SqD57YrX1px1Q">
            DevChallenges.io
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
