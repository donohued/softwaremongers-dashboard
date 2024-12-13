export { SubmissionTable, SubmissionTableReadable};

enum SubmissionTable {
  AlbumComments = "album-comments",
  AlienContactForm = "alien-contact-form",
  Confessions = "confessions",
  MissingPersons = "missing_persons_reports",
  OldScroteFeedback = "old_scrote_feedback",
  PrayerRequests = "prayer_requests",
  Skidmarks = "skidmarks",
}

enum SubmissionTableReadable {
  AlbumComments = "Crab Shady Album Comments",
  AlienContactForm = "Alien Contact Form",
  Confessions = "Confessions",
  MissingPersons = "Missing Persons Reports",
  OldScroteFeedback = "Old Scrote Feedback",
  PrayerRequest = "Prayer Requests",
  Skidmark = "Skidmarks",
}

type AlbumComments = {
  id: string;
  date: string;
  name: string;
  comment: string;
  ip: string;
  pending: boolean;
};

type AlienContactForm = {
  id: string;
  date: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
};

type Confessions = {
  id: string;
  date: string;
  name: string;
  confession: string;
  email: string;
  ip: string;
};
