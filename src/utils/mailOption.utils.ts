interface MailOption {
  from: string;
  to: string;
  subject: string;
  html: string;
}
const mailOption = (to: string, subject: string, html: string): MailOption => {
  const option: MailOption = {
    from: process.env.SMTP_USER as string,
    to,
    subject,
    html,
  };
  return option;
};

export default mailOption;
