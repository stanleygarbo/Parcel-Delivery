import { firestore } from "../firebaseConfig";

export const deleteJob = async (docId:string) =>{
    await firestore.collection('jobs').doc(docId).delete();
};