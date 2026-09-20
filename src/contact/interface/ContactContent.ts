export interface ContactContent {
  title: string;
  office: {
    title: string;
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl: string;
  };
  form: {
    title: string;
    lastName: string;
    firstName: string;
    mail: string;
    phone: string;
    subject: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
  errors: {
    lastName: string;
    firstName: string;
    mailOrPhone: string;
    mail: string;
    phone: string;
    subject: string;
    message: string;
  };
  feedback: { success: string; error: string };
}
