import Firebase from 'firebase/app'
import Portfolio from '../../models/portfolio/PortfolioModel';

export const getAllPortfolios = (): Promise<void | Portfolio[]> => {
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
      alert(`Whoops, couldn't get the portfolios: ${error.message}`)
    })
}

export const getPortfolioById = (id: string): Promise<void | Portfolio> => {
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

export const getPortfoliosByUserId = (userId: string): Promise<void | Portfolio[]> => {
  return Firebase.firestore()
    .collection('portfolios')
    .where('createdBy', '==', userId)
    .get()
    .then((portfolios) => portfolios.docs.map(portfolio => ({
      title: portfolio.data()?.title,
      description: portfolio.data()?.description,
      portfolioId: portfolio.data()?.portfolioId,
      slug: portfolio.data()?.slug,
    } as Portfolio)))
    .catch(error => {
      alert(`Whoops, couldn't get the portfolios: ${error.message}`)
    })
}