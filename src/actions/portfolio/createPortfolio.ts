import Firebase from 'firebase/app'
import ReactGA from 'react-ga'
import slugify from 'slugify'
import { prepareDocForCreate } from '../../firefly/actions/helpers/firestoreHelpers'

interface Portfolio {
  title: string;
  description?: string;
  slug?: string;
}

const createPortfolio = (values: Portfolio) => {

  // ReactGA.event({
  //   category: 'Post',
  //   action: 'Create post',
  // })

  values.slug = slugify(values.title, {lower: true})

  return Firebase.firestore()
    .collection('portfolios')
    .add(prepareDocForCreate(values))
    .then( () => values)
    .catch( error => {
      alert(`Whoops, couldn't create the portfolio: ${error.message}`)
    })
}

export default createPortfolio
