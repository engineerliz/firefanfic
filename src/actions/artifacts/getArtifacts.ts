import Firebase from 'firebase/app'
import Artifact from '../../models/artifact/ArtifactModel'

export const getArtifactsByPortfolioId = (portfolioId: string): Promise<void | Artifact[]> => {
  return Firebase.firestore()
    .collection('artifacts')
    .where('portfolioId', '==', portfolioId)
    .get()
    .then((artifacts) => artifacts.docs.map(artifact => ({
      ...artifact.data()
    } as Artifact)))
    .catch(error => {
      alert(`Whoops, couldn't get the artifacts: ${error.message}`)
    })
}