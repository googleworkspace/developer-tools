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
		title: "AI Platform Training & Prediction API",
		version: "v1",
		documentation: "https://cloud.google.com/ml/",
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
		title: "API Gateway API",
		version: "v1",
		documentation: "https://cloud.google.com/api-gateway/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "API Keys API",
		version: "v2",
		documentation: "https://cloud.google.com/api-keys/docs",
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
		title: "API Management API",
		version: "v1alpha",
		documentation: "https://cloud.google.com/apigee/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "API hub API",
		version: "v1",
		documentation:
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
		title: "Access Approval API",
		version: "v1",
		documentation:
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
		title: "Access Context Manager API",
		version: "v1",
		documentation:
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
		title: "Ad Exchange Buyer API II",
		version: "v2beta1",
		documentation:
			"https://developers.google.com/authorized-buyers/apis/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adexchange.buyer",
				description: "Manage your Ad Exchange buyer account configuration",
			},
		],
	},
	{
		title: "AdMob API",
		version: "v1",
		documentation: "https://developers.google.com/admob/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admob.readonly",
				description: "See your AdMob data",
			},
			{
				id: "https://www.googleapis.com/auth/admob.report",
				description: "See your AdMob data",
			},
		],
	},
	{
		title: "AdSense Management API",
		version: "v2",
		documentation: "https://developers.google.com/adsense/management/",
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
		title: "AdSense Platform API",
		version: "v1",
		documentation: "https://developers.google.com/adsense/platforms/",
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
		title: "Address Validation API",
		version: "v1",
		documentation:
			"https://developers.google.com/maps/documentation/addressvalidation",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Admin SDK API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/admin/",
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
		title: "Admin SDK API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/admin/",
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
		title: "Admin SDK API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/admin/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/admin.chrome.printers",
				description:
					"See, add, edit, and permanently delete the printers that your organization can use with Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/admin.chrome.printers.readonly",
				description:
					"See the printers that your organization can use with Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.customer",
				description: "View and manage customer related information",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.customer.readonly",
				description: "View customer related information",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.chromeos",
				description: "View and manage your ChromeOS devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly",
				description: "View your ChromeOS devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.mobile",
				description: "View and manage your mobile devices' metadata",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.device.mobile.action",
				description:
					"Manage your mobile devices by performing administrative tasks",
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
				id: "https://www.googleapis.com/auth/admin.directory.domain.readonly",
				description: "View domains related to your customers",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group",
				description:
					"View and manage the provisioning of groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.member",
				description: "View and manage group subscriptions on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
				description: "View group subscriptions on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group.readonly",
				description: "View groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.orgunit",
				description: "View and manage organization units on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.orgunit.readonly",
				description: "View organization units on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.resource.calendar",
				description:
					"View and manage the provisioning of calendar resources on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
				description: "View calendar resources on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.rolemanagement",
				description: "Manage delegated admin roles for your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
				description: "View delegated admin roles for your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user",
				description: "View and manage the provisioning of users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.alias",
				description: "View and manage user aliases on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.alias.readonly",
				description: "View user aliases on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.readonly",
				description: "See info about users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user.security",
				description: "Manage data access permissions for users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.userschema",
				description:
					"View and manage the provisioning of user schemas on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.userschema.readonly",
				description: "View user schemas on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Advisory Notifications API",
		version: "v1",
		documentation: "https://cloud.google.com/advisory-notifications",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Air Quality API",
		version: "v1",
		documentation:
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
		title: "AlloyDB API",
		version: "v1",
		documentation: "https://cloud.google.com/alloydb/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Analytics Hub API",
		version: "v1",
		documentation:
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
		title: "Android Management API",
		version: "v1",
		documentation: "https://developers.google.com/android/management",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidmanagement",
				description: "Manage Android devices and apps for your customers",
			},
		],
	},
	{
		title: "Apigee API",
		version: "v1",
		documentation: "https://cloud.google.com/apigee-api-management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Apigee Registry API",
		version: "v1",
		documentation:
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
		title: "App Engine Admin API",
		version: "v1",
		documentation: "https://cloud.google.com/appengine/docs/admin-api/",
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
		title: "App Hub API",
		version: "v1",
		documentation: "https://cloud.google.com/app-hub/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Application Integration API",
		version: "v1",
		documentation: "https://cloud.google.com/application-integration",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Apps Script API",
		version: "v1",
		documentation: "https://developers.google.com/apps-script/api/",
		scopes: [
			{
				id: "https://mail.google.com/",
				description:
					"Read, compose, send, and permanently delete all your email from Gmail",
			},
			{
				id: "https://www.google.com/calendar/feeds",
				description:
					"See, edit, share, and permanently delete all the calendars you can access using Google Calendar",
			},
			{
				id: "https://www.google.com/m8/feeds",
				description:
					"See, edit, download, and permanently delete your contacts",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.group",
				description:
					"View and manage the provisioning of groups on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/admin.directory.user",
				description: "View and manage the provisioning of users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/documents",
				description:
					"See, edit, create, and delete all your Google Docs documents",
			},
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/forms",
				description: "View and manage your forms in Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/forms.currentonly",
				description:
					"View and manage forms that this application has been installed in",
			},
			{
				id: "https://www.googleapis.com/auth/groups",
				description: "View and manage your Google Groups",
			},
			{
				id: "https://www.googleapis.com/auth/script.deployments",
				description: "Create and update Google Apps Script deployments",
			},
			{
				id: "https://www.googleapis.com/auth/script.deployments.readonly",
				description: "View Google Apps Script deployments",
			},
			{
				id: "https://www.googleapis.com/auth/script.metrics",
				description: "View Google Apps Script project's metrics",
			},
			{
				id: "https://www.googleapis.com/auth/script.processes",
				description: "View Google Apps Script processes",
			},
			{
				id: "https://www.googleapis.com/auth/script.projects",
				description: "Create and update Google Apps Script projects",
			},
			{
				id: "https://www.googleapis.com/auth/script.projects.readonly",
				description: "View Google Apps Script projects",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.email",
				description: "See your primary Google Account email address",
			},
		],
	},
	{
		title: "Area120 Tables API",
		version: "v1alpha1",
		documentation: "https://support.google.com/area120-tables/answer/10011390",
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
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
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
		],
	},
	{
		title: "Artifact Registry API",
		version: "v1",
		documentation: "https://cloud.google.com/artifacts/docs/",
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
		title: "Assured Workloads API",
		version: "v1",
		documentation: "https://cloud.google.com/learnmoreurl",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Authorized Buyers Marketplace API",
		version: "v1",
		documentation:
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
		title: "Backup and DR Service API",
		version: "v1",
		documentation: "https://cloud.google.com/backup-disaster-recovery",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Backup for GKE API",
		version: "v1",
		documentation:
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
		title: "Bare Metal Solution API",
		version: "v2",
		documentation: "https://cloud.google.com/bare-metal",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Batch API",
		version: "v1",
		documentation: "https://cloud.google.com/batch/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "BeyondCorp API",
		version: "v1",
		documentation: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "BigLake API",
		version: "v1",
		documentation: "https://cloud.google.com/bigquery/",
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
		title: "BigQuery API",
		version: "v2",
		documentation: "https://cloud.google.com/bigquery/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigquery",
				description:
					"View and manage your data in Google BigQuery and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/bigquery.insertdata",
				description: "Insert data into Google BigQuery",
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
			{
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
		],
	},
	{
		title: "BigQuery Connection API",
		version: "v1",
		documentation:
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
		title: "BigQuery Data Policy API",
		version: "v1",
		documentation: "https://cloud.google.com/bigquery/docs/column-data-masking",
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
		title: "BigQuery Data Transfer API",
		version: "v1",
		documentation: "https://cloud.google.com/bigquery-transfer/",
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
		title: "BigQuery Reservation API",
		version: "v1",
		documentation: "https://cloud.google.com/bigquery/",
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
		title: "Binary Authorization API",
		version: "v1",
		documentation: "https://cloud.google.com/binary-authorization/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Blockchain Node Engine API",
		version: "v1",
		documentation: "https://cloud.google.com/blockchain-node-engine",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Blogger API",
		version: "v3",
		documentation:
			"https://developers.google.com/blogger/docs/3.0/getting_started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/blogger",
				description: "Manage your Blogger account",
			},
			{
				id: "https://www.googleapis.com/auth/blogger.readonly",
				description: "View your Blogger account",
			},
		],
	},
	{
		title: "Books API",
		version: "v1",
		documentation:
			"https://code.google.com/apis/books/docs/v1/getting_started.html",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/books",
				description: "Manage your books",
			},
		],
	},
	{
		title: "CSS API",
		version: "v1",
		documentation:
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
		title: "Calendar API",
		version: "v3",
		documentation: "https://developers.google.com/workspace/calendar/firstapp",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/calendar",
				description:
					"See, edit, share, and permanently delete all the calendars you can access using Google Calendar",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.acls",
				description:
					"See and change the sharing permissions of Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.acls.readonly",
				description: "See the sharing permissions of Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.app.created",
				description:
					"Make secondary Google calendars, and see, create, change, and delete events on them",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendarlist",
				description:
					"See, add, and remove Google calendars you\u2019re subscribed to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.calendarlist.readonly",
				description:
					"See the list of Google calendars you\u2019re subscribed to",
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
				id: "https://www.googleapis.com/auth/calendar.events",
				description: "View and edit events on all your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.freebusy",
				description:
					"See the availability on Google calendars you have access to",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.owned",
				description:
					"See, create, change, and delete events on Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.owned.readonly",
				description: "See the events on Google calendars you own",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.public.readonly",
				description: "See the events on public calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.events.readonly",
				description: "View events on all your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.freebusy",
				description: "View your availability in your calendars",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.readonly",
				description:
					"See and download any calendar you can access using your Google Calendar",
			},
			{
				id: "https://www.googleapis.com/auth/calendar.settings.readonly",
				description: "View your Calendar settings",
			},
		],
	},
	{
		title: "Campaign Manager 360 API",
		version: "v4",
		documentation: "https://developers.google.com/doubleclick-advertisers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/ddmconversions",
				description: "Manage DoubleClick Digital Marketing conversions",
			},
			{
				id: "https://www.googleapis.com/auth/dfareporting",
				description: "View and manage DoubleClick for Advertisers reports",
			},
			{
				id: "https://www.googleapis.com/auth/dfatrafficking",
				description:
					"View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
			},
		],
	},
	{
		title: "Certificate Authority API",
		version: "v1",
		documentation: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Certificate Manager API",
		version: "v1",
		documentation: "https://cloud.google.com/certificate-manager",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Chrome Management API",
		version: "v1",
		documentation: "https://developers.google.com/chrome/management/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chrome.management.appdetails.readonly",
				description:
					"See detailed information about apps installed on Chrome browsers and devices managed by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.profiles",
				description:
					"See, edit, delete, and take other necessary actions on Chrome browser profiles managed by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.profiles.readonly",
				description: "See Chrome browser profiles managed by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.reports.readonly",
				description:
					"See reports about devices and Chrome browsers managed within your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.telemetry.readonly",
				description:
					"See basic device and telemetry information collected from ChromeOS devices or users managed within your organization",
			},
		],
	},
	{
		title: "Chrome Policy API",
		version: "v1",
		documentation: "http://developers.google.com/chrome/policy",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chrome.management.policy",
				description:
					"See, edit, create or delete policies applied to ChromeOS and Chrome Browsers managed within your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chrome.management.policy.readonly",
				description:
					"See policies applied to ChromeOS and Chrome Browsers managed within your organization",
			},
		],
	},
	{
		title: "Chrome Verified Access API",
		version: "v2",
		documentation: "https://developers.google.com/chrome/verified-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/verifiedaccess",
				description: "Verify your enterprise credentials",
			},
		],
	},
	{
		title: "Cloud Asset API",
		version: "v1",
		documentation: "https://cloud.google.com/asset-inventory/docs/quickstart",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Bigtable Admin API",
		version: "v2",
		documentation: "https://cloud.google.com/bigtable/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/bigtable.admin",
				description: "Administer your Cloud Bigtable tables and clusters",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.cluster",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.instance",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/bigtable.admin.table",
				description: "Administer your Cloud Bigtable tables",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin",
				description: "Administer your Cloud Bigtable tables and clusters",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin.cluster",
				description: "Administer your Cloud Bigtable clusters",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-bigtable.admin.table",
				description: "Administer your Cloud Bigtable tables",
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
		title: "Cloud Billing API",
		version: "v1",
		documentation: "https://cloud.google.com/billing/docs/apis",
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
		title: "Cloud Billing Budget API",
		version: "v1",
		documentation:
			"https://cloud.google.com/billing/docs/how-to/budget-api-overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-billing",
				description:
					"View and manage your Google Cloud Platform billing accounts",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Build API",
		version: "v2",
		documentation: "https://cloud.google.com/cloud-build/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Channel API",
		version: "v1",
		documentation: "https://cloud.google.com/channel",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.order",
				description: "Manage users on your domain",
			},
			{
				id: "https://www.googleapis.com/auth/apps.reports.usage.readonly",
				description: "View usage reports for your G Suite domain",
			},
		],
	},
	{
		title: "Cloud Composer API",
		version: "v1",
		documentation: "https://cloud.google.com/composer/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Controls Partner API",
		version: "v1",
		documentation:
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
		title: "Cloud DNS API",
		version: "v1",
		documentation: "https://cloud.google.com/dns/docs",
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
				id: "https://www.googleapis.com/auth/ndev.clouddns.readonly",
				description: "View your DNS records hosted by Google Cloud DNS",
			},
			{
				id: "https://www.googleapis.com/auth/ndev.clouddns.readwrite",
				description:
					"View and manage your DNS records hosted by Google Cloud DNS",
			},
		],
	},
	{
		title: "Cloud Data Fusion API",
		version: "v1",
		documentation: "https://cloud.google.com/data-fusion/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Dataplex API",
		version: "v1",
		documentation: "https://cloud.google.com/dataplex/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Dataproc API",
		version: "v1",
		documentation: "https://cloud.google.com/dataproc/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Datastore API",
		version: "v1",
		documentation: "https://cloud.google.com/datastore/",
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
		title: "Cloud Deploy API",
		version: "v1",
		documentation: "https://cloud.google.com/deploy/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Deployment Manager V2 API",
		version: "v2",
		documentation: "https://cloud.google.com/deployment-manager",
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
		title: "Cloud Document AI API",
		version: "v1",
		documentation: "https://cloud.google.com/document-ai/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Domains API",
		version: "v1",
		documentation: "https://cloud.google.com/domains/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Filestore API",
		version: "v1",
		documentation: "https://cloud.google.com/filestore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Firestore API",
		version: "v1",
		documentation: "https://cloud.google.com/firestore",
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
		title: "Cloud Functions API",
		version: "v2",
		documentation: "https://cloud.google.com/functions",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Healthcare API",
		version: "v1",
		documentation: "https://cloud.google.com/healthcare",
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
		title: "Cloud IDS API",
		version: "v1",
		documentation: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Identity API",
		version: "v1",
		documentation: "https://cloud.google.com/identity/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-identity.devices.lookup",
				description: "See your device details",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups",
				description:
					"See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.groups.readonly",
				description:
					"See any Cloud Identity Groups that you can access, including group members and their emails",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso",
				description:
					"See and edit all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.inboundsso.readonly",
				description:
					"See all of the Inbound SSO profiles and their assignments to any Org Units or Google Groups in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies",
				description:
					"See and edit policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-identity.policies.readonly",
				description: "See policies in your Cloud Identity Organization.",
			},
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Identity-Aware Proxy API",
		version: "v1",
		documentation: "https://cloud.google.com/iap",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Key Management Service (KMS) API",
		version: "v1",
		documentation: "https://cloud.google.com/kms/",
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
		title: "Cloud Life Sciences API",
		version: "v2beta",
		documentation: "https://cloud.google.com/life-sciences",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Logging API",
		version: "v2",
		documentation: "https://cloud.google.com/logging/docs/",
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
				id: "https://www.googleapis.com/auth/logging.admin",
				description: "Administrate log data for your projects",
			},
			{
				id: "https://www.googleapis.com/auth/logging.read",
				description: "View log data for your projects",
			},
			{
				id: "https://www.googleapis.com/auth/logging.write",
				description: "Submit log data for your projects",
			},
		],
	},
	{
		title: "Cloud Memorystore for Memcached API",
		version: "v1",
		documentation: "https://cloud.google.com/memorystore/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Monitoring API",
		version: "v3",
		documentation: "https://cloud.google.com/monitoring/api/",
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
		title: "Cloud Natural Language API",
		version: "v2",
		documentation: "https://cloud.google.com/natural-language/",
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
		title: "Cloud OS Login API",
		version: "v1",
		documentation: "https://cloud.google.com/compute/docs/oslogin/",
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
		title: "Cloud Profiler API",
		version: "v2",
		documentation: "https://cloud.google.com/profiler/",
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
		title: "Cloud Pub/Sub API",
		version: "v1",
		documentation: "https://cloud.google.com/pubsub/docs",
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
		title: "Cloud Resource Manager API",
		version: "v3",
		documentation: "https://cloud.google.com/resource-manager",
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
		title: "Cloud Run Admin API",
		version: "v2",
		documentation: "https://cloud.google.com/run/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Runtime Configuration API",
		version: "v1",
		documentation:
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
		title: "Cloud SQL Admin API",
		version: "v1",
		documentation: "https://developers.google.com/cloud-sql/",
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
		title: "Cloud Scheduler API",
		version: "v1",
		documentation: "https://cloud.google.com/scheduler/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Search API",
		version: "v1",
		documentation: "https://developers.google.com/cloud-search/docs/guides/",
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
		title: "Cloud Shell API",
		version: "v1",
		documentation: "https://cloud.google.com/shell/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Spanner API",
		version: "v1",
		documentation: "https://cloud.google.com/spanner/",
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
		title: "Cloud Speech-to-Text API",
		version: "v1",
		documentation:
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
		title: "Cloud Storage JSON API",
		version: "v1",
		documentation: "https://developers.google.com/storage/docs/json_api/",
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
		title: "Cloud Storage for Firebase API",
		version: "v1beta",
		documentation: "https://firebase.google.com/docs/storage",
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
		title: "Cloud TPU API",
		version: "v2",
		documentation: "https://cloud.google.com/tpu/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Talent Solution API",
		version: "v4",
		documentation: "https://cloud.google.com/talent-solution/job-search/docs/",
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
		title: "Cloud Tasks API",
		version: "v2",
		documentation: "https://cloud.google.com/tasks/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Testing API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/test-lab/",
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
		title: "Cloud Text-to-Speech API",
		version: "v1",
		documentation: "https://cloud.google.com/text-to-speech/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Tool Results API",
		version: "v1beta3",
		documentation: "https://firebase.google.com/docs/test-lab/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Trace API",
		version: "v2",
		documentation: "https://cloud.google.com/trace",
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
		title: "Cloud Translation API",
		version: "v3",
		documentation: "https://cloud.google.com/translate/docs/quickstarts",
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
		title: "Cloud Video Intelligence API",
		version: "v1",
		documentation: "https://cloud.google.com/video-intelligence/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Cloud Vision API",
		version: "v1",
		documentation: "https://cloud.google.com/vision/",
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
		title: "Cloud Workstations API",
		version: "v1",
		documentation: "https://cloud.google.com/workstations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Compute Engine API",
		version: "v1",
		documentation: "https://cloud.google.com/compute/",
		scopes: [
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
				id: "https://www.googleapis.com/auth/devstorage.full_control",
				description:
					"Manage your data and permissions in Cloud Storage and see the email address for your Google Account",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_only",
				description: "View your data in Google Cloud Storage",
			},
			{
				id: "https://www.googleapis.com/auth/devstorage.read_write",
				description:
					"Manage your data in Cloud Storage and see the email address of your Google Account",
			},
		],
	},
	{
		title: "Connectors API",
		version: "v2",
		documentation:
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
		title: "Contact Center AI Insights API",
		version: "v1",
		documentation: "https://cloud.google.com/contact-center/insights/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Contact Center AI Platform API",
		version: "v1alpha1",
		documentation:
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
		title: "Container Analysis API",
		version: "v1",
		documentation:
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
		title: "Content API for Shopping",
		version: "v2.1",
		documentation: "https://developers.google.com/shopping-content/v2/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		title: "Data Labeling API",
		version: "v1beta1",
		documentation: "https://cloud.google.com/data-labeling/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Data Lineage API",
		version: "v1",
		documentation: "https://cloud.google.com/data-catalog",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Data Portability API",
		version: "v1",
		documentation: "https://developers.google.com/data-portability",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/dataportability.alerts.subscriptions",
				description:
					"Move a copy of the Google Alerts subscriptions you created",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.businessmessaging.conversations",
				description:
					"Move a copy of messages between you and the businesses you have conversations with across Google services",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.autofill",
				description:
					"Move a copy of the information you entered into online forms in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.bookmarks",
				description: "Move a copy of pages you bookmarked in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.dictionary",
				description: "Move a copy of words you added to Chrome's dictionary",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.extensions",
				description:
					"Move a copy of extensions you installed from the Chrome Web Store",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.history",
				description: "Move a copy of sites you visited in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.reading_list",
				description:
					"Move a copy of pages you added to your reading list in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.chrome.settings",
				description: "Move a copy of your settings in Chrome",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.follows",
				description:
					"Move a copy of searches and sites you follow, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.likes",
				description:
					"Move a copy of links to your liked documents, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.discover.not_interested",
				description:
					"Move a copy of content you marked as not interested, saved by Discover",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.aliased_places",
				description: "Move a copy of the places you labeled on Maps",
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
				id: "https://www.googleapis.com/auth/dataportability.maps.ev_profile",
				description: "Move a copy of your electric vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.factual_contributions",
				description:
					"Move a copy of the corrections you made to places or map information on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.offering_contributions",
				description: "Move a copy of your updates to places on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.photos_videos",
				description: "Move a copy of the photos and videos you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.questions_answers",
				description:
					"Move a copy of the questions and answers you posted on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.reviews",
				description: "Move a copy of your reviews and posts on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.starred_places",
				description: "Move a copy of your Starred places list on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.maps.vehicle_profile",
				description: "Move a copy of your vehicle profile on Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.maps",
				description: "Move a copy of your Maps activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.myadcenter",
				description: "Move a copy of your My Ad Center activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.play",
				description: "Move a copy of your Google Play activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.search",
				description: "Move a copy of your Google Search activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.shopping",
				description: "Move a copy of your Shopping activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.myactivity.youtube",
				description: "Move a copy of your YouTube activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.mymaps.maps",
				description: "Move a copy of the maps you created in My Maps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.order_reserve.purchases_reservations",
				description:
					"Move a copy of your food purchase and reservation activity",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.devices",
				description:
					"Move a copy of information about your devices with Google Play Store installed",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.grouping",
				description:
					"Move a copy of your Google Play Store Grouping tags created by app developers",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.installs",
				description: "Move a copy of your Google Play Store app installations",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.library",
				description:
					"Move a copy of your Google Play Store downloads, including books, games, and apps",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.playpoints",
				description:
					"Move a copy of information about your Google Play Store Points",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.promotions",
				description:
					"Move a copy of information about your Google Play Store promotions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.purchases",
				description: "Move a copy of your Google Play Store purchases",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.redemptions",
				description:
					"Move a copy of your Google Play Store redemption activities",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.subscriptions",
				description: "Move a copy of your Google Play Store subscriptions",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.play.usersettings",
				description:
					"Move a copy of your Google Play Store user settings and preferences",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.saved.collections",
				description:
					"Move a copy of your saved links, images, places, and collections from your use of Google services",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.comments",
				description: "Move a copy of your comments on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.reviews_and_stars",
				description: "Move a copy of your media reviews on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.streaming_video_providers",
				description:
					"Move a copy of your self-reported video streaming provider preferences from Google Search and Google TV",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.search_ugc.media.thumbs",
				description:
					"Move a copy of your indicated thumbs up and thumbs down on media in Google Search and Google TV",
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
				id: "https://www.googleapis.com/auth/dataportability.searchnotifications.subscriptions",
				description:
					"Move a copy of your notification subscriptions on Google Search app",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.addresses",
				description: "Move a copy of your shipping information on Shopping",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.shopping.reviews",
				description:
					"Move a copy of reviews you wrote about products or online stores on Google Search",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.streetview.imagery",
				description:
					"Move a copy of the images and videos you uploaded to Street View",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.channel",
				description: "Move a copy of information about your YouTube channel",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.clips",
				description: "Move a copy of your YouTube clips metadata",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.comments",
				description: "Move a copy of your YouTube comments",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.live_chat",
				description: "Move a copy of your YouTube messages in live chat",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.music",
				description:
					"Move a copy of your uploaded YouTube music tracks and your YouTube music library",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.playable",
				description:
					"Move a copy of your YouTube playables saved game progress files",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.posts",
				description: "Move a copy of your YouTube posts",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_playlists",
				description: "Move a copy of your YouTube private playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.private_videos",
				description:
					"Move a copy of your private YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_playlists",
				description: "Move a copy of your public YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.public_videos",
				description:
					"Move a copy of your public YouTube videos and information about them",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.shopping",
				description:
					"Move a copy of your YouTube shopping wishlists, and wishlist items",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.subscriptions",
				description:
					"Move a copy of your YouTube channel subscriptions, even if they're private",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_playlists",
				description: "Move a copy of your unlisted YouTube playlists",
			},
			{
				id: "https://www.googleapis.com/auth/dataportability.youtube.unlisted_videos",
				description:
					"Move a copy of your unlisted YouTube videos and information about them",
			},
		],
	},
	{
		title: "Data pipelines API",
		version: "v1",
		documentation:
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
		title: "Database Migration API",
		version: "v1",
		documentation: "https://cloud.google.com/database-migration/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Dataflow API",
		version: "v1b3",
		documentation: "https://cloud.google.com/dataflow",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/compute",
				description: "View and manage your Google Compute Engine resources",
			},
		],
	},
	{
		title: "Dataform API",
		version: "v1beta1",
		documentation: "https://cloud.google.com/dataform/docs",
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
		title: "Datastream API",
		version: "v1",
		documentation: "https://cloud.google.com/datastream/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Developer Connect API",
		version: "v1",
		documentation: "http://cloud.google.com/developer-connect/docs/overview",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Dialogflow API",
		version: "v3",
		documentation: "https://cloud.google.com/dialogflow/",
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
		title: "Discovery Engine API",
		version: "v1",
		documentation: "https://cloud.google.com/generative-ai-app-builder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Display & Video 360 API",
		version: "v4",
		documentation: "https://developers.google.com/display-video/",
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
		],
	},
	{
		title: "Document AI Warehouse API",
		version: "v1",
		documentation: "https://cloud.google.com/document-warehouse",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "DoubleClick Bid Manager API",
		version: "v2",
		documentation: "https://developers.google.com/bid-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclickbidmanager",
				description: "View and manage your reports in DoubleClick Bid Manager",
			},
		],
	},
	{
		title: "Drive Activity API",
		version: "v2",
		documentation: "https://developers.google.com/workspace/drive/activity/",
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
		title: "Drive Labels API",
		version: "v2",
		documentation: "https://developers.google.com/workspace/drive/labels",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels",
				description:
					"See, edit, create, and delete all Google Drive labels in your organization, and see your organization's label-related admin policies",
			},
			{
				id: "https://www.googleapis.com/auth/drive.admin.labels.readonly",
				description:
					"See all Google Drive labels and label-related admin policies in your organization",
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
		title: "Enterprise License Manager API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/admin/licensing/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.licensing",
				description: "View and manage G Suite licenses for your domain",
			},
		],
	},
	{
		title: "Error Reporting API",
		version: "v1beta1",
		documentation: "https://cloud.google.com/error-reporting/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Essential Contacts API",
		version: "v1",
		documentation: "https://cloud.google.com/essentialcontacts/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Eventarc API",
		version: "v1",
		documentation: "https://cloud.google.com/eventarc",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Fact Check Tools API",
		version: "v1alpha1",
		documentation: "https://developers.google.com/fact-check/tools/api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/factchecktools",
				description: "Read, create, update, and delete your ClaimReview data.",
			},
		],
	},
	{
		title: "Firebase App Check API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/app-check",
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
		title: "Firebase App Distribution API",
		version: "v1",
		documentation: "https://firebase.google.com/products/app-distribution",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Firebase App Hosting API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/app-hosting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Firebase Cloud Messaging API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/cloud-messaging",
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
		title: "Firebase Cloud Messaging Data API",
		version: "v1beta1",
		documentation: "https://firebase.google.com/docs/cloud-messaging",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Firebase Data Connect API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/data-connect",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Firebase Dynamic Links API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/dynamic-links/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/firebase",
				description: "View and administer all your Firebase data and settings",
			},
		],
	},
	{
		title: "Firebase Hosting API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/hosting/",
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
		title: "Firebase ML API",
		version: "v1",
		documentation: "https://firebase.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Firebase Management API",
		version: "v1beta1",
		documentation: "https://firebase.google.com",
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
		title: "Firebase Realtime Database Management API",
		version: "v1beta",
		documentation:
			"https://firebase.google.com/docs/reference/rest/database/database-management/rest/",
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
		title: "Firebase Rules API",
		version: "v1",
		documentation: "https://firebase.google.com/docs/storage/security",
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
		title: "Fitness API",
		version: "v1",
		documentation: "https://developers.google.com/fit/rest/v1/get-started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/fitness.activity.read",
				description:
					"Use Google Fit to see and store your physical activity data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.activity.write",
				description: "Add to your Google Fit physical activity data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_glucose.read",
				description:
					"See info about your blood glucose in Google Fit. I consent to Google sharing my blood glucose information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_glucose.write",
				description:
					"Add info about your blood glucose to Google Fit. I consent to Google using my blood glucose information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_pressure.read",
				description:
					"See info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.blood_pressure.write",
				description:
					"Add info about your blood pressure in Google Fit. I consent to Google using my blood pressure information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body.read",
				description: "See info about your body measurements in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body.write",
				description: "Add info about your body measurements to Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.body_temperature.read",
				description:
					"See info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app.",
			},
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
				id: "https://www.googleapis.com/auth/fitness.heart_rate.write",
				description:
					"Add to your heart rate data in Google Fit. I consent to Google using my heart rate information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.location.read",
				description: "See your Google Fit speed and distance data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.location.write",
				description: "Add to your Google Fit location data",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.nutrition.read",
				description: "See info about your nutrition in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.nutrition.write",
				description: "Add to info about your nutrition in Google Fit",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
				description:
					"See info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
				description:
					"Add info about your oxygen saturation in Google Fit. I consent to Google using my oxygen saturation information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.reproductive_health.read",
				description:
					"See info about your reproductive health in Google Fit. I consent to Google sharing my reproductive health information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.reproductive_health.write",
				description:
					"Add info about your reproductive health in Google Fit. I consent to Google using my reproductive health information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.sleep.read",
				description:
					"See your sleep data in Google Fit. I consent to Google sharing my sleep information with this app.",
			},
			{
				id: "https://www.googleapis.com/auth/fitness.sleep.write",
				description:
					"Add to your sleep data in Google Fit. I consent to Google using my sleep information with this app.",
			},
		],
	},
	{
		title: "GKE Hub API",
		version: "v2",
		documentation:
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
		title: "GKE On-Prem API",
		version: "v1",
		documentation: "https://cloud.google.com/anthos/clusters/docs/on-prem/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Gmail API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/gmail/api/",
		scopes: [
			{
				id: "https://mail.google.com/",
				description:
					"Read, compose, send, and permanently delete all your email from Gmail",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.action.compose",
				description:
					"Manage drafts and send emails when you interact with the add-on",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.action",
				description:
					"View your email messages when you interact with the add-on",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.metadata",
				description:
					"View your email message metadata when the add-on is running",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
				description: "View your email messages when the add-on is running",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.compose",
				description: "Manage drafts and send emails",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.insert",
				description: "Add emails into your Gmail mailbox",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.labels",
				description: "See and edit your email labels",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.metadata",
				description:
					"View your email message metadata such as labels and headers, but not the email body",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.modify",
				description: "Read, compose, and send emails from your Gmail account",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.readonly",
				description: "View your email messages and settings",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.send",
				description: "Send email on your behalf",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.settings.basic",
				description:
					"See, edit, create, or change your email settings and filters in Gmail",
			},
			{
				id: "https://www.googleapis.com/auth/gmail.settings.sharing",
				description:
					"Manage your sensitive mail settings, including who can manage your mail",
			},
		],
	},
	{
		title: "Gmail Postmaster Tools API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/gmail/postmaster",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/postmaster.readonly",
				description:
					"See email traffic metrics for the domains you have registered in Gmail Postmaster Tools",
			},
		],
	},
	{
		title: "Google Analytics API",
		version: "v3",
		documentation: "https://developers.google.com/analytics/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/analytics",
				description: "View and manage your Google Analytics data",
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
			{
				id: "https://www.googleapis.com/auth/analytics.provision",
				description:
					"Create a new Google Analytics account along with its default property and view",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.readonly",
				description: "View your Google Analytics data",
			},
			{
				id: "https://www.googleapis.com/auth/analytics.user.deletion",
				description: "Manage Google Analytics user deletion requests",
			},
		],
	},
	{
		title: "Google Analytics Admin API",
		version: "v1beta",
		documentation: "http://code.google.com/apis/analytics/docs/mgmt/home.html",
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
		title: "Google Analytics Data API",
		version: "v1beta",
		documentation:
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
		title: "Google Chat API",
		version: "v1",
		documentation: "https://developers.google.com/hangouts/chat",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/chat.admin.delete",
				description:
					"Delete conversations and spaces owned by your organization and remove access to associated files in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.memberships",
				description:
					"View, add, update and remove members and managers in conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.memberships.readonly",
				description:
					"View members and managers in conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.spaces",
				description:
					"View or edit display name, description, and other metadata for all Google Chat conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.admin.spaces.readonly",
				description:
					"View display name, description, and other metadata for all Google Chat conversations owned by your organization",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.delete",
				description:
					"On their own behalf, apps in Google Chat can delete conversations and spaces and remove access to associated files",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.memberships",
				description:
					"On their own behalf, apps in Google Chat can see, add, update, and remove members from conversations and spaces",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.spaces",
				description:
					"On their own behalf, apps in Google Chat can create conversations and spaces and see or update their metadata (including history settings and access settings)",
			},
			{
				id: "https://www.googleapis.com/auth/chat.app.spaces.create",
				description:
					"On their own behalf, apps in Google Chat can create conversations and spaces",
			},
			{
				id: "https://www.googleapis.com/auth/chat.customemojis",
				description: "View, create, and delete custom emoji in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.customemojis.readonly",
				description: "View custom emoji in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.delete",
				description:
					"Delete conversations and spaces and remove access to associated files in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.import",
				description:
					"Import spaces, messages, and memberships into Google Chat.",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships",
				description:
					"See, add, update, and remove members from conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.memberships.app",
				description:
					"Add and remove itself from conversations and spaces in Google Chat",
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
				id: "https://www.googleapis.com/auth/chat.messages.create",
				description: "Compose and send messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions",
				description:
					"See, add, and delete reactions as well as their reaction content to messages in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.messages.reactions.create",
				description: "Add reactions to messages in Google Chat",
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
				id: "https://www.googleapis.com/auth/chat.spaces.create",
				description: "Create new conversations and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.spaces.readonly",
				description: "View chat and spaces in Google Chat",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.readstate",
				description:
					"View and modify last read time for Google Chat conversations",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.readstate.readonly",
				description: "View last read time for Google Chat conversations",
			},
			{
				id: "https://www.googleapis.com/auth/chat.users.spacesettings",
				description: "Read and update your space settings",
			},
		],
	},
	{
		title: "Google Classroom API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/classroom/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/classroom.addons.student",
				description:
					"See and update its own attachments to posts in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.addons.teacher",
				description:
					"See, create, and update its own attachments to posts in classes you teach in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.announcements",
				description: "View and manage announcements in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.announcements.readonly",
				description: "View announcements in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courses",
				description:
					"See, edit, create, and permanently delete your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courses.readonly",
				description: "View your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.me",
				description:
					"See, create and edit coursework items including assignments, questions, and grades",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
				description: "View your course work and grades in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.students",
				description:
					"Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.coursework.students.readonly",
				description:
					"View course work and grades for students in the Google Classroom classes you teach or administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courseworkmaterials",
				description:
					"See, edit, and create classwork materials in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly",
				description:
					"See all classwork materials for your Google Classroom classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly",
				description: "View your Google Classroom guardians",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.guardianlinks.students",
				description:
					"View and manage guardians for students in your Google Classroom classes",
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
				id: "https://www.googleapis.com/auth/classroom.profile.photos",
				description: "View the profile photos of people in your classes",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.push-notifications",
				description: "Receive notifications about your Google Classroom data",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.rosters",
				description: "Manage your Google Classroom class rosters",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.rosters.readonly",
				description: "View your Google Classroom class rosters",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
				description: "View your course work and grades in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.student-submissions.students.readonly",
				description:
					"View course work and grades for students in the Google Classroom classes you teach or administer",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.topics",
				description: "See, create, and edit topics in Google Classroom",
			},
			{
				id: "https://www.googleapis.com/auth/classroom.topics.readonly",
				description: "View topics in Google Classroom",
			},
		],
	},
	{
		title: "Google Cloud Data Catalog API",
		version: "v1",
		documentation: "https://cloud.google.com/data-catalog/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Google Cloud Memorystore for Redis API",
		version: "v1",
		documentation: "https://cloud.google.com/memorystore/docs/redis/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Google Cloud Support API",
		version: "v2",
		documentation: "https://cloud.google.com/support/docs/apis",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Google Docs API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/docs/",
		scopes: [
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
			{
				id: "https://www.googleapis.com/auth/drive.file",
				description:
					"See, edit, create, and delete only the specific Google Drive files you use with this app",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
		],
	},
	{
		title: "Google Drive API",
		version: "v3",
		documentation: "https://developers.google.com/workspace/drive/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/drive",
				description:
					"See, edit, create, and delete all of your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.appdata",
				description:
					"See, create, and delete its own configuration data in your Google Drive",
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
				id: "https://www.googleapis.com/auth/drive.meet.readonly",
				description:
					"See and download your Google Drive files that were created or edited by Google Meet.",
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
				id: "https://www.googleapis.com/auth/drive.photos.readonly",
				description: "View the photos, videos and albums in your Google Photos",
			},
			{
				id: "https://www.googleapis.com/auth/drive.readonly",
				description: "See and download all your Google Drive files",
			},
			{
				id: "https://www.googleapis.com/auth/drive.scripts",
				description: "Modify your Google Apps Script scripts' behavior",
			},
		],
	},
	{
		title: "Google Forms API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/forms/api",
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
		title: "Google Identity Toolkit API",
		version: "v3",
		documentation: "https://developers.google.com/identity-toolkit/v3/",
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
		title: "Google Keep API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/keep/api",
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
		title: "Google Marketing Platform Admin API",
		version: "v1alpha",
		documentation:
			"https://developers.google.com/analytics/devguides/config/gmp/v1",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/marketingplatformadmin.analytics.read",
				description:
					"View your Google Analytics product account data in GMP home",
			},
			{
				id: "https://www.googleapis.com/auth/marketingplatformadmin.analytics.update",
				description:
					"Manage your Google Analytics product account data in GMP home",
			},
		],
	},
	{
		title: "Google Meet API",
		version: "v2",
		documentation: "https://developers.google.com/workspace/meet/api",
		scopes: [
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
			{
				id: "https://www.googleapis.com/auth/meetings.space.settings",
				description:
					"Edit, and see settings for all of your Google Meet calls.",
			},
		],
	},
	{
		title: "Google OAuth2 API",
		version: "v2",
		documentation: "https://developers.google.com/identity/protocols/oauth2/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/userinfo.email",
				description: "See your primary Google Account email address",
			},
			{
				id: "https://www.googleapis.com/auth/userinfo.profile",
				description:
					"See your personal info, including any personal info you've made publicly available",
			},
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
		],
	},
	{
		title: "Google Play Android Developer API",
		version: "v3",
		documentation: "https://developers.google.com/android-publisher",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		title: "Google Play Custom App Publishing API",
		version: "v1",
		documentation:
			"https://developers.google.com/android/work/play/custom-app-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		title: "Google Play Developer Reporting API",
		version: "v1beta1",
		documentation: "https://developers.google.com/play/developer/reporting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/playdeveloperreporting",
				description:
					"See metrics and data about the apps in your Google Play Developer account",
			},
		],
	},
	{
		title: "Google Play EMM API",
		version: "v1",
		documentation: "https://developers.google.com/android/work/play/emm-api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidenterprise",
				description: "Manage corporate Android devices",
			},
		],
	},
	{
		title: "Google Play Games Services API",
		version: "v1",
		documentation: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
			{
				id: "https://www.googleapis.com/auth/drive.appdata",
				description:
					"See, create, and delete its own configuration data in your Google Drive",
			},
			{
				id: "https://www.googleapis.com/auth/games",
				description: "Create, edit, and delete your Google Play Games activity",
			},
		],
	},
	{
		title: "Google Play Games Services Management API",
		version: "v1management",
		documentation: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/games",
				description: "Create, edit, and delete your Google Play Games activity",
			},
		],
	},
	{
		title: "Google Play Games Services Publishing API",
		version: "v1configuration",
		documentation: "https://developers.google.com/games/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/androidpublisher",
				description: "View and manage your Google Play Developer account",
			},
		],
	},
	{
		title: "Google Search Console API",
		version: "v1",
		documentation: "https://developers.google.com/webmaster-tools/about",
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
		title: "Google Sheets API",
		version: "v4",
		documentation: "https://developers.google.com/workspace/sheets/",
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
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets.readonly",
				description: "See all your Google Sheets spreadsheets",
			},
		],
	},
	{
		title: "Google Sign-In",
		version: null,
		documentation: "https://developers.google.com/identity/#google-sign-in",
		scopes: [
			{
				id: "email",
				description: "See your primary Google Account email address",
			},
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
			{
				id: "profile",
				description:
					"See your personal info, including any personal info you've made publicly available",
			},
		],
	},
	{
		title: "Google Site Verification API",
		version: "v1",
		documentation: "https://developers.google.com/site-verification/",
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
		title: "Google Slides API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/slides/",
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
				id: "https://www.googleapis.com/auth/presentations",
				description:
					"See, edit, create, and delete all your Google Slides presentations",
			},
			{
				id: "https://www.googleapis.com/auth/presentations.readonly",
				description: "See all your Google Slides presentations",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets",
				description:
					"See, edit, create, and delete all your Google Sheets spreadsheets",
			},
			{
				id: "https://www.googleapis.com/auth/spreadsheets.readonly",
				description: "See all your Google Sheets spreadsheets",
			},
		],
	},
	{
		title: "Google Tasks API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/tasks/",
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
		title: "Google Vault API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/vault",
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
		title: "Google Workspace Alert Center API",
		version: "v1beta1",
		documentation: "https://developers.google.com/workspace/admin/alertcenter/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.alerts",
				description:
					"See and delete your domain's G Suite alerts, and send alert feedback",
			},
		],
	},
	{
		title: "Google Workspace Events API",
		version: "v1",
		documentation: "https://developers.google.com/workspace/events",
		scopes: [
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
		title: "Google Workspace Reseller API",
		version: "v1",
		documentation: "https://developers.google.com/google-apps/reseller/",
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
		title: "Groups Migration API",
		version: "v1",
		documentation:
			"https://developers.google.com/google-apps/groups-migration/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.groups.migration",
				description: "Upload messages to any Google group in your domain",
			},
		],
	},
	{
		title: "Groups Settings API",
		version: "v1",
		documentation:
			"https://developers.google.com/google-apps/groups-settings/get_started",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/apps.groups.settings",
				description: "View and manage the settings of a G Suite group",
			},
		],
	},
	{
		title: "IAM Service Account Credentials API",
		version: "v1",
		documentation:
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
		title: "Identity and Access Management (IAM) API",
		version: "v2",
		documentation: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Infrastructure Manager API",
		version: "v1",
		documentation: "https://cloud.google.com/infrastructure-manager/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "KMS Inventory API",
		version: "v1",
		documentation: "https://cloud.google.com/kms/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Kubernetes Engine API",
		version: "v1",
		documentation: "https://cloud.google.com/kubernetes-engine/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Library Agent API",
		version: "v1",
		documentation: "https://cloud.google.com/docs/quota",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Local Services API",
		version: "v1",
		documentation: "https://ads.google.com/local-services-ads/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/adwords",
				description:
					"See, edit, create, and delete your Google Ads accounts and data.",
			},
		],
	},
	{
		title: "Looker (Google Cloud core) API",
		version: "v1",
		documentation: "https://cloud.google.com/looker/docs/reference/rest/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Managed Service for Apache Kafka API",
		version: "v1",
		documentation:
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
		title: "Managed Service for Microsoft Active Directory API",
		version: "v1",
		documentation: "https://cloud.google.com/managed-microsoft-ad/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Manufacturer Center API",
		version: "v1",
		documentation: "https://developers.google.com/manufacturers/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/manufacturercenter",
				description:
					"Manage your product listings for Google Manufacturer Center",
			},
		],
	},
	{
		title: "Merchant API",
		version: "reviews_v1beta",
		documentation: "https://developers.google.com/merchant/api",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/content",
				description:
					"Manage your product listings and accounts for Google Shopping",
			},
		],
	},
	{
		title: "Migration Center API",
		version: "v1",
		documentation: "https://cloud.google.com/migration-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "NetApp API",
		version: "v1",
		documentation: "https://cloud.google.com/netapp/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Network Connectivity API",
		version: "v1",
		documentation:
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
		title: "Network Management API",
		version: "v1",
		documentation: "https://cloud.google.com/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Network Security API",
		version: "v1",
		documentation: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Network Services API",
		version: "v1",
		documentation: "https://cloud.google.com/networking",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Notebooks API",
		version: "v2",
		documentation: "https://cloud.google.com/notebooks/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "OS Config API",
		version: "v2",
		documentation: "https://cloud.google.com/compute/docs/osconfig/rest",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Observability API",
		version: "v1",
		documentation: "https://cloud.google.com/stackdriver/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "On-Demand Scanning API",
		version: "v1",
		documentation:
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
		title: "OpenID Connect",
		version: 1.0,
		documentation:
			"https://developers.google.com/identity/protocols/oauth2/openid-connect",
		scopes: [
			{
				id: "email",
				description: "See your primary Google Account email address",
			},
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
			{
				id: "profile",
				description:
					"See your personal info, including any personal info you've made publicly available",
			},
		],
	},
	{
		title: "Oracle Database@Google Cloud API",
		version: "v1",
		documentation: "https://cloud.google.com/oracle/database/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Organization Policy API",
		version: "v2",
		documentation:
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
		title: "PageSpeed Insights API",
		version: "v5",
		documentation: "https://developers.google.com/speed/docs/insights/v5/about",
		scopes: [
			{
				id: "openid",
				description: "Associate you with your personal info on Google",
			},
		],
	},
	{
		title: "Parallelstore API",
		version: "v1",
		documentation: "https://cloud.google.com/parallelstore",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Payments Reseller Subscription API",
		version: "v1",
		documentation:
			"https://developers.google.com/payments/reseller/subscription/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sdm.service",
				description: "See and/or control the devices that you selected",
			},
		],
	},
	{
		title: "People API",
		version: "v1",
		documentation: "https://developers.google.com/people/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/contacts",
				description:
					"See, edit, download, and permanently delete your contacts",
			},
			{
				id: "https://www.googleapis.com/auth/contacts.other.readonly",
				description:
					'See and download contact info automatically saved in your "Other contacts"',
			},
			{
				id: "https://www.googleapis.com/auth/contacts.readonly",
				description: "See and download your contacts",
			},
			{
				id: "https://www.googleapis.com/auth/directory.readonly",
				description: "See and download your organization's GSuite directory",
			},
			{
				id: "https://www.googleapis.com/auth/user.addresses.read",
				description: "View your street addresses",
			},
			{
				id: "https://www.googleapis.com/auth/user.birthday.read",
				description: "See and download your exact date of birth",
			},
			{
				id: "https://www.googleapis.com/auth/user.emails.read",
				description:
					"See and download all of your Google Account email addresses",
			},
			{
				id: "https://www.googleapis.com/auth/user.gender.read",
				description: "See your gender",
			},
			{
				id: "https://www.googleapis.com/auth/user.organization.read",
				description: "See your education, work history and org info",
			},
			{
				id: "https://www.googleapis.com/auth/user.phonenumbers.read",
				description: "See and download your personal phone numbers",
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
		title: "Photos Library API",
		version: "v1",
		documentation: "https://developers.google.com/photos/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/photoslibrary",
				description:
					"See, upload, and organize items in your Google Photos library",
			},
			{
				id: "https://www.googleapis.com/auth/photoslibrary.appendonly",
				description: "Add to your Google Photos library",
			},
			{
				id: "https://www.googleapis.com/auth/photoslibrary.edit.appcreateddata",
				description:
					"Edit the info in your photos, videos, and albums created within this app, including titles, descriptions, and covers",
			},
			{
				id: "https://www.googleapis.com/auth/photoslibrary.readonly",
				description: "View your Google Photos library",
			},
			{
				id: "https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata",
				description: "Manage photos added by this app",
			},
			{
				id: "https://www.googleapis.com/auth/photoslibrary.sharing",
				description: "Manage and add to shared albums on your behalf",
			},
		],
	},
	{
		title: "Places API (New)",
		version: "v1",
		documentation:
			"https://mapsplatform.google.com/maps-products/#places-section",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Places Aggregate API",
		version: "v1",
		documentation:
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
		title: "Policy Analyzer API",
		version: "v1",
		documentation: "https://www.google.com",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Policy Simulator API",
		version: "v1",
		documentation: "https://cloud.google.com/iam/docs/simulating-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Policy Troubleshooter API",
		version: "v1",
		documentation: "https://cloud.google.com/iam/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Pollen API",
		version: "v1",
		documentation: "https://developers.google.com/maps/documentation/pollen",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Pub/Sub Lite API",
		version: "v1",
		documentation: "https://cloud.google.com/pubsub/lite/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Public Certificate Authority API",
		version: "v1",
		documentation: "https://cloud.google.com/public-certificate-authority/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Rapid Migration Assessment API",
		version: "v1",
		documentation: "https://cloud.google.com/migration-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Real-time Bidding API",
		version: "v1",
		documentation:
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
		title: "Recommendations AI (Beta)",
		version: "v1beta1",
		documentation: "https://cloud.google.com/recommendations-ai/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Recommender API",
		version: "v1",
		documentation: "https://cloud.google.com/recommender/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "SAS Portal API",
		version: "v1alpha1",
		documentation: "https://developers.google.com/spectrum-access-system/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/sasportal",
				description: "Read, create, update, and delete your SAS Portal data.",
			},
		],
	},
	{
		title: "SAS Portal API (Testing)",
		version: "v1alpha1",
		documentation: "https://developers.google.com/spectrum-access-system/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
			{
				id: "https://www.googleapis.com/auth/sasportal",
				description: "Read, create, update, and delete your SAS Portal data.",
			},
		],
	},
	{
		title: "SaaS Runtime API",
		version: "v1beta1",
		documentation: "https://cloud.google.com/saas-runtime/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Search Ads 360 API",
		version: "v2",
		documentation: "https://developers.google.com/search-ads",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclicksearch",
				description:
					"View and manage your advertising data in DoubleClick Search",
			},
		],
	},
	{
		title: "Search Ads 360 Reporting API",
		version: "v0",
		documentation: "https://developers.google.com/search-ads/reporting",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/doubleclicksearch",
				description:
					"View and manage your advertising data in DoubleClick Search",
			},
		],
	},
	{
		title: "Secret Manager API",
		version: "v1",
		documentation: "https://cloud.google.com/secret-manager/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Security Command Center API",
		version: "v1",
		documentation: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Security Posture API",
		version: "v1",
		documentation: "https://cloud.google.com/security-command-center",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Sensitive Data Protection (DLP)",
		version: "v2",
		documentation: "https://cloud.google.com/sensitive-data-protection/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Serverless VPC Access API",
		version: "v1",
		documentation:
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
		title: "Service Consumer Management API",
		version: "v1",
		documentation:
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
		title: "Service Control API",
		version: "v2",
		documentation: "https://cloud.google.com/service-control/",
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
		title: "Service Directory API",
		version: "v1",
		documentation: "https://cloud.google.com/service-directory",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Service Management API",
		version: "v1",
		documentation: "https://cloud.google.com/service-management/",
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
		title: "Service Networking API",
		version: "v1",
		documentation:
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
		title: "Service Usage API",
		version: "v1",
		documentation: "https://cloud.google.com/service-usage/",
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
		title: "Smart Device Management API",
		version: "v1",
		documentation: "https://developers.google.com/nest/device-access",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/sdm.service",
				description: "See and/or control the devices that you selected",
			},
		],
	},
	{
		title: "Solar API",
		version: "v1",
		documentation: "https://developers.google.com/maps/documentation/solar",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Storage Batch Operations API",
		version: "v1",
		documentation:
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
		title: "Storage Transfer API",
		version: "v1",
		documentation: "https://cloud.google.com/storage-transfer/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Street View Publish API",
		version: "v1",
		documentation: "https://developers.google.com/streetview/publish/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/streetviewpublish",
				description: "Publish and manage your 360 photos on Google Street View",
			},
		],
	},
	{
		title: "Tag Manager API",
		version: "v2",
		documentation: "https://developers.google.com/tag-manager",
		scopes: [
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
				id: "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
				description: "Manage your Google Tag Manager container versions",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.accounts",
				description: "View and manage your Google Tag Manager accounts",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.manage.users",
				description:
					"Manage user permissions of your Google Tag Manager account and container",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.publish",
				description: "Publish your Google Tag Manager container versions",
			},
			{
				id: "https://www.googleapis.com/auth/tagmanager.readonly",
				description:
					"View your Google Tag Manager container and its subcomponents",
			},
		],
	},
	{
		title: "Traffic Director API",
		version: "v3",
		documentation: "https://cloud.google.com/traffic-director",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Transcoder API",
		version: "v1",
		documentation: "https://cloud.google.com/transcoder/docs/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "VM Migration API",
		version: "v1",
		documentation: "https://cloud.google.com/migrate/virtual-machines",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "VMware Engine API",
		version: "v1",
		documentation: "https://cloud.google.com/solutions/vmware-as-a-service",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Vertex AI API",
		version: "v1",
		documentation: "https://cloud.google.com/vertex-ai/",
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
		title: "Vertex AI Search for commerce API",
		version: "v2",
		documentation: "https://cloud.google.com/recommendations",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Web Risk API",
		version: "v1",
		documentation: "https://cloud.google.com/web-risk/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Web Search Indexing API",
		version: "v3",
		documentation: "https://developers.google.com/search/apis/indexing-api/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/indexing",
				description: "Submit data to Google for indexing",
			},
		],
	},
	{
		title: "Web Security Scanner API",
		version: "v1",
		documentation:
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
		title: "Workflow Executions API",
		version: "v1",
		documentation: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Workflows API",
		version: "v1",
		documentation: "https://cloud.google.com/workflows",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "Workload Manager API",
		version: "v1",
		documentation: "https://cloud.google.com/workload-manager/docs",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
	{
		title: "YouTube Analytics API",
		version: "v2",
		documentation: "https://developers.google.com/youtube/analytics",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/youtube",
				description: "Manage your YouTube account",
			},
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
		title: "YouTube Data API v3",
		version: "v3",
		documentation: "https://developers.google.com/youtube/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/youtube",
				description: "Manage your YouTube account",
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
				id: "https://www.googleapis.com/auth/youtube.readonly",
				description: "View your YouTube account",
			},
			{
				id: "https://www.googleapis.com/auth/youtube.upload",
				description: "Manage your YouTube videos",
			},
			{
				id: "https://www.googleapis.com/auth/youtubepartner",
				description:
					"View and manage your assets and associated content on YouTube",
			},
			{
				id: "https://www.googleapis.com/auth/youtubepartner-channel-audit",
				description:
					"View private information of your YouTube channel relevant during the audit process with a YouTube partner",
			},
		],
	},
	{
		title: "YouTube Reporting API",
		version: "v1",
		documentation:
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
	{
		title: "reCAPTCHA Enterprise API",
		version: "v1",
		documentation: "https://cloud.google.com/recaptcha-enterprise/",
		scopes: [
			{
				id: "https://www.googleapis.com/auth/cloud-platform",
				description:
					"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
			},
		],
	},
];
