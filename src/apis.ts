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
		version: "v1",
		title: "Google Chat API",
		description:
			"The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.",
		discoveryRestUrl: "https://chat.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/hangouts/chat",
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
				id: "https://www.googleapis.com/auth/chat.bot",
				description:
					"Private Service: https://www.googleapis.com/auth/chat.bot",
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
		version: "v1",
		title: "Google Classroom API",
		description:
			"Manages classes, rosters, and invitations in Google Classroom.",
		discoveryRestUrl:
			"https://classroom.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/classroom",
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
		title: "Google Docs API",
		description: "Reads and writes Google Docs documents.",
		discoveryRestUrl: "https://docs.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/docs/",
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
		version: "v2",
		title: "Drive Labels API",
		description: "An API for managing Drive Labels",
		discoveryRestUrl:
			"https://drivelabels.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/workspace/drive/labels",
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
		title: "Gmail API",
		description:
			"The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.",
		discoveryRestUrl: "https://gmail.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/gmail/api/",
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
		version: "v2",
		title: "Google Meet API",
		description: "Create and manage meetings in Google Meet.",
		discoveryRestUrl: "https://meet.googleapis.com/$discovery/rest?version=v2",
		documentationLink: "https://developers.google.com/workspace/meet/api",
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
		version: "v1",
		title: "Apps Script API",
		description: "Manages and executes Google Apps Script projects.",
		discoveryRestUrl:
			"https://script.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/apps-script/api/",
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
		version: "v4",
		title: "Google Sheets API",
		description: "Reads and writes Google Sheets.",
		discoveryRestUrl:
			"https://sheets.googleapis.com/$discovery/rest?version=v4",
		documentationLink: "https://developers.google.com/workspace/sheets/",
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
		version: "v1",
		title: "Google Slides API",
		description: "Reads and writes Google Slides presentations.",
		discoveryRestUrl:
			"https://slides.googleapis.com/$discovery/rest?version=v1",
		documentationLink: "https://developers.google.com/workspace/slides/",
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
];
