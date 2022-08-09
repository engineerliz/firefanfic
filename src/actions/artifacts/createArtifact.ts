import Firebase from 'firebase/app'
import slugify from 'slugify'
import { v4 as uuid_v4 } from 'uuid';
import Artifact from '../../models/artifact/ArtifactModel';
import Portfolio from '../../models/portfolio/PortfolioModel';

interface ArtifactCreateValues {
  portfolio?: Portfolio;
  title: string;
  description?: string;
}

const createArtifact = (values: ArtifactCreateValues) => {
  const newArtifact: Artifact = {
    artifactId: uuid_v4(),
    portfolioId: values.portfolio?.portfolioId,
    title: values.title,
    description: values.description,
    slug: slugify(values.title, { lower: true }),
    createdBy: Firebase.auth().currentUser?.uid ? Firebase.auth().currentUser!.uid : '',
    createdOn: Firebase.firestore.Timestamp.now(),
  }

  return Firebase.firestore()
    .collection('artifacts')
    .doc(newArtifact.artifactId)
    .set(newArtifact)
    .then(() => newArtifact)
    .catch(error => {
      alert(`Whoops, couldn't create the artifact: ${error.message}`)
    })
}

export default createArtifact
