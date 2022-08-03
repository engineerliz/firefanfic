import Firebase from 'firebase/app'
import slugify from 'slugify'
import { v4 as uuid_v4 } from 'uuid';
import { prepareDocForCreate } from '../../firefly/actions/helpers/firestoreHelpers'
import Portfolio from '../../models/portfolio/PortfolioModel';

interface PortfolioCreateValues {
  title: string;
  description?: string;
}

const createPortfolio = (values: PortfolioCreateValues) => {
  const newPortfolio: Portfolio = {
    ...values,
    portfolioId: uuid_v4(),
    slug: slugify(values.title, { lower: true })
  }

  return Firebase.firestore()
    .collection('portfolios')
    .doc(newPortfolio.portfolioId)
    .set(prepareDocForCreate(newPortfolio))
    .then(() => newPortfolio)
    .catch(error => {
      alert(`Whoops, couldn't create the portfolio: ${error.message}`)
    })
}

export default createPortfolio
