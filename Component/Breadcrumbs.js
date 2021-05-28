import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';


function Breadcrumb() {



  return (
    <div  >
      <Breadcrumbs separator="›" color="#000" aria-label="breadcrumb">
        <Link href="/recipes/" >
          RECIPES

        </Link>
        <Link href='/recipes/bread/'  >
          BREAD
        </Link>
        <Link href='/recipes/bread/quickbrad'   >
          QUICK BREAD
        </Link>
        <span></span>

      </Breadcrumbs>

    </div>
  )
}

export default Breadcrumb



