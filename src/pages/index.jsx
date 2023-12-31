import { Inter } from 'next/font/google';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/editorjs/index'), { ssr: false });

import Blocks from 'editorjs-blocks-react-renderer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState(null);
  return (
    <>
      <Head>
        <title>
          Next.js with Editor.js and SSR Template by @kkupgrader / @kanakkholwal
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`wrapper ${inter.className}`}>
        
        <div className='editor-container'>
        <h2>
          Editor.js with SSR
        </h2>
        <Editor 
          placeholder="Start typing here..."
          onReady={() => console.log('Editor.js is ready!')}
          onChange={(data) => {
            console.log("Changed Data :",data);
          }}
          minHeight={500}
          onSave={(data) => {
            console.log("Saved Data :",data);
            setTimeout(() => {
              setData(data);
            }, 0);
          }}
          readOnly={false}
          
        
        />
        </div>
        <div className='preview'>
          <h2>
            Preview
          </h2>
          <hr/>
          {data ? <Blocks data={data}  config={{
  code: {
    className: "language-js"
  },
  delimiter: {
    className: "border border-2 w-16 mx-auto"
  },
  embed: {
    className: "border-0"
  },
  header: {
    className: "font-bold"
  },
  image: {
    className: "w-full max-w-screen-md",
    actionsClassNames: {
      stretched: "w-full h-80 object-cover",
      withBorder: "border border-2",
      withBackground: "p-2",
    }
  },
  list: {
    className: "list-inside"
  },
  paragraph: {
    className: "text-base text-opacity-75",
    actionsClassNames: {
      alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
    }
  },
  quote: {
    className: "py-3 px-5 italic font-serif"
  },
  table: {
    className: "table-auto"
  }
}} />:"No Data to Preview"}

        </div>
      </main>
    </>
  )
}
