import Firebase from 'firebase/compat/app'
import { List } from 'immutable';
import Asset from './AssetModel';

interface Artifact {
  artifactId: string;
  portfolioId?: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
  images?: List<Asset>;
}

export default Artifact