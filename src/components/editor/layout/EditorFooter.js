import React from 'react'

const EditorFooter = () => {
    return (
        <>
        <footer className="fixed-bottom p-5 bg-light text-center">
            &copy; Footer firma {new Date().getFullYear()}
        </footer>
        </>
    )
}

export default EditorFooter;