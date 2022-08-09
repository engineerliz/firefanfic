import Firebase from 'firebase/app'

interface Artifact {
  artifactId: string;
  portfolioId?: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
}

export default Artifact