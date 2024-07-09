import React from "react";

interface IProject {
    id: string;
    img: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string;
    demo_url: string;
}
interface IStack {
    name: string;
    img: string;
}
export interface INav {
    id: string;
    label: string;
}
interface IExperience {
    id: string;
    date: string;
    position: string;
    company: string;
    description: string[];
    end: string;
}

interface IValueContext {
    projects: IProject[];
    stacks: IStack[];
    nav: INav[];
    experiences: IExperience[];
}
interface IFirebaseContext {
    initialApplication: boolean;
    setInitial: React.Dispatch<React.SetStateAction<boolean>>;
    values: IValueContext;
    setValue: React.Dispatch<React.SetStateAction<IValueContext>>;
}
