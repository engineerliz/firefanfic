import Firebase from 'firebase/app'
import { List } from 'immutable'
import Artifact from '../../models/artifact/ArtifactModel'

export const getArtifactsByPortfolioId = (portfolioId: string): Promise<void | List<Artifact>> => {
  return Firebase.firestore()
    .collection('artifacts')
    .where('portfolioId', '==', portfolioId)
    .orderBy('createdOn', 'desc')
    .get()
    .then((artifacts) => List(artifacts.docs).map(artifact => ({
      ...artifact.data()
    } as Artifact)))
    .catch(error => {
      alert(`Whoops, couldn't get the artifacts: ${error.message}`)
    })
}