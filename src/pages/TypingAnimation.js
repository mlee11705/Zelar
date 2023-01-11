import { useEffect } from 'react'
import Typed from 'typed.js'

export default function TypingAnimation() {
  useEffect(() => {
    const typed = new Typed('#typed', {
        strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        smartBackspace: true,
    })
  })
}
