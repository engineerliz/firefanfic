import Firebase from 'firebase/app'
import ReactGA from 'react-ga'
import slugify from 'slugify'
import { prepareDocForCreate } from '../../firefly/actions/helpers/firestoreHelpers'
import { doc, Firestore, getDoc } from '@firebase/firestore';
import Portfolio from '../../models/portfolio/PortfolioModel';

export const getAllPortfolios = () => {

  // ReactGA.event({
  //   category: 'Post',
  //   action: 'Create post',
  // })

  return Firebase.firestore()
    .collection('portfolios')
    .get()
    .then((portfolios) => portfolios.docs.map(portfolio => ({
      title: portfolio.data()?.title,
      description: portfolio.data()?.description,
      portfolioId: portfolio.data()?.portfolioId,
      slug: portfolio.data()?.slug,
    } as Portfolio)))
    .catch(error => {
      alert(`Whoops, couldn't get the portfolio: ${error.message}`)
    })
}

export const getPortfolioById = (id: string) => {
  //   const docRef = doc(new Firestore(), "cities", "SF");
  // const docSnap = await getDoc(docRef);

  return Firebase.firestore()
    .collection('portfolios')
    .doc(id)
    .get()
    .then((value) => ({
      title: value.data()?.title,
      description: value.data()?.description,
      portfolioId: id,
      slug: value.data()?.slug,
    } as Portfolio))
    .catch(error => {
      alert(`Whoops, couldn't get the portfolio: ${error.message}`)
    })
}