import { firestore } from '../firebaseConfig';

export const postJob = async (data:any) =>{
    const res = await firestore.collection('jobs').add(data);
};
