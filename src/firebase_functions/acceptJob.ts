import { firestore } from '../firebaseConfig';

export const acceptJob = async (docId:string) =>{
    await firestore.collection('jobs').doc(docId).set({
        acceptedBy:'driver',
    },{ merge: true });
    const res = await firestore.collection('jobs').doc(docId).get();
    const onGoingDelivery = await firestore.collection('userTypes')
    .doc('driver').collection('onGoingDelivery').add(res.data()!);
    console.log(onGoingDelivery);
}