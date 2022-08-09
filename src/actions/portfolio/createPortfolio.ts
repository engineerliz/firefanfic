import Firebase from 'firebase/app'
import slugify from 'slugify'
import { v4 as uuid_v4 } from 'uuid';
import Portfolio from '../../models/portfolio/PortfolioModel';

interface PortfolioCreateValues {
  title: string;
  description?: string;
}

const createPortfolio = (values: PortfolioCreateValues) => {
  const newPortfolio: Portfolio = {
    ...values,
    portfolioId: uuid_v4(),
    slug: slugify(values.title, { lower: true }),
    createdBy: Firebase.auth().currentUser?.uid ? Firebase.auth().currentUser!.uid : '',
    createdOn: Firebase.firestore.Timestamp.now(),
  }

  return Firebase.firestore()
    .collection('portfolios')
    .doc(newPortfolio.portfolioId)
    .set(newPortfolio)
    .then(() => newPortfolio)
    .catch(error => {
      alert(`Whoops, couldn't create the portfolio: ${error.message}`)
    })
}

export default createPortfolio
