import Firebase from 'firebase/compat/app'

interface Portfolio {
  portfolioId: string;
  createdBy: string;
  createdOn: Firebase.firestore.Timestamp;
  title: string;
  description?: string;
  slug?: string;
}

export default Portfolio;