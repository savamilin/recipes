
import Nav from './Nav'
import Selection from './Selection'
import Container from '@material-ui/core/Container';

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Selection />

      <Container>
        {children}
      </Container>

    </div>
  )
}

export default Layout
