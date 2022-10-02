import React, { useEffect } from 'react'
import { useColorMode } from 'theme-ui'

/**
 * 
 * 아래 내용은 https://utteranc.es/ 에서 generated script 입니다.
 * <script src="https://utteranc.es/client.js"
        repo="JohnKim/johnkim.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
    </script>
 */

const COMMENTS_ID = 'comments-container'

const Comments = () => {
  const [colorMode] = useColorMode()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'JohnKim/johnkim.github.io')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', colorMode == 'dark' ? 'github-dark' : 'github-light')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [colorMode])

  return <div id={COMMENTS_ID} />
}

export default Comments
