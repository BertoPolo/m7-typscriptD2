import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const SearchPage = () => {
  const [music, setMusic] = useState()
  const [query, setQuery] = useState()

  useEffect(() => {
    getMusic()
  }, [])

  const getMusic = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    const { data } = await response.json()
    setMusic(data)
    console.log(music)
  }

  interface ReturnQuery {
    id: number
    readable: boolean
    title: string
    title_short: string
    title_version: string
    link: string
    duration: number
    rank: number
    explicit_lyrics: boolean
    explicit_content_lyrics: number
    explicit_content_cover: number
    preview: string
    md5_image: string
    Album: {
      id: number
      title: string
      cover: string
      cover_small: string
      cover_medium: string
      cover_big: string
      cover_xl: string
      md5_image: string
      tracklist: string
      type: string
    }

    Artist: {
      id: number
      name: string
      link: string
      picture: string
      picture_small: string
      picture_medium: string
      picture_big: string
      picture_xl: string
      tracklist: string
      type: string
    }
  }

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Band</Form.Label>
          <Form.Control type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Enter Band" />
        </Form.Group>
      </Form>
    </>
  )
}

export default SearchPage
