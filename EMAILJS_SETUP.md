# EmailJS form delivery setup

Both the homepage guided enquiry and Contact page form submit to `/api/enquiry`. The server validates the request and sends it to EmailJS; no EmailJS credential is exposed in browser code.

## 1. Connect an email service

In EmailJS, open **Email Services**, connect the mailbox that will deliver the notification, and test it. Configure the notification recipient as `Hello@TaxEnquiryHelp.co.uk`.

## 2. Create the enquiry template

Create one template and use these variables:

- `{{subject}}`
- `{{from_name}}`
- `{{reply_to}}`
- `{{contact_number}}`
- `{{source}}`
- `{{category}}`
- `{{subcategory}}`
- `{{message}}`
- `{{consent}}`
- `{{submitted_at}}`

Suggested subject: `{{subject}}`

Suggested body:

```text
New confidential TaxEnquiryHelp enquiry

Source: {{source}}
Category: {{category}}
Subcategory: {{subcategory}}

Full name: {{from_name}}
Email: {{reply_to}}
Contact number: {{contact_number}}

Details:
{{message}}

Consent to contact: {{consent}}
Submitted: {{submitted_at}}
```

Set the template Reply-To field to `{{reply_to}}`.

## 3. Add deployment environment variables

Add these variables in Netlify under **Site configuration → Environment variables**:

```text
EMAILJS_SERVICE_ID
EMAILJS_TEMPLATE_ID
EMAILJS_PUBLIC_KEY
EMAILJS_PRIVATE_KEY
```

Use the real values from the EmailJS dashboard. Do not commit them to GitHub. Trigger a fresh deployment after saving them.

## 4. Protect and test

- Add the production website domain to EmailJS's allowed origins.
- Enable EmailJS CAPTCHA protection before launch if available for the account.
- Submit one homepage enquiry and one Contact page enquiry.
- Confirm receipt at `Hello@TaxEnquiryHelp.co.uk`, verify Reply-To, and check the EmailJS history log.
- Test a rejected request and confirm the form shows an error rather than a false success.

The initial form deliberately tells users not to include a UTR, National Insurance number or sensitive documents.
