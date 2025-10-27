/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const GOOGLE_APIS = [
	{
		version: "v1",
		title: "Abusive Experience Report API",
		description:
			"Views Abusive Experience Report data, and gets a list of sites that have a significant number of abusive experiences.",
		discoveryRestUrl:
			"https://abusiveexperiencereport.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/abusive-experience-report/",
		scopes: [],
	},
	{
		version: "v1",
		title: "Accelerated Mobile Pages (AMP) URL API",
		description:
			"Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).",
		discoveryRestUrl:
			"https://acceleratedmobilepageurl.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/amp/cache/",
		scopes: [],
	},
	{
		version: "v1",
		title: "Access Approval API",
		description: "An API for controlling access to data by Google personnel.",
		discoveryRestUrl:
			"https://accessapproval.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/assured-workloads/access-approval/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Access Context Manager API",
		description:
			"An API for setting attribute based access control to requests to Google Cloud services. *Warning:* Do not mix *v1alpha* and *v1* API usage in the same access policy. The v1alpha API supports new Access Context Manager features, which may have different attributes or behaviors that are not supported by v1. The practice of mixed API usage within a policy may result in the inability to update that policy, including any access levels or service perimeters belonging to it. It is not recommended to use both v1 and v1alpha for modifying policies with critical service perimeters. Modifications using v1alpha should be limited to policies with non-production/non-critical service perimeters.",
		discoveryRestUrl:
			"https://accesscontextmanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/access-context-manager/docs/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Address Validation API",
		description:
			"The Address Validation API allows developers to verify the accuracy of addresses. Given an address, it returns information about the correctness of the components of the parsed address, a geocode, and a verdict on the deliverability of the parsed address.",
		discoveryRestUrl:
			"https://addressvalidation.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/maps/documentation/addressvalidation",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.addressvalidation",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.addressvalidation",
			},
		],
	},
	{
		version: "v2beta1",
		title: "Ad Exchange Buyer API II",
		description:
			"Accesses the latest features for managing Authorized Buyers accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.",
		discoveryRestUrl:
			"https://adexchangebuyer.googleapis.com/$discovery/rest?version=v2beta1",
		documentationLink:
			"https://developers.google.com/authorized-buyers/apis/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adexchange.buyer",
				description: "Manage your Ad Exchange buyer account configuration",
			},
		],
	},
	{
		version: "v1",
		title: "Ad Experience Report API",
		description:
			"Views Ad Experience Report data, and gets a list of sites that have a significant number of annoying ads.",
		discoveryRestUrl:
			"https://adexperiencereport.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/ad-experience-report/",
		scopes: [],
	},
	{
		version: "datatransfer_v1",
		title: "Admin SDK API",
		description:
			"Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.",
		discoveryRestUrl:
			"https://admin.googleapis.com/$discovery/rest?version=datatransfer_v1",
		documentationLink: "https://developers.google.com/workspace/admin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admin.datatransfer",
				description:
					"View and manage data transfers between users in your organization",
			},
			{
				id: "https://www.googleapis.com/auth/admin.datatransfer.readonly",
				description: "View data transfers between users in your organization",
			},
		],
	},
	{
		version: "directory_v1",
		title: "Admin SDK API",
		description:
			"Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.",
		discoveryRestUrl:
			"https://admin.googleapis.com/$discovery/rest?version=directory_v1",
		documentationLink: "https://developers.google.com/workspace/admin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admin.directory.customer.readonly",
				description: "View customer related information",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.readonly",
				description: "See info about users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.orgunit.readonly",
				description: "View organization units on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly",
				description: "View your ChromeOS devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.mobile.action",
				description:
					"Manage your mobile devices by performing administrative tasks",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.domain.readonly",
				description: "View domains related to your customers",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
				description: "View group subscriptions on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.alias",
				description: "View and manage user aliases on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.userschema",
				description:
					"View and manage the provisioning of user schemas on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.resource.calendar",
				description:
					"View and manage the provisioning of calendar resources on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.security",
				description: "Manage data access permissions for users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.chrome.printers",
				description:
					"See, add, edit, and permanently delete the printers that your organization can use with Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
				description: "View delegated admin roles for your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.userschema.readonly",
				description: "View user schemas on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.chrome.printers.readonly",
				description:
					"See the printers that your organization can use with Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.member",
				description: "View and manage group subscriptions on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group",
				description:
					"View and manage the provisioning of groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.readonly",
				description: "View groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.mobile.readonly",
				description: "View your mobile devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.domain",
				description:
					"View and manage the provisioning of domains for your customers",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.orgunit",
				description: "View and manage organization units on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.mobile",
				description: "View and manage your mobile devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
				description: "View calendar resources on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.customer",
				description: "View and manage customer related information",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.rolemanagement",
				description: "Manage delegated admin roles for your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.chromeos",
				description: "View and manage your ChromeOS devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.alias.readonly",
				description: "View user aliases on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user",
				description: "View and manage the provisioning of users on your domain",
			},
		],
	},
	{
		version: "reports_v1",
		title: "Admin SDK API",
		description:
			"Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.",
		discoveryRestUrl:
			"https://admin.googleapis.com/$discovery/rest?version=reports_v1",
		documentationLink: "https://developers.google.com/workspace/admin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admin.reports.audit.readonly",
				description: "View audit reports for your G Suite domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.reports.usage.readonly",
				description: "View usage reports for your G Suite domain",
			},
		],
	},
	{
		version: "v1beta",
		title: "AdMob API",
		description:
			"The AdMob API allows publishers to programmatically get information about their AdMob account.",
		discoveryRestUrl:
			"https://admob.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://developers.google.com/admob/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admob.report",
				description: "See your AdMob data",
			},
			{
				id: "https://www.googleapis.com/auth/admob.readonly",
				description: "See your AdMob data",
			},
		],
	},
	{
		version: "v1",
		title: "AdMob API",
		description:
			"The AdMob API allows publishers to programmatically get information about their AdMob account.",
		discoveryRestUrl: "https://admob.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/admob/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admob.report",
				description: "See your AdMob data",
			},
			{
				id: "https://www.googleapis.com/auth/admob.readonly",
				description: "See your AdMob data",
			},
		],
	},
	{
		version: "v2",
		title: "AdSense Management API",
		description:
			"The AdSense Management API allows publishers to access their inventory and run earnings and performance reports.",
		discoveryRestUrl:
			"https://adsense.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/adsense/management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adsense",
				description: "View and manage your AdSense data",
			},
			{
				id: "https://www.googleapis.com/auth/adsense.readonly",
				description: "View your AdSense data",
			},
		],
	},
	{
		version: "v1alpha",
		title: "AdSense Platform API",
		description: "",
		discoveryRestUrl:
			"https://adsenseplatform.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://developers.google.com/adsense/platforms/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adsense.readonly",
				description: "View your AdSense data",
			},
			{
				id: "https://www.googleapis.com/auth/adsense",
				description: "View and manage your AdSense data",
			},
		],
	},
	{
		version: "v1",
		title: "AdSense Platform API",
		description: "",
		discoveryRestUrl:
			"https://adsenseplatform.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/adsense/platforms/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adsense",
				description: "View and manage your AdSense data",
			},
			{
				id: "https://www.googleapis.com/auth/adsense.readonly",
				description: "View your AdSense data",
			},
		],
	},
	{
		version: "v1",
		title: "Advisory Notifications API",
		description: "An API for accessing Advisory Notifications in Google Cloud",
		discoveryRestUrl:
			"https://advisorynotifications.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/advisory-notifications",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Vertex AI API",
		description:
			"Train high-quality custom machine learning models with minimal machine learning expertise and effort.",
		discoveryRestUrl:
			"https://aiplatform.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/vertex-ai/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Vertex AI API",
		description:
			"Train high-quality custom machine learning models with minimal machine learning expertise and effort.",
		discoveryRestUrl:
			"https://aiplatform.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/vertex-ai/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Air Quality API",
		description: "The Air Quality API.",
		discoveryRestUrl:
			"https://airquality.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/maps/documentation/air-quality",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Google Workspace Alert Center API",
		description:
			"Manages alerts on issues affecting your domain. Note: The current version of this API (v1beta1) is available to all Google Workspace customers.",
		discoveryRestUrl:
			"https://alertcenter.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://developers.google.com/workspace/admin/alertcenter/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.alerts",
				description:
					"See and delete your domain's G Suite alerts, and send alert feedback",
			},
		],
	},
	{
		version: "v1alpha",
		title: "AlloyDB API",
		description:
			"AlloyDB for PostgreSQL is an open source-compatible database service that provides a powerful option for migrating, modernizing, or building commercial-grade applications. It offers full compatibility with standard PostgreSQL, and is more than 4x faster for transactional workloads and up to 100x faster for analytical queries than standard PostgreSQL in our performance tests. AlloyDB for PostgreSQL offers a 99.99 percent availability SLA inclusive of maintenance. AlloyDB is optimized for the most demanding use cases, allowing you to build new applications that require high transaction throughput, large database sizes, or multiple read resources; scale existing PostgreSQL workloads with no application changes; and modernize legacy proprietary databases.",
		discoveryRestUrl:
			"https://alloydb.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/alloydb/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "AlloyDB API",
		description:
			"AlloyDB for PostgreSQL is an open source-compatible database service that provides a powerful option for migrating, modernizing, or building commercial-grade applications. It offers full compatibility with standard PostgreSQL, and is more than 4x faster for transactional workloads and up to 100x faster for analytical queries than standard PostgreSQL in our performance tests. AlloyDB for PostgreSQL offers a 99.99 percent availability SLA inclusive of maintenance. AlloyDB is optimized for the most demanding use cases, allowing you to build new applications that require high transaction throughput, large database sizes, or multiple read resources; scale existing PostgreSQL workloads with no application changes; and modernize legacy proprietary databases.",
		discoveryRestUrl:
			"https://alloydb.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/alloydb/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "AlloyDB API",
		description:
			"AlloyDB for PostgreSQL is an open source-compatible database service that provides a powerful option for migrating, modernizing, or building commercial-grade applications. It offers full compatibility with standard PostgreSQL, and is more than 4x faster for transactional workloads and up to 100x faster for analytical queries than standard PostgreSQL in our performance tests. AlloyDB for PostgreSQL offers a 99.99 percent availability SLA inclusive of maintenance. AlloyDB is optimized for the most demanding use cases, allowing you to build new applications that require high transaction throughput, large database sizes, or multiple read resources; scale existing PostgreSQL workloads with no application changes; and modernize legacy proprietary databases.",
		discoveryRestUrl:
			"https://alloydb.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/alloydb/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3",
		title: "Google Analytics API",
		description:
			"The Analytics API provides access to Analytics configuration and report data.",
		discoveryRestUrl:
			"https://analytics.googleapis.com/$discovery/rest?version=v3",
		documentationLink:
			"http://code.google.com/apis/analytics/docs/mgmt/home.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/analytics.provision",
				description:
					"Create a new Google Analytics account along with its default property and view",
			},
			{
				id: "https://www.googleapis.com/auth/analytics",
				description: "View and manage your Google Analytics data",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.readonly",
				description: "View your Google Analytics data",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.user.deletion",
				description: "Manage Google Analytics user deletion requests",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.edit",
				description: "Edit Google Analytics management entities",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.manage.users",
				description: "Manage Google Analytics Account users by email address",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.manage.users.readonly",
				description: "View Google Analytics user permissions",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Google Analytics Admin API",
		description:
			"Manage properties in Google Analytics. Warning: Creating multiple Customer Applications, Accounts, or Projects to simulate or act as a single Customer Application, Account, or Project (respectively) or to circumvent Service-specific usage limits or quotas is a direct violation of Google Cloud Platform Terms of Service as well as Google APIs Terms of Service. These actions can result in immediate termination of your GCP project(s) without any warning.",
		discoveryRestUrl:
			"https://analyticsadmin.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"http://code.google.com/apis/analytics/docs/mgmt/home.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/analytics.readonly",
				description: "See and download your Google Analytics data",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.edit",
				description: "Edit Google Analytics management entities",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.manage.users.readonly",
				description: "View Google Analytics user permissions",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.manage.users",
				description: "Manage Google Analytics Account users by email address",
			},
		],
	},
	{
		version: "v1beta",
		title: "Google Analytics Admin API",
		description:
			"Manage properties in Google Analytics. Warning: Creating multiple Customer Applications, Accounts, or Projects to simulate or act as a single Customer Application, Account, or Project (respectively) or to circumvent Service-specific usage limits or quotas is a direct violation of Google Cloud Platform Terms of Service as well as Google APIs Terms of Service. These actions can result in immediate termination of your GCP project(s) without any warning.",
		discoveryRestUrl:
			"https://analyticsadmin.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"http://code.google.com/apis/analytics/docs/mgmt/home.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/analytics.edit",
				description: "Edit Google Analytics management entities",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.readonly",
				description: "See and download your Google Analytics data",
			},
		],
	},
	{
		version: "v1beta",
		title: "Google Analytics Data API",
		description:
			"Accesses report data in Google Analytics. Warning: Creating multiple Customer Applications, Accounts, or Projects to simulate or act as a single Customer Application, Account, or Project (respectively) or to circumvent Service-specific usage limits or quotas is a direct violation of Google Cloud Platform Terms of Service as well as Google APIs Terms of Service. These actions can result in immediate termination of your GCP project(s) without any warning.",
		discoveryRestUrl:
			"https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://developers.google.com/analytics/devguides/reporting/data/v1/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/analytics",
				description: "View and manage your Google Analytics data",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.readonly",
				description: "See and download your Google Analytics data",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Analytics Hub API",
		description: "Exchange data and analytics assets securely and efficiently.",
		discoveryRestUrl:
			"https://analyticshub.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Analytics Hub API",
		description: "Exchange data and analytics assets securely and efficiently.",
		discoveryRestUrl:
			"https://analyticshub.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Android Device Provisioning Partner API",
		description:
			"Automates Android zero-touch enrollment for device resellers, customers, and EMMs.",
		discoveryRestUrl:
			"https://androiddeviceprovisioning.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/zero-touch/",
		scopes: [],
	},
	{
		version: "v1",
		title: "Google Play EMM API",
		description:
			"Manages the deployment of apps to Android Enterprise devices.",
		discoveryRestUrl:
			"https://androidenterprise.googleapis.com/$discovery/rest?version=v1",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidenterprise",
				description: "Manage corporate Android devices",
			},
		],
	},
	{
		version: "v1",
		title: "Android Management API",
		description:
			"The Android Management API provides remote enterprise management of Android devices and apps.",
		discoveryRestUrl:
			"https://androidmanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/android/management",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidmanagement",
				description: "Manage Android devices and apps for your customers",
			},
		],
	},
	{
		version: "v3",
		title: "Google Play Android Developer API",
		description:
			'Lets Android application developers access their Google Play accounts. At a high level, the expected workflow is to "insert" an Edit, make changes as necessary, and then "commit" it.',
		discoveryRestUrl:
			"https://androidpublisher.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://developers.google.com/android-publisher",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		version: "v1beta",
		title: "API Gateway API",
		description: "",
		discoveryRestUrl:
			"https://apigateway.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/api-gateway/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "API Gateway API",
		description: "",
		discoveryRestUrl:
			"https://apigateway.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/api-gateway/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Apigee API",
		description:
			"Use the Apigee API to programmatically develop and manage APIs with a set of RESTful operations. Develop and secure API proxies, deploy and undeploy API proxy revisions, monitor APIs, configure environments, manage users, and more. Note: This product is available as a free trial for a time period of 60 days.",
		discoveryRestUrl:
			"https://apigee.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/apigee-api-management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Apigee Registry API",
		description: "",
		discoveryRestUrl:
			"https://apigeeregistry.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "API hub API",
		description: "",
		discoveryRestUrl:
			"https://apihub.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "API Keys API",
		description: "Manages the API keys associated with developer projects.",
		discoveryRestUrl:
			"https://apikeys.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/api-keys/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1alpha",
		title: "API Management API",
		description:
			"Enables users to discover shadow APIs in existing Google Cloud infrastructure.",
		discoveryRestUrl:
			"https://apim.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/apigee/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "App Engine Admin API",
		description: "Provisions and manages developers' App Engine applications.",
		discoveryRestUrl:
			"https://appengine.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/appengine/docs/admin-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/appengine.admin",
				description:
					"View and manage your applications deployed on Google App Engine",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta",
		title: "App Engine Admin API",
		description: "Provisions and manages developers' App Engine applications.",
		discoveryRestUrl:
			"https://appengine.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/appengine/docs/admin-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/appengine.admin",
				description:
					"View and manage your applications deployed on Google App Engine",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "App Engine Admin API",
		description: "Provisions and manages developers' App Engine applications.",
		discoveryRestUrl:
			"https://appengine.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/appengine/docs/admin-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/appengine.admin",
				description:
					"View and manage your applications deployed on Google App Engine",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1alpha",
		title: "App Hub API",
		description: "",
		discoveryRestUrl:
			"https://apphub.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/app-hub/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "App Hub API",
		description: "",
		discoveryRestUrl:
			"https://apphub.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/app-hub/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Area120 Tables API",
		description: "",
		discoveryRestUrl:
			"https://area120tables.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink:
			"https://support.google.com/area120-tables/answer/10011390",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets.readonly",
				description: "See all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/tables",
				description:
					"See, edit, create, and delete your tables in Tables by Area 120",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
		],
	},
	{
		version: "v1",
		title: "Places Aggregate API",
		description: "Places Aggregate API.",
		discoveryRestUrl:
			"https://areainsights.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/maps/documentation/places-aggregate/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Artifact Registry API",
		description:
			"Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.",
		discoveryRestUrl:
			"https://artifactregistry.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/artifacts/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Artifact Registry API",
		description:
			"Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.",
		discoveryRestUrl:
			"https://artifactregistry.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/artifacts/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Artifact Registry API",
		description:
			"Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.",
		discoveryRestUrl:
			"https://artifactregistry.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/artifacts/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Assured Workloads API",
		description: "",
		discoveryRestUrl:
			"https://assuredworkloads.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/learnmoreurl",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Assured Workloads API",
		description: "",
		discoveryRestUrl:
			"https://assuredworkloads.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/learnmoreurl",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Authorized Buyers Marketplace API",
		description:
			"The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.",
		discoveryRestUrl:
			"https://authorizedbuyersmarketplace.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/authorized-buyers-marketplace",
				description:
					"See, create, edit, and delete your Authorized Buyers Marketplace entities.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Authorized Buyers Marketplace API",
		description:
			"The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.",
		discoveryRestUrl:
			"https://authorizedbuyersmarketplace.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/authorized-buyers-marketplace",
				description:
					"See, create, edit, and delete your Authorized Buyers Marketplace entities.",
			},
		],
	},
	{
		version: "v1",
		title: "Authorized Buyers Marketplace API",
		description:
			"The Authorized Buyers Marketplace API lets buyers programmatically discover inventory; propose, retrieve and negotiate deals with publishers.",
		discoveryRestUrl:
			"https://authorizedbuyersmarketplace.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/authorized-buyers-marketplace",
				description:
					"See, create, edit, and delete your Authorized Buyers Marketplace entities.",
			},
		],
	},
	{
		version: "v1",
		title: "Backup and DR Service API",
		description: "",
		discoveryRestUrl:
			"https://backupdr.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/backup-disaster-recovery",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Bare Metal Solution API",
		description:
			"Provides ways to manage Bare Metal Solution hardware installed in a regional extension located near a Google Cloud data center.",
		discoveryRestUrl:
			"https://baremetalsolution.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/bare-metal",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Batch API",
		description:
			"An API to manage the running of Batch resources on Google Cloud Platform.",
		discoveryRestUrl: "https://batch.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/batch/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "BeyondCorp API",
		description:
			"Chrome Enterprise Premium is a secure enterprise browsing solution that provides secure access to applications and resources, and offers integrated threat and data protection. It adds an extra layer of security to safeguard your Chrome browser environment, including Data Loss Prevention (DLP), real-time URL and file scanning, and Context-Aware Access for SaaS and web apps.",
		discoveryRestUrl:
			"https://beyondcorp.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "BeyondCorp API",
		description:
			"Chrome Enterprise Premium is a secure enterprise browsing solution that provides secure access to applications and resources, and offers integrated threat and data protection. It adds an extra layer of security to safeguard your Chrome browser environment, including Data Loss Prevention (DLP), real-time URL and file scanning, and Context-Aware Access for SaaS and web apps.",
		discoveryRestUrl:
			"https://beyondcorp.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "BigLake API",
		description:
			"The BigLake API provides access to BigLake Metastore, a serverless, fully managed, and highly available metastore for open-source data that can be used for querying Apache Iceberg tables in BigQuery.",
		discoveryRestUrl:
			"https://biglake.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/bigquery/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
		],
	},
	{
		version: "v2",
		title: "BigQuery API",
		description:
			"A data platform for customers to create, manage, share and query data.",
		discoveryRestUrl:
			"https://bigquery.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/bigquery/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery.insertdata",
				description: "Insert data into Google BigQuery",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta1",
		title: "BigQuery Connection API",
		description:
			"Allows users to manage BigQuery connections to external data sources.",
		discoveryRestUrl:
			"https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/connections-api-intro",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "BigQuery Connection API",
		description:
			"Allows users to manage BigQuery connections to external data sources.",
		discoveryRestUrl:
			"https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/connections-api-intro",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "BigQuery Data Policy API",
		description: "Allows users to manage BigQuery data policies.",
		discoveryRestUrl:
			"https://bigquerydatapolicy.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/column-data-masking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "BigQuery Data Policy API",
		description: "Allows users to manage BigQuery data policies.",
		discoveryRestUrl:
			"https://bigquerydatapolicy.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://cloud.google.com/bigquery/docs/column-data-masking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "BigQuery Data Transfer API",
		description:
			"Schedule queries or transfer external data from SaaS applications to Google BigQuery on a regular basis.",
		discoveryRestUrl:
			"https://bigquerydatatransfer.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/bigquery-transfer/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "BigQuery Reservation API",
		description: "A service to modify your BigQuery reservations.",
		discoveryRestUrl:
			"https://bigqueryreservation.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/bigquery/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Bigtable Admin API",
		description: "Administer your Cloud Bigtable tables and instances.",
		discoveryRestUrl:
			"https://bigtableadmin.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/bigtable/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin.table",
				description: "Administer your Cloud Bigtable tables",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.instance",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin",
				description: "Administer your Cloud Bigtable tables and clusters",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.cluster",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.table",
				description: "Administer your Cloud Bigtable tables",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin.cluster",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin",
				description: "Administer your Cloud Bigtable tables and clusters",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Billing Budget API",
		description:
			"The Cloud Billing Budget API stores Cloud Billing budgets, which define a budget plan and the rules to execute as spend is tracked against that plan.",
		discoveryRestUrl:
			"https://billingbudgets.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/billing/docs/how-to/budget-api-overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-billing",
				description:
					"View and manage your Google Cloud Platform billing accounts",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Billing Budget API",
		description:
			"The Cloud Billing Budget API stores Cloud Billing budgets, which define a budget plan and the rules to execute as spend is tracked against that plan.",
		discoveryRestUrl:
			"https://billingbudgets.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/billing/docs/how-to/budget-api-overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-billing",
				description:
					"View and manage your Google Cloud Platform billing accounts",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Binary Authorization API",
		description:
			"The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.",
		discoveryRestUrl:
			"https://binaryauthorization.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/binary-authorization/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Binary Authorization API",
		description:
			"The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.",
		discoveryRestUrl:
			"https://binaryauthorization.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/binary-authorization/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Blockchain Node Engine API",
		description: "",
		discoveryRestUrl:
			"https://blockchainnodeengine.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/blockchain-node-engine",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3",
		title: "Blogger API",
		description:
			"The Blogger API provides access to posts, comments and pages of a Blogger blog.",
		discoveryRestUrl:
			"https://blogger.googleapis.com/$discovery/rest?version=v3",
		documentationLink:
			"https://developers.google.com/blogger/docs/3.0/getting_started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/blogger.readonly",
				description: "View your Blogger account",
			},
			{
				id: "https://www.googleapis.com/auth/blogger",
				description: "Manage your Blogger account",
			},
		],
	},
	{
		version: "v1",
		title: "Books API",
		description:
			"The Google Books API allows clients to access the Google Books repository.",
		discoveryRestUrl: "https://books.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://code.google.com/apis/books/docs/v1/getting_started.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/books",
				description: "Manage your books",
			},
		],
	},
	{
		version: "v1",
		title: "Business Profile Performance API",
		description:
			"The Business Profile Performance API allows merchants to fetch performance reports about their business profile on Google. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://businessprofileperformance.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v3",
		title: "Google Calendar API",
		description:
			"The Google Calendar API lets you manage your calendars and events.",
		discoveryRestUrl:
			"https://calendar-json.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "http://code.google.com/apis/calendar/v3/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/calendar.events.owned.readonly",
				description: "See the events on Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendars",
				description:
					"See and change the properties of Google calendars you have access to, and create secondary calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendars.readonly",
				description:
					"See the title, description, default time zone, and other properties of Google calendars you have access to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.app.created",
				description:
					"Make secondary Google calendars, and see, create, change, and delete events on them",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.acls",
				description:
					"See and change the sharing permissions of Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.public.readonly",
				description: "See the events on public calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events",
				description: "View and edit events on all your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar",
				description:
					"See, edit, share, and permanently delete all the calendars you can access using Google Calendar",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.owned",
				description:
					"See, create, change, and delete events on Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.readonly",
				description:
					"See and download any calendar you can access using your Google Calendar",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendarlist.readonly",
				description: "See the list of Google calendars you’re subscribed to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.freebusy",
				description: "View your availability in your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendarlist",
				description:
					"See, add, and remove Google calendars you’re subscribed to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.freebusy",
				description:
					"See the availability on Google calendars you have access to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.settings.readonly",
				description: "View your Calendar settings",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.readonly",
				description: "View events on all your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.acls.readonly",
				description: "See the sharing permissions of Google calendars you own",
			},
		],
	},
	{
		version: "v1",
		title: "Certificate Manager API",
		description: "",
		discoveryRestUrl:
			"https://certificatemanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/certificate-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Chat API",
		description:
			"The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.",
		discoveryRestUrl: "https://chat.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/chat",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chat.messages.readonly",
				description:
					"See messages as well as their reactions and message content in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.spaces",
				description:
					"View or edit display name, description, and other metadata for all Google Chat conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.bot",
				description:
					"Private Service: https://www.googleapis.com/auth/chat.bot",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships.readonly",
				description: "View members in Google Chat conversations.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages",
				description:
					"See, compose, send, update, and delete messages as well as their message content; add, see, and delete reactions to messages.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.memberships.readonly",
				description:
					"View members and managers in conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.delete",
				description:
					"Delete conversations and spaces and remove access to associated files in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.spaces.readonly",
				description:
					"View display name, description, and other metadata for all Google Chat conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions",
				description:
					"See, add, and delete reactions as well as their reaction content to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.memberships",
				description:
					"View, add, update and remove members and managers in conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces.create",
				description: "Create new conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.delete",
				description:
					"On their own behalf, apps in Google Chat can delete conversations and spaces and remove access to associated files",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions.readonly",
				description:
					"View reactions as well as their reaction content to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.customemojis",
				description: "View, create, and delete custom emoji in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.spaces",
				description:
					"On their own behalf, apps in Google Chat can create conversations and spaces and see or update their metadata (including history settings and access settings)",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces.readonly",
				description: "View chat and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.spacesettings",
				description: "Read and update your space settings",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.delete",
				description:
					"Delete conversations and spaces owned by your organization and remove access to associated files in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.customemojis.readonly",
				description: "View custom emoji in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.readstate.readonly",
				description: "View last read time for Google Chat conversations",
			},
			{
				id: "https://www.googleapis.com/auth/chat.import",
				description:
					"Import spaces, messages, and memberships into Google Chat.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.create",
				description: "Compose and send messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships",
				description:
					"See, add, update, and remove members from conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions.create",
				description: "Add reactions to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships.app",
				description:
					"Add and remove itself from conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.messages.readonly",
				description:
					"On their own behalf, apps in Google Chat can see all messages and their associated reactions and message content",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.memberships",
				description:
					"On their own behalf, apps in Google Chat can see, add, update, and remove members from conversations and spaces",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces",
				description:
					"Create conversations and spaces and see or update metadata (including history settings and access settings) in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.readstate",
				description:
					"View and modify last read time for Google Chat conversations",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.spaces.create",
				description:
					"On their own behalf, apps in Google Chat can create conversations and spaces",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Checks API",
		description:
			"The Checks API contains powerful and easy-to-use privacy and compliance APIs that interact with the Checks product and its underlying technology.",
		discoveryRestUrl:
			"https://checks.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://developers.google.com/checks",
		scopes: [],
	},
	{
		version: "v1",
		title: "Chrome Management API",
		description:
			"The Chrome Management API is a suite of services that allows Chrome administrators to view, manage and gain insights on their Chrome OS and Chrome Browser devices.",
		discoveryRestUrl:
			"https://chromemanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/chrome/management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chrome.management.reports.readonly",
				description:
					"See reports about devices and Chrome browsers managed within your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.profiles.readonly",
				description: "See Chrome browser profiles managed by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.telemetry.readonly",
				description:
					"See basic device and telemetry information collected from ChromeOS devices or users managed within your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.profiles",
				description:
					"See, edit, delete, and take other necessary actions on Chrome browser profiles managed by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.appdetails.readonly",
				description:
					"See detailed information about apps installed on Chrome browsers and devices managed by your organization",
			},
		],
	},
	{
		version: "v1",
		title: "Chrome Policy API",
		description:
			"The Chrome Policy API is a suite of services that allows Chrome administrators to control the policies applied to their managed Chrome OS devices and Chrome browsers.",
		discoveryRestUrl:
			"https://chromepolicy.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "http://developers.google.com/chrome/policy",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chrome.management.policy.readonly",
				description:
					"See policies applied to ChromeOS and Chrome Browsers managed within your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.policy",
				description:
					"See, edit, create or delete policies applied to ChromeOS and Chrome Browsers managed within your organization",
			},
		],
	},
	{
		version: "v1",
		title: "Chrome UX Report API",
		description:
			"The Chrome UX Report API lets you view real user experience data for millions of websites.",
		discoveryRestUrl:
			"https://chromeuxreport.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/web/tools/chrome-user-experience-report/api/reference",
		scopes: [],
	},
	{
		version: "v1.1",
		title: "Chrome Web Store API",
		description:
			"The Chrome Web Store API provides access to data about apps and extensions, as well as developer tools for managing them.",
		discoveryRestUrl:
			"https://chromewebstore.googleapis.com/$discovery/rest?version=v1.1",
		documentationLink: "https://developer.chrome.com/docs/webstore/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chromewebstore",
				description:
					"See, edit, update, or publish your Chrome Web Store extensions, themes, apps, and licences you have access to",
			},
			{
				id: "https://www.googleapis.com/auth/chromewebstore.readonly",
				description:
					"See and download your Chrome Web Store extensions and apps, and see licenses you have access to",
			},
		],
	},
	{
		version: "v2",
		title: "Chrome Web Store API",
		description:
			"The Chrome Web Store API provides access to data about apps and extensions, as well as developer tools for managing them.",
		discoveryRestUrl:
			"https://chromewebstore.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developer.chrome.com/docs/webstore/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chromewebstore",
				description:
					"See, edit, update, or publish your Chrome Web Store extensions, themes, apps, and licences you have access to",
			},
			{
				id: "https://www.googleapis.com/auth/chromewebstore.readonly",
				description:
					"See and download your Chrome Web Store extensions and apps, and see licenses you have access to",
			},
		],
	},
	{
		version: "v2",
		title: "Google Civic Information API",
		description:
			"Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.",
		discoveryRestUrl:
			"https://civicinfo.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/civic-information/",
		scopes: [],
	},
	{
		version: "v1",
		title: "Google Classroom API",
		description:
			"Manages classes, rosters, and invitations in Google Classroom.",
		discoveryRestUrl:
			"https://classroom.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/classroom",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.students",
				description:
					"Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly",
				description:
					"View guardians for students in your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.profile.emails",
				description: "View the email addresses of people in your classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.students.readonly",
				description:
					"View course work and grades for students in the Google Classroom classes you teach or administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.topics.readonly",
				description: "View topics in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.announcements",
				description: "View and manage announcements in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
				description: "View your course work and grades in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
				description: "View your course work and grades in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly",
				description: "View your Google Classroom guardians",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.push-notifications",
				description: "Receive notifications about your Google Classroom data",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.me",
				description:
					"See, create and edit coursework items including assignments, questions, and grades",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.student-submissions.students.readonly",
				description:
					"View course work and grades for students in the Google Classroom classes you teach or administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.guardianlinks.students",
				description:
					"View and manage guardians for students in your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courses",
				description:
					"See, edit, create, and permanently delete your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.rosters",
				description: "Manage your Google Classroom class rosters",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.announcements.readonly",
				description: "View announcements in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courses.readonly",
				description: "View your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly",
				description:
					"See all classwork materials for your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.rosters.readonly",
				description: "View your Google Classroom class rosters",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courseworkmaterials",
				description:
					"See, edit, and create classwork materials in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.profile.photos",
				description: "View the profile photos of people in your classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.addons.student",
				description:
					"See and update its own attachments to posts in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.topics",
				description: "See, create, and edit topics in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.addons.teacher",
				description:
					"See, create, and update its own attachments to posts in classes you teach in Google Classroom",
			},
		],
	},
	{
		version: "v1p1beta1",
		title: "Cloud Asset API",
		description:
			"The Cloud Asset API manages the history and inventory of Google Cloud resources.",
		discoveryRestUrl:
			"https://cloudasset.googleapis.com/$discovery/rest?version=v1p1beta1",
		documentationLink:
			"https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1p5beta1",
		title: "Cloud Asset API",
		description:
			"The Cloud Asset API manages the history and inventory of Google Cloud resources.",
		discoveryRestUrl:
			"https://cloudasset.googleapis.com/$discovery/rest?version=v1p5beta1",
		documentationLink:
			"https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1p7beta1",
		title: "Cloud Asset API",
		description:
			"The Cloud Asset API manages the history and inventory of Google Cloud resources.",
		discoveryRestUrl:
			"https://cloudasset.googleapis.com/$discovery/rest?version=v1p7beta1",
		documentationLink:
			"https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Asset API",
		description:
			"The Cloud Asset API manages the history and inventory of Google Cloud resources.",
		discoveryRestUrl:
			"https://cloudasset.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Asset API",
		description:
			"The Cloud Asset API manages the history and inventory of Google Cloud resources.",
		discoveryRestUrl:
			"https://cloudasset.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Cloud Billing API",
		description:
			"Allows developers to manage billing for their Google Cloud Platform projects programmatically.",
		discoveryRestUrl:
			"https://cloudbilling.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/billing/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-billing",
				description:
					"View and manage your Google Cloud Platform billing accounts",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-billing.readonly",
				description: "View your Google Cloud Platform billing accounts",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Billing API",
		description:
			"Allows developers to manage billing for their Google Cloud Platform projects programmatically.",
		discoveryRestUrl:
			"https://cloudbilling.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/billing/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-billing.readonly",
				description: "View your Google Cloud Platform billing accounts",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-billing",
				description:
					"View and manage your Google Cloud Platform billing accounts",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Build API",
		description: "Creates and manages builds on Google Cloud Platform.",
		discoveryRestUrl:
			"https://cloudbuild.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/cloud-build/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Build API",
		description: "Creates and manages builds on Google Cloud Platform.",
		discoveryRestUrl:
			"https://cloudbuild.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/cloud-build/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Channel API",
		description:
			"The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.",
		discoveryRestUrl:
			"https://cloudchannel.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/channel",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.reports.usage.readonly",
				description: "View usage reports for your G Suite domain",
			},
			{
				id: "https://www.googleapis.com/auth/apps.order",
				description: "Manage users on your domain",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Commerce Partner Procurement API",
		description: "Partner API for the Cloud Commerce Procurement Service.",
		discoveryRestUrl:
			"https://cloudcommerceprocurement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/marketplace/docs/partners/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Cloud Controls Partner API",
		description:
			"Provides insights about your customers and their Assured Workloads based on your Sovereign Controls by Partners offering.",
		discoveryRestUrl:
			"https://cloudcontrolspartner.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Controls Partner API",
		description:
			"Provides insights about your customers and their Assured Workloads based on your Sovereign Controls by Partners offering.",
		discoveryRestUrl:
			"https://cloudcontrolspartner.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Deploy API",
		description: "",
		discoveryRestUrl:
			"https://clouddeploy.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/deploy/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Error Reporting API",
		description:
			"Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.",
		discoveryRestUrl:
			"https://clouderrorreporting.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/error-reporting/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2alpha",
		title: "Cloud Functions API",
		description:
			"Manages lightweight user-provided functions executed in response to events.",
		discoveryRestUrl:
			"https://cloudfunctions.googleapis.com/$discovery/rest?version=v2alpha",
		documentationLink: "https://cloud.google.com/functions",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "Cloud Functions API",
		description:
			"Manages lightweight user-provided functions executed in response to events.",
		discoveryRestUrl:
			"https://cloudfunctions.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/functions",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Functions API",
		description:
			"Manages lightweight user-provided functions executed in response to events.",
		discoveryRestUrl:
			"https://cloudfunctions.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/functions",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Functions API",
		description:
			"Manages lightweight user-provided functions executed in response to events.",
		discoveryRestUrl:
			"https://cloudfunctions.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/functions",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Identity API",
		description: "API for provisioning and managing identity resources.",
		discoveryRestUrl:
			"https://cloudidentity.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/identity/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices.readonly",
				description:
					"Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies",
				description:
					"See and edit policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso.readonly",
				description:
					"See all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.orgunits.readonly",
				description:
					"List org members of an OrgUnit in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups.readonly",
				description:
					"See any Cloud Identity Groups that you can access, including group members and their emails",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices",
				description:
					"Private Service: https://www.googleapis.com/auth/cloud-identity.devices",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso",
				description:
					"See and edit all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies.readonly",
				description: "See policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups",
				description:
					"See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices.lookup",
				description: "See your device details",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.orgunits",
				description:
					"List, Move orgmembers of an OrgUnit in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Identity API",
		description: "API for provisioning and managing identity resources.",
		discoveryRestUrl:
			"https://cloudidentity.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/identity/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices",
				description:
					"Private Service: https://www.googleapis.com/auth/cloud-identity.devices",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups.readonly",
				description:
					"See any Cloud Identity Groups that you can access, including group members and their emails",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices.readonly",
				description:
					"Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices.lookup",
				description: "See your device details",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso",
				description:
					"See and edit all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies.readonly",
				description: "See policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups",
				description:
					"See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies",
				description:
					"See and edit policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso.readonly",
				description:
					"See all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Key Management Service (KMS) API",
		description:
			"Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.",
		discoveryRestUrl:
			"https://cloudkms.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/kms/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloudkms",
				description:
					"View and manage your keys and secrets stored in Cloud Key Management Service",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Cloud Location Finder API",
		description: "",
		discoveryRestUrl:
			"https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/location-finder/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Location Finder API",
		description: "",
		discoveryRestUrl:
			"https://cloudlocationfinder.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/location-finder/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Profiler API",
		description: "Manages continuous profiling information.",
		discoveryRestUrl:
			"https://cloudprofiler.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/profiler/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring",
				description:
					"View and write monitoring data for all of your Google and third-party Cloud and API projects",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring.write",
				description: "Publish metric data to your Google Cloud projects",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Resource Manager API",
		description:
			"Creates, reads, and updates metadata for Google Cloud Platform resource containers.",
		discoveryRestUrl:
			"https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/resource-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v2beta1",
		title: "Cloud Resource Manager API",
		description:
			"Creates, reads, and updates metadata for Google Cloud Platform resource containers.",
		discoveryRestUrl:
			"https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v2beta1",
		documentationLink: "https://cloud.google.com/resource-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Resource Manager API",
		description:
			"Creates, reads, and updates metadata for Google Cloud Platform resource containers.",
		discoveryRestUrl:
			"https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/resource-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Resource Manager API",
		description:
			"Creates, reads, and updates metadata for Google Cloud Platform resource containers.",
		discoveryRestUrl:
			"https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/resource-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v3",
		title: "Cloud Resource Manager API",
		description:
			"Creates, reads, and updates metadata for Google Cloud Platform resource containers.",
		discoveryRestUrl:
			"https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/resource-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Scheduler API",
		description:
			"Creates and manages jobs run on a regular recurring schedule.",
		discoveryRestUrl:
			"https://cloudscheduler.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/scheduler/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Scheduler API",
		description:
			"Creates and manages jobs run on a regular recurring schedule.",
		discoveryRestUrl:
			"https://cloudscheduler.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/scheduler/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Search API",
		description:
			"Cloud Search provides cloud-based search capabilities over Google Workspace data. The Cloud Search API allows indexing of non-Google Workspace data into Cloud Search.",
		discoveryRestUrl:
			"https://cloudsearch.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/workspace/cloud-search/docs/guides/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud_search",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.debug",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.indexing",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.query",
				description:
					"Search your organization's data in the Cloud Search index",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.settings",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.settings.indexing",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.settings.query",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.stats",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.stats.indexing",
				description:
					"Index and serve your organization's data with Cloud Search",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Shell API",
		description:
			"Allows users to start, configure, and connect to interactive shell sessions running in the cloud.",
		discoveryRestUrl:
			"https://cloudshell.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/shell/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "Google Cloud Support API",
		description:
			"Manages Google Cloud technical support cases for Customer Care support offerings.",
		discoveryRestUrl:
			"https://cloudsupport.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/support/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Google Cloud Support API",
		description:
			"Manages Google Cloud technical support cases for Customer Care support offerings.",
		discoveryRestUrl:
			"https://cloudsupport.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/support/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta2",
		title: "Cloud Tasks API",
		description:
			"Manages the execution of large numbers of distributed requests.",
		discoveryRestUrl:
			"https://cloudtasks.googleapis.com/$discovery/rest?version=v2beta2",
		documentationLink: "https://cloud.google.com/tasks/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta3",
		title: "Cloud Tasks API",
		description:
			"Manages the execution of large numbers of distributed requests.",
		discoveryRestUrl:
			"https://cloudtasks.googleapis.com/$discovery/rest?version=v2beta3",
		documentationLink: "https://cloud.google.com/tasks/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Tasks API",
		description:
			"Manages the execution of large numbers of distributed requests.",
		discoveryRestUrl:
			"https://cloudtasks.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/tasks/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta1",
		title: "Cloud Trace API",
		description:
			"Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Cloud Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenTelemetry.",
		discoveryRestUrl:
			"https://cloudtrace.googleapis.com/$discovery/rest?version=v2beta1",
		documentationLink: "https://cloud.google.com/trace/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/trace.append",
				description: "Write Trace data for a project or application",
			},
			{
				id: "https://www.googleapis.com/auth/trace.readonly",
				description: "Read Trace data for a project or application",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Trace API",
		description:
			"Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Cloud Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenTelemetry.",
		discoveryRestUrl:
			"https://cloudtrace.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/trace/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/trace.append",
				description: "Write Trace data for a project or application",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/trace.readonly",
				description: "Read Trace data for a project or application",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Trace API",
		description:
			"Sends application trace data to Cloud Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API. This library is used to interact with the Cloud Trace API directly. If you are looking to instrument your application for Cloud Trace, we recommend using OpenTelemetry.",
		discoveryRestUrl:
			"https://cloudtrace.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/trace/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/trace.append",
				description: "Write Trace data for a project or application",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Composer API",
		description:
			"Manages Apache Airflow environments on Google Cloud Platform.",
		discoveryRestUrl:
			"https://composer.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/composer/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Composer API",
		description:
			"Manages Apache Airflow environments on Google Cloud Platform.",
		discoveryRestUrl:
			"https://composer.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/composer/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "alpha",
		title: "Compute Engine API",
		description: "Creates and runs virtual machines on Google Cloud Platform.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/compute/alpha/rest",
		documentationLink:
			"https://developers.google.com/compute/docs/reference/latest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
		],
	},
	{
		version: "beta",
		title: "Compute Engine API",
		description: "Creates and runs virtual machines on Google Cloud Platform.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/compute/beta/rest",
		documentationLink:
			"https://developers.google.com/compute/docs/reference/latest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Compute Engine API",
		description: "Creates and runs virtual machines on Google Cloud Platform.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/compute/v1/rest",
		documentationLink:
			"https://developers.google.com/compute/docs/reference/latest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
		],
	},
	{
		version: "v1",
		title: "Infrastructure Manager API",
		description:
			"Creates and manages Google Cloud Platform resources and infrastructure.",
		discoveryRestUrl:
			"https://config.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/infrastructure-manager/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Connectors API",
		description:
			"Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.",
		discoveryRestUrl:
			"https://connectors.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Connectors API",
		description:
			"Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.",
		discoveryRestUrl:
			"https://connectors.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Contact Center AI Platform API",
		description: "",
		discoveryRestUrl:
			"https://contactcenteraiplatform.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink:
			"https://cloud.google.com/solutions/contact-center-ai-platform",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Contact Center AI Insights API",
		description: "",
		discoveryRestUrl:
			"https://contactcenterinsights.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/contact-center/insights/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Kubernetes Engine API",
		description:
			"Builds and manages container-based applications, powered by the open source Kubernetes technology.",
		discoveryRestUrl:
			"https://container.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/kubernetes-engine/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Kubernetes Engine API",
		description:
			"Builds and manages container-based applications, powered by the open source Kubernetes technology.",
		discoveryRestUrl:
			"https://container.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/kubernetes-engine/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Container Analysis API",
		description:
			"This API is a prerequisite for leveraging Artifact Analysis scanning capabilities in Artifact Registry. In addition, the Container Analysis API is an implementation of the Grafeas API, which enables storing, querying, and retrieval of critical metadata about all of your software artifacts.",
		discoveryRestUrl:
			"https://containeranalysis.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink:
			"https://cloud.google.com/container-analysis/api/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Container Analysis API",
		description:
			"This API is a prerequisite for leveraging Artifact Analysis scanning capabilities in Artifact Registry. In addition, the Container Analysis API is an implementation of the Grafeas API, which enables storing, querying, and retrieval of critical metadata about all of your software artifacts.",
		discoveryRestUrl:
			"https://containeranalysis.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/container-analysis/api/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Container Analysis API",
		description:
			"This API is a prerequisite for leveraging Artifact Analysis scanning capabilities in Artifact Registry. In addition, the Container Analysis API is an implementation of the Grafeas API, which enables storing, querying, and retrieval of critical metadata about all of your software artifacts.",
		discoveryRestUrl:
			"https://containeranalysis.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/container-analysis/api/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2.1",
		title: "Content API for Shopping",
		description:
			"This API is deprecated. Please use Merchant API instead: https://developers.google.com/merchant/api.",
		discoveryRestUrl:
			"https://shoppingcontent.googleapis.com/$discovery/rest?version=v2.1",
		documentationLink: "https://developers.google.com/shopping-content/v2/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "v1",
		title: "Document AI Warehouse API",
		description: "",
		discoveryRestUrl:
			"https://contentwarehouse.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/document-warehouse",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "CSS API",
		description:
			"Programmatically manage your Comparison Shopping Service (CSS) account data at scale.",
		discoveryRestUrl: "https://css.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/comparison-shopping-services/api/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "v1",
		title: "Custom Search API",
		description: "Searches over a website or collection of websites",
		discoveryRestUrl:
			"https://customsearch.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/custom-search/v1/introduction",
		scopes: [],
	},
	{
		version: "v1beta1",
		title: "Google Cloud Data Catalog API",
		description:
			"A fully managed and highly scalable data discovery and metadata management service.",
		discoveryRestUrl:
			"https://datacatalog.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/data-catalog/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Cloud Data Catalog API",
		description:
			"A fully managed and highly scalable data discovery and metadata management service.",
		discoveryRestUrl:
			"https://datacatalog.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/data-catalog/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1b3",
		title: "Dataflow API",
		description:
			"Manages Google Cloud Dataflow projects on Google Cloud Platform.",
		discoveryRestUrl:
			"https://dataflow.googleapis.com/$discovery/rest?version=v1b3",
		documentationLink: "https://cloud.google.com/dataflow",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Dataform API",
		description:
			"Service to develop, version control, and operationalize SQL pipelines in BigQuery.",
		discoveryRestUrl:
			"https://dataform.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/dataform/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Dataform API",
		description:
			"Service to develop, version control, and operationalize SQL pipelines in BigQuery.",
		discoveryRestUrl:
			"https://dataform.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/dataform/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Data Fusion API",
		description:
			"Cloud Data Fusion is a fully-managed, cloud native, enterprise data integration service for quickly building and managing data pipelines. It provides a graphical interface to increase time efficiency and reduce complexity, and allows business users, developers, and data scientists to easily and reliably build scalable data integration solutions to cleanse, prepare, blend, transfer and transform data without having to wrestle with infrastructure.",
		discoveryRestUrl:
			"https://datafusion.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/data-fusion/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Data Fusion API",
		description:
			"Cloud Data Fusion is a fully-managed, cloud native, enterprise data integration service for quickly building and managing data pipelines. It provides a graphical interface to increase time efficiency and reduce complexity, and allows business users, developers, and data scientists to easily and reliably build scalable data integration solutions to cleanse, prepare, blend, transfer and transform data without having to wrestle with infrastructure.",
		discoveryRestUrl:
			"https://datafusion.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/data-fusion/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Data Labeling API",
		description: "Public API for Google Cloud AI Data Labeling Service.",
		discoveryRestUrl:
			"https://datalabeling.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/data-labeling/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Data Lineage API",
		description: "",
		discoveryRestUrl:
			"https://datalineage.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/data-catalog",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Data Manager API",
		description:
			"A unified ingestion API for data partners, agencies and advertisers to connect first-party data across Google advertising products.",
		discoveryRestUrl:
			"https://datamanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/data-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/datamanager",
				description:
					"See, edit, create, import, or delete your customer data in Google Ads, Google Marketing Platform (Campaign Manager 360, Search Ads 360, Display & Video 360), and Google Analytics",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Database Migration API",
		description:
			"Manage Cloud Database Migration Service resources on Google Cloud Platform.",
		discoveryRestUrl:
			"https://datamigration.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/database-migration/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Database Migration API",
		description:
			"Manage Cloud Database Migration Service resources on Google Cloud Platform.",
		discoveryRestUrl:
			"https://datamigration.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/database-migration/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Data pipelines API",
		description:
			"Data Pipelines provides an interface for creating, updating, and managing recurring Data Analytics jobs.",
		discoveryRestUrl:
			"https://datapipelines.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/dataflow/docs/guides/data-pipelines",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Dataplex API",
		description:
			"A unified, intelligent governance solution for data and AI assets.",
		discoveryRestUrl:
			"https://dataplex.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/dataplex/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Data Portability API",
		description:
			"The Data Portability API lets you build applications that request authorization from a user to move a copy of data from Google services into your application. This enables data portability and facilitates switching services.",
		discoveryRestUrl:
			"https://dataportability.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://developers.google.com/data-portability",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.reviews",
				description:
					"Move a copy of reviews you wrote about products or online stores on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.commute_routes",
				description: "Move a copy of your pinned trips on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.redemptions",
				description:
					"Move a copy of your Google Play Store redemption activities",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.history",
				description: "Move a copy of sites you visited in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.not_interested",
				description:
					"Move a copy of content you marked as not interested, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.starred_places",
				description: "Move a copy of your Starred places list on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs",
				description:
					"Move a copy of your indicated thumbs up and thumbs down on media in Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.installs",
				description: "Move a copy of your Google Play Store app installations",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.streetview.imagery",
				description:
					"Move a copy of the images and videos you uploaded to Street View",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.searchnotifications.settings",
				description:
					"Move a copy of your notification settings on the Google Search app",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.grouping",
				description:
					"Move a copy of your Google Play Store Grouping tags created by app developers",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.reading_list",
				description:
					"Move a copy of pages you added to your reading list in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.extensions",
				description:
					"Move a copy of extensions you installed from the Chrome Web Store",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.commute_settings",
				description: "Move a copy of your commute settings on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.live_chat",
				description: "Move a copy of your YouTube messages in live chat",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.library",
				description:
					"Move a copy of your Google Play Store downloads, including books, games, and apps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos",
				description:
					"Move a copy of your unlisted YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.ev_profile",
				description: "Move a copy of your electric vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.devices",
				description:
					"Move a copy of information about your devices with Google Play Store installed",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.vehicle_profile",
				description: "Move a copy of your vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.clips",
				description: "Move a copy of your YouTube clips metadata",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.aliased_places",
				description: "Move a copy of the places you labeled on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.saved.collections",
				description:
					"Move a copy of your saved links, images, places, and collections from your use of Google services",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.maps",
				description: "Move a copy of your Maps activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_videos",
				description:
					"Move a copy of your private YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.subscriptions",
				description: "Move a copy of your Google Play Store subscriptions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.bookmarks",
				description: "Move a copy of pages you bookmarked in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.playable",
				description:
					"Move a copy of your YouTube playables saved game progress files",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers",
				description:
					"Move a copy of your self-reported video streaming provider preferences from Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.youtube",
				description: "Move a copy of your YouTube activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations",
				description:
					"Move a copy of your food purchase and reservation activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_playlists",
				description: "Move a copy of your YouTube private playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.settings",
				description: "Move a copy of your settings in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.channel",
				description: "Move a copy of information about your YouTube channel",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.questions_answers",
				description:
					"Move a copy of the questions and answers you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.promotions",
				description:
					"Move a copy of information about your Google Play Store promotions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.watched",
				description:
					"Move a copy of information about the movies and TV shows you marked as watched on Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.factual_contributions",
				description:
					"Move a copy of the corrections you made to places or map information on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_playlists",
				description: "Move a copy of your public YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.posts",
				description: "Move a copy of your YouTube posts",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.myadcenter",
				description: "Move a copy of your My Ad Center activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.likes",
				description:
					"Move a copy of links to your liked documents, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.usersettings",
				description:
					"Move a copy of your Google Play Store user settings and preferences",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.purchases",
				description: "Move a copy of your Google Play Store purchases",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.comments",
				description: "Move a copy of your YouTube comments",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.alerts.subscriptions",
				description:
					"Move a copy of the Google Alerts subscriptions you created",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.autofill",
				description:
					"Move a copy of the information you entered into online forms in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.search",
				description: "Move a copy of your Google Search activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.play",
				description: "Move a copy of your Google Play activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.mymaps.maps",
				description: "Move a copy of the maps you created in My Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars",
				description: "Move a copy of your media reviews on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.playpoints",
				description:
					"Move a copy of information about your Google Play Store Points",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.follows",
				description:
					"Move a copy of searches and sites you follow, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.dictionary",
				description: "Move a copy of words you added to Chrome's dictionary",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.shopping",
				description: "Move a copy of your Shopping activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.offering_contributions",
				description: "Move a copy of your updates to places on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists",
				description: "Move a copy of your unlisted YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.music",
				description:
					"Move a copy of your uploaded YouTube music tracks and your YouTube music library",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.shopping",
				description:
					"Move a copy of your YouTube shopping wishlists, and wishlist items",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_videos",
				description:
					"Move a copy of your public YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.comments",
				description: "Move a copy of your comments on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.reviews",
				description: "Move a copy of your reviews and posts on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.addresses",
				description: "Move a copy of your shipping information on Shopping",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions",
				description:
					"Move a copy of your notification subscriptions on Google Search app",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.photos_videos",
				description: "Move a copy of the photos and videos you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.subscriptions",
				description:
					"Move a copy of your YouTube channel subscriptions, even if they're private",
			},
		],
	},
	{
		version: "v1",
		title: "Data Portability API",
		description:
			"The Data Portability API lets you build applications that request authorization from a user to move a copy of data from Google services into your application. This enables data portability and facilitates switching services.",
		discoveryRestUrl:
			"https://dataportability.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/data-portability",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/dataportability.play.grouping",
				description:
					"Move a copy of your Google Play Store Grouping tags created by app developers",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.comments",
				description: "Move a copy of your comments on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.commute_routes",
				description: "Move a copy of your pinned trips on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.commute_settings",
				description: "Move a copy of your commute settings on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.promotions",
				description:
					"Move a copy of information about your Google Play Store promotions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.subscriptions",
				description: "Move a copy of your Google Play Store subscriptions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.factual_contributions",
				description:
					"Move a copy of the corrections you made to places or map information on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.follows",
				description:
					"Move a copy of searches and sites you follow, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.devices",
				description:
					"Move a copy of information about your devices with Google Play Store installed",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations",
				description:
					"Move a copy of your food purchase and reservation activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.streetview.imagery",
				description:
					"Move a copy of the images and videos you uploaded to Street View",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.reviews",
				description: "Move a copy of your reviews and posts on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.aliased_places",
				description: "Move a copy of the places you labeled on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.purchases",
				description: "Move a copy of your Google Play Store purchases",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.addresses",
				description: "Move a copy of your shipping information on Shopping",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.music",
				description:
					"Move a copy of your uploaded YouTube music tracks and your YouTube music library",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists",
				description: "Move a copy of your unlisted YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.library",
				description:
					"Move a copy of your Google Play Store downloads, including books, games, and apps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.dictionary",
				description: "Move a copy of words you added to Chrome's dictionary",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.history",
				description: "Move a copy of sites you visited in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.not_interested",
				description:
					"Move a copy of content you marked as not interested, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.posts",
				description: "Move a copy of your YouTube posts",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.likes",
				description:
					"Move a copy of links to your liked documents, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.extensions",
				description:
					"Move a copy of extensions you installed from the Chrome Web Store",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.live_chat",
				description: "Move a copy of your YouTube messages in live chat",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.reviews",
				description:
					"Move a copy of reviews you wrote about products or online stores on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.playable",
				description:
					"Move a copy of your YouTube playables saved game progress files",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.search",
				description: "Move a copy of your Google Search activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.alerts.subscriptions",
				description:
					"Move a copy of the Google Alerts subscriptions you created",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.vehicle_profile",
				description: "Move a copy of your vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs",
				description:
					"Move a copy of your indicated thumbs up and thumbs down on media in Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.saved.collections",
				description:
					"Move a copy of your saved links, images, places, and collections from your use of Google services",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.usersettings",
				description:
					"Move a copy of your Google Play Store user settings and preferences",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.bookmarks",
				description: "Move a copy of pages you bookmarked in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.starred_places",
				description: "Move a copy of your Starred places list on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.photos_videos",
				description: "Move a copy of the photos and videos you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos",
				description:
					"Move a copy of your unlisted YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.autofill",
				description:
					"Move a copy of the information you entered into online forms in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.redemptions",
				description:
					"Move a copy of your Google Play Store redemption activities",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.maps",
				description: "Move a copy of your Maps activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.ev_profile",
				description: "Move a copy of your electric vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.installs",
				description: "Move a copy of your Google Play Store app installations",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.subscriptions",
				description:
					"Move a copy of your YouTube channel subscriptions, even if they're private",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_videos",
				description:
					"Move a copy of your public YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.myadcenter",
				description: "Move a copy of your My Ad Center activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.offering_contributions",
				description: "Move a copy of your updates to places on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.shopping",
				description:
					"Move a copy of your YouTube shopping wishlists, and wishlist items",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars",
				description: "Move a copy of your media reviews on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.comments",
				description: "Move a copy of your YouTube comments",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.watched",
				description:
					"Move a copy of information about the movies and TV shows you marked as watched on Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.searchnotifications.settings",
				description:
					"Move a copy of your notification settings on the Google Search app",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_playlists",
				description: "Move a copy of your YouTube private playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.play",
				description: "Move a copy of your Google Play activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_playlists",
				description: "Move a copy of your public YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.mymaps.maps",
				description: "Move a copy of the maps you created in My Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.playpoints",
				description:
					"Move a copy of information about your Google Play Store Points",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions",
				description:
					"Move a copy of your notification subscriptions on Google Search app",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.questions_answers",
				description:
					"Move a copy of the questions and answers you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.settings",
				description: "Move a copy of your settings in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.reading_list",
				description:
					"Move a copy of pages you added to your reading list in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers",
				description:
					"Move a copy of your self-reported video streaming provider preferences from Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_videos",
				description:
					"Move a copy of your private YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.youtube",
				description: "Move a copy of your YouTube activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.shopping",
				description: "Move a copy of your Shopping activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.channel",
				description: "Move a copy of information about your YouTube channel",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.clips",
				description: "Move a copy of your YouTube clips metadata",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Dataproc API",
		description:
			"Manages Hadoop-based clusters and jobs on Google Cloud Platform.",
		discoveryRestUrl:
			"https://dataproc.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/dataproc/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Datastore API",
		description:
			"Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.",
		discoveryRestUrl:
			"https://datastore.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/datastore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1beta3",
		title: "Cloud Datastore API",
		description:
			"Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.",
		discoveryRestUrl:
			"https://datastore.googleapis.com/$discovery/rest?version=v1beta3",
		documentationLink: "https://cloud.google.com/datastore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Datastore API",
		description:
			"Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.",
		discoveryRestUrl:
			"https://datastore.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/datastore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Datastream API",
		description: "",
		discoveryRestUrl:
			"https://datastream.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/datastream/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Datastream API",
		description: "",
		discoveryRestUrl:
			"https://datastream.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/datastream/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "alpha",
		title: "Cloud Deployment Manager V2 API",
		description:
			"The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.",
		discoveryRestUrl:
			"https://deploymentmanager.googleapis.com/$discovery/rest?version=alpha",
		documentationLink: "https://cloud.google.com/deployment-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman",
				description:
					"View and manage your Google Cloud Platform management resources and deployment status information",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman.readonly",
				description:
					"View your Google Cloud Platform management resources and deployment status information",
			},
		],
	},
	{
		version: "v2beta",
		title: "Cloud Deployment Manager V2 API",
		description:
			"The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.",
		discoveryRestUrl:
			"https://deploymentmanager.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/deployment-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman",
				description:
					"View and manage your Google Cloud Platform management resources and deployment status information",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman.readonly",
				description:
					"View your Google Cloud Platform management resources and deployment status information",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Deployment Manager V2 API",
		description:
			"The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.",
		discoveryRestUrl:
			"https://deploymentmanager.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/deployment-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman",
				description:
					"View and manage your Google Cloud Platform management resources and deployment status information",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.cloudman.readonly",
				description:
					"View your Google Cloud Platform management resources and deployment status information",
			},
		],
	},
	{
		version: "v1",
		title: "Developer Connect API",
		description: "Connect third-party source code management to Google",
		discoveryRestUrl:
			"https://developerconnect.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"http://cloud.google.com/developer-connect/docs/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3.5",
		title: "Campaign Manager 360 API",
		description:
			"Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.",
		discoveryRestUrl:
			"https://dfareporting.googleapis.com/$discovery/rest?version=v3.5",
		documentationLink: "https://developers.google.com/doubleclick-advertisers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/dfatrafficking",
				description:
					"View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
			},
		],
	},
	{
		version: "v4",
		title: "Campaign Manager 360 API",
		description:
			"Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.",
		discoveryRestUrl:
			"https://dfareporting.googleapis.com/$discovery/rest?version=v4",
		documentationLink: "https://developers.google.com/doubleclick-advertisers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/ddmconversions",
				description: "Manage DoubleClick Digital Marketing conversions",
			},
			{
				id: "https://www.googleapis.com/auth/dfatrafficking",
				description:
					"View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
			},
			{
				id: "https://www.googleapis.com/auth/dfareporting",
				description: "View and manage DoubleClick for Advertisers reports",
			},
		],
	},
	{
		version: "v5",
		title: "Campaign Manager 360 API",
		description:
			"Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.",
		discoveryRestUrl:
			"https://dfareporting.googleapis.com/$discovery/rest?version=v5",
		documentationLink: "https://developers.google.com/doubleclick-advertisers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/dfatrafficking",
				description:
					"View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
			},
			{
				id: "https://www.googleapis.com/auth/dfareporting",
				description: "View and manage DoubleClick for Advertisers reports",
			},
			{
				id: "https://www.googleapis.com/auth/ddmconversions",
				description: "Manage DoubleClick Digital Marketing conversions",
			},
		],
	},
	{
		version: "v2beta1",
		title: "Dialogflow API",
		description:
			"Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).",
		discoveryRestUrl:
			"https://dialogflow.googleapis.com/$discovery/rest?version=v2beta1",
		documentationLink: "https://cloud.google.com/dialogflow/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/dialogflow",
				description: "View, manage and query your Dialogflow agents",
			},
		],
	},
	{
		version: "v3beta1",
		title: "Dialogflow API",
		description:
			"Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).",
		discoveryRestUrl:
			"https://dialogflow.googleapis.com/$discovery/rest?version=v3beta1",
		documentationLink: "https://cloud.google.com/dialogflow/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/dialogflow",
				description: "View, manage and query your Dialogflow agents",
			},
		],
	},
	{
		version: "v2",
		title: "Dialogflow API",
		description:
			"Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).",
		discoveryRestUrl:
			"https://dialogflow.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/dialogflow/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/dialogflow",
				description: "View, manage and query your Dialogflow agents",
			},
		],
	},
	{
		version: "v3",
		title: "Dialogflow API",
		description:
			"Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).",
		discoveryRestUrl:
			"https://dialogflow.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/dialogflow/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/dialogflow",
				description: "View, manage and query your Dialogflow agents",
			},
		],
	},
	{
		version: "v1",
		title: "Digital Asset Links API",
		description:
			"Discovers relationships between online assets such as websites or mobile apps.",
		discoveryRestUrl:
			"https://digitalassetlinks.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/digital-asset-links/",
		scopes: [],
	},
	{
		version: "v1",
		title: "API Discovery Service",
		description:
			"Google API Discovery Service allows service consumers to list the discovery metadata of all public APIs managed by the API Platform.",
		discoveryRestUrl:
			"https://discovery.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/discovery",
		scopes: [],
	},
	{
		version: "v1alpha",
		title: "Discovery Engine API",
		description: "Discovery Engine API.",
		discoveryRestUrl:
			"https://discoveryengine.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"https://cloud.google.com/generative-ai-app-builder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.assist.readwrite",
				description:
					"View your Agentspace chat history, including uploaded files and generated reports and visualizations, and interact with the Agentspace assistant on your behalf.",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.readwrite",
				description:
					"View, edit, create, and delete all your data associated with any Discovery Engine API product, such as Agentspace, Vertex AI Search, or NotebookLM Enterprise, including both end user data and administration or configuration data.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.query",
				description:
					"Search your organization's data in the Cloud Search index",
			},
		],
	},
	{
		version: "v1beta",
		title: "Discovery Engine API",
		description: "Discovery Engine API.",
		discoveryRestUrl:
			"https://discoveryengine.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://cloud.google.com/generative-ai-app-builder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.readwrite",
				description:
					"View, edit, create, and delete all your data associated with any Discovery Engine API product, such as Agentspace, Vertex AI Search, or NotebookLM Enterprise, including both end user data and administration or configuration data.",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.assist.readwrite",
				description:
					"View your Agentspace chat history, including uploaded files and generated reports and visualizations, and interact with the Agentspace assistant on your behalf.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.query",
				description:
					"Search your organization's data in the Cloud Search index",
			},
		],
	},
	{
		version: "v1",
		title: "Discovery Engine API",
		description: "Discovery Engine API.",
		discoveryRestUrl:
			"https://discoveryengine.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/generative-ai-app-builder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.readwrite",
				description:
					"View, edit, create, and delete all your data associated with any Discovery Engine API product, such as Agentspace, Vertex AI Search, or NotebookLM Enterprise, including both end user data and administration or configuration data.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud_search.query",
				description:
					"Search your organization's data in the Cloud Search index",
			},
			{
				id: "https://www.googleapis.com/auth/discoveryengine.assist.readwrite",
				description:
					"View your Agentspace chat history, including uploaded files and generated reports and visualizations, and interact with the Agentspace assistant on your behalf.",
			},
		],
	},
	{
		version: "v2",
		title: "Display & Video 360 API",
		description:
			"Display & Video 360 API allows users to automate complex Display & Video 360 workflows, such as creating insertion orders and setting targeting options for individual line items.",
		discoveryRestUrl:
			"https://displayvideo.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/display-video/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclickbidmanager",
				description: "View and manage your reports in DoubleClick Bid Manager",
			},
			{
				id: "https://www.googleapis.com/auth/display-video-user-management",
				description:
					"Private Service: https://www.googleapis.com/auth/display-video-user-management",
			},
			{
				id: "https://www.googleapis.com/auth/display-video",
				description:
					"Create, see, edit, and permanently delete your Display & Video 360 entities and reports",
			},
			{
				id: "https://www.googleapis.com/auth/display-video-mediaplanning",
				description:
					"Create, see, and edit Display & Video 360 Campaign entities and see billing invoices",
			},
		],
	},
	{
		version: "v3",
		title: "Display & Video 360 API",
		description:
			"Display & Video 360 API allows users to automate complex Display & Video 360 workflows, such as creating insertion orders and setting targeting options for individual line items.",
		discoveryRestUrl:
			"https://displayvideo.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://developers.google.com/display-video/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/display-video",
				description:
					"Create, see, edit, and permanently delete your Display & Video 360 entities and reports",
			},
			{
				id: "https://www.googleapis.com/auth/display-video-mediaplanning",
				description:
					"Create, see, and edit Display & Video 360 Campaign entities and see billing invoices",
			},
			{
				id: "https://www.googleapis.com/auth/doubleclickbidmanager",
				description: "View and manage your reports in DoubleClick Bid Manager",
			},
			{
				id: "https://www.googleapis.com/auth/display-video-user-management",
				description:
					"Private Service: https://www.googleapis.com/auth/display-video-user-management",
			},
		],
	},
	{
		version: "v4",
		title: "Display & Video 360 API",
		description:
			"Display & Video 360 API allows users to automate complex Display & Video 360 workflows, such as creating insertion orders and setting targeting options for individual line items.",
		discoveryRestUrl:
			"https://displayvideo.googleapis.com/$discovery/rest?version=v4",
		documentationLink: "https://developers.google.com/display-video/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/display-video-mediaplanning",
				description:
					"Create, see, and edit Display & Video 360 Campaign entities and see billing invoices",
			},
			{
				id: "https://www.googleapis.com/auth/doubleclickbidmanager",
				description: "View and manage your reports in DoubleClick Bid Manager",
			},
			{
				id: "https://www.googleapis.com/auth/display-video-user-management",
				description:
					"Private Service: https://www.googleapis.com/auth/display-video-user-management",
			},
			{
				id: "https://www.googleapis.com/auth/display-video",
				description:
					"Create, see, edit, and permanently delete your Display & Video 360 entities and reports",
			},
		],
	},
	{
		version: "v2",
		title: "Sensitive Data Protection (DLP)",
		description:
			"Discover and protect your sensitive data. A fully managed service designed to help you discover, classify, and protect your valuable data assets with ease.",
		discoveryRestUrl: "https://dlp.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://cloud.google.com/sensitive-data-protection/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud DNS API",
		description: "",
		discoveryRestUrl:
			"https://dns.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/dns/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.clouddns.readwrite",
				description:
					"View and manage your DNS records hosted by Google Cloud DNS",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.clouddns.readonly",
				description: "View your DNS records hosted by Google Cloud DNS",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud DNS API",
		description: "",
		discoveryRestUrl: "https://dns.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/dns/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.clouddns.readwrite",
				description:
					"View and manage your DNS records hosted by Google Cloud DNS",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.clouddns.readonly",
				description: "View your DNS records hosted by Google Cloud DNS",
			},
		],
	},
	{
		version: "v1",
		title: "Google Docs API",
		description: "Reads and writes Google Docs documents.",
		discoveryRestUrl: "https://docs.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/documents",
				description:
					"See, edit, create, and delete all your Google Docs documents",
			},
			{
				id: "https://www.googleapis.com/auth/documents.readonly",
				description: "See all your Google Docs documents",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
		],
	},
	{
		version: "v1beta3",
		title: "Cloud Document AI API",
		description:
			"Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.",
		discoveryRestUrl:
			"https://documentai.googleapis.com/$discovery/rest?version=v1beta3",
		documentationLink: "https://cloud.google.com/document-ai/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Document AI API",
		description:
			"Service to parse structured information from unstructured or semi-structured documents using state-of-the-art Google AI such as natural language, computer vision, translation, and AutoML.",
		discoveryRestUrl:
			"https://documentai.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/document-ai/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha2",
		title: "Cloud Domains API",
		description: "Enables management and configuration of domain names.",
		discoveryRestUrl:
			"https://domains.googleapis.com/$discovery/rest?version=v1alpha2",
		documentationLink: "https://cloud.google.com/domains/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Domains API",
		description: "Enables management and configuration of domain names.",
		discoveryRestUrl:
			"https://domains.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/domains/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Domains API",
		description: "Enables management and configuration of domain names.",
		discoveryRestUrl:
			"https://domains.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/domains/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "DoubleClick Bid Manager API",
		description:
			"DoubleClick Bid Manager API allows users to manage and create campaigns and reports.",
		discoveryRestUrl:
			"https://doubleclickbidmanager.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/bid-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclickbidmanager",
				description: "View and manage your reports in DoubleClick Bid Manager",
			},
		],
	},
	{
		version: "v2",
		title: "Search Ads 360 API",
		description:
			"The Search Ads 360 API allows developers to automate uploading conversions and downloading reports from Search Ads 360.",
		discoveryRestUrl:
			"https://doubleclicksearch.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/search-ads",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclicksearch",
				description:
					"View and manage your advertising data in DoubleClick Search",
			},
		],
	},
	{
		version: "v2",
		title: "Drive API",
		description:
			"Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
		documentationLink: "https://developers.google.com/drive/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.apps.readonly",
				description: "View your Google Drive apps",
			},
			{
				id: "https://www.googleapis.com/auth/drive.meet.readonly",
				description:
					"See and download your Google Drive files that were created or edited by Google Meet.",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.appdata",
				description:
					"See, create, and delete its own configuration data in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.scripts",
				description: "Modify your Google Apps Script scripts' behavior",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata.readonly",
				description: "See information about your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata",
				description: "View and manage metadata of files in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.photos.readonly",
				description: "View the photos, videos and albums in your Google Photos",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
		],
	},
	{
		version: "v3",
		title: "Drive API",
		description:
			"Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
		documentationLink: "https://developers.google.com/drive/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.scripts",
				description: "Modify your Google Apps Script scripts' behavior",
			},
			{
				id: "https://www.googleapis.com/auth/drive.meet.readonly",
				description:
					"See and download your Google Drive files that were created or edited by Google Meet.",
			},
			{
				id: "https://www.googleapis.com/auth/drive.appdata",
				description:
					"See, create, and delete its own configuration data in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.photos.readonly",
				description: "View the photos, videos and albums in your Google Photos",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.apps.readonly",
				description: "View your Google Drive apps",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata",
				description: "View and manage metadata of files in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata.readonly",
				description: "See information about your Google Drive files",
			},
		],
	},
	{
		version: "v2",
		title: "Drive Activity API",
		description: "Provides a historical view of activity in Google Drive.",
		discoveryRestUrl:
			"https://driveactivity.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://developers.google.com/workspace/drive/activity/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.activity",
				description:
					"View and add to the activity record of files in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.activity.readonly",
				description: "View the activity record of files in your Google Drive",
			},
		],
	},
	{
		version: "v2beta",
		title: "Drive Labels API",
		description: "An API for managing Drive Labels",
		discoveryRestUrl:
			"https://drivelabels.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://developers.google.com/workspace/drive/labels",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels.readonly",
				description:
					"See all Google Drive labels and label-related admin policies in your organization",
			},
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels",
				description:
					"See, edit, create, and delete all Google Drive labels in your organization, and see your organization's label-related admin policies",
			},
			{
				id: "https://www.googleapis.com/auth/drive.labels",
				description: "See, edit, create, and delete your Google Drive labels",
			},
			{
				id: "https://www.googleapis.com/auth/drive.labels.readonly",
				description: "See your Google Drive labels",
			},
		],
	},
	{
		version: "v2",
		title: "Drive Labels API",
		description: "An API for managing Drive Labels",
		discoveryRestUrl:
			"https://drivelabels.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/workspace/drive/labels",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.labels",
				description: "See, edit, create, and delete your Google Drive labels",
			},
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels.readonly",
				description:
					"See all Google Drive labels and label-related admin policies in your organization",
			},
			{
				id: "https://www.googleapis.com/auth/drive.labels.readonly",
				description: "See your Google Drive labels",
			},
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels",
				description:
					"See, edit, create, and delete all Google Drive labels in your organization, and see your organization's label-related admin policies",
			},
		],
	},
	{
		version: "v1",
		title: "Essential Contacts API",
		description: "",
		discoveryRestUrl:
			"https://essentialcontacts.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/essentialcontacts/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Eventarc API",
		description: "Build event-driven applications on Google Cloud Platform.",
		discoveryRestUrl:
			"https://eventarc.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/eventarc",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Fact Check Tools API",
		description: "",
		discoveryRestUrl:
			"https://factchecktools.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://developers.google.com/fact-check/tools/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/factchecktools",
				description: "Read, create, update, and delete your ClaimReview data.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase Cloud Messaging API",
		description:
			"FCM send API that provides a cross-platform messaging solution to reliably deliver messages.",
		discoveryRestUrl: "https://fcm.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/cloud-messaging",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase.messaging",
				description:
					"Send messages and manage messaging subscriptions for your Firebase applications",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Firebase Cloud Messaging Data API",
		description:
			"Provides additional information about Firebase Cloud Messaging (FCM) message sends and deliveries.",
		discoveryRestUrl:
			"https://fcmdata.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://firebase.google.com/docs/cloud-messaging",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Filestore API",
		description:
			"The Cloud Filestore API is used for creating and managing cloud file servers.",
		discoveryRestUrl:
			"https://file.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/filestore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Filestore API",
		description:
			"The Cloud Filestore API is used for creating and managing cloud file servers.",
		discoveryRestUrl: "https://file.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/filestore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Firebase Management API",
		description:
			"The Firebase Management API enables programmatic setup and management of Firebase projects, including a project's Firebase resources and Firebase apps.",
		discoveryRestUrl:
			"https://firebase.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://firebase.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/firebase.readonly",
				description: "View all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Firebase App Check API",
		description:
			"Firebase App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.",
		discoveryRestUrl:
			"https://firebaseappcheck.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://firebase.google.com/docs/app-check",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase App Check API",
		description:
			"Firebase App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.",
		discoveryRestUrl:
			"https://firebaseappcheck.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/app-check",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Firebase App Distribution API",
		description: "",
		discoveryRestUrl:
			"https://firebaseappdistribution.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://firebase.google.com/products/app-distribution",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase App Distribution API",
		description: "",
		discoveryRestUrl:
			"https://firebaseappdistribution.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/products/app-distribution",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Firebase App Hosting API",
		description:
			"Firebase App Hosting streamlines the development and deployment of dynamic Next.js and Angular applications, offering built-in framework support, GitHub integration, and integration with other Firebase products. You can use this API to intervene in the Firebase App Hosting build process and add custom functionality not supported in our default Console & CLI flows, including triggering builds from external CI/CD workflows or deploying from pre-built container images.",
		discoveryRestUrl:
			"https://firebaseapphosting.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://firebase.google.com/docs/app-hosting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase App Hosting API",
		description:
			"Firebase App Hosting streamlines the development and deployment of dynamic Next.js and Angular applications, offering built-in framework support, GitHub integration, and integration with other Firebase products. You can use this API to intervene in the Firebase App Hosting build process and add custom functionality not supported in our default Console & CLI flows, including triggering builds from external CI/CD workflows or deploying from pre-built container images.",
		discoveryRestUrl:
			"https://firebaseapphosting.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/app-hosting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Firebase Realtime Database Management API",
		description:
			"The Firebase Realtime Database API enables programmatic provisioning and management of Realtime Database instances.",
		discoveryRestUrl:
			"https://firebasedatabase.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://firebase.google.com/docs/reference/rest/database/database-management/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/firebase.readonly",
				description: "View all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Firebase Data Connect API",
		description:
			"Firebase Data Connect is a relational database service for mobile and web apps that lets you build and scale using a fully-managed PostgreSQL database powered by Cloud SQL. The REST API lets developers manage the connections to their database, change the schema of their database, and query the database.",
		discoveryRestUrl:
			"https://firebasedataconnect.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://firebase.google.com/docs/data-connect",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase Data Connect API",
		description:
			"Firebase Data Connect is a relational database service for mobile and web apps that lets you build and scale using a fully-managed PostgreSQL database powered by Cloud SQL. The REST API lets developers manage the connections to their database, change the schema of their database, and query the database.",
		discoveryRestUrl:
			"https://firebasedataconnect.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/data-connect",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase Dynamic Links API",
		description: "Programmatically creates and manages Firebase Dynamic Links.",
		discoveryRestUrl:
			"https://firebasedynamiclinks.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/dynamic-links/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Firebase Hosting API",
		description:
			"The Firebase Hosting REST API enables programmatic and customizable management and deployments to your Firebase-hosted sites. Use this REST API to create and manage channels and sites as well as to deploy new or updated hosting configurations and content files.",
		discoveryRestUrl:
			"https://firebasehosting.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://firebase.google.com/docs/hosting/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/firebase.readonly",
				description: "View all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase Hosting API",
		description:
			"The Firebase Hosting REST API enables programmatic and customizable management and deployments to your Firebase-hosted sites. Use this REST API to create and manage channels and sites as well as to deploy new or updated hosting configurations and content files.",
		discoveryRestUrl:
			"https://firebasehosting.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/hosting/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Firebase ML API",
		description:
			"Access custom machine learning models hosted via Firebase ML.",
		discoveryRestUrl:
			"https://firebaseml.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://firebase.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "Firebase ML API",
		description:
			"Access custom machine learning models hosted via Firebase ML.",
		discoveryRestUrl:
			"https://firebaseml.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://firebase.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase ML API",
		description:
			"Access custom machine learning models hosted via Firebase ML.",
		discoveryRestUrl:
			"https://firebaseml.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Firebase Rules API",
		description:
			"Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.",
		discoveryRestUrl:
			"https://firebaserules.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/storage/security",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/firebase.readonly",
				description: "View all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1beta",
		title: "Cloud Storage for Firebase API",
		description:
			"The Cloud Storage for Firebase API enables programmatic management of Cloud Storage buckets for use in Firebase projects",
		discoveryRestUrl:
			"https://firebasestorage.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://firebase.google.com/docs/storage",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Firestore API",
		description:
			"Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.",
		discoveryRestUrl:
			"https://firestore.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/firestore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud Firestore API",
		description:
			"Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.",
		discoveryRestUrl:
			"https://firestore.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/firestore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Firestore API",
		description:
			"Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.",
		discoveryRestUrl:
			"https://firestore.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/firestore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/datastore",
				description: "View and manage your Google Cloud Datastore data",
			},
		],
	},
	{
		version: "v1",
		title: "Fitness API",
		description: "The Fitness API for managing users' fitness tracking data.",
		discoveryRestUrl:
			"https://fitness.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/fit/rest/v1/get-started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/fitness.body_temperature.write",
				description:
					"Add to info about your body temperature in Google Fit. I consent to Google using my body temperature information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.heart_rate.read",
				description:
					"See your heart rate data in Google Fit. I consent to Google sharing my heart rate information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_glucose.write",
				description:
					"Add info about your blood glucose to Google Fit. I consent to Google using my blood glucose information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_glucose.read",
				description:
					"See info about your blood glucose in Google Fit. I consent to Google sharing my blood glucose information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_pressure.read",
				description:
					"See info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.nutrition.read",
				description: "See info about your nutrition in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.sleep.write",
				description:
					"Add to your sleep data in Google Fit. I consent to Google using my sleep information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body.read",
				description: "See info about your body measurements in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.sleep.read",
				description:
					"See your sleep data in Google Fit. I consent to Google sharing my sleep information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.activity.read",
				description:
					"Use Google Fit to see and store your physical activity data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body_temperature.read",
				description:
					"See info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.reproductive_health.read",
				description:
					"See info about your reproductive health in Google Fit. I consent to Google sharing my reproductive health information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.nutrition.write",
				description: "Add to info about your nutrition in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
				description:
					"Add info about your oxygen saturation in Google Fit. I consent to Google using my oxygen saturation information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.activity.write",
				description: "Add to your Google Fit physical activity data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_pressure.write",
				description:
					"Add info about your blood pressure in Google Fit. I consent to Google using my blood pressure information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.location.write",
				description: "Add to your Google Fit location data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.heart_rate.write",
				description:
					"Add to your heart rate data in Google Fit. I consent to Google using my heart rate information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.location.read",
				description: "See your Google Fit speed and distance data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.reproductive_health.write",
				description:
					"Add info about your reproductive health in Google Fit. I consent to Google using my reproductive health information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body.write",
				description: "Add info about your body measurements to Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
				description:
					"See info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Forms API",
		description: "Reads and writes Google Forms and responses.",
		discoveryRestUrl: "https://forms.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/forms/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/forms.body",
				description:
					"See, edit, create, and delete all your Google Forms forms",
			},
			{
				id: "https://www.googleapis.com/auth/forms.body.readonly",
				description: "See all your Google Forms forms",
			},
			{
				id: "https://www.googleapis.com/auth/forms.responses.readonly",
				description: "See all responses to your Google Forms forms",
			},
		],
	},
	{
		version: "v1",
		title: "Google Play Games Services API",
		description:
			"The Google Play Games Service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.",
		discoveryRestUrl: "https://games.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.appdata",
				description:
					"See, create, and delete its own configuration data in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
			{
				id: "https://www.googleapis.com/auth/games",
				description: "Create, edit, and delete your Google Play Games activity",
			},
		],
	},
	{
		version: "v1configuration",
		title: "Google Play Games Services Publishing API",
		description:
			"The Google Play Game Services Publishing API allows developers to configure their games in Game Services.",
		discoveryRestUrl:
			"https://gamesconfiguration.googleapis.com/$discovery/rest?version=v1configuration",
		documentationLink: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		version: "v1management",
		title: "Google Play Games Services Management API",
		description:
			"The Google Play Games Management API allows developers to manage resources from the Google Play Game service.",
		discoveryRestUrl:
			"https://gamesmanagement.googleapis.com/$discovery/rest?version=v1management",
		documentationLink: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/games",
				description: "Create, edit, and delete your Google Play Games activity",
			},
		],
	},
	{
		version: "v1",
		title: "Backup for GKE API",
		description:
			"Backup for GKE is a managed Kubernetes workload backup and restore service for GKE clusters.",
		discoveryRestUrl:
			"https://gkebackup.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2alpha",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v2alpha",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "GKE Hub API",
		description: "",
		discoveryRestUrl:
			"https://gkehub.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "GKE On-Prem API",
		description: "",
		discoveryRestUrl:
			"https://gkeonprem.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/anthos/clusters/docs/on-prem/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Gmail API",
		description:
			"The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.",
		discoveryRestUrl: "https://gmail.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/gmail/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/gmail.insert",
				description: "Add emails into your Gmail mailbox",
			},
			{
				id: "https://mail.google.com/",
				description:
					"Read, compose, send, and permanently delete all your email from Gmail",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.send",
				description: "Send email on your behalf",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.compose",
				description: "Manage drafts and send emails",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.settings.sharing",
				description:
					"Manage your sensitive mail settings, including who can manage your mail",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.action",
				description:
					"View your email messages when you interact with the add-on",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.action.compose",
				description:
					"Manage drafts and send emails when you interact with the add-on",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.metadata",
				description:
					"View your email message metadata such as labels and headers, but not the email body",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.labels",
				description: "See and edit your email labels",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.readonly",
				description: "View your email messages and settings",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
				description: "View your email messages when the add-on is running",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.metadata",
				description:
					"View your email message metadata when the add-on is running",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.modify",
				description: "Read, compose, and send emails from your Gmail account",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.settings.basic",
				description:
					"See, edit, create, or change your email settings and filters in Gmail",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Gmail Postmaster Tools API",
		description:
			"The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.",
		discoveryRestUrl:
			"https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://developers.google.com/workspace/gmail/postmaster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/postmaster.readonly",
				description:
					"See email traffic metrics for the domains you have registered in Gmail Postmaster Tools",
			},
		],
	},
	{
		version: "v1",
		title: "Gmail Postmaster Tools API",
		description:
			"The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.",
		discoveryRestUrl:
			"https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/workspace/gmail/postmaster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/postmaster.readonly",
				description:
					"See email traffic metrics for the domains you have registered in Gmail Postmaster Tools",
			},
		],
	},
	{
		version: "v1",
		title: "Groups Migration API",
		description:
			"The Groups Migration API allows domain administrators to archive emails into Google groups.",
		discoveryRestUrl:
			"https://groupsmigration.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/google-apps/groups-migration/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.groups.migration",
				description: "Upload messages to any Google group in your domain",
			},
		],
	},
	{
		version: "v1",
		title: "Groups Settings API",
		description:
			"The Groups Settings API allows domain administrators to view and manage access levels and advanced settings for a group.",
		discoveryRestUrl:
			"https://groupssettings.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/admin-sdk/groups-settings",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.groups.settings",
				description: "View and manage the settings of a G Suite group",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Healthcare API",
		description:
			"Manage, store, and access healthcare data in Google Cloud Platform.",
		discoveryRestUrl:
			"https://healthcare.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/healthcare",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-healthcare",
				description: "Read, write and manage healthcare data",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Healthcare API",
		description:
			"Manage, store, and access healthcare data in Google Cloud Platform.",
		discoveryRestUrl:
			"https://healthcare.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/healthcare",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-healthcare",
				description: "Read, write and manage healthcare data",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "HomeGraph API",
		description: "",
		discoveryRestUrl:
			"https://homegraph.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.home.google.com/cloud-to-cloud/get-started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/homegraph",
				description:
					"Private Service: https://www.googleapis.com/auth/homegraph",
			},
		],
	},
	{
		version: "v2beta",
		title: "Identity and Access Management (IAM) API",
		description:
			"Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
		discoveryRestUrl:
			"https://iam.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Identity and Access Management (IAM) API",
		description:
			"Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
		discoveryRestUrl: "https://iam.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Identity and Access Management (IAM) API",
		description:
			"Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.",
		discoveryRestUrl: "https://iam.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "IAM Service Account Credentials API",
		description:
			"Creates short-lived credentials for impersonating IAM service accounts. Disabling this API also disables the IAM API (iam.googleapis.com). However, enabling this API doesn't enable the IAM API.",
		discoveryRestUrl:
			"https://iamcredentials.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Identity-Aware Proxy API",
		description:
			"Controls access to cloud applications running on Google Cloud Platform.",
		discoveryRestUrl:
			"https://iap.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/iap",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Identity-Aware Proxy API",
		description:
			"Controls access to cloud applications running on Google Cloud Platform.",
		discoveryRestUrl: "https://iap.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/iap",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Identity Toolkit API",
		description:
			"The Google Identity Toolkit API lets you use open standards to verify a user's identity.",
		discoveryRestUrl:
			"https://identitytoolkit.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/identity-platform",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v2",
		title: "Identity Toolkit API",
		description:
			"The Google Identity Toolkit API lets you use open standards to verify a user's identity.",
		discoveryRestUrl:
			"https://identitytoolkit.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/identity-platform",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v3",
		title: "Identity Toolkit API",
		description:
			"The Google Identity Toolkit API lets you use open standards to verify a user's identity.",
		discoveryRestUrl:
			"https://identitytoolkit.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/identity-platform",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"View and manage your data across Google Cloud Platform services",
			},
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud IDS API",
		description:
			"Cloud IDS (Cloud Intrusion Detection System) detects malware, spyware, command-and-control attacks, and other network-based threats. Its security efficacy is industry leading, built with Palo Alto Networks technologies. When you use this product, your organization name and consumption levels will be shared with Palo Alto Networks.",
		discoveryRestUrl: "https://ids.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3",
		title: "Web Search Indexing API",
		description: "Notifies Google Web Search when your web pages change.",
		discoveryRestUrl:
			"https://indexing.googleapis.com/$discovery/rest?version=v3",
		documentationLink:
			"https://developers.google.com/search/apis/indexing-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/indexing",
				description: "Submit data to Google for indexing",
			},
		],
	},
	{
		version: "v1",
		title: "Application Integration API",
		description: "",
		discoveryRestUrl:
			"https://integrations.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/application-integration",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3p1beta1",
		title: "Cloud Talent Solution API",
		description:
			"Cloud Talent Solution provides the capability to create, read, update, and delete job postings, as well as search jobs based on keywords and filters.",
		discoveryRestUrl:
			"https://jobs.googleapis.com/$discovery/rest?version=v3p1beta1",
		documentationLink:
			"https://cloud.google.com/talent-solution/job-search/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/jobs",
				description: "Manage job postings",
			},
		],
	},
	{
		version: "v3",
		title: "Cloud Talent Solution API",
		description:
			"Cloud Talent Solution provides the capability to create, read, update, and delete job postings, as well as search jobs based on keywords and filters.",
		discoveryRestUrl: "https://jobs.googleapis.com/$discovery/rest?version=v3",
		documentationLink:
			"https://cloud.google.com/talent-solution/job-search/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/jobs",
				description: "Manage job postings",
			},
		],
	},
	{
		version: "v4",
		title: "Cloud Talent Solution API",
		description:
			"Cloud Talent Solution provides the capability to create, read, update, and delete job postings, as well as search jobs based on keywords and filters.",
		discoveryRestUrl: "https://jobs.googleapis.com/$discovery/rest?version=v4",
		documentationLink:
			"https://cloud.google.com/talent-solution/job-search/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/jobs",
				description: "Manage job postings",
			},
		],
	},
	{
		version: "v1",
		title: "Google Keep API",
		description:
			"The Google Keep API is used in an enterprise environment to manage Google Keep content and resolve issues identified by cloud security software.",
		discoveryRestUrl: "https://keep.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/keep/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/keep",
				description:
					"See, edit, create and permanently delete all your Google Keep data",
			},
			{
				id: "https://www.googleapis.com/auth/keep.readonly",
				description: "View all your Google Keep data",
			},
		],
	},
	{
		version: "v1",
		title: "Knowledge Graph Search API",
		description: "Searches the Google Knowledge Graph for entities.",
		discoveryRestUrl:
			"https://kgsearch.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/knowledge-graph/",
		scopes: [],
	},
	{
		version: "v1",
		title: "KMS Inventory API",
		description: "",
		discoveryRestUrl:
			"https://kmsinventory.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/kms/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud Natural Language API",
		description:
			"Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.",
		discoveryRestUrl:
			"https://language.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/natural-language/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-language",
				description:
					"Apply machine learning models to reveal the structure and meaning of text",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Natural Language API",
		description:
			"Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.",
		discoveryRestUrl:
			"https://language.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/natural-language/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-language",
				description:
					"Apply machine learning models to reveal the structure and meaning of text",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Natural Language API",
		description:
			"Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.",
		discoveryRestUrl:
			"https://language.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/natural-language/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-language",
				description:
					"Apply machine learning models to reveal the structure and meaning of text",
			},
		],
	},
	{
		version: "v1",
		title: "Library Agent API",
		description: "A simple Google Example Library API.",
		discoveryRestUrl:
			"https://libraryagent.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/docs/quota",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Enterprise License Manager API",
		description:
			"The Google Enterprise License Manager API lets you manage Google Workspace and related licenses for all users of a customer that you manage.",
		discoveryRestUrl:
			"https://licensing.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/workspace/admin/licensing/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.licensing",
				description: "View and manage G Suite licenses for your domain",
			},
		],
	},
	{
		version: "v2beta",
		title: "Cloud Life Sciences API",
		description:
			"Cloud Life Sciences is a suite of services and tools for managing, processing, and transforming life sciences data.",
		discoveryRestUrl:
			"https://lifesciences.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/life-sciences",
	},
	{
		version: "v1",
		title: "Local Services API",
		description: "",
		discoveryRestUrl:
			"https://localservices.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://ads.google.com/local-services-ads/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adwords",
				description:
					"See, edit, create, and delete your Google Ads accounts and data.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Logging API",
		description:
			"Writes log entries and manages your Cloud Logging configuration.",
		discoveryRestUrl:
			"https://logging.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/logging/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/logging.read",
				description: "View log data for your projects",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/logging.admin",
				description: "Administrate log data for your projects",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/logging.write",
				description: "Submit log data for your projects",
			},
		],
	},
	{
		version: "v1",
		title: "Looker (Google Cloud core) API",
		description: "",
		discoveryRestUrl:
			"https://looker.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/looker/docs/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Managed Service for Microsoft Active Directory API",
		description:
			"The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).",
		discoveryRestUrl:
			"https://managedidentities.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/managed-microsoft-ad/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Managed Service for Microsoft Active Directory API",
		description:
			"The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).",
		discoveryRestUrl:
			"https://managedidentities.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/managed-microsoft-ad/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Managed Service for Microsoft Active Directory API",
		description:
			"The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).",
		discoveryRestUrl:
			"https://managedidentities.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/managed-microsoft-ad/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Managed Service for Apache Kafka API",
		description: "Manage Apache Kafka clusters and resources.",
		discoveryRestUrl:
			"https://managedkafka.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/managed-service-for-apache-kafka/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Manufacturer Center API",
		description: "Public API for managing Manufacturer Center related data.",
		discoveryRestUrl:
			"https://manufacturers.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/manufacturers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/manufacturercenter",
				description:
					"Manage your product listings for Google Manufacturer Center",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Google Marketing Platform Admin API",
		description:
			"The Google Marketing Platform Admin API allows for programmatic access to the Google Marketing Platform configuration data. You can use the Google Marketing Platform Admin API to manage links between your Google Marketing Platform organization and Google Analytics accounts, and to set the service level of your GA4 properties.",
		discoveryRestUrl:
			"https://marketingplatformadmin.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"https://developers.google.com/analytics/devguides/config/gmp/v1",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/marketingplatformadmin.analytics.update",
				description:
					"Manage your Google Analytics product account data in GMP home",
			},
			{
				id: "https://www.googleapis.com/auth/marketingplatformadmin.analytics.read",
				description:
					"View your Google Analytics product account data in GMP home",
			},
		],
	},
	{
		version: "v2",
		title: "Google Meet API",
		description: "Create and manage meetings in Google Meet.",
		discoveryRestUrl: "https://meet.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/workspace/meet/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/meetings.space.settings",
				description:
					"Edit, and see settings for all of your Google Meet calls.",
			},
			{
				id: "https://www.googleapis.com/auth/meetings.space.created",
				description:
					"Create, edit, and see information about your Google Meet conferences created by the app.",
			},
			{
				id: "https://www.googleapis.com/auth/meetings.space.readonly",
				description:
					"Read information about any of your Google Meet conferences",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud Memorystore for Memcached API",
		description:
			"Google Cloud Memorystore for Memcached API is used for creating and managing Memcached instances in GCP.",
		discoveryRestUrl:
			"https://memcache.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/memorystore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Memorystore for Memcached API",
		description:
			"Google Cloud Memorystore for Memcached API is used for creating and managing Memcached instances in GCP.",
		discoveryRestUrl:
			"https://memcache.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/memorystore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "accounts_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "accounts_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "conversions_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=conversions_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "conversions_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=conversions_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "datasources_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=datasources_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "datasources_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=datasources_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "inventories_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=inventories_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "inventories_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=inventories_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "issueresolution_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=issueresolution_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "issueresolution_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=issueresolution_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "lfp_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=lfp_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "lfp_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=lfp_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "notifications_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=notifications_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "notifications_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=notifications_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "ordertracking_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=ordertracking_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "ordertracking_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=ordertracking_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "products_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=products_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "products_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=products_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "promotions_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=promotions_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "promotions_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=promotions_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "quota_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=quota_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "quota_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=quota_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "reports_v1",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=reports_v1",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "reports_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=reports_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "reviews_v1beta",
		title: "Merchant API",
		description: "Programmatically manage your Merchant Center Accounts.",
		discoveryRestUrl:
			"https://merchantapi.googleapis.com/$discovery/rest?version=reviews_v1beta",
		documentationLink: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2alpha",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v2alpha",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
	},
	{
		version: "v1beta",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
	},
	{
		version: "v1",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Dataproc Metastore API",
		description:
			"The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.",
		discoveryRestUrl:
			"https://metastore.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/dataproc-metastore/docs",
	},
	{
		version: "v1alpha1",
		title: "Migration Center API",
		description:
			"A unified platform that helps you accelerate your end-to-end cloud journey from your current on-premises or cloud environments to Google Cloud.",
		discoveryRestUrl:
			"https://migrationcenter.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/migration-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Migration Center API",
		description:
			"A unified platform that helps you accelerate your end-to-end cloud journey from your current on-premises or cloud environments to Google Cloud.",
		discoveryRestUrl:
			"https://migrationcenter.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/migration-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "AI Platform Training & Prediction API",
		description: "An API to enable creating and using machine learning models.",
		discoveryRestUrl: "https://ml.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/ml/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Monitoring API",
		description: "Manages your Cloud Monitoring data and configurations.",
		discoveryRestUrl:
			"https://monitoring.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/monitoring/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring",
				description:
					"View and write monitoring data for all of your Google and third-party Cloud and API projects",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring.read",
				description:
					"View monitoring data for all of your Google Cloud and third-party projects",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring.write",
				description: "Publish metric data to your Google Cloud projects",
			},
		],
	},
	{
		version: "v3",
		title: "Cloud Monitoring API",
		description: "Manages your Cloud Monitoring data and configurations.",
		discoveryRestUrl:
			"https://monitoring.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/monitoring/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring",
				description:
					"View and write monitoring data for all of your Google and third-party Cloud and API projects",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring.read",
				description:
					"View monitoring data for all of your Google Cloud and third-party projects",
			},
			{
				id: "https://www.googleapis.com/auth/monitoring.write",
				description: "Publish metric data to your Google Cloud projects",
			},
		],
	},
	{
		version: "v1",
		title: "My Business Account Management API",
		description:
			"The My Business Account Management API provides an interface for managing access to a location on Google. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinessaccountmanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Business Information API",
		description:
			"The My Business Business Information API provides an interface for managing business information. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinessbusinessinformation.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Lodging API",
		description:
			"The My Business Lodging API enables managing lodging business information on Google. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinesslodging.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Notifications API",
		description:
			"The My Business Notification Settings API enables managing notification settings for business accounts. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinessnotifications.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Place Actions API",
		description:
			"The My Business Place Actions API provides an interface for managing place action links of a location on Google. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinessplaceactions.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Q&A API",
		description:
			"The My Business Q&A API allows questions and answers to be posted for specific listings. Note - If you have a quota of 0 after enabling the API, please request <https://developers.google.com/my-business/content/prereqs#request-access> for GBP API access.",
		discoveryRestUrl:
			"https://mybusinessqanda.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1",
		title: "My Business Verifications API",
		description:
			"The My Business Verifications API provides an interface for taking verifications related actions for locations.",
		discoveryRestUrl:
			"https://mybusinessverifications.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/my-business/",
		scopes: [],
	},
	{
		version: "v1beta1",
		title: "NetApp API",
		description:
			"Google Cloud NetApp Volumes is a fully-managed, cloud-based data storage service that provides advanced data management capabilities and highly scalable performance with global availability.",
		discoveryRestUrl:
			"https://netapp.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/netapp/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "NetApp API",
		description:
			"Google Cloud NetApp Volumes is a fully-managed, cloud-based data storage service that provides advanced data management capabilities and highly scalable performance with global availability.",
		discoveryRestUrl:
			"https://netapp.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/netapp/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Network Connectivity API",
		description:
			"This API enables connectivity with and between Google Cloud resources.",
		discoveryRestUrl:
			"https://networkconnectivity.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink:
			"https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Network Connectivity API",
		description:
			"This API enables connectivity with and between Google Cloud resources.",
		discoveryRestUrl:
			"https://networkconnectivity.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Network Management API",
		description:
			"The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.",
		discoveryRestUrl:
			"https://networkmanagement.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Network Management API",
		description:
			"The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.",
		discoveryRestUrl:
			"https://networkmanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Network Security API",
		description: "",
		discoveryRestUrl:
			"https://networksecurity.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Network Security API",
		description: "",
		discoveryRestUrl:
			"https://networksecurity.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Network Services API",
		description: "",
		discoveryRestUrl:
			"https://networkservices.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Network Services API",
		description: "",
		discoveryRestUrl:
			"https://networkservices.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Notebooks API",
		description:
			"Notebooks API is used to manage notebook resources in Google Cloud.",
		discoveryRestUrl:
			"https://notebooks.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/notebooks/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Notebooks API",
		description:
			"Notebooks API is used to manage notebook resources in Google Cloud.",
		discoveryRestUrl:
			"https://notebooks.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/notebooks/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Google OAuth2 API",
		description:
			"[Deprecated] Obtains end-user authorization grants for use with other Google APIs.",
		discoveryRestUrl:
			"https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest",
		documentationLink: "https://developers.google.com/accounts/docs/OAuth2",
		scopes: [
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.email",
				description: "See your primary Google Account email address",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.profile",
				description:
					"See your personal info, including any personal info you've made publicly available",
			},
		],
	},
	{
		version: "v1",
		title: "Observability API",
		description: "",
		discoveryRestUrl:
			"https://observability.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/stackdriver/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "On-Demand Scanning API",
		description: "A service to scan container images for vulnerabilities.",
		discoveryRestUrl:
			"https://ondemandscanning.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/container-analysis/docs/on-demand-scanning/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "On-Demand Scanning API",
		description: "A service to scan container images for vulnerabilities.",
		discoveryRestUrl:
			"https://ondemandscanning.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/container-analysis/docs/on-demand-scanning/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Oracle Database@Google Cloud API",
		description:
			"The Oracle Database@Google Cloud API provides a set of APIs to manage Oracle database services, such as Exadata and Autonomous Databases.",
		discoveryRestUrl:
			"https://oracledatabase.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/oracle/database/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Organization Policy API",
		description:
			"The Organization Policy API allows users to configure governance rules on their Google Cloud resources across the resource hierarchy.",
		discoveryRestUrl:
			"https://orgpolicy.googleapis.com/$discovery/rest?version=v2",
		documentationLink:
			"https://cloud.google.com/orgpolicy/docs/reference/rest/index.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "OS Config API",
		description:
			"OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.",
		discoveryRestUrl:
			"https://osconfig.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "OS Config API",
		description:
			"OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.",
		discoveryRestUrl:
			"https://osconfig.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "OS Config API",
		description:
			"OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.",
		discoveryRestUrl:
			"https://osconfig.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "OS Config API",
		description:
			"OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.",
		discoveryRestUrl:
			"https://osconfig.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "OS Config API",
		description:
			"OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.",
		discoveryRestUrl:
			"https://osconfig.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Cloud OS Login API",
		description:
			"You can use OS Login to manage access to your VM instances using IAM roles.",
		discoveryRestUrl:
			"https://oslogin.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/compute/docs/oslogin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
		],
	},
	{
		version: "v1beta",
		title: "Cloud OS Login API",
		description:
			"You can use OS Login to manage access to your VM instances using IAM roles.",
		discoveryRestUrl:
			"https://oslogin.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/compute/docs/oslogin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud OS Login API",
		description:
			"You can use OS Login to manage access to your VM instances using IAM roles.",
		discoveryRestUrl:
			"https://oslogin.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/compute/docs/oslogin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
			{
				id: "https://www.googleapis.com/auth/compute.readonly",
				description: "View your Google Compute Engine resources",
			},
		],
	},
	{
		version: "v5",
		title: "PageSpeed Insights API",
		description:
			"The PageSpeed Insights API lets you analyze the performance of your website with a simple API. It offers tailored suggestions for how you can optimize your site, and lets you easily integrate PageSpeed Insights analysis into your development tools and workflow.",
		discoveryRestUrl:
			"https://pagespeedonline.googleapis.com/$discovery/rest?version=v5",
		documentationLink:
			"https://developers.google.com/speed/docs/insights/v5/about",
		scopes: [
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
		],
	},
	{
		version: "v1beta",
		title: "Parallelstore API",
		description: "",
		discoveryRestUrl:
			"https://parallelstore.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/parallelstore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Parallelstore API",
		description: "",
		discoveryRestUrl:
			"https://parallelstore.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/parallelstore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Parameter Manager API",
		description:
			"Parameter Manager is a single source of truth to store, access and manage the lifecycle of your workload parameters. Parameter Manager aims to make management of sensitive application parameters effortless for customers without diminishing focus on security.",
		discoveryRestUrl:
			"https://parametermanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/secret-manager/parameter-manager/docs/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Payments Reseller Subscription API",
		description: "",
		discoveryRestUrl:
			"https://paymentsresellersubscription.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/payments/reseller/subscription/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sdm.service",
				description: "See and/or control the devices that you selected",
			},
		],
	},
	{
		version: "v1",
		title: "People API",
		description: "Provides access to information about profiles and contacts.",
		discoveryRestUrl:
			"https://people.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/people/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/directory.readonly",
				description: "See and download your organization's GSuite directory",
			},
			{
				id: "https://www.googleapis.com/auth/contacts.other.readonly",
				description:
					'See and download contact info automatically saved in your "Other contacts"',
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.profile",
				description:
					"See your personal info, including any personal info you've made publicly available",
			},
			{
				id: "https://www.googleapis.com/auth/user.emails.read",
				description:
					"See and download all of your Google Account email addresses",
			},
			{
				id: "https://www.googleapis.com/auth/contacts.readonly",
				description: "See and download your contacts",
			},
			{
				id: "https://www.googleapis.com/auth/user.organization.read",
				description: "See your education, work history and org info",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.email",
				description: "See your primary Google Account email address",
			},
			{
				id: "https://www.googleapis.com/auth/user.gender.read",
				description: "See your gender",
			},
			{
				id: "https://www.googleapis.com/auth/user.addresses.read",
				description: "View your street addresses",
			},
			{
				id: "https://www.googleapis.com/auth/user.phonenumbers.read",
				description: "See and download your personal phone numbers",
			},
			{
				id: "https://www.googleapis.com/auth/contacts",
				description:
					"See, edit, download, and permanently delete your contacts",
			},
			{
				id: "https://www.googleapis.com/auth/user.birthday.read",
				description: "See and download your exact date of birth",
			},
		],
	},
	{
		version: "v1",
		title: "Places API (New)",
		description: "",
		discoveryRestUrl:
			"https://places.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://mapsplatform.google.com/maps-products/#places-section",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places.getphotomedia",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places.getphotomedia",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places.textsearch",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places.textsearch",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places.autocomplete",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places.autocomplete",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places.details",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places.details",
			},
			{
				id: "https://www.googleapis.com/auth/maps-platform.places.nearbysearch",
				description:
					"Private Service: https://www.googleapis.com/auth/maps-platform.places.nearbysearch",
			},
		],
	},
	{
		version: "v1",
		title: "Google Play Custom App Publishing API",
		description: "API to create and publish custom Android apps",
		discoveryRestUrl:
			"https://playcustomapp.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/android/work/play/custom-app-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Google Play Developer Reporting API",
		description: "",
		discoveryRestUrl:
			"https://playdeveloperreporting.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://developers.google.com/play/developer/reporting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/playdeveloperreporting",
				description:
					"See metrics and data about the apps in your Google Play Developer account",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Google Play Developer Reporting API",
		description: "",
		discoveryRestUrl:
			"https://playdeveloperreporting.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://developers.google.com/play/developer/reporting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/playdeveloperreporting",
				description:
					"See metrics and data about the apps in your Google Play Developer account",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Google Play Grouping API",
		description: "playgrouping.googleapis.com API.",
		discoveryRestUrl:
			"https://playgrouping.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/playgrouping/",
		scopes: [],
	},
	{
		version: "v1",
		title: "Google Play Integrity API",
		description:
			"The Play Integrity API helps you check that you're interacting with your genuine app on a genuine Android device powered by Google Play services. The Play Integrity API has replaced SafetyNet Attestation and Android Device Verification.",
		discoveryRestUrl:
			"https://playintegrity.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developer.android.com/google/play/integrity",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/playintegrity",
				description:
					"Private Service: https://www.googleapis.com/auth/playintegrity",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Policy Analyzer API",
		description: "",
		discoveryRestUrl:
			"https://policyanalyzer.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://www.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Policy Analyzer API",
		description: "",
		discoveryRestUrl:
			"https://policyanalyzer.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://www.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Policy Simulator API",
		description:
			"Policy Simulator is a collection of endpoints for creating, running, and viewing a [Replay][google.cloud.policysimulator.v1.Replay]. A `Replay` is a type of simulation that lets you see how your members' access to resources might change if you changed your IAM policy. During a `Replay`, Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your members' access might change under the proposed policy.",
		discoveryRestUrl:
			"https://policysimulator.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink: "https://cloud.google.com/iam/docs/simulating-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Policy Simulator API",
		description:
			"Policy Simulator is a collection of endpoints for creating, running, and viewing a [Replay][google.cloud.policysimulator.v1.Replay]. A `Replay` is a type of simulation that lets you see how your members' access to resources might change if you changed your IAM policy. During a `Replay`, Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your members' access might change under the proposed policy.",
		discoveryRestUrl:
			"https://policysimulator.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/iam/docs/simulating-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Policy Simulator API",
		description:
			"Policy Simulator is a collection of endpoints for creating, running, and viewing a [Replay][google.cloud.policysimulator.v1.Replay]. A `Replay` is a type of simulation that lets you see how your members' access to resources might change if you changed your IAM policy. During a `Replay`, Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your members' access might change under the proposed policy.",
		discoveryRestUrl:
			"https://policysimulator.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/iam/docs/simulating-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Policy Troubleshooter API",
		description: "",
		discoveryRestUrl:
			"https://policytroubleshooter.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Policy Troubleshooter API",
		description: "",
		discoveryRestUrl:
			"https://policytroubleshooter.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Pollen API",
		description: "The Pollen API.",
		discoveryRestUrl:
			"https://pollen.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/maps/documentation/pollen",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Poly API",
		description:
			"The Poly API provides read access to assets hosted on poly.google.com to all, and upload access to poly.google.com for whitelisted accounts.",
		discoveryRestUrl: "https://poly.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/poly/",
	},
	{
		version: "v1beta1",
		title: "Certificate Authority API",
		description:
			"The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys.",
		discoveryRestUrl:
			"https://privateca.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Certificate Authority API",
		description:
			"The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys.",
		discoveryRestUrl:
			"https://privateca.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "SAS Portal API (Testing)",
		description: "",
		discoveryRestUrl:
			"https://prod-tt-sasportal.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://developers.google.com/spectrum-access-system/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sasportal",
				description: "Read, create, update, and delete your SAS Portal data.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Public Certificate Authority API",
		description:
			"The Public Certificate Authority API may be used to create and manage ACME external account binding keys associated with Google Trust Services' publicly trusted certificate authority.",
		discoveryRestUrl:
			"https://publicca.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink:
			"https://cloud.google.com/public-certificate-authority/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Public Certificate Authority API",
		description:
			"The Public Certificate Authority API may be used to create and manage ACME external account binding keys associated with Google Trust Services' publicly trusted certificate authority.",
		discoveryRestUrl:
			"https://publicca.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/public-certificate-authority/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Public Certificate Authority API",
		description:
			"The Public Certificate Authority API may be used to create and manage ACME external account binding keys associated with Google Trust Services' publicly trusted certificate authority.",
		discoveryRestUrl:
			"https://publicca.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/public-certificate-authority/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1a",
		title: "Cloud Pub/Sub API",
		description:
			"Provides reliable, many-to-many, asynchronous messaging between applications.",
		discoveryRestUrl:
			"https://pubsub.googleapis.com/$discovery/rest?version=v1beta1a",
		documentationLink: "https://cloud.google.com/pubsub/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/pubsub",
				description: "View and manage Pub/Sub topics and subscriptions",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud Pub/Sub API",
		description:
			"Provides reliable, many-to-many, asynchronous messaging between applications.",
		discoveryRestUrl:
			"https://pubsub.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/pubsub/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/pubsub",
				description: "View and manage Pub/Sub topics and subscriptions",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Pub/Sub API",
		description:
			"Provides reliable, many-to-many, asynchronous messaging between applications.",
		discoveryRestUrl:
			"https://pubsub.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/pubsub/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/pubsub",
				description: "View and manage Pub/Sub topics and subscriptions",
			},
		],
	},
	{
		version: "v1",
		title: "Pub/Sub Lite API",
		description: "",
		discoveryRestUrl:
			"https://pubsublite.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/pubsub/lite/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Rapid Migration Assessment API",
		description:
			"The Rapid Migration Assessment service is our first-party migration assessment and planning tool.",
		discoveryRestUrl:
			"https://rapidmigrationassessment.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/migration-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Reader Revenue Subscription Linking API",
		description: "readerrevenuesubscriptionlinking.googleapis.com API.",
		discoveryRestUrl:
			"https://readerrevenuesubscriptionlinking.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/news/subscribe/subscription-linking/overview",
		scopes: [],
	},
	{
		version: "v1",
		title: "Real-time Bidding API",
		description:
			"Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive with pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.",
		discoveryRestUrl:
			"https://realtimebidding.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/realtime-bidding",
				description:
					"See, create, edit, and delete your Authorized Buyers and Open Bidding account entities",
			},
		],
	},
	{
		version: "v1",
		title: "reCAPTCHA Enterprise API",
		description:
			"Help protect your website from fraudulent activity, spam, and abuse without creating friction.",
		discoveryRestUrl:
			"https://recaptchaenterprise.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/recaptcha-enterprise/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Recommendations AI (Beta)",
		description:
			"Note that we now highly recommend new customers to use Retail API, which incorporates the GA version of the Recommendations AI funtionalities. To enable Retail API, please visit https://console.cloud.google.com/apis/library/retail.googleapis.com. The Recommendations AI service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.",
		discoveryRestUrl:
			"https://recommendationengine.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/recommendations-ai/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Recommender API",
		description: "",
		discoveryRestUrl:
			"https://recommender.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/recommender/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Recommender API",
		description: "",
		discoveryRestUrl:
			"https://recommender.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/recommender/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Google Cloud Memorystore for Redis API",
		description:
			"Creates and manages Redis instances on the Google Cloud Platform.",
		discoveryRestUrl:
			"https://redis.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/memorystore/docs/redis/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Cloud Memorystore for Redis API",
		description:
			"Creates and manages Redis instances on the Google Cloud Platform.",
		discoveryRestUrl: "https://redis.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/memorystore/docs/redis/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Workspace Reseller API",
		description:
			"Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing customer information",
		discoveryRestUrl:
			"https://reseller.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/google-apps/reseller/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.order",
				description: "Manage users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/apps.order.readonly",
				description: "Manage users on your domain",
			},
		],
	},
	{
		version: "v2alpha",
		title: "Vertex AI Search for commerce API",
		description:
			"Vertex AI Search for commerce API is made up of Retail Search, Browse and Recommendations. These discovery AI solutions help you implement personalized search, browse and recommendations, based on machine learning models, across your websites and mobile applications.",
		discoveryRestUrl:
			"https://retail.googleapis.com/$discovery/rest?version=v2alpha",
		documentationLink: "https://cloud.google.com/recommendations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2beta",
		title: "Vertex AI Search for commerce API",
		description:
			"Vertex AI Search for commerce API is made up of Retail Search, Browse and Recommendations. These discovery AI solutions help you implement personalized search, browse and recommendations, based on machine learning models, across your websites and mobile applications.",
		discoveryRestUrl:
			"https://retail.googleapis.com/$discovery/rest?version=v2beta",
		documentationLink: "https://cloud.google.com/recommendations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Vertex AI Search for commerce API",
		description:
			"Vertex AI Search for commerce API is made up of Retail Search, Browse and Recommendations. These discovery AI solutions help you implement personalized search, browse and recommendations, based on machine learning models, across your websites and mobile applications.",
		discoveryRestUrl:
			"https://retail.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/recommendations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Run Admin API",
		description:
			"Deploy and manage user provided container images that scale automatically based on incoming requests. The Cloud Run Admin API v1 follows the Knative Serving API specification, while v2 is aligned with Google Cloud AIP-based API standards, as described in https://google.aip.dev/.",
		discoveryRestUrl: "https://run.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/run/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Run Admin API",
		description:
			"Deploy and manage user provided container images that scale automatically based on incoming requests. The Cloud Run Admin API v1 follows the Knative Serving API specification, while v2 is aligned with Google Cloud AIP-based API standards, as described in https://google.aip.dev/.",
		discoveryRestUrl: "https://run.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/run/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Runtime Configuration API",
		description:
			"The Runtime Configurator allows you to dynamically configure and expose variables through Google Cloud Platform. In addition, you can also set Watchers and Waiters that will watch for changes to your data and return based on certain conditions.",
		discoveryRestUrl:
			"https://runtimeconfig.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/deployment-manager/runtime-configurator/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloudruntimeconfig",
				description:
					"Manage your Google Cloud Platform services' runtime configuration",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Runtime Configuration API",
		description:
			"The Runtime Configurator allows you to dynamically configure and expose variables through Google Cloud Platform. In addition, you can also set Watchers and Waiters that will watch for changes to your data and return based on certain conditions.",
		discoveryRestUrl:
			"https://runtimeconfig.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/deployment-manager/runtime-configurator/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloudruntimeconfig",
				description:
					"Manage your Google Cloud Platform services' runtime configuration",
			},
		],
	},
	{
		version: "v1beta1",
		title: "SaaS Runtime API",
		description: "Model, deploy, and operate your SaaS at scale.",
		discoveryRestUrl:
			"https://saasservicemgmt.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/saas-runtime/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v4",
		title: "Safe Browsing API",
		description:
			"Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.",
		discoveryRestUrl:
			"https://safebrowsing.googleapis.com/$discovery/rest?version=v4",
		documentationLink: "https://developers.google.com/safe-browsing/",
		scopes: [],
	},
	{
		version: "v5",
		title: "Safe Browsing API",
		description:
			"Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.",
		discoveryRestUrl:
			"https://safebrowsing.googleapis.com/$discovery/rest?version=v5",
		documentationLink: "https://developers.google.com/safe-browsing/",
		scopes: [],
	},
	{
		version: "v1alpha1",
		title: "SAS Portal API",
		description: "",
		discoveryRestUrl:
			"https://sasportal.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://developers.google.com/spectrum-access-system/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sasportal",
				description: "Read, create, update, and delete your SAS Portal data.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Apps Script API",
		description: "Manages and executes Google Apps Script projects.",
		discoveryRestUrl:
			"https://script.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/apps-script/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.email",
				description: "See your primary Google Account email address",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user",
				description: "View and manage the provisioning of users on your domain",
			},
			{
				id: "https://mail.google.com/",
				description:
					"Read, compose, send, and permanently delete all your email from Gmail",
			},
			{
				id: "https://www.googleapis.com/auth/documents",
				description:
					"See, edit, create, and delete all your Google Docs documents",
			},
			{
				id: "https://www.googleapis.com/auth/script.processes",
				description: "View Google Apps Script processes",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group",
				description:
					"View and manage the provisioning of groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/forms.currentonly",
				description:
					"View and manage forms that this application has been installed in",
			},
			{
				id: "https://www.google.com/calendar/feeds",
				description:
					"See, edit, share, and permanently delete all the calendars you can access using Google Calendar",
			},
			{
				id: "https://www.googleapis.com/auth/script.metrics",
				description: "View Google Apps Script project's metrics",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/script.deployments.readonly",
				description: "View Google Apps Script deployments",
			},
			{
				id: "https://www.googleapis.com/auth/forms",
				description: "View and manage your forms in Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/script.projects.readonly",
				description: "View Google Apps Script projects",
			},
			{
				id: "https://www.googleapis.com/auth/script.projects",
				description: "Create and update Google Apps Script projects",
			},
			{
				id: "https://www.googleapis.com/auth/script.deployments",
				description: "Create and update Google Apps Script deployments",
			},
			{
				id: "https://www.googleapis.com/auth/groups",
				description: "View and manage your Google Groups",
			},
			{
				id: "https://www.google.com/m8/feeds",
				description:
					"See, edit, download, and permanently delete your contacts",
			},
		],
	},
	{
		version: "v0",
		title: "Search Ads 360 Reporting API",
		description:
			"The Search Ads 360 API allows developers to automate downloading reports from Search Ads 360.",
		discoveryRestUrl:
			"https://searchads360.googleapis.com/$discovery/rest?version=v0",
		documentationLink: "https://developers.google.com/search-ads/reporting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclicksearch",
				description:
					"View and manage your advertising data in DoubleClick Search",
			},
		],
	},
	{
		version: "v1",
		title: "Google Search Console API",
		description:
			"The Search Console API provides access to both Search Console data (verified users only) and to public information on an URL basis (anyone)",
		discoveryRestUrl:
			"https://searchconsole.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/webmaster-tools/about",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/webmasters",
				description:
					"View and manage Search Console data for your verified sites",
			},
			{
				id: "https://www.googleapis.com/auth/webmasters.readonly",
				description: "View Search Console data for your verified sites",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Secret Manager API",
		description:
			"Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while improving security.",
		discoveryRestUrl:
			"https://secretmanager.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/secret-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Secret Manager API",
		description:
			"Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while improving security.",
		discoveryRestUrl:
			"https://secretmanager.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/secret-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Secret Manager API",
		description:
			"Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while improving security.",
		discoveryRestUrl:
			"https://secretmanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/secret-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Secure Source Manager API",
		description:
			"Regionally deployed, single-tenant managed source code repository hosted on Google Cloud.",
		discoveryRestUrl:
			"https://securesourcemanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/secure-source-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Security Command Center API",
		description:
			"Security Command Center API provides access to temporal views of assets and findings within an organization.",
		discoveryRestUrl:
			"https://securitycenter.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Security Command Center API",
		description:
			"Security Command Center API provides access to temporal views of assets and findings within an organization.",
		discoveryRestUrl:
			"https://securitycenter.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Security Command Center API",
		description:
			"Security Command Center API provides access to temporal views of assets and findings within an organization.",
		discoveryRestUrl:
			"https://securitycenter.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Security Posture API",
		description:
			"Defines, assesses, and monitors the overall status of your security in Google Cloud. You can use security postures to evaluate your current cloud security against defined benchmarks and help maintain the level of security that your organization requires.",
		discoveryRestUrl:
			"https://securityposture.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Service Consumer Management API",
		description:
			"Manages the service consumers of a Service Infrastructure service.",
		discoveryRestUrl:
			"https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/service-consumer-management/docs/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Service Consumer Management API",
		description:
			"Manages the service consumers of a Service Infrastructure service.",
		discoveryRestUrl:
			"https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/service-consumer-management/docs/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Service Control API",
		description:
			"Provides admission control and telemetry reporting for services integrated with Service Infrastructure.",
		discoveryRestUrl:
			"https://servicecontrol.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/service-control/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/servicecontrol",
				description: "Manage your Google Service Control data",
			},
		],
	},
	{
		version: "v2",
		title: "Service Control API",
		description:
			"Provides admission control and telemetry reporting for services integrated with Service Infrastructure.",
		discoveryRestUrl:
			"https://servicecontrol.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/service-control/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/servicecontrol",
				description: "Manage your Google Service Control data",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Service Directory API",
		description:
			"Service Directory is a platform for discovering, publishing, and connecting services.",
		discoveryRestUrl:
			"https://servicedirectory.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/service-directory",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Service Directory API",
		description:
			"Service Directory is a platform for discovering, publishing, and connecting services.",
		discoveryRestUrl:
			"https://servicedirectory.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/service-directory",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Service Management API",
		description:
			"Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.",
		discoveryRestUrl:
			"https://servicemanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/service-management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/service.management",
				description: "Manage your Google API service configuration",
			},
			{
				id: "https://www.googleapis.com/auth/service.management.readonly",
				description: "View your Google API service configuration",
			},
		],
	},
	{
		version: "v1beta",
		title: "Service Networking API",
		description:
			"Provides automatic management of network configurations necessary for certain services.",
		discoveryRestUrl:
			"https://servicenetworking.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/service.management",
				description: "Manage your Google API service configuration",
			},
		],
	},
	{
		version: "v1",
		title: "Service Networking API",
		description:
			"Provides automatic management of network configurations necessary for certain services.",
		discoveryRestUrl:
			"https://servicenetworking.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/service.management",
				description: "Manage your Google API service configuration",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Service Usage API",
		description:
			"Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.",
		discoveryRestUrl:
			"https://serviceusage.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/service-usage/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/service.management",
				description: "Manage your Google API service configuration",
			},
		],
	},
	{
		version: "v1",
		title: "Service Usage API",
		description:
			"Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.",
		discoveryRestUrl:
			"https://serviceusage.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/service-usage/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/service.management",
				description: "Manage your Google API service configuration",
			},
		],
	},
	{
		version: "v4",
		title: "Google Sheets API",
		description: "Reads and writes Google Sheets.",
		discoveryRestUrl:
			"https://sheets.googleapis.com/$discovery/rest?version=v4",
		documentationLink: "https://developers.google.com/workspace/sheets/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets.readonly",
				description: "See all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
		],
	},
	{
		version: "v1",
		title: "Site Verification API",
		description:
			"The Google Site Verification API lets applications automate the process of managing ownership records for websites and domains.",
		discoveryRestUrl:
			"https://siteverification.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://code.google.com/apis/siteverification/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/siteverification",
				description: "Manage the list of sites and domains you control",
			},
			{
				id: "https://www.googleapis.com/auth/siteverification.verify_only",
				description: "Manage your new site verifications with Google",
			},
		],
	},
	{
		version: "v1",
		title: "Google Slides API",
		description: "Reads and writes Google Slides presentations.",
		discoveryRestUrl:
			"https://slides.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/slides/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/presentations.readonly",
				description: "See all your Google Slides presentations",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets.readonly",
				description: "See all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/presentations",
				description:
					"See, edit, create, and delete all your Google Slides presentations",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
		],
	},
	{
		version: "v1",
		title: "Smart Device Management API",
		description:
			"Allow select enterprise partners to access, control, and manage Google and Nest devices programmatically.",
		discoveryRestUrl:
			"https://smartdevicemanagement.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/nest/device-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sdm.service",
				description: "See and/or control the devices that you selected",
			},
		],
	},
	{
		version: "v1",
		title: "Solar API",
		description: "Solar API.",
		discoveryRestUrl: "https://solar.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/maps/documentation/solar",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Spanner API",
		description:
			"Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.",
		discoveryRestUrl:
			"https://spanner.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/spanner/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/spanner.admin",
				description: "Administer your Spanner databases",
			},
			{
				id: "https://www.googleapis.com/auth/spanner.data",
				description: "View and manage the contents of your Spanner databases",
			},
		],
	},
	{
		version: "v1p1beta1",
		title: "Cloud Speech-to-Text API",
		description:
			"Converts audio to text by applying powerful neural network models.",
		discoveryRestUrl:
			"https://speech.googleapis.com/$discovery/rest?version=v1p1beta1",
		documentationLink:
			"https://cloud.google.com/speech-to-text/docs/quickstart-protocol",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Speech-to-Text API",
		description:
			"Converts audio to text by applying powerful neural network models.",
		discoveryRestUrl:
			"https://speech.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/speech-to-text/docs/quickstart-protocol",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta4",
		title: "Cloud SQL Admin API",
		description: "API for Cloud SQL database instance management",
		discoveryRestUrl:
			"https://sqladmin.googleapis.com/$discovery/rest?version=v1beta4",
		documentationLink: "https://cloud.google.com/sql/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/sqlservice.admin",
				description: "Manage your Google SQL Service instances",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud SQL Admin API",
		description: "API for Cloud SQL database instance management",
		discoveryRestUrl:
			"https://sqladmin.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/sql/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sqlservice.admin",
				description: "Manage your Google SQL Service instances",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Storage API",
		description:
			"Lets you store and retrieve potentially-large, immutable data objects.",
		discoveryRestUrl:
			"https://storage.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/storage/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"View and manage your data across Google Cloud Platform services",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description: "View your data across Google Cloud Platform services",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description: "Manage your data and permissions in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description: "Manage your data in Google Cloud Storage",
			},
		],
	},
	{
		version: "v1",
		title: "Storage Batch Operations API",
		description: "",
		discoveryRestUrl:
			"https://storagebatchoperations.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/storage/docs/batch-operations/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Storage Transfer API",
		description:
			"Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.",
		discoveryRestUrl:
			"https://storagetransfer.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/storage-transfer/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Street View Publish API",
		description:
			"Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.",
		discoveryRestUrl:
			"https://streetviewpublish.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/streetview/publish/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/streetviewpublish",
				description: "Publish and manage your 360 photos on Google Street View",
			},
		],
	},
	{
		version: "v1beta",
		title: "Security Token Service API",
		description:
			"The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.",
		discoveryRestUrl:
			"https://sts.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"http://cloud.google.com/iam/docs/workload-identity-federation",
		scopes: [],
	},
	{
		version: "v1",
		title: "Security Token Service API",
		description:
			"The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.",
		discoveryRestUrl: "https://sts.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"http://cloud.google.com/iam/docs/workload-identity-federation",
		scopes: [],
	},
	{
		version: "v1",
		title: "Tag Manager API",
		description:
			"This API allows clients to access and modify container and tag configuration.",
		discoveryRestUrl:
			"https://tagmanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/tag-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/tagmanager.readonly",
				description:
					"View your Google Tag Manager container and its subcomponents",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.delete.containers",
				description: "Delete your Google Tag Manager containers",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.publish",
				description: "Publish your Google Tag Manager container versions",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.users",
				description:
					"Manage user permissions of your Google Tag Manager account and container",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.accounts",
				description: "View and manage your Google Tag Manager accounts",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.edit.containers",
				description:
					"Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
				description: "Manage your Google Tag Manager container versions",
			},
		],
	},
	{
		version: "v2",
		title: "Tag Manager API",
		description:
			"This API allows clients to access and modify container and tag configuration.",
		discoveryRestUrl:
			"https://tagmanager.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/tag-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.accounts",
				description: "View and manage your Google Tag Manager accounts",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.publish",
				description: "Publish your Google Tag Manager container versions",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
				description: "Manage your Google Tag Manager container versions",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.readonly",
				description:
					"View your Google Tag Manager container and its subcomponents",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.delete.containers",
				description: "Delete your Google Tag Manager containers",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.edit.containers",
				description:
					"Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.users",
				description:
					"Manage user permissions of your Google Tag Manager account and container",
			},
		],
	},
	{
		version: "v1",
		title: "Google Tasks API",
		description:
			"The Google Tasks API lets you manage your tasks and task lists.",
		discoveryRestUrl: "https://tasks.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/tasks/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/tasks",
				description: "Create, edit, organize, and delete all your tasks",
			},
			{
				id: "https://www.googleapis.com/auth/tasks.readonly",
				description: "View your tasks",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Testing API",
		description:
			"Allows developers to run automated tests for their mobile applications on Google infrastructure.",
		discoveryRestUrl:
			"https://testing.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://firebase.google.com/docs/test-lab/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform.read-only",
				description:
					"View your data across Google Cloud services and see the email address of your Google Account",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Cloud Text-to-Speech API",
		description:
			"Synthesizes natural-sounding speech by applying powerful neural network models.",
		discoveryRestUrl:
			"https://texttospeech.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink: "https://cloud.google.com/text-to-speech/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Text-to-Speech API",
		description:
			"Synthesizes natural-sounding speech by applying powerful neural network models.",
		discoveryRestUrl:
			"https://texttospeech.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/text-to-speech/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta3",
		title: "Cloud Tool Results API",
		description: "API to publish and access results from developer tools.",
		discoveryRestUrl:
			"https://toolresults.googleapis.com/$discovery/rest?version=v1beta3",
		documentationLink: "https://firebase.google.com/docs/test-lab/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "Cloud TPU API",
		description:
			"TPU API provides customers with access to Google TPU technology.",
		discoveryRestUrl:
			"https://tpu.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/tpu/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2alpha1",
		title: "Cloud TPU API",
		description:
			"TPU API provides customers with access to Google TPU technology.",
		discoveryRestUrl:
			"https://tpu.googleapis.com/$discovery/rest?version=v2alpha1",
		documentationLink: "https://cloud.google.com/tpu/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud TPU API",
		description:
			"TPU API provides customers with access to Google TPU technology.",
		discoveryRestUrl: "https://tpu.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/tpu/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud TPU API",
		description:
			"TPU API provides customers with access to Google TPU technology.",
		discoveryRestUrl: "https://tpu.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/tpu/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v2",
		title: "Traffic Director API",
		description: "",
		discoveryRestUrl:
			"https://trafficdirector.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/traffic-director",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3",
		title: "Traffic Director API",
		description: "",
		discoveryRestUrl:
			"https://trafficdirector.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/traffic-director",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Transcoder API",
		description:
			"This API converts video files into formats suitable for consumer distribution. For more information, see the Transcoder API overview <https://cloud.google.com/transcoder/docs/concepts/overview>.",
		discoveryRestUrl:
			"https://transcoder.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/transcoder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3beta1",
		title: "Cloud Translation API",
		description:
			"Integrates text translation into your website or application.",
		discoveryRestUrl:
			"https://translation.googleapis.com/$discovery/rest?version=v3beta1",
		documentationLink: "https://cloud.google.com/translate/docs/quickstarts",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-translation",
				description:
					"Translate text from one language to another using Google Translate",
			},
		],
	},
	{
		version: "v2",
		title: "Cloud Translation API",
		description:
			"Integrates text translation into your website or application.",
		discoveryRestUrl:
			"https://translation.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://cloud.google.com/translate/docs/quickstarts",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-translation",
				description:
					"Translate text from one language to another using Google Translate",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"View and manage your data across Google Cloud Platform services",
			},
		],
	},
	{
		version: "v3",
		title: "Cloud Translation API",
		description:
			"Integrates text translation into your website or application.",
		discoveryRestUrl:
			"https://translation.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://cloud.google.com/translate/docs/quickstarts",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-translation",
				description:
					"Translate text from one language to another using Google Translate",
			},
		],
	},
	{
		version: "v1",
		title: "Travel Impact Model API",
		description:
			"Travel Impact Model API lets you query travel carbon emission estimates.",
		discoveryRestUrl:
			"https://travelimpactmodel.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/travel/impact-model",
		scopes: [],
	},
	{
		version: "v1",
		title: "Google Vault API",
		description:
			"Retention and eDiscovery for Google Workspace. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. For example, to download an export, an account needs the **Manage Exports** privilege and the matter shared with them.",
		discoveryRestUrl: "https://vault.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/vault",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/ediscovery",
				description: "Manage your eDiscovery data",
			},
			{
				id: "https://www.googleapis.com/auth/ediscovery.readonly",
				description: "View your eDiscovery data",
			},
		],
	},
	{
		version: "v1",
		title: "Chrome Verified Access API",
		description:
			"API for Verified Access chrome extension to provide credential verification for chrome devices connecting to an enterprise network",
		discoveryRestUrl:
			"https://verifiedaccess.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/chrome/verified-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/verifiedaccess",
				description: "Verify your enterprise credentials",
			},
		],
	},
	{
		version: "v2",
		title: "Chrome Verified Access API",
		description:
			"API for Verified Access chrome extension to provide credential verification for chrome devices connecting to an enterprise network",
		discoveryRestUrl:
			"https://verifiedaccess.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/chrome/verified-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/verifiedaccess",
				description: "Verify your enterprise credentials",
			},
		],
	},
	{
		version: "v1",
		title: "versionhistory.googleapis.com API",
		description: "Version History API - Prod",
		discoveryRestUrl:
			"https://versionhistory.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developer.chrome.com/docs/web-platform/versionhistory/guide",
		scopes: [],
	},
	{
		version: "v1p1beta1",
		title: "Cloud Video Intelligence API",
		description:
			"Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.",
		discoveryRestUrl:
			"https://videointelligence.googleapis.com/$discovery/rest?version=v1p1beta1",
		documentationLink: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1p2beta1",
		title: "Cloud Video Intelligence API",
		description:
			"Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.",
		discoveryRestUrl:
			"https://videointelligence.googleapis.com/$discovery/rest?version=v1p2beta1",
		documentationLink: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1p3beta1",
		title: "Cloud Video Intelligence API",
		description:
			"Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.",
		discoveryRestUrl:
			"https://videointelligence.googleapis.com/$discovery/rest?version=v1p3beta1",
		documentationLink: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta2",
		title: "Cloud Video Intelligence API",
		description:
			"Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.",
		discoveryRestUrl:
			"https://videointelligence.googleapis.com/$discovery/rest?version=v1beta2",
		documentationLink: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Video Intelligence API",
		description:
			"Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.",
		discoveryRestUrl:
			"https://videointelligence.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1p1beta1",
		title: "Cloud Vision API",
		description:
			"Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.",
		discoveryRestUrl:
			"https://vision.googleapis.com/$discovery/rest?version=v1p1beta1",
		documentationLink: "https://cloud.google.com/vision/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-vision",
				description:
					"Apply machine learning models to understand and label images",
			},
		],
	},
	{
		version: "v1p2beta1",
		title: "Cloud Vision API",
		description:
			"Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.",
		discoveryRestUrl:
			"https://vision.googleapis.com/$discovery/rest?version=v1p2beta1",
		documentationLink: "https://cloud.google.com/vision/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-vision",
				description:
					"Apply machine learning models to understand and label images",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Vision API",
		description:
			"Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.",
		discoveryRestUrl:
			"https://vision.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/vision/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-vision",
				description:
					"Apply machine learning models to understand and label images",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha1",
		title: "VM Migration API",
		description:
			"Use the Migrate to Virtual Machines API to programmatically migrate workloads.",
		discoveryRestUrl:
			"https://vmmigration.googleapis.com/$discovery/rest?version=v1alpha1",
		documentationLink: "https://cloud.google.com/migrate/virtual-machines",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "VM Migration API",
		description:
			"Use the Migrate to Virtual Machines API to programmatically migrate workloads.",
		discoveryRestUrl:
			"https://vmmigration.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/migrate/virtual-machines",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "VMware Engine API",
		description:
			"The Google VMware Engine API lets you programmatically manage VMware environments.",
		discoveryRestUrl:
			"https://vmwareengine.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/solutions/vmware-as-a-service",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta1",
		title: "Serverless VPC Access API",
		description: "API for managing VPC access connectors.",
		discoveryRestUrl:
			"https://vpcaccess.googleapis.com/$discovery/rest?version=v1beta1",
		documentationLink:
			"https://cloud.google.com/vpc/docs/configure-serverless-vpc-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Serverless VPC Access API",
		description: "API for managing VPC access connectors.",
		discoveryRestUrl:
			"https://vpcaccess.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/vpc/docs/configure-serverless-vpc-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Wallet API",
		description: "API for issuers to save and manage Google Wallet Objects.",
		discoveryRestUrl:
			"https://walletobjects.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/pay/passes",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/wallet_object.issuer",
				description:
					"Private Service: https://www.googleapis.com/auth/wallet_object.issuer",
			},
		],
	},
	{
		version: "v1",
		title: "Web Fonts Developer API",
		description:
			"The Google Web Fonts Developer API lets you retrieve information about web fonts served by Google.",
		discoveryRestUrl:
			"https://webfonts.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/fonts/docs/developer_api",
		scopes: [],
	},
	{
		version: "v1",
		title: "Web Risk API",
		description: "",
		discoveryRestUrl:
			"https://webrisk.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/web-risk/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1alpha",
		title: "Web Security Scanner API",
		description:
			"Scans your Compute and App Engine apps for common web vulnerabilities.",
		discoveryRestUrl:
			"https://websecurityscanner.googleapis.com/$discovery/rest?version=v1alpha",
		documentationLink:
			"https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Web Security Scanner API",
		description:
			"Scans your Compute and App Engine apps for common web vulnerabilities.",
		discoveryRestUrl:
			"https://websecurityscanner.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink:
			"https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Web Security Scanner API",
		description:
			"Scans your Compute and App Engine apps for common web vulnerabilities.",
		discoveryRestUrl:
			"https://websecurityscanner.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Workflow Executions API",
		description: "Execute workflows created with Workflows API.",
		discoveryRestUrl:
			"https://workflowexecutions.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Workflow Executions API",
		description: "Execute workflows created with Workflows API.",
		discoveryRestUrl:
			"https://workflowexecutions.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1beta",
		title: "Workflows API",
		description:
			"Manage workflow definitions. To execute workflows and manage executions, see the Workflows Executions API.",
		discoveryRestUrl:
			"https://workflows.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Workflows API",
		description:
			"Manage workflow definitions. To execute workflows and manage executions, see the Workflows Executions API.",
		discoveryRestUrl:
			"https://workflows.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Workload Manager API",
		description:
			"Workload Manager is a service that provides tooling for enterprise workloads to automate the deployment and validation of your workloads against best practices and recommendations.",
		discoveryRestUrl:
			"https://workloadmanager.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/workload-manager/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Google Workspace Events API",
		description:
			"The Google Workspace Events API lets you subscribe to events and manage change notifications across Google Workspace applications.",
		discoveryRestUrl:
			"https://workspaceevents.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/events",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chat.app.memberships",
				description:
					"On their own behalf, apps in Google Chat can see, add, update, and remove members from conversations and spaces",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.messages.readonly",
				description:
					"On their own behalf, apps in Google Chat can see all messages and their associated reactions and message content",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.spaces",
				description:
					"On their own behalf, apps in Google Chat can create conversations and spaces and see or update their metadata (including history settings and access settings)",
			},
			{
				id: "https://www.googleapis.com/auth/chat.bot",
				description:
					"Private Service: https://www.googleapis.com/auth/chat.bot",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships",
				description:
					"See, add, update, and remove members from conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships.readonly",
				description: "View members in Google Chat conversations.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages",
				description:
					"See, compose, send, update, and delete messages as well as their message content; add, see, and delete reactions to messages.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions",
				description:
					"See, add, and delete reactions as well as their reaction content to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions.readonly",
				description:
					"View reactions as well as their reaction content to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.readonly",
				description:
					"See messages as well as their reactions and message content in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces",
				description:
					"Create conversations and spaces and see or update metadata (including history settings and access settings) in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces.readonly",
				description: "View chat and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata",
				description: "View and manage metadata of files in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/drive.metadata.readonly",
				description: "See information about your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/meetings.space.created",
				description:
					"Create, edit, and see information about your Google Meet conferences created by the app.",
			},
			{
				id: "https://www.googleapis.com/auth/meetings.space.readonly",
				description:
					"Read information about any of your Google Meet conferences",
			},
		],
	},
	{
		version: "v1beta",
		title: "Cloud Workstations API",
		description:
			"Allows administrators to create managed developer environments in the cloud.",
		discoveryRestUrl:
			"https://workstations.googleapis.com/$discovery/rest?version=v1beta",
		documentationLink: "https://cloud.google.com/workstations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v1",
		title: "Cloud Workstations API",
		description:
			"Allows administrators to create managed developer environments in the cloud.",
		discoveryRestUrl:
			"https://workstations.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://cloud.google.com/workstations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		version: "v3",
		title: "YouTube Data API v3",
		description:
			"The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.",
		discoveryRestUrl:
			"https://youtube.googleapis.com/$discovery/rest?version=v3",
		documentationLink: "https://developers.google.com/youtube/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/youtubepartner",
				description:
					"View and manage your assets and associated content on YouTube",
			},
			{
				id: "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
				description:
					"See a list of your current active channel members, their current level, and when they became a member",
			},
			{
				id: "https://www.googleapis.com/auth/youtube.force-ssl",
				description:
					"See, edit, and permanently delete your YouTube videos, ratings, comments and captions",
			},
			{
				id: "https://www.googleapis.com/auth/youtube",
				description: "Manage your YouTube account",
			},
			{
				id: "https://www.googleapis.com/auth/youtube.readonly",
				description: "View your YouTube account",
			},
			{
				id: "https://www.googleapis.com/auth/youtube.upload",
				description: "Manage your YouTube videos",
			},
			{
				id: "https://www.googleapis.com/auth/youtubepartner-channel-audit",
				description:
					"View private information of your YouTube channel relevant during the audit process with a YouTube partner",
			},
		],
	},
	{
		version: "v2",
		title: "YouTube Analytics API",
		description: "Retrieves your YouTube Analytics data.",
		discoveryRestUrl:
			"https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/youtube/analytics",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/youtube.readonly",
				description: "View your YouTube account",
			},
			{
				id: "https://www.googleapis.com/auth/youtubepartner",
				description:
					"View and manage your assets and associated content on YouTube",
			},
			{
				id: "https://www.googleapis.com/auth/youtube",
				description: "Manage your YouTube account",
			},
			{
				id: "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
				description:
					"View monetary and non-monetary YouTube Analytics reports for your YouTube content",
			},
			{
				id: "https://www.googleapis.com/auth/yt-analytics.readonly",
				description: "View YouTube Analytics reports for your YouTube content",
			},
		],
	},
	{
		version: "v1",
		title: "YouTube Reporting API",
		description:
			"Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.",
		discoveryRestUrl:
			"https://youtubereporting.googleapis.com/$discovery/rest?version=v1",
		documentationLink:
			"https://developers.google.com/youtube/reporting/v1/reports/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/yt-analytics-monetary.readonly",
				description:
					"View monetary and non-monetary YouTube Analytics reports for your YouTube content",
			},
			{
				id: "https://www.googleapis.com/auth/yt-analytics.readonly",
				description: "View YouTube Analytics reports for your YouTube content",
			},
		],
	},
];
