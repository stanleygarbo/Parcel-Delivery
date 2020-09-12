import { firestore } from '../firebaseConfig';

type dataFetched = firebase.firestore.DocumentData[];

export const getPostedJobs = async () =>{
    const res = await firestore.collection('jobs').get();
    let data:dataFetched = res.docs.map((doc)=>{
        //make a new obj to store the doc data
        let docDataWithId = doc.data();
        //add the id of the doc to the new obj
        docDataWithId.id = doc.id;
        //return the object with the document id
        return docDataWithId;
    });
    return data;
};