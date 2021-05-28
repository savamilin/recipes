import Link from 'next/link'
import { Grid, Container } from '@material-ui/core';

import { useState } from 'react'

import StyleNav from '../styles/Nav.module.css'
function Nav() {

  const [active, setActive] = useState('')

  const setActiveNav = (nameNav) => {


    let onNav = ''
    if (nameNav === 'shop') {
      onNav = 'shop'
      setActive('shop')
    } else if (nameNav === 'recipes') {
      onNav = 'recipes'
      setActive('recipes')
    } else if (nameNav === 'learn') {
      onNav = 'learn'
      setActive('learn')
    } else if (nameNav === 'about') {
      onNav = 'about'
      setActive('about')
    } else if (nameNav === 'blog') {
      onNav = 'blog'
      setActive('blog')

    }
    return onNav;



  }
  console.log(active)

  return (
    <nav>
      <Container>
        <Grid container >
          <Grid item xs={8}>
            <ul className={StyleNav.ul} >
              {
                active === 'shop' ?
                  <li className={StyleNav.li} className={StyleNav.active} onClick={() => setActiveNav('shop')}>
                    <Link href='/shop' > SHOP</Link>
                  </li>
                  :
                  <li className={StyleNav.li} onClick={() => setActiveNav('shop')}>
                    <Link href='/shop' > SHOP</Link>
                  </li>
              }

              {
                active === 'recipes' ?
                  <li className={StyleNav.li} className={StyleNav.active} onClick={() => setActiveNav('recipes')}>
                    <Link href='/recipes' > RECIPES</Link>
                  </li>
                  :
                  <li className={StyleNav.li} onClick={() => setActiveNav('recipes')}>
                    <Link href='/recipes' > RECIPES</Link>
                  </li>
              }

              {
                active === 'learn' ?
                  <li className={StyleNav.li} className={StyleNav.active} onClick={() => setActiveNav('learn')}>
                    <Link href='/learn' > LEARN</Link>
                  </li>
                  :
                  <li className={StyleNav.li} onClick={() => setActiveNav('learn')}>
                    <Link href='/learn' > LEARN</Link>
                  </li>
              }

              {
                active === 'about' ?
                  <li className={StyleNav.li} className={StyleNav.active} onClick={() => setActiveNav('about')}>
                    <Link href='/about' > ABOUT</Link>
                  </li>
                  :
                  <li className={StyleNav.li} onClick={() => setActiveNav('about')}>
                    <Link href='/about' > ABOUT</Link>
                  </li>
              }

              {
                active === 'blog' ?
                  <li className={StyleNav.li} className={StyleNav.active} onClick={() => setActiveNav('blog')}>
                    <Link href='/blog' > BLOG</Link>
                  </li>
                  :
                  <li className={StyleNav.li} onClick={() => setActiveNav('blog')}>
                    <Link href='/blog' > BLOG</Link>
                  </li>
              }

            </ul>

          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </nav >
  )
}

export default Nav
