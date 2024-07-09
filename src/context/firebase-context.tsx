import React, { useContext, useState } from 'react';
import { db } from '../config/firebase';
import {
    collection,
    writeBatch,
    getDocs,
    doc,
    DocumentData,
    CollectionReference,
    onSnapshot
} from 'firebase/firestore';

import projectsJson from '../json/projects.json';
import stackJson from '../json/stacks.json';
import navJson from '../json/nav.json';
import experienceJson from '../json/experience.json';
import { IExperience, IFirebaseContext, INav, IProject, IStack, IValueContext } from 'typing';


export const FirebaseAppContext = React.createContext({

} as IFirebaseContext); //create the context API


//function body
const FirebaseProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [values, setValue] = useState<IValueContext>({
        projects: [],
        stacks: [],
        nav: [],
        experiences: []
    });
    const [initialApplication, setInitial] = useState<boolean>(false);
    return (
        <FirebaseAppContext.Provider value={{ values, setValue, initialApplication, setInitial }}>
            {children}
        </FirebaseAppContext.Provider>
    );
}

const seedData = async () => {
    const batch = writeBatch(db);
    const jsons = {
        projects: projectsJson, stacks: stackJson, nav: navJson, experiences: experienceJson
    };
    Object.entries(jsons).forEach(([key, value]) => {
        value.forEach(itm => batch.set(doc(collection(db, `${key}`)), itm));
    });
    await batch.commit();
}
export const fetching = async (): Promise<IValueContext> => {
    const projectsDoc = collection(db, 'projects');
    const stacksDoc = collection(db, 'stacks');
    const navDoc = collection(db, 'nav');
    const experiencesDoc = collection(db, 'experiences');

    const [projects, stacks, nav, experiences] = await Promise.all([
        getDocs<IProject, DocumentData>(projectsDoc as CollectionReference<IProject, DocumentData>),
        getDocs(stacksDoc as CollectionReference<IStack, DocumentData>),
        getDocs(navDoc as CollectionReference<INav, DocumentData>),
        getDocs(experiencesDoc as CollectionReference<IExperience, DocumentData>),
    ]);
    return {
        projects: projects.docs.map(doc => ({ ...doc.data(), id: doc.id })),
        stacks: stacks.docs.map(doc => ({ ...doc.data(), id: doc.id })),
        nav: nav.docs.map(doc => ({ ...doc.data(), id: doc.id })),
        experiences: experiences.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    };
}
export const useGlobalContext = (): IFirebaseContext => useContext(FirebaseAppContext);
export default FirebaseProvider;