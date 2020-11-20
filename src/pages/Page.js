// In src/pages/Page.js
import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'

const Page = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  const uid = match.params.uid
  const pageStyle = {
      textAlign:'center',
      fontSize:'30px',
      fontStyle:'bold',
      padding:'30px'
    };
   const container = {
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
   }

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID('page', uid)

      if (result) {
        // We use the State hook to save the document
        return setDocData(result)
        toggleNotFound(true)
      } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [uid]) // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    return (
      <div style={container} className="pt-30">
        <div style={pageStyle}>
            {/* This is how to render a Rich Text field as plain text */}
            <h1 className='text-4xl font-bold text-gray-900' >{RichText.asText(doc.data.title)}</h1>
            {/* This is how to get an image into your template */}
            <img className='py-10' src={doc.data.image.url} alt={doc.data.image.alt} />
            {/* This is how to render a Rich Text field into your template as HTML */}
            <RichText render={doc.data.description} linkResolver={linkResolver} />
        </div>
      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return (<div className="min-h-screen"><NotFound /></div>)
}

export default Page