# docs
docusaurus Home

### DNS

To customize the URL as `docs.fair.pm`

**On Github:**

1. Click on SETTINGS for this repository
2. Click on **Pages** on the left hand menu
3. Under **Custom Domain**, put in `To customize the URL as `docs.fair.pm`
.fair.pm` and click save
4. Update the `/docs/docusaurus.config.js` file to use `url: 'https://docs.fair.pm',`
5. Push the code to production

**On AWS Route 53**

1. Log in to AWS: Open the AWS Management Console and navigate to the Route 53 service.
2. Select your Hosted Zone: Click on Hosted zones and select the domain fair.pm.
3. Create a new record: Click the Create record button.
4. Configure the record:

- Record name: Enter `docs.`
- Record type: Choose `CNAME` - Routes traffic to another domain name and to some AWS resources.
- Value: Enter `fairpm.github.io`. Important: Do **not** include the `/docs` part of the URL. The CNAME record should point to the root GitHub Pages domain.
- TTL (Seconds): You can leave this at the default setting.

5. Save the record: Click the Create records button.

After you've completed these steps, it may take some time for the DNS changes to propagate, though it is often quite fast.
