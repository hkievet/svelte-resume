/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
export interface IResumeJob {
	companyName: string;
	title: String;
	bullets: string[];
	startDate: string;
	endDate: string | null;
}


export interface IEducation {
	startDate: string;
	endDate: string;
	location: string;
	description: string;
}

export interface IProject {
	name: string;
	githubUrl?: string;
	demoUrl: string;
	description: string;
	cta?: string;
}
