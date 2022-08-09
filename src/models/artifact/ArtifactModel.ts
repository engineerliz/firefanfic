import Firebase from 'firebase/app'
import Asset from './AssetModel';

interface Artifact {
  artifactId: string;
  portfolioId?: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
  images?: Asset[];
}

export default Artifact