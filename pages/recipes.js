

import BreadCrumbs from '../Component/Breadcrumbs'

import { Grid } from '@material-ui/core';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';


import styleH1 from '../styles/Recipes.module.css'
import styleFelx from '../styles/Recipes.module.css'
import styleP from '../styles/Recipes.module.css'
import styleButton from '../styles/Recipes.module.css'
import style from '../styles/Recipes.module.css'

import styled from 'styled-components'

import Image from 'next/image'



function recipes() {


  const Clock = styled(AccessTimeIcon)`

position: relative;
top:10px;
font-size: 60px;


`

  const Pizza = styled(LocalPizzaIcon)`
position: relative;
top:10px;
font-size: 60px;
`

  const SpanText = styled.span`

position: relative;
top: -5px;

`

  const SpanUndeline = styled.span`
text-decoration: underline;
text-decoration-color:black;


`

  return (
    <div>
      <BreadCrumbs />
      <Grid container  >
        <Grid item xs={6}>
          <h1 className={styleH1.h1} >Whole-Grain Banana <br /> Bread</h1>
          <p className={style.mainText} >
            This one-bowl banana bread <span>	&#8212;</span> our <SpanUndeline>2018 Reciple of the Year</SpanUndeline> <span>	&#8212;</span> uses the simplest ingredients, but is incredibly moist and flavorful. While the reciple calls for a 50/50 mix of flours(all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly?No one can tell, it's the that good! And not only is this bread delicious <span>	&#8212;</span> it's versatile.
          </p>
        </Grid>

        <Grid item xs={6}>
          <Image
            src="/pexels-photo-461060.jpeg"
            width={600}
            height={500}
          />

        </Grid>
      </Grid>


      <div className={style.moveBlock}>
        <Grid container >
          <Grid item xs={2}>
            <div className={styleFelx.flexDiv}>
              <div>
                <Clock />
              </div>

              <div>
                <p className={styleP.paragInfo} >PREP</p>
                <p className={styleP.p} > <strong>10 mins</strong></p>
              </div>


            </div>

          </Grid>


          <Grid item xs={2} className={style.moveBlock} >

            <p className={styleP.paragInfo}>
              BAKE
        </p>
            <p className={styleP.p}>
              <strong> 1 hr to 1 hr 15 mins</strong>
            </p>

          </Grid>


          <Grid item xs={2}>

            <p className={styleP.paragInfo}>
              TOTAL
         </p>
            <p className={styleP.p}>
              <strong>
                1hr 10 mins
         </strong>
            </p>

          </Grid><Grid item xs={6}>

          </Grid>

        </Grid>

      </div>


      <Grid container >

        <Grid item xs={3}>

          <div className={styleFelx.flexDiv} >
            <div>
              <Pizza />
            </div>

            <div>
              <p className={styleP.paragInfo}>
                YIELD
               </p>

              <p className={styleP.p}>
                <strong>
                  1 loaf, 12 generous <br /> servings
                </strong>
              </p>

            </div>

          </div>


        </Grid>

        <Grid item xs={3}>

          <button className={styleButton.button}>
            <AddIcon />  <SpanText>SAVE RECIPE</SpanText>
          </button>

          <button className={styleButton.button} >
            <PrintIcon /> <SpanText>PRINT</SpanText>
          </button>

        </Grid>

      </Grid><Grid item xs={6}>

      </Grid>
    </div >
  )
}

export default recipes
