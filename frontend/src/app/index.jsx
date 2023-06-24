import React, { lazy } from 'react';
//import WitSchedule from './WIT-schedule';

/** 
const Homepage = lazy(() => import("./Homepage"));
const ResourcesPage = lazy(() => import("./Resources"));
const ProjectPage = lazy(() => import("./ProjectsPage"));
const Events = lazy(() => import("./Events"));
const BrandResources = lazy(() => import("./Resources/BrandResourcesPage"));
const WorkshopArchive = lazy(() => import("./Resources/WorkshopsPage"));
const TechTips = lazy(() => import("./Resources/TipsPage"));
*/
/**
 * The list of pages that are available on the website.
 *
 * Note the order of the pages is the order they will appear in the navbar.
 * The page will only be included in the navbar by default if there is only one slash in the path.
 * includeInNavbar serves as an override for this.
 *
 * @type {Array<{name: string, path: string, component: JSX.Element}>}
 */
export const pages = [
	{
		name: "About",
		path: "/"
	},
	{
		name: "Resources",
		path: "/resources"
	},
	{
		name: "Logo Download",
		path: "/resources/logo-download",
		includeInNavbar: false,
	},
	{
		name: "Workshop Archive",
		path: "/resources/workshops",
		includeInNavbar: false,
	},
	{
		name: "Tech Tips",
		path: "/resources/tips",
		includeInNavbar: false,
	},
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Events",
		path: "/events",
	},
	{
		name: "Women In Tech Conference",
		path: "/wit",
		includeInNavbar: false,
	}
];