## Fathom Analytics Panel

The Fathom Analytics extension allows you to embed the Fathom Analytics page directly into your Directus dashboard panel.

### **Configuration Options**

**Site ID** (* required)

The Site ID is the unique identifier for your Fathom Analytics account.

The URL can be found in your Fathom Analytics settings for your domain.

**Password**

The password is used to authenticate the link when accessing the Fathom Analytics panel.

The password can be found in your Fathom Analytics settings for your domain.

---

## Installation & Setup

To install the extension, take a look at the [Official Guide](https://docs.directus.io/extensions/installing-extensions.html).

To enable embedding, you’ll need to update your CSP directives within your [Directus Config](https://docs.directus.io/self-hosted/config-options.html#security) as follows:

```
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC='https://*.usefathom.com, https://usefathom.com'
CONTENT_SECURITY_POLICY_DIRECTIVES__SCRIPT_SRC="array:'self', usefathom.com 'unsafe-eval' 'unsafe-inline'"
```
Note: Chrome is the recommended browser for using this extension. You may encounter issues with other browsers.