import Link from 'next/link'

import { Grid, Container } from '@material-ui/core'

import styled from 'styled-components'

import Image from 'next/image'



function Selection() {


  const NavSelection = styled.nav`


background-color: rgb(240, 240, 240);
margin-bottom: 50px;

.logo{
  position: absolute;
  top: 200px;
  left: 800px;
}

`

  const UlFlex = styled.ul`

display: flex;
justify-content: space-around;

li{
list-style: none;

}



`


  return (


    <div>
      <div className='logo'>
        <Image
          src="/logo-crazy-monkey-hd-png-download-800x11312396344-pngfind-crazy-hd-png-840_886.png"
          width={100}
          height={200}

        />
      </div>


      <NavSelection>
        <Container>
          <Grid container  >


            <Grid item xs={6}>
              <UlFlex>
                <li><Link href="/categories" >CATEGORIES</Link></li>
                <li><Link href="/collections">COLLECTIONS </Link> </li>
                <li><Link href="resources" >RESOURCES</Link> </li>
              </UlFlex>
            </Grid>

            <Grid xs={2}></Grid>


          </Grid>
        </Container>
      </NavSelection>

    </div >
  )
}

export default Selection


